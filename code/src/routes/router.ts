import express from 'express';

const router = express.Router();

router.get('/echo', (req, res) => {
  void req;
  res.json({
    data: 'Hello, World!',
  });
});

export default router;
