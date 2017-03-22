(function() {
    'use strict';

    window.zoo = window.zoo || {};

    window.zoo.Animal = class Animal {

        /**
         * [Takes a string and date and assigns those arguments
         * to instances of animal]
         * @param  {string} name        [description]
         * @param  {date} dateOfBirth [description]
         * @return {void}             [description]
         */
        constructor(name, dateOfBirth) {

            // ****an error for  string checking
            if (typeof(name) === 'string') {
                this.name = name;
            } else {
                throw TypeError('Please use a string');
            }

            //Object.getPrototypeof(dateOfBirth) === Date.prototype
            if (!(dateOfBirth instanceof Date)) {
                dateOfBirth = new Date();

            }
            this.dob = dateOfBirth;
        }

        /**
         * [Takes the the birthyear and current year and returns
         * a string containing the age]
         * @return {string} //this a string concatenated
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
         * new string]
         * @param  {string} newName
         * @return {null}
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
