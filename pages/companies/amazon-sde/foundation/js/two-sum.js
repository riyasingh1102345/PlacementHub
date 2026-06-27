export const arraysQuestions = [

{
    id:1,

    title:"Two Sum",

    slug:"two-sum",

    difficulty:"Easy",

    topic:"Arrays & Strings",

    pattern:"HashMap",

    companies:[
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Meta"
    ],

    statement:
    "Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input has exactly one solution, and you may not use the same element twice. You can return the answer in any order.",

    examples:[

        {

            input:"nums = [2,7,11,15], target = 9",

            output:"[0,1]",

            explanation:
            "nums[0] + nums[1] = 2 + 7 = 9, therefore return [0,1]."

        },

        {

            input:"nums = [3,2,4], target = 6",

            output:"[1,2]",

            explanation:
            "nums[1] + nums[2] = 2 + 4 = 6."

        }

    ],

    constraints:[

        "2 <= nums.length <= 10⁴",

        "-10⁹ <= nums[i] <= 10⁹",

        "-10⁹ <= target <= 10⁹",

        "Exactly one valid solution exists."

    ],

    thinkFirst:[
        "What is the most straightforward solution you can think of?",

        "Can you avoid checking every pair of elements?",

        "What information from previously visited elements could help?"
    ],

    hints:[

        "Brute force works by checking every possible pair.",

        "Instead of searching the remaining array repeatedly, store previously seen values.",

        "HashMap allows constant time lookup for complements."

    ],

    bruteForce:{

        title:"Nested Loop",

        explanation:
        "Check every pair of elements. If their sum equals the target, return their indices.",

        steps:[

            "Start from the first element.",

            "Compare it with every remaining element.",

            "If the sum equals the target, return both indices."

        ],

        timeComplexity:"O(n²)",

        spaceComplexity:"O(1)"
    },

    optimalApproach:{

        title:"HashMap",

        explanation:
        "Traverse the array only once. For each element calculate the complement (target - current element). If the complement already exists inside the HashMap, you have found the answer. Otherwise store the current element with its index.",

        whyItWorks:
        "HashMap provides O(1) average lookup time, eliminating the need for nested loops."

    },

    dryRun:{

        input:"nums = [2,7,11,15], target = 9",

        steps:[

            "i = 0 → value = 2 → complement = 7 → HashMap is empty → store (2,0)",

            "i = 1 → value = 7 → complement = 2 → HashMap contains 2 → answer found.",

            "Return [0,1]."

        ]

    },

    complexity:{

        time:"O(n)",

        space:"O(n)"
    },

    solution:

`public int[] twoSum(int[] nums, int target) {

    HashMap<Integer, Integer> map = new HashMap<>();

    for(int i = 0; i < nums.length; i++){

        int complement = target - nums[i];

        if(map.containsKey(complement)){

            return new int[]{
                map.get(complement),
                i
            };

        }

        map.put(nums[i], i);

    }

    return new int[]{};

}`,

    commonMistakes:[

        "Using nested loops even after discovering the HashMap solution.",

        "Returning values instead of indices.",

        "Adding the current element before checking for its complement.",

        "Assuming the array is sorted."

    ],

    interviewTips:[

        "Always explain the brute-force solution first.",

        "Mention why HashMap reduces complexity from O(n²) to O(n).",

        "Discuss edge cases such as duplicate values."

    ],

    followUp:

    "Can you solve this problem if the array is already sorted?",

    relatedQuestions:[

        "Contains Duplicate",

        "Two Sum II",

        "3 Sum",

        "4 Sum"

    ]

}

];

const checkBtn = document.getElementById("checkBtn");
const solutionBtn = document.getElementById("solutionBtn");

const feedback = document.getElementById("feedback");
const solutionSection = document.getElementById("solutionSection");

// Initial State
solutionSection.style.display = "none";
feedback.style.display = "none";

// Run Code
checkBtn.addEventListener("click", () => {

    feedback.style.display = "block";

    feedback.className = "feedback-box feedback-success";

    feedback.innerHTML =
    "✅ Code execution feature will be available soon. Compare your solution with the optimal solution below.";

});

// View / Hide Solution
solutionBtn.addEventListener("click", () => {

    if(solutionSection.style.display === "none"){

        solutionSection.style.display = "block";
        solutionBtn.textContent = "Hide Solution";

    }
    else{

        solutionSection.style.display = "none";
        solutionBtn.textContent = "View Solution";

    }

});