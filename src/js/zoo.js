(function() {
    'use strict';

    window.zoo = window.zoo || {};

    let Animal = window.zoo.Animal;
    let Ayeaye = window.zoo.Ayeaye;
    let Kakapo = window.zoo.Kakapo;


    // let stringTester = new Animal(1, new Date('02/13/2014'));
    // console.log('This should not have executed');

    //error test
    try {
        let stringTester = new Animal(new Date('02/13/2014'));
    } catch (err) {
        console.warn(err);
    }

    let felicia = new Animal('Felicia');
    // console.log(felicia);

    try {
        let stringTester = new Ayeaye(1, new Date('02/13/2014'));
    } catch (err) {
        console.warn(err);
    }

    try {
        let dateTester = new Ayeaye('dateTester', new Date(adfads));
    } catch (err) {
        console.warn(err);
    }

    let tom = new Ayeaye('Tom', new Date('02/13/2014'));
    let jane = new Ayeaye('Jane', new Date('06/16/2011'));
    console.log(tom);

    //error test
    try {
        tom.newName(1);
    } catch (err) {
        console.warn(err);
    }

    console.log(tom.name);
    console.log(tom.toString() + ' and was born on ' + tom.dob);
    console.log(tom.age());
    console.log(tom.willEat('peaches'));
    console.log(jane.willEat('grubs'));

    jane.giveBirth('Sam');

    try {
        jane.giveBirth(1);
    } catch (err) {
        console.warn(err);
    }
    //error test
    try {
        jane.willEat(NaN);
    } catch (err) {
        console.warn(err);
    }

    console.log(Ayeaye.scientificName());
    // console.log(jane.giveBirth('Sam'));

    let jerry = new Kakapo('Jerry', new Date('07/1/1943'));
    let petunia = new Kakapo('Petunia', new Date('07/1/1977'));
    console.log(jerry);
    console.log(petunia);


    console.log(jerry.toString());
    console.log(jerry.age());
    console.log(Kakapo.scientificName());
    console.log(petunia.playFight(20));
    console.log(petunia.layEggs());

    //error test
    try {
        petunia.playFight([1, 3, 5]);
    } catch (err) {
        console.warn(err);
    }



}());
