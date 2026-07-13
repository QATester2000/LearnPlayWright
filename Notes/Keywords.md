# Java Keywords

## Access Modifiers
- **public** — Accessible from anywhere
- **private** — Accessible only within the class
- **protected** — Accessible within the same package and subclasses
- **default** (no modifier) — Accessible within the same package

## Class & Object Keywords
- **class** — Declares a class
- **interface** — Declares an interface
- **enum** — Declares an enumerated type
- **extends** — Indicates inheritance (class to class / interface to interface)
- **implements** — Indicates interface implementation
- **new** — Creates a new object instance
- **this** — Refers to the current object
- **super** — Refers to the parent class object
- **instanceof** — Checks if an object is an instance of a specific class

## Data Types
- **byte** — 8-bit integer
- **short** — 16-bit integer
- **int** — 32-bit integer
- **long** — 64-bit integer
- **float** — 32-bit floating point
- **double** — 64-bit floating point
- **char** — 16-bit Unicode character
- **boolean** — true / false value
- **void** — Indicates no return value
- **var** — Local variable type inference (Java 10+)

## Control Flow
- **if** / **else** — Conditional branching
- **switch** / **case** / **default** — Multi-way branching
- **for** — For loop
- **while** — While loop
- **do** — Do-while loop
- **break** — Exits a loop or switch
- **continue** — Skips to next iteration of a loop
- **return** — Exits a method and optionally returns a value

## Exception Handling
- **try** — Defines a block of code to monitor for exceptions
- **catch** — Handles an exception
- **finally** — Block executed regardless of exception (cleanup)
- **throw** — Throws an exception manually
- **throws** — Declares exceptions a method can throw

## Object-Oriented Keywords
- **abstract** — Cannot be instantiated (class) or has no body (method)
- **static** — Belongs to the class, not instances
- **final** — Cannot be overridden (method), inherited (class), or reassigned (variable)
- **synchronized** — Controls thread access to a method / block
- **volatile** — Ensures variable visibility across threads
- **transient** — Marks a field to be skipped during serialization
- **strictfp** — Ensures consistent floating-point behavior across platforms

## Package & Import
- **package** — Declares a package for the class
- **import** — Imports classes from other packages

## Others
- **null** — Represents absence of a value
- **true** / **false** — Boolean literals
- **assert** — Used for assertions (debugging)
- **sealed** — Restricts which classes can extend/implement (Java 17+)
- **permits** — Used with sealed to specify allowed subclasses (Java 17+)
- **record** — Declares a data carrier class (Java 16+)
- **yield** — Returns a value from a switch expression (Java 14+)
- **module** / **requires** / **exports** / **opens** / **provides** / **to** / **uses** — Java module system keywords (Java 9+)
