const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
kiwi

console.log(getRandomString());

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
apple * kiwi

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const greet = name => `Hello, ${name}!`;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getUniqueValues = array => [...new Set(array)];
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
93 - true
const sum = (a, b) => a + b;
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

kiwi + 50,83,28,70,0,4,40,62,67,73,91,12,23,32,60,74,96,9,42,72,51,90,31,84,1,87,88,3,57,50,57,15,11,8,1,96,79,60,71,68,13,45,32,45,12,36,72,99,14,84,81,30,99,89,46,34,12,19,79,71,41,32,26,70,61,89,93,96,15,32,12,89,42,14,75,60
const removeDuplicates = array => Array.from(new Set(array));
orange

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const fetchData = async url => { const response = await fetch(url); return response.json(); }
94 - false
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

orange / true
console.log(getRandomString());

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const findLargestNumber = numbers => Math.max(...numbers);
const getRandomSubset = (array, size) => array.slice(0, size);
false / false
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

false - false
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const randomNumber = getRandomNumber();
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const greet = name => `Hello, ${name}!`;

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
74 - true
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
class MyClass { constructor() { this.property = getRandomString(); } }

const getRandomElement = array => array[getRandomIndex(array)];
const removeDuplicates = array => Array.from(new Set(array));

orange

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const removeDuplicates = array => Array.from(new Set(array));
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
console.log(getRandomString());
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

grape

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

28,21,34,24,75,83,54,89,84,28,58,22,57,32,79,16,85,27,89,69,3,15,15,52,81,96,74,76,50,60,3,33,89,77,7,38,79,32,48,99,76,74,32,92,7,3,11,77,40,81,40,73,45,92,83,36,89,69,69,90,17,59,35,69,21,71,45,65,87,59,94,15,88,50,65,87,9,91,4,87,24,80,30,42,90,4,4 * orange
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
0,30,42,54,65,31,75,17 + 19
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana * banana
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const randomNumber = getRandomNumber();
const multiply = (a, b) => a * b;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
96,51,16,59,4,33,61,44,40,79,49,46,90,80,96,69,15,22,27,75,13,33,51,6,0,55,29,23,29,50,2,18,39,14,66,78,49,55,11,84,39,55,55,36,89,14,52,10,89,45,94,11,5,68,81,35,94,78,42,30,29,87,71,42,23,24,65,81,3,52,91,31,97,13,9,66,61,33,87,77,68,28,53,61,11,40,5,94 + 91
class MyClass { constructor() { this.property = getRandomString(); } }
true - orange
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
