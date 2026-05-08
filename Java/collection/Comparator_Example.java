package com.collection;
import java.util.*;

//Define the Student class
class Comparator_Example {
 int rollno;
 String name;

	// Constructor
 Comparator_Example(int rollno, String name) {
     this.rollno = rollno;
     this.name = name;
 }

	// Method to print Student details in main()
 @Override
 public String toString() {
     return rollno + ": " + name;
 }
}

//Helper class implementing Comparator interface
class SortbyRoll implements Comparator<Comparator_Example> 
{    
	// Compare by roll number in ascending order
 public int compare(Comparator_Example a, Comparator_Example b) {
     return a.rollno - b.rollno;
 }
}
