import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import post1 from "../../frontend/assets/post1.jpg";
import post2 from "../../frontend/assets/post2.avif";
import post3 from "../../frontend/assets/post3.avif";
import post4 from "../../frontend/assets/post4.avif";
import post5 from "../../frontend/assets/post5.jpg";
import post6 from "../../frontend/assets/post6.jpg";
import post7 from "../../frontend/assets/post7.jpg";
import post8 from "../../frontend/assets/post8.avif";
import post9 from "../../frontend/assets/post9.jpg";
import post10 from "../../frontend/assets/post10.avif";
import post11 from "../../frontend/assets/post11.avif";
import post12 from "../../frontend/assets/post12.jpg";
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "a4dc0e1a-ee16-4bbc-91f4-db591f5d6712",
    content: {
      message:
        "Remedy tickly coughs with a drink of honey, lemon and water as hot as you can take.",
      media: {
        url: post1,
        type: "image",
        name: "post1",
      },
    },
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "34a7b62c-5e1d-4588-9944-3686d7a98837",
        username: "adarshbalika",
        firstName: "Adarsh",
        lastName: "Balika",
        comment: "Honey sure has a lot of benifits for the body...🥰",
      },
    ],
    username: "ayush-1315",
    createdAt: "2021-03-02T10:15:23+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "254edb76-04ab-4d89-87c1-7c212aa93af7",
    content: {
      message:
        "When painting a room, preparation is key. The actual painting should account for about 40% of the work.",
      media: {
        url: post4,
        type: "image",
        name: "post4",
      },
    },
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "94478a95-20a9-49eb-987f-a98cea166e41",
        username: "shivanisahay22",
        firstName: "Shivani",
        lastName: "Sahay",
        comment:
          "But both painting a room and it's preparation needs a lot of hadrwork which exahuts a person....😑",
      },
    ],
    username: "ayush-1315",
    createdAt: "2021-11-12T10:15:23+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "22f44a01-b12a-4d62-a26a-ebe0602a22e8",
    content: {
      message:
        "The number of vampires in the average home, is directly proportional to the amount of garlic bread in the fridge.",
      media: {
        url: post5,
        type: "image",
        name: "post5",
      },
    },
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "58bdf720-1f96-435c-b51c-3a24adfce2c6",
        username: "rohankumar",
        firstName: "Rohan",
        lastName: "Kumar",
        comment: "😂😂😂",
      },
    ],
    username: "ayush-1315",
    createdAt: "2022-08-13T10:15:23+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "0a807794-6f25-417c-9ebb-3908a78fde20",
    content: {
      message:
        "If you have grandparents or parents - Talk to them more. Ask them about their life experiences.",
    },
    likes: {
      likeCount: 34,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "a56d3e1b-e79f-4919-9ecc-18f17e7c93ae",
        username: "ayush-1315",
        firstName: "Ayush",
        lastName: "Raj",
        comment:
          "They always try to entrust as much experince they have to you.",
      },
    ],
    username: "adarshbalika",
    createdAt: "2023-02-16T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "67f362cd-e799-463c-abb0-830f306ebc28",
    content: {
      message:
        "If you are feeling down, try holding a pencil between your top lip and your nose for five minutes.",
      media: {
        url: post2,
        type: "image",
        name: "post2",
      },
    },
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "81b05a71-b98e-4027-bd8c-5e868fa3b48f",
        firstName:"Amandeep",
        lastName:"Sinha",
        username: "amandeepsinha",
        comment: "Haha 😂... Very funny to make a fool out of someone.",
      },
      {
        _id: "a56d3e1b-e79f-4919-9ecc-18f17e7c93ae",
        username: "ayush-1315",
        firstName: "Ayush",
        lastName: "Raj",
        comment: "Sometimes it works...👍",
      },
    ],
    username: "adarshbalika",
    createdAt: "2021-03-07T10:15:23+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "cade44c5-10a5-43f9-aa23-1bc503f61852",
    content: {
      message:
        "One of the top five regrets people have is that they didn't stay in contact with friends.",
    },
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2022-09-29T10:15:21+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8bf6e6b8-bb17-4863-a099-bcd6a7238354",
    content: {
      message:
        "Don't use Excel or Powerpoint documents for your basic word processing needs.",
      media: {
        url: post3,
        type: "image",
        name: "post3",
      },
    },
    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "85ecdc7d-5ef4-41b8-a594-8f13189a3213",
        username: "amishabalika",
        firstName: "Amisha",
        lastName: "Balika",
        comment:
          "If you can't do anything about it, there's no point in worrying about it.",
      },
    ],
    username: "adarshbalika",
    createdAt: "2022-01-16:15:02+18:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1ec7e5a2-4389-42da-af60-f88dc020cbfb",
    content: {
      message:
        "When you look around and don't see anyone you respect, its time to leave.",
    },
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "amandeepsinha",
    createdAt: "2023-05-26:15:02+18:30",
    updatedAt: formatDate(),
  },
  {
    _id: "15acc9e6-1e89-494c-864b-c51f0acf5aa7",
    content: {
      message:
        "When you're at a concert or event, enjoy the moment, enjoy being there. Try leaving your camera in your pocket.",
      media: {
        url: post6,
        type: "image",
        name: "post6",
      },
    },
    likes: {
      likeCount: 44,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "a56d3e1b-e79f-4919-9ecc-18f17e7c93ae",
        username: "ayush-1315",
        firstName: "Ayush",
        lastName: "Raj",
        comment: "Dammm.... true 😎",
      },
    ],
    username: "amandeepsinha",
    createdAt: "2023-05-29:15:02+18:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8ec0b99d-817a-4540-aa8c-3b14d9e1796a",
    content: {
      message:
        "If you find yourself distressed about something, ask yourself if it will still matter tomorrow or next week or next month.",
    },
    likes: {
      likeCount: 75,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "85ecdc7d-5ef4-41b8-a594-8f13189a3213",
        username: "amishabalika",
        firstName: "Amisha",
        lastName: "Kumari",
        comment: "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
      },
    ],
    username: "amandeepsinha",
    createdAt: "2021-09-20:15:02+18:30",
    updatedAt: formatDate(),
  },
  {
    _id: "492dced1-4cc6-42b5-87f0-7a3cb74e8cd3",
    content: {
      message:
        "If you don't like the opinion you've been given, get another one.",
    },
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "94478a95-20a9-49eb-987f-a98cea166e41",
        username: "shivanisahay22",
        firstName: "Shivani",
        lastName: "Sahay",
        comment: "Sometimes it's better to change the path...",
      },
    ],
    username: "amishabalika",
    createdAt: "2021-03-11:15:02+15:30",
    updatedAt: formatDate(),
  },
  {
    _id: "c35534a7-7438-49a5-be71-4da972777117",
    content: {
      message:
        "A common regret in life is wishing one hadn't worked so hard.",
    },
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "amishabalika",
    createdAt: "2021-03-03:15:02+15:30",
    updatedAt: formatDate(),
  },
  {
    _id: "7169be22-2287-4af9-8e72-98bbfe4a1239",
    content: {
      message:
        "When having a clear out, ask yourself if an item has any financial, practical or sentimental value. If not, chuck it.",
        media:{
          url:post7,
          type:"image",
          name:"post7"
        }
    },
    likes: {
      likeCount: 55,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "amishabalika",
    createdAt: "2021-06-23:15:02+15:30",
    updatedAt: formatDate(),
  },
  {
    _id: "f1af272a-f9c0-49f4-8555-8582ef501c1a",
    content: {
      message:
        "Never regret. If it's good, it's wonderful. If it's bad, it's experience."
    },
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id:"81b05a71-b98e-4027-bd8c-5e868fa3b48f",
        username:"amandeepsinha",
        firstName:"Amandeep",
        lastName:"Sinha",
        comment:"Never cut your own fringe."
      }
    ],
    username: "rohankumar",
    createdAt: "2021-06-13:15:02+15:30",
    updatedAt: formatDate(),
  },
  {
    _id: "37d98111-ff60-4844-a145-5cc80abbffc2",
    content: {
      message:
        "Be brave. Even if you're not, pretend to be. No one can tell the difference.",
        media:{
          url:post8,
          type:"image",
          name:"post8"
        }
    },
    likes: {
      likeCount: 39,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rohankumar",
    createdAt: "2022-10-11:15:02+15:30",
    updatedAt: formatDate(),
  },
  {
    _id: "35df1570-8a4d-4787-a1eb-044cc5eef89e",
    content: {
      message:
        "If you think your headphones are dying, check the socket for fluff with a straightened paperclip.",
        media:{
          url:post9,
          type:"image",
          name:"post9"
        }
    },
    likes: {
      likeCount: 44,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rohankumar",
    createdAt: "2022-10-11:15:02+15:30",
    updatedAt: formatDate(),
  },
  {
    _id: "53e969c8-d1a7-48dc-94bc-15af2f969b50",
    content: {
      message:
        "Don't judge a book by its cover, unless it has a synopsis on the back.",
        media:{
          url:post10,
          type:"image",
          name:"post10"
        }
    },
    likes: {
      likeCount: 42,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id:"81b05a71-b98e-4027-bd8c-5e868fa3b48f",
        username:"amandeepsinha",
        firstName:"Amandeep",
        lastName:"Sihna",
        comment:"👍👍👍"
      }
    ],
    username: "shivanisahay22",
    createdAt: "2022-10-23:15:02+15:30",
    updatedAt: formatDate(),
  },
  {
    _id: "2f0ab302-6348-4a30-ad08-e27477a57bfe",
    content: {
      message:
        "If you cannot unscrew the lid of a jar, try placing a rubber band around its circumference for extra grip.",
        media:{
          url:post11,
          type:"image",
          name:"post11"
        }
    },
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id:"85ecdc7d-5ef4-41b8-a594-8f13189a3213",
        username:"amishabalika",
        firstName:"Amisha",
        lastName:"Kumari",
        comment:"It works.....🙌🙌"
      }
    ],
    username: "shivanisahay22",
    createdAt: "2021-12-08:15:02+15:30",
    updatedAt: formatDate(),
  },
  {
    _id: "78079bd7-aa47-431e-a962-169a51cc67f1",
    content: {
      message:
        "Exercise in the rain can really make you feel alive.",
        media:{
          url:post12,
          type:"image",
          name:"post12"
        }
    },
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id:"a56d3e1b-e79f-4919-9ecc-18f17e7c93ae",
        username:"ayush-1315",
        firstName:"Ayush",
        lastName:"Raj",
        comment:"Sounds refreshing...😎😎"
      }
    ],
    username: "shivanisahay22",
    createdAt: "2022-08-13:15:02+15:30",
    updatedAt: formatDate(),
  },
];
