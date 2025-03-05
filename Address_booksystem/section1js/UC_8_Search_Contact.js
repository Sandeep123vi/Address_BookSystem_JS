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

    // Search contacts by City
    searchByCity(city) {
        let results = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
        if (results.length === 0) {
            console.log(` No contacts found in city '${city}'.`);
        } else {
            console.log(`\n Contacts in City '${city}':`);
            results.forEach(contact => contact.printContact());
        }
    }

    // Search contacts by State
    searchByState(state) {
        let results = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
        if (results.length === 0) {
            console.log(` No contacts found in state '${state}'.`);
        } else {
            console.log(`\n🌍 Contacts in State '${state}':`);
            results.forEach(contact => contact.printContact());
        }
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

//  Example Usage
const myAddressBook = new AddressBook();

// Adding Contacts
const contact1 = new Contact("John", "Doe", "MG Road", "Bhopal", "Madhya Pradesh", "462022", "9876543210", "john.doe@example.com");
myAddressBook.addContact(contact1);

const contact2 = new Contact("Alice", "Smith", "Park Street", "Indore", "Madhya Pradesh", "452001", "7890123456", "alice.smith@example.com");
myAddressBook.addContact(contact2);

const contact3 = new Contact("Bob", "Johnson", "Lake View", "Pune", "Maharashtra", "411001", "9876543211", "bob.johnson@example.com");
myAddressBook.addContact(contact3);

// Search contacts by city
myAddressBook.searchByCity("Bhopal");
myAddressBook.searchByCity("Mumbai"); // No contact case

// Search contacts by state
myAddressBook.searchByState("Madhya Pradesh");
myAddressBook.searchByState("Gujarat"); // No contact case

// Display Address Book
console.log("\n Address Book:");
myAddressBook.displayContacts();

// Get total contacts count
console.log(`\n Total Contacts: ${myAddressBook.getContactCount()}`);
