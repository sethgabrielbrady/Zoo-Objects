(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;

/**
 * [Kakapo description]
 * @type {[type]}
 */
  window.zoo.Kakapo = class Kakapo extends Animal {
      constructor(name, dateOfBirth){
          super(name, dateOfBirth);
          this.eats = 'crickets';
          console.log('Creating a Kakapo');
        }

        layEggs( number){
          let clutch = [];
          for (let i = 1; i <=number; i++){
            let name = 'hatchling ' + i;
            let hatchling = new Kakapo(name);

            clutch.push(hatchling.name);
            }
            return  clutch;
            }

        playFight(number){
          let minutes = Math.floor(Math.random() * number) +1;
          return this.name + ' played for ' + minutes + ' minutes.';
        }

        static scientificName() {
          return 'Strigops habroptilus';
        }

        toString(){
          return this.name + ' is a ' +  this.constructor.name;
        }


      };
}());
