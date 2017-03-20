(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;


  window.zoo.Ayeaye = class Ayeaye extends Animal {
          constructor(name, dateOfBirth){
              super(name, dateOfBirth);
              this.eats = 'Nuts and grubs';
              console.log('Creating and Aye Aye');
            }

            static nativeTo() {
              return 'Madagascar';
            }




  };

}());
