import { Search } from "lucide-react";

export type SearchInputProps = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  type = "search",
}) => {
  return (
    <label className="input input-bordered rounded-full flex items-center gap-2">
      <Search />
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default SearchInput;
