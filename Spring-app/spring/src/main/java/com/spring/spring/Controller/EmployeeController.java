package com.spring.spring.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.spring.Exception.ResourceNotFound;
import com.spring.spring.Model.Employee;
import com.spring.spring.Repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
    
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    //Get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){return employeeRepository.findAll();}

    //Create employee
    @PostMapping("/employees/create")
    public ResponseEntity<Employee> creatEmployee(@RequestBody Employee employee){
        return ResponseEntity.ok(employeeRepository.save(employee));
    }

    @GetMapping("employees/{id}")
    public ResponseEntity<Optional<Employee>> getEmployee(@PathVariable Long id) {
        return ResponseEntity.ok(employeeRepository.findById(id));
    }

    @PostMapping("employees/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee_details) {
        Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFound("No employee found with that id"));
        employee.setFirstName(employee_details.getFirstName());
        employee.setLastName(employee_details.getFirstName());
        employee.setEmail(employee_details.getEmail());
        
        return ResponseEntity.ok(employeeRepository.save(employee));
    }

    @DeleteMapping("employees/delete/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }


}
