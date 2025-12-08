"use client";

export default function FormControls({ controls, formData, setFormData }) {
  return controls.map((controlItem) => (
    <div key={controlItem.name} className="mb-4">
      <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2">
        {controlItem.label}
      </label>
      <input
        placeholder={controlItem.placeholder}
        type={controlItem.type}
        name={controlItem.name}
        id={controlItem.name}
        value={formData[controlItem.name]}
        onChange={(e) => {
          setFormData({
            ...formData,
            [controlItem.name]: e.target.value,
          });
        }}
        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-black"
      />
    </div>
  ));
}
