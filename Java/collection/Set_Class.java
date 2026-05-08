package com.collection;
import java.util.*;
public class Set_Class {

	 public void set_example()
	 {
		 HashSet<Integer> data = new LinkedHashSet<Integer>();   
		    
	        data.add(3);   
	        data.add(1);   
	        data.add(6);   
	        data.add(4);
	        data.add(10);
	        data.add(6);
	        ;
	    
	        System.out.println(data);  
	 }
	    public static void main(String[] args)   
	    {   
	        // creating LinkedHashSet using the Set  
	    	Set_Class se1=new Set_Class();
	    	se1.set_example();
	    }   
	}   

