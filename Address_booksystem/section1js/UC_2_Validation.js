class User {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        // Validate input using regex
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    // Name should start with a capital letter and have at least 3 characters
    validateName(name, field) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${field} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    // Address, City, and State should have at least 4 characters
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

    // Phone Number validation (10-digit starting with 7, 8, or 9)
    validatePhone(phone) {
        const phoneRegex = /^[789][0-9]{9}$/;
        if (!phoneRegex.test(phone)) {
            throw new Error(`Phone number must be a valid 10-digit number starting with 7, 8, or 9.`);
        }
        return phone;
    }

    // Email validation (basic pattern)
    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error(`Invalid email format.`);
        }
        return email;
    }

    printUser() {
        console.log("User Details:");
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Address: ${this.address}, ${this.city}, ${this.state}`);
        console.log(`Zip: ${this.zip}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Email: ${this.email}`);
    }
}


try {
    const user = new User(
        "Sandeep", 
        "Vishwakarma", 
        "MG Road", 
        "Bhopal", 
        "Madhya Pradesh", 
        "462022", 
        "9876543210", 
        "sandeep@example.com"
    );

    user.printUser(); // Print details if all validations pass
} catch (error) {
    console.error(`Validation Error: ${error.message}`);
}
