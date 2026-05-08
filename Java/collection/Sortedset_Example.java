package com.collection;
import java.util.*;

public class Sortedset_Example {
    
    public void sortedset_example() {
        SortedSet<Integer> data = new TreeSet<Integer>();

        data.add(3);
        data.add(1);
        data.add(2);
        data.add(2);
        data.add(5);
        data.add(4);
        data.add(9);
        data.add(7);

                  System.out.println(data);
    }
    

    public static void main(String[] args) {
        Sortedset_Example se1 = new Sortedset_Example();
        se1.sortedset_example();
    }
}
