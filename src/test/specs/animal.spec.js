(


  function() {
    'use strict';

    let expect = window.chai.expect;

    describe('animal class module', function() {

        it('shouldtest that there is a function', function() {
            expect(window.zoo.Animal).to.be.a('function');
        });

    });

}());
