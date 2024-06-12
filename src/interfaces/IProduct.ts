/** @format */

export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  price: string;
  colors: string[];
  categorey: {
    name: string;
    imageUrl: string;
  };
}
