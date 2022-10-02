func insert(intervals [][]int, newInterval []int) [][]int {
  head := [][]int{}
  tail := [][]int{}
  
  start := newInterval[0]
  end := newInterval[1]
  
  for _, i := range intervals {
    if start > i[1] {
      head = append(head, i)
    } else if end < i[0] {
      tail = append(tail, i)
    } else {
      if i[0] < start {
        start = i[0]
      }
      if i[1] > end {
        end = i[1]
      }
    }
  }
  
  return append(append(head, []int{start, end}), tail...)
}