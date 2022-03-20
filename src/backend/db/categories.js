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
      "https://res.cloudinary.com/omjcloud/image/upload/v1647761974/Ecommerce%20App/Category%20Images/sneakers_glbhue.jpg",
    description: "Stylish and fashionable shoes to impress everyone around you",
  },
  {
    _id: uuid(),
    categoryName: "Sports Shoes",
    categoryImage:
      "https://res.cloudinary.com/omjcloud/image/upload/v1647761974/Ecommerce%20App/Category%20Images/sports-shoes_j3qd2u.jpg",
    description: "Strong and sturdy shoes for various sport activities",
  },
  {
    _id: uuid(),
    categoryName: "Sandals",
    categoryImage:
      "https://res.cloudinary.com/omjcloud/image/upload/v1647761975/Ecommerce%20App/Category%20Images/sandals_liswbd.png",
    description:
      "Want a blend of comfy and sporty go for Sandals - all time hit!",
  },
  {
    _id: uuid(),
    categoryName: "Slippers",
    categoryImage:
      "https://res.cloudinary.com/omjcloud/image/upload/v1647761973/Ecommerce%20App/Category%20Images/slippers_ugwsqd.jpg",
    description: "Too lazy to tie the laces.... you must be a slipper guy :p",
  },
];
