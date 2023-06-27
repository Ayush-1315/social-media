import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import post1 from "../../frontend/assets/post1.jpg"
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "a4dc0e1a-ee16-4bbc-91f4-db591f5d6712",
    content:
      {
        message:"Remedy tickly coughs with a drink of honey, lemon and water as hot as you can take.",
        media:{
          url:post1,
          type:"image",
          name:"post1"
        }
      },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ayush-1315",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
     {
      message: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
     },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      {
        message:"Post 1  Remedy tickly coughs with a drink of honey, lemon and water as hot as you can take.",
        media:{
          url:post1,
          type:"image",
          name:"post1"
        }
      },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, {
    _id: uuid(),
    content:
      {
        message:"Remedy tickly coughs with a drink of honey, lemon and water as hot as you can take.",
        media:{
          url:post1,
          type:"image"
        }
      },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, {
    _id: uuid(),
    content:
      {
        message:"Remedy tickly coughs with a drink of honey, lemon and water as hot as you can take.",
        media:{
          url:post1,
          type:"image"
        }
      },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

