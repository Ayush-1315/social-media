import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import profile1 from "../../frontend/assets/profile1.webp"
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio:"I am an aspiring web developer",
    profile:profile1,
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Amandeep",
    lastName: "Sinha",
    username: "amandeepsinha",
    password: "ads@2606",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rohan",
    lastName: "Kumar",
    username: "rohankumar",
    password: "rohan123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ayush",
    lastName: "Raj",
    username: "ayush-1315",
    password: "rbga7mt4",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Amisha",
    lastName: "Kumari",
    username: "amishabalika",
    password: "amisha24",
    bookmarks: [],
    bio:"I am an aspiring web developer",
    profile:"https://t.ly/WHWV",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
