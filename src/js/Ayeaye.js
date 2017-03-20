(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;


  window.zoo.Ayeaye = class Ayeaye extends Animal {
          constructor(name, dateOfBirth){
              super(name, dateOfBirth);
              console.log('Creating an Aye Aye');
            }

            willEat(){
            return this.name + ' eats fruits, nectar, and fungus';
            }

            giveBirth(name){
              let critter = new Ayeaye();
              critter.name = name;
              return critter;
            }

            static scientificName(){
              return 'Daubentonia madagascariensis';
            }




  };

}());
