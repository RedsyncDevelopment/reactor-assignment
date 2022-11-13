import { CommentInterface } from "./../types.d";
export const COMMENTS: CommentInterface[] = [
  {
    id: "1",
    author: {
      name: "Ivana Paradzikovic",
      picture: "/img/ivana.jpg",
    },
    text: "Hello there, so I was wondering if you know how much MB is in a GB?",
    timestamp: 414514740000,
  },
  {
    id: "2",
    parent_id: "1",
    author: {
      name: "Zmaj Sipovski",
      picture: "/img/zmaj.jpg",
    },
    text: "Hey Ivana! Have you tried Googling that?",
    timestamp: 414514860000,
  },
  {
    id: "3",
    parent_id: "1",
    author: {
      name: "Ines Grah",
      picture: "/img/ines.jpg",
    },
    text: "Zmaj has a point, tho I’d say its about 1000MB in a GB.",
    timestamp: 414516900000,
  },
  {
    id: "4",
    author: {
      name: "Pero Pipovski",
      picture: "/img/pero.jpg",
    },
    text: "Hey guys, here is a nice web for that comoplicated conversion. www.convertunits.com/from/MB/to/GB",
    timestamp: 1626861080278,
  },
  {
    id: "5",
    parent_id: "3",
    author: {
      name: "Ivana Paradzikovic",
      picture: "/img/ivana.jpg",
    },
    text: "Thank you Ines!",
    timestamp: 414514880000,
  },
];

// detect links - StackOvewflow <3
export const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
