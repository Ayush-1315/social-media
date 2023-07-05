import { formatDate } from "../utils/authUtils";
import profile1 from "../../frontend/assets/profile1.webp";
import profile2 from "../../frontend/assets/profile2.avif";
import profile3 from "../../frontend/assets/profile3.avif";
import profile4 from "../../frontend/assets/profile4.avif";
import profile5 from "../../frontend/assets/profile5.avif";
import profile6 from "../../frontend/assets/profile6.webp";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "34a7b62c-5e1d-4588-9944-3686d7a98837",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio:"I am an aspiring web developer",
    website:"https://ayush-1315.netlify.app/",
    profile:profile1,
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "81b05a71-b98e-4027-bd8c-5e868fa3b48f",
    firstName: "Amandeep",
    lastName: "Sinha",
    username: "amandeepsinha",
    password: "ads@2606",
    bio:"I am an aspiring web developer",
    profile:profile2,
    website:"https://ayush-1315.netlify.app/",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "58bdf720-1f96-435c-b51c-3a24adfce2c6",
    firstName: "Rohan",
    lastName: "Kumar",
    username: "rohankumar",
    profile:profile3,
    password: "rohan123",
    bio:"I am an aspiring web developer",
    website:"https://ayush-1315.netlify.app/",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "a56d3e1b-e79f-4919-9ecc-18f17e7c93ae",
    firstName: "Ayush",
    lastName: "Raj",
    username: "ayush-1315",
    password: "rbga7mt4",
    bio:"I am an aspiring web developer",
    website:"https://ayush-1315.netlify.app/",
    profile:profile4,
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:"85ecdc7d-5ef4-41b8-a594-8f13189a3213",
    firstName: "Amisha",
    lastName: "Kumari",
    username: "amishabalika",
    password: "amisha24",
    bio:"I am an aspiring web developer",
    website:"https://ayush-1315.netlify.app/",
    bookmarks: [],
    profile:profile5,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:"94478a95-20a9-49eb-987f-a98cea166e41",
    firstName: "Shivani",
    lastName: "Sahay",
    username: "shivanisahay22",
    password: "nightowl",
    bio:"I am an aspiring web developer",
    website:"https://ayush-1315.netlify.app/",
    bookmarks: [],
    profile:profile6,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
