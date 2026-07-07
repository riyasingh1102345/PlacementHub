const stringsQuestions = [
  {
    id: "valid-anagram",

    title: "Valid Anagram",

    heroDescription:
        "Master HashMap counting and frequency matching to determine whether two strings are anagrams.",

    difficulty: "Easy",

    tags: [
        "HashMap",
        "String",
        "Counting"
    ],

    problemStatement:
        "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is formed by rearranging the letters of another word using all the original letters exactly once.",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Meta"
    ],

    pattern: "HashMap",

    time: "10-15 min",

    acceptance: "65%",

    example1: {

        input:
            's = "anagram", t = "nagaram"',

        output:
            "true",

        explanation:
            "Both strings contain exactly the same characters with the same frequencies."

    },

    example2: {

        input:
            's = "rat", t = "car"',

        output:
            "false",

        explanation:
            "The characters are different, so the strings cannot be anagrams."

    },

    constraints:
`1 <= s.length, t.length <= 5 × 10⁴
s and t consist of lowercase English letters.`,

    hints: [

        "If the lengths are different, they can never be anagrams.",

        "Count the frequency of every character in one string.",

        "Compare the frequency counts of both strings."

    ],

    bruteForce: {

        title:
            "Sorting",

        description:
            "Sort both strings alphabetically and compare them. If both sorted strings are identical, they are anagrams."

    },

    optimalApproach: {

        title:
            "HashMap Frequency Count",

        description:
            "Store the frequency of every character from the first string in a HashMap (or array of size 26). Decrease the frequency while traversing the second string. If every frequency becomes zero, the strings are anagrams."

    },

    timeComplexity:
        "O(n)",

    spaceComplexity:
        "O(1)"

},

{
    id: "valid-palindrome",

    title: "Valid Palindrome",

    heroDescription:
        "Learn the Two Pointer technique to efficiently check whether a string is a palindrome while ignoring non-alphanumeric characters.",

    difficulty: "Easy",

    tags: [
        "Two Pointers",
        "String",
        "Palindrome"
    ],

    problemStatement:
        "Given a string s, return true if it is a palindrome after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters. Otherwise, return false.",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta",
        "Adobe"
    ],

    pattern: "Two Pointers",

    time: "10-15 min",

    acceptance: "52%",

    example1: {

        input:
            's = "A man, a plan, a canal: Panama"',

        output:
            "true",

        explanation:
            "After removing non-alphanumeric characters and converting to lowercase, the string becomes 'amanaplanacanalpanama', which is a palindrome."

    },

    example2: {

        input:
            's = "race a car"',

        output:
            "false",

        explanation:
            "After processing, the string becomes 'raceacar', which is not a palindrome."

    },

    constraints:
`1 <= s.length <= 2 × 10⁵
s consists of printable ASCII characters.`,

    hints: [

        "Ignore spaces, punctuation and special characters.",

        "Convert characters to lowercase before comparing.",

        "Use two pointers from both ends of the string."

    ],

    bruteForce: {

        title:
            "Build Clean String",

        description:
            "Create a new string containing only lowercase alphanumeric characters. Reverse it and compare both strings."

    },

    optimalApproach: {

        title:
            "Two Pointers",

        description:
            "Maintain two pointers, one at the beginning and one at the end. Skip non-alphanumeric characters and compare lowercase characters. Move inward until the pointers meet."

    },

    timeComplexity:
        "O(n)",

    spaceComplexity:
        "O(1)"

},

{
    id: "reverse-string",

    title: "Reverse String",

    heroDescription:
        "Learn the Two Pointers technique to reverse a character array efficiently in-place.",

    problemStatement:
        "Write a function that reverses an array of characters in-place without using extra space.",

    difficulty: "Easy",

    companies: [
        "Microsoft",
        "Amazon",
        "Apple",
        "Adobe",
        "Meta"
    ],

    pattern: "Two Pointers",

    time: "5-10 min",

    acceptance: "79%",

    example1: {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
        explanation: "Swap characters from both ends until the pointers meet."
    },

    example2: {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
        explanation: "Reverse the array in-place using two pointers."
    },

    constraints:
        "1 <= s.length <= 10⁵\ns[i] is a printable ASCII character.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Use two pointers.",
        "Start one pointer from the beginning and one from the end.",
        "Swap characters while left < right.",
        "No extra array is required."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Create another array in reverse order and copy it back to the original array. This uses extra memory."
    },

    optimalApproach: {
        title: "Optimal Two Pointers Approach",
        description:
            "Maintain two pointers at the beginning and end of the array. Swap the characters and move both pointers toward the center until they meet."
    }
},

{
    id: "longest-common-prefix",

    title: "Longest Common Prefix",

    heroDescription:
        "Learn Vertical Scanning to efficiently find the longest common prefix among multiple strings.",

    problemStatement:
        "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",

    difficulty: "Easy",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Apple"
    ],

    pattern: "String Traversal",

    time: "10-15 min",

    acceptance: "45%",

    example1: {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
        explanation:
            'All strings share the prefix "fl".'
    },

    example2: {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation:
            "There is no common prefix among the given strings."
    },

    constraints:
        "1 <= strs.length <= 200\n0 <= strs[i].length <= 200\nstrs[i] consists of only lowercase English letters.",

    timeComplexity: "O(n × m)",

    spaceComplexity: "O(1)",

    hints: [
        "Take the first string as a reference.",
        "Compare characters column by column.",
        "Stop immediately when a mismatch occurs.",
        "Return the prefix built so far."
    ],

    bruteForce: {
        title: "Character-by-Character Comparison",
        description:
            "Compare every character of the first string with the corresponding characters in all other strings until a mismatch occurs."
    },

    optimalApproach: {
        title: "Vertical Scanning",
        description:
            "Treat every string as a column. Compare characters at the same index across all strings. As soon as one mismatch is found, return the prefix collected so far."
    }
},

{
    id: "find-the-index-of-the-first-occurrence-in-a-string",

    title: "Find the Index of the First Occurrence in a String",

    heroDescription:
        "Master String Matching to locate the first occurrence of one string inside another efficiently.",

    problemStatement:
        "Given two strings haystack and needle, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",

    difficulty: "Easy",

    companies: [
        "Google",
        "Amazon",
        "Microsoft",
        "Adobe"
    ],

    pattern: "String Matching",

    time: "10-15 min",

    acceptance: "44%",

    example1: {
        input: 'haystack = "sadbutsad", needle = "sad"',
        output: "0",
        explanation:
            'The substring "sad" first appears at index 0.'
    },

    example2: {
        input: 'haystack = "leetcode", needle = "leeto"',
        output: "-1",
        explanation:
            'The substring "leeto" does not exist in "leetcode".'
    },

    constraints:
        "1 <= haystack.length, needle.length <= 10⁴\nhaystack and needle consist of lowercase English characters.",

    timeComplexity: "O(n × m)",

    spaceComplexity: "O(1)",

    hints: [
        "Try matching the pattern from every possible starting position.",
        "Compare characters one by one.",
        "Stop comparing as soon as a mismatch occurs.",
        "Return the first matching index."
    ],

    bruteForce: {
        title: "Naive String Matching",
        description:
            "Check every possible starting position in the haystack and compare the substring with the needle character by character."
    },

    optimalApproach: {
        title: "Sliding Comparison",
        description:
            "Iterate through every valid starting index of the haystack and compare characters with the needle. Return the first index where all characters match; otherwise return -1."
    }
},

{
    id: "longest-substring-without-repeating-characters",

    title: "Longest Substring Without Repeating Characters",

    heroDescription:
        "Master the Sliding Window technique to efficiently find the longest substring containing unique characters.",

    problemStatement:
        "Given a string s, find the length of the longest substring without repeating characters.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta",
        "Adobe"
    ],

    pattern: "Sliding Window",

    time: "15-20 min",

    acceptance: "36%",

    example1: {
        input: 's = "abcabcbb"',
        output: "3",
        explanation:
            'The answer is "abc", with length 3.'
    },

    example2: {
        input: 's = "bbbbb"',
        output: "1",
        explanation:
            'The answer is "b", with length 1.'
    },

    constraints:
        "0 <= s.length <= 5 × 10⁴\ns consists of English letters, digits, symbols and spaces.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(min(n, charset))",

    hints: [
        "Maintain a sliding window using two pointers.",
        "Store the last occurrence of each character.",
        "Move the left pointer whenever a duplicate is found.",
        "Keep updating the maximum window size."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Generate every possible substring and check whether all characters are unique using a HashSet."
    },

    optimalApproach: {
        title: "Sliding Window + HashMap",
        description:
            "Use two pointers to maintain a window of unique characters. Store each character's last index in a HashMap and adjust the left pointer whenever a duplicate is encountered."
    }
},

{
    id: "longest-substring-without-repeating-characters",

    title: "Longest Substring Without Repeating Characters",

    heroDescription:
        "Master the Sliding Window technique to efficiently find the longest substring containing unique characters.",

    problemStatement:
        "Given a string s, find the length of the longest substring without repeating characters.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta",
        "Adobe"
    ],

    pattern: "Sliding Window",

    time: "15-20 min",

    acceptance: "36%",

    example1: {
        input: 's = "abcabcbb"',
        output: "3",
        explanation:
            'The answer is "abc", with length 3.'
    },

    example2: {
        input: 's = "bbbbb"',
        output: "1",
        explanation:
            'The answer is "b", with length 1.'
    },

    constraints:
        "0 <= s.length <= 5 × 10⁴\ns consists of English letters, digits, symbols and spaces.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(min(n, charset))",

    hints: [
        "Maintain a sliding window using two pointers.",
        "Store the last occurrence of each character.",
        "Move the left pointer whenever a duplicate is found.",
        "Keep updating the maximum window size."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Generate every possible substring and check whether all characters are unique using a HashSet."
    },

    optimalApproach: {
        title: "Sliding Window + HashMap",
        description:
            "Use two pointers to maintain a window of unique characters. Store each character's last index in a HashMap and adjust the left pointer whenever a duplicate is encountered."
    }
},

{
    id: "longest-repeating-character-replacement",

    title: "Longest Repeating Character Replacement",

    heroDescription:
        "Master the Sliding Window technique to find the longest substring that can be transformed into repeating characters with at most k replacements.",

    problemStatement:
        "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character at most k times. Return the length of the longest substring containing the same letter after performing the replacements.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Meta",
        "Google",
        "Microsoft"
    ],

    pattern: "Sliding Window",

    time: "20-25 min",

    acceptance: "58%",

    example1: {
        input: 's = "ABAB", k = 2',
        output: "4",
        explanation:
            'Replace the two Bs with As (or vice versa) to obtain "AAAA".'
    },

    example2: {
        input: 's = "AABABBA", k = 1',
        output: "4",
        explanation:
            'Replace one character to obtain the longest repeating substring of length 4.'
    },

    constraints:
        "1 <= s.length <= 10⁵\n0 <= k <= s.length\ns consists of only uppercase English letters.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Use a sliding window.",
        "Track the frequency of each character.",
        "Keep the count of the most frequent character in the current window.",
        "Shrink the window whenever replacements required exceed k."
    ],

    bruteForce: {
        title: "Check Every Substring",
        description:
            "Generate every substring, calculate the frequency of every character, and determine whether it can be converted into repeating characters using at most k replacements."
    },

    optimalApproach: {
        title: "Sliding Window + Frequency Count",
        description:
            "Expand the window while tracking character frequencies. If the number of required replacements exceeds k, shrink the window from the left. Keep updating the maximum valid window length."
    }
},

{
    id: "longest-palindromic-substring",

    title: "Longest Palindromic Substring",

    heroDescription:
        "Learn the Expand Around Center technique to efficiently find the longest palindromic substring.",

    problemStatement:
        "Given a string s, return the longest palindromic substring in s.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Apple"
    ],

    pattern: "Expand Around Center",

    time: "20-25 min",

    acceptance: "35%",

    example1: {
        input: 's = "babad"',
        output: '"bab"',
        explanation:
            '"aba" is also a valid answer.'
    },

    example2: {
        input: 's = "cbbd"',
        output: '"bb"',
        explanation:
            '"bb" is the longest palindromic substring.'
    },

    constraints:
        "1 <= s.length <= 1000\ns consists of only English letters and digits.",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(1)",

    hints: [
        "Every palindrome has a center.",
        "Try expanding around every character.",
        "Consider both odd-length and even-length palindromes.",
        "Keep track of the longest palindrome found."
    ],

    bruteForce: {
        title: "Generate Every Substring",
        description:
            "Generate all possible substrings and check whether each substring is a palindrome."
    },

    optimalApproach: {
        title: "Expand Around Center",
        description:
            "Treat every character and every adjacent pair as the center of a palindrome. Expand outward while the characters match and update the longest palindrome."
    }
},

{
    id: "decode-string",

    title: "Decode String",

    heroDescription:
        "Master Stack-based parsing to decode nested encoded strings efficiently.",

    problemStatement:
        "Given an encoded string s, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. The input is guaranteed to be valid, and there are no extra spaces or malformed brackets.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Stack",

    time: "20-25 min",

    acceptance: "59%",

    example1: {
        input: 's = "3[a]2[bc]"',
        output: '"aaabcbc"',
        explanation:
            'The substring "a" is repeated 3 times and "bc" is repeated 2 times.'
    },

    example2: {
        input: 's = "3[a2[c]]"',
        output: '"accaccacc"',
        explanation:
            'Decode the inner substring first, then repeat the outer substring.'
    },

    constraints:
        "1 <= s.length <= 30\ns consists of lowercase English letters, digits, and square brackets.\nThe input is guaranteed to be valid.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Use a stack to process the string.",
        "Push characters until you encounter a closing bracket.",
        "Extract the encoded substring and its repeat count.",
        "Repeat the substring and push it back onto the stack."
    ],

    bruteForce: {
        title: "Recursive Parsing",
        description:
            "Recursively parse every nested encoded substring and expand it until the entire string is decoded."
    },

    optimalApproach: {
        title: "Stack-Based Parsing",
        description:
            "Traverse the string character by character using a stack. When a closing bracket is encountered, pop characters to build the encoded substring, retrieve its repeat count, repeat the substring accordingly, and push the decoded result back onto the stack. Continue until the entire string is processed."
    }
},

{
    id: "minimum-window-substring",

    title: "Minimum Window Substring",

    heroDescription:
        "Master the Variable Sliding Window technique to find the smallest substring containing all required characters.",

    problemStatement:
        "Given two strings s and t, return the minimum window substring of s such that every character in t is included in the window. If there is no such substring, return an empty string.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Google",
        "Meta",
        "Bloomberg"
    ],

    pattern: "Sliding Window",

    time: "35-45 min",

    acceptance: "44%",

    example1: {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation:
            '"BANC" is the smallest substring containing A, B and C.'
    },

    example2: {
        input: 's = "a", t = "aa"',
        output: '""',
        explanation:
            "No valid window exists."
    },

    constraints:
        "1 <= s.length, t.length <= 10⁵\ns and t consist of English letters.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Use two pointers.",
        "Maintain the frequency of required characters.",
        "Expand the window until all characters are included.",
        "Shrink the window while maintaining validity."
    ],

    bruteForce: {
        title: "Check Every Substring",
        description:
            "Generate every possible substring and check whether it contains all the characters of t."
    },

    optimalApproach: {
        title: "Variable Sliding Window",
        description:
            "Use two pointers and frequency maps. Expand the window until it contains all required characters, then shrink it as much as possible while maintaining validity to obtain the minimum window."
    }
},

{
    id: "edit-distance",

    title: "Edit Distance",

    heroDescription:
        "Learn Dynamic Programming to calculate the minimum number of operations required to transform one string into another.",

    problemStatement:
        "Given two strings word1 and word2, return the minimum number of operations required to convert word1 into word2. You may perform insert, delete, or replace operations.",

    difficulty: "Hard",

    companies: [
        "Google",
        "Amazon",
        "Microsoft",
        "Apple"
    ],

    pattern: "Dynamic Programming",

    time: "35-45 min",

    acceptance: "59%",

    example1: {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
        explanation:
            'Replace "h" with "r", remove "r", and remove "e".'
    },

    example2: {
        input: 'word1 = "intention", word2 = "execution"',
        output: "5",
        explanation:
            "Five insert, delete, or replace operations are required."
    },

    constraints:
        "0 <= word1.length, word2.length <= 500\nword1 and word2 consist of lowercase English letters.",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Think about the answer for smaller prefixes.",
        "If characters match, no operation is needed.",
        "Otherwise consider insert, delete, and replace.",
        "Store intermediate answers in a DP table."
    ],

    bruteForce: {
        title: "Recursive Solution",
        description:
            "Try every possible insert, delete, and replace operation recursively. This leads to many overlapping subproblems."
    },

    optimalApproach: {
        title: "Dynamic Programming",
        description:
            "Construct a DP table where dp[i][j] represents the minimum operations needed to convert the first i characters of word1 into the first j characters of word2. Fill the table using previously computed states."
    }
},

{
    id: "regular-expression-matching",

    title: "Regular Expression Matching",

    heroDescription:
        "Master Dynamic Programming to perform full regular expression matching using '.' and '*'.",

    problemStatement:
        "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' Matches any single character, while '*' matches zero or more of the preceding element. The matching should cover the entire input string.",

    difficulty: "Hard",

    companies: [
        "Google",
        "Amazon",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    time: "40-50 min",

    acceptance: "29%",

    example1: {
        input: 's = "aa", p = "a"',
        output: "false",
        explanation:
            "The pattern matches only one character while the string contains two."
    },

    example2: {
        input: 's = "aa", p = "a*"',
        output: "true",
        explanation:
            "The '*' allows the preceding character 'a' to appear multiple times."
    },

    constraints:
        "1 <= s.length <= 20\n1 <= p.length <= 30\ns contains only lowercase English letters.\np contains lowercase letters, '.', and '*'.",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Dynamic Programming is the key.",
        "Handle '.' as a wildcard.",
        "Treat '*' as matching zero or multiple preceding characters.",
        "Build the solution for smaller prefixes first."
    ],

    bruteForce: {
        title: "Recursive Backtracking",
        description:
            "Recursively try every valid interpretation of '.' and '*' until the pattern is fully matched."
    },

    optimalApproach: {
        title: "Dynamic Programming",
        description:
            "Use a DP table where dp[i][j] represents whether the first i characters of the string match the first j characters of the pattern. Carefully handle '.' and '*' transitions."
    }
},

{
    id: "wildcard-matching",

    title: "Wildcard Matching",

    heroDescription:
        "Learn Dynamic Programming to match strings containing '?' and '*' wildcard characters.",

    problemStatement:
        "Given an input string s and a pattern p, implement wildcard pattern matching where '?' matches any single character and '*' matches any sequence of characters (including the empty sequence). The matching should cover the entire input string.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Google",
        "Adobe",
        "Microsoft"
    ],

    pattern: "Dynamic Programming",

    time: "40-50 min",

    acceptance: "30%",

    example1: {
        input: 's = "aa", p = "a"',
        output: "false",
        explanation:
            "The pattern matches only one character."
    },

    example2: {
        input: 's = "adceb", p = "*a*b"',
        output: "true",
        explanation:
            "The '*' characters successfully match the intermediate characters."
    },

    constraints:
        "0 <= s.length, p.length <= 2000\ns consists of lowercase English letters.\np consists of lowercase English letters, '?' and '*'.",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Think similarly to Regular Expression Matching.",
        "Handle '?' as exactly one character.",
        "Handle '*' as zero or more characters.",
        "DP helps avoid repeated computations."
    ],

    bruteForce: {
        title: "Recursive Matching",
        description:
            "Try every possible expansion of '*' recursively until either a valid match is found or all possibilities are exhausted."
    },

    optimalApproach: {
        title: "Dynamic Programming",
        description:
            "Construct a DP table to determine whether prefixes of the string and pattern match while efficiently handling '?' and '*'."
    }
},

{
    id: "text-justification",

    title: "Text Justification",

    heroDescription:
        "Master Greedy algorithms to format text with evenly distributed spaces across each line.",

    problemStatement:
        "Given an array of words and a maximum line width maxWidth, format the text so that each line has exactly maxWidth characters and is fully justified.",

    difficulty: "Hard",

    companies: [
        "Google",
        "Amazon",
        "Apple",
        "LinkedIn"
    ],

    pattern: "Greedy",

    time: "35-45 min",

    acceptance: "48%",

    example1: {
        input: 'words = ["This","is","an","example","of","text","justification."], maxWidth = 16',
        output: '["This    is    an","example  of text","justification.  "]',
        explanation:
            "Spaces are distributed evenly to fully justify each line."
    },

    example2: {
        input: 'words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16',
        output: '["What   must   be","acknowledgment  ","shall be        "]',
        explanation:
            "The last line is left-justified, while previous lines are fully justified."
    },

    constraints:
        "1 <= words.length <= 300\n1 <= words[i].length <= 20\nwords[i] contains only English letters.\n1 <= maxWidth <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Process one line at a time.",
        "Greedily fit as many words as possible.",
        "Distribute extra spaces evenly.",
        "Treat the last line differently by left-justifying it."
    ],

    bruteForce: {
        title: "Manual Line Construction",
        description:
            "Build every line manually while trying different space distributions until the line reaches the required width."
    },

    optimalApproach: {
        title: "Greedy Line Construction",
        description:
            "Greedily place the maximum number of words in each line, then distribute the remaining spaces evenly between words. Handle the last line separately using left justification."
    }
},


];

