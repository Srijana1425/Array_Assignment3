# Array_Assignment3
**Question 1**
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.<br>
**Example 1:**<br>
Input: nums = [-1,2,1,-4], target = 1<br>
Output: 2<br>
**Explanation:** The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).<br><br>

*Answer*<br>
**code** [Link]()

*********************************************************************************************************************
**Question 2**
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:<br>
           ● 0 <= a, b, c, d < n<br>
           ● a, b, c, and d are distinct.<br>
           ● nums[a] + nums[b] + nums[c] + nums[d] == target<br>

You may return the answer in any order.<br>
**Example 1:**<br>
Input: nums = [1,0,-1,0,-2,2], target = 0<br>
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]<br><br>
*Answer*<br>
**code** [Link]()

*********************************************************************************************************************
**Question 3**
A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].<br>

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).<br>

● For example, the next permutation of arr = [1,2,3] is [1,3,2].<br>
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].<br>
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.<br>

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.<br>

**Example 1:**<br>
Input: nums = [1,2,3]<br>
Output: [1,3,2]<br><br>
*Answer*<br>
**code** [Link]()

*********************************************************************************************************************
**Question 4**
Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.<br>

**Example 1:**<br>
Input: nums = [1,3,5,6], target = 5<br>
Output: 2<br><br>
*Answer*<br>
**code** [Link]()

*********************************************************************************************************************
**Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.<br>

**Example 1:**<br>
Input: digits = [1,2,3]<br>
Output: [1,2,4]<br>

**Explanation:** The array represents the integer 123.<br>
Incrementing by one gives 123 + 1 = 124.<br>
Thus, the result should be [1,2,4].<br><br>

*Answer*<br>
**code** [Link]()

*********************************************************************************************************************
**Question 6**
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.<br>

**Example 1:**<br>
Input: nums = [2,2,1]<br>
Output: 1<br><br>
*Answer*<br>
**code** [Link]()

*********************************************************************************************************************
**Question 7**
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.<br>

**Example 1:**<br>
Input: nums = [0,1,3,50,75], lower = 0, upper = 99<br>
Output: [[2,2],[4,49],[51,74],[76,99]]<br>

**Explanation:** The ranges are:<br>
[2,2]<br>
[4,49]<br>
[51,74]<br>
[76,99]<br><br>
*Answer*<br>
**code** [Link]()

*********************************************************************************************************************
**Question 8**
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.<br>
**Example 1:**<br>
Input: intervals = [[0,30],[5,10],[15,20]]<br>
Output: false<br><br>
*Answer*<br>
**code** [Link]()

