import { Router } from 'express';
import { RequestType } from '../models/RequestType.js';

const router = Router();

// GET /api/request-types (actifs)
router.get('/', async (_req, res) => {
    const items = await RequestType.find({ isActive: true });
    res.json(items);
});

// GET /api/request-types/:id
router.get('/:id', async (req, res) => {
    const item = await RequestType.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
});

// POST /api/request-types
router.post('/', async (req, res) => {
    const created = await RequestType.create(req.body);
    res.status(201).json(created);
});

export default router;
