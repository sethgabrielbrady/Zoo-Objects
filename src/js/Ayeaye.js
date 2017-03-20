(function() {
    'use strict';

    window.zoo = window.zoo || {};
    let Animal = window.zoo.Animal;


    window.zoo.Ayeaye = class Ayeaye extends Animal {
      /**
       * [Takes a string and date ans assigns those arguments
       *  to instances of AyeAye]
       * @param  {string} name        [used insntance name]
       * @param  {date} dateOfBirth [used for the instance date of birth]
       * @param  {string} classification [used for it classification]
       * @return {null}             [returns nothing]
       */
        constructor(name, dateOfBirth, classification) {
            super(name, dateOfBirth);
            this.classification = 'mammal';
            console.log('Creating an Aye Aye');
        }
        
        willEat(snacks) {
            if (snacks === 'grubs' || snacks === 'nectar') {
                return this.name + ' is very happy to be fed.';
            } else {
                return this.name + ' only eats grubs and nectar.';
            }
        }

        giveBirth(name) {
            let critter = new Ayeaye();
            critter.name = name;
            return critter;
        }

        static scientificName() {
            return 'Daubentonia madagascariensis';
        }

    };

}());
