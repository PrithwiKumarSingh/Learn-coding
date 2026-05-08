package com.collection;
import java.util.HashMap;

public class HashMap_Example {
	 
	public void hash()
	{
 // Create a HashMap object called people
HashMap<String, Integer> people = new HashMap<String, Integer>();

	    // Add keys and values (Name, Age)
	    people.put("John", 32);
	    people.put("Steve", 30);
	    people.put("Angel", 33);
	    people.put("Lewis", null);
	    people.put("Tom",null);
	    people.put("Jacob", 2);
	    people.put("Harry", 45);
	    people.put("Bhavna", 19);
	    people.put("Steve", 66);
	    people.put("Garry", 55);

	 for (String i : people.keySet()) 
	 {
	System.out.println("key: " + i + " value: " + people.get(i));
	    }
	 System.out.print(people.get("Bhavna"));
	  }

  public static void main(String[] args) {
	  HashMap_Example he1=new HashMap_Example();
	  he1.hash();
  }

    }







