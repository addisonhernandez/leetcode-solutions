import "github.com/emirpasic/gods/maps/treemap"


type MyCalendarThree struct {
    // Bookings map[int]int
    Bookings *treemap.Map
}


func Constructor() MyCalendarThree {
    // return MyCalendarThree{make(map[int]int)}
    return MyCalendarThree{treemap.NewWithIntComparator()}
}


func (this *MyCalendarThree) Book(start int, end int) int {
    count, ok := this.Bookings.Get(start)
    if !ok {
        count = 0
    }
    this.Bookings.Put(start, count.(int) + 1)

    count, ok = this.Bookings.Get(end)
    if !ok {
        count = 0
    }
    this.Bookings.Put(end, count.(int) - 1)
    
    max, sweepcount := 0, 0
    for _, count := range this.Bookings.Values() {
        sweepcount += count.(int)
        if sweepcount > max {
            max = sweepcount
        }
    }
    return max
}


/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Book(start,end);
 */
