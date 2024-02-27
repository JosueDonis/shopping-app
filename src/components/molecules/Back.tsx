import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export type BackProps = {
  url?: string;
  title?: string;
};
export const Back: React.FC<BackProps> = ({ url = "/", title }) => {
  return (
    <div className="flex items-center gap-4">
      <Link className="btn btn-ghost btn-circle" to={url}>
        <ArrowLeft />
      </Link>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default Back;
