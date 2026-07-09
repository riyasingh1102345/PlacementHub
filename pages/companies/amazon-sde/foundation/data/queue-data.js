const queueQuestions = [

{
    id: "implement-queue-using-stacks",

    title: "Implement Queue using Stacks",

    heroDescription:
        "Learn how to simulate FIFO behavior using two stacks while maintaining efficient queue operations.",

    problemStatement:
        "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support push, pop, peek, and empty operations.",

    difficulty: "Easy",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Queue Design",

    time: "15-20 min",

    acceptance: "67%",

    example1: {
        input: '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]',
        output: "[null,null,null,1,1,false]",
        explanation:
            "Elements are inserted using stacks while preserving queue order."
    },

    example2: {
        input: 'push(10), push(20), pop(), peek()',
        output: "10, 20",
        explanation:
            "The first inserted element is removed first, maintaining FIFO order."
    },

    constraints:
        "1 <= x <= 9\nAt most 100 calls will be made to push, pop, peek, and empty.\nAll operations are valid.",

    timeComplexity: "Push: O(1), Pop/Peek: Amortized O(1)",

    spaceComplexity: "O(n)",

    hints: [
        "Maintain two stacks.",
        "One stack stores incoming elements.",
        "Transfer elements only when necessary.",
        "Think about amortized complexity."
    ],

    bruteForce: {
        title: "Transfer Every Time",
        description:
            "Move all elements between the two stacks for every push or pop operation, resulting in unnecessary work."
    },

    optimalApproach: {
        title: "Lazy Transfer using Two Stacks",
        description:
            "Maintain an input stack and an output stack. Transfer elements from the input stack to the output stack only when the output stack becomes empty, achieving amortized O(1) operations."
    }
},

{
    id: "number-of-recent-calls",

    title: "Number of Recent Calls",

    heroDescription:
        "Master Queue operations by maintaining requests within a sliding 3000-millisecond window.",

    problemStatement:
        "Write a class RecentCounter that counts the number of recent requests within the last 3000 milliseconds.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Queue",

    time: "10-15 min",

    acceptance: "76%",

    example1: {
        input: '["RecentCounter","ping","ping","ping","ping"]\n[[],[1],[100],[3001],[3002]]',
        output: "[null,1,2,3,3]",
        explanation:
            "Only requests within the last 3000 milliseconds are counted."
    },

    example2: {
        input: "ping(1), ping(3000), ping(6000)",
        output: "[1,2,2]",
        explanation:
            "Older requests automatically leave the queue."
    },

    constraints:
        "1 <= t <= 10⁹\nEach call to ping uses a strictly larger value of t.\nAt most 10⁴ calls.",

    timeComplexity: "O(1) Amortized",

    spaceComplexity: "O(n)",

    hints: [
        "Maintain requests in chronological order.",
        "Use a queue.",
        "Remove outdated requests from the front.",
        "The queue size represents the answer."
    ],

    bruteForce: {
        title: "Scan Every Request",
        description:
            "Store every request and scan the complete list after each ping to count valid requests."
    },

    optimalApproach: {
        title: "Queue",
        description:
            "Store request timestamps in a queue. Remove timestamps older than t - 3000 and return the remaining queue size."
    }
},

{
    id: "first-unique-character-in-a-stream",

    title: "First Unique Character in a Stream",

    heroDescription:
        "Learn how Queue and HashMap work together to efficiently track the first unique character in a stream.",

    problemStatement:
        "Design a data structure that processes a stream of lowercase English letters and returns the first non-repeating character after each insertion. If no unique character exists, return '#'.",

    difficulty: "Easy",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Queue + HashMap",

    time: "15-20 min",

    acceptance: "61%",

    example1: {
        input: 'stream = "aabc"',
        output: '"a#bb"',
        explanation:
            "Maintain the first character that appears only once after every insertion."
    },

    example2: {
        input: 'stream = "abcabc"',
        output: '"aaabc#"',
        explanation:
            "As characters repeat, remove them from consideration until no unique character remains."
    },

    constraints:
        "1 <= stream.length <= 10⁵\nThe stream contains only lowercase English letters.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Maintain character frequencies.",
        "Store candidate unique characters in a queue.",
        "Remove characters from the front while their frequency is greater than one.",
        "The queue's front is always the first unique character."
    ],

    bruteForce: {
        title: "Rescan Every Time",
        description:
            "After every new character, scan the complete stream to find the first non-repeating character."
    },

    optimalApproach: {
        title: "Queue + HashMap",
        description:
            "Maintain frequencies using a HashMap and candidate characters using a queue. Continuously remove repeated characters from the front of the queue."
    }
},

{
    id: "time-needed-to-buy-tickets",

    title: "Time Needed to Buy Tickets",

    heroDescription:
        "Master Queue simulation by calculating how long it takes for a specific person to finish buying tickets.",

    problemStatement:
        "There are n people in a queue, where tickets[i] is the number of tickets the ith person wants to buy. Every second, the person at the front buys one ticket and moves to the end if more tickets remain. Return the time required for the person at index k to finish buying tickets.",

    difficulty: "Easy",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Adobe"
    ],

    pattern: "Queue Simulation",

    time: "15-20 min",

    acceptance: "84%",

    example1: {
        input: "tickets = [2,3,2], k = 2",
        output: "6",
        explanation:
            "The person at index 2 completes buying tickets after 6 seconds."
    },

    example2: {
        input: "tickets = [5,1,1,1], k = 0",
        output: "8",
        explanation:
            "The first person repeatedly rejoins the queue until all required tickets are purchased."
    },

    constraints:
        "1 <= tickets.length <= 100\n1 <= tickets[i] <= 100\n0 <= k < tickets.length",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(1)",

    hints: [
        "Simulate the queue process.",
        "Each second exactly one ticket is purchased.",
        "People with remaining tickets move to the back of the queue.",
        "Stop when the kth person finishes."
    ],

    bruteForce: {
        title: "Queue Simulation",
        description:
            "Simulate every second of the ticket-buying process using a queue until the target person finishes."
    },

    optimalApproach: {
        title: "Counting Contribution",
        description:
            "Instead of simulating every operation, count how many times each person contributes before the target person completes purchasing all tickets."
    }
},

{
    id: "dota2-senate",

    title: "Dota2 Senate",

    heroDescription:
        "Learn Queue simulation by predicting which party wins after repeatedly banning opposing senators.",

    problemStatement:
        "In the Dota2 Senate, senators belong to either the Radiant or Dire party. Each senator can ban one senator from the opposing party in every round. Given the order of senators, predict which party will finally win.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Queue Simulation",

    time: "20-25 min",

    acceptance: "49%",

    example1: {
        input: 'senate = "RD"',
        output: '"Radiant"',
        explanation:
            "The Radiant senator bans the Dire senator before being banned."
    },

    example2: {
        input: 'senate = "RDD"',
        output: '"Dire"',
        explanation:
            "The Dire party successfully eliminates the Radiant senator and wins."
    },

    constraints:
        "1 <= senate.length <= 10⁴\nsenate[i] is either 'R' or 'D'.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Maintain separate queues for Radiant and Dire senators.",
        "Store indices instead of characters.",
        "The senator with the smaller index acts first.",
        "The winning senator is added back with index + n."
    ],

    bruteForce: {
        title: "Round-by-Round Simulation",
        description:
            "Simulate every senate round by repeatedly searching for the next available opponent to ban."
    },

    optimalApproach: {
        title: "Two Queues",
        description:
            "Maintain separate queues for Radiant and Dire senators. Compare their front indices, eliminate the later senator, and push the winner back with an updated index."
    }
},

{
    id: "reveal-cards-in-increasing-order",

    title: "Reveal Cards In Increasing Order",

    heroDescription:
        "Use Queue simulation to determine the deck arrangement that reveals cards in increasing order.",

    problemStatement:
        "Given an integer array deck, return an ordering of the deck so that when the cards are revealed using the specified process, the revealed sequence is in increasing order.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Queue / Deque",

    time: "20-25 min",

    acceptance: "82%",

    example1: {
        input: "deck = [17,13,11,2,3,5,7]",
        output: "[2,13,3,11,5,17,7]",
        explanation:
            "This ordering reveals the cards in increasing order."
    },

    example2: {
        input: "deck = [1,1000]",
        output: "[1,1000]",
        explanation:
            "The cards are already revealed in increasing order."
    },

    constraints:
        "1 <= deck.length <= 1000\n1 <= deck[i] <= 10⁶\nAll integers are unique.",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(n)",

    hints: [
        "Sort the deck first.",
        "Maintain indices using a queue.",
        "Reveal the front index.",
        "Move the next index to the back after every reveal."
    ],

    bruteForce: {
        title: "Try Every Arrangement",
        description:
            "Generate possible deck arrangements and simulate the revealing process until the required ordering is found."
    },

    optimalApproach: {
        title: "Queue Simulation",
        description:
            "Sort the deck and use a queue of indices to simulate the revealing process, placing each sorted card into its correct position."
    }
},

{
    id: "rotting-oranges",

    title: "Rotting Oranges",

    heroDescription:
        "Master Multi-Source BFS by spreading the rotting process simultaneously from all rotten oranges.",

    problemStatement:
        "You are given an m × n grid where each cell can be empty, contain a fresh orange, or contain a rotten orange. Every minute, fresh oranges adjacent to rotten ones become rotten. Return the minimum number of minutes required to rot all oranges, or -1 if impossible.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Multi-Source BFS",

    time: "25-30 min",

    acceptance: "56%",

    example1: {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4",
        explanation:
            "All fresh oranges become rotten after 4 minutes."
    },

    example2: {
        input: "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        output: "-1",
        explanation:
            "Some fresh oranges can never be reached."
    },

    constraints:
        "1 <= m, n <= 10\ngrid[i][j] is 0, 1, or 2.",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Push all rotten oranges into the queue initially.",
        "Perform BFS level by level.",
        "Each BFS level represents one minute.",
        "Count remaining fresh oranges."
    ],

    bruteForce: {
        title: "Minute-by-Minute Scan",
        description:
            "Scan the entire grid every minute and rot adjacent fresh oranges until no further changes occur."
    },

    optimalApproach: {
        title: "Multi-Source BFS",
        description:
            "Start BFS simultaneously from every rotten orange. Process the grid level by level while updating fresh oranges and tracking elapsed time."
    }
},

{
    id: "perfect-squares",

    title: "Perfect Squares",

    heroDescription:
        "Learn how Breadth-First Search can find the minimum number of perfect squares required to reach a target number.",

    problemStatement:
        "Given an integer n, return the least number of perfect square numbers whose sum equals n.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe"
    ],

    pattern: "Breadth-First Search",

    time: "25-30 min",

    acceptance: "56%",

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
            "13 = 9 + 4."
    },

    constraints:
        "1 <= n <= 10⁴",

    timeComplexity: "O(n√n)",

    spaceComplexity: "O(n)",

    hints: [
        "Think of every remaining number as a state.",
        "Subtract every possible perfect square.",
        "Use BFS to find the shortest path.",
        "The first time you reach zero is the answer."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively try every perfect square smaller than the current number until all possibilities are explored."
    },

    optimalApproach: {
        title: "Breadth-First Search",
        description:
            "Treat every remaining value as a graph node. Perform BFS by subtracting every possible perfect square until zero is reached."
    }
},

{
    id: "perfect-squares",

    title: "Perfect Squares",

    heroDescription:
        "Learn how Breadth-First Search can find the minimum number of perfect squares required to reach a target number.",

    problemStatement:
        "Given an integer n, return the least number of perfect square numbers whose sum equals n.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe"
    ],

    pattern: "Breadth-First Search",

    time: "25-30 min",

    acceptance: "56%",

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
            "13 = 9 + 4."
    },

    constraints:
        "1 <= n <= 10⁴",

    timeComplexity: "O(n√n)",

    spaceComplexity: "O(n)",

    hints: [
        "Think of every remaining number as a state.",
        "Subtract every possible perfect square.",
        "Use BFS to find the shortest path.",
        "The first time you reach zero is the answer."
    ],

    bruteForce: {
        title: "Recursive Search",
        description:
            "Recursively try every perfect square smaller than the current number until all possibilities are explored."
    },

    optimalApproach: {
        title: "Breadth-First Search",
        description:
            "Treat every remaining value as a graph node. Perform BFS by subtracting every possible perfect square until zero is reached."
    }
},

{
    id: "sliding-window-maximum",

    title: "Sliding Window Maximum",

    heroDescription:
        "Master the Monotonic Queue technique to efficiently find the maximum element in every sliding window.",

    problemStatement:
        "Given an integer array nums and an integer k, return an array containing the maximum value in every sliding window of size k.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Monotonic Queue",

    time: "35-40 min",

    acceptance: "58%",

    example1: {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]",
        explanation:
            "Each sliding window contributes its maximum value to the answer."
    },

    example2: {
        input: "nums = [1], k = 1",
        output: "[1]",
        explanation:
            "Only one window exists."
    },

    constraints:
        "1 <= nums.length <= 10⁵\n-10⁴ <= nums[i] <= 10⁴\n1 <= k <= nums.length",

    timeComplexity: "O(n)",

    spaceComplexity: "O(k)",

    hints: [
        "A normal queue cannot maintain the maximum efficiently.",
        "Maintain indices inside a deque.",
        "Keep the deque in decreasing order.",
        "Remove elements outside the current window."
    ],

    bruteForce: {
        title: "Check Every Window",
        description:
            "Traverse every sliding window independently and compute its maximum element."
    },

    optimalApproach: {
        title: "Monotonic Queue",
        description:
            "Maintain a decreasing deque of indices. Remove smaller elements from the back and outdated indices from the front to retrieve the maximum in O(1)."
    }
},

{
    id: "shortest-subarray-with-sum-at-least-k",

    title: "Shortest Subarray with Sum at Least K",

    heroDescription:
        "Learn how Prefix Sum and Monotonic Queue work together to find the shortest valid subarray.",

    problemStatement:
        "Given an integer array nums and an integer k, return the length of the shortest non-empty subarray whose sum is at least k. Return -1 if no such subarray exists.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Prefix Sum + Monotonic Queue",

    time: "40-45 min",

    acceptance: "31%",

    example1: {
        input: "nums = [1], k = 1",
        output: "1",
        explanation:
            "The first element itself satisfies the condition."
    },

    example2: {
        input: "nums = [2,-1,2], k = 3",
        output: "3",
        explanation:
            "The complete array is the shortest subarray having sum at least 3."
    },

    constraints:
        "1 <= nums.length <= 10⁵\n-10⁵ <= nums[i] <= 10⁵\n1 <= k <= 10⁹",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Calculate prefix sums.",
        "Maintain prefix sum indices inside a deque.",
        "Keep prefix sums increasing.",
        "Try to minimize the window whenever the required sum is reached."
    ],

    bruteForce: {
        title: "Check Every Subarray",
        description:
            "Generate every possible subarray and calculate its sum until a valid answer is found."
    },

    optimalApproach: {
        title: "Prefix Sum + Monotonic Queue",
        description:
            "Maintain increasing prefix sums inside a deque. Remove unnecessary prefix sums while ensuring the shortest valid subarray is found."
    }
},

{
    id: "design-snake-game",

    title: "Design Snake Game",

    heroDescription:
        "Design a Snake Game using Queue, Deque, HashSet, and simulation while maintaining efficient movement and collision detection.",

    problemStatement:
        "Design a Snake Game that moves on a 2D grid. The snake grows after eating food and the game ends if it collides with the wall or itself. Implement the required game operations efficiently.",

    difficulty: "Hard",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Queue + Deque + Design",

    time: "40-45 min",

    acceptance: "39%",

    example1: {
        input: 'move("R"), move("D"), move("R")',
        output: "[0,0,1]",
        explanation:
            "The snake successfully eats food and increases its score."
    },

    example2: {
        input: 'move("U")',
        output: "-1",
        explanation:
            "The snake collides with the wall and the game ends."
    },

    constraints:
        "1 <= width, height <= 10⁴\nFood positions are unique.\nThe move direction is one of 'U', 'D', 'L', or 'R'.",

    timeComplexity: "O(1) per move",

    spaceComplexity: "O(n)",

    hints: [
        "Use a deque to represent the snake's body.",
        "Maintain occupied cells inside a HashSet.",
        "Update the head before checking collisions.",
        "Remove the tail unless food is consumed."
    ],

    bruteForce: {
        title: "Grid Simulation",
        description:
            "Maintain the entire grid and update every snake cell after each movement."
    },

    optimalApproach: {
        title: "Deque + HashSet",
        description:
            "Represent the snake using a deque and occupied positions using a HashSet. Each move updates only the head and tail, resulting in constant-time operations."
    }
},

];
