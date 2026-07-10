const bitManipulationQuestions = [

{
    id: "single-number",

    title: "Single Number",

    heroDescription:
        "Learn XOR properties by finding the unique element where every other number appears exactly twice.",

    problemStatement:
        "Given a non-empty array of integers where every element appears twice except one, return that single element.",

    difficulty: "Easy",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Bit Manipulation",

    subPattern: "XOR",

    time: "10 min",

    acceptance: "74%",

    example1: {
        input: "nums = [2,2,1]",
        output: "1",
        explanation:
            "Every element appears twice except 1."
    },

    example2: {
        input: "nums = [4,1,2,1,2]",
        output: "4",
        explanation:
            "XOR cancels duplicate elements."
    },

    constraints:
        "1 <= nums.length <= 3 × 10⁴\n-3 × 10⁴ <= nums[i] <= 3 × 10⁴",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Recall the properties of XOR.",
        "a ^ a = 0.",
        "0 ^ x = x.",
        "XOR all elements together."
    ],

    bruteForce: {
        title: "Count Frequencies",
        description:
            "Use a HashMap to count the occurrences of every number."
    },

    optimalApproach: {
        title: "XOR",
        description:
            "XOR all numbers together. Duplicate values cancel out, leaving only the unique element."
    }
},

{
    id: "number-of-1-bits",

    title: "Number of 1 Bits",

    heroDescription:
        "Master bit manipulation by counting the number of set bits in a 32-bit integer.",

    problemStatement:
        "Write a function that returns the number of '1' bits in the binary representation of an unsigned integer.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Bit Manipulation",

    subPattern: "Bit Counting",

    time: "10 min",

    acceptance: "69%",

    example1: {
        input: "n = 11",
        output: "3",
        explanation:
            "Binary representation is 1011."
    },

    example2: {
        input: "n = 128",
        output: "1",
        explanation:
            "Binary representation is 10000000."
    },

    constraints:
        "Input is a 32-bit unsigned integer.",

    timeComplexity: "O(32)",

    spaceComplexity: "O(1)",

    hints: [
        "Inspect each bit.",
        "Use n & 1.",
        "Right shift the number.",
        "Brian Kernighan's algorithm is even faster."
    ],

    bruteForce: {
        title: "Check Every Bit",
        description:
            "Inspect each of the 32 bits one by one."
    },

    optimalApproach: {
        title: "Brian Kernighan Algorithm",
        description:
            "Repeatedly clear the lowest set bit using n & (n - 1) until the number becomes zero."
    }
},

{
    id: "counting-bits",

    title: "Counting Bits",

    heroDescription:
        "Learn Dynamic Programming with bit manipulation to count set bits for every number from 0 to n.",

    problemStatement:
        "Given an integer n, return an array ans where ans[i] is the number of set bits in the binary representation of i.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Bit Manipulation",

    subPattern: "Bit DP",

    time: "20 min",

    acceptance: "81%",

    example1: {
        input: "n = 2",
        output: "[0,1,1]",
        explanation:
            "0→0 bits, 1→1 bit, 2→1 bit."
    },

    example2: {
        input: "n = 5",
        output: "[0,1,1,2,1,2]",
        explanation:
            "Each value stores the count of set bits."
    },

    constraints:
        "0 <= n <= 10⁵",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Reuse previous answers.",
        "Right shift removes the last bit.",
        "The last bit contributes either 0 or 1.",
        "Build the answer incrementally."
    ],

    bruteForce: {
        title: "Count Bits Individually",
        description:
            "For every number from 0 to n, count the set bits separately."
    },

    optimalApproach: {
        title: "Bit Dynamic Programming",
        description:
            "Use the relation dp[i] = dp[i >> 1] + (i & 1) to build the answer efficiently."
    }
},

{
    id: "sum-of-two-integers",

    title: "Sum of Two Integers",

    heroDescription:
        "Master bitwise operations by adding two integers without using '+' or '-' operators.",

    problemStatement:
        "Given two integers a and b, return the sum of the two integers without using the '+' or '-' operators.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Bit Manipulation",

    subPattern: "Bitwise Addition",

    time: "20 min",

    acceptance: "52%",

    example1: {
        input: "a = 1, b = 2",
        output: "3",
        explanation:
            "Compute the sum using bitwise operations."
    },

    example2: {
        input: "a = 2, b = 3",
        output: "5",
        explanation:
            "Simulate binary addition without arithmetic operators."
    },

    constraints:
        "-1000 <= a, b <= 1000",

    timeComplexity: "O(1)",

    spaceComplexity: "O(1)",

    hints: [
        "XOR gives the sum without carry.",
        "AND identifies carry bits.",
        "Shift carry left by one position.",
        "Repeat until no carry remains."
    ],

    bruteForce: {
        title: "Use Arithmetic Operators",
        description:
            "Simply return a + b. This violates the problem constraint."
    },

    optimalApproach: {
        title: "Bitwise Simulation",
        description:
            "Use XOR for partial sums and AND with left shift for carries until the carry becomes zero."
    }
},

{
    id: "bitwise-and-of-numbers-range",

    title: "Bitwise AND of Numbers Range",

    heroDescription:
        "Learn common bit prefixes by computing the AND of every number in a given range.",

    problemStatement:
        "Given two integers left and right, return the bitwise AND of every number in the inclusive range [left, right].",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Bit Manipulation",

    subPattern: "Common Prefix",

    time: "20 min",

    acceptance: "48%",

    example1: {
        input: "left = 5, right = 7",
        output: "4",
        explanation:
            "5 & 6 & 7 = 4."
    },

    example2: {
        input: "left = 0, right = 0",
        output: "0",
        explanation:
            "Only one number exists in the range."
    },

    constraints:
        "0 <= left <= right <= 2³¹ - 1",

    timeComplexity: "O(32)",

    spaceComplexity: "O(1)",

    hints: [
        "The differing suffix bits become zero.",
        "Find the common leftmost bits.",
        "Right shift until both numbers become equal.",
        "Restore the shifted bits."
    ],

    bruteForce: {
        title: "AND Every Number",
        description:
            "Iterate through every number in the range and compute the cumulative AND."
    },

    optimalApproach: {
        title: "Common Prefix",
        description:
            "Remove differing lower bits by repeatedly shifting until both numbers become equal."
    }
},

{
    id: "maximum-xor-of-two-numbers-in-an-array",

    title: "Maximum XOR of Two Numbers in an Array",

    heroDescription:
        "Master Bitwise Trie by finding the maximum XOR value obtainable from any pair of numbers.",

    problemStatement:
        "Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < nums.length.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Bit Manipulation",

    subPattern: "Bitwise Trie",

    time: "35-40 min",

    acceptance: "63%",

    example1: {
        input: "nums = [3,10,5,25,2,8]",
        output: "28",
        explanation:
            "The maximum XOR is 5 XOR 25 = 28."
    },

    example2: {
        input: "nums = [14,70,53,83,49,91,36,80,92,51,66,70]",
        output: "127",
        explanation:
            "Choosing the optimal pair gives the maximum XOR value."
    },

    constraints:
        "1 <= nums.length <= 2 × 10⁵\n0 <= nums[i] <= 2³¹ - 1",

    timeComplexity: "O(32 × n)",

    spaceComplexity: "O(32 × n)",

    hints: [
        "Process numbers bit by bit.",
        "A Trie helps maximize opposite bits.",
        "Prefer opposite bits while traversing.",
        "Track the maximum XOR found."
    ],

    bruteForce: {
        title: "Check Every Pair",
        description:
            "Compute the XOR of every possible pair and keep the maximum value."
    },

    optimalApproach: {
        title: "Bitwise Trie",
        description:
            "Insert numbers into a binary Trie and greedily choose opposite bits while searching for the maximum XOR."
    }
},

{
    id: "minimum-one-bit-operations-to-make-integers-zero",

    title: "Minimum One Bit Operations to Make Integers Zero",

    heroDescription:
        "Learn advanced Bit Manipulation by computing the minimum operations needed to transform a number into zero.",

    problemStatement:
        "Given an integer n, return the minimum number of one-bit operations required to transform it into 0 according to the specified operation rules.",

    difficulty: "Hard",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google"
    ],

    pattern: "Bit Manipulation",

    subPattern: "Gray Code",

    time: "40-45 min",

    acceptance: "74%",

    example1: {
        input: "n = 3",
        output: "2",
        explanation:
            "The minimum sequence of valid one-bit operations requires two moves."
    },

    example2: {
        input: "n = 6",
        output: "4",
        explanation:
            "Following the allowed transitions results in four operations."
    },

    constraints:
        "0 <= n <= 10⁹",

    timeComplexity: "O(log n)",

    spaceComplexity: "O(1)",

    hints: [
        "Observe the relationship with Gray Code.",
        "The highest set bit determines the recurrence.",
        "Solve recursively for the remaining bits.",
        "Reuse previously computed transformations."
    ],

    bruteForce: {
        title: "Breadth-First Search",
        description:
            "Explore every valid one-bit transformation until reaching zero."
    },

    optimalApproach: {
        title: "Gray Code Recurrence",
        description:
            "Use the mathematical relationship between Gray Code and binary numbers to compute the minimum operations efficiently."
    }
},

];