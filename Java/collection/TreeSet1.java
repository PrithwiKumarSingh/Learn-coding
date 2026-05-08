package com.collection;
import java.util.*;  
public class TreeSet1 
 {
   public void tree()
   {
	   TreeSet<String> al=new TreeSet<String>();  
		  al.add("e");  
		  al.add("a");  
		  al.add("c");  
		  al.add("b");  
		  //Traversing elements
		  
		  Iterator<String> itr=al.iterator();  
		  while(itr.hasNext()){  
		   System.out.println(itr.next());  
		  }  
		}  
      
		 public static void main(String args[]){  
		  //Creating and adding elements  
			 TreeSet1 ts1=new TreeSet1();
			 ts1.tree();
		}  
}
