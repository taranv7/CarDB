package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.entity;
import com.example.demo.repository.Repository;

@Service
public class Ser {
	
	@Autowired
	
	private Repository repo;
	
	public entity addparking(entity obj)
	{
		return repo.save(obj);
	}
	
	
	public List<entity>getAllParking()
	{
		return repo.findAll();
	}
	
	public String delete(int entity)
	{
		repo.deleteById(entity);
		return"deleted";
	}
	
	public entity update(int num_plate,entity obj)
	{
		return repo.saveAndFlush(obj);
	}	

}
