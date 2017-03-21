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
            if (!(dateOfBirth instanceof Date) || (typeof(dateOfBirth) === undefined)){
                dateOfBirth = new Date();

            }
            this.dob = dateOfBirth;
        }

        /**
         * [Takes the the birthyear and current year and returns
         * a string containing the age]
         * @return {string} //this a string concatenated
         */
        age() { //this shouldnt get an error because we don't pass it anythinf
            //need an if to check for a number
            let birthYear = this.dob.getFullYear();
            let currentYear = new Date().getFullYear();
            if ((currentYear instanceof Date) && (birthYear instanceof Date)) {
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
        //an error for string  input
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
