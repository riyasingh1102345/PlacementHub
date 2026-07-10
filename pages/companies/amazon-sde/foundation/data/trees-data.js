const treesQuestions = [

{
    id: "invert-binary-tree",

    title: "Invert Binary Tree",

    heroDescription:
        "Learn recursion and tree traversal by swapping the left and right children of every node in a binary tree.",

    problemStatement:
        "Given the root of a binary tree, invert the tree and return its root.",

    difficulty: "Easy",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "DFS + Recursion",

    time: "10-15 min",

    acceptance: "79%",

    example1: {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]",
        explanation:
            "Swap the left and right child of every node recursively."
    },

    example2: {
        input: "root = [2,1,3]",
        output: "[2,3,1]",
        explanation:
            "Both child nodes are swapped."
    },

    constraints:
        "The number of nodes is in the range [0,100].\n-100 <= Node.val <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "Think recursively.",
        "Swap the left and right children.",
        "Do the same for both subtrees.",
        "Return the root after processing."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Traverse every node and recursively swap its children. Every node must still be visited once."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use Depth First Search with recursion. At every node, swap the left and right child, then recursively process both subtrees."
    }
},

{
    id: "maximum-depth-of-binary-tree",

    title: "Maximum Depth of Binary Tree",

    heroDescription:
        "Master recursion by computing the longest path from the root to any leaf node.",

    problemStatement:
        "Given the root of a binary tree, return its maximum depth.",

    difficulty: "Easy",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe"
    ],

    pattern: "DFS",

    time: "10-15 min",

    acceptance: "76%",

    example1: {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
        explanation:
            "The longest path from the root to a leaf contains three nodes."
    },

    example2: {
        input: "root = [1,null,2]",
        output: "2",
        explanation:
            "The tree has two levels."
    },

    constraints:
        "The number of nodes is in the range [0,10⁴].\n-100 <= Node.val <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "Think recursively.",
        "Find the height of the left subtree.",
        "Find the height of the right subtree.",
        "Return one plus the maximum of both heights."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Traverse every path from the root to each leaf and record the maximum depth."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use Depth First Search recursively. The depth of a node is one plus the maximum depth of its left and right subtrees."
    }
},

{
    id: "same-tree",

    title: "Same Tree",

    heroDescription:
        "Learn recursive tree comparison by checking whether two binary trees are structurally identical.",

    problemStatement:
        "Given the roots of two binary trees p and q, return true if they are the same tree, and false otherwise. Two binary trees are considered the same if they are structurally identical and the nodes have the same values.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Tree Traversal",

    time: "10-15 min",

    acceptance: "62%",

    example1: {
        input: "p = [1,2,3], q = [1,2,3]",
        output: "true",
        explanation:
            "Both trees have the same structure and node values."
    },

    example2: {
        input: "p = [1,2], q = [1,null,2]",
        output: "false",
        explanation:
            "The trees differ in structure."
    },

    constraints:
        "The number of nodes in both trees is in the range [0,100].\n-10⁴ <= Node.val <= 10⁴",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "If both nodes are null, they are equal.",
        "If only one node is null, the trees are different.",
        "Compare the current node values.",
        "Recursively compare both left and right subtrees."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Traverse both trees simultaneously and compare every corresponding node."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use recursive DFS. Compare the current nodes, then recursively compare the left and right subtrees."
    }
},

{
    id: "symmetric-tree",

    title: "Symmetric Tree",

    heroDescription:
        "Master recursive mirror checking to determine whether a binary tree is symmetric around its center.",

    problemStatement:
        "Given the root of a binary tree, check whether it is symmetric around its center.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Meta"
    ],

    pattern: "Mirror Tree",

    time: "15-20 min",

    acceptance: "58%",

    example1: {
        input: "root = [1,2,2,3,4,4,3]",
        output: "true",
        explanation:
            "The left and right subtrees are mirror images of each other."
    },

    example2: {
        input: "root = [1,2,2,null,3,null,3]",
        output: "false",
        explanation:
            "The tree is not symmetric."
    },

    constraints:
        "The number of nodes is in the range [1,1000].\n-100 <= Node.val <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "Compare the left and right subtrees together.",
        "The left child should match the right child.",
        "The right child should match the left child.",
        "Continue recursively until both subtrees are exhausted."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Construct the mirror of one subtree and compare it with the other subtree node by node."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use recursive DFS by checking whether the left and right subtrees are mirror images of each other."
    }
},

{
    id: "balanced-binary-tree",

    title: "Balanced Binary Tree",

    heroDescription:
        "Learn how to efficiently determine whether a binary tree is height-balanced using a bottom-up DFS approach.",

    problemStatement:
        "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is one in which the left and right subtrees of every node differ in height by no more than one.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "DFS + Bottom-Up",

    time: "15-20 min",

    acceptance: "56%",

    example1: {
        input: "root = [3,9,20,null,null,15,7]",
        output: "true",
        explanation:
            "Every node has left and right subtree heights differing by at most one."
    },

    example2: {
        input: "root = [1,2,2,3,3,null,null,4,4]",
        output: "false",
        explanation:
            "Some nodes have subtree heights differing by more than one."
    },

    constraints:
        "The number of nodes is in the range [0,5000].\n-10⁴ <= Node.val <= 10⁴",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "Find the height of both left and right subtrees.",
        "Check if the height difference exceeds one.",
        "Process child subtrees before the parent.",
        "Return height and balance information together."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Compute the height of every subtree separately for each node, resulting in repeated height calculations."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use a bottom-up DFS. Calculate subtree heights while simultaneously checking whether every subtree remains balanced."
    }
},

{
    id: "binary-tree-level-order-traversal",

    title: "Binary Tree Level Order Traversal",

    heroDescription:
        "Master Breadth First Search (BFS) by traversing a binary tree level by level.",

    problemStatement:
        "Given the root of a binary tree, return the level order traversal of its nodes' values from left to right.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "BFS",

    time: "15-20 min",

    acceptance: "71%",

    example1: {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation:
            "Each level of the binary tree is traversed from left to right."
    },

    example2: {
        input: "root = [1]",
        output: "[[1]]",
        explanation:
            "The tree contains only one level."
    },

    constraints:
        "The number of nodes is in the range [0,2000].\n-1000 <= Node.val <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Think level by level instead of depth first.",
        "Use a queue.",
        "Process all nodes currently present in the queue before moving to the next level.",
        "Store every level separately."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Compute the height of the tree and traverse each level separately."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use Breadth First Search with a queue. Process one level at a time and store the nodes belonging to that level."
    }
},

{
    id: "validate-binary-search-tree",

    title: "Validate Binary Search Tree",

    heroDescription:
        "Learn how to verify whether a binary tree satisfies all Binary Search Tree (BST) properties.",

    problemStatement:
        "Given the root of a binary tree, determine if it is a valid Binary Search Tree (BST). A BST is valid if every node in the left subtree is smaller and every node in the right subtree is larger than the current node.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "BST",

    time: "20-25 min",

    acceptance: "34%",

    example1: {
        input: "root = [2,1,3]",
        output: "true",
        explanation:
            "Every node satisfies the Binary Search Tree property."
    },

    example2: {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
        explanation:
            "Node 3 lies in the right subtree of 5 but is smaller than 5."
    },

    constraints:
        "The number of nodes is in the range [1,10⁴].\n-2³¹ <= Node.val <= 2³¹ - 1",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "Checking only the parent node is not sufficient.",
        "Every node must satisfy a valid value range.",
        "Pass minimum and maximum limits recursively.",
        "Return false immediately when a node violates the range."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "For every node, compare it with all nodes in its left and right subtrees, leading to repeated traversals."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use DFS while maintaining valid minimum and maximum value boundaries for every node."
    }
},

{
    id: "lowest-common-ancestor-of-a-binary-tree",

    title: "Lowest Common Ancestor of a Binary Tree",

    heroDescription:
        "Master recursive tree traversal to find the lowest node that is an ancestor of two given nodes.",

    problemStatement:
        "Given the root of a binary tree and two nodes p and q, return their Lowest Common Ancestor (LCA).",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta",
        "Apple"
    ],

    pattern: "Tree Recursion",

    time: "25-30 min",

    acceptance: "68%",

    example1: {
        input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        output: "3",
        explanation:
            "The lowest node having both p and q as descendants is node 3."
    },

    example2: {
        input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        output: "5",
        explanation:
            "A node can be a descendant of itself, so 5 is the Lowest Common Ancestor."
    },

    constraints:
        "The number of nodes is in the range [2,10⁵].\nAll Node.val values are unique.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "Traverse both left and right subtrees.",
        "If the current node is either p or q, return it.",
        "If both recursive calls return non-null, the current node is the LCA.",
        "Otherwise, return the non-null child."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Store parent pointers for every node and compare ancestor paths to find the first common node."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use recursive DFS. Return the current node if it matches p or q. If both subtrees return non-null values, the current node is the Lowest Common Ancestor."
    }
},

{
    id: "kth-smallest-element-in-a-bst",

    title: "Kth Smallest Element in a BST",

    heroDescription:
        "Master inorder traversal to efficiently find the kth smallest element in a Binary Search Tree.",

    problemStatement:
        "Given the root of a Binary Search Tree and an integer k, return the kth smallest value in the tree.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Inorder Traversal",

    time: "20-25 min",

    acceptance: "76%",

    example1: {
        input: "root = [3,1,4,null,2], k = 1",
        output: "1",
        explanation:
            "The inorder traversal of a BST visits nodes in sorted order, making the first visited node the smallest."
    },

    example2: {
        input: "root = [5,3,6,2,4,null,null,1], k = 3",
        output: "3",
        explanation:
            "The third node visited during inorder traversal is the answer."
    },

    constraints:
        "1 <= k <= n <= 10⁴\n0 <= Node.val <= 10⁴",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "What traversal of a BST gives sorted order?",
        "Count visited nodes during traversal.",
        "Stop as soon as the kth node is visited.",
        "No need to store the complete traversal."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Store the inorder traversal of the entire BST in an array and return the kth element."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Perform inorder traversal while maintaining a counter. Return immediately when the kth node is visited."
    }
},

{
    id: "binary-tree-right-side-view",

    title: "Binary Tree Right Side View",

    heroDescription:
        "Learn Breadth First Search to determine which nodes are visible when viewing a binary tree from the right side.",

    problemStatement:
        "Given the root of a binary tree, return the values of the nodes visible from the right side, ordered from top to bottom.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe"
    ],

    pattern: "BFS",

    time: "20-25 min",

    acceptance: "68%",

    example1: {
        input: "root = [1,2,3,null,5,null,4]",
        output: "[1,3,4]",
        explanation:
            "The rightmost node at every level forms the right side view."
    },

    example2: {
        input: "root = [1,null,3]",
        output: "[1,3]",
        explanation:
            "Only one node is visible at each level."
    },

    constraints:
        "The number of nodes is in the range [0,100].\n-100 <= Node.val <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Traverse the tree level by level.",
        "Process one level at a time.",
        "Store the last node of every level.",
        "A queue is useful for BFS."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Compute every level separately and manually determine the rightmost node."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use Breadth First Search. During each level traversal, record the last node processed."
    }
},

{
    id: "diameter-of-binary-tree",

    title: "Diameter of Binary Tree",

    heroDescription:
        "Learn Tree Dynamic Programming to efficiently compute the longest path between any two nodes in a binary tree.",

    problemStatement:
        "Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in the tree.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Tree DP",

    time: "20-25 min",

    acceptance: "64%",

    example1: {
        input: "root = [1,2,3,4,5]",
        output: "3",
        explanation:
            "The longest path is 4 → 2 → 1 → 3, which contains 3 edges."
    },

    example2: {
        input: "root = [1,2]",
        output: "1",
        explanation:
            "The longest path connects the two nodes."
    },

    constraints:
        "The number of nodes is in the range [1,10⁴].\n-100 <= Node.val <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "The diameter may or may not pass through the root.",
        "Compute the height of every subtree.",
        "At every node, consider left height + right height.",
        "Maintain a global maximum diameter."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Compute the height of every subtree separately while checking the diameter at every node, leading to repeated calculations."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use a single DFS traversal to compute subtree heights while simultaneously updating the maximum diameter."
    }
},

{
    id: "path-sum-ii",

    title: "Path Sum II",

    heroDescription:
        "Master DFS and Backtracking by finding every root-to-leaf path whose sum equals the target value.",

    problemStatement:
        "Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of node values equals targetSum.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Adobe"
    ],

    pattern: "DFS + Backtracking",

    time: "25-30 min",

    acceptance: "59%",

    example1: {
        input: "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
        output: "[[5,4,11,2],[5,8,4,5]]",
        explanation:
            "Both root-to-leaf paths sum to the target value of 22."
    },

    example2: {
        input: "root = [1,2,3], targetSum = 5",
        output: "[]",
        explanation:
            "No root-to-leaf path has a sum equal to the target."
    },

    constraints:
        "The number of nodes is in the range [0,5000].\n-1000 <= Node.val <= 1000\n-1000 <= targetSum <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "Traverse from root to leaf.",
        "Maintain the current path.",
        "Subtract the current node value from the target.",
        "Backtrack after exploring each subtree."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Generate every root-to-leaf path, calculate its sum separately, and keep only those matching the target."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use DFS with backtracking. Maintain the current path and remaining target while exploring the tree."
    }
},

{
    id: "serialize-and-deserialize-binary-tree",

    title: "Serialize and Deserialize Binary Tree",

    heroDescription:
        "Learn Tree Serialization by converting a binary tree into a string and reconstructing it back without losing its structure.",

    problemStatement:
        "Design an algorithm to serialize a binary tree into a string and deserialize the string back into the original binary tree.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Tree Serialization",

    time: "35-40 min",

    acceptance: "59%",

    example1: {
        input: "root = [1,2,3,null,null,4,5]",
        output: "[1,2,3,null,null,4,5]",
        explanation:
            "After serialization and deserialization, the reconstructed tree should match the original tree."
    },

    example2: {
        input: "root = []",
        output: "[]",
        explanation:
            "An empty tree remains empty after serialization and deserialization."
    },

    constraints:
        "The number of nodes is in the range [0,10⁴].\n-1000 <= Node.val <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Think about how null nodes should be represented.",
        "Preorder traversal works well for serialization.",
        "Store every node, including null markers.",
        "Use the serialized data to recursively rebuild the tree."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Store the tree manually using custom data structures without defining a systematic serialization format."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Perform preorder traversal while storing null markers. During deserialization, recursively rebuild the tree using the serialized sequence."
    }
},

{
    id: "binary-tree-maximum-path-sum",

    title: "Binary Tree Maximum Path Sum",

    heroDescription:
        "Master Tree Dynamic Programming to compute the maximum possible path sum between any two nodes.",

    problemStatement:
        "Given the root of a binary tree, return the maximum path sum. A path may start and end at any node in the tree.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Tree DP",

    time: "40-45 min",

    acceptance: "39%",

    example1: {
        input: "root = [1,2,3]",
        output: "6",
        explanation:
            "The maximum path is 2 → 1 → 3."
    },

    example2: {
        input: "root = [-10,9,20,null,null,15,7]",
        output: "42",
        explanation:
            "The maximum path is 15 → 20 → 7."
    },

    constraints:
        "The number of nodes is in the range [1,3×10⁴].\n-1000 <= Node.val <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(h)",

    hints: [
        "The maximum path does not always pass through the root.",
        "Ignore negative subtree contributions.",
        "Maintain a global maximum.",
        "Return the best downward path to the parent."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Consider every possible path in the tree and calculate its sum independently."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Use DFS to calculate the maximum downward path from every node while maintaining a global maximum path sum."
    }
},

{
    id: "construct-binary-tree-from-preorder-and-inorder-traversal",

    title: "Construct Binary Tree from Preorder and Inorder Traversal",

    heroDescription:
        "Learn tree reconstruction by combining preorder and inorder traversal properties.",

    problemStatement:
        "Given the preorder and inorder traversal of a binary tree, construct and return the binary tree.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Tree Construction",

    time: "35-40 min",

    acceptance: "66%",

    example1: {
        input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        output: "[3,9,20,null,null,15,7]",
        explanation:
            "The tree is reconstructed using preorder and inorder traversal."
    },

    example2: {
        input: "preorder = [-1], inorder = [-1]",
        output: "[-1]",
        explanation:
            "The tree contains only one node."
    },

    constraints:
        "1 <= preorder.length <= 3000\npreorder.length == inorder.length\nAll values are unique.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "The first preorder element is always the root.",
        "Locate the root in the inorder traversal.",
        "Recursively build the left subtree first.",
        "Then recursively build the right subtree."
    ],

    bruteForce: {
        title: "Brute Force Approach",
        description:
            "Repeatedly search for the root in the inorder traversal during every recursive call."
    },

    optimalApproach: {
        title: "Optimal Approach",
        description:
            "Store inorder indices inside a HashMap to locate roots in O(1) while recursively constructing the tree."
    }
},

];