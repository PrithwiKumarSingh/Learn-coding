package com.collection;

import java.util.*;

public class List_Menu_Program 
  {
     List<String> items = new ArrayList<>();
     Scanner sc = new Scanner(System.in);
     
     
     // Function to add item
    public void add_item() {
        System.out.print("Enter item to add: ");
        String item = sc.nextLine();
        items.add(item);
        System.out.println("Item added successfully!");
    } 

    // Function to show items
    public void show_list() 
    {
        if (items.isEmpty()) {
            System.out.println("List is empty.");
        } 
        else
        {
            System.out.println("Items in the list:");
            for (int i = 0; i < items.size(); i++) 
            {
                System.out.println((i + 1) + ". " + items.get(i));
            }
        }
    }

    // Function to remove item
    public void remove_item() 
    {
        if (items.isEmpty()) 
        {
            System.out.println("List is empty. Nothing to remove.");
            return;
        }

        show_list();
        System.out.print("Enter item number to remove: ");
        int index = sc.nextInt();
        sc.nextLine(); // consume leftover newline

        if (index > 0 && index <= items.size()) {
            String removed = items.remove(index - 1);
            System.out.println("Removed: " + removed);
        } else {
            System.out.println("Invalid index.");
        }
    }

    // Function to stop program
    public void stop() {
        System.out.println("Program stopped. Goodbye!");
        System.exit(0);
    }

    // Main driver function
    public static void main(String[] args) {
    	List_Menu_Program lp = new List_Menu_Program();
        Scanner input = new Scanner(System.in);
        System.out.println("Hi!! Welcome to E-Kart");
        System.out.println("Please select your choice from Menu");
        
        while (true) 
        {
            System.out.println("\n--- Menu ---");
            System.out.println("1. Add an item");
            System.out.println("2. Show the item list");
            System.out.println("3. Remove an item");
            System.out.println("4. STOP");
            System.out.print("Enter your choice: ");
            int choice = input.nextInt();
            input.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    lp.add_item();
                    break;
                case 2:
                    lp.show_list();
                    break;
                case 3:
                    lp.remove_item();
                    break;
                case 4:
                    lp.stop();
                    break;
                default:
                    System.out.println("Invalid choice! Try again.");
            }
        }
    }
}
