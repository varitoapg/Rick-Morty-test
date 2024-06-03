type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

export const Button = ({
  children,
  onClick,
  isDisabled,
  className,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel ?? "button"}
      className={`px-4 py-2 mx-0 rounded ${
        isDisabled
          ? "bg-gray-600 cursor-not-allowed opacity-50"
          : "bg-blue-600 hover:bg-blue-700"
      } ${className}`}
    >
      {children}
    </button>
  );
};
