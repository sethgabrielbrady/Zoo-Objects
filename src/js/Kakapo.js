(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;


  window.zoo.Kakapo = class Kakapo extends Animal {
      constructor(name, dateOfBirth){
          super(name, dateOfBirth);
          this.eats = 'crickets';
          console.log('Creating a Kakapo');
        }

        layEggs(name){
          let hatchling = new Kakapo();
          hatchling.name = name;
          return hatchling;
        }
        static scientificName() {
          return 'Strigops habroptilus';
        }

      };
}());
