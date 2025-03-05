class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    // Name validation (Starts with a capital letter, min 3 chars)
    validateName(name, field) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${field} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    // Address, City, and State validation (Min 4 chars)
    validateAddress(value, field) {
        if (value.length < 4) {
            throw new Error(`${field} must have at least 4 characters.`);
        }
        return value;
    }

    // Zip Code validation (6-digit numeric)
    validateZip(zip) {
        const zipRegex = /^[1-9][0-9]{5}$/;
        if (!zipRegex.test(zip)) {
            throw new Error(`Zip Code must be a 6-digit number.`);
        }
        return zip;
    }

    // Phone validation (10-digit starting with 7, 8, or 9)
    validatePhone(phone) {
        const phoneRegex = /^[789][0-9]{9}$/;
        if (!phoneRegex.test(phone)) {
            throw new Error(`Phone number must be a valid 10-digit number starting with 7, 8, or 9.`);
        }
        return phone;
    }

    // Email validation
    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error(`Invalid email format.`);
        }
        return email;
    }

    // Print Contact Details
    printContact() {
        console.log(`\nContact Details:`);
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
        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            console.log(`\n Error: Contact with same phone or email already exists.`);
            return;
        }
        this.contacts.push(contact);
        console.log(` Contact Added Successfully!`);
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

const myAddressBook = new AddressBook();

try {
    const contact1 = new Contact("John", "Doe", "MG Road", "Bhopal", "Madhya Pradesh", "462022", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    const contact2 = new Contact("Alice", "Smith", "Park Street", "Indore", "Madhya Pradesh", "452001", "7890123456", "alice.smith@example.com");
    myAddressBook.addContact(contact2);

} catch (error) {
    console.error(`\nValidation Error: ${error.message}`);
}

// Display all contacts in the address book
myAddressBook.displayContacts();
