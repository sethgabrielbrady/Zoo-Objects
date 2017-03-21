(function() {
    'use strict';

    window.zoo = window.zoo || {};
    let Animal = window.zoo.Animal;


    window.zoo.Kakapo = class Kakapo extends Animal {
        /**
         * [Takes two strings and date ans assigns those arguments
         * to instances of Kakpo]
         * @param  {string} name        [used insntance name]
         * @param  {date} dateOfBirth [used for the instance date of birth]
         * @param  {string} classification [used for it classification]
         * @return {null}             [returns nothing]
         */
        constructor(name, dateOfBirth, classification) {
            super(name, dateOfBirth);
            this.classification = 'bird';
            this.eats = 'crickets';
            // console.log('Creating a Kakapo');
        }


        /**
         * [Returns an array of objects with a count determined
         * by a random number between 1 and 6]
         * @return {array} [array containing instances of Kakapo]
         */

        layEggs() {
            let number = Math.floor(Math.random() * 6) + 1;
            let clutch = [];
            for (let i = 1; i <= number; i++) {
                let name = 'hatchling ' + i;
                let hatchling = new Kakapo(name);
                clutch.push(hatchling.name);
            }
            return clutch;
        }

        /**
         * [Will generate a random number between 1 and the
         * number given to it as an argument to determine
         * how much time a kakapo will play fight]
         * @param  {number} number [number passed to put into the RNG]
         * @return {[string}
         */
        playFight(number) {
            let minutes = Math.floor(Math.random() * number) + 1;
            return this.name + ' played for ' + minutes + ' minutes.';
        }

        static scientificName() {
            return 'Scientific name: Strigops habroptilus';
        }

        toString() {
            return this.name + ' is a ' + this.constructor.name;
        }


    };
}());
