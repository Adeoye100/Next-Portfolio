"use client";

/**
 * Renders a reusable input control.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the input control.
 * @param {string} [props.type="text"] - The input type (e.g., "text", "email", "password").
 * @param {string} [props.placeholder] - Optional placeholder text for the input.
 * @param {string} props.value - The current value of the input.
 * @param {Function} props.onChange - The change event handler for the input.
 * @param {string} [props.className] - Additional CSS classes for the input.
 */
export default function FormControlInput({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}
