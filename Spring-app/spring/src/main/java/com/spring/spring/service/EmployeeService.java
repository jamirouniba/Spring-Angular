package com.spring.spring.service;

import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.spring.spring.Exception.ResourceNotFound;
import com.spring.spring.Model.Employee;
import com.spring.spring.Repository.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // Get all employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Create employee
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // Get employee by id
    public Optional<Employee> getEmployee(Long id) {
        return employeeRepository.findById(id);
    }

    // Update employee
    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Optional<Employee> existingEmployee = getEmployee(id);
        if (existingEmployee.isPresent()) {
            Employee employee = existingEmployee.get();
            employee.setFirstName(employeeDetails.getFirstName());
            employee.setLastName(employeeDetails.getLastName());
            employee.setEmail(employeeDetails.getEmail());
            return employeeRepository.save(employee);
        }
        throw new ResourceNotFound("No employee found with that id");
    }

    // Delete employee
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}