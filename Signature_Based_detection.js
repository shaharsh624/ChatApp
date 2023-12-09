
const attackSignatures = [
    /union\s+all\s+select/i,
    /drop\s+table/i,
    /exec(\s|\+)+(s|x)p\w+/i,
    // Add more signatures for different attacks
  ];
  
  function detectAttack(inputData) {
    for (const signature of attackSignatures) {
      if (signature.test(inputData)) {
        return true; 
      }
    }
    return false; 
  }
  