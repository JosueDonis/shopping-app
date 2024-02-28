import { Button } from "@/components/atoms";
import Input from "@/components/atoms/Input";
import { Back } from "@/components/molecules";
import { CartList } from "@/components/organisms";
import { formatMoney } from "@/helpers";
import { joiMessages } from "@/helpers/joi";
import useCart from "@/hooks/useCart";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
  name: Joi.string().required().label("Nombre"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Correo electrónico"),
  address: Joi.string().required().label("Dirección"),
  phone: Joi.string().required().label("Teléfono"),
  products: Joi.array()
    .items(
      Joi.object().keys({
        id: Joi.string().label("id"),
        quantity: Joi.number().label("Cantidad").min(1),
        image: Joi.string().label("Imagen"),
        name: Joi.string().label("Nombre"),
        price: Joi.number().label("Precio"),
        description: Joi.string().label("Descripción"),
        productId: Joi.string().label("productId"),
      })
    )
    .required()
    .min(1)
    .label("Productos"),
}).messages(joiMessages);

export const Cart = () => {
  const {
    cart,
    getCartTotal,
    handleDeleteProduct,
    handleUpdateQuantity,
    handleCheckout,
    loading,
  } = useCart({});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: joiResolver(schema),
    values: {
      name: "",
      email: "",
      address: "",
      phone: "",
      products: cart?.products?.map((p) => ({ ...p, productId: p.id })),
    },
  });
  const {
    fields: products,
    remove: removeProduct,
    update: updateProduct,
  } = useFieldArray({
    control,
    name: "products",
  });

  const onDelete = (id?: string) => {
    handleDeleteProduct(id);
    removeProduct(products.findIndex((product) => product.id === id));
  };
  const onChangeQuantity = (
    event?: React.ChangeEvent<HTMLInputElement>,
    id?: string,
    index?: number
  ) => {
    handleUpdateQuantity(id, Number(event?.target.value));
    updateProduct(index!, {
      ...products[index!],
      quantity: Number(event?.target.value),
    });
  };

  const onSubmit = async () => {
    await handleCheckout(cart);
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-10">
      <Back url="/" title="Carrito" />
      <div className="flex flex-col">
        <form
          id="form-cart"
          name="form-cart"
          className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-3 items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            name="name"
            placeholder="Ingrese nombre"
            label="Nombre"
            type="text"
            register={register}
            error={errors.name?.message}
          />
          <Input
            name="email"
            placeholder="Ingres correo electrónico"
            label="Correo electrónico"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            name="address"
            placeholder="Ingrese dirección"
            label="Dirección"
            type="text"
            register={register}
            error={errors.address?.message}
          />
          <Input
            name="phone"
            placeholder="Ingrese teléfono"
            label="Teléfono"
            type="text"
            register={register}
            error={errors.phone?.message}
          />
        </form>
        <CartList
          products={products}
          onRemove={onDelete}
          onChangeQuantity={onChangeQuantity}
          register={register}
          errors={errors}
        />
        <div className="flex items-center justify-between text-xl font-bold mt-8 mb-2">
          <h2 className="text-xl">Total </h2>
          <span>{formatMoney(getCartTotal())}</span>
        </div>
        <hr className="border-b border-base-200" />

        <div className="flex justify-end mt-4">
          <Button
            disabled={!cart?.products?.length}
            loading={loading}
            type="submit"
            form="form-cart"
            class="btn-primary"
          >
            Pagar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
