(function() {
    'use strict';

    window.zoo = window.zoo || {};
    let Animal = window.zoo.Animal;


    window.zoo.Kakapo = class Kakapo extends Animal {
      /**
       * [Takes a string and date ans assigns those arguments
       *  to instances of Kakpo]
       * @param  {string} name        [used insntance name]
       * @param  {date} dateOfBirth [used for the instance date of birth]
       * @param  {string} classification [used for it classification]
       * @return {null}             [returns nothing]
       */
        constructor(name, dateOfBirth, classification) {
            super(name, dateOfBirth);
            this.classification = 'bird';
            this.eats = 'crickets';
            console.log('Creating a Kakapo');
        }

        layEggs(number) {
            let clutch = [];
            for (let i = 1; i <= number; i++) {
                let name = 'hatchling ' + i;
                let hatchling = new Kakapo(name);
                clutch.push(hatchling.name);
            }
            return clutch;
        }

        playFight(number) {
            let minutes = Math.floor(Math.random() * number) + 1;
            return this.name + ' played for ' + minutes + ' minutes.';
        }

        static scientificName() {
            return 'Strigops habroptilus';
        }

        toString() {
            return this.name + ' is a ' + this.constructor.name;
        }


    };
}());
