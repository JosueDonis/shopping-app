import { formatMoney } from "@/helpers";
import { Link } from "react-router-dom";

export type ProductCardProps = {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  loading?: boolean;
};
export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  loading,
  image,
}) => {
  return loading ? (
    <div
      key={id}
      className="card max-w-full sm:max-w-[300px] bg-base-100 shadow border border-base-300"
    >
      <figure>
        <div className="skeleton w-full h-52 rounded-none" />
      </figure>
      <div className="card-body">
        <div className="skeleton w-3/4 h-6 mb-4 rounded-none" />
        <div className="skeleton w-1/2 h-6 rounded-none" />
        <div className="card-actions justify-end items-center mt-6 rounded-none">
          <div className="skeleton w-20 h-8 rounded-none" />
        </div>
      </div>
    </div>
  ) : (
    <div
      key={id}
      className="card bg-base-100 shadow border border-base-300 rounded-xl"
    >
      <figure>
        <img
          className="w-full h-52 aspect-auto object-cover rounded-t-xl"
          src={image}
          alt={name}
          onError={
            ((e) => {
              if (e.currentTarget) {
                e.currentTarget.src = "../assets/img/not-found.png";
              }
            })
          }
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-base font-bold">{formatMoney(price)}</p>
        <div className="card-actions justify-end items-center mt-6">
          <Link className="btn btn-ghost btn-outline" to={`/products/${id}`}>
            Ver detalle →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
