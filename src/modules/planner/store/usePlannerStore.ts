import { create } from 'zustand';
import { PlanResponse } from '../types';

interface PlannerState {
  plan: PlanResponse | null;
  setPlan: (plan: PlanResponse) => void;
  clearPlan: () => void;
}

export const usePlannerStore = create<PlannerState>((set) => ({
  plan: null,
  setPlan: (plan) => set({ plan }),
  clearPlan: () => set({ plan: null }),
}));
