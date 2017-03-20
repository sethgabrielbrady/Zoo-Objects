# Zoo
## 03/20/17
## Seth Brady

Practice writing classes, constructor functions, parent and child objects




1. Create an Animal class with a constructor
    All Animals have a name and date of birth
    An Animals name might change, but not its date of birth - thus you must create a get method for the date of birth so it may only be retrieved, not changed!
    All Animals should have a method for determining their age in years
    Create a toString() method which prints out the animals name and date of birth

2. Create two specific species of Animal which extend the Animal  class

  Specific species constructors MUST use the parent constructor
  Each species class must have a static method which returns the scientific name of that species
  If you create a mammal, it must be able to give birth (what should that method return?)
  If you create a reptile or bird it must be able to lay one or more eggs (what should that method return?)
  For each species create at least one other method (in addition to the things directly above)
  For example, parrots can speak, lions can roar, otters can swim, etc...
  Your species-specific method(s) MUST take in (and use) at least one argument. For example, a swim method might take the argument: duration and return how far the animal swam in that time (speed * duration)
  All species must re-implement the toString() method to print out what species it is
