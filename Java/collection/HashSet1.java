package com.collection;

import java.util.*;  
class HashSet1 
   {
	public void hash()
	{
		//Creating HashSet and adding elements  
	    HashSet<Integer> set=new HashSet();  
	           set.add(88); 
	           set.add(88);
	           set.add(67);
	           set.add(4);
	           set.add(100);
	           set.add(12);   
	           set.add(90);
	           set.add(55);
	           set.add(5);
	           set.add(100);
	           set.remove(4);
	           System.out.println(set);
	           
	           Iterator<Integer> i=set.iterator();  
	           while(i.hasNext())  
	           {  
	           System.out.println(i.next());  
	           }  
	 }
 public static void main(String args[]){  
	 HashSet1 hs1=new HashSet1();
	 hs1.hash();
 }	 
}  