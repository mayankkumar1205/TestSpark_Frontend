import { useState } from "react";
import BaseCard from "../components/Cards/BaseCard";

export default function Settings() {
  const [openaiKey, setOpenaiKey] = useState("");
  const [judgeModel, setJudgeModel] = useState("gpt-4");
  const [temperature, setTemperature] = useState(0.7);

  const saveSettings = () => {
    localStorage.setItem("openaiKey", openaiKey);
    localStorage.setItem("judgeModel", judgeModel);
    localStorage.setItem("temperature", temperature);
    alert("Settings Saved");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      <BaseCard>
        <div className="space-y-4">

          <div>
            <label className="block text-sm mb-1">OpenAI API Key</label>
            <input
              type="password"
              value={openaiKey}
              onChange={(e) => setOpenaiKey(e.target.value)}
              className="w-full p-2 bg-slate-800 rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Default Judge Model</label>
            <select
              value={judgeModel}
              onChange={(e) => setJudgeModel(e.target.value)}
              className="w-full p-2 bg-slate-800 rounded"
            >
              <option value="gpt-4">GPT-4</option>
              <option value="llama3">LLaMA 3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">
              Default Temperature ({temperature})
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="w-full"
            />
          </div>

          <button
            onClick={saveSettings}
            className="bg-accent hover:bg-blue-600 py-2 px-4 rounded-lg"
          >
            Save Settings
          </button>
        </div>
      </BaseCard>
    </div>
  );
}