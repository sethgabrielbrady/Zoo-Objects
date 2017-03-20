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

          age(dob, currentYear){
            //need an if to check for a number
              this.dob = dob;
              currentYear = new Date();
              let yearOfBirth = dob.getFullYear();
              console.log(yearOfBirth);
          }

          newName(newName){
            this.name = newName;
          }


  };

}());
















// All Animals have a name and date of birth
// An Animals name might change, but not its date of birth
//   - thus you must create a get method for the date of birth
//   so it may only be retrieved, not changed!
// All Animals should have a method for determining their age in years
// Create a toString() method which prints out the animals name and date
//  of birth


//kakapo, dugong, aye-aye
