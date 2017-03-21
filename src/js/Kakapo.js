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

        //check for strings-this might tie into the parent

        constructor(name, dateOfBirth) {
          try{
            super(name, dateOfBirth);
            this.classification = 'bird';
            this.eats = 'crickets';
            // console.log('Creating a Kakapo');
          }catch(err){
            console.warn(err);
          }

        }



        /**
         * [Returns an array of objects with a count determined
         * by a random number between 1 and 6]
         * @return {array} [array containing instances of Kakapo]
         */

        //check the argument input- lets maybe take value???
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
         * number given to it as an argument to determine
         * how much time a kakapo will play fight]
         * @param  {number} number [number passed to put into the RNG]
         * @return {[string}
         */

         //check the argument input-
         playFight(number) {
           if (typeof(number) === 'number'){
             let minutes = Math.floor(Math.random() * number) + 1;
             return this.name + ' played for ' + minutes + ' minutes.';
           }else{
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
