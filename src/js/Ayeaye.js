(function() {
    'use strict';

    window.zoo = window.zoo || {};
    let Animal = window.zoo.Animal;

    window.zoo.Ayeaye = class Ayeaye extends Animal {
        /**
         * [Takes two strings and date and assigns those arguments
         * to instances of AyeAye]
         * @param  {string} name           [Used insntance name]
         * @param  {date}   dateOfBirth    [Used for the instance date of birth]
         * @param  {string} classification [Used for it classification]
         * @return {void}
         */
        constructor(name, dateOfBirth) {
            super(name, dateOfBirth);
            this.classification = 'mammal';
            console.log('Creating an Aye Aye');
        }

        /**
         * [Accepts a string as a argument. Returns a statment
         * based what is given]
         * @param  {string} snacks [Will accept any string as a valid argument]
         * @throws {TypeError}     [When no string is provided]
         * @return {string}        [Returns a string no matter what string you give it]
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

        /**
         * [Accepts string as an argument and creates 1 instance of
         * the Ayeaye class]
         * @param  {string} name  [Used for naming the new instance]
         * @throws {TypeError}    [Checks for a string given]
         * @return {object}       [returns a new instance]
         */
        giveBirth(name, dateOfBirth) {
            let critter = new Ayeaye(name, dateOfBirth);
            console.log('Creating an Aye Aye');
            if (typeof(name) === 'string') {
                return critter.name;
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
