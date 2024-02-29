export type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  value?: string | number;
  error?: string;
  min?: number;
  max?: number;
  required?: boolean;
  register?: any;
  maxLenght?: number;
  class?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange: handleChange,
  error,
  min,
  max,
  required,
  register,
  maxLenght,
  class: className,
  onBlur,
  onKeyUp,
}) => {
  const { onChange } = register?.(name as string, { required }) ?? {};
  return (
    <label className={`form-control w-full ${className}`}>
      {label && <span className="label">{label}</span>}
      {!register ? (
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
          onChange={handleChange}
          name={name}
          value={value}
          min={min}
          max={max}
          required={required}
          maxLength={maxLenght}
        />
      ) : (
        <input
          {...register(name as string, { required })}
          className="input input-bordered w-full"
          type={type}
          placeholder={placeholder}
          onChange={async(e) => {
            handleChange?.(e);
            onChange?.(e);
          }}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
        />
      )}
      <div className="label">
        {error && <span className="label-text-alt text-red-600">{error}</span>}
      </div>
    </label>
  );
};

export default Input;
