const arrayQuestions = [
  {
    id: "two-sum",
    title: "Two Sum",
    heroDescription: "Master one of the most frequently asked interview questions and understand the HashMap pattern in depth.",
    problemStatement: "Given an integer array nums and an integer target, return the indices of the two numbers such that they add up to the target.",
    difficulty: "Easy",
    tags: [
        "Array",
        "Two Sum"
    ],
    companies: [
    "Amazon",
    "Google",
    "Microsoft",
    "Adobe",
    "Meta"
],
    example1: {
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
    explanation: "Because nums[0] + nums[1] = 9, we return [0,1]."
},
    example2: {
    input: "nums = [3,2,4], target = 6",
    output: "[1,2]",
    explanation: "Because nums[1] + nums[2] = 6, we return [1,2]."
},
    constraints: "2 <= nums.length <= 10⁴ -10⁹ <= nums[i] <= 10⁹",
    timeComplexity: "Time Complexity- O(n)",
    spaceComplexity: "Space Complexity- O(n)",

    hints: [
        "Think about what information you need while traversing the array.",
        "A HashMap can store visited numbers.",
        "For every element, check if target - current exists in the HashMap."
    ],

    bruteForce: {
    title: "Brute Force Approach",
    description: "Use two nested loops to check every possible pair. If nums[i] + nums[j] equals target, return their indices.",
},
    optimalApproach: {
    title: "Optimal Approach",
    description: "Use a HashMap to store previously seen numbers. For every element, calculate the complement (target - current element). If the complement already exists in the map, return the indices. Otherwise, store the current element in the HashMap and continue traversing the array. This reduces the time complexity from O(n²) to O(n)."
},
},

{
    id: "contains-duplicate",

    title: "Contains Duplicate",

    heroDescription: "Master one of the simplest HashSet problems and learn how to efficiently detect duplicate elements in an array.",

    problemStatement: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",

    difficulty: "Easy",

    tags: [
        "Array",
        "HashSet"
    ],

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Meta"
    ],

    example1: {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "The element 1 appears twice."
    },

    example2: {
        input: "nums = [1,2,3,4]",
        output: "false",
        explanation: "Every element is unique."
    },

    constraints: `
1 <= nums.length <= 10⁵
-10⁹ <= nums[i] <= 10⁹
`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Think about how you can quickly check whether you've already seen a number.",
        "A HashSet stores only unique values.",
        "If an element already exists in the HashSet, return true immediately."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description: "Compare every element with every other element using two nested loops. If any pair of equal elements is found, return true. Otherwise, return false after checking all pairs."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description: "Traverse the array once while maintaining a HashSet. If the current element already exists in the HashSet, return true. Otherwise, insert it into the set and continue. If the traversal finishes without finding duplicates, return false."
    }
}

];