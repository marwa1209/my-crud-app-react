/** @format */
import Image1 from "../assets/images/image-1.jpeg";
import Button from "./ui/Button";
import Image from "./ui/Image";
const ProductCard = () => {
  return (
    <>
      <div className="border rounded-md p-2">
        <Image src={Image1} alt={"image1"} className="rounded-md" />
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium.
        </h3>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          commodi incidunt ad nostrum neque eligendi alias esse repudiandae,
          reiciendis aspernatur.
        </p>
        <div className="flex space-x-2 my-4">
          <div className="w-6 h-6 bg-red-950 rounded-full cursor-pointer" />
          <div className="w-6 h-6 bg-indigo-600 rounded-full cursor-pointer" />
          <div className="w-6 h-6 bg-pink-600 rounded-full cursor-pointer" />
          <div className="w-6 h-6 bg-green-700 rounded-full cursor-pointer" />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">500,000$</span>
          <Image
            src={Image1}
            alt={"image1"}
            className="w-14 h-14 rounded-full object-center"
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Button
            bgClass="bg-indigo-700"
           >
            Edit
          </Button>
          <Button bgClass="bg-red-700">Delete</Button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
