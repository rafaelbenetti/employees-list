import express, { Request, Response } from 'express';
import { EmployeeController } from './employee.controller';

const router = express.Router();
const employeeController = new EmployeeController();

router.get('/', async (_, res: Response): Promise<void> => {
  employeeController.get().then(data => {
    return res.json(data);
  });
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
  employeeController.create(req.body).then(data => {
    return res.status(201).json(data);
  });
});

router.put('/', async (req: Request, res: Response): Promise<void> => {
  employeeController.update(req.body).then(data => {
    return res.json(data);
  });
});

router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  employeeController.delete(req.params.id).then(data => {
    res.status(204).json(data);
  });
});

export default router;