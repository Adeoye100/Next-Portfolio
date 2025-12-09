"use client";

/**
 * Renders a reusable textarea control.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the textarea control.
 * @param {string} [props.placeholder] - Optional placeholder text for the textarea.
 * @param {number} [props.rows=5] - The number of visible text lines for the textarea.
 * @param {string} props.value - The current value of the textarea.
 * @param {Function} props.onChange - The change event handler for the textarea.
 * @param {string} [props.className] - Additional CSS classes for the textarea.
 */
export default function FormControlTextarea({
  name,
  placeholder,
  rows = 5,
  value,
  onChange,
  className,
}) {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}
