import { generatePlan } from '../services/plannerService';
import { api } from '@/services/api';

jest.mock('@/services/api');

describe('generatePlan', () => {
  it('deve retornar plano corretamente', async () => {
    const mockResponse = {
      topic: 'React',
      steps: [],
      estimatedTime: '2 semanas',
    };

    (api.post as jest.Mock).mockResolvedValue({
      data: mockResponse,
    });

    const result = await generatePlan({ topic: 'React' });

    expect(result).toEqual(mockResponse);
  });
});
