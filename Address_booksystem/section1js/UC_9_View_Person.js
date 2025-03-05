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

    // View persons by City
    viewPersonsByCity(city) {
        let persons = this.contacts
            .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
            .map(contact => `${contact.firstName} ${contact.lastName}`);

        if (persons.length === 0) {
            console.log(` No persons found in city '${city}'.`);
        } else {
            console.log(`\n Persons in City '${city}':\n${persons.join(", ")}`);
        }
    }

    // View persons by State
    viewPersonsByState(state) {
        let persons = this.contacts
            .filter(contact => contact.state.toLowerCase() === state.toLowerCase())
            .map(contact => `${contact.firstName} ${contact.lastName}`);

        if (persons.length === 0) {
            console.log(` No persons found in state '${state}'.`);
        } else {
            console.log(`\n Persons in State '${state}':\n${persons.join(", ")}`);
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

const contact3 = new Contact("Bob", "Johnson", "Lake View", "Pune", "Maharashtra", "411001", "9876543211", "bob.johnson@example.com");
myAddressBook.addContact(contact3);

// View persons by city
myAddressBook.viewPersonsByCity("Bhopal");
myAddressBook.viewPersonsByCity("Mumbai"); // No contact case

// View persons by state
myAddressBook.viewPersonsByState("Madhya Pradesh");
myAddressBook.viewPersonsByState("Gujarat"); // No contact case

// Display Address Book
console.log("\n Address Book:");
myAddressBook.displayContacts();
