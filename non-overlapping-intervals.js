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
    
    
};
