# Zoo Objects

## 03/21/17
## Seth Brady


Practice with creating, throwing, and catching errors.

## TO DO
1. Take our Zoo ``constructors`` and ``methods`` from the previous assignment and add some proper ``Errors`` to them. Any time something occurs that wasn't expected, let's ``throw`` an ``Error``. In our tests, we must then ``try`` our code and ``catch`` our Errors.

2. Create and ``throw`` ``Errors`` from any ``method`` on your animals that should do so... when should you do so? For example, if you have a swim ``method`` on Otter that takes in a duration ``argument`` and someone calls the ``method`` with the ``string`` "a while" (instead of a Number) you should produce a ``TypeError`` since you expected a number.
You must have ``tests`` for your code that check for (``catch``) your ``errors`` - be sure to check that the ``Error`` you ``catch`` is of the correct ``type``!



## 03/20/17
## Seth Brady

Practice writing classes, constructor functions, parent and child objects, class methods, static methods, docblocks, installing  dependencies.


HOW TO GET STARTED
1.  clone repo
2.  Run http-server


## TO DO

1. Create an Animal ```class``` with a ```constructor```

  All Animals have a name and date of birth
  An Animals name might change, but not its date of birth - thus you must create a get ```method``` for the date of birth so it may only be retrieved, not changed!
  All Animals should have a ```method``` for determining their age in years
  Create a ```toString() method``` which prints out the animals name and date of birth

2. Create two specific species of Animal which extend the Animal class
  Specific species ```constructors``` MUST use the ```parent``` constructor. Each species ```class``` must have a ```static``` method which returns the scientific name of that species
  If you create a mammal, it must be able to give birth (what should that method return?)
  If you create a reptile or bird it must be able to lay one or more eggs (what should that method return?)
  For each species create at least one other ```method``` (in addition to the things directly above)
  For example, parrots can speak, lions can roar, otters can swim, etc...
  Your species-specific ```method(s)``` MUST take in (and use) at least ```one argument```. For example, a swim method might take the argument: duration and return how far the animal swam in that time (speed * duration)
  All species must re-implement the ```toString()``` method to print out what species it is.


## Future Updates

1. Dependencies have been added for testing using mocha, chai, and karma. A spec file will be added to later to use those dependencies.

2. A future update will dis-allow the creation of animal classes directly and only allow for species specific class instances.
