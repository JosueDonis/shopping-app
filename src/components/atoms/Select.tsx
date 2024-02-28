export type SelectProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
  register?: any;
  label?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Record<string, string>[];
};
export const Select: React.FC<SelectProps> = ({
  id,
  name,
  className: className,
  required,
  register,
  label,
  error,
  value,
  onChange,
  children,
  options,
}) => {
  return (
    <label className={`form-control w-full ${className}`}>
      <div className="label">
        {label && <span className="label-text">{label}</span>}
      </div>
      {!register ? (
        <select
          id={id}
          name={name}
          className="select select-bordered"
          required={required}
          value={value}
          onChange={onChange}
        >
          {children}
          <option value={""} disabled>
            Selecione una opción
          </option>
          {options?.map((option: Record<string, string>) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <select
          id={id}
          className="select select-bordered"
          value={value}
          {...register(name as string)}
          defaultValue=""
        >
          {children}
          <option value="" disabled>
            Selecione una opción
          </option>
          {options?.map((option: Record<string, string>) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      <div className="label">
        {error && <span className="label-text-alt text-red-600">{error}</span>}
      </div>
    </label>
  );
};
