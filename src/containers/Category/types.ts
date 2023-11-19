export type ResponseType = {
  success: boolean,
  data: {
    category: {
      id: number;
      name: string;
    },
    tag: Array<string>
  }
}
export type ProductType = {
  id: string;
  title: string;
  imgUrl: string;
  price: number;
  sales: number;
}
export type ProductResponseType = {
  success: boolean,
  data:Array<ProductType>;
}