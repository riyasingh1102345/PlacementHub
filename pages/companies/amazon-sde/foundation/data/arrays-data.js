const arrayQuestions = [
  {
    id: "two-sum",
    title: "Two Sum",
    heroDescription: "Master one of the most frequently asked interview questions and understand the HashMap pattern in depth.",
    problemStatement: "Given an integer array nums and an integer target, return the indices of the two numbers such that they add up to the target.",
    difficulty: "Easy",
    
    pattern: "HashMap",
    time: "10-15 min",
    acceptance: "55%",

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

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Meta"
    ],

    pattern: "HashSet",
    time: "5-10 min",
    acceptance: "61%",

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

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Bloomberg"
    ],

    pattern: "Greedy",
    time: "10-15 min",
    acceptance: "54%",

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

    companies: [
        "Amazon",
        "Microsoft",
        "Facebook",
        "Google",
        "Apple"
    ],

    pattern: "Two Pointers",
    time: "10-15 min",
    acceptance: "62%",

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

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Apple",
        "Adobe"
    ],

    pattern: "Prefix Sum",
    time: "10-15 min",
    acceptance: "58%",

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

    heroDescription:
        "Learn Prefix & Suffix Products to compute the product of every element except itself without using division.",

    problemStatement:
        "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. You must solve the problem without using the division operation and in O(n) time.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta",
        "Adobe"
    ],

    pattern: "Prefix & Suffix Arrays",

    time: "15-20 min",

    acceptance: "67%",

    example1: {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation:
            "Each element is replaced by the product of all remaining elements."
    },

    example2: {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
        explanation:
            "The presence of zero affects every product except the one excluding zero."
    },

    constraints:
`2 <= nums.length <= 10⁵
-30 <= nums[i] <= 30`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Avoid division.",
        "Calculate prefix products from left to right.",
        "Calculate suffix products from right to left.",
        "Multiply prefix and suffix products."
    ],

    bruteForce: {
        title: "Nested Loop Approach",
        description:
            "For every index, multiply every other element except itself. This requires two nested loops."
    },

    optimalApproach: {
        title: "Prefix & Suffix Products",
        description:
            "Store prefix products while traversing from left to right. Traverse from right to left maintaining suffix products and multiply them with prefix products to obtain the final answer without extra arrays."
    }
},

{
    id: "top-k-frequent-elements",

    title: "Top K Frequent Elements",

    heroDescription:
        "Master HashMap and Bucket Sort to efficiently find the k most frequent elements in an array.",

    problemStatement:
        "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Uber",
        "Meta"
    ],

    pattern: "Bucket Sort",

    time: "20-25 min",

    acceptance: "65%",

    example1: {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
        explanation:
            "1 appears three times and 2 appears twice, making them the two most frequent elements."
    },

    example2: {
        input: "nums = [1], k = 1",
        output: "[1]",
        explanation:
            "Only one unique element exists."
    },

    constraints:
`1 <= nums.length <= 10⁵
-10⁴ <= nums[i] <= 10⁴
k is in the range [1, number of unique elements].`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Count the frequency of every number.",
        "HashMap is useful for frequency counting.",
        "Bucket Sort can achieve linear time.",
        "Heap is another possible solution."
    ],

    bruteForce: {
        title: "Sorting Frequencies",
        description:
            "Count frequencies using a HashMap, sort them by frequency in descending order, and return the first k elements."
    },

    optimalApproach: {
        title: "Bucket Sort",
        description:
            "Store frequencies in buckets where each bucket index represents a frequency. Traverse buckets from highest frequency to lowest until k elements are collected."
    }
},

{
    id: "3sum",

    title: "3Sum",

    heroDescription:
        "Master Sorting and Two Pointers to efficiently find all unique triplets whose sum equals zero.",

    problemStatement:
        "Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta",
        "Adobe"
    ],

    pattern: "Two Pointers",

    time: "20-25 min",

    acceptance: "36%",

    example1: {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation:
            "These are the only unique triplets whose sum equals zero."
    },

    example2: {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation:
            "No three numbers sum to zero."
    },

    constraints:
`3 <= nums.length <= 3000
-10⁵ <= nums[i] <= 10⁵`,

    timeComplexity: "O(n²)",

    spaceComplexity: "O(1)",

    hints: [
        "Sort the array first.",
        "Fix one element at a time.",
        "Use two pointers to search for the remaining two elements.",
        "Skip duplicate values to avoid repeated triplets."
    ],

    bruteForce: {
        title: "Three Nested Loops",
        description:
            "Check every possible triplet using three nested loops and store only unique triplets."
    },

    optimalApproach: {
        title: "Sorting + Two Pointers",
        description:
            "Sort the array. Fix one element and use two pointers to find pairs whose sum equals the negative of the fixed element. Skip duplicates throughout the process."
    }
},

{
    id: "longest-consecutive-sequence",

    title: "Longest Consecutive Sequence",

    heroDescription:
        "Learn how HashSet helps find the longest consecutive sequence in linear time without sorting.",

    problemStatement:
        "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Your algorithm must run in O(n) time.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta",
        "Apple"
    ],

    pattern: "HashSet",

    time: "15-20 min",

    acceptance: "49%",

    example1: {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
        explanation:
            "The longest consecutive sequence is [1,2,3,4], whose length is 4."
    },

    example2: {
        input: "nums = [0,3,7,2,5,8,4,6,0,1]",
        output: "9",
        explanation:
            "The consecutive sequence from 0 to 8 has length 9."
    },

    constraints:
`0 <= nums.length <= 10⁵
-10⁹ <= nums[i] <= 10⁹`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Sorting gives O(n log n), but the problem asks for O(n).",
        "Store all numbers in a HashSet.",
        "Only start counting from numbers whose previous number doesn't exist."
    ],

    bruteForce: {
        title: "Sorting",
        description:
            "Sort the array and count consecutive elements while ignoring duplicates."
    },

    optimalApproach: {
        title: "HashSet",
        description:
            "Insert every element into a HashSet. Start counting only when the current number is the beginning of a sequence, then extend forward while consecutive numbers exist."
    }
},

{
    id: "sort-colors",

    title: "Sort Colors",

    heroDescription:
        "Master the Dutch National Flag Algorithm to sort an array of 0s, 1s, and 2s in a single pass using constant extra space.",

    problemStatement:
        "Given an array nums with n objects colored red, white, or blue represented by 0, 1, and 2 respectively, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. You must solve this problem without using the library's sort function.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Meta"
    ],

    pattern: "Dutch National Flag",

    time: "15-20 min",

    acceptance: "66%",

    example1: {
        input: "nums = [2,0,2,1,1,0]",
        output: "[0,0,1,1,2,2]",
        explanation:
            "The array is sorted in-place so that all 0s come first, followed by 1s and then 2s."
    },

    example2: {
        input: "nums = [2,0,1]",
        output: "[0,1,2]",
        explanation:
            "After sorting, the colors appear in the required order."
    },

    constraints:
`1 <= nums.length <= 300
nums[i] is either 0, 1, or 2.`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Avoid using the built-in sorting function.",
        "Think about maintaining three regions in the array.",
        "Use three pointers: low, mid, and high.",
        "Swap elements based on the value at the mid pointer."
    ],

    bruteForce: {
        title: "Sorting",
        description:
            "Use any comparison-based sorting algorithm or the built-in sort function to sort the array."
    },

    optimalApproach: {
        title: "Dutch National Flag Algorithm",
        description:
            "Maintain three pointers: low, mid, and high. Move 0s to the beginning, 2s to the end, and leave 1s in the middle. This sorts the array in a single traversal with constant extra space."
    }
},

{
    id: "trapping-rain-water",

    title: "Trapping Rain Water",

    heroDescription:
        "Master the Two Pointer technique to efficiently calculate the total amount of rainwater trapped between elevation bars.",

    problemStatement:
        "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water can be trapped after raining.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Meta"
    ],

    pattern: "Two Pointers",

    time: "30-35 min",

    acceptance: "64%",

    example1: {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation:
            "The elevation map traps a total of 6 units of rainwater."
    },

    example2: {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
        explanation:
            "The trapped rainwater between the bars is 9 units."
    },

    constraints:
`1 <= height.length <= 2 × 10⁴
0 <= height[i] <= 10⁵`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Water trapped depends on the minimum of the tallest bars on both sides.",
        "Precomputing leftMax and rightMax works but uses extra space.",
        "Can you optimize it using two pointers?",
        "Move the pointer with the smaller height."
    ],

    bruteForce: {
        title: "Left Max & Right Max Arrays",
        description:
            "For every index, compute the tallest bar on its left and right using two arrays. The trapped water at each index is the minimum of these heights minus the current height."
    },

    optimalApproach: {
        title: "Two Pointer Approach",
        description:
            "Maintain two pointers at both ends along with leftMax and rightMax. Move the pointer with the smaller height while updating the maximum height seen so far and accumulate the trapped water."
    }
},

{
    id: "first-missing-positive",

    title: "First Missing Positive",

    heroDescription:
        "Learn Cyclic Sort to find the smallest missing positive integer in linear time using constant extra space.",

    problemStatement:
        "Given an unsorted integer array nums, return the smallest missing positive integer. Your algorithm must run in O(n) time and use O(1) extra space.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Meta"
    ],

    pattern: "Cyclic Sort",

    time: "30-35 min",

    acceptance: "42%",

    example1: {
        input: "nums = [1,2,0]",
        output: "3",
        explanation:
            "Numbers 1 and 2 are present, so the smallest missing positive is 3."
    },

    example2: {
        input: "nums = [3,4,-1,1]",
        output: "2",
        explanation:
            "After placing positive numbers in their correct positions, 2 is found to be missing."
    },

    constraints:
`1 <= nums.length <= 10⁵
-2³¹ <= nums[i] <= 2³¹ - 1`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Ignore negative numbers and values greater than n.",
        "Each positive number belongs to a specific index.",
        "Swap elements into their correct positions.",
        "The first misplaced index reveals the answer."
    ],

    bruteForce: {
        title: "Sorting",
        description:
            "Sort the array and scan for the smallest missing positive number. This approach takes O(n log n) time."
    },

    optimalApproach: {
        title: "Cyclic Sort",
        description:
            "Place every positive integer x at index x-1 whenever possible. After rearrangement, the first index where nums[i] != i+1 indicates the smallest missing positive."
    }
},

{
    id: "median-of-two-sorted-arrays",

    title: "Median Of Two Sorted Arrays",

    heroDescription:
        "Master Binary Search Partition to efficiently find the median of two sorted arrays in logarithmic time.",

    problemStatement:
        "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall runtime complexity should be O(log(min(m, n))).",

    difficulty: "Hard",

    companies: [
        "Google",
        "Apple",
        "Microsoft",
        "Amazon"
    ],

    pattern: "Binary Search",

    time: "40-50 min",

    acceptance: "43%",

    example1: {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation:
            "After merging, the array becomes [1,2,3]. The middle element is 2."
    },

    example2: {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation:
            "After merging, the array becomes [1,2,3,4]. The median is (2+3)/2 = 2.5."
    },

    constraints:
`nums1.length == m
nums2.length == n
0 <= m, n <= 1000
1 <= m + n <= 2000
-10⁶ <= nums[i] <= 10⁶`,

    timeComplexity: "O(log(min(m,n)))",

    spaceComplexity: "O(1)",

    hints: [
        "A merge solution exists but isn't optimal.",
        "Think about partitioning the smaller array.",
        "Binary search helps find the correct partition.",
        "Compare left and right partition values."
    ],

    bruteForce: {
        title: "Merge Both Arrays",
        description:
            "Merge both sorted arrays into one sorted array and compute the median from the merged array."
    },

    optimalApproach: {
        title: "Binary Search Partition",
        description:
            "Apply binary search on the smaller array to find a partition where every element on the left is less than or equal to every element on the right. Compute the median directly from the partition."
    }
},

{
    id: "maximum-subarray-min-product",

    title: "Maximum Subarray Min Product",

    heroDescription:
        "Combine Prefix Sum and Monotonic Stack to efficiently maximize the minimum-product of a subarray.",

    problemStatement:
        "The min-product of an array is equal to the minimum value in the array multiplied by the array's sum. Given an array nums, return the maximum min-product of any non-empty subarray modulo 10⁹ + 7.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "TikTok",
        "ByteDance"
    ],

    pattern: "Monotonic Stack",

    time: "35-45 min",

    acceptance: "41%",

    example1: {
        input: "nums = [1,2,3,2]",
        output: "14",
        explanation:
            "The subarray [2,3,2] has minimum value 2 and sum 7, giving a min-product of 14."
    },

    example2: {
        input: "nums = [2,3,3,1,2]",
        output: "18",
        explanation:
            "The subarray [3,3] has minimum value 3 and sum 6, giving a min-product of 18."
    },

    constraints:
`1 <= nums.length <= 10⁵
1 <= nums[i] <= 10⁷`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Prefix sums allow quick subarray sum calculation.",
        "Find the previous and next smaller element.",
        "A Monotonic Stack helps compute boundaries efficiently.",
        "Evaluate the min-product for every possible minimum."
    ],

    bruteForce: {
        title: "Check Every Subarray",
        description:
            "Generate every possible subarray, compute its minimum and sum, then calculate the min-product."
    },

    optimalApproach: {
        title: "Monotonic Stack + Prefix Sum",
        description:
            "Use a Monotonic Stack to determine the range where each element is the minimum. Prefix sums provide the subarray sum in constant time, allowing efficient computation of the maximum min-product."
    }
},

{
    id: "largest-rectangle-in-histogram",

    title: "Largest Rectangle In Histogram",

    heroDescription:
        "Learn the Monotonic Stack technique to efficiently compute the largest rectangle that can be formed in a histogram.",

    problemStatement:
        "Given an array of integers heights representing the histogram's bar heights where the width of each bar is 1, return the area of the largest rectangle in the histogram.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Microsoft",
        "Oracle",
        "Google"
    ],

    pattern: "Monotonic Stack",

    time: "30-40 min",

    acceptance: "46%",

    example1: {
        input: "heights = [2,1,5,6,2,3]",
        output: "10",
        explanation:
            "The largest rectangle is formed using heights 5 and 6, giving an area of 10."
    },

    example2: {
        input: "heights = [2,4]",
        output: "4",
        explanation:
            "The largest rectangle has height 2 and width 2, giving an area of 4."
    },

    constraints:
`1 <= heights.length <= 10⁵
0 <= heights[i] <= 10⁴`,

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "For every bar, determine how far it can extend left and right.",
        "Find the previous and next smaller element.",
        "A Monotonic Stack computes these boundaries efficiently.",
        "Calculate the rectangle area using width × height."
    ],

    bruteForce: {
        title: "Expand Around Every Bar",
        description:
            "For every bar, expand left and right until a smaller bar is encountered and compute the rectangle area."
    },

    optimalApproach: {
        title: "Monotonic Stack",
        description:
            "Maintain an increasing stack of indices. Whenever a smaller height appears, calculate the maximum rectangle for the popped bar using its width determined by the surrounding smaller bars."
    }
},

];

