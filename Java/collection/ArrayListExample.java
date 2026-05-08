   package com.collection;

import java.util.*;  
public class ArrayListExample
  {  
	public void arraylist_Example()
	{
	//double n=2;
		ArrayList<Integer> list=new ArrayList<Integer>();//Creating arraylist    
	   
		list.add(35); //0
		list.add(10);
		list.add(10); //1
		list.add(56); //2
		list.add(100); //3
		list.add(78);
		list.add(28);
		list.add(1001);
		//list.remove(3);
		//list.remove(2);
		
		
	     	System.out.println(list);
	}
public static void main(String args[])
     {  
	ArrayListExample al1=new ArrayListExample();
	al1.arraylist_Example();
		}  
   }  