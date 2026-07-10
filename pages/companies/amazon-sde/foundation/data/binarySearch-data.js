const binarySearchQuestions = [

 {
    id: "binary-search",

    title: "Binary Search",

    heroDescription:
        "Master the fundamental Binary Search algorithm to efficiently find a target element in a sorted array.",

    problemStatement:
        "Given a sorted array of integers nums and an integer target, return the index of target if it exists. Otherwise, return -1.",

    difficulty: "Easy",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Classic Binary Search",

    time: "10-15 min",

    acceptance: "59%",

    example1: {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation:
            "9 exists at index 4."
    },

    example2: {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation:
            "2 does not exist in the array."
    },

    constraints:
        "1 <= nums.length <= 10⁴\n-10⁴ <= nums[i], target <= 10⁴\nAll integers are unique.\nnums is sorted in ascending order.",

    timeComplexity: "O(log n)",

    spaceComplexity: "O(1)",

    hints: [
        "Always maintain left and right pointers.",
        "Find the middle index carefully.",
        "Compare the middle element with the target.",
        "Discard half of the search space every iteration."
    ],

    bruteForce: {
        title: "Linear Search",
        description:
            "Traverse the array from left to right until the target is found."
    },

    optimalApproach: {
        title: "Binary Search",
        description:
            "Repeatedly divide the search space in half until the target is found or the range becomes empty."
    }
},

{
    id: "search-insert-position",

    title: "Search Insert Position",

    heroDescription:
        "Learn how Binary Search can determine the correct insertion index in a sorted array.",

    problemStatement:
        "Given a sorted array of distinct integers and a target value, return its index if found. Otherwise, return the index where it should be inserted.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Adobe"
    ],

    pattern: "Binary Search",

    time: "10-15 min",

    acceptance: "48%",

    example1: {
        input: "nums = [1,3,5,6], target = 5",
        output: "2",
        explanation:
            "Target already exists at index 2."
    },

    example2: {
        input: "nums = [1,3,5,6], target = 2",
        output: "1",
        explanation:
            "2 should be inserted before 3."
    },

    constraints:
        "1 <= nums.length <= 10⁴\n-10⁴ <= nums[i], target <= 10⁴",

    timeComplexity: "O(log n)",

    spaceComplexity: "O(1)",

    hints: [
        "Treat insertion position as the first element greater than or equal to the target.",
        "Binary Search still works.",
        "Track the left boundary carefully.",
        "The final left pointer is the answer."
    ],

    bruteForce: {
        title: "Linear Scan",
        description:
            "Traverse the array until finding the first element greater than or equal to the target."
    },

    optimalApproach: {
        title: "Binary Search",
        description:
            "Use Binary Search to directly locate the insertion position in logarithmic time."
    }
},

{
    id: "guess-number-higher-or-lower",

    title: "Guess Number Higher or Lower",

    heroDescription:
        "Practice Binary Search using an interactive guessing API to efficiently identify the hidden number.",

    problemStatement:
        "We are guessing a number between 1 and n. Use the provided guess() API to determine the picked number using the fewest calls possible.",

    difficulty: "Easy",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Binary Search",

    time: "10 min",

    acceptance: "55%",

    example1: {
        input: "n = 10, pick = 6",
        output: "6",
        explanation:
            "Binary Search narrows down the answer until the picked number is found."
    },

    example2: {
        input: "n = 1, pick = 1",
        output: "1",
        explanation:
            "Only one possible answer exists."
    },

    constraints:
        "1 <= n <= 2³¹ - 1",

    timeComplexity: "O(log n)",

    spaceComplexity: "O(1)",

    hints: [
        "Use the guess() API result to decide the search direction.",
        "Maintain low and high pointers.",
        "Discard half the search space after every guess.",
        "Stop when guess() returns 0."
    ],

    bruteForce: {
        title: "Sequential Guessing",
        description:
            "Guess every number from 1 to n until the correct answer is found."
    },

    optimalApproach: {
        title: "Binary Search",
        description:
            "Use Binary Search to minimize the number of API calls by halving the search space each time."
    }
},

{
    id: "search-in-rotated-sorted-array",

    title: "Search in Rotated Sorted Array",

    heroDescription:
        "Learn modified Binary Search to efficiently locate an element in a rotated sorted array.",

    problemStatement:
        "Given a rotated sorted array nums and an integer target, return its index if found. Otherwise, return -1.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Modified Binary Search",

    time: "20-25 min",

    acceptance: "42%",

    example1: {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
        explanation:
            "Target exists at index 4."
    },

    example2: {
        input: "nums = [4,5,6,7,0,1,2], target = 3",
        output: "-1",
        explanation:
            "Target does not exist in the array."
    },

    constraints:
        "1 <= nums.length <= 5000\n-10⁴ <= nums[i], target <= 10⁴\nAll values are unique.",

    timeComplexity: "O(log n)",

    spaceComplexity: "O(1)",

    hints: [
        "One half is always sorted.",
        "Identify the sorted half.",
        "Check whether the target lies inside it.",
        "Discard the other half."
    ],

    bruteForce: {
        title: "Linear Search",
        description:
            "Traverse every element until the target is found."
    },

    optimalApproach: {
        title: "Modified Binary Search",
        description:
            "Determine which half is sorted during every iteration and continue searching only in the relevant half."
    }
},

{
    id: "find-minimum-in-rotated-sorted-array",

    title: "Find Minimum in Rotated Sorted Array",

    heroDescription:
        "Master Binary Search by locating the minimum element in a rotated sorted array.",

    problemStatement:
        "Suppose an array sorted in ascending order is rotated. Return the minimum element in the array.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Modified Binary Search",

    time: "20 min",

    acceptance: "53%",

    example1: {
        input: "nums = [3,4,5,1,2]",
        output: "1",
        explanation:
            "1 is the smallest element."
    },

    example2: {
        input: "nums = [4,5,6,7,0,1,2]",
        output: "0",
        explanation:
            "0 is the minimum element."
    },

    constraints:
        "1 <= nums.length <= 5000\n-5000 <= nums[i] <= 5000\nAll integers are unique.",

    timeComplexity: "O(log n)",

    spaceComplexity: "O(1)",

    hints: [
        "The minimum lies in the unsorted half.",
        "Compare mid with the rightmost element.",
        "Discard the sorted half.",
        "Eventually left points to the minimum."
    ],

    bruteForce: {
        title: "Linear Scan",
        description:
            "Traverse the array while keeping track of the smallest value."
    },

    optimalApproach: {
        title: "Modified Binary Search",
        description:
            "Compare the middle element with the right boundary to eliminate half of the search space."
    }
},

{
    id: "koko-eating-bananas",

    title: "Koko Eating Bananas",

    heroDescription:
        "Learn Binary Search on Answer by finding the minimum eating speed that satisfies a time constraint.",

    problemStatement:
        "Koko loves bananas. Given piles of bananas and h hours, return the minimum integer eating speed required to finish all bananas within h hours.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe"
    ],

    pattern: "Binary Search on Answer",

    time: "25-30 min",

    acceptance: "49%",

    example1: {
        input: "piles = [3,6,7,11], h = 8",
        output: "4",
        explanation:
            "An eating speed of 4 bananas per hour finishes all piles within 8 hours."
    },

    example2: {
        input: "piles = [30,11,23,4,20], h = 5",
        output: "30",
        explanation:
            "Koko must eat at least 30 bananas per hour."
    },

    constraints:
        "1 <= piles.length <= 10⁴\n1 <= piles[i] <= 10⁹\npiles.length <= h <= 10⁹",

    timeComplexity: "O(n log m)",

    spaceComplexity: "O(1)",

    hints: [
        "The answer lies between 1 and the largest pile.",
        "Try a speed.",
        "Calculate total hours required.",
        "Binary Search the minimum valid speed."
    ],

    bruteForce: {
        title: "Try Every Speed",
        description:
            "Check every possible eating speed until finding the smallest valid one."
    },

    optimalApproach: {
        title: "Binary Search on Answer",
        description:
            "Binary Search the eating speed while verifying whether Koko can finish within the allotted time."
    }
},

{
    id: "capacity-to-ship-packages-within-d-days",

    title: "Capacity To Ship Packages Within D Days",

    heroDescription:
        "Master Binary Search on Answer by finding the minimum ship capacity required to deliver all packages within the given number of days.",

    problemStatement:
        "A conveyor belt ships packages in order. Return the least weight capacity of the ship that allows all packages to be shipped within days days.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Binary Search on Answer",

    time: "25-30 min",

    acceptance: "70%",

    example1: {
        input: "weights = [1,2,3,4,5,6,7,8,9,10], days = 5",
        output: "15",
        explanation:
            "A ship capacity of 15 allows all packages to be delivered within 5 days."
    },

    example2: {
        input: "weights = [3,2,2,4,1,4], days = 3",
        output: "6",
        explanation:
            "The minimum valid ship capacity is 6."
    },

    constraints:
        "1 <= days <= weights.length <= 5 × 10⁴\n1 <= weights[i] <= 500",

    timeComplexity: "O(n log m)",

    spaceComplexity: "O(1)",

    hints: [
        "The answer lies between the maximum package weight and the total weight.",
        "Try a ship capacity.",
        "Count how many days are required.",
        "Binary Search the smallest valid capacity."
    ],

    bruteForce: {
        title: "Try Every Capacity",
        description:
            "Test every possible ship capacity until finding the smallest one that satisfies the condition."
    },

    optimalApproach: {
        title: "Binary Search on Answer",
        description:
            "Binary Search the ship capacity while checking whether all packages can be delivered within the given number of days."
    }
},

{
    id: "find-peak-element",

    title: "Find Peak Element",

    heroDescription:
        "Learn how Binary Search can locate a peak element without scanning the entire array.",

    problemStatement:
        "Given an integer array nums, return the index of any peak element. A peak element is greater than its neighbors.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Binary Search",

    time: "20 min",

    acceptance: "46%",

    example1: {
        input: "nums = [1,2,3,1]",
        output: "2",
        explanation:
            "3 is greater than both of its neighbors."
    },

    example2: {
        input: "nums = [1,2,1,3,5,6,4]",
        output: "5",
        explanation:
            "6 is one possible peak element."
    },

    constraints:
        "1 <= nums.length <= 1000\n-2³¹ <= nums[i] <= 2³¹-1",

    timeComplexity: "O(log n)",

    spaceComplexity: "O(1)",

    hints: [
        "Compare the middle element with its next element.",
        "Move toward the increasing slope.",
        "A peak always exists.",
        "Eventually the pointers converge at a peak."
    ],

    bruteForce: {
        title: "Linear Scan",
        description:
            "Traverse the array until a peak element is found."
    },

    optimalApproach: {
        title: "Binary Search",
        description:
            "Use Binary Search to move toward the increasing slope until reaching a peak."
    }
},

{
    id: "median-of-two-sorted-arrays",

    title: "Median of Two Sorted Arrays",

    heroDescription:
        "Master Partition Binary Search to find the median of two sorted arrays in logarithmic time.",

    problemStatement:
        "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Partition Binary Search",

    time: "40-45 min",

    acceptance: "43%",

    example1: {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation:
            "The combined sorted array is [1,2,3]."
    },

    example2: {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation:
            "The combined sorted array is [1,2,3,4]."
    },

    constraints:
        "0 <= nums1.length, nums2.length <= 1000\n1 <= nums1.length + nums2.length <= 2000",

    timeComplexity: "O(log(min(n,m)))",

    spaceComplexity: "O(1)",

    hints: [
        "Think about partitioning both arrays.",
        "The left partition should contain half the elements.",
        "Every left element must be smaller than every right element.",
        "Binary Search the partition in the smaller array."
    ],

    bruteForce: {
        title: "Merge Both Arrays",
        description:
            "Merge the two sorted arrays and directly compute the median."
    },

    optimalApproach: {
        title: "Partition Binary Search",
        description:
            "Binary Search the correct partition in the smaller array so that both partitions satisfy the median conditions."
    }
},

{
    id: "split-array-largest-sum",

    title: "Split Array Largest Sum",

    heroDescription:
        "Master Binary Search on Answer by minimizing the largest subarray sum after splitting an array into k non-empty subarrays.",

    problemStatement:
        "Given an integer array nums and an integer k, split the array into k non-empty continuous subarrays such that the largest sum among these subarrays is minimized. Return the minimized largest sum.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe"
    ],

    pattern: "Binary Search on Answer",

    time: "40-45 min",

    acceptance: "58%",

    example1: {
        input: "nums = [7,2,5,10,8], k = 2",
        output: "18",
        explanation:
            "Split the array into [7,2,5] and [10,8]. The largest subarray sum is 18, which is the minimum possible."
    },

    example2: {
        input: "nums = [1,2,3,4,5], k = 2",
        output: "9",
        explanation:
            "The optimal split is [1,2,3] and [4,5], giving a minimized largest sum of 9."
    },

    constraints:
        "1 <= nums.length <= 1000\n0 <= nums[i] <= 10⁶\n1 <= k <= min(50, nums.length)",

    timeComplexity: "O(n log m)",

    spaceComplexity: "O(1)",

    hints: [
        "The answer lies between the maximum array element and the total array sum.",
        "Try a candidate maximum subarray sum.",
        "Count how many subarrays are needed.",
        "Binary Search the smallest valid answer."
    ],

    bruteForce: {
        title: "Try Every Possible Maximum",
        description:
            "Enumerate different maximum subarray sums and verify whether the array can be split accordingly."
    },

    optimalApproach: {
        title: "Binary Search on Answer",
        description:
            "Binary Search the answer while greedily counting the minimum number of subarrays required for a candidate maximum sum."
    }
},

];