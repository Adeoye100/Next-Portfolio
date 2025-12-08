"use client";

export default function AdminContactView({ data }) {
  return (
    <div className="flex flex-col gap-5">
      {data && data.length
        ? data.map((item, index) => (
            <div
              key={index}
              className="p-5 border dark:text-white dark:border-gray-700"
            >
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </div>
          ))
        : null}
    </div>
  );
}
