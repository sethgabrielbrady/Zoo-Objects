(function() {
    'use strict';

    window.zoo = window.zoo || {};
    let Animal = window.zoo.Animal;


    window.zoo.Ayeaye = class Ayeaye extends Animal {
        /**
         * [Takes two strings and date and assigns those arguments
         * to instances of AyeAye]
         * @param  {string} name        [used insntance name]
         * @param  {date} dateOfBirth [used for the instance date of birth]
         * @param  {string} classification [used for it classification]
         * @return {null}             [returns nothing]
         */

         constructor(name, dateOfBirth) {
            super(name, dateOfBirth);
            this.classification = 'mammal';
            console.log('Creating an Aye Aye');
        }

        /**
         * [Accepts a string as a argument. Returns a statment
         * based what is given]
         * @param  {string} snacks [will accept any string as a valid argument]
         * @return {string}        [returns a string no matter what string you give it]
         */

        /**
         * [Accepts string as an argument and creates 1 instance of
         * the Ayeaye class]
         * @param  {string} name [used for naming the new instance]
         * @return {object}      [returns a new instance]
         */
        willEat(snacks) {
            if (typeof(snacks) === 'string') {
                if (snacks === 'grubs' || snacks === 'nectar') {
                    return this.name + ' is very happy to be fed.';
                } else {
                    return this.name + ' only eats grubs and nectar.';
                }
            } else {
                throw TypeError('Please use a string');

            }

        }
        //check for a string--THERE IS PROBLEM HERE
        giveBirth(name, dateOfBirth) {
            let critter = new Ayeaye(name, dateOfBirth);
            console.log('Creating an Aye Aye');
            if (typeof(name) === 'string') {
                return critter.name; //name as argu
            } else {
                throw TypeError('Please use a string');
            }
        }
        static scientificName() {
            return 'Scientific name: Daubentonia madagascariensis';
        }
        toString() {
            return this.name + ' is an ' + this.constructor.name;
        }

    };

}());
