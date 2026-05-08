package com.collection;
import java.util.*;
 
	public class List_Example
	{  
		public void show_list()
		{
			ArrayList<String> list=new ArrayList<String>();  
			 //Adding elements in the List  
			 list.add("Mango");  
			 list.add("Apple");  
			 list.add("Banana");  
			 list.add("Grapes");
			 list.add("Apple");
			 list.remove("Banana");
			 //Iterating the List element using for-each loop  
		System.out.println(list);
			 for(String fruit:list) 
				 System.out.println(fruit);  
			  
			} 	
	public static void main(String args[]){  
		List_Example le1=new List_Example();
		le1.show_list();
	}  
	}
