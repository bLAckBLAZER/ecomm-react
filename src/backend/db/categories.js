import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  // {
  //   _id: uuid(),
  //   categoryName: "fiction",
  //   description:
  //     "literature in the form of prose, especially novels, that describes imaginary events and people",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "non-fiction",
  //   description:
  //     "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "horror",
  //   description:
  //     "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  // },
  {
    _id: uuid(),
    categoryName: "Sneakers",
    categoryImage:
      "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg",
    description: "Stylish and fashionable shoes to impress everyone around you",
  },
  {
    _id: uuid(),
    categoryName: "Sports Shoes",
    categoryImage:
      "https://footwearnews.com/wp-content/uploads/2021/08/nike-zoomx-vaporfly-next.jpg",
    description: "Strong and sturdy shoes for various sport activities",
  },
  {
    _id: uuid(),
    categoryName: "Sandals",
    categoryImage:
      "https://5.imimg.com/data5/ZL/AT/BR/SELLER-2630785/men-sandle-500x500.png",
    description:
      "Want a blend of comfy and sporty go for Sandals - all time hit!",
  },
  {
    _id: uuid(),
    categoryName: "Slippers",
    categoryImage:
      "https://5.imimg.com/data5/RV/ZY/SW/SELLER-36376318/slides-men-500x500.JPG",
    description: "Too lazy to tie the laces.... you must be a slipper guy :p",
  },
];
