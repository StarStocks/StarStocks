// src/auth/utils.js
function calculateCurrentValue(ownedShares, currentPrice) {
    return (parseFloat(ownedShares) * parseFloat(currentPrice)).toFixed(2);
  }
  
  export { calculateCurrentValue };

