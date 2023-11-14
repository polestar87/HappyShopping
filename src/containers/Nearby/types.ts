export type ResponseType = {
  success: boolean,
  data: Array<{
    id: string;
    name: string;
    address: string;
    phone: string;
    distance: string;
  }>
}