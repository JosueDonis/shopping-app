import { useForm } from "react-hook-form";


export type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  value?: string | number;
  errors?: Record<string, any>;
  min?: number;
  max?: number;
  required?: boolean;
  register?: ReturnType<typeof useForm>['register'];
  maxLenght?: number;
  class?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  errors,
  min,
  max,
  required,
  register,
  maxLenght,
  class: className,
}) => {
  return (
    <label className={`form-control w-full ${className}`}>
      {label && <span className="label">{label}</span>}
      {!register ? (
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
          onChange={onChange}
          name={name}
          value={value}
          min={min}
          max={max}
          required={required}
          maxLength={maxLenght}
        />
      ) : (
        <input
          {...register(name as string, {required})}
          className="input input-bordered w-full"
          type={type}
          placeholder={placeholder}
        />
      )}
            <div className="label">
              {errors?.[name as string] && <span className="label-text-alt text-red-600">{errors[name as string]?.message}</span>}
            </div>
    </label>
  );
};

export default Input;
