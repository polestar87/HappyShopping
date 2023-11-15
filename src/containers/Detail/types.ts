export type ResponseType = {
  success: boolean;
  data: {
    id: string;
    imgUrl: string;
    title: string;
    subtitle: string;
    price: number;
    sales: string;
    origin: string;
    specification: string;
    detail: string;
  };
};
