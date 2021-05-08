package com.codetris.api.v1;

import com.codetris.dto.response.EmployeeResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employees")
public class EmployeesController {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody final EmployeeResponse employeeResponse) {
        System.out.println("Hello Word");
    }

    @GetMapping("/employees/{id}")
    void employeeId(@PathVariable Long id) {
        System.out.println(id);
    }


}
