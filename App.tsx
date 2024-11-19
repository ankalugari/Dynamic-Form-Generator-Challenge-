import React, { useState } from "react";
import JsonEditor from "./components/JsonEditor";
import FormPreview from "./components/FormPreview";
import { FormSchema } from "./types/SchemaTypes";

const initialSchema: FormSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name",
    },
    // Add more fields here
  ],
};

const App: React.FC = () => {
  const [json, setJson] = useState(JSON.stringify(initialSchema, null, 2));
  const [schema, setSchema] = useState<FormSchema>(initialSchema);

  const handleJsonChange = (value: string) => {
    setJson(value);
    try {
      const parsed = JSON.parse(value);
      setSchema(parsed);
    } catch {
      // Handle invalid JSON gracefully
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
      <JsonEditor json={json} onChange={handleJsonChange} />
      <FormPreview schema={schema} />
    </div>
  );
};

export default App;
