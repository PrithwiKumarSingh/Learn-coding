package com.collection;

import java.util.LinkedList;
import java.util.Queue;

public class Que {
    public static void main(String[] args) {
        // Create a Queue using LinkedList implementation
        Queue<String> fruitQueue = new LinkedList<>();

        // 1. Add elements (Enqueue)
        fruitQueue.add("Apple");
        fruitQueue.offer("Banana"); // offer() is preferred for capacity-restricted queues
        fruitQueue.add("Cherry");
        fruitQueue.add("Mango");

        System.out.println("Queue: " + fruitQueue);

        // 2. View the head element without removing it
        String head = fruitQueue.peek();
        System.out.println("Head of Queue: " + head);

        // 3. Remove elements (Dequeue)
        String removed = fruitQueue.poll(); // poll() returns null if empty; remove() throws exception
        System.out.println("Removed Element: " + removed);

        // 4. Final state
        System.out.println("Updated Queue: " + fruitQueue);
    }
}
