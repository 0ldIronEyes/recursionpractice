/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  if (idx=== nums.length) return 1;
  return nums[idx] * product(nums, idx+ 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx= 0, current = 0) {
  if (idx === words.lenght) return current;
  current = Math.max(words[idx].length, current)
  return longest(words, idx +1, current)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, otherString ="") {
  if (idx >= str.length) return otherString;
  if (idx % 2== 0) otherString+= str[idx];
  return everyOther((str, idx+1, otherString))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  let leftindex = idx;
  let rightindex = str.length - idx -1;
  if (leftindex >= rightindex) return true;
  if (str[leftindex] === str[rightindex]) { return isPalindrome(str,idx +1); }
  else return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
if (idx === arr.length) return -1;
if (arr[idx] === val) return idx;
return findIndex(arr, val, idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reverseStr =  "") {
  if (reverseStr.length === str.length) return reverseStr;
  reverseStr += str[str.length -idx - 1];
  return revString(str, idx +1, reverseStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];
  for (let key in obj)
  {
    if (typeof obj[key] ==="string") stringArray.push(obj[key]);
    if (typeof obj[key] === "object") stringArray.push(...gatherStrings(obj[key]));
  }
  return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right =arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) /2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val)
  {
    return binarySearch(arr,val, left, middle -1);
  }
  return binarySearch(arr, val, middle+1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
