class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        nums = deque([1, 2, 3, 4, 5, 6, 7, 8, 9])

        for _ in range(n - 1):
            for each in range(len(nums)):
                num = nums.popleft()

                plus_k = (num % 10) + k
                less_k = (num % 10) - k

                if plus_k < 10:
                    nums.append(10 * num + plus_k)
                if less_k >= 0 and k != 0:
                    nums.append(10 * num + less_k)

        return nums
    