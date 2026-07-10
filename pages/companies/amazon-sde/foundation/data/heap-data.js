const heapQuestions = [

{
    id: "kth-largest-element-in-a-stream",

    title: "Kth Largest Element in a Stream",

    heroDescription:
        "Learn how a Min Heap efficiently maintains the kth largest element while processing a stream of numbers.",

    problemStatement:
        "Design a class to find the kth largest element in a stream. Implement the KthLargest class with methods to initialize the stream and add new elements.",

    difficulty: "Easy",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Min Heap",

    time: "15-20 min",

    acceptance: "61%",

    example1: {
        input: '["KthLargest","add","add","add","add","add"]\n[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]',
        output: "[null,4,5,5,8,8]",
        explanation:
            "Maintain a Min Heap of size k. The heap's top always represents the kth largest element."
    },

    example2: {
        input: 'k = 1, nums = []',
        output: "The largest element after every insertion is returned.",
        explanation:
            "The heap stores only one element."
    },

    constraints:
        "1 <= k <= 10⁴\n-10⁴ <= nums[i] <= 10⁴\nAt most 10⁴ calls to add().",

    timeComplexity: "O(log k)",

    spaceComplexity: "O(k)",

    hints: [
        "Use a Min Heap instead of sorting repeatedly.",
        "Keep only k elements in the heap.",
        "Remove the smallest element whenever heap size exceeds k.",
        "The root of the heap is the answer."
    ],

    bruteForce: {
        title: "Sort After Every Insertion",
        description:
            "Insert the new number, sort the complete collection, and return the kth largest element."
    },

    optimalApproach: {
        title: "Min Heap",
        description:
            "Maintain a Min Heap of size k. The smallest element in the heap always represents the kth largest element overall."
    }
},

{
    id: "last-stone-weight",

    title: "Last Stone Weight",

    heroDescription:
        "Master Max Heap by repeatedly selecting and processing the two heaviest stones.",

    problemStatement:
        "You are given an array of stones. In each turn, remove the two heaviest stones. If they are unequal, insert the remaining weight back into the collection. Return the weight of the last remaining stone.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Max Heap",

    time: "15-20 min",

    acceptance: "65%",

    example1: {
        input: "stones = [2,7,4,1,8,1]",
        output: "1",
        explanation:
            "Repeatedly smash the two largest stones until only one remains."
    },

    example2: {
        input: "stones = [1]",
        output: "1",
        explanation:
            "Only one stone exists."
    },

    constraints:
        "1 <= stones.length <= 30\n1 <= stones[i] <= 1000",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(n)",

    hints: [
        "Always select the two largest stones.",
        "A Max Heap makes this efficient.",
        "Push the remaining difference back if necessary.",
        "Continue until one or zero stones remain."
    ],

    bruteForce: {
        title: "Repeated Sorting",
        description:
            "Sort the array before every smash operation to obtain the two largest stones."
    },

    optimalApproach: {
        title: "Max Heap",
        description:
            "Maintain a Max Heap to efficiently extract the two largest stones after every operation."
    }
},

{
    id: "k-closest-points-to-origin",

    title: "K Closest Points to Origin",

    heroDescription:
        "Learn how a Max Heap efficiently keeps track of the k closest points to the origin.",

    problemStatement:
        "Given an array of points on the X-Y plane and an integer k, return the k closest points to the origin.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Heap",

    time: "20-25 min",

    acceptance: "68%",

    example1: {
        input: "points = [[1,3],[-2,2]], k = 1",
        output: "[[-2,2]]",
        explanation:
            "The point (-2,2) is closer to the origin."
    },

    example2: {
        input: "points = [[3,3],[5,-1],[-2,4]], k = 2",
        output: "[[3,3],[-2,4]]",
        explanation:
            "These are the two closest points to the origin."
    },

    constraints:
        "1 <= k <= points.length <= 10⁴\n-10⁴ <= xi, yi <= 10⁴",

    timeComplexity: "O(n log k)",

    spaceComplexity: "O(k)",

    hints: [
        "Distance comparison does not require square roots.",
        "Maintain only the k closest points.",
        "Use a Max Heap of size k.",
        "Remove the farthest point whenever the heap exceeds size k."
    ],

    bruteForce: {
        title: "Sort All Points",
        description:
            "Compute every distance, sort all points, and return the first k."
    },

    optimalApproach: {
        title: "Heap",
        description:
            "Maintain a Max Heap of size k. Remove the farthest point whenever a closer point is encountered."
    }
},

{
    id: "top-k-frequent-words",

    title: "Top K Frequent Words",

    heroDescription:
        "Master HashMap and Heap to efficiently find the k most frequent words.",

    problemStatement:
        "Given an array of strings words and an integer k, return the k most frequent strings sorted by frequency. If two words have the same frequency, return the lexicographically smaller word first.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Heap + HashMap",

    time: "25-30 min",

    acceptance: "66%",

    example1: {
        input: 'words = ["i","love","leetcode","i","love","coding"], k = 2',
        output: '["i","love"]',
        explanation:
            "The words 'i' and 'love' appear most frequently."
    },

    example2: {
        input: 'words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4',
        output: '["the","is","sunny","day"]',
        explanation:
            "Words are sorted by frequency, then lexicographical order."
    },

    constraints:
        "1 <= words.length <= 500\n1 <= words[i].length <= 10\n1 <= k <= number of unique words",

    timeComplexity: "O(n log k)",

    spaceComplexity: "O(n)",

    hints: [
        "Count word frequencies using a HashMap.",
        "Maintain only k elements in the heap.",
        "Handle equal frequencies carefully.",
        "Lexicographical order breaks ties."
    ],

    bruteForce: {
        title: "Sort Frequency Map",
        description:
            "Store all word frequencies, sort them, and return the first k words."
    },

    optimalApproach: {
        title: "Heap + HashMap",
        description:
            "Use a HashMap to count frequencies and a Heap to efficiently maintain the k most frequent words."
    }
},

{
    id: "top-k-frequent-elements",

    title: "Top K Frequent Elements",

    heroDescription:
        "Use HashMap and Heap to efficiently identify the k most frequent elements in an array.",

    problemStatement:
        "Given an integer array nums and an integer k, return the k most frequent elements.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Heap + HashMap",

    time: "20-25 min",

    acceptance: "64%",

    example1: {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
        explanation:
            "1 and 2 are the two most frequent elements."
    },

    example2: {
        input: "nums = [1], k = 1",
        output: "[1]",
        explanation:
            "Only one unique element exists."
    },

    constraints:
        "1 <= nums.length <= 10⁵\n-10⁴ <= nums[i] <= 10⁴",

    timeComplexity: "O(n log k)",

    spaceComplexity: "O(n)",

    hints: [
        "Count frequencies first.",
        "Use a Heap instead of sorting everything.",
        "Maintain only k elements.",
        "Return the remaining heap elements."
    ],

    bruteForce: {
        title: "Sort By Frequency",
        description:
            "Count all frequencies and sort every unique element by frequency."
    },

    optimalApproach: {
        title: "Heap + HashMap",
        description:
            "Count frequencies using a HashMap and maintain the k most frequent elements using a Heap."
    }
},

{
    id: "task-scheduler",

    title: "Task Scheduler",

    heroDescription:
        "Learn scheduling using Max Heap and Greedy to minimize the total execution time while respecting cooldown constraints.",

    problemStatement:
        "Given a list of CPU tasks and a cooldown period n, return the minimum number of intervals required to execute all tasks.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Heap + Greedy",

    time: "30-35 min",

    acceptance: "61%",

    example1: {
        input: "tasks = ['A','A','A','B','B','B'], n = 2",
        output: "8",
        explanation:
            "Idle intervals are inserted whenever necessary to satisfy the cooldown."
    },

    example2: {
        input: "tasks = ['A','A','A','B','B','B'], n = 0",
        output: "6",
        explanation:
            "Without cooldown, all tasks execute continuously."
    },

    constraints:
        "1 <= tasks.length <= 10⁴\nTasks consist of uppercase English letters.",

    timeComplexity: "O(n log 26)",

    spaceComplexity: "O(26)",

    hints: [
        "Count task frequencies.",
        "Always execute the task with the highest remaining frequency.",
        "Use a Max Heap.",
        "Handle cooldown using cycles."
    ],

    bruteForce: {
        title: "Simulation",
        description:
            "Simulate every time interval while checking which task can be executed next."
    },

    optimalApproach: {
        title: "Heap + Greedy",
        description:
            "Maintain task frequencies in a Max Heap and repeatedly execute the most frequent available task while respecting cooldown constraints."
    }
},

{
    id: "meeting-rooms-ii",

    title: "Meeting Rooms II",

    heroDescription:
        "Learn how a Min Heap efficiently tracks meeting end times to determine the minimum number of meeting rooms required.",

    problemStatement:
        "Given an array of meeting time intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required to hold all meetings.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Min Heap",

    time: "25-30 min",

    acceptance: "54%",

    example1: {
        input: "intervals = [[0,30],[5,10],[15,20]]",
        output: "2",
        explanation:
            "Two meeting rooms are required because some meetings overlap."
    },

    example2: {
        input: "intervals = [[7,10],[2,4]]",
        output: "1",
        explanation:
            "The meetings do not overlap, so one room is sufficient."
    },

    constraints:
        "1 <= intervals.length <= 10⁴\n0 <= starti < endi <= 10⁶",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(n)",

    hints: [
        "Sort the meetings by their start time.",
        "Keep track of meeting end times.",
        "Use a Min Heap to store the earliest ending meeting.",
        "Reuse a room whenever the earliest meeting has already ended."
    ],

    bruteForce: {
        title: "Check Every Overlap",
        description:
            "Compare every meeting with every other meeting to determine how many rooms are needed simultaneously."
    },

    optimalApproach: {
        title: "Min Heap",
        description:
            "Sort meetings by start time. Use a Min Heap to store current meeting end times and reuse rooms whenever possible."
    }
},

{
    id: "find-k-pairs-with-smallest-sums",

    title: "Find K Pairs with Smallest Sums",

    heroDescription:
        "Learn how Min Heap efficiently generates the k pairs having the smallest sums from two sorted arrays.",

    problemStatement:
        "You are given two sorted integer arrays nums1 and nums2 and an integer k. Return the k pairs (u,v) with the smallest sums.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Min Heap",

    time: "30-35 min",

    acceptance: "41%",

    example1: {
        input: "nums1 = [1,7,11], nums2 = [2,4,6], k = 3",
        output: "[[1,2],[1,4],[1,6]]",
        explanation:
            "These are the three pairs having the smallest sums."
    },

    example2: {
        input: "nums1 = [1,1,2], nums2 = [1,2,3], k = 2",
        output: "[[1,1],[1,1]]",
        explanation:
            "The two smallest pair sums are returned."
    },

    constraints:
        "1 <= nums1.length, nums2.length <= 10⁵\n-10⁹ <= nums[i] <= 10⁹\n1 <= k <= 10⁴",

    timeComplexity: "O(k log k)",

    spaceComplexity: "O(k)",

    hints: [
        "Arrays are already sorted.",
        "Start with the smallest pair.",
        "Use a Min Heap.",
        "Generate only the next possible pairs."
    ],

    bruteForce: {
        title: "Generate All Pairs",
        description:
            "Generate every possible pair, sort them by sum, and return the first k pairs."
    },

    optimalApproach: {
        title: "Min Heap",
        description:
            "Use a Min Heap to always process the smallest available pair while generating only necessary candidates."
    }
},

{
    id: "merge-k-sorted-lists",

    title: "Merge K Sorted Lists",

    heroDescription:
        "Master Min Heap by efficiently merging multiple sorted linked lists into one sorted list.",

    problemStatement:
        "You are given an array of k linked lists, each sorted in ascending order. Merge all the linked lists into one sorted linked list and return its head.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Min Heap",

    time: "35-40 min",

    acceptance: "58%",

    example1: {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation:
            "Repeatedly extract the smallest node among all list heads."
    },

    example2: {
        input: "lists = []",
        output: "[]",
        explanation:
            "No linked lists are provided."
    },

    constraints:
        "0 <= k <= 10⁴\n0 <= total number of nodes <= 10⁴",

    timeComplexity: "O(n log k)",

    spaceComplexity: "O(k)",

    hints: [
        "Only compare the current head of every list.",
        "A Min Heap stores the smallest available node.",
        "After removing one node, insert its next node.",
        "Continue until the heap becomes empty."
    ],

    bruteForce: {
        title: "Merge One By One",
        description:
            "Repeatedly merge two linked lists until only one remains."
    },

    optimalApproach: {
        title: "Min Heap",
        description:
            "Insert the head of every linked list into a Min Heap. Repeatedly remove the smallest node and insert its next node."
    }
},

{
    id: "find-median-from-data-stream",

    title: "Find Median from Data Stream",

    heroDescription:
        "Master the Two Heap technique to efficiently maintain the median while processing a stream of numbers.",

    problemStatement:
        "Design a data structure that supports adding numbers from a data stream and efficiently returns the median of all inserted numbers.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Two Heaps",

    time: "35-40 min",

    acceptance: "54%",

    example1: {
        input: '["MedianFinder","addNum","addNum","findMedian"]\n[[],[1],[2],[]]',
        output: "[null,null,null,1.5]",
        explanation:
            "The median of [1,2] is 1.5."
    },

    example2: {
        input: 'addNum(2), addNum(3), addNum(4), findMedian()',
        output: "3",
        explanation:
            "The middle element is returned."
    },

    constraints:
        "At most 5 × 10⁴ operations will be performed.",

    timeComplexity: "Add: O(log n), Find Median: O(1)",

    spaceComplexity: "O(n)",

    hints: [
        "Maintain two heaps.",
        "One Max Heap stores the smaller half.",
        "One Min Heap stores the larger half.",
        "Balance both heaps after every insertion."
    ],

    bruteForce: {
        title: "Sort After Every Insertion",
        description:
            "Store all elements and sort the collection whenever the median is requested."
    },

    optimalApproach: {
        title: "Two Heaps",
        description:
            "Maintain a Max Heap and a Min Heap. Balance their sizes so the median can be obtained in constant time."
    }
},



];