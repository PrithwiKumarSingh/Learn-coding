package com.collection;

import java.util.Stack;

public class Stack_Example 
{
    public static void main(String[] args) 
    {
        // Create a new stack
        Stack<Integer> s = new Stack<>();

        // Push elements onto the stack --> LIFO
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.push(5);

        // Pop elements from the stack
        while(!s.isEmpty()) {
            System.out.println(s.pop());
        }
    }
}