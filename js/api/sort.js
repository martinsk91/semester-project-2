export function newestFirst(listings){
return listings.sort((a,b ) => {
    const dateA = new Date(a.endsAt);
    const dateB = new Date(b.endsAt);
    return dateB - dateA
});
   
  

    

}



