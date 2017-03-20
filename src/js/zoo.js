(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Ayeaye = window.zoo.Ayeaye;
  let Kakapo = window.zoo.Kakapo;

  let felicia = new Animal ('Felicia');
  console.log(felicia);

  let tom = new Ayeaye ('Tom');
  console.log(tom);

  let jerry = new Kakapo ('Jerry');
  console.log(jerry);

}());
