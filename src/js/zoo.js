(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Ayeaye = window.zoo.Ayeaye;
  let Kakapo = window.zoo.Kakapo;



  let felicia = new Animal ('Felicia');
  console.log(felicia);

  let tom = new Ayeaye ('Tom', new Date('02/13/2014'));
  console.log(tom);
  console.log(tom.toString());
  console.log(tom.age());
  console.log(Ayeaye.scientificName());
  console.log(tom.giveBirth('Sam'));
  console.log(tom.willEat());

  let jerry = new Kakapo ('Jerry', new Date('07/1/1943'));
  console.log(jerry);
  console.log(jerry.toString());
  console.log(jerry.age());
  console.log(Kakapo.scientificName());


}());
