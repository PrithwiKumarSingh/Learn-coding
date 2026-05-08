package com.collection;

import java.util.*;

public class HashMap2 {
    public static void main(String[] args) {
        // Create a HashMap with Integer keys and String values
        HashMap<Integer, String> map = new HashMap<>();

        // Adding key-value pairs
        map.put(1, "Java");
        map.put(7, "Pascal");
        map.put(6, "Fortran");
        map.put(9, "ASP.net");
        map.put(8, "React.JS");
        map.put(2, "Python");
        map.put(3, "C++");
        map.put(4, "JavaScript");
        map.put(5, "GO");
        map.remove(4);

        // Display the entire map
        System.out.println("HashMap elements: " + map);

        // Access value using a key
        System.out.println("Value for key 2: " + map.get(2));

        // Iterating using keySet
        System.out.println("\nIterating using keySet:");
        for (Integer key : map.keySet()) {
            System.out.println("Key: " + key + ", Value: " + map.get(key));
        }

        // Iterating using entrySet
        System.out.println("\nIterating using entrySet:");
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " => " + entry.getValue());
        }

        // Removing a key
        map.remove(3);
        System.out.println("\nAfter removing key 3: " + map);

        // Checking existence
        System.out.println("Contains key 4? " + map.containsKey(4));
        System.out.println("Contains value 'Java'? " + map.containsValue("Java"));
    }
}
