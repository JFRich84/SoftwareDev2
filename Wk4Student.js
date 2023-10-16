class Student {
    // attributes
    #firstName;
    #lastName;
    #courseID;

    constructor(firstName, lastName, courseID) {
        this.#firstName = firstName
        this.#lastName = lastName
        this.#courseID = courseID
    }

    getFormattedName() {
        return this.#firstName + " " + this.#lastName
    }
    get firstName {
        return this.#firstName
    }

    get lastName() {
        return this.#lastName
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }
    set lastName(lastName) {
        this.#lastName = lastName;
    }
    
    module.exports = {
        Student
    }
}