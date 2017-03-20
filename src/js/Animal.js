(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {

          constructor(name, dateOfBirth){

              this.name = name;
              if (!(dateOfBirth instanceof Date)){
                dateOfBirth = new Date();
              }
              this.dob = dateOfBirth;
          }

          age(){
            //need an if to check for a number
              let birthYear = this.dob.getFullYear();
              let currentYear = new Date().getFullYear();
              let age = currentYear - birthYear;
              return age;
          }

          newName(newName){
            this.name = newName;
          }


          toString(){
            return this.name + ' was born in ' + this.dob.getFullYear();
          }


  };

}());
