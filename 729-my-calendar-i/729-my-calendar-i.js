var MyCalendar = function() {
  this.appointments = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  const newAppt = { start, end };
  
  for (let i = 0; i < this.appointments.length; i++) {
    const { start: apptStart, end: apptEnd } = this.appointments[i];
    
    if (start < apptStart) {
      if (end > apptStart) {
        return false;
      } // else
      this.appointments.splice(i, 0, newAppt);
      return true;
    } // else
    if (start < apptEnd) {
      return false;
    }
  }
  this.appointments.push(newAppt);
  return true;
};