# Identifier Rules

## What is an Identifier?
An identifier is a name given to variables, functions, classes, objects, etc. in programming.

## Rules for Naming Identifiers

### 1. Allowed Characters
- Must begin with a **letter (a-z, A-Z)**, **underscore (_)**, or **dollar sign ($)**
- Subsequent characters can include letters, digits (0-9), underscores, or dollar signs
- **No spaces** allowed in identifiers

```js
// ✅ Valid identifiers
var a = 10;
var $ = 20;
var _ = 30;
var pp = 40;
var name = "John";
var Name = "Doe";

// ❌ Invalid identifier
// var 45 = 45;  // Cannot start with a digit
```

### 2. Case Sensitivity
- Identifiers are **case-sensitive** — `name` and `Name` are different variables

```js
var name = "John";
var Name = "Doe";
// name != Name  (different variables)
```

### 3. Reserved Keywords
- Cannot use JavaScript reserved keywords as identifiers (e.g., `var`, `let`, `const`, `class`, `return`, `if`, `else`, etc.)

### 4. No Special Characters
- Special characters like `@`, `#`, `%`, `^`, `&`, `*`, `-`, `!` are **not allowed**

## Naming Conventions (Best Practices)

### camelCase
- First letter is lowercase, first letter of each subsequent word is uppercase
- **Used for:** variables, functions, methods
```js
var firstName = "John";
var totalPrice = 100;
```

### PascalCase
- First letter of each word is capitalized
- **Used for:** classes, constructors
```js
var PascalCase = "This is Pascal Case";
var ProfileName = "This is also Pascal Case";
```

### snake_case
- Words are separated by underscores, all lowercase
- **Used for:** variable names (less common in JS, common in Python)
```js
var snake_case = "This is Snake Case";
var my_variable_name = "This is also Snake Case";
```

### SCREAMING_SNAKE_CASE
- All letters are capitalized, words separated by underscores
- **Used for:** constants
```js
const MAX_SIZE = 100;
```

## Summary Table

| Convention | Example | Usage |
|-----------|---------|-------|
| camelCase | `firstName` | Variables, functions |
| PascalCase | `ProfileName` | Classes, constructors |
| snake_case | `my_variable` | Variables (Python style) |
| SCREAMING_SNAKE_CASE | `MAX_SIZE` | Constants |
