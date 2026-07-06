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
},

{
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",

    heroDescription:
        "Learn how to maximize profit by choosing the best day to buy and the best day to sell using a single-pass greedy approach.",

    problemStatement:
        "You are given an array prices where prices[i] is the price of a stock on the ith day. Choose a single day to buy one stock and a different day in the future to sell that stock. Return the maximum profit you can achieve. If no profit is possible, return 0.",

    difficulty: "Easy",

    tags: [
        "Array",
        "Greedy"
    ],

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Bloomberg"
    ],

    example1: {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6 - 1 = 5."
    },

    example2: {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No profitable transaction is possible, so return 0."
    },

    constraints:
        "1 <= prices.length <= 10⁵\n0 <= prices[i] <= 10⁴",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Track the minimum stock price seen so far while traversing the array.",
        "For every day, calculate the profit if you sell on that day.",
        "Keep updating the maximum profit whenever you find a better one."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Try buying the stock on every day and selling it on every future day. Calculate the profit for every possible pair and return the maximum profit."
    },

    optimalApproach: {
        title: "Optimal Greedy Approach",
        description:
            "Traverse the array once while maintaining the minimum buying price seen so far. At each day, calculate the profit by selling on that day and update the maximum profit. This achieves linear time complexity."
    }
},

{
    id: "move-zeroes",

    title: "Move Zeroes",

    heroDescription:
        "Master the two-pointer technique by moving all zeroes to the end while maintaining the relative order of non-zero elements.",

    problemStatement:
        "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Do this in-place without making a copy of the array.",

    difficulty: "Easy",

    tags: [
        "Array",
        "Two Pointers"
    ],

    companies: [
        "Amazon",
        "Microsoft",
        "Facebook",
        "Google",
        "Apple"
    ],

    example1: {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
        explanation: "All non-zero elements are shifted to the front while preserving their order."
    },

    example2: {
        input: "nums = [0]",
        output: "[0]",
        explanation: "Only one element exists, so no changes are needed."
    },

    constraints:
        "1 <= nums.length <= 10⁴\n-2³¹ <= nums[i] <= 2³¹ - 1",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Keep one pointer for placing the next non-zero element.",
        "Traverse the array once and swap whenever you find a non-zero element.",
        "The relative order of non-zero elements should remain unchanged."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Create a temporary array containing all non-zero elements followed by all zeroes. Copy the result back to the original array."
    },

    optimalApproach: {
        title: "Optimal Two Pointer Approach",
        description:
            "Maintain a pointer for the next non-zero position. Traverse the array and swap every non-zero element with that position. This performs the operation in-place with constant extra space."
    }
},

{
    id: "find-pivot-index",

    title: "Find Pivot Index",

    heroDescription:
        "Learn prefix sums to efficiently find the index where the left sum equals the right sum.",

    problemStatement:
        "Given an integer array nums, return the leftmost pivot index where the sum of all numbers strictly to the left equals the sum of all numbers strictly to the right. If no such index exists, return -1.",

    difficulty: "Easy",

    tags: [
        "Array",
        "Prefix Sum"
    ],

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Apple",
        "Adobe"
    ],

    example1: {
        input: "nums = [1,7,3,6,5,6]",
        output: "3",
        explanation: "The left sum (1+7+3 = 11) equals the right sum (5+6 = 11)."
    },

    example2: {
        input: "nums = [1,2,3]",
        output: "-1",
        explanation: "No pivot index exists."
    },

    constraints:
        "1 <= nums.length <= 10⁴\n-1000 <= nums[i] <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "First calculate the total sum of the array.",
        "Maintain a running left sum while traversing the array.",
        "Right sum can be calculated using totalSum - leftSum - currentElement."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "For every index, calculate the left sum and right sum separately. If they are equal, return that index."
    },

    optimalApproach: {
        title: "Optimal Prefix Sum Approach",
        description:
            "Calculate the total sum once. While traversing the array, maintain the left sum and compute the right sum using the total sum. This avoids recalculating sums repeatedly."
    }
},

{
    id: "product-of-array-except-self",
    title: "Product Of Array Except Self",
    difficulty: "Medium"
},

{
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium"
},

{
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium"
},

{
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium"
},

{
    id: "sort-colors",
    title: "Sort Colors",
    difficulty: "Medium"
},

{
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard"
},

{
    id: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "Hard"
},

{
    id: "median-of-two-sorted-arrays",
    title: "Median Of Two Sorted Arrays",
    difficulty: "Hard"
},

{
    id: "maximum-subarray-min-product",
    title: "Maximum Subarray Min Product",
    difficulty: "Hard"
},

{
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle In Histogram",
    difficulty: "Hard"
},

];

