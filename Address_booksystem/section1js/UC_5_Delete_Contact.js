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

    // Add a new contact to the Address Book
    addContact(contact) {
        this.contacts.push(contact);
        console.log(` Contact Added Successfully!`);
    }

    // Find contact by name
    findContact(name) {
        return this.contacts.find(c => c.firstName.toLowerCase() === name.toLowerCase());
    }

    // Delete contact by name
    deleteContact(name) {
        const index = this.contacts.findIndex(c => c.firstName.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(` Contact '${name}' deleted successfully!`);
        } else {
            console.log(` Contact with name '${name}' not found.`);
        }
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

//  Example Usage
const myAddressBook = new AddressBook();

// Adding Contacts
const contact1 = new Contact("John", "Doe", "MG Road", "Bhopal", "Madhya Pradesh", "462022", "9876543210", "john.doe@example.com");
myAddressBook.addContact(contact1);

const contact2 = new Contact("Alice", "Smith", "Park Street", "Indore", "Madhya Pradesh", "452001", "7890123456", "alice.smith@example.com");
myAddressBook.addContact(contact2);

// Display contacts before deletion
console.log("\n Address Book before Deletion:");
myAddressBook.displayContacts();

// Deleting a contact
console.log("\n Deleting Contact...");
myAddressBook.deleteContact("John");

// Display contacts after deletion
console.log("\n Address Book after Deletion:");
myAddressBook.displayContacts();
