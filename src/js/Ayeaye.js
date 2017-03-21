(function() {
    'use strict';

    window.zoo = window.zoo || {};
    let Animal = window.zoo.Animal;


    window.zoo.Ayeaye = class Ayeaye extends Animal {
        /**
         * [Takes two strings and date ans assigns those arguments
         *  to instances of AyeAye]
         * @param  {string} name        [used insntance name]
         * @param  {date} dateOfBirth [used for the instance date of birth]
         * @param  {string} classification [used for it classification]
         * @return {null}             [returns nothing]
         */
        constructor(name, dateOfBirth, classification) {
            super(name, dateOfBirth);
            this.classification = 'mammal';
            // console.log('Creating an Aye Aye');
        }

        /**
         * [accepts a string as a parameter. return a statment
         * based what is given as an argument]
         * @param  {string} snacks [will accept any string as a valid argument]
         * @return {string}        [returns a string no matter what string you give it]
         */
        willEat(snacks) {
            if (snacks === 'grubs' || snacks === 'nectar') {
                return this.name + ' is very happy to be fed.';
            } else {
                return this.name + ' only eats grubs and nectar.';
            }
        }

        /**
         * [accepts tring as an argument and creates 1 instance of
         *  the Ayeaye class]
         * @param  {string} name [used for naming the new instance]
         * @return {object}      [returns a new instance]
         */

        giveBirth(name) {
            let critter = new Ayeaye();
            critter.name = name;
            return critter;
        }

        static scientificName() {
            return 'Scientific name: Daubentonia madagascariensis';
        }

    };

}());
