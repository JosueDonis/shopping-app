import { ProductType } from "./product";

export type CartProductType = ProductType & {
  quantity: number;
};
export type CartInfoType = {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
};
export type CartType = CartInfoType & {
  products?: CartProductType[];
};
