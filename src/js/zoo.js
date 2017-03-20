(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Ayeaye = window.zoo.Ayeaye;
  let Kakapo = window.zoo.Kakapo;



  let felicia = new Animal ('Felicia');
  console.log(felicia);

  let tom = new Ayeaye ('Tom', new Date('02/13/2014'));
  let jane = new Ayeaye ('Jane', new Date('06/16/2011'));
  console.log(tom);
  console.log(tom.toString());
  console.log(tom.age());
  console.log(tom.willEat('peaches'));
  console.log(jane.willEat('grubs'));
  console.log(Ayeaye.scientificName());

  console.log(tom.giveBirth('Sam'));

  let jerry = new Kakapo ('Jerry', new Date('07/1/1943'));
  let petunia = new Kakapo ('Petunia', new Date('07/1/1977'));
  console.log(jerry);
  console.log(petunia);


  console.log(jerry.toString());
  console.log(jerry.age());
  console.log(Kakapo.scientificName());
  console.log(petunia.playFight(10));
  console.log(petunia.layEggs(3));


}());
