#include <stdio.h>
#include <string.h>

#define MAX 100

struct Customer {
    int id;
    char name[50];
    int units;
    float bill;
};

struct Customer customers[MAX];
int count = 0;

float calculateBill(int units) {
    if (units <= 100)
        return units * 1.0;
    else if (units <= 200)
        return 100 * 1.0 + (units - 100) * 2.0;
    else
        return 100 * 1.0 + 100 * 2.0 + (units - 200) * 3.0;
}

void saveToFile() {
    FILE *fp = fopen("/home/prithwi-kushwaha/Desktop/DSA&OS Project/DSA/customers.txt", "w");

    if (fp == NULL) {
        printf("❌ File error while saving!\n");
        return;
    }

    for (int i = 0; i < count; i++) {
        fprintf(fp, "%d %s %d %.2f\n",
                customers[i].id,
                customers[i].name,
                customers[i].units,
                customers[i].bill);
    }

    fclose(fp);
}


void loadFromFile() {
    FILE *fp = fopen("/home/prithwi-kushwaha/Desktop/DSA&OS Project/DSA/customers.txt", "r");

    if (fp == NULL) return; 

    while (fscanf(fp, "%d %s %d %f",
                  &customers[count].id,
                  customers[count].name,
                  &customers[count].units,
                  &customers[count].bill) != EOF) {
        count++;
    }

    fclose(fp);
}


void addCustomer() {

    int id, units;

    printf("Enter ID: ");
    if (scanf("%d", &id) != 1) {
        printf("❌ Invalid ID\n");
        while(getchar() != '\n');
        return;
    }

    printf("Enter Units: ");
    if (scanf("%d", &units) != 1 || units < 0) {
        printf("❌ Invalid units\n");
        while(getchar() != '\n');
        return;
    }


    for (int i = 0; i < count; i++) {
        if (customers[i].id == id) {
            printf("⚠️ Customer already exists!\n");
            printf("Previous Units: %d\n", customers[i].units);

            int updatedUnits = customers[i].units + units;

            if (updatedUnits < 0) {
                printf("❌ Error: Units cannot be negative!\n");
                return;
            }

            customers[i].units = updatedUnits;
            customers[i].bill = calculateBill(updatedUnits);

            saveToFile();

            printf("✅ Units updated after subtraction!\n");
            saveToFile();

            printf("✅ Customer updated successfully!\n");
            return;
        }
    }


    if (count >= MAX) {
        printf("❌ Customer limit reached!\n");
        return;
    }

    customers[count].id = id;

    printf("Enter Name: ");
    scanf(" %[^\n]", customers[count].name);

    customers[count].units = units;
    customers[count].bill = calculateBill(units);

    count++;

    saveToFile();

    printf("✅ New Customer Added!\n");
}


void displayCustomers() {

    if (count == 0) {
        printf("⚠️ No customers found.\n");
        return;
    }

    printf("\n===== Customer List =====\n");

    for (int i = 0; i < count; i++) {
        printf("\nID: %d", customers[i].id);
        printf("\nName: %s", customers[i].name);
        printf("\nUnits: %d", customers[i].units);
        printf("\nBill: %.2f\n", customers[i].bill);
        printf("------------------------\n");
    }
}


void searchCustomer() {

    if (count == 0) {
        printf("⚠️ No customers available.\n");
        return;
    }

    int id, found = 0;

    printf("Enter ID to search: ");
    if (scanf("%d", &id) != 1) {
        printf("❌ Invalid input\n");
        while(getchar() != '\n');
        return;
    }

    for (int i = 0; i < count; i++) {
        if (customers[i].id == id) {
            printf("\n✅ Customer Found:\n");
            printf("Name: %s\n", customers[i].name);
            printf("Units: %d\n", customers[i].units);
            printf("Bill: %.2f\n", customers[i].bill);
            found = 1;
            break;
        }
    }

    if (!found) {
        printf("❌ Customer Not Found\n");
    }
}


int main() {

    int choice;

    loadFromFile();

    while (1) {
      printf("\n╔══════════════════════════════╗\n");
        printf("║   Electricity Bill System    ║\n");
        printf("╠══════════════════════════════╣\n");
        printf("║  1. Add / Update Customer    ║\n");
        printf("║  2. Display Customers        ║\n");
        printf("║  3. Search Customer          ║\n");
        printf("║  4. Exit                     ║\n");
        printf("╚══════════════════════════════╝\n");

        printf("Enter choice: ");

        if (scanf("%d", &choice) != 1) {
            printf("❌ Invalid choice\n");
            while(getchar() != '\n');
            continue;
        }

        switch (choice) {
            case 1:
                addCustomer();
                break;
            case 2:
                displayCustomers();
                break;
            case 3:
                searchCustomer();
                break;
            case 4:
                printf("Exiting...\n");
                return 0;
            default:
                printf("❌ Invalid Choice\n");
        }
    }
}
