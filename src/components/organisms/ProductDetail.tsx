import { formatMoney } from "@/helpers";
import Input from "../atoms/Input";
import { ProductType } from "@/types/product";
import useCart from "@/hooks/useCart";

type ProductDetailProps = {
  product?: ProductType;
  error?: boolean;
  loading?: boolean;
};

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  loading,
  error,
}) => {
  const { register, handleSubmit, handleAddCart, errors } = useCart({
    product: product,
  });

  return loading ? (
    <div className="card lg:card-side w-full bg-base-100 shadow border border-base-300">
      <figure className="min-w-[300px] max-w-[400px]">
        <div className="skeleton w-full h-[400px] aspect-auto rounded-none" />
      </figure>
      <div className="card-body">
        <div className="skeleton w-3/4 h-6 mb-4 rounded-none" />
        <div className="skeleton w-1/2 h-6 rounded-none" />
        <div className="skeleton w-full h-24 rounded-none" />
        <div className="card-actions justify-end items-center mt-6 rounded-none">
          <div className="skeleton w-20 h-8 rounded-none" />
        </div>
      </div>
    </div>
  ) : error ? (
    <div className="card lg:card-side w-full bg-base-100 shadow border border-base-300 rounded-xl">
      <figure>
        <img
          className="md:w-[300px] w-full h-full aspect-auto object-cover"
          src="../assets/img/not-found.png"
          alt="Not Found"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">Producto no encontrado</h2>
        <p className="text-sm text-accent-content/70">
          No se ha encontrado el producto que buscas.
        </p>
      </div>
    </div>
  ) : (
    <div className="card lg:card-side  w-full bg-base-100 shadow border border-base-300 rounded-xl">
      <figure className="max-w-[400px] h-full">
        <img
          className="w-full h-full object-cover aspect-square"
          src={product?.image || "https://via.placeholder.com/300"}
          alt="Shoes"
          onError={(e) => {
            if (e.currentTarget) {
              e.currentTarget.src = "../assets/img/not-found.png";
            }
          }}
        />
      </figure>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleAddCart)}>
          <h2 className="card-title font-bold">{product?.name}</h2>
          <p className="text-base font-bold">{formatMoney(product?.price)}</p>
          <Input
            name="amount"
            label="Cantidad"
            type="number"
            register={register}
            error={errors?.amount?.message}
            class="max-w-[200px]"
          />
          <p className="text-sm text-accent-content/70">
            {product?.description}
          </p>
          <div className="card-actions justify-end items-center mt-6">
            <button type="submit" className="btn btn-ghost btn-outline">
              Agregar al carrito
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
