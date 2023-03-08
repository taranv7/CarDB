package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Car_Det")
public class entity {
	
	@Id
	
	private int num_plate;
	private int Model_year;
	private String Brand;
	private String Model;
	private int price;
	private String rto;
	
	public entity() {
		
	}

	public int getNum_plate() {
		return num_plate;
	}

	public void setNum_plate(int num_plate) {
		this.num_plate = num_plate;
	}

	public int getModel_year() {
		return Model_year;
	}

	public void setModel_year(int model_year) {
		Model_year = model_year;
	}

	public String getBrand() {
		return Brand;
	}

	public void setBrand(String brand) {
		Brand = brand;
	}

	public String getModel() {
		return Model;
	}

	public void setModel(String model) {
		Model = model;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getRto() {
		return rto;
	}

	public void setRto(String rto) {
		this.rto = rto;
	}

	public entity(int num_plate, int model_year, String brand, String model, int price, String rto) {
		super();
		this.num_plate = num_plate;
		Model_year = model_year;
		Brand = brand;
		Model = model;
		this.price = price;
		this.rto = rto;
	};
	
	
	
	
}
