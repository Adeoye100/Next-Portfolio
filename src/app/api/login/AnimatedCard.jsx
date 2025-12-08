/**
 * A reusable card component that replicates the MongoDB Atlas
 * "lift and glow" hover animation.
 *
 * @param {{title: string, description: string, children: React.ReactNode}} props
 */
export default function AnimatedCard({ title, description, children }) {
  return (
    <div
      className="
        group
        cursor-pointer
        rounded-xl border bg-white p-6 shadow-sm
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/10
      "
    >
      <div className="mb-4">{children}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}