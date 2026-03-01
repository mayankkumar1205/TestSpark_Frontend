import { useState } from "react";
import BaseCard from "../components/Cards/BaseCard";
import { ChevronDown } from "lucide-react";

export default function Generator() {
  const [variant, setVariant] = useState("ambiguity");
  const [count, setCount] = useState(2);
  const [generated, setGenerated] = useState([]);

  const generateCases = () => {
    const newCases = Array.from({ length: count }).map((_, i) => ({
      id: Date.now() + i,
      title: `${variant.toUpperCase()} Variant ${i + 1}`,
      content: `Generated ${variant} prompt variation...`,
      parent: "Explain quantum entanglement"
    }));

    setGenerated(newCases);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* LEFT PANEL */}
      <BaseCard title="Generate Test Cases">
        <div className="space-y-4">

          <div>
            <label className="block text-sm mb-1">Parent Prompt</label>
            <select className="w-full p-2 bg-slate-800 rounded">
              <option>Explain quantum entanglement</option>
              <option>Define blockchain</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Variant Type</label>
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              className="w-full p-2 bg-slate-800 rounded"
            >
              <option value="ambiguity">Ambiguity</option>
              <option value="contradiction">Contradiction</option>
              <option value="negation">Negation</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Per Type Count</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full p-2 bg-slate-800 rounded"
            />
          </div>

          <button
            onClick={generateCases}
            className="w-full bg-accent hover:bg-blue-600 py-2 rounded-lg"
          >
            Generate
          </button>
        </div>
      </BaseCard>

      {/* RIGHT PANEL */}
      <BaseCard title="Generated Variants">
        <div className="space-y-4">
          {generated.map((g) => (
            <div
              key={g.id}
              className="bg-slate-800 p-4 rounded-lg"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{g.title}</h3>
                <ChevronDown size={16} />
              </div>

              <p className="text-sm text-slate-400 mt-2">
                Parent: {g.parent}
              </p>

              <div className="mt-2 text-sm bg-slate-900 p-2 rounded font-mono">
                {g.content}
              </div>
            </div>
          ))}
        </div>
      </BaseCard>
    </div>
  );
}