package com.collection;
import java.util.*;
public class Student
{
    public static void main(String[] args) 
    {
      	// List of Students
        List<Comparator_Example> students = new ArrayList<>();
        
      	// Add Elements in List
      	students.add(new Comparator_Example(111, "Hitesh"));
        students.add(new Comparator_Example(131, "Ravi"));
        students.add(new Comparator_Example(121, "Saloni"));
        students.add(new Comparator_Example(101, "Gaurav"));
        students.add(new Comparator_Example(102, "Jayant"));

        // Sort students by roll number using SortbyRoll comparator
        Collections.sort(students, new SortbyRoll());

      	System.out.println("Sorted by Roll Number ");

        // Iterating over entries to print them
        for (int i = 0; i < students.size(); i++)
            System.out.println(students.get(i));
      	
    }
}