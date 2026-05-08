package com.collection;
import java.util.LinkedList;

public class Linkedlist_Example {
	// Java program to add elements to a LinkedList
	
	public void AddElements()
	{
		// Creating a LinkedList
        LinkedList<String> list = new LinkedList<String>();

        // Adding elements to the LinkedList using add() method
        list.add("One"); 
        list.add("Two"); //
        list.remove("Two");
        list.add("Three");
        list.add("Three");
        list.add("Four");
        list.add("Five"); 
      list.addFirst("Zero");
      list.addLast("Ten");
       list.set(4, "Apple");
       

        // Printing the LinkedList
        System.out.println(list);
    }
	    // Main driver method
	    public static void main(String[] args) {
	    	Linkedlist_Example l1=new Linkedlist_Example();
	    	l1.AddElements();
	        	}

}
