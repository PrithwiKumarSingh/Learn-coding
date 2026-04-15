#include <stdio.h>
#include <string.h>

struct Customer {
    int id;
    char name[50];
    int units;
    float bill;
};

struct Customer customers[100];
int count = 0;

float calculateBill(int units) {
    if (units <= 100)
        return units * 1.0;
    else if (units <= 200)
        return 100 * 1.0 + (units - 100) * 2.0;
    else
        return 100 * 1.0 + 100 * 2.0 + (units - 200) * 3.0;
}

void addCustomer() {
    printf("Enter ID: ");
    scanf("%d", &customers[count].id);

    printf("Enter Name: ");
    scanf("%s", customers[count].name);

    printf("Enter Units: ");
    scanf("%d", &customers[count].units);

    customers[count].bill = calculateBill(customers[count].units);

    count++;
    printf("Customer Added Successfully!\n");
}

void displayCustomers() {
    for (int i = 0; i < count; i++) {
        printf("\nID: %d", customers[i].id);
        printf("\nName: %s", customers[i].name);
        printf("\nUnits: %d", customers[i].units);
        printf("\nBill: %.2f\n", customers[i].bill);
    }
}

void searchCustomer() {
    int id, found = 0;

    printf("Enter ID to search: ");
    scanf("%d", &id);

    for (int i = 0; i < count; i++) {
        if (customers[i].id == id) {
            printf("\nCustomer Found:\n");
            printf("Name: %s\n", customers[i].name);
            printf("Units: %d\n", customers[i].units);
            printf("Bill: %.2f\n", customers[i].bill);
            found = 1;
            break;
        }
    }

    if (!found) {
        printf("Customer Not Found\n");
    }
}


int main() {
    int choice;

    while (1) {
        printf("\n--- Electricity Bill System ---\n");
        printf("1. Add Customer\n");
        printf("2. Display Customers\n");
        printf("3. Search Customer\n");
        printf("4. Exit\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

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
                return 0;
            default:
                printf("Invalid Choice\n");
        }
    }
}