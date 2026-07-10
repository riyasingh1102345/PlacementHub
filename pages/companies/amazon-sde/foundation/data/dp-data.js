const dpQuestions = [

{
    id: "climbing-stairs",

    title: "Climbing Stairs",

    heroDescription:
        "Learn the fundamentals of Dynamic Programming by counting the number of distinct ways to climb a staircase.",

    problemStatement:
        "You are climbing a staircase with n steps. Each time you can climb either 1 or 2 steps. Return the total number of distinct ways to reach the top.",

    difficulty: "Easy",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "1D DP",

    time: "10-15 min",

    acceptance: "53%",

    example1: {
        input: "n = 2",
        output: "2",
        explanation:
            "The two ways are (1+1) and (2)."
    },

    example2: {
        input: "n = 3",
        output: "3",
        explanation:
            "The three ways are (1+1+1), (1+2), and (2+1)."
    },

    constraints:
        "1 <= n <= 45",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "The answer for step i depends on previous steps.",
        "Find the recurrence relation.",
        "Store previous results.",
        "Optimize space using two variables."
    ],

    bruteForce: {
        title: "Recursive Solution",
        description:
            "Recursively try taking one step or two steps from every position."
    },

    optimalApproach: {
        title: "Dynamic Programming",
        description:
            "Use the Fibonacci recurrence to compute the number of ways while storing only the previous two results."
    }
},

{
    id: "min-cost-climbing-stairs",

    title: "Min Cost Climbing Stairs",

    heroDescription:
        "Master 1D Dynamic Programming by finding the minimum cost required to reach the top of a staircase.",

    problemStatement:
        "You are given an array cost where cost[i] is the cost of step i. Return the minimum cost to reach the top. You may start from step 0 or step 1.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Dynamic Programming",

    subPattern: "1D DP",

    time: "15 min",

    acceptance: "66%",

    example1: {
        input: "cost = [10,15,20]",
        output: "15",
        explanation:
            "Start from step 1 and pay only 15."
    },

    example2: {
        input: "cost = [1,100,1,1,1,100,1,1,100,1]",
        output: "6",
        explanation:
            "Choose the cheaper path while climbing."
    },

    constraints:
        "2 <= cost.length <= 1000\n0 <= cost[i] <= 999",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Each step depends on the previous two steps.",
        "Choose the cheaper previous path.",
        "Build the answer iteratively.",
        "Only the last two states are needed."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively compute the minimum cost from every step."
    },

    optimalApproach: {
        title: "Dynamic Programming",
        description:
            "Use DP to compute the minimum cost to reach each step while optimizing space."
    }
},

{
    id: "house-robber",

    title: "House Robber",

    heroDescription:
        "Learn Decision Dynamic Programming by maximizing the amount of money robbed without robbing adjacent houses.",

    problemStatement:
        "You are given an integer array nums representing the amount of money at each house. Return the maximum amount you can rob without robbing two adjacent houses.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Decision DP",

    time: "20 min",

    acceptance: "53%",

    example1: {
        input: "nums = [1,2,3,1]",
        output: "4",
        explanation:
            "Rob houses 1 and 3 for a total of 4."
    },

    example2: {
        input: "nums = [2,7,9,3,1]",
        output: "12",
        explanation:
            "Rob houses 2, 3 and 5 for a total of 12."
    },

    constraints:
        "1 <= nums.length <= 100\n0 <= nums[i] <= 400",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "For every house, you have two choices.",
        "Rob the current house.",
        "Skip the current house.",
        "Choose the better option using previous states."
    ],

    bruteForce: {
        title: "Recursive Choices",
        description:
            "Recursively decide whether to rob or skip each house."
    },

    optimalApproach: {
        title: "Decision Dynamic Programming",
        description:
            "Maintain the maximum profit after robbing or skipping each house and build the solution iteratively."
    }
},

{
    id: "house-robber-ii",

    title: "House Robber II",

    heroDescription:
        "Extend the House Robber problem to a circular street using Decision Dynamic Programming.",

    problemStatement:
        "You are given an integer array nums representing the amount of money at each house. All houses are arranged in a circle, meaning the first and last houses are adjacent. Return the maximum amount you can rob without robbing adjacent houses.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Decision DP",

    time: "20-25 min",

    acceptance: "44%",

    example1: {
        input: "nums = [2,3,2]",
        output: "3",
        explanation:
            "The first and last houses cannot both be robbed."
    },

    example2: {
        input: "nums = [1,2,3,1]",
        output: "4",
        explanation:
            "Rob houses 2 and 4."
    },

    constraints:
        "1 <= nums.length <= 100\n0 <= nums[i] <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "You cannot rob both the first and last house.",
        "Solve two separate House Robber problems.",
        "Exclude the first house once.",
        "Exclude the last house once and take the maximum."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Try every valid robbery combination while respecting the circular constraint."
    },

    optimalApproach: {
        title: "Decision Dynamic Programming",
        description:
            "Solve the House Robber problem twice—once excluding the first house and once excluding the last—and return the maximum."
    }
},

{
    id: "coin-change",

    title: "Coin Change",

    heroDescription:
        "Master Unbounded Knapsack by finding the minimum number of coins needed to make a target amount.",

    problemStatement:
        "Given an array of coin denominations and an integer amount, return the fewest number of coins required to make up that amount. Return -1 if it is impossible.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Unbounded Knapsack",

    time: "25-30 min",

    acceptance: "46%",

    example1: {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation:
            "11 can be formed using 5 + 5 + 1."
    },

    example2: {
        input: "coins = [2], amount = 3",
        output: "-1",
        explanation:
            "It is impossible to form the amount."
    },

    constraints:
        "1 <= coins.length <= 12\n1 <= coins[i] <= 2³¹-1\n0 <= amount <= 10⁴",

    timeComplexity: "O(amount × n)",

    spaceComplexity: "O(amount)",

    hints: [
        "Build answers from smaller amounts.",
        "Each coin can be used multiple times.",
        "Take the minimum among all choices.",
        "Initialize unreachable states carefully."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively try every possible coin until the target amount becomes zero."
    },

    optimalApproach: {
        title: "Dynamic Programming",
        description:
            "Use a one-dimensional DP array where each state stores the minimum coins needed for that amount."
    }
},

{
    id: "perfect-squares",

    title: "Perfect Squares",

    heroDescription:
        "Learn Unbounded Knapsack by finding the minimum number of perfect square numbers that sum to a given integer.",

    problemStatement:
        "Given an integer n, return the least number of perfect square numbers whose sum equals n.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Unbounded Knapsack",

    time: "25 min",

    acceptance: "58%",

    example1: {
        input: "n = 12",
        output: "3",
        explanation:
            "12 = 4 + 4 + 4."
    },

    example2: {
        input: "n = 13",
        output: "2",
        explanation:
            "13 = 4 + 9."
    },

    constraints:
        "1 <= n <= 10⁴",

    timeComplexity: "O(n√n)",

    spaceComplexity: "O(n)",

    hints: [
        "Generate all perfect squares up to n.",
        "Each square can be used multiple times.",
        "Build answers from smaller values.",
        "Take the minimum among all valid choices."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively subtract every possible perfect square until reaching zero."
    },

    optimalApproach: {
        title: "Dynamic Programming",
        description:
            "Treat perfect squares like unlimited coins and compute the minimum number needed for every value from 1 to n."
    }
},

{
    id: "unique-paths",

    title: "Unique Paths",

    heroDescription:
        "Master Grid Dynamic Programming by counting the number of unique paths from the top-left to the bottom-right corner.",

    problemStatement:
        "There is a robot on an m × n grid. The robot can only move either down or right. Return the total number of unique paths to reach the bottom-right corner.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Grid DP",

    time: "20 min",

    acceptance: "67%",

    example1: {
        input: "m = 3, n = 7",
        output: "28",
        explanation:
            "There are 28 different paths from the start to the destination."
    },

    example2: {
        input: "m = 3, n = 2",
        output: "3",
        explanation:
            "The robot has three unique paths."
    },

    constraints:
        "1 <= m, n <= 100",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(n)",

    hints: [
        "Each cell depends on its top and left cells.",
        "Initialize the first row and column.",
        "Fill the DP table row by row.",
        "The last cell stores the answer."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively explore moving right and down from every cell."
    },

    optimalApproach: {
        title: "Grid Dynamic Programming",
        description:
            "Build a DP table where each cell stores the number of paths leading to that position."
    }
},

{
    id: "minimum-path-sum",

    title: "Minimum Path Sum",

    heroDescription:
        "Learn Grid Dynamic Programming by finding the minimum cost path from the top-left to the bottom-right corner.",

    problemStatement:
        "Given a grid filled with non-negative numbers, find a path from the top-left to the bottom-right that minimizes the sum of all numbers along the path. You can only move right or down.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Grid DP",

    time: "20-25 min",

    acceptance: "66%",

    example1: {
        input: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
        output: "7",
        explanation:
            "The minimum path sum is 7."
    },

    example2: {
        input: "grid = [[1,2,3],[4,5,6]]",
        output: "12",
        explanation:
            "The minimum cost path totals 12."
    },

    constraints:
        "1 <= m,n <= 200\n0 <= grid[i][j] <= 100",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(n)",

    hints: [
        "Each cell depends on the minimum of its top and left neighbors.",
        "Initialize the first row and first column carefully.",
        "Build the DP table.",
        "The destination contains the answer."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively explore every valid path and compute its total cost."
    },

    optimalApproach: {
        title: "Grid Dynamic Programming",
        description:
            "Store the minimum cost to reach every cell using previously computed states."
    }
},

{
    id: "triangle",

    title: "Triangle",

    heroDescription:
        "Master Grid Dynamic Programming by finding the minimum path sum from the top to the bottom of a triangle.",

    problemStatement:
        "Given a triangle array, return the minimum path sum from top to bottom. At each step, you may move to adjacent numbers in the row below.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Grid DP",

    time: "25 min",

    acceptance: "57%",

    example1: {
        input: "triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]",
        output: "11",
        explanation:
            "The minimum path is 2 → 3 → 5 → 1."
    },

    example2: {
        input: "triangle = [[-10]]",
        output: "-10",
        explanation:
            "Only one path exists."
    },

    constraints:
        "1 <= triangle.length <= 200\n-10⁴ <= triangle[i][j] <= 10⁴",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(n)",

    hints: [
        "Each cell depends on two adjacent cells below it.",
        "Solve from the bottom upwards.",
        "Reuse previously computed values.",
        "The top cell becomes the final answer."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Explore every possible path from the top to the bottom of the triangle."
    },

    optimalApproach: {
        title: "Bottom-Up Dynamic Programming",
        description:
            "Process the triangle from the last row upwards, storing the minimum path sum for each position."
    }
},

{
    id: "longest-common-subsequence",

    title: "Longest Common Subsequence",

    heroDescription:
        "Learn String Dynamic Programming by finding the longest subsequence common to two strings.",

    problemStatement:
        "Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is formed by deleting some characters without changing the order of the remaining characters.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "String DP",

    time: "30 min",

    acceptance: "59%",

    example1: {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
        explanation:
            "The longest common subsequence is 'ace'."
    },

    example2: {
        input: 'text1 = "abc", text2 = "abc"',
        output: "3",
        explanation:
            "The entire string is the longest common subsequence."
    },

    constraints:
        "1 <= text1.length, text2.length <= 1000",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Compare one character from each string.",
        "If they match, include it.",
        "Otherwise skip one character.",
        "Store overlapping subproblems."
    ],

    bruteForce: {
        title: "Recursive Comparison",
        description:
            "Recursively compare characters while exploring every possible subsequence."
    },

    optimalApproach: {
        title: "String Dynamic Programming",
        description:
            "Build a DP table where dp[i][j] stores the LCS length of the first i and j characters."
    }
},

{
    id: "longest-palindromic-subsequence",

    title: "Longest Palindromic Subsequence",

    heroDescription:
        "Master String Dynamic Programming by finding the longest subsequence that forms a palindrome.",

    problemStatement:
        "Given a string s, return the length of its longest palindromic subsequence.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Dynamic Programming",

    subPattern: "String DP",

    time: "30 min",

    acceptance: "64%",

    example1: {
        input: 's = "bbbab"',
        output: "4",
        explanation:
            "The longest palindromic subsequence is 'bbbb'."
    },

    example2: {
        input: 's = "cbbd"',
        output: "2",
        explanation:
            "The longest palindromic subsequence is 'bb'."
    },

    constraints:
        "1 <= s.length <= 1000",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(n²)",

    hints: [
        "Compare characters at both ends.",
        "If they match, include both.",
        "Otherwise remove one character.",
        "Store answers for every substring."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively check every possible subsequence to find the longest palindrome."
    },

    optimalApproach: {
        title: "String Dynamic Programming",
        description:
            "Use interval DP where each state represents the longest palindromic subsequence within a substring."
    }
},

{
    id: "word-break",

    title: "Word Break",

    heroDescription:
        "Learn Decision Dynamic Programming by determining whether a string can be segmented into valid dictionary words.",

    problemStatement:
        "Given a string s and a dictionary of words wordDict, return true if s can be segmented into one or more dictionary words.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Decision DP",

    time: "30 min",

    acceptance: "49%",

    example1: {
        input: 's = "leetcode", wordDict = ["leet","code"]',
        output: "true",
        explanation:
            "The string can be segmented as 'leet code'."
    },

    example2: {
        input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]',
        output: "false",
        explanation:
            "No valid segmentation exists."
    },

    constraints:
        "1 <= s.length <= 300\n1 <= wordDict.length <= 1000",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(n)",

    hints: [
        "Try breaking the string at every position.",
        "Check whether the left part is already valid.",
        "Verify the right substring exists in the dictionary.",
        "Store previous results."
    ],

    bruteForce: {
        title: "Try Every Partition",
        description:
            "Recursively split the string at every position until a valid segmentation is found."
    },

    optimalApproach: {
        title: "Decision Dynamic Programming",
        description:
            "Use a DP array where dp[i] indicates whether the prefix ending at index i can be segmented."
    }
},

{
    id: "decode-ways",

    title: "Decode Ways",

    heroDescription:
        "Master Prefix Dynamic Programming by counting the number of valid ways to decode a numeric string into letters.",

    problemStatement:
        "A message containing letters A-Z is encoded as numbers '1' to '26'. Given a string containing only digits, return the total number of ways to decode it.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Prefix DP",

    time: "25 min",

    acceptance: "37%",

    example1: {
        input: 's = "12"',
        output: "2",
        explanation:
            "The message can be decoded as 'AB' or 'L'."
    },

    example2: {
        input: 's = "226"',
        output: "3",
        explanation:
            "Possible decodings are 'BZ', 'VF' and 'BBF'."
    },

    constraints:
        "1 <= s.length <= 100\ns contains only digits.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Each position depends on the previous one or two positions.",
        "Check if one digit forms a valid letter.",
        "Check if two digits together form a valid letter.",
        "Add the number of valid decoding ways."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively decode one digit or two digits whenever possible."
    },

    optimalApproach: {
        title: "Prefix Dynamic Programming",
        description:
            "Maintain the number of decoding ways up to each position using previous DP states."
    }
},

{
    id: "longest-increasing-subsequence",

    title: "Longest Increasing Subsequence",

    heroDescription:
        "Learn Longest Increasing Subsequence Dynamic Programming by finding the longest strictly increasing subsequence.",

    problemStatement:
        "Given an integer array nums, return the length of the longest strictly increasing subsequence.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Longest Increasing Subsequence",

    time: "30 min",

    acceptance: "59%",

    example1: {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
        explanation:
            "One longest increasing subsequence is [2,3,7,101]."
    },

    example2: {
        input: "nums = [0,1,0,3,2,3]",
        output: "4",
        explanation:
            "The longest increasing subsequence has length 4."
    },

    constraints:
        "1 <= nums.length <= 2500\n-10⁴ <= nums[i] <= 10⁴",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(n)",

    hints: [
        "The DP solution runs in O(n²).",
        "A faster solution uses Binary Search.",
        "Maintain the smallest possible tail for every subsequence length.",
        "The answer is the size of that structure."
    ],

    bruteForce: {
        title: "Generate Every Subsequence",
        description:
            "Generate every subsequence and keep the longest increasing one."
    },

    optimalApproach: {
        title: "Binary Search Dynamic Programming",
        description:
            "Maintain the minimum tail element for every increasing subsequence length using Binary Search."
    }
},

{
    id: "partition-equal-subset-sum",

    title: "Partition Equal Subset Sum",

    heroDescription:
        "Master 0/1 Knapsack Dynamic Programming by determining whether an array can be partitioned into two subsets with equal sum.",

    problemStatement:
        "Given an integer array nums, return true if it can be partitioned into two subsets such that the sum of elements in both subsets is equal.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "0/1 Knapsack",

    time: "30 min",

    acceptance: "48%",

    example1: {
        input: "nums = [1,5,11,5]",
        output: "true",
        explanation:
            "The array can be partitioned into [1,5,5] and [11]."
    },

    example2: {
        input: "nums = [1,2,3,5]",
        output: "false",
        explanation:
            "No equal partition exists."
    },

    constraints:
        "1 <= nums.length <= 200\n1 <= nums[i] <= 100",

    timeComplexity: "O(n × target)",

    spaceComplexity: "O(target)",

    hints: [
        "Find the total array sum.",
        "If it is odd, partitioning is impossible.",
        "Reduce the problem to finding a subset with sum = total/2.",
        "Apply 0/1 Knapsack DP."
    ],

    bruteForce: {
        title: "Try Every Subset",
        description:
            "Generate every subset and check whether one subset has half of the total sum."
    },

    optimalApproach: {
        title: "0/1 Knapsack",
        description:
            "Use Dynamic Programming to determine whether a subset with the target sum can be formed."
    }
},

{
    id: "target-sum",

    title: "Target Sum",

    heroDescription:
        "Master 0/1 Knapsack Dynamic Programming by assigning '+' and '-' signs to reach a target value.",

    problemStatement:
        "You are given an integer array nums and an integer target. Assign either '+' or '-' before every number and return the total number of different expressions that evaluate to the target.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "0/1 Knapsack",

    time: "30 min",

    acceptance: "49%",

    example1: {
        input: "nums = [1,1,1,1,1], target = 3",
        output: "5",
        explanation:
            "There are five different ways to assign signs to obtain the target value."
    },

    example2: {
        input: "nums = [1], target = 1",
        output: "1",
        explanation:
            "Assign '+' to the only element."
    },

    constraints:
        "1 <= nums.length <= 20\n0 <= nums[i] <= 1000\n-1000 <= target <= 1000",

    timeComplexity: "O(n × target)",

    spaceComplexity: "O(target)",

    hints: [
        "Think of '+' and '-' as partitioning the numbers.",
        "Transform the problem into a subset sum problem.",
        "Count the number of subsets with the required sum.",
        "Use Dynamic Programming."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Try assigning '+' or '-' to every number recursively."
    },

    optimalApproach: {
        title: "0/1 Knapsack",
        description:
            "Convert the problem into counting subsets with a target sum and solve it using Dynamic Programming."
    }
},

{
    id: "edit-distance",

    title: "Edit Distance",

    heroDescription:
        "Learn String Dynamic Programming by finding the minimum number of operations required to convert one string into another.",

    problemStatement:
        "Given two strings word1 and word2, return the minimum number of insertions, deletions and replacements required to convert word1 into word2.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "String DP",

    time: "40 min",

    acceptance: "58%",

    example1: {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
        explanation:
            "Replace 'h' with 'r', remove 'r', and remove 'e'."
    },

    example2: {
        input: 'word1 = "intention", word2 = "execution"',
        output: "5",
        explanation:
            "Five operations are required."
    },

    constraints:
        "0 <= word1.length, word2.length <= 500",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Compare the last characters.",
        "If they match, move diagonally.",
        "Otherwise consider insert, delete and replace.",
        "Take the minimum of the three choices."
    ],

    bruteForce: {
        title: "Recursive Comparison",
        description:
            "Recursively perform every possible operation until both strings become equal."
    },

    optimalApproach: {
        title: "String Dynamic Programming",
        description:
            "Build a DP table where each state stores the minimum operations required to convert one prefix into another."
    }
},

{
    id: "burst-balloons",

    title: "Burst Balloons",

    heroDescription:
        "Master Interval Dynamic Programming by choosing the optimal order to burst balloons for maximum coins.",

    problemStatement:
        "You are given n balloons, each with a number. Bursting balloon i earns nums[left] × nums[i] × nums[right] coins. Return the maximum coins obtainable by bursting all balloons.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Dynamic Programming",

    subPattern: "Interval DP",

    time: "45 min",

    acceptance: "61%",

    example1: {
        input: "nums = [3,1,5,8]",
        output: "167",
        explanation:
            "The optimal bursting order yields 167 coins."
    },

    example2: {
        input: "nums = [1,5]",
        output: "10",
        explanation:
            "Burst both balloons optimally."
    },

    constraints:
        "1 <= nums.length <= 300\n0 <= nums[i] <= 100",

    timeComplexity: "O(n³)",

    spaceComplexity: "O(n²)",

    hints: [
        "Think about the last balloon to burst.",
        "Choose an interval instead of the first balloon.",
        "Solve smaller intervals independently.",
        "Apply Interval Dynamic Programming."
    ],

    bruteForce: {
        title: "Try Every Bursting Order",
        description:
            "Generate every possible bursting sequence and calculate the total coins collected."
    },

    optimalApproach: {
        title: "Interval Dynamic Programming",
        description:
            "Define DP over intervals and assume each balloon is the last one burst within its interval."
    }
},

{
    id: "regular-expression-matching",

    title: "Regular Expression Matching",

    heroDescription:
        "Master String Dynamic Programming by implementing regular expression matching with '.' and '*' operators.",

    problemStatement:
        "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. The '.' matches any single character, while '*' matches zero or more occurrences of the preceding element. Return true if the entire string matches the pattern.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "String DP",

    time: "45-50 min",

    acceptance: "31%",

    example1: {
        input: 's = "aa", p = "a*"',
        output: "true",
        explanation:
            "The '*' allows multiple occurrences of 'a'."
    },

    example2: {
        input: 's = "ab", p = ".*"',
        output: "true",
        explanation:
            "'.*' matches any sequence of characters."
    },

    constraints:
        "1 <= s.length <= 20\n1 <= p.length <= 30",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Compare characters from both strings.",
        "Handle normal character matching.",
        "Treat '*' as zero or more occurrences.",
        "Store intermediate matching states."
    ],

    bruteForce: {
        title: "Recursive Matching",
        description:
            "Recursively explore every possible interpretation of '*' until a complete match is found."
    },

    optimalApproach: {
        title: "String Dynamic Programming",
        description:
            "Build a DP table where each state represents whether prefixes of the string and pattern match."
    }
},

{
    id: "best-time-to-buy-and-sell-stock-iii",

    title: "Best Time to Buy and Sell Stock III",

    heroDescription:
        "Learn State Machine Dynamic Programming by maximizing profit with at most two stock transactions.",

    problemStatement:
        "You are given an array prices where prices[i] is the price of a stock on day i. Return the maximum profit you can achieve using at most two buy-and-sell transactions.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Dynamic Programming",

    subPattern: "State Machine DP",

    time: "45 min",

    acceptance: "53%",

    example1: {
        input: "prices = [3,3,5,0,0,3,1,4]",
        output: "6",
        explanation:
            "Buy at 0, sell at 3, then buy at 1 and sell at 4."
    },

    example2: {
        input: "prices = [1,2,3,4,5]",
        output: "4",
        explanation:
            "Only one transaction is needed."
    },

    constraints:
        "1 <= prices.length <= 10⁵\n0 <= prices[i] <= 10⁵",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Track four states.",
        "First Buy.",
        "First Sell.",
        "Second Buy and Second Sell.",
        "Update the states while traversing the prices."
    ],

    bruteForce: {
        title: "Try Every Pair of Transactions",
        description:
            "Enumerate every possible pair of buy-and-sell transactions and calculate the maximum profit."
    },

    optimalApproach: {
        title: "State Machine Dynamic Programming",
        description:
            "Maintain four DP states representing the best profit after each buy and sell operation."
    }
},



];