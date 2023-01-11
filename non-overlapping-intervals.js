/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    if(!intervals.length) {
        return 0;
    }
    let size  = intervals.length;
    
    intervals.sort((a,b) => a[1]-b[1]);
    
    let prev = intervals[0][1], count_remove = 0;
    

};
