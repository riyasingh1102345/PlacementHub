const arrayQuestions = [
  {
    id: "two-sum",
    title: "Two Sum",
    heroDescription: "Master one of the most frequently asked interview questions and understand the HashMap pattern in depth.",
    problemStatement: "Given an integer array nums and an integer target, return the indices of the two numbers such that they add up to the target.",
    difficulty: "Easy",
    tags: [
        "Array",
        "Two Sum"
    ],
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
}
];