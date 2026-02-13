import { api } from '@/services/api';
import { PlanRequest, PlanResponse } from '../types';

export const generatePlan = async (
  data: PlanRequest
): Promise<PlanResponse> => {
  const response = await api.post('/generate-plan', data);
  return response.data;
};
