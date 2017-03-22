(function() {
    'use strict';

    window.zoo = window.zoo || {};
    window.zoo.Animal = class Animal {

        /**
         * [Takes a string and date and assigns those arguments
         *  to instances of animal]
         * @param  {string} name       [Used insntance name]
         * @param  {date}  dateOfBirth [Used for the instance date of birth]
         * @throws {TypeError}         [When no string is provided]
         * @return {void}
         */
        constructor(name, dateOfBirth) {
            if (typeof(name) === 'string') {
                this.name = name;
            } else {
                throw TypeError('Please use a string');
            }
            if (!(dateOfBirth instanceof Date)) {
                dateOfBirth = new Date();
            }
            this.dob = dateOfBirth;
        }

        /**
         * [Takes the the birthyear and current year and returns
         *  a string containing the age]
         * @throws {TypeError}        [When something other than a date is given
         *                              in either variable]
         * @return {string}           [this a string concatenated but age is actually
         *                             a number]
         */
        age() {
            let birthYear = this.dob;
            let currentYear = new Date();
            if ((currentYear instanceof Date) && (birthYear instanceof Date)) {
                birthYear = this.dob.getFullYear();
                currentYear = currentYear.getFullYear();
                let age = currentYear - birthYear;
                return this.name + ' is ' + age + ' years old.';
            } else {
                throw TypeError('Please use a Date');

            }
        }

        /**
         * [Takes a string as an argument and replaces the current name with the
         *  new string]
         * @param  {string} newName
         * @throws {TypeError}      [When something other than a string is givien]
         * @return {void}
         */
        newName(newName) {
            if (typeof(newName) === 'string') {
                this.name = newName;
            } else {
                throw TypeError('Please use a string');
            }

        }

        toString() {
            return this.name + ' was born in ' + this.dob.getFullYear();
        }

    };
}());
