/**
 * A reusable button component that replicates the "lift and glow" hover animation.
 * It accepts all standard button props like `onClick`, `type`, `disabled`, etc.
 * It also includes a loading state with a spinner.
 *
 * @param {{ isLoading?: boolean, variant?: 'primary' | 'secondary' } & React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export default function AnimatedButton({
  children,
  className,
  isLoading = false,
  variant = 'primary',
  ...props
}) {
  return (
    <button
      // Disable the button if it's loading or if the disabled prop is passed.
      disabled={isLoading || props.disabled}
      className={`
        px-6 py-3 font-semibold rounded-lg shadow-md
        transform transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md
        hover:-translate-y-1 hover:scale-105 hover:shadow-xl
        ${
          variant === 'primary'
            ? 'text-white bg-blue-600 hover:bg-blue-700 hover:shadow-blue-600/30'
            : 'text-blue-600 bg-transparent border border-blue-600 hover:bg-blue-50 hover:shadow-blue-600/10'
        }
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className={`animate-spin h-5 w-5 ${
              variant === 'primary' ? 'text-white' : 'text-blue-600'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        children
      )}
    </button>
  );
}