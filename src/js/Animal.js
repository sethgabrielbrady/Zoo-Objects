(function() {
    'use strict';

    window.zoo = window.zoo || {};

    window.zoo.Animal = class Animal {

        /**
         * [Takes a string and date and assigns those arguments
         * to instances of animal]
         * @param  {string} name        [description]
         * @param  {date} dateOfBirth [description]
         * @return {null}             [description]
         */
        constructor(name, dateOfBirth) {

            this.name = name;
            if (!(dateOfBirth instanceof Date)) {
                dateOfBirth = new Date();
            }
            this.dob = dateOfBirth;
        }

        /**
         * [Takes the the birthyear and current year and returns
         * a string containing the age]
         * @return {string}
         */

        age() {
            //need an if to check for a number
            let birthYear = this.dob.getFullYear();
            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;
            return this.name + ' is ' + age + ' years old.';
        }

        /**
         * [Takes a string as an argument and replaces the current name with the
         * new string]
         * @param  {string} newName
         * @return {null}
         */

        newName(newName) {
            this.name = newName;
        }


        toString() {
            return this.name + ' was born in ' + this.dob.getFullYear();
        }

    };
}());
