import { Back } from "@/components/molecules";
import { ProductDetail } from "@/components/organisms";
import { useProducts } from "@/hooks/useProducts";

export const Product = () => {
  const { product, loading, error } = useProducts();
  return (
    <div className="flex flex-col gap-10">
      <Back url="/" title="Detalle del producto" />
      <ProductDetail product={product} loading={loading} error={error} />
    </div>
  );
};

export default Product;
