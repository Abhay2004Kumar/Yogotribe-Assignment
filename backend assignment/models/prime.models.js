class PrimeModel {
    static isPrime(num) {
      if (!Number.isInteger(num)) {
        throw new Error('Input must be an integer');
      }
      
      if (num > Number.MAX_SAFE_INTEGER) {
        throw new Error('Number exceeds maximum safe integer');
      }
  
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
  
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    }
  }
  
  export default PrimeModel;