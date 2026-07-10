const backtrackingQuestions = [

  {
    id: "letter-combinations-of-a-phone-number",

    title: "Letter Combinations of a Phone Number",

    heroDescription:
        "Learn the fundamentals of Backtracking by generating all possible letter combinations from a phone keypad.",

    problemStatement:
        "Given a string containing digits from 2 to 9, return all possible letter combinations that the number could represent. Return the answer in any order.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Backtracking",

    subPattern: "Decision Tree",

    time: "20 min",

    acceptance: "63%",

    example1: {
        input: 'digits = "23"',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
        explanation:
            "Every digit maps to multiple letters. Generate every possible combination."
    },

    example2: {
        input: 'digits = ""',
        output: "[]",
        explanation:
            "No digits produce no combinations."
    },

    constraints:
        "0 <= digits.length <= 4\ndigits[i] is in the range ['2', '9']",

    timeComplexity: "O(4ⁿ)",

    spaceComplexity: "O(n)",

    hints: [
        "Process one digit at a time.",
        "Choose one letter from the current digit.",
        "Recursively move to the next digit.",
        "Backtrack after exploring every choice."
    ],

    bruteForce: {
        title: "Generate Every Combination",
        description:
            "Try every possible letter choice recursively until every digit has been processed."
    },

    optimalApproach: {
        title: "Backtracking",
        description:
            "Build the current string recursively and backtrack after exploring each possible letter."
    }
},

{
    id: "subsets",

    title: "Subsets",

    heroDescription:
        "Master the Include/Exclude Backtracking pattern by generating every possible subset of an array.",

    problemStatement:
        "Given an integer array nums of unique elements, return all possible subsets (the power set).",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Backtracking",

    subPattern: "Include / Exclude",

    time: "20 min",

    acceptance: "81%",

    example1: {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
        explanation:
            "Each element can either be included or excluded."
    },

    example2: {
        input: "nums = [0]",
        output: "[[],[0]]",
        explanation:
            "Only two subsets are possible."
    },

    constraints:
        "1 <= nums.length <= 10\n-10 <= nums[i] <= 10",

    timeComplexity: "O(n × 2ⁿ)",

    spaceComplexity: "O(n)",

    hints: [
        "Each element has two choices.",
        "Include it.",
        "Exclude it.",
        "Continue recursively."
    ],

    bruteForce: {
        title: "Generate Every Possibility",
        description:
            "Recursively generate every combination by deciding whether to include each element."
    },

    optimalApproach: {
        title: "Backtracking",
        description:
            "Use recursion to explore both include and exclude choices for every element."
    }
},

{
    id: "combination-sum",

    title: "Combination Sum",

    heroDescription:
        "Learn Backtracking by finding every unique combination whose sum equals the target value.",

    problemStatement:
        "Given an array of distinct integers candidates and a target integer target, return all unique combinations where the chosen numbers sum to target. You may use each number unlimited times.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Backtracking",

    subPattern: "Combination Generation",

    time: "25 min",

    acceptance: "74%",

    example1: {
        input: "candidates = [2,3,6,7], target = 7",
        output: "[[2,2,3],[7]]",
        explanation:
            "Multiple valid combinations produce the target."
    },

    example2: {
        input: "candidates = [2,3,5], target = 8",
        output: "[[2,2,2,2],[2,3,3],[3,5]]",
        explanation:
            "Each candidate may be chosen multiple times."
    },

    constraints:
        "1 <= candidates.length <= 30\n2 <= candidates[i] <= 40\nAll elements are distinct.",

    timeComplexity: "O(2ⁿ)",

    spaceComplexity: "O(target)",

    hints: [
        "Try choosing the current number.",
        "You may choose it again.",
        "Skip it and move to the next candidate.",
        "Stop when the remaining target becomes zero."
    ],

    bruteForce: {
        title: "Generate Every Combination",
        description:
            "Generate all possible combinations and keep only those whose sum equals the target."
    },

    optimalApproach: {
        title: "Backtracking",
        description:
            "Recursively build combinations while reducing the remaining target and backtracking whenever necessary."
    }
},

{
    id: "permutations",

    title: "Permutations",

    heroDescription:
        "Master Backtracking by generating every possible ordering of the given numbers.",

    problemStatement:
        "Given an array nums of distinct integers, return all possible permutations. You may return the answer in any order.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Backtracking",

    subPattern: "Permutation Generation",

    time: "20-25 min",

    acceptance: "80%",

    example1: {
        input: "nums = [1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        explanation:
            "Generate every possible ordering of the numbers."
    },

    example2: {
        input: "nums = [0,1]",
        output: "[[0,1],[1,0]]",
        explanation:
            "Both possible permutations are returned."
    },

    constraints:
        "1 <= nums.length <= 6\n-10 <= nums[i] <= 10\nAll integers are unique.",

    timeComplexity: "O(n × n!)",

    spaceComplexity: "O(n)",

    hints: [
        "Choose one unused element.",
        "Mark it as visited.",
        "Recursively build the remaining permutation.",
        "Backtrack by unmarking the element."
    ],

    bruteForce: {
        title: "Generate Every Arrangement",
        description:
            "Generate every possible ordering recursively until all elements are used."
    },

    optimalApproach: {
        title: "Backtracking",
        description:
            "Maintain a visited array and recursively build permutations by selecting unused elements."
    }
},

{
    id: "word-search",

    title: "Word Search",

    heroDescription:
        "Learn Grid Backtracking by searching for a word through adjacent cells in a character grid.",

    problemStatement:
        "Given an m × n board and a word, return true if the word exists in the grid. Letters must be constructed from sequentially adjacent cells, and the same cell cannot be used more than once.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Backtracking",

    subPattern: "Grid DFS",

    time: "30 min",

    acceptance: "45%",

    example1: {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
        explanation:
            "The word can be formed by moving through adjacent cells."
    },

    example2: {
        input: 'board = [["A","B"],["C","D"]], word = "ABCD"',
        output: "false",
        explanation:
            "The required path does not exist."
    },

    constraints:
        "1 <= m,n <= 6\n1 <= word.length <= 15",

    timeComplexity: "O(m × n × 4ᴸ)",

    spaceComplexity: "O(L)",

    hints: [
        "Try starting from every cell.",
        "Explore four directions.",
        "Mark visited cells temporarily.",
        "Backtrack after exploring every path."
    ],

    bruteForce: {
        title: "Search Every Possible Path",
        description:
            "Explore every possible path starting from every cell until the word is found."
    },

    optimalApproach: {
        title: "Grid Backtracking",
        description:
            "Use DFS with backtracking while marking visited cells to avoid revisiting them in the current path."
    }
},

{
    id: "palindrome-partitioning",

    title: "Palindrome Partitioning",

    heroDescription:
        "Master Backtracking by partitioning a string into all possible palindrome substrings.",

    problemStatement:
        "Given a string s, partition it such that every substring in the partition is a palindrome. Return all possible palindrome partitions.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Backtracking",

    subPattern: "Partition Backtracking",

    time: "30 min",

    acceptance: "73%",

    example1: {
        input: 's = "aab"',
        output: '[["a","a","b"],["aa","b"]]',
        explanation:
            "Both partitions contain only palindrome substrings."
    },

    example2: {
        input: 's = "a"',
        output: '[["a"]]',
        explanation:
            "The single character is itself a palindrome."
    },

    constraints:
        "1 <= s.length <= 16",

    timeComplexity: "O(n × 2ⁿ)",

    spaceComplexity: "O(n)",

    hints: [
        "Try every possible substring.",
        "Proceed only if the substring is a palindrome.",
        "Continue recursively from the next index.",
        "Backtrack after exploring each partition."
    ],

    bruteForce: {
        title: "Generate Every Partition",
        description:
            "Generate every possible partition of the string and keep only those where every substring is a palindrome."
    },

    optimalApproach: {
        title: "Backtracking",
        description:
            "Recursively partition the string while checking palindrome validity before extending the current partition."
    }
},

{
    id: "n-queens",

    title: "N-Queens",

    heroDescription:
        "Master Constraint-Based Backtracking by placing queens on a chessboard so that no two queens attack each other.",

    problemStatement:
        "The n-queens puzzle is the problem of placing n queens on an n × n chessboard such that no two queens attack each other. Return all distinct solutions.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Backtracking",

    subPattern: "Constraint Satisfaction",

    time: "40-45 min",

    acceptance: "72%",

    example1: {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
        explanation:
            "There are two valid arrangements for placing four queens."
    },

    example2: {
        input: "n = 1",
        output: '[["Q"]]',
        explanation:
            "A single queen is always a valid solution."
    },

    constraints:
        "1 <= n <= 9",

    timeComplexity: "O(n!)",

    spaceComplexity: "O(n²)",

    hints: [
        "Place one queen per row.",
        "Check column and diagonal conflicts.",
        "If a position is valid, place the queen.",
        "Backtrack after exploring all possibilities."
    ],

    bruteForce: {
        title: "Try Every Arrangement",
        description:
            "Generate every possible placement of queens and verify whether each arrangement is valid."
    },

    optimalApproach: {
        title: "Constraint-Based Backtracking",
        description:
            "Place queens row by row while tracking occupied columns and diagonals to prune invalid states early."
    }
},

{
    id: "sudoku-solver",

    title: "Sudoku Solver",

    heroDescription:
        "Learn advanced Backtracking by solving a Sudoku puzzle while satisfying row, column and subgrid constraints.",

    problemStatement:
        "Write a program to solve a Sudoku puzzle by filling the empty cells. Each row, column and 3×3 subgrid must contain the digits 1 through 9 exactly once.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Backtracking",

    subPattern: "Constraint Propagation",

    time: "45-50 min",

    acceptance: "61%",

    example1: {
        input: "board = Sudoku board with empty cells",
        output: "Solved Sudoku board",
        explanation:
            "Fill every empty cell while satisfying all Sudoku rules."
    },

    example2: {
        input: "Valid partially filled Sudoku",
        output: "Completed Sudoku",
        explanation:
            "Every row, column and 3×3 box satisfies the Sudoku constraints."
    },

    constraints:
        "board.length == 9\nboard[i].length == 9\nThe input board has only one unique solution.",

    timeComplexity: "O(9^(n²))",

    spaceComplexity: "O(n²)",

    hints: [
        "Find an empty cell.",
        "Try digits from 1 to 9.",
        "Check row, column and subgrid validity.",
        "Backtrack whenever a choice leads to an invalid state."
    ],

    bruteForce: {
        title: "Try Every Filling",
        description:
            "Fill every empty cell with all possible digits until a valid Sudoku configuration is found."
    },

    optimalApproach: {
        title: "Backtracking",
        description:
            "Fill one empty cell at a time while checking Sudoku constraints before recursively solving the remaining board."
    }
},

];