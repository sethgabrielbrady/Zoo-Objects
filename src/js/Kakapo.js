(function() {
    'use strict';

    window.zoo = window.zoo || {};
    let Animal = window.zoo.Animal;


    window.zoo.Kakapo = class Kakapo extends Animal {
        /**
         * [Takes two strings and date ans assigns those arguments
         *  to instances of Kakpo]
         * @param  {string} name           [Used insntance name]
         * @param  {date} dateOfBirth      [Used for the instance date of birth]
         * @param  {string} classification [Used for it classification]
         * @return {void}
         */

        constructor(name, dateOfBirth) {
            super(name, dateOfBirth);
            this.classification = 'bird';
            this.eats = 'crickets';
        }

        /**
         * [Returns an array of objects with a count determined
         *  by a random number between 1 and 6]
         * @throws {TypeError}  [If var number becomes of type !number]
         * @return {array}      [Array containing instances of Kakapo]
         */
        layEggs() {
            let number = Math.floor(Math.random() * 6) + 1;
            if (typeof(number) === 'number') {
                let clutch = [];
                for (let i = 1; i <= number; i++) {
                    let name = 'hatchling ' + i;
                    let hatchling = new Kakapo(name);
                    clutch.push(hatchling.name);
                }
                return clutch;
            } else {
                throw TypeError('Please use a Date');
            }
        }

        /**
         * [Will generate a random number between 1 and the
         *  number given to it as an argument to determine
         *  how much time a kakapo will play fight]
         * @param  {number} number  [Number passed to put into the RNG]
         * @throws {TypeError}      [If something other than a number is passed
         * @return {string}         [Var minutes is a number but is concatenated]
         */

        playFight(number) {
            if (typeof(number) === 'number') {
                let minutes = Math.floor(Math.random() * number) + 1;
                return this.name + ' played for ' + minutes + ' minutes.';
            } else {
                throw TypeError('Please use a number here');
            }

        }

        static scientificName() {
            return 'Scientific name: Strigops habroptilus';
        }

        toString() {
            return this.name + ' is an ' + this.constructor.name;
        }


    };
}());
