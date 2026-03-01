import Card from "../components/Card";

export default function Judgements() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI Judgements</h1>

      <Card>
        <div className="space-y-3">
          <p><strong>Accuracy:</strong> 85%</p>
          <p><strong>Relevance:</strong> 78%</p>
          <p><strong>Coherence:</strong> 91%</p>
          <p><strong>Completeness:</strong> 80%</p>
        </div>
      </Card>
    </div>
  );
}