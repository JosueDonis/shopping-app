export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  class?: string;
  form?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  loading,
  class: className,
  form,
  type = "button",
  disabled,
}) => {
  return (
    <button disabled={disabled || loading} form={form} type={type} className={`btn ${className}`} onClick={onClick}>
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};


export default Button;