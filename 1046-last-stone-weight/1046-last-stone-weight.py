from heapq import heapify, heappush, heappop


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        '''O(n^2) using bisect.insort'''
        # stones.sort()
        # while len(stones) > 1:
        #     *stones, x, y = stones
        #     bisect.insort(stones, y - x)
        # return stones[0]
        
        '''O(nlog(n)) using a hacky maxheap'''
        heap = [-s for s in stones]  # minheap of negatives is a maxheap
        heapify(heap)
        
        while len(heap) > 1:
            heappush(heap, heappop(heap) - heappop(heap))
        
        return -heap[0]