/** @format */
import type { IProduct } from "../interfaces/IProduct";
import { textSlicer } from "../utils/function";
import Button from "./ui/Button";
import Image from "./ui/Image";
interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  return (
    <>
      <div className="border rounded-md p-2">
        <Image
          src={product.imageUrl}
          alt={product.alt}
          className="rounded-md"
        />
        <h3 className="my-3">{product.title}</h3>
        <p className="text-gray-400">{textSlicer(product.description)}</p>
        <div className="flex space-x-2 my-4">
          <div className="w-6 h-6 bg-red-950 rounded-full cursor-pointer" />
          <div className="w-6 h-6 bg-indigo-600 rounded-full cursor-pointer" />
          <div className="w-6 h-6 bg-pink-600 rounded-full cursor-pointer" />
          <div className="w-6 h-6 bg-green-700 rounded-full cursor-pointer" />
        </div>
        <div className="flex items-center justify-between my-2">
          <span className="font-semibold">{product.price}</span>
          <Image
            src={product.imageUrl}
            alt={"image1"}
            className="w-14 h-14 rounded-full object-center"
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Button bgClass="bg-indigo-700">Edit</Button>
          <Button bgClass="bg-red-700">Delete</Button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
/** @format */
