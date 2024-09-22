export function formatTime(isoDateString) {
    const now = new Date();
    const targetDate = new Date(isoDateString);

    const diffInMilliseconds = targetDate - now;

   
    if (diffInMilliseconds <= 0) {
        return "ended";
    }

    

    
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);



    if(days >= 5){
        return `${days}d`
    }

    else if(days < 1){

        return `${hours}h `
     }

     else if(hours < 1){
        return `${minutes}m`
     }

   else if(minutes < 1){
        return `${seconds}s`
    }

    
   
    return `${days}d ${hours}h`;
}

