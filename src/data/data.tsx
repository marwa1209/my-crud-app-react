/** @format */

import { v4 as uuid } from "uuid";
import type { IProduct } from "../interfaces/IProduct";
import Image1 from "../assets/images/image-1.jpeg";
import Image2 from "../assets/images/image-2.jpg";
import Image3 from "../assets/images/image-3.jpg";
import Image4 from "../assets/images/image-4.jpg";
import Image5 from "../assets/images/image-5.jpeg";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image1,
    alt: "Product 1 image",
    price: "$919.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 1",
      imageUrl: "category1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 2",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image2,
    alt: "Product 2 image",
    price: "$109.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 2",
      imageUrl: "category2.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 3",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image3,
    alt: "Product 3 image",
    price: "$189.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 3",
      imageUrl: "category3.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 4",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image4,
    alt: "Product 4 image",
    price: "$129.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 4",
      imageUrl: "category4.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 5",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image5,
    alt: "Product 5 image",
    price: "$199.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 5",
      imageUrl: "category5.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 1",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image1,
    alt: "Product 1 image",
    price: "$919.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 1",
      imageUrl: "category1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 2",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image2,
    alt: "Product 2 image",
    price: "$109.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 2",
      imageUrl: "category2.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 3",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image3,
    alt: "Product 3 image",
    price: "$189.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 3",
      imageUrl: "category3.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 4",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image4,
    alt: "Product 4 image",
    price: "$129.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 4",
      imageUrl: "category4.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 5",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image5,
    alt: "Product 5 image",
    price: "$199.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 5",
      imageUrl: "category5.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 1",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image1,
    alt: "Product 1 image",
    price: "$919.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 1",
      imageUrl: "category1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 2",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image2,
    alt: "Product 2 image",
    price: "$109.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 2",
      imageUrl: "category2.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 3",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image3,
    alt: "Product 3 image",
    price: "$189.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 3",
      imageUrl: "category3.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 4",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image4,
    alt: "Product 4 image",
    price: "$129.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 4",
      imageUrl: "category4.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 5",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.",
    imageUrl: Image5,
    alt: "Product 5 image",
    price: "$199.99",
    colors: ["Red", "Blue"],
    categorey: {
      name: "Category 5",
      imageUrl: "category5.jpg",
    },
  },
];
