const stackQuestions = [

{
    id: "valid-parentheses",

    title: "Valid Parentheses",

    heroDescription:
        "Learn Stack fundamentals by checking whether brackets are balanced and properly nested.",

    problemStatement:
        "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. A string is valid if every opening bracket has a corresponding closing bracket of the same type and they appear in the correct order.",

    difficulty: "Easy",

    frequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Stack",

    time: "10-15 min",

    acceptance: "42%",

    example1: {
        input: 's = "()"',
        output: "true",
        explanation:
            "Every opening bracket has a matching closing bracket in the correct order."
    },

    example2: {
        input: 's = "(]"',
        output: "false",
        explanation:
            "The opening parenthesis is closed with the wrong type of bracket."
    },

    constraints:
        "1 <= s.length <= 10⁴\ns consists only of the characters '()[]{}'.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Use a stack to store opening brackets.",
        "Push every opening bracket onto the stack.",
        "When a closing bracket appears, compare it with the top of the stack.",
        "The stack should be empty after processing the string."
    ],

    bruteForce: {
        title: "Repeated String Replacement",
        description:
            "Repeatedly remove valid bracket pairs such as '()', '{}', and '[]' until no more replacements are possible. If the string becomes empty, it is valid."
    },

    optimalApproach: {
        title: "Stack",
        description:
            "Traverse the string once while maintaining a stack. Push opening brackets and pop when a matching closing bracket is encountered. If a mismatch occurs or the stack is not empty at the end, the string is invalid."
    }
},

{
    id: "min-stack",

    title: "Min Stack",

    heroDescription:
        "Design a stack that supports retrieving the minimum element in constant time.",

    problemStatement:
        "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class with all operations in O(1) time.",

    difficulty: "Easy",

    frequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe"
    ],

    pattern: "Stack Design",

    time: "15-20 min",

    acceptance: "56%",

    example1: {
        input: '["MinStack","push","push","push","getMin","pop","top","getMin"]',
        output: "[null,null,null,null,-3,null,0,-2]",
        explanation:
            "Maintain the minimum element efficiently while performing stack operations."
    },

    example2: {
        input: "push(5), push(2), push(8), getMin()",
        output: "2",
        explanation:
            "The minimum element currently stored in the stack is 2."
    },

    constraints:
        "-2³¹ <= val <= 2³¹ - 1\nMethods push, pop, top and getMin will always be called on non-empty stacks.\nAt most 3 × 10⁴ calls will be made.",

    timeComplexity: "O(1)",

    spaceComplexity: "O(n)",

    hints: [
        "A normal stack cannot retrieve the minimum efficiently.",
        "Maintain another stack to track minimum values.",
        "Push the current minimum along with every insertion.",
        "Both stacks should always remain synchronized."
    ],

    bruteForce: {
        title: "Linear Search",
        description:
            "Store all elements in a stack. Whenever getMin() is called, traverse the entire stack to find the minimum element."
    },

    optimalApproach: {
        title: "Two Stack Design",
        description:
            "Maintain two stacks: one for storing values and another for storing the minimum value at every level. This allows push, pop, top, and getMin operations to run in constant time."
    }
},

{
    id: "baseball-game",

    title: "Baseball Game",

    heroDescription:
        "Learn Stack simulation by maintaining previous scores while processing different operations.",

    problemStatement:
        "You are given a list of operations representing a baseball game. Build the record according to the rules and return the sum of all scores after performing every operation.",

    difficulty: "Easy",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Stack Simulation",

    time: "10-15 min",

    acceptance: "79%",

    example1: {
        input: 'ops = ["5","2","C","D","+"]',
        output: "30",
        explanation:
            "After processing all operations, the valid scores become [5,10,15], whose sum is 30."
    },

    example2: {
        input: 'ops = ["5","-2","4","C","D","9","+","+"]',
        output: "27",
        explanation:
            "Each operation updates the stack according to the given rules."
    },

    constraints:
        "1 <= ops.length <= 1000\nops[i] is an integer, '+', 'D', or 'C'.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Maintain a stack of valid scores.",
        "Push integers directly.",
        "'C' removes the previous score.",
        "'D' doubles the previous score and '+' sums the last two scores."
    ],

    bruteForce: {
        title: "Simulation using Array",
        description:
            "Maintain every valid score in an array and simulate every operation one by one."
    },

    optimalApproach: {
        title: "Stack Simulation",
        description:
            "Use a stack to maintain valid scores. Perform push, pop, double, and sum operations efficiently while processing each operation exactly once."
    }
},

{
    id: "remove-outermost-parentheses",

    title: "Remove Outermost Parentheses",

    heroDescription:
        "Master Stack and nesting concepts by removing the outermost parentheses from every primitive valid string.",

    problemStatement:
        "A valid parentheses string is primitive if it cannot be split into two non-empty valid strings. Remove the outermost parentheses of every primitive substring and return the resulting string.",

    difficulty: "Easy",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Adobe"
    ],

    pattern: "Stack",

    time: "10-15 min",

    acceptance: "82%",

    example1: {
        input: 's = "(()())(())"',
        output: '"()()()"',
        explanation:
            "Remove the outermost pair from each primitive substring."
    },

    example2: {
        input: 's = "(()())(())(()(()))"',
        output: '"()()()()(())"',
        explanation:
            "Each primitive substring loses its outermost parentheses."
    },

    constraints:
        "1 <= s.length <= 10⁵\ns is a valid parentheses string.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Track the nesting depth.",
        "Ignore the first opening bracket of a primitive.",
        "Ignore the last closing bracket of a primitive.",
        "Append all remaining brackets."
    ],

    bruteForce: {
        title: "Primitive Decomposition",
        description:
            "Split the string into primitive valid parentheses strings and remove the first and last character from each."
    },

    optimalApproach: {
        title: "Depth Counting",
        description:
            "Traverse the string while maintaining the current nesting depth. Skip the outermost opening and closing brackets of every primitive substring."
    }
},

{
    id: "make-the-string-great",

    title: "Make The String Great",

    heroDescription:
        "Use a Stack to repeatedly remove adjacent characters that differ only in letter case.",

    problemStatement:
        "Given a string s, repeatedly remove adjacent characters where one is lowercase and the other is uppercase of the same letter. Return the final string after no more removals are possible.",

    difficulty: "Easy",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Microsoft",
        "Google"
    ],

    pattern: "Stack",

    time: "10-15 min",

    acceptance: "69%",

    example1: {
        input: 's = "leEeetcode"',
        output: '"leetcode"',
        explanation:
            "Characters 'E' and 'e' cancel each other, leaving the remaining string."
    },

    example2: {
        input: 's = "abBAcC"',
        output: '""',
        explanation:
            "Every adjacent conflicting pair is removed."
    },

    constraints:
        "1 <= s.length <= 100\ns consists of uppercase and lowercase English letters.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Process characters one by one.",
        "Maintain a stack of processed characters.",
        "Compare the current character with the stack's top.",
        "Remove adjacent opposite-case pairs."
    ],

    bruteForce: {
        title: "Repeated Scanning",
        description:
            "Repeatedly scan the string, remove one conflicting adjacent pair at a time, and continue until no more removals are possible."
    },

    optimalApproach: {
        title: "Stack",
        description:
            "Traverse the string while maintaining a stack. If the current character and the top of the stack represent the same letter with opposite cases, pop the stack; otherwise, push the current character."
    }
},

{
    id: "daily-temperatures",

    title: "Daily Temperatures",

    heroDescription:
        "Master the Monotonic Stack pattern to efficiently find the next warmer day for every temperature.",

    problemStatement:
        "Given an array of daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day, keep answer[i] as 0.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Monotonic Stack",

    time: "20-25 min",

    acceptance: "67%",

    example1: {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
        explanation:
            "For each day, find the next day with a higher temperature."
    },

    example2: {
        input: "temperatures = [30,40,50,60]",
        output: "[1,1,1,0]",
        explanation:
            "Each next day is warmer than the current one."
    },

    constraints:
        "1 <= temperatures.length <= 10⁵\n30 <= temperatures[i] <= 100",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Traverse the array once.",
        "Maintain indices instead of values.",
        "Keep the stack in decreasing order of temperatures.",
        "Whenever a warmer temperature appears, resolve previous indices."
    ],

    bruteForce: {
        title: "Nested Loop",
        description:
            "For every day, search linearly for the next warmer temperature."
    },

    optimalApproach: {
        title: "Monotonic Stack",
        description:
            "Maintain a decreasing stack of indices. Whenever a warmer temperature is found, pop indices from the stack and calculate the waiting days."
    }
},

{
    id: "evaluate-reverse-polish-notation",

    title: "Evaluate Reverse Polish Notation",

    heroDescription:
        "Learn Stack evaluation by solving arithmetic expressions written in postfix notation.",

    problemStatement:
        "You are given an array of strings representing an arithmetic expression in Reverse Polish Notation. Evaluate the expression and return the result.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Adobe"
    ],

    pattern: "Stack",

    time: "20-25 min",

    acceptance: "55%",

    example1: {
        input: 'tokens = ["2","1","+","3","*"]',
        output: "9",
        explanation:
            "((2 + 1) × 3) = 9."
    },

    example2: {
        input: 'tokens = ["4","13","5","/","+"]',
        output: "6",
        explanation:
            "4 + (13 / 5) = 6."
    },

    constraints:
        "1 <= tokens.length <= 10⁴\nEach token is an operator or an integer.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Operands are pushed onto the stack.",
        "When an operator appears, pop two operands.",
        "Evaluate the expression.",
        "Push the result back onto the stack."
    ],

    bruteForce: {
        title: "Expression Conversion",
        description:
            "Convert the postfix expression into infix notation and then evaluate it."
    },

    optimalApproach: {
        title: "Stack Evaluation",
        description:
            "Traverse the tokens once. Push numbers onto the stack and apply operators immediately by popping the top two operands."
    }
},

{
    id: "asteroid-collision",

    title: "Asteroid Collision",

    heroDescription:
        "Use Stack simulation to efficiently determine the state of asteroids after all collisions.",

    problemStatement:
        "We are given an array of integers representing asteroids in a row. Positive values move right, negative values move left. Determine the state of the asteroids after all collisions.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Stack Simulation",

    time: "20-25 min",

    acceptance: "45%",

    example1: {
        input: "asteroids = [5,10,-5]",
        output: "[5,10]",
        explanation:
            "The asteroid -5 collides with 10 and gets destroyed."
    },

    example2: {
        input: "asteroids = [8,-8]",
        output: "[]",
        explanation:
            "Both asteroids have equal size and destroy each other."
    },

    constraints:
        "2 <= asteroids.length <= 10⁴\n-1000 <= asteroids[i] <= 1000\nasteroids[i] ≠ 0",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Only right-moving and left-moving asteroids can collide.",
        "Use a stack to maintain surviving asteroids.",
        "Keep resolving collisions until the current asteroid is stable.",
        "Handle equal-size collisions carefully."
    ],

    bruteForce: {
        title: "Repeated Simulation",
        description:
            "Repeatedly scan the array for collisions until no further collisions occur."
    },

    optimalApproach: {
        title: "Stack Simulation",
        description:
            "Maintain a stack of surviving asteroids. Resolve collisions only when a right-moving asteroid meets a left-moving asteroid."
    }
},

{
    id: "simplify-path",

    title: "Simplify Path",

    heroDescription:
        "Learn Stack-based path processing to simplify an absolute Unix-style file path.",

    problemStatement:
        "Given an absolute path for a Unix-style file system, simplify it by resolving '.', '..', and multiple consecutive slashes. Return the canonical path.",

    difficulty: "Medium",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Adobe"
    ],

    pattern: "Stack",

    time: "20-25 min",

    acceptance: "46%",

    example1: {
        input: 'path = "/home/"',
        output: '"/home"',
        explanation:
            "Trailing slashes are removed."
    },

    example2: {
        input: 'path = "/../"',
        output: '"/"',
        explanation:
            "Moving above the root directory is not allowed, so the result remains '/'."
    },

    constraints:
        "1 <= path.length <= 3000\npath consists of English letters, digits, '.', '/', and '_'.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Split the path using '/'.",
        "Ignore empty strings and '.'.",
        "Use '..' to remove the previous directory.",
        "Use a stack to build the canonical path."
    ],

    bruteForce: {
        title: "String Processing",
        description:
            "Repeatedly process the path string to remove unnecessary components until it becomes canonical."
    },

    optimalApproach: {
        title: "Stack",
        description:
            "Split the path into directory names. Push valid directory names onto a stack, pop when '..' appears, and ignore '.' or empty components. Finally, join the stack to form the canonical path."
    }
},

{
    id: "next-greater-element-ii",

    title: "Next Greater Element II",

    heroDescription:
        "Master the Monotonic Stack pattern on circular arrays to efficiently find the next greater element.",

    problemStatement:
        "Given a circular integer array nums, return the next greater number for every element. If no greater element exists, return -1 for that position.",

    difficulty: "Medium",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Monotonic Stack",

    time: "25-30 min",

    acceptance: "65%",

    example1: {
        input: "nums = [1,2,1]",
        output: "[2,-1,2]",
        explanation:
            "The array is circular, so the last element checks from the beginning."
    },

    example2: {
        input: "nums = [1,2,3,4,3]",
        output: "[2,3,4,-1,4]",
        explanation:
            "Traverse the circular array to determine the next greater element for every position."
    },

    constraints:
        "1 <= nums.length <= 10⁴\n-10⁹ <= nums[i] <= 10⁹",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "The array is circular.",
        "Traverse the array twice.",
        "Maintain a decreasing stack of indices.",
        "Resolve pending elements whenever a larger value is found."
    ],

    bruteForce: {
        title: "Circular Search",
        description:
            "For every element, scan the circular array until a greater element is found or all elements have been checked."
    },

    optimalApproach: {
        title: "Monotonic Stack",
        description:
            "Traverse the array twice while maintaining a decreasing stack of indices. Whenever a larger element is encountered, update the answer for the indices waiting on the stack."
    }
},

{
    id: "basic-calculator",

    title: "Basic Calculator",

    heroDescription:
        "Master Stack-based expression evaluation to calculate arithmetic expressions containing parentheses.",

    problemStatement:
        "Given a string s representing a valid arithmetic expression, implement a basic calculator to evaluate it and return the result. The expression may contain '+', '-', '(', ')', spaces, and non-negative integers.",

    difficulty: "Hard",

    amazonFrequency: "Very High",

    companies: [
        "Amazon",
        "Google",
        "Microsoft",
        "Meta"
    ],

    pattern: "Stack",

    time: "35-45 min",

    acceptance: "45%",

    example1: {
        input: 's = "1 + 1"',
        output: "2",
        explanation:
            "Evaluate the arithmetic expression following operator precedence and parentheses."
    },

    example2: {
        input: 's = "(1+(4+5+2)-3)+(6+8)"',
        output: "23",
        explanation:
            "Evaluate nested expressions inside parentheses before combining the final result."
    },

    constraints:
        "1 <= s.length <= 3 × 10⁵\ns consists of digits, '+', '-', '(', ')', and spaces.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Process the expression character by character.",
        "Maintain the current result and current sign.",
        "Push the previous result and sign whenever '(' appears.",
        "Resolve the expression when ')' is encountered."
    ],

    bruteForce: {
        title: "Recursive Parsing",
        description:
            "Recursively evaluate every expression enclosed within parentheses before computing the final result."
    },

    optimalApproach: {
        title: "Stack-Based Expression Evaluation",
        description:
            "Traverse the expression once while maintaining the current result and sign. Use a stack to store previous results and signs whenever a new parenthesized expression begins."
    }
},

{
    id: "maximal-rectangle",

    title: "Maximal Rectangle",

    heroDescription:
        "Learn how Monotonic Stack can be extended to find the largest rectangle of 1's inside a binary matrix.",

    problemStatement:
        "Given a rows × columns binary matrix filled with '0's and '1's, return the area of the largest rectangle containing only 1's.",

    difficulty: "Hard",

    amazonFrequency: "High",

    companies: [
        "Amazon",
        "Microsoft",
        "Google",
        "Apple"
    ],

    pattern: "Monotonic Stack",

    time: "40-50 min",

    acceptance: "49%",

    example1: {
        input: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
        output: "6",
        explanation:
            "The largest rectangle containing only 1's has an area of 6."
    },

    example2: {
        input: 'matrix = [["0"]]',
        output: "0",
        explanation:
            "No rectangle containing 1's exists."
    },

    constraints:
        "rows == matrix.length\ncols == matrix[i].length\n1 <= rows, cols <= 200\nmatrix[i][j] is '0' or '1'.",

    timeComplexity: "O(m × n)",

    spaceComplexity: "O(n)",

    hints: [
        "Treat every row as the base of a histogram.",
        "Update histogram heights row by row.",
        "Apply Largest Rectangle in Histogram for every row.",
        "Keep track of the maximum area."
    ],

    bruteForce: {
        title: "Check Every Rectangle",
        description:
            "Consider every possible rectangle inside the matrix and verify whether it contains only 1's."
    },

    optimalApproach: {
        title: "Histogram + Monotonic Stack",
        description:
            "Convert every row into a histogram by updating column heights. For each histogram, use the Largest Rectangle in Histogram algorithm to compute the maximum rectangle."
    }
},

{
    id: "parsing-a-boolean-expression",

    title: "Parsing A Boolean Expression",

    heroDescription:
        "Master Stack-based parsing to efficiently evaluate nested Boolean expressions.",

    problemStatement:
        "Given a Boolean expression as a string, return the result after evaluating it. The expression contains 't', 'f', '!', '&', '|', parentheses, and commas.",

    difficulty: "Hard",

    amazonFrequency: "Medium",

    companies: [
        "Amazon",
        "Google",
        "Microsoft"
    ],

    pattern: "Stack",

    time: "35-45 min",

    acceptance: "61%",

    example1: {
        input: 'expression = "&(|(f))"',
        output: "false",
        explanation:
            "The OR operation evaluates to false, and applying AND results in false."
    },

    example2: {
        input: 'expression = "|(f,f,f,t)"',
        output: "true",
        explanation:
            "Since one operand is true, the OR expression evaluates to true."
    },

    constraints:
        "1 <= expression.length <= 2 × 10⁴\nexpression consists of 't', 'f', '!', '&', '|', '(', ')', and ','.",

    timeComplexity: "O(n)",

    spaceComplexity: "O(n)",

    hints: [
        "Process characters one by one.",
        "Ignore commas.",
        "Push operators and operands onto the stack.",
        "Evaluate the innermost expression when ')' is encountered."
    ],

    bruteForce: {
        title: "Recursive Parsing",
        description:
            "Recursively evaluate the innermost Boolean expressions until the complete expression is resolved."
    },

    optimalApproach: {
        title: "Stack-Based Parsing",
        description:
            "Traverse the expression once while maintaining a stack of operators and operands. Whenever a closing parenthesis is found, evaluate the current sub-expression and push its result back onto the stack."
    }
},

];