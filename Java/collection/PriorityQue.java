package com.collection;

import java.util.PriorityQueue;

public class PriorityQue {
    public static void main(String[] args) {
        // 1. Initialize a PriorityQueue (Default: Min-Heap)
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        // 2. Add elements using add() or offer()
        pq.add(30);
        pq.add(10);
        pq.add(20);
        pq.offer(25);
        pq.add(90);
        

        // 3. View the head element without removing it
        System.out.println("Head of the queue: " + pq.peek()); // Output: 5

        // 4. Remove and print elements based on priority
        System.out.println("Processing elements in priority order:");
        while (!pq.isEmpty()) {
            // poll() retrieves and removes the highest priority (smallest) element
            System.out.print(pq.poll() + " "); 
        }
        // Final Output: 5 10 20 30
    }
}
