import { View, Text } from 'react-native';
import { PlanResponse } from '../types';

interface Props {
  plan: PlanResponse;
}

export const PlanCard = ({ plan }: Props) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        {plan.topic}
      </Text>

      <Text>Duração estimada: {plan.estimatedTime}</Text>

      {plan.steps.map((step, index) => (
        <View key={index} style={{ marginTop: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>
            {step.title}
          </Text>
          <Text>{step.description}</Text>
        </View>
      ))}
    </View>
  );
};
