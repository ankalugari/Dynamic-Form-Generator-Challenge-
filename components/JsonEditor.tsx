import React, { useState } from "react";
import { validateJSON } from "../utils/validateJSON";

interface JsonEditorProps {
  json: string;
  onChange: (value: string) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ json, onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    onChange(value);
    const validation = validateJSON(value);
    setError(validation.valid ? null : validation.error || "Invalid JSON");
  };

  return (
    <div className="h-full p-4 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
      <textarea
        value={json}
        onChange={(e) => handleInputChange(e.target.value)}
        className="w-full h-[400px] p-2 border rounded dark:text-white dark:bg-gray-700"
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default JsonEditor;
