import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Leanne Graham",
        },
        {
          name: "Ervin Howell",
        },
        {
          name: "Clementine Bauch",
        },
      ])
    );
  }),
];
