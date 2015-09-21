// Write a function, `lps()`, that takes a sequence and returns the length of the
//  **l**ongest **p**alindromic **s**ubsequence in it.

// A subsequence is ​*not*​ necessarily a continuous string. See the example code for illustrations.

```// The basics:

lps("A")
//=> 1

lps("AA")
//=> 2

lps("AAA")
//=> 3

// Now more complicated:
lps("ABCA")
//=> 3
// Either "ABA" or "ACA" is a palindromic subsequence.

lps("ABCDEFGHIJKBA")
//=> 5
// Only one of C through K included in "ABCBA", "ABDBA", etc. 

lps("BBABCBCAB")
//=> 7
// Longest palindromic sequence is "BABCBAB". “BBBBB” and “BBCBB” are also palindromic subsequences, but shorter.