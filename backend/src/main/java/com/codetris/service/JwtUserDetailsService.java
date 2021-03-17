package com.codetris.service;

import com.codetris.configuration.security.UserPrincipal;
import com.codetris.repository.AccountRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private AccountRepository accountRepository;

    public JwtUserDetailsService(final AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return new UserPrincipal(accountRepository.findByLogin(s).orElseThrow(() -> new UsernameNotFoundException(s)));
    }
}
