const linkedListQuestions = [
{
    id: "reverse-linked-list",

    title: "Reverse Linked List",

    heroDescription:
        "Learn pointer manipulation to reverse a singly linked list efficiently in-place.",

    problemStatement:
        "Given the head of a singly linked list, reverse the list and return the reversed list.",

    difficulty: "Easy",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Meta"
    ],

    pattern: "Pointer Manipulation",

    time: "10-15 min",

    acceptance: "78%",

    amazonFrequency: "Very High",

    example1: {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation:
            "Reverse the direction of every node's next pointer."
    },

    example2: {
        input: "head = [1,2]",
        output: "[2,1]",
        explanation:
            "The second node becomes the new head after reversal."
    },

    constraints:
        "The number of nodes is in the range [0, 5000].\n-5000 <= Node.val <= 5000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Maintain previous, current and next pointers.",
        "Store the next node before changing links.",
        "Reverse one pointer at a time.",
        "Move all pointers forward."
    ],

    bruteForce: {
        title: "Using Extra Array",
        description:
            "Store all node values inside an array, then overwrite the linked list in reverse order."
    },

    optimalApproach: {
        title: "Iterative Pointer Reversal",
        description:
            "Traverse the linked list while maintaining previous, current, and next pointers. Reverse each link one by one until the entire list is reversed."
    }
},

{
    id: "middle-of-the-linked-list",

    title: "Middle of the Linked List",

    heroDescription:
        "Master the Fast & Slow Pointer technique to locate the middle node in a single traversal.",

    problemStatement:
        "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",

    difficulty: "Easy",

    companies: [
        "Amazon",
        "Adobe",
        "Microsoft",
        "Google"
    ],

    pattern: "Fast & Slow Pointer",

    time: "10-15 min",

    acceptance: "81%",

    amazonFrequency: "High",

    example1: {
        input: "head = [1,2,3,4,5]",
        output: "[3,4,5]",
        explanation:
            "Node with value 3 is the middle node."
    },

    example2: {
        input: "head = [1,2,3,4,5,6]",
        output: "[4,5,6]",
        explanation:
            "Since there are two middle nodes, return the second one."
    },

    constraints:
        "The number of nodes is in the range [1,100].\n1 <= Node.val <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Try solving it in one traversal.",
        "Use two pointers.",
        "Move one pointer twice as fast as the other.",
        "When the fast pointer reaches the end, the slow pointer will be at the middle."
    ],

    bruteForce: {
        title: "Count Nodes",
        description:
            "Count the total number of nodes, then traverse again until reaching the middle node."
    },

    optimalApproach: {
        title: "Fast & Slow Pointer",
        description:
            "Maintain two pointers. Move the slow pointer one step and the fast pointer two steps at a time. When the fast pointer reaches the end, the slow pointer points to the middle node."
    }
},

{
    id: "linked-list-cycle",

    title: "Linked List Cycle",

    heroDescription:
        "Learn Floyd's Cycle Detection Algorithm to determine whether a linked list contains a cycle.",

    problemStatement:
        "Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle in the linked list, otherwise return false.",

    difficulty: "Easy",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Meta"
    ],

    pattern: "Fast & Slow Pointer",

    time: "10-15 min",

    acceptance: "51%",

    amazonFrequency: "Very High",

    example1: {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation:
            "The tail connects to the node at index 1, creating a cycle."
    },

    example2: {
        input: "head = [1,2], pos = 0",
        output: "true",
        explanation:
            "The second node points back to the first node."
    },

    constraints:
        "The number of nodes is in the range [0, 10⁴].\n-10⁵ <= Node.val <= 10⁵\npos is -1 or a valid index.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Using a HashSet is one possible solution.",
        "Can you solve it without extra space?",
        "Use two pointers moving at different speeds.",
        "If they meet, a cycle exists."
    ],

    bruteForce: {
        title: "HashSet Approach",
        description:
            "Store every visited node inside a HashSet. If a node is encountered again, a cycle exists."
    },

    optimalApproach: {
        title: "Floyd's Cycle Detection",
        description:
            "Maintain slow and fast pointers. Move slow by one step and fast by two steps. If they ever meet, the linked list contains a cycle."
    }
},

{
    id: "merge-two-sorted-lists",

    title: "Merge Two Sorted Lists",

    heroDescription:
        "Master the Two Pointer technique to merge two sorted linked lists into one sorted list.",

    problemStatement:
        "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted linked list and return its head.",

    difficulty: "Easy",

    companies: [
        "Amazon",
        "Microsoft",
        "Adobe",
        "Google"
    ],

    pattern: "Two Pointers",

    time: "10-15 min",

    acceptance: "66%",

    amazonFrequency: "Very High",

    example1: {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
        explanation:
            "Compare the current nodes of both lists and append the smaller node."
    },

    example2: {
        input: "list1 = [], list2 = []",
        output: "[]",
        explanation:
            "Both lists are empty."
    },

    constraints:
        "The number of nodes in both lists is in the range [0,50].\n-100 <= Node.val <= 100\nBoth lists are sorted.",

    timeComplexity: "O(n + m)",

    spaceComplexity: "O(1)",

    hints: [
        "Use a dummy node.",
        "Compare nodes from both lists.",
        "Attach the smaller node to the merged list.",
        "Append the remaining nodes at the end."
    ],

    bruteForce: {
        title: "Store and Sort",
        description:
            "Copy all node values into an array, sort the array, then build a new linked list."
    },

    optimalApproach: {
        title: "Dummy Node + Two Pointers",
        description:
            "Use a dummy node to simplify pointer manipulation. Compare nodes from both lists and append the smaller node until one list is exhausted, then attach the remaining nodes."
    }
},

{
    id: "intersection-of-two-linked-lists",

    title: "Intersection of Two Linked Lists",

    heroDescription:
        "Learn the Two Pointer switching technique to find the intersection node of two linked lists without extra space.",

    problemStatement:
        "Given the heads of two singly linked lists, return the node at which the two lists intersect. If the two linked lists have no intersection, return null.",

    difficulty: "Easy",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Apple"
    ],

    pattern: "Two Pointers",

    time: "15-20 min",

    acceptance: "61%",

    amazonFrequency: "High",

    example1: {
        input: "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]",
        output: "Node with value 8",
        explanation:
            "Both linked lists intersect at the node having value 8."
    },

    example2: {
        input: "listA = [2,6,4], listB = [1,5]",
        output: "null",
        explanation:
            "The two linked lists do not intersect."
    },

    constraints:
        "The number of nodes is in the range [0, 3 × 10⁴].\nNode.val is between 1 and 10⁵.",

    timeComplexity: "O(n + m)",

    spaceComplexity: "O(1)",

    hints: [
        "Using a HashSet works but requires extra space.",
        "Think about equalizing the path lengths.",
        "Switch lists when a pointer reaches the end.",
        "Both pointers will meet at the intersection or null."
    ],

    bruteForce: {
        title: "HashSet Approach",
        description:
            "Store all nodes of the first linked list in a HashSet. Traverse the second list and return the first node found in the HashSet."
    },

    optimalApproach: {
        title: "Two Pointer Switching",
        description:
            "Traverse both linked lists simultaneously. When a pointer reaches the end of one list, redirect it to the head of the other list. If an intersection exists, both pointers will eventually meet there."
    }
},

{
    id: "remove-nth-node-from-end-of-list",

    title: "Remove Nth Node From End of List",

    heroDescription:
        "Master the Fast & Slow Pointer technique to remove the nth node from the end in a single traversal.",

    problemStatement:
        "Given the head of a linked list, remove the nth node from the end of the list and return its head.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Meta"
    ],

    pattern: "Fast & Slow Pointer",

    time: "20-25 min",

    acceptance: "49%",

    amazonFrequency: "Very High",

    example1: {
        input: "head = [1,2,3,4,5], n = 2",
        output: "[1,2,3,5]",
        explanation:
            "The 2nd node from the end is 4, so it is removed."
    },

    example2: {
        input: "head = [1], n = 1",
        output: "[]",
        explanation:
            "Removing the only node results in an empty list."
    },

    constraints:
        "The number of nodes is in the range [1,30].\n1 <= Node.val <= 100\n1 <= n <= size of the list.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Use a dummy node.",
        "Move the fast pointer n steps ahead.",
        "Move both pointers together until the fast pointer reaches the end.",
        "Remove the target node by updating pointers."
    ],

    bruteForce: {
        title: "Two Pass Approach",
        description:
            "First count the number of nodes. Traverse again to the node before the target and remove it."
    },

    optimalApproach: {
        title: "One Pass Two Pointer Approach",
        description:
            "Use a dummy node with fast and slow pointers. Move the fast pointer n+1 steps ahead, then move both pointers together until fast reaches the end. The slow pointer will be just before the node to remove."
    }
},

{
    id: "reorder-list",

    title: "Reorder List",

    heroDescription:
        "Learn how to combine Fast & Slow Pointers, Linked List Reversal, and Merging to reorder a linked list efficiently.",

    problemStatement:
        "You are given the head of a singly linked list. Reorder the list to the form L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ... without modifying the values inside the nodes.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Meta",
        "Microsoft",
        "Google"
    ],

    pattern: "Reverse & Merge",

    time: "25-30 min",

    acceptance: "63%",

    amazonFrequency: "High",

    example1: {
        input: "head = [1,2,3,4]",
        output: "[1,4,2,3]",
        explanation:
            "Alternate nodes are taken from the beginning and end of the list."
    },

    example2: {
        input: "head = [1,2,3,4,5]",
        output: "[1,5,2,4,3]",
        explanation:
            "The second half is reversed before merging alternately."
    },

    constraints:
        "The number of nodes is in the range [1,5 × 10⁴].\n1 <= Node.val <= 1000",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Find the middle of the linked list.",
        "Reverse the second half.",
        "Merge the two halves alternately.",
        "Do not create a new linked list."
    ],

    bruteForce: {
        title: "Using Extra Array",
        description:
            "Store all nodes in an array and reconnect them in the required order. This uses additional space."
    },

    optimalApproach: {
        title: "Find Middle + Reverse + Merge",
        description:
            "Find the middle using the fast and slow pointer technique. Reverse the second half of the list, then merge both halves by alternating nodes from each half."
    }
},

{
    id: "add-two-numbers",

    title: "Add Two Numbers",

    heroDescription:
        "Learn linked list simulation to add two numbers digit by digit while handling carry efficiently.",

    problemStatement:
        "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Adobe"
    ],

    pattern: "Simulation",

    time: "20-25 min",

    acceptance: "45%",

    amazonFrequency: "Very High",

    example1: {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation:
            "342 + 465 = 807, which is stored as [7,0,8] in reverse order."
    },

    example2: {
        input: "l1 = [0], l2 = [0]",
        output: "[0]",
        explanation:
            "Adding zero and zero results in zero."
    },

    constraints:
        "The number of nodes in each linked list is in the range [1,100].\n0 <= Node.val <= 9\nThe numbers do not contain leading zeros except the number 0 itself.",

    timeComplexity: "O(max(n,m))",

    spaceComplexity: "O(max(n,m))",

    hints: [
        "Traverse both linked lists simultaneously.",
        "Maintain a carry variable.",
        "Create a new node for every digit of the sum.",
        "Don't forget to add the remaining carry at the end."
    ],

    bruteForce: {
        title: "Convert to Integer",
        description:
            "Convert both linked lists into integers, add them, and create a new linked list from the resulting number. This approach fails for very large numbers."
    },

    optimalApproach: {
        title: "Digit-by-Digit Simulation",
        description:
            "Traverse both linked lists together, add corresponding digits along with the carry, create new nodes for the result, and continue until all digits and any remaining carry are processed."
    }
},

{
    id: "swap-nodes-in-pairs",

    title: "Swap Nodes in Pairs",

    heroDescription:
        "Master pointer manipulation to swap every two adjacent nodes without modifying node values.",

    problemStatement:
        "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values inside the nodes.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Pointer Manipulation",

    time: "20-25 min",

    acceptance: "66%",

    amazonFrequency: "Medium",

    example1: {
        input: "head = [1,2,3,4]",
        output: "[2,1,4,3]",
        explanation:
            "Every adjacent pair of nodes is swapped."
    },

    example2: {
        input: "head = []",
        output: "[]",
        explanation:
            "An empty linked list remains unchanged."
    },

    constraints:
        "The number of nodes is in the range [0,100].\n0 <= Node.val <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Use a dummy node.",
        "Process two nodes at a time.",
        "Carefully update the next pointers.",
        "Move to the next pair after each swap."
    ],

    bruteForce: {
        title: "Swap Values",
        description:
            "Swap the values stored in adjacent nodes instead of changing the node links. This does not satisfy the problem's requirement."
    },

    optimalApproach: {
        title: "Pointer Manipulation",
        description:
            "Use a dummy node to simplify edge cases. Swap adjacent nodes by updating their next pointers while preserving the rest of the linked list."
    }
},

{
    id: "copy-list-with-random-pointer",

    title: "Copy List with Random Pointer",

    heroDescription:
        "Learn HashMap-based cloning to create a deep copy of a linked list with random pointers.",

    problemStatement:
        "A linked list is given where each node contains an additional random pointer that can point to any node in the list or null. Return a deep copy of the list.",

    difficulty: "Medium",

    companies: [
        "Amazon",
        "Meta",
        "Google",
        "Microsoft"
    ],

    pattern: "HashMap",

    time: "30-35 min",

    acceptance: "60%",

    amazonFrequency: "Very High",

    example1: {
        input: "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        output: "Deep copy of the linked list",
        explanation:
            "Each copied node should preserve both the next and random pointer relationships."
    },

    example2: {
        input: "head = []",
        output: "[]",
        explanation:
            "An empty linked list results in an empty copied list."
    },

    constraints:
        "0 <= n <= 1000\n-10⁴ <= Node.val <= 10⁴\nrandom is null or points to another node in the list.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Create a copy of every node.",
        "Store original-to-copy mapping inside a HashMap.",
        "Connect next pointers.",
        "Finally connect random pointers using the HashMap."
    ],

    bruteForce: {
        title: "Recursive Copy",
        description:
            "Recursively create copies of nodes while tracking visited nodes to avoid duplicating shared references."
    },

    optimalApproach: {
        title: "HashMap Cloning",
        description:
            "Perform two passes through the linked list. First, create a copy of every node and store the mapping in a HashMap. Second, assign the next and random pointers using the stored mappings."
    }
},

{
    id: "merge-k-sorted-lists",

    title: "Merge K Sorted Lists",

    heroDescription:
        "Master Min Heap and Divide & Conquer techniques to efficiently merge multiple sorted linked lists.",

    problemStatement:
        "You are given an array of k linked lists, where each linked list is sorted in ascending order. Merge all the linked lists into one sorted linked list and return its head.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Apple"
    ],

    pattern: "Min Heap",

    time: "40-50 min",

    acceptance: "55%",

    amazonFrequency: "Very High",

    example1: {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation:
            "Merge all sorted linked lists while maintaining sorted order."
    },

    example2: {
        input: "lists = []",
        output: "[]",
        explanation:
            "There are no linked lists to merge."
    },

    constraints:
        "0 <= k <= 10⁴\n0 <= lists[i].length <= 500\n-10⁴ <= Node.val <= 10⁴\nThe total number of nodes will not exceed 10⁴.",

    timeComplexity: "O(N log k)",

    spaceComplexity: "O(k)",

    hints: [
        "Merging one list at a time is inefficient.",
        "Always pick the smallest available node.",
        "A Min Heap helps retrieve the minimum efficiently.",
        "Divide & Conquer is another optimal solution."
    ],

    bruteForce: {
        title: "Merge One by One",
        description:
            "Merge the linked lists sequentially. After merging two lists, merge the result with the next list until all lists are processed."
    },

    optimalApproach: {
        title: "Min Heap",
        description:
            "Insert the first node of every linked list into a Min Heap. Repeatedly remove the smallest node, append it to the answer, and insert its next node into the heap until the heap becomes empty."
    }
},

{
    id: "reverse-nodes-in-k-group",

    title: "Reverse Nodes in k-Group",

    heroDescription:
        "Learn advanced pointer manipulation to reverse linked list nodes in groups of size k.",

    problemStatement:
        "Given the head of a linked list, reverse the nodes of the list k at a time and return the modified list. If the remaining nodes are fewer than k, leave them unchanged.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Adobe"
    ],

    pattern: "Linked List Reversal",

    time: "40-50 min",

    acceptance: "63%",

    amazonFrequency: "Very High",

    example1: {
        input: "head = [1,2,3,4,5], k = 2",
        output: "[2,1,4,3,5]",
        explanation:
            "Every group of two nodes is reversed."
    },

    example2: {
        input: "head = [1,2,3,4,5], k = 3",
        output: "[3,2,1,4,5]",
        explanation:
            "Only the first group of three nodes is reversed. The remaining nodes stay unchanged."
    },

    constraints:
        "The number of nodes is in the range [1,5000].\n1 <= Node.val <= 1000\n1 <= k <= n",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    hints: [
        "Count whether k nodes exist before reversing.",
        "Reverse exactly k nodes.",
        "Reconnect the reversed group with the remaining list.",
        "Repeat until fewer than k nodes remain."
    ],

    bruteForce: {
        title: "Store Nodes in Array",
        description:
            "Store nodes in an array, reverse every group of k elements, and reconstruct the linked list."
    },

    optimalApproach: {
        title: "In-Place Group Reversal",
        description:
            "Process the linked list group by group. Reverse each complete group of k nodes using pointer manipulation, reconnect the groups, and leave any remaining nodes unchanged."
    }
},

{
    id: "lru-cache",

    title: "LRU Cache",

    heroDescription:
        "Master HashMap and Doubly Linked List to design an efficient Least Recently Used (LRU) cache.",

    problemStatement:
        "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with get() and put() operations in O(1) average time complexity.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta",
        "Oracle"
    ],

    pattern: "HashMap + Doubly Linked List",

    time: "45-50 min",

    acceptance: "44%",

    amazonFrequency: "Very High",

    example1: {
        input: '["LRUCache","put","put","get","put","get","put","get","get","get"]',
        output: "[null,null,null,1,null,-1,null,-1,3,4]",
        explanation:
            "The least recently used item is removed whenever the cache reaches its capacity."
    },

    example2: {
        input: "capacity = 1",
        output: "Cache stores only one key-value pair at a time.",
        explanation:
            "Every new insertion evicts the previously stored item if the capacity is exceeded."
    },

    constraints:
        "1 <= capacity <= 3000\n0 <= key <= 10⁴\n0 <= value <= 10⁵\nAt most 2 × 10⁵ calls will be made to get and put.",

    timeComplexity: "O(1)",

    spaceComplexity: "O(capacity)",

    hints: [
        "HashMap provides O(1) key lookup.",
        "A Doubly Linked List maintains usage order.",
        "Move recently accessed nodes to the front.",
        "Remove the least recently used node from the tail."
    ],

    bruteForce: {
        title: "Array/List Simulation",
        description:
            "Store elements in a list and update their positions after every access. Searching and updating require linear time."
    },

    optimalApproach: {
        title: "HashMap + Doubly Linked List",
        description:
            "Use a HashMap to access cache entries in O(1) time and a Doubly Linked List to maintain the order of usage. Move accessed nodes to the front and evict the least recently used node from the tail when the cache exceeds its capacity."
    }
},

{
    id: "sort-list",

    title: "Sort List",

    heroDescription:
        "Learn Merge Sort on Linked Lists to sort a linked list efficiently in O(n log n) time.",

    problemStatement:
        "Given the head of a linked list, return the list after sorting it in ascending order.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Adobe"
    ],

    pattern: "Merge Sort",

    time: "35-45 min",

    acceptance: "58%",

    amazonFrequency: "High",

    example1: {
        input: "head = [4,2,1,3]",
        output: "[1,2,3,4]",
        explanation:
            "The linked list is sorted using Merge Sort."
    },

    example2: {
        input: "head = [-1,5,3,4,0]",
        output: "[-1,0,3,4,5]",
        explanation:
            "After recursively dividing and merging, the linked list becomes sorted."
    },

    constraints:
        "The number of nodes is in the range [0, 5 × 10⁴].\n-10⁵ <= Node.val <= 10⁵",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(log n)",

    hints: [
        "Find the middle of the linked list.",
        "Recursively sort both halves.",
        "Merge the sorted halves.",
        "Merge Sort is naturally suited for linked lists."
    ],

    bruteForce: {
        title: "Store and Sort",
        description:
            "Copy all node values into an array, sort the array, and rebuild the linked list."
    },

    optimalApproach: {
        title: "Merge Sort",
        description:
            "Split the linked list into two halves using the fast and slow pointer technique. Recursively sort both halves and merge them into a single sorted linked list."
    }
},

{
    id: "flatten-a-multilevel-doubly-linked-list",

    title: "Flatten a Multilevel Doubly Linked List",

    heroDescription:
        "Master Depth-First Search and pointer manipulation to flatten a multilevel doubly linked list into a single-level list.",

    problemStatement:
        "You are given a multilevel doubly linked list where each node has next, prev, and child pointers. Flatten the list so that all nodes appear in a single-level doubly linked list.",

    difficulty: "Hard",

    companies: [
        "Amazon",
        "Google",
        "Meta",
        "LinkedIn"
    ],

    pattern: "DFS + Pointer Manipulation",

    time: "40-50 min",

    acceptance: "61%",

    amazonFrequency: "Very High",

    example1: {
        input: "head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]",
        output: "[1,2,3,7,8,11,12,9,10,4,5,6]",
        explanation:
            "Each child list is inserted immediately after its parent node while preserving traversal order."
    },

    example2: {
        input: "head = [1,2,null,3]",
        output: "[1,3,2]",
        explanation:
            "The child list is flattened into the main list."
    },

    constraints:
        "The number of nodes will not exceed 1000.\n1 <= Node.val <= 10⁵",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Depth-First Search naturally visits child lists first.",
        "Store the next node before traversing a child.",
        "Reconnect child lists carefully.",
        "Update both next and prev pointers."
    ],

    bruteForce: {
        title: "Recursive Reconstruction",
        description:
            "Traverse every level recursively, store nodes in traversal order, and reconnect them into a new doubly linked list."
    },

    optimalApproach: {
        title: "Depth-First Search",
        description:
            "Perform a depth-first traversal of the multilevel list. Whenever a child exists, splice it into the main list, reconnect the remaining nodes, and update both next and prev pointers appropriately."
    }
},

];