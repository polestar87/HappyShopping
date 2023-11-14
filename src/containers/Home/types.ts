export type LocationType = {
  id: string;
  address: string;
}
export type BannersType = Array<{
  id: string,
  url: string
}>;

export type ResponseType = {
  success: boolean;
  data: {
    location: LocationType;
    banners: BannersType;
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