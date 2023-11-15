export type ResponseType = {
  success: boolean;
  data:Array<{
    id: string;
    title: string;
    imgUrl: string;
    price: number;
    sales: number;
  }>;
};