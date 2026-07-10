const graphsQuestions = [

{
    id: "find-if-path-exists-in-graph",

    title: "Find if Path Exists in Graph",

    heroDescription:
        "Learn Graph Traversal by determining whether a valid path exists between two vertices.",

    problemStatement:
        "Given an undirected graph with n vertices and an array of edges, determine whether there is a valid path between source and destination.",

    difficulty: "Easy",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "DFS / BFS",

    time: "15 min",

    acceptance: "56%",

    example1: {
        input: "n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2",
        output: "true",
        explanation:
            "A valid path exists from node 0 to node 2."
    },

    example2: {
        input: "n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5",
        output: "false",
        explanation:
            "The graph contains two disconnected components."
    },

    constraints:
        "1 <= n <= 2 × 10⁵",

    timeComplexity: "O(V + E)",

    spaceComplexity: "O(V)",

    hints: [
        "Represent the graph using an adjacency list.",
        "Traverse using DFS or BFS.",
        "Track visited nodes.",
        "Stop once the destination is reached."
    ],

    bruteForce: {
        title: "Explore Every Path",
        description:
            "Explore every possible path recursively until the destination is found."
    },

    optimalApproach: {
        title: "DFS / BFS",
        description:
            "Traverse the graph using DFS or BFS while maintaining a visited array."
    }
},

{
    id: "find-the-town-judge",

    title: "Find the Town Judge",

    heroDescription:
        "Learn graph degree analysis to identify the town judge using incoming and outgoing edges.",

    problemStatement:
        "In a town of n people, return the label of the town judge if they exist. Otherwise, return -1.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Graph",

    subPattern: "Indegree / Outdegree",

    time: "15 min",

    acceptance: "51%",

    example1: {
        input: "n = 2, trust = [[1,2]]",
        output: "2",
        explanation:
            "Person 2 is trusted by everyone and trusts nobody."
    },

    example2: {
        input: "n = 3, trust = [[1,3],[2,3]]",
        output: "3",
        explanation:
            "Person 3 satisfies the judge conditions."
    },

    constraints:
        "1 <= n <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Track indegree and outdegree.",
        "The judge trusts nobody.",
        "Everyone else trusts the judge.",
        "Find the node satisfying both conditions."
    ],

    bruteForce: {
        title: "Check Every Person",
        description:
            "Verify the judge conditions individually for every person."
    },

    optimalApproach: {
        title: "Degree Counting",
        description:
            "Maintain indegree and outdegree arrays and identify the unique person satisfying the judge conditions."
    }
},

{
    id: "number-of-islands",

    title: "Number of Islands",

    heroDescription:
        "Master Grid DFS by counting the number of connected land components in a 2D grid.",

    problemStatement:
        "Given an m × n grid consisting of '1's (land) and '0's (water), return the number of islands.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Grid DFS",

    time: "25 min",

    acceptance: "63%",

    example1: {
        input: 'grid = [["1","1","1"],["0","1","0"],["1","1","1"]]',
        output: "1",
        explanation:
            "All land cells belong to one connected island."
    },

    example2: {
        input: 'grid = [["1","1","0"],["0","1","0"],["1","0","1"]]',
        output: "3",
        explanation:
            "There are three separate islands."
    },

    constraints:
        "1 <= m,n <= 300",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Traverse every cell.",
        "Start DFS whenever an unvisited land cell is found.",
        "Mark all connected land.",
        "Increase the island count."
    ],

    bruteForce: {
        title: "Explore Every Component",
        description:
            "Start a traversal from every land cell while tracking visited cells."
    },

    optimalApproach: {
        title: "Grid DFS",
        description:
            "Use DFS or BFS to visit every connected land component exactly once."
    }
},

{
    id: "clone-graph",

    title: "Clone Graph",

    heroDescription:
        "Learn Graph Traversal by creating a deep copy of a connected graph while preserving all node relationships.",

    problemStatement:
        "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "DFS / BFS",

    graphType: "Undirected",

    time: "25 min",

    acceptance: "61%",

    example1: {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
        explanation:
            "Return a deep copy where every node and edge is duplicated."
    },

    example2: {
        input: "adjList = [[]]",
        output: "[[]]",
        explanation:
            "A graph with one isolated node is cloned."
    },

    constraints:
        "The number of nodes is in the range [0,100].\n1 <= Node.val <= 100",

    timeComplexity: "O(V + E)",

    spaceComplexity: "O(V)",

    hints: [
        "Every original node needs exactly one clone.",
        "Maintain a mapping between original and cloned nodes.",
        "Use DFS or BFS.",
        "Reuse existing cloned nodes whenever encountered again."
    ],

    bruteForce: {
        title: "Recursive Copy Without Mapping",
        description:
            "Recursively clone neighbors without remembering previously cloned nodes, leading to repeated work and cycles."
    },

    optimalApproach: {
        title: "DFS/BFS + HashMap",
        description:
            "Maintain a HashMap from original nodes to cloned nodes while traversing the graph using DFS or BFS."
    }
},

{
    id: "rotting-oranges",

    title: "Rotting Oranges",

    heroDescription:
        "Master Multi-Source BFS by simulating how rot spreads across a grid minute by minute.",

    problemStatement:
        "Given an m × n grid where each cell represents an empty cell, fresh orange or rotten orange, return the minimum number of minutes until all oranges become rotten. Return -1 if impossible.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Multi-Source BFS",

    graphType: "Grid",

    time: "25 min",

    acceptance: "57%",

    example1: {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4",
        explanation:
            "The rot spreads level by level and all oranges become rotten after 4 minutes."
    },

    example2: {
        input: "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        output: "-1",
        explanation:
            "Some fresh oranges can never be reached."
    },

    constraints:
        "1 <= m,n <= 10\ngrid[i][j] ∈ {0,1,2}",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Start BFS from every rotten orange.",
        "Treat every minute as one BFS level.",
        "Count remaining fresh oranges.",
        "Return the elapsed time when all become rotten."
    ],

    bruteForce: {
        title: "Minute-by-Minute Simulation",
        description:
            "Repeatedly scan the entire grid each minute until no further oranges can rot."
    },

    optimalApproach: {
        title: "Multi-Source BFS",
        description:
            "Insert every rotten orange into the queue initially and perform BFS level by level."
    }
},

{
    id: "course-schedule",

    title: "Course Schedule",

    heroDescription:
        "Learn Topological Sorting by determining whether all courses can be completed without cyclic dependencies.",

    problemStatement:
        "There are numCourses courses labeled from 0 to numCourses - 1. Given prerequisites, return true if it is possible to finish all courses.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Topological Sort",

    graphType: "Directed",

    time: "30 min",

    acceptance: "48%",

    example1: {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation:
            "Course 0 can be completed before Course 1."
    },

    example2: {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
        explanation:
            "A cycle exists, making it impossible to finish all courses."
    },

    constraints:
        "1 <= numCourses <= 2000\n0 <= prerequisites.length <= 5000",

    timeComplexity: "O(V + E)",

    spaceComplexity: "O(V + E)",

    hints: [
        "Represent prerequisites as a directed graph.",
        "Compute the indegree of every node.",
        "Process nodes with indegree zero.",
        "If all nodes are processed, no cycle exists."
    ],

    bruteForce: {
        title: "Detect Cycles Repeatedly",
        description:
            "Repeatedly explore prerequisite chains to check whether a cycle exists."
    },

    optimalApproach: {
        title: "Topological Sort (Kahn's Algorithm)",
        description:
            "Use indegree counting and BFS to generate a topological ordering and detect cycles."
    }
},

{
    id: "course-schedule-ii",

    title: "Course Schedule II",

    heroDescription:
        "Master Topological Sorting by finding a valid order to complete all courses while respecting prerequisite dependencies.",

    problemStatement:
        "There are numCourses courses labeled from 0 to numCourses - 1. Given prerequisites, return a valid order to finish all courses. If it is impossible, return an empty array.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Topological Sort",

    graphType: "Directed",

    time: "30 min",

    acceptance: "51%",

    example1: {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "[0,1]",
        explanation:
            "Course 0 must be completed before Course 1."
    },

    example2: {
        input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        output: "[0,2,1,3]",
        explanation:
            "One valid topological ordering is returned."
    },

    constraints:
        "1 <= numCourses <= 2000\n0 <= prerequisites.length <= 5000",

    timeComplexity: "O(V + E)",

    spaceComplexity: "O(V + E)",

    hints: [
        "Compute the indegree of every course.",
        "Push all courses with indegree 0 into a queue.",
        "Process neighbors and decrease indegrees.",
        "If all courses are processed, the generated order is valid."
    ],

    bruteForce: {
        title: "Try Every Ordering",
        description:
            "Generate every possible ordering of courses and verify whether all prerequisite constraints are satisfied."
    },

    optimalApproach: {
        title: "Topological Sort (Kahn's Algorithm)",
        description:
            "Use indegree counting and BFS to generate a valid topological ordering while detecting cycles."
    }
},

{
    id: "number-of-connected-components-in-an-undirected-graph",

    title: "Number of Connected Components in an Undirected Graph",

    heroDescription:
        "Learn Union Find by efficiently counting the number of connected components in an undirected graph.",

    problemStatement:
        "Given n nodes labeled from 0 to n - 1 and a list of undirected edges, return the number of connected components in the graph.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Graph",

    subPattern: "Union Find",

    graphType: "Undirected",

    time: "25-30 min",

    acceptance: "67%",

    example1: {
        input: "n = 5, edges = [[0,1],[1,2],[3,4]]",
        output: "2",
        explanation:
            "The graph has two connected components."
    },

    example2: {
        input: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
        output: "1",
        explanation:
            "All nodes belong to one connected component."
    },

    constraints:
        "1 <= n <= 2000\n0 <= edges.length <= 5000",

    timeComplexity: "O(V + E)",

    spaceComplexity: "O(V)",

    hints: [
        "Initially every node forms its own component.",
        "Union the endpoints of every edge.",
        "Merge components whenever possible.",
        "Count the remaining disjoint sets."
    ],

    bruteForce: {
        title: "Repeated DFS",
        description:
            "Perform DFS from every unvisited node and count the connected components."
    },

    optimalApproach: {
        title: "Union Find",
        description:
            "Use Disjoint Set Union with path compression and union by rank to merge connected nodes efficiently."
    }
},

{
    id: "redundant-connection",

    title: "Redundant Connection",

    heroDescription:
        "Master Union Find by detecting the extra edge that introduces a cycle into an undirected graph.",

    problemStatement:
        "A tree with n nodes has one additional edge added. Return the edge that can be removed so the graph becomes a tree again.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Union Find",

    graphType: "Undirected",

    time: "25-30 min",

    acceptance: "64%",

    example1: {
        input: "edges = [[1,2],[1,3],[2,3]]",
        output: "[2,3]",
        explanation:
            "Adding edge [2,3] creates a cycle."
    },

    example2: {
        input: "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
        output: "[1,4]",
        explanation:
            "Removing [1,4] restores the tree."
    },

    constraints:
        "3 <= edges.length <= 1000\n1 <= ui < vi <= edges.length",

    timeComplexity: "O(n α(n))",

    spaceComplexity: "O(n)",

    hints: [
        "Initially every node belongs to a different set.",
        "Process edges one by one.",
        "If two nodes already belong to the same set, a cycle exists.",
        "That edge is the answer."
    ],

    bruteForce: {
        title: "Remove Every Edge",
        description:
            "Remove each edge one at a time and check whether the remaining graph forms a valid tree."
    },

    optimalApproach: {
        title: "Union Find",
        description:
            "Process edges using Disjoint Set Union. The first edge connecting two already connected nodes is the redundant edge."
    }
},

{
    id: "alien-dictionary",

    title: "Alien Dictionary",

    heroDescription:
        "Learn Topological Sorting by determining the order of characters in an unknown alien language.",

    problemStatement:
        "There is a new alien language that uses the English alphabet, but the order of the letters is unknown. Given a sorted list of words from the alien dictionary, return a string representing the correct order of characters. If no valid ordering exists, return an empty string.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Topological Sort",

    graphType: "Directed DAG",

    time: "35 min",

    acceptance: "38%",

    example1: {
        input: 'words = ["wrt","wrf","er","ett","rftt"]',
        output: '"wertf"',
        explanation:
            "Character dependencies produce the ordering 'wertf'."
    },

    example2: {
        input: 'words = ["z","x","z"]',
        output: '""',
        explanation:
            "A cycle exists, so no valid ordering is possible."
    },

    constraints:
        "1 <= words.length <= 100\n1 <= words[i].length <= 100",

    timeComplexity: "O(C)",

    spaceComplexity: "O(U)",

    hints: [
        "Compare adjacent words.",
        "Create edges between the first differing characters.",
        "Perform Topological Sort.",
        "Detect cycles."
    ],

    bruteForce: {
        title: "Try Every Alphabet Order",
        description:
            "Generate all possible character orderings and verify which one satisfies every word."
    },

    optimalApproach: {
        title: "Topological Sort",
        description:
            "Construct a graph of character dependencies and use Kahn's Algorithm or DFS-based Topological Sort."
    }
},

{
    id: "network-delay-time",

    title: "Network Delay Time",

    heroDescription:
        "Master Dijkstra's Algorithm to determine how long it takes for a signal to reach every node in a weighted graph.",

    problemStatement:
        "You are given a network of n nodes and directed weighted edges. A signal is sent from node k. Return the minimum time needed for all nodes to receive the signal. Return -1 if impossible.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Dijkstra",

    graphType: "Directed Weighted",

    time: "35 min",

    acceptance: "54%",

    example1: {
        input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        output: "2",
        explanation:
            "The farthest node receives the signal after 2 units of time."
    },

    example2: {
        input: "times = [[1,2,1]], n = 2, k = 2",
        output: "-1",
        explanation:
            "Node 1 cannot be reached."
    },

    constraints:
        "1 <= n <= 100\n1 <= times.length <= 6000",

    timeComplexity: "O(E log V)",

    spaceComplexity: "O(V + E)",

    hints: [
        "Represent the graph using an adjacency list.",
        "Use a Min Heap.",
        "Always process the node with the smallest current distance.",
        "Relax outgoing edges."
    ],

    bruteForce: {
        title: "Repeated Relaxation",
        description:
            "Repeatedly update distances until no shorter paths can be found."
    },

    optimalApproach: {
        title: "Dijkstra's Algorithm",
        description:
            "Use a Min Heap to repeatedly process the closest unvisited node and relax its outgoing edges."
    }
},

{
    id: "cheapest-flights-within-k-stops",

    title: "Cheapest Flights Within K Stops",

    heroDescription:
        "Learn constrained shortest path algorithms by finding the cheapest flight within a limited number of stops.",

    problemStatement:
        "Given n cities, flights, a source, destination and at most k stops, return the cheapest flight price. Return -1 if no such route exists.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe"
    ],

    pattern: "Graph",

    subPattern: "Shortest Path",

    graphType: "Directed Weighted",

    time: "35-40 min",

    acceptance: "42%",

    example1: {
        input: "n = 4, flights = [[0,1,100],[1,2,100],[2,3,100],[0,3,500]], src = 0, dst = 3, k = 1",
        output: "500",
        explanation:
            "The direct flight is the cheapest route within one stop."
    },

    example2: {
        input: "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
        output: "200",
        explanation:
            "Taking one stop results in the minimum cost."
    },

    constraints:
        "1 <= n <= 100\n0 <= flights.length <= n(n-1)/2",

    timeComplexity: "O(E log V)",

    spaceComplexity: "O(V + E)",

    hints: [
        "Normal Dijkstra is not enough.",
        "Track both cost and number of stops.",
        "Expand only valid states.",
        "Use a priority queue."
    ],

    bruteForce: {
        title: "Explore Every Route",
        description:
            "Enumerate every possible route up to k stops and compute the minimum cost."
    },

    optimalApproach: {
        title: "Modified Dijkstra",
        description:
            "Use a priority queue while tracking both the current cost and the remaining stops to efficiently explore valid paths."
    }
},

{
    id: "pacific-atlantic-water-flow",

    title: "Pacific Atlantic Water Flow",

    heroDescription:
        "Master Reverse DFS/BFS by determining which cells can flow to both the Pacific and Atlantic oceans.",

    problemStatement:
        "There is an m × n matrix of heights representing an island. Water can flow from a cell to neighboring cells with equal or lower height. Return all coordinates from which water can flow to both the Pacific and Atlantic oceans.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Reverse DFS",

    graphType: "Grid",

    time: "35 min",

    acceptance: "58%",

    example1: {
        input: "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
        explanation:
            "These cells can reach both oceans."
    },

    example2: {
        input: "heights = [[1]]",
        output: "[[0,0]]",
        explanation:
            "The only cell touches both oceans."
    },

    constraints:
        "1 <= m,n <= 200\n0 <= heights[i][j] <= 10⁵",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Instead of starting from every cell, start from both oceans.",
        "Move only towards equal or higher heights.",
        "Perform DFS/BFS from Pacific borders.",
        "Perform DFS/BFS from Atlantic borders and find the intersection."
    ],

    bruteForce: {
        title: "Run DFS From Every Cell",
        description:
            "Start a DFS from every cell independently to check whether both oceans are reachable."
    },

    optimalApproach: {
        title: "Reverse DFS",
        description:
            "Run DFS/BFS from the Pacific and Atlantic boundaries separately. The cells visited in both traversals form the answer."
    }
},

{
    id: "walls-and-gates",

    title: "Walls and Gates",

    heroDescription:
        "Learn Multi-Source BFS by filling every empty room with the distance to its nearest gate.",

    problemStatement:
        "You are given an m × n grid containing walls (-1), gates (0), and empty rooms (INF). Fill each empty room with the distance to its nearest gate. If it cannot reach any gate, leave it unchanged.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Graph",

    subPattern: "Multi-Source BFS",

    graphType: "Grid",

    time: "30 min",

    acceptance: "63%",

    example1: {
        input: "rooms = [[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]]",
        output: "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]",
        explanation:
            "Each empty room stores the distance to its nearest gate."
    },

    example2: {
        input: "rooms = [[0]]",
        output: "[[0]]",
        explanation:
            "The gate already has distance 0."
    },

    constraints:
        "1 <= m,n <= 250",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(m × n)",

    hints: [
        "Treat every gate as a starting point.",
        "Push all gates into the queue initially.",
        "Expand level by level.",
        "The first time a room is reached is its shortest distance."
    ],

    bruteForce: {
        title: "Run BFS From Every Empty Room",
        description:
            "Start a BFS from every empty room individually to locate the nearest gate."
    },

    optimalApproach: {
        title: "Multi-Source BFS",
        description:
            "Insert every gate into the queue initially and perform BFS simultaneously to compute the shortest distance for every room."
    }
},

{
    id: "word-ladder",

    title: "Word Ladder",

    heroDescription:
        "Master Graph BFS by finding the shortest transformation sequence between two words.",

    problemStatement:
        "Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord. Only one letter may be changed at a time, and each transformed word must exist in the dictionary.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "BFS Shortest Path",

    graphType: "Implicit Graph",

    time: "40 min",

    acceptance: "42%",

    example1: {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation:
            "One shortest sequence is hit → hot → dot → dog → cog."
    },

    example2: {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "0",
        explanation:
            "The target word does not exist in the dictionary."
    },

    constraints:
        "1 <= wordList.length <= 5000\n1 <= word length <= 10",

    timeComplexity: "O(N × L²)",

    spaceComplexity: "O(N)",

    hints: [
        "Each word is a graph node.",
        "Generate neighboring words by changing one character.",
        "Use BFS since every transformation has equal cost.",
        "The first time the destination is reached gives the shortest path."
    ],

    bruteForce: {
        title: "Explore Every Transformation",
        description:
            "Generate every possible transformation sequence until the destination word is found."
    },

    optimalApproach: {
        title: "Breadth-First Search",
        description:
            "Treat each word as a graph node and use BFS to find the shortest transformation sequence."
    }
},

{
    id: "critical-connections-in-a-network",

    title: "Critical Connections in a Network",

    heroDescription:
        "Learn Tarjan's Algorithm to identify all bridges whose removal disconnects the network.",

    problemStatement:
        "There are n servers connected by undirected edges. Return all critical connections (bridges) whose removal disconnects the graph.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Graph",

    subPattern: "Tarjan's Algorithm",

    graphType: "Undirected",

    time: "45 min",

    acceptance: "61%",

    example1: {
        input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
        output: "[[1,3]]",
        explanation:
            "Removing edge (1,3) disconnects the graph."
    },

    example2: {
        input: "n = 2, connections = [[0,1]]",
        output: "[[0,1]]",
        explanation:
            "The only edge is a bridge."
    },

    constraints:
        "2 <= n <= 10⁵\nn-1 <= connections.length <= 10⁵",

    timeComplexity: "O(V + E)",

    spaceComplexity: "O(V + E)",

    hints: [
        "Run DFS.",
        "Maintain discovery time and low-link values.",
        "Compare low[child] with disc[parent].",
        "Identify bridge edges."
    ],

    bruteForce: {
        title: "Remove Every Edge",
        description:
            "Remove each edge individually and check whether the graph becomes disconnected."
    },

    optimalApproach: {
        title: "Tarjan's Algorithm",
        description:
            "Use DFS with discovery and low-link values to identify every bridge in linear time."
    }
},

{
    id: "swim-in-rising-water",

    title: "Swim in Rising Water",

    heroDescription:
        "Master Dijkstra's Algorithm on a grid to minimize the maximum elevation encountered along the path.",

    problemStatement:
        "You are given an n × n grid where each cell represents an elevation. Return the minimum time required to swim from the top-left cell to the bottom-right cell.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Dijkstra",

    graphType: "Weighted Grid",

    time: "40-45 min",

    acceptance: "63%",

    example1: {
        input: "grid = [[0,2],[1,3]]",
        output: "3",
        explanation:
            "The minimum required time is 3."
    },

    example2: {
        input: "grid = [[0,1,2],[5,4,3],[6,7,8]]",
        output: "8",
        explanation:
            "Choose the path minimizing the maximum elevation."
    },

    constraints:
        "2 <= n <= 50",

    timeComplexity: "O(n² log n)",

    spaceComplexity: "O(n²)",

    hints: [
        "Every cell is a graph node.",
        "The path cost is the maximum elevation visited.",
        "Use a Min Heap.",
        "Always expand the cell with the smallest current cost."
    ],

    bruteForce: {
        title: "Explore Every Path",
        description:
            "Enumerate every possible path and calculate the maximum elevation encountered."
    },

    optimalApproach: {
        title: "Dijkstra's Algorithm",
        description:
            "Use a priority queue to always explore the path with the smallest current maximum elevation."
    }
},

{
    id: "reconstruct-itinerary",

    title: "Reconstruct Itinerary",

    heroDescription:
        "Master Eulerian Path by reconstructing the lexicographically smallest itinerary using all flight tickets exactly once.",

    problemStatement:
        "You are given a list of airline tickets where tickets[i] = [from, to]. Reconstruct the itinerary in order and return it. All tickets belong to one traveler who begins at 'JFK'. If multiple valid itineraries exist, return the lexicographically smallest one.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Graph",

    subPattern: "Eulerian Path",

    graphType: "Directed",

    time: "45 min",

    acceptance: "44%",

    example1: {
        input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
        output: '["JFK","MUC","LHR","SFO","SJC"]',
        explanation:
            "The itinerary uses every ticket exactly once while starting from JFK."
    },

    example2: {
        input: 'tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]',
        output: '["JFK","NRT","JFK","KUL"]',
        explanation:
            "Among multiple valid itineraries, return the lexicographically smallest one."
    },

    constraints:
        "1 <= tickets.length <= 300\nEach airport code consists of three uppercase English letters.\nAll tickets form at least one valid itinerary.",

    timeComplexity: "O(E log E)",

    spaceComplexity: "O(E)",

    hints: [
        "Represent flights as a directed graph.",
        "Always choose the lexicographically smallest destination first.",
        "Use DFS until no outgoing edges remain.",
        "Build the itinerary in reverse while backtracking."
    ],

    bruteForce: {
        title: "Try Every Possible Itinerary",
        description:
            "Generate every valid itinerary using all tickets and return the lexicographically smallest one."
    },

    optimalApproach: {
        title: "Hierholzer's Algorithm",
        description:
            "Sort destinations lexicographically and perform DFS using Hierholzer's Algorithm to construct the Eulerian Path."
    }
},

];