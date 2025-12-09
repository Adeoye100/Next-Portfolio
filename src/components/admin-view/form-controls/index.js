"use client";

import FormControlInput from "./form-control-input";
import FormControlTextarea from "./form-control-textarea";

/**
 * Renders a set of form controls based on the provided configuration.
 *
 * @param {Object[]} controls - Array of control configuration objects.
 * @param {string} controls[].name - The name of the form control.
 * @param {string} controls[].label - The label for the form control.
 * @param {string} [controls[].type] - The input type (e.g., "text", "email"). Not used for textarea.
 * @param {string} [controls[].component] - The component type ("input" or "textarea"). Defaults to "input".
 * @param {string} [controls[].placeholder] - Optional placeholder text for the input.
 * @param {Object} formData - The current form data object.
 * @param {Function} setFormData - Function to update the form data.
 *
 * @example
 * <FormControls
 *   controls={[
 *     { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
 *     { name: "password", label: "Password", type: "password" },
 *     { name: "message", label: "Message", component: "textarea", placeholder: "Enter your message" }
 *   ]}
 *   formData={{ email: "", password: "" }}
 *   setFormData={setFormData}
 * />
 */
export default function FormControls({ controls, formData, setFormData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {controls.map((controlItem) => (
        <div key={controlItem.name}>
          <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
            {controlItem.label}
          </label>
          {controlItem.component === "textarea" ? ( // Conditional rendering for textarea
            <FormControlTextarea
              name={controlItem.name}
              placeholder={controlItem.placeholder}
              value={formData[controlItem.name] ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, [controlItem.name]: e.target.value })
              }
              className="shadow border rounded w-full py-2 px-3 text-black tracking-wide focus:outline-none focus:shadow-outline bg-white dark:bg-white dark:text-black"
            />
          ) : (
            // Default to input
            <FormControlInput
              name={controlItem.name}
              type={controlItem.type}
              placeholder={controlItem.placeholder}
              value={formData[controlItem.name] ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, [controlItem.name]: e.target.value })
              }
              className="shadow border rounded w-full py-2 px-3 text-black tracking-wide focus:outline-none focus:shadow-outline bg-white dark:bg-white dark:text-black"
            />
          )}
        </div>
      ))}
    </div>
  );
}
