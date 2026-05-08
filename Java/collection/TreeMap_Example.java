package com.collection;

import java.util.Map;
import java.util.TreeMap;

public class TreeMap_Example 
 {
 public void example()
 {
	 Map<String, Integer> treeMap = new TreeMap<>();
    //overrides the value of the item
     // Adding elements to the tree map
     treeMap.put("A", 1); // O(log n)
     treeMap.put("C", 3); // O(log n)
     treeMap.put("B", 2); // O(log n)
     treeMap.put("D", 5); // O(log n)
     treeMap.put("A", 2); // O(log n)

     // Getting values from the tree map
     int valueA = treeMap.get("A"); // O(log n)
     System.out.println("Value of A: " + valueA);

     // Removing elements from the tree map
     treeMap.remove("B"); // O(log n)

     // Iterating over the elements of the tree map
     for (String key : treeMap.keySet()) 
     { // O(n)
   System.out.println("Key: " + key + ", Value: "+ treeMap.get(key)); // O(log n) for each
                                  // get operation
     }
 }
 
	public static void main(String[] args)
    {
		TreeMap_Example te1=new TreeMap_Example();
		te1.example();
        }
 }
