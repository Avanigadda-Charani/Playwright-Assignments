// Given a string s consisting of words and spaces, return the length of the last word in the string. 
// Example 1: 
// Input: s = "Hello World" 
// Output: 5 
// Explanation: The last word is "World" with length 5. 
let Str1="nice day"
console.log(Str1.slice(5))
// Example 2:  
// Input: s = "   fly me   to   the moon  " 
// Output: 4 
// Explanation: The last word is "moon" with length 4. 
let Str2=" have a nice day "
let output=Str2.trim().split(" ")
console.log(output[output.length-1].length)
// Example 3:  
// Write a function to check if two strings are anagrams. 
//  Input: isAnagram('listen', 'silent') 
//  Output: true 
//  Input: isAnagram('hello', 'world')  
//  Output: false 
//  Explanation: An anagram is when you mix up the letters of a word to make a new one, using all 
// the letters. 

function isAnagram(stri1,stri2){
let sort1=stri1.split("").sort().join("")
let sort2=stri2.split("").sort().join("")
if(sort1===sort2){
    console.log("true");   
}else{
    console.log("false");
    
}
}
 isAnagram('listen','silent') 
 isAnagram('cat','rat')