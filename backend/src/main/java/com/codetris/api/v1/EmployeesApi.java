package com.codetris.api.v1;

import com.codetris.dto.response.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foos")

public class EmployeesApi {
    @RequestBody Employee employee;

    @GetMapping
    public List<Employee> findAll() {
        return ("Hello Word");
    }

    @GetMapping(value = "/{id}")
    public Employee findById(@PathVariable("id") Long id) {
        return ("Hello Word");
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long create(@RequestBody Employee employee) {
        return ("Hello Word");
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable( "id" ) Long id, @RequestBody Employee employee) {
        return ("Hello Word");
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        return ("Hello Word");
    }

}
