(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;


  window.zoo.Ayeaye = class Ayeaye extends Animal {
          constructor(name, dateOfBirth){
              super(name, dateOfBirth);
              console.log('Creating an Aye Aye');
            }

            willEat(snacks){
              if (snacks === 'grubs' || snacks === 'nectar'){
                console.log(this.name + ' is very happy you fed it');
              }else{
                return this.name + ' only eats grubs and nectar';
              }
            }

            giveBirth(name){
              let critter = new Ayeaye();
              critter.name = name;
              return critter;
            }

            static scientificName(){
              return 'Daubentonia madagascariensis';
            }

            toString(){
              return this.name + ' is a ' +  this.constructor.name;
            }



  };

}());
