package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.entity;
import com.example.demo.service.Ser;

@RestController
@CrossOrigin
public class Controller {
	@Autowired
	
	private Ser Carserv;
	
	@PostMapping("/add")
	public entity addPark(@RequestBody entity obj)
	{
		return Carserv.addparking(obj);
	}
		
	@GetMapping("/show")
	public List<entity> getParking()
	{
		List<entity>arr=new ArrayList<>();
		arr=Carserv.getAllParking();
		return arr;
	}
	
	@DeleteMapping("/del/{num_plate}")
    public String delChild(@PathVariable int num_plate) {
		Carserv.delete(num_plate);
    	return "Deleted Successfully!!!";
    }

	
	@PutMapping("/update/{num_plate}")
	public String update(@PathVariable int num_plate,@RequestBody entity obj)
	{
		Carserv.update(num_plate, obj);
		return "Updated Successfully!!!";
	}

}
