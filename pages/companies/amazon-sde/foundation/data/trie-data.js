const trieQuestions = [
     
{
    id: "implement-trie-prefix-tree",

    title: "Implement Trie (Prefix Tree)",

    heroDescription:
        "Learn the Trie data structure by implementing insert, search and prefix search operations efficiently.",

    problemStatement:
        "Implement a Trie with insert, search and startsWith methods.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Trie",

    subPattern: "Trie Implementation",

    time: "25 min",

    acceptance: "67%",

    example1: {
        input: '["Trie","insert","search","startsWith"]',
        output: "[null,null,true,true]",
        explanation:
            "The Trie correctly stores and searches words."
    },

    example2: {
        input: 'insert("apple"), search("app")',
        output: "false",
        explanation:
            "The complete word does not exist."
    },

    constraints:
        "1 <= word.length <= 2000",

    timeComplexity: "Insert/Search: O(L)",

    spaceComplexity: "O(N × L)",

    hints: [
        "Each node stores 26 children.",
        "Traverse one character at a time.",
        "Mark end-of-word nodes.",
        "Reuse common prefixes."
    ],

    bruteForce: {
        title: "Linear Search",
        description:
            "Store all words in a list and search them one by one."
    },

    optimalApproach: {
        title: "Trie",
        description:
            "Store characters in a prefix tree to support efficient insert and search operations."
    }
},

{
    id: "design-add-and-search-words-data-structure",

    title: "Design Add and Search Words Data Structure",

    heroDescription:
        "Extend Trie by supporting wildcard '.' searches using DFS.",

    problemStatement:
        "Design a data structure supporting addWord() and search(), where '.' can match any character.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Trie",

    subPattern: "Trie + DFS",

    time: "30 min",

    acceptance: "47%",

    example1: {
        input: 'search(".ad")',
        output: "true",
        explanation:
            "'.' matches any single character."
    },

    example2: {
        input: 'search("b..")',
        output: "true",
        explanation:
            "Wildcard characters allow multiple matching words."
    },

    constraints:
        "At most 10⁴ operations.",

    timeComplexity: "O(L × 26)",

    spaceComplexity: "O(N × L)",

    hints: [
        "Store words in a Trie.",
        "Normal characters follow one child.",
        "'.' explores all children.",
        "Use DFS."
    ],

    bruteForce: {
        title: "Scan Every Word",
        description:
            "Compare the query against every stored word."
    },

    optimalApproach: {
        title: "Trie + DFS",
        description:
            "Use DFS whenever a wildcard character appears during Trie traversal."
    }
},

{
    id: "replace-words",

    title: "Replace Words",

    heroDescription:
        "Learn prefix matching by replacing words using the shortest root stored in a Trie.",

    problemStatement:
        "Given a dictionary of root words and a sentence, replace each word with the shortest matching root.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Trie",

    subPattern: "Prefix Search",

    time: "25 min",

    acceptance: "69%",

    example1: {
        input: 'dictionary=["cat","bat","rat"]',
        output: '"the cat was rat by the bat"',
        explanation:
            "Replace words using the shortest matching root."
    },

    example2: {
        input: 'dictionary=["a","aa"]',
        output: '"a a"',
        explanation:
            "Always choose the shortest valid root."
    },

    constraints:
        "dictionary.length <= 1000",

    timeComplexity: "O(total characters)",

    spaceComplexity: "O(total characters)",

    hints: [
        "Insert all roots into a Trie.",
        "Traverse every word.",
        "Stop at the first end-of-word.",
        "Replace the word."
    ],

    bruteForce: {
        title: "Compare Every Root",
        description:
            "Check every dictionary root for every word."
    },

    optimalApproach: {
        title: "Trie Prefix Search",
        description:
            "Store roots in a Trie and stop at the shortest matching prefix."
    }
},

{
    id: "longest-word-in-dictionary",

    title: "Longest Word in Dictionary",

    heroDescription:
        "Learn Trie traversal by finding the longest word that can be built one character at a time.",

    problemStatement:
        "Given an array of strings words, return the longest word that can be built one character at a time by other words in the array. If multiple answers exist, return the lexicographically smallest one.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Trie",

    subPattern: "Trie Traversal",

    time: "25 min",

    acceptance: "55%",

    example1: {
        input: 'words = ["w","wo","wor","worl","world"]',
        output: '"world"',
        explanation:
            "Every prefix exists in the dictionary."
    },

    example2: {
        input: 'words = ["a","banana","app","appl","ap","apply","apple"]',
        output: '"apple"',
        explanation:
            "Both 'apple' and 'apply' are valid, but 'apple' is lexicographically smaller."
    },

    constraints:
        "1 <= words.length <= 1000\n1 <= words[i].length <= 30",

    timeComplexity: "O(total characters)",

    spaceComplexity: "O(total characters)",

    hints: [
        "Insert every word into a Trie.",
        "Only continue traversal if the current prefix forms a valid word.",
        "Track the longest valid word.",
        "Handle lexicographical ties."
    ],

    bruteForce: {
        title: "Check Every Word",
        description:
            "Verify whether every prefix of each word exists in the dictionary."
    },

    optimalApproach: {
        title: "Trie Traversal",
        description:
            "Store all words in a Trie and traverse only through nodes representing complete words."
    }
},

{
    id: "word-search-ii",

    title: "Word Search II",

    heroDescription:
        "Combine Trie and Backtracking to efficiently find multiple words in a character grid.",

    problemStatement:
        "Given an m × n board of characters and a list of words, return all words that can be formed by sequentially adjacent cells.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Trie",

    subPattern: "Trie + Backtracking",

    time: "45 min",

    acceptance: "39%",

    example1: {
        input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["eat","oath"]',
        explanation:
            "Only 'eat' and 'oath' can be formed from the board."
    },

    example2: {
        input: 'board = [["a","b"],["c","d"]], words = ["abcb"]',
        output: "[]",
        explanation:
            "The word cannot be formed."
    },

    constraints:
        "1 <= board.length, board[0].length <= 12\n1 <= words.length <= 3 × 10⁴",

    timeComplexity: "O(M × N × 4ᴸ)",

    spaceComplexity: "O(total characters)",

    hints: [
        "Store all words in a Trie.",
        "Start DFS from every cell.",
        "Prune invalid prefixes immediately.",
        "Backtrack after each exploration."
    ],

    bruteForce: {
        title: "Search Every Word Independently",
        description:
            "Run a separate DFS for every word in the dictionary."
    },

    optimalApproach: {
        title: "Trie + Backtracking",
        description:
            "Store all words in a Trie and perform DFS while pruning invalid prefixes."
    }
},

{
    id: "concatenated-words",

    title: "Concatenated Words",

    heroDescription:
        "Master Trie and Dynamic Programming by finding words formed by concatenating smaller dictionary words.",

    problemStatement:
        "Given an array of words, return all concatenated words that are formed by joining at least two shorter words from the same array.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Trie",

    subPattern: "Trie + DP",

    time: "40 min",

    acceptance: "49%",

    example1: {
        input: 'words = ["cat","cats","catsdog","dog","dogcatsdog"]',
        output: '["catsdog","dogcatsdog"]',
        explanation:
            "Each returned word is formed by concatenating two or more dictionary words."
    },

    example2: {
        input: 'words = ["a","aa","aaa","aaaa"]',
        output: '["aa","aaa","aaaa"]',
        explanation:
            "Each word can be built using shorter words."
    },

    constraints:
        "1 <= words.length <= 10⁴\n0 <= words[i].length <= 30",

    timeComplexity: "O(N × L²)",

    spaceComplexity: "O(total characters)",

    hints: [
        "Insert words into a Trie.",
        "Split the current word into prefixes.",
        "Check whether the remaining suffix can also be formed.",
        "Use DP or memoization."
    ],

    bruteForce: {
        title: "Try Every Split",
        description:
            "Recursively split each word at every position until a valid concatenation is found."
    },

    optimalApproach: {
        title: "Trie + Dynamic Programming",
        description:
            "Use a Trie for fast prefix lookup and DP/memoization to verify whether the remaining suffix can be formed."
    }
},

];