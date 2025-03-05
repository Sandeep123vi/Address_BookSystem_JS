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

    // Override toString method to print Contact details
    toString() {
        return ` ${this.firstName} ${this.lastName},  ${this.city}, ${this.state},  ${this.phone},  ${this.email}`;
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
        console.log(`Contact Added Successfully!`);
    }

    // Sort contacts alphabetically by Person's Name
    sortContactsByName() {
        this.contacts.sort((a, b) => (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName));
        console.log("\n Address Book Sorted Alphabetically by Name:\n");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// Example Usage
const myAddressBook = new AddressBook();

// Adding Contacts
myAddressBook.addContact(new Contact("John", "Doe", "MG Road", "Bhopal", "Madhya Pradesh", "462022", "9876543210", "john.doe@example.com"));
myAddressBook.addContact(new Contact("Alice", "Smith", "Park Street", "Indore", "Madhya Pradesh", "452001", "7890123456", "alice.smith@example.com"));
myAddressBook.addContact(new Contact("Bob", "Johnson", "Lake View", "Pune", "Maharashtra", "411001", "9876543211", "bob.johnson@example.com"));
myAddressBook.addContact(new Contact("Eve", "Brown", "Main Street", "Bhopal", "Madhya Pradesh", "462023", "9876543222", "eve.brown@example.com"));

// Sort contacts by Name
myAddressBook.sortContactsByName();
