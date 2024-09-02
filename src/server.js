import { createServer, Model } from "miragejs";
// security rules for firebase: service cloud.storage {
//   match /{bucket}/{path=**} {
//     allow read;
//   }
// }

createServer({
  models: {
    vans: Model,
    user: Model,
    transactions: Model,
    reviews: Model,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: "/vans/modest-explorer.png",
      type: "simple",
      hostId: "123",
    });
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl: "/vans/beach-bum.png",
      type: "rugged",
      hostId: "789",
    });
    server.create("van", {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl: "/vans/reliable-red.png",
      type: "luxury",
      hostId: "456",
    });
    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl: "/vans/dreamfinder.png",
      type: "simple",
      hostId: "789",
    });
    server.create("van", {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: "/vans/the-cruiser.png",
      type: "luxury",
      hostId: "123",
    });
    server.create("van", {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl: "/vans/green-wonder.png",
      type: "rugged",
      hostId: "123",
    });
    server.create("user", {
      id: "123",
      email: "b@b.com",
      password: "w123",
      name: "Bob",
    });
    server.create("transaction", {
      userId: "123",
      transactionsData: [
        {
          amount: 250,
          date: "01/07",
          id: 368,
          simple: 60,
          rugged: 70,
          luxury: 120,
        },
        {
          amount: 180,
          date: "02/07",
          id: 371,
          simple: 60,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 120,
          date: "03/07",
          id: 374,
          simple: 0,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 250,
          date: "04/07",
          id: 376,
          simple: 60,
          rugged: 70,
          luxury: 120,
        },
        {
          amount: 120,
          date: "05/07",
          id: 379,
          simple: 0,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 130,
          date: "06/07",
          id: 382,
          simple: 60,
          rugged: 70,
          luxury: 0,
        },
        {
          amount: 120,
          date: "07/07",
          id: 384,
          simple: 0,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 180,
          date: "08/07",
          id: 385,
          simple: 60,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 180,
          date: "09/07",
          id: 388,
          simple: 60,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 60,
          date: "10/07",
          id: 391,
          simple: 60,
          rugged: 0,
          luxury: 0,
        },
        {
          amount: 120,
          date: "11/07",
          id: 392,
          simple: 0,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 130,
          date: "12/07",
          id: 393,
          simple: 60,
          rugged: 70,
          luxury: 0,
        },
        {
          amount: 130,
          date: "13/07",
          id: 395,
          simple: 60,
          rugged: 70,
          luxury: 0,
        },
        {
          amount: 120,
          date: "14/07",
          id: 398,
          simple: 0,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 70,
          date: "15/07",
          id: 401,
          simple: 0,
          rugged: 70,
          luxury: 0,
        },
        {
          amount: 250,
          date: "16/07",
          id: 403,
          simple: 60,
          rugged: 70,
          luxury: 120,
        },
        {
          amount: 130,
          date: "17/07",
          id: 406,
          simple: 60,
          rugged: 70,
          luxury: 0,
        },
        {
          amount: 70,
          date: "18/07",
          id: 409,
          simple: 0,
          rugged: 70,
          luxury: 0,
        },
        {
          amount: 130,
          date: "19/07",
          id: 410,
          simple: 60,
          rugged: 70,
          luxury: 0,
        },
        {
          amount: 120,
          date: "20/07",
          id: 413,
          simple: 0,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 190,
          date: "21/07",
          id: 415,
          simple: 0,
          rugged: 70,
          luxury: 120,
        },
        {
          amount: 70,
          date: "22/07",
          id: 417,
          simple: 0,
          rugged: 70,
          luxury: 0,
        },
        {
          amount: 190,
          date: "23/07",
          id: 418,
          simple: 0,
          rugged: 70,
          luxury: 120,
        },
        {
          amount: 190,
          date: "24/07",
          id: 420,
          simple: 0,
          rugged: 70,
          luxury: 120,
        },
        {
          amount: 180,
          date: "25/07",
          id: 422,
          simple: 60,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 180,
          date: "26/07",
          id: 424,
          simple: 60,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 180,
          date: "27/07",
          id: 426,
          simple: 60,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 250,
          date: "28/07",
          id: 428,
          simple: 60,
          rugged: 70,
          luxury: 120,
        },
        {
          amount: 190,
          date: "29/07",
          id: 431,
          simple: 0,
          rugged: 70,
          luxury: 120,
        },
        {
          amount: 60,
          date: "30/07",
          id: 434,
          simple: 60,
          rugged: 0,
          luxury: 0,
        },
        {
          amount: 120,
          date: "31/07",
          id: 435,
          simple: 0,
          rugged: 0,
          luxury: 120,
        },
        {
          amount: 130,
          date: "01/08",
          id: 436,
          simple: 60,
          rugged: 70,
          luxury: 0,
        },
      ],
    });
    server.create("review", {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    });
    server.create("review", {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    // this.timing = 1000

    this.get("/vans", (schema) => {
      const vans = schema.vans.all();
      return vans;
    });

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      const van = schema.vans.find(id);
      if (van === null) {
        console.log("abc");
        return "abc";
        // return new Response(400, {}, { error: "Van not found" });
      }

      return van;
    });

    this.get("/host/vans", (schema, request) => {
      return schema.vans.where({ hostId: request.requestHeaders.HostId });
    });

    this.get("/host/vans/:id", (schema, request) => {
      const id = request.params.id;
      const hostId = request.requestHeaders.HostId;
      return schema.vans.findBy({ id, hostId });
    });

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        throw {
          message: "User nof found",
        };
      }
      foundUser.password = undefined;
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      };
    });

    this.get("/transactions", (schema, request) => {
      const hostId = request.requestHeaders.HostId;
      console.log({hostId})
      const vansTransactions = schema.transactions.findBy({ userId: hostId });
      if (!vansTransactions) {
        return new Response(400, {}, { error: "Transactions not found" });
      }
      return vansTransactions;
    });

    this.get("/reviews", (schema) => {
      const reviews = schema.reviews.all();
      return reviews;
    })
  },
});
