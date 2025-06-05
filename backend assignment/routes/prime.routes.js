import { Router } from 'express';
import PrimeModel from '../models/prime.models.js';

const router = Router();

router.get('/is-prime/:number', (req, res) => {
  try {
    const number = parseInt(req.params.number);
    
    if (isNaN(number)) {
      return res.status(400).json({ 
        error: 'Invalid input. Provide a valid number.' 
      });
    }

    const result = PrimeModel.isPrime(number);
    
    res.json({
      number,
      isPrime: result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    res.status(400).json({
      error: error.message,
      details: {
        maxSupported: Number.MAX_SAFE_INTEGER.toString(),
        example: '/is-prime/37'
      }
    });
  }
});

export default router;