const greedyQuestions = [

{
    id: "assign-cookies",

    title: "Assign Cookies",

    heroDescription:
        "Learn the Greedy strategy by assigning cookies optimally to maximize the number of satisfied children.",

    problemStatement:
        "Assume you are an awesome parent and want to assign cookies to your children. Each child has a greed factor and each cookie has a size. Assign cookies to maximize the number of satisfied children.",

    difficulty: "Easy",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Greedy",

    time: "15 min",

    acceptance: "55%",

    example1: {
        input: "g = [1,2,3], s = [1,1]",
        output: "1",
        explanation:
            "Only one child can be satisfied."
    },

    example2: {
        input: "g = [1,2], s = [1,2,3]",
        output: "2",
        explanation:
            "Both children receive suitable cookies."
    },

    constraints:
        "1 <= g.length, s.length <= 3 × 10⁴",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(1)",

    hints: [
        "Sort both arrays.",
        "Always satisfy the least greedy child first.",
        "Move to the next child after assigning a cookie.",
        "Use two pointers."
    ],

    bruteForce: {
        title: "Try Every Assignment",
        description:
            "Check every possible cookie assignment and choose the maximum number of satisfied children."
    },

    optimalApproach: {
        title: "Greedy + Sorting",
        description:
            "Sort both arrays and greedily assign the smallest sufficient cookie to each child."
    }
},

{
    id: "lemonade-change",

    title: "Lemonade Change",

    heroDescription:
        "Master Greedy decision making by always giving the most beneficial change first.",

    problemStatement:
        "Customers pay with $5, $10 or $20 bills. Return true if you can provide correct change to every customer.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Microsoft",
        "Adobe"
    ],

    pattern: "Greedy",

    time: "15 min",

    acceptance: "57%",

    example1: {
        input: "bills = [5,5,5,10,20]",
        output: "true",
        explanation:
            "Correct change can be given to every customer."
    },

    example2: {
        input: "bills = [5,5,10,10,20]",
        output: "false",
        explanation:
            "Not enough change is available."
    },

    constraints:
        "1 <= bills.length <= 10⁵",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Track only $5 and $10 bills.",
        "Always prefer giving one $10 and one $5 for a $20 bill.",
        "Otherwise use three $5 bills.",
        "Return false if change isn't possible."
    ],

    bruteForce: {
        title: "Try Every Combination",
        description:
            "Consider every possible combination of bills for making change."
    },

    optimalApproach: {
        title: "Greedy",
        description:
            "Always preserve smaller bills whenever possible by using one $10 bill and one $5 bill before using three $5 bills."
    }
},

{
    id: "jump-game",

    title: "Jump Game",

    heroDescription:
        "Learn Greedy optimization by tracking the farthest index reachable while traversing the array.",

    problemStatement:
        "Given an array nums where each element represents the maximum jump length from that position, determine whether you can reach the last index.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Greedy",

    time: "20 min",

    acceptance: "40%",

    example1: {
        input: "nums = [2,3,1,1,4]",
        output: "true",
        explanation:
            "The last index can be reached."
    },

    example2: {
        input: "nums = [3,2,1,0,4]",
        output: "false",
        explanation:
            "The jump stops at index 3."
    },

    constraints:
        "1 <= nums.length <= 10⁴\n0 <= nums[i] <= 10⁵",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Track the farthest reachable position.",
        "Update it while traversing.",
        "If the current index becomes unreachable, return false.",
        "Otherwise continue until the end."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Try every possible jump recursively until reaching the last index."
    },

    optimalApproach: {
        title: "Greedy",
        description:
            "Maintain the farthest reachable index while traversing once through the array."
    }
},

{
    id: "jump-game-ii",

    title: "Jump Game II",

    heroDescription:
        "Master Greedy Reachability by finding the minimum number of jumps required to reach the last index.",

    problemStatement:
        "Given an array of non-negative integers nums, where each element represents your maximum jump length, return the minimum number of jumps required to reach the last index.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Greedy Reachability",

    time: "20-25 min",

    acceptance: "41%",

    example1: {
        input: "nums = [2,3,1,1,4]",
        output: "2",
        explanation:
            "Jump from index 0 to 1, then from index 1 to the last index."
    },

    example2: {
        input: "nums = [2,3,0,1,4]",
        output: "2",
        explanation:
            "Only two jumps are needed."
    },

    constraints:
        "1 <= nums.length <= 10⁴\n0 <= nums[i] <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Think level by level.",
        "Track the farthest reachable index.",
        "Increase jumps only when the current range ends.",
        "Greedily expand the next reachable range."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Try every possible jump recursively and return the minimum number of jumps."
    },

    optimalApproach: {
        title: "Greedy Reachability",
        description:
            "Traverse the array while maintaining the current jump range and the farthest reachable position."
    }
},

{
    id: "gas-station",

    title: "Gas Station",

    heroDescription:
        "Learn Greedy Traversal by identifying the only valid starting station that completes the circuit.",

    problemStatement:
        "There are n gas stations arranged in a circle. Given two arrays gas and cost, return the starting gas station's index if you can travel around the circuit once. Otherwise, return -1.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Greedy Traversal",

    time: "25 min",

    acceptance: "45%",

    example1: {
        input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        output: "3",
        explanation:
            "Starting from station 3 completes the circuit."
    },

    example2: {
        input: "gas = [2,3,4], cost = [3,4,3]",
        output: "-1",
        explanation:
            "No valid starting station exists."
    },

    constraints:
        "1 <= gas.length == cost.length <= 10⁵\n0 <= gas[i], cost[i] <= 10⁴",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "First check whether total gas is sufficient.",
        "If the tank becomes negative, restart from the next station.",
        "The failed stations cannot be valid starting points.",
        "One traversal is sufficient."
    ],

    bruteForce: {
        title: "Try Every Starting Station",
        description:
            "Simulate the journey beginning from every gas station until a valid one is found."
    },

    optimalApproach: {
        title: "Greedy Traversal",
        description:
            "Traverse once while maintaining the current fuel. Restart whenever the fuel becomes negative."
    }
},

{
    id: "partition-labels",

    title: "Partition Labels",

    heroDescription:
        "Master Greedy Partitioning by dividing a string into the maximum number of independent segments.",

    problemStatement:
        "Given a string s, partition it into as many parts as possible so that each letter appears in at most one part. Return a list of the sizes of these parts.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Greedy Partitioning",

    time: "20-25 min",

    acceptance: "79%",

    example1: {
        input: "s = 'ababcbacadefegdehijhklij'",
        output: "[9,7,8]",
        explanation:
            "Each character appears in only one partition."
    },

    example2: {
        input: "s = 'eccbbbbdec'",
        output: "[10]",
        explanation:
            "The whole string forms one partition."
    },

    constraints:
        "1 <= s.length <= 500\ns consists of lowercase English letters.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Find the last occurrence of every character.",
        "Maintain the farthest boundary.",
        "Close a partition when the current index reaches that boundary.",
        "Start a new partition."
    ],

    bruteForce: {
        title: "Try Every Partition",
        description:
            "Generate all possible partitions and verify whether each character belongs to only one partition."
    },

    optimalApproach: {
        title: "Greedy Partitioning",
        description:
            "Record the last occurrence of every character and greedily extend each partition until all characters within it are completely covered."
    }
},

{
    id: "merge-intervals",

    title: "Merge Intervals",

    heroDescription:
        "Learn the Intervals pattern by merging all overlapping intervals into the minimum number of non-overlapping intervals.",

    problemStatement:
        "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return the resulting array.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Intervals",

    time: "20-25 min",

    acceptance: "48%",

    example1: {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation:
            "Intervals [1,3] and [2,6] overlap and are merged."
    },

    example2: {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
        explanation:
            "Touching intervals are considered overlapping."
    },

    constraints:
        "1 <= intervals.length <= 10⁴\nintervals[i].length == 2\n0 <= start <= end <= 10⁴",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(n)",

    hints: [
        "Sort intervals by their starting time.",
        "Compare the current interval with the last merged interval.",
        "Merge if they overlap.",
        "Otherwise start a new interval."
    ],

    bruteForce: {
        title: "Compare Every Pair",
        description:
            "Repeatedly compare every pair of intervals until no more merges are possible."
    },

    optimalApproach: {
        title: "Sorting + Greedy",
        description:
            "Sort intervals by their start time and greedily merge overlapping intervals in a single traversal."
    }
},

{
    id: "non-overlapping-intervals",

    title: "Non-overlapping Intervals",

    heroDescription:
        "Master Interval Scheduling by removing the minimum number of intervals to eliminate all overlaps.",

    problemStatement:
        "Given an array of intervals, return the minimum number of intervals you need to remove so that the remaining intervals do not overlap.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Interval Scheduling",

    time: "20-25 min",

    acceptance: "54%",

    example1: {
        input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        output: "1",
        explanation:
            "Removing [1,3] leaves all remaining intervals non-overlapping."
    },

    example2: {
        input: "intervals = [[1,2],[1,2],[1,2]]",
        output: "2",
        explanation:
            "Only one interval can remain."
    },

    constraints:
        "1 <= intervals.length <= 10⁵\nintervals[i].length == 2\n-5 × 10⁴ <= start < end <= 5 × 10⁴",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(1)",

    hints: [
        "Sort intervals by their ending time.",
        "Always keep the interval that ends earliest.",
        "Remove intervals that overlap with the chosen one.",
        "Count the removals."
    ],

    bruteForce: {
        title: "Try Every Removal",
        description:
            "Try removing different combinations of intervals until all overlaps disappear."
    },

    optimalApproach: {
        title: "Interval Scheduling",
        description:
            "Sort intervals by their ending time and greedily keep the interval that finishes earliest to maximize the number of non-overlapping intervals."
    }
},

{
    id: "queue-reconstruction-by-height",

    title: "Queue Reconstruction by Height",

    heroDescription:
        "Learn Greedy Sorting by reconstructing a queue based on people's heights and the number of taller people standing ahead.",

    problemStatement:
        "You are given an array people where people[i] = [hi, ki] represents the height and the number of people in front who have a height greater than or equal to hi. Reconstruct and return the queue.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Greedy + Sorting",

    time: "30 min",

    acceptance: "72%",

    example1: {
        input: "people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]",
        output: "[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]",
        explanation:
            "Sort people by height in descending order and insert each person at index k."
    },

    example2: {
        input: "people = [[6,0],[5,0],[4,0]]",
        output: "[[4,0],[5,0],[6,0]]",
        explanation:
            "Each person is inserted according to their k value."
    },

    constraints:
        "1 <= people.length <= 2000\n0 <= hi <= 10⁶\n0 <= ki < people.length",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(n)",

    hints: [
        "Sort taller people first.",
        "If heights are equal, sort by smaller k.",
        "Insert each person at index k.",
        "Previously placed taller people won't be disturbed."
    ],

    bruteForce: {
        title: "Try Every Arrangement",
        description:
            "Generate all possible queue arrangements and verify which one satisfies every person's condition."
    },

    optimalApproach: {
        title: "Greedy + Sorting",
        description:
            "Sort people by descending height and ascending k. Insert each person directly at position k."
    }
},

{
    id: "candy",

    title: "Candy",

    heroDescription:
        "Master Greedy optimization by distributing the minimum number of candies while satisfying every child's rating constraints.",

    problemStatement:
        "There are n children standing in a line. Each child has a rating. Give each child at least one candy, and children with a higher rating than their immediate neighbors must receive more candies. Return the minimum candies required.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Greedy",

    time: "35-40 min",

    acceptance: "44%",

    example1: {
        input: "ratings = [1,0,2]",
        output: "5",
        explanation:
            "The candies distribution can be [2,1,2]."
    },

    example2: {
        input: "ratings = [1,2,2]",
        output: "4",
        explanation:
            "One optimal distribution is [1,2,1]."
    },

    constraints:
        "1 <= ratings.length <= 2 × 10⁴\n0 <= ratings[i] <= 2 × 10⁴",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Every child receives at least one candy.",
        "Traverse from left to right.",
        "Traverse again from right to left.",
        "Take the maximum candies required from both traversals."
    ],

    bruteForce: {
        title: "Repeated Adjustments",
        description:
            "Repeatedly adjust the candy distribution until all rating conditions are satisfied."
    },

    optimalApproach: {
        title: "Two-Pass Greedy",
        description:
            "Perform one left-to-right and one right-to-left traversal, then assign each child the maximum candies required by both passes."
    }
},

];