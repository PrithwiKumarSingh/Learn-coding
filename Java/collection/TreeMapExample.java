package com.collection;
import java.util.*;

public class TreeMapExample {
    public static void main(String[] args) {
        // Creating a TreeMap
        TreeMap<Integer, String> map = new TreeMap<>();

        // Adding key-value pairs
        map.put(3, "Apple");
        map.put(4, "Cherry");
        map.put(1, "Banana");
        map.put(4, "Grapes");
        map.put(2, "Mango");
       
        // Displaying the TreeMap
        System.out.println("TreeMap elements (sorted by key): " + map);

        // Accessing a value
        System.out.println("Value for key 2: " + map.get(2));

        // Iterating through entries
        System.out.println("\nIterating TreeMap:");
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " => " + entry.getValue());
        }

        // First and Last Key
        System.out.println("\nFirst Key: " + map.firstKey());
        System.out.println("Last Key: " + map.lastKey());
    }
}

