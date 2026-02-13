import { useState } from 'react';
import { generatePlan } from '../services/plannerService';
import { usePlannerStore } from '../store/usePlannerStore';

export const useGeneratePlan = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setPlan = usePlannerStore((state) => state.setPlan);

  const handleGenerate = async (topic: string) => {
    try {
      setLoading(true);
      setError(null);

      const result = await generatePlan({ topic });
      setPlan(result);
    } catch (err) {
      setError('Erro ao gerar plano');
    } finally {
      setLoading(false);
    }
  };

  return { handleGenerate, loading, error };
};
