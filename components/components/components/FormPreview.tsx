import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormSchema } from "../types/SchemaTypes";

interface FormPreviewProps {
  schema: FormSchema;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="h-full p-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-lg font-bold mb-4">{schema.formTitle}</h2>
      <p className="mb-4">{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {schema.fields.map((field) => (
          <FormField key={field.id} field={field} register={register} errors={errors} />
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
