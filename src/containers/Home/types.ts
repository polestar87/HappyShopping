export type ResponseType = {
  success: boolean;
  data: {
    location: {
      id: string;
      address: string;
    };
    banners: Array<{
      id: string,
      url: string
    }>;
    categories: Array<{
      id: string,
      url: string,
      name: string
    }>;
    freshes:  Array<{
      id: string,
      imgUrl: string,
      name: string,
      price: string
    }>;
  }
}