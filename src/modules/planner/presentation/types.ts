export interface PlanRequest {
  topic: string;
}

export interface PlanStep {
  title: string;
  description: string;
}

export interface PlanResponse {
  topic: string;
  steps: PlanStep[];
  estimatedTime: string;
}
