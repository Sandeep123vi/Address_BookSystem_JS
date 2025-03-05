class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    // Print Contact Details
    printContact() {
        console.log(`\n Contact Details:`);
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Address: ${this.address}, ${this.city}, ${this.state}`);
        console.log(`Zip: ${this.zip}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Email: ${this.email}`);
    }
}

// Address Book Class
class AddressBook {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    // Check for duplicate entry (same first and last name)
    isDuplicate(contact) {
        return this.contacts.some(
            (c) => c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
                   c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );
    }

    // Add a new contact to the Address Book
    addContact(contact) {
        if (this.isDuplicate(contact)) {
            console.log(` Duplicate Entry! Contact '${contact.firstName} ${contact.lastName}' already exists.`);
            return;
        }
        this.contacts.push(contact);
        console.log(` Contact Added Successfully!`);
    }

    // Get total number of contacts using reduce function
    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
    }

    // Display all contacts
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("\n Address Book is empty.");
            return;
        }
        console.log(`\n Address Book:`)
        this.contacts.forEach(contact => contact.printContact());
    }
}

// Example Usage
const myAddressBook = new AddressBook();

// Adding Contacts
const contact1 = new Contact("John", "Doe", "MG Road", "Bhopal", "Madhya Pradesh", "462022", "9876543210", "john.doe@example.com");
myAddressBook.addContact(contact1);

const contact2 = new Contact("Alice", "Smith", "Park Street", "Indore", "Madhya Pradesh", "452001", "7890123456", "alice.smith@example.com");
myAddressBook.addContact(contact2);

// Trying to add a duplicate contact
const duplicateContact = new Contact("John", "Doe", "New Street", "Gwalior", "Madhya Pradesh", "474001", "9123456789", "john.doe2@example.com");
myAddressBook.addContact(duplicateContact);

// Display Address Book
console.log("\n Address Book:");
myAddressBook.displayContacts();

// Get total contacts count
console.log(`\n Total Contacts: ${myAddressBook.getContactCount()}`);
