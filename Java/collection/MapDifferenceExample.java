package com.collection;

import java.util.*;

public class MapDifferenceExample {
    public static void main(String[] args) {
        // HashMap (Unordered)
        HashMap<Integer, String> hashMap = new HashMap<>();
        hashMap.put(34534, "Apple");
        hashMap.put(135, "Banana");
        hashMap.put(24, "Cherry");
        System.out.println("HashMap: " + hashMap);

        // TreeMap (Sorted by key)
        TreeMap<Integer, String> treeMap = new TreeMap<>();
        treeMap.put(34534, "Apple");
        treeMap.put(135452, "Banana");
        treeMap.put(24, "Cherry");
        System.out.println("TreeMap: " + treeMap);
    }
}









