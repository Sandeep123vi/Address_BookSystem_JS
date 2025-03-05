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

    // Get count of persons by City
    getCountByCity(city) {
        let count = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase()).length;
        console.log(`\n Number of persons in City '${city}': ${count}`);
    }

    // Get count of persons by State
    getCountByState(state) {
        let count = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase()).length;
        console.log(`\n Number of persons in State '${state}': ${count}`);
    }
}

// Example Usage
const myAddressBook = new AddressBook();

// Adding Contacts
const contact1 = new Contact("John", "Doe", "MG Road", "Bhopal", "Madhya Pradesh", "462022", "9876543210", "john.doe@example.com");
myAddressBook.addContact(contact1);

const contact2 = new Contact("Alice", "Smith", "Park Street", "Indore", "Madhya Pradesh", "452001", "7890123456", "alice.smith@example.com");
myAddressBook.addContact(contact2);

const contact3 = new Contact("Bob", "Johnson", "Lake View", "Pune", "Maharashtra", "411001", "9876543211", "bob.johnson@example.com");
myAddressBook.addContact(contact3);

const contact4 = new Contact("Eve", "Brown", "Main Street", "Bhopal", "Madhya Pradesh", "462023", "9876543222", "eve.brown@example.com");
myAddressBook.addContact(contact4);

// Get count of persons by City
myAddressBook.getCountByCity("Bhopal");
myAddressBook.getCountByCity("Mumbai"); // No contact case

// Get count of persons by State
myAddressBook.getCountByState("Madhya Pradesh");
myAddressBook.getCountByState("Gujarat"); // No contact case
