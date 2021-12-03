/* function superbowlWin(record) {
    record.find(obj => {
        if(obj.result === "W"){
            return obj.year
        } else if (obj.result === "N/A"){
            return obj.year
        }
    })
} */

/*function superbowlWin(record) {
    const win = record.find(obj => {
         if(obj.result === "W"){
             return obj.year
         }  
     })
    return win;
 };*/


 /*function superbowlWin(record) {
   const win = record.find(obj => {
        if(obj.result === "W"){
            return obj
        } else {
            return undefined
        }
    })
   return win.year;
}; */

function superbowlWin(record) {
    const win = record.find(obj => obj.result === "W")
    return (win ? win.year : undefined)
 }; 



/* function winningYear(obj) {
    if (obj.result === 'W'){
        return obj.year
    } 
} */

