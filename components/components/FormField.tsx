import React from "react";
import { FormField } from "../types/SchemaTypes";

interface FormFieldProps {
  field: FormField;
  register: any;
  errors: any;
}

const FormField: React.FC<FormFieldProps> = ({ field, register, errors }) => {
  const { id, type, label, placeholder, options, validation } = field;

  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>
      {type === "select" && (
        <select
          {...register(id, { required: field.required })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select...</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {type === "radio" &&
        options?.map((option) => (
          <label key={option.value} className="block">
            <input
              {...register(id, { required: field.required })}
              type="radio"
              value={option.value}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      {type !== "select" && type !== "radio" && (
        <input
          {...register(id, {
            required: field.required,
            pattern: validation?.pattern
              ? { value: new RegExp(validation.pattern), message: validation.message }
              : undefined,
          })}
          type={type}
          placeholder={placeholder}
          className="w-full p-2 border rounded"
        />
      )}
      {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id]?.message || "Required"}</p>}
    </div>
  );
};

export default FormField;
