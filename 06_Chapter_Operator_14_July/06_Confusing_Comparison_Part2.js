console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == 0); // false as null is only equal to undefined and not equal to any other value
console.log(null > 0); // false as null is only equal to undefined and not equal to any other value
console.log(null >= 0); // true as null is only equal to undefined and not equal to any other value
console.log(undefined == 0); // false as undefined is only equal to null and not equal to any other value
console.log(null == 0 || null > 0); // false as null is only equal to undefined and not equal to any other value