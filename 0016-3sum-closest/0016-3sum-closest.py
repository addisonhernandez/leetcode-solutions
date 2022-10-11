class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        
        # Fail early, if possible.
        three_sum = sum(nums[-3:])
        if three_sum < target:
            return three_sum
        
        three_sum = sum(nums[:3])
        if three_sum > target:
            return three_sum
        
        n = len(nums)
        diff = float('inf')
        
        for i in range(n - 2):
            j = i + 1
            k = n - 1
            
            while j < k:
                ijk_sum = nums[i] + nums[j] + nums[k]

                if abs(target - ijk_sum) < diff:
                    if ijk_sum == target:
                        return ijk_sum
                    diff = abs(target - ijk_sum)
                    three_sum = ijk_sum

                if ijk_sum < target:
                    j += 1
                elif ijk_sum > target:
                    k -= 1
                else:
                    print(f"uh, oh. Should have returned.")
        
        return three_sum
