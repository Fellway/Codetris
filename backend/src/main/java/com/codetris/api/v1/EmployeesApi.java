package com.codetris.api.v1;

import com.codetris.dto.response.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeesApi {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody final Employee employee) {
        System.out.println("Hello Word");
    }
}
