import { View, TextInput, Button, ActivityIndicator, Text } from 'react-native';
import { useState } from 'react';
import { useGeneratePlan } from '@/modules/planner/hooks/useGeneratePlan';
import { usePlannerStore } from '@/modules/planner/store/usePlannerStore';
import { PlanCard } from '@/modules/planner/components/PlanCard';

export default function PlannerScreen() {
  const [topic, setTopic] = useState('');
  const { handleGenerate, loading, error } = useGeneratePlan();
  const plan = usePlannerStore((state) => state.plan);

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Digite o tema..."
        value={topic}
        onChangeText={setTopic}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 12,
        }}
      />

      <Button
        title="Gerar Plano"
        onPress={() => handleGenerate(topic)}
      />

      {loading && <ActivityIndicator />}
      {error && <Text>{error}</Text>}
      {plan && <PlanCard plan={plan} />}
    </View>
  );
}
