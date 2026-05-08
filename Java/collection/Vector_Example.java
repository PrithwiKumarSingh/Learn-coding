package com.collection;

import java.util.Vector;

public class Vector_Example
{
    public static void main(String[] args) 
    {
        // Create a new vector
        Vector<Integer> v = new Vector<>(3,2);

        // Add elements to the vector
        v.addElement(1);
        v.addElement(5);
        v.addElement(2);
        v.addElement(3);
        v.addElement(2);
        v.addElement(9);
        v.addElement(21);

        // Insert an element at index 1
        v.insertElementAt(0, 1);

        // Remove the element at index 2
        v.removeElementAt(2);

        // Print the elements of the vector
        for (int i : v) {
            System.out.println(i);
        }
    }
}