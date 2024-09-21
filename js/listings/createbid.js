import { headers } from "../api/auth/fetchtoken.js";
import { API_URL } from "../api/variabels.js";


export async function placeBid(listingId, bidAmount) {
    try {
     
      const response = await fetch(`${API_URL}/auction/listings/${listingId}/bids`, {
        method: 'POST',
        headers: headers(), 
        body: JSON.stringify({
          amount: bidAmount 
        })
      });
      
     
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
  
   
      console.log('Bid placed:', result);
      
      return result;  
    } catch (error) {
    
      console.error('Error placing bid:', error);
    }
  }

