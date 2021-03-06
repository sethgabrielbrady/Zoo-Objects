(function() {
    'use strict';

    window.zoo = window.zoo || {};

    let Animal = window.zoo.Animal;
    let Ayeaye = window.zoo.Ayeaye;
    let Kakapo = window.zoo.Kakapo;


//new instances of Animal, Ayeaye, and Kakapo
    let felicia = new Animal('Felicia');
    let tom = new Ayeaye('Tom', new Date('02/13/2014'));
    let jane = new Ayeaye('Jane', new Date('06/16/2011'));
    let jerry = new Kakapo('Jerry', new Date('07/1/1943'));
    let petunia = new Kakapo('Petunia', new Date('07/1/1977'));


//error checking
    try {
        let stringTester = new Animal(1, new Date('02/13/2014'));
        console.log(stringTester);
    } catch (err) {
        console.warn(err);
    }

    try {
        let stringTester = new Ayeaye(1, new Date('02/13/2014'));
        console.log(stringTester);

    } catch (err) {
        console.warn(err);
    }

    try {
        let dateTester = new Ayeaye('dateTester', new Date([4545]));
        console.log(dateTester);

    } catch (err) {
        console.warn(err);
    }

    try {
        tom.newName(1);
    } catch (err) {
        console.warn(err);
    }

    try {
        jane.giveBirth(1);
    } catch (err) {
        console.warn(err);
    }

    try {
        jane.willEat(NaN);
    } catch (err) {
        console.warn(err);
    }

    try {
        petunia.playFight([1, 3, 5]);
    } catch (err) {
        console.warn(err);
    }


    felicia.expire();
    try {
      felicia.age();
    } catch (err) {
        console.warn(err);
    }



//checking various class methods
    console.log(felicia);
    console.log(tom);
    console.log(tom.name);
    console.log(tom.toString() + ' and was born on ' + tom.dob);
    console.log(tom.age());
    console.log(tom.willEat('peaches'));
    console.log(jane.willEat('grubs'));
    jane.giveBirth('Sam');
    console.log(Ayeaye.scientificName());

    console.log(jerry);
    console.log(petunia);
    console.log(jerry.toString());
    console.log(jerry.age());
    console.log(Kakapo.scientificName());
    console.log(petunia.playFight(20));
    console.log(petunia.layEggs());

}());
