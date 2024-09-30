import { createServer, Model } from "miragejs";


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
        "Reliable Red is a van that was made for traveling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
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
      price: 90,
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
      date:"01/07",
      id: "368",
      total: 220,
      simple: {
        name: "Modest Explorer",
        price: 60,
        reviewId: "1"
      },
      rugged: {
        name: "Green Wonder",
        price: 70,
        reviewId: "2"
      },
      luxury: {
        name: "The Cruiser",
        price: 90,
        reviewId: "3"
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"02/07",
      id: "371",
      total: 150,
      simple: {
        name: "Modest Explorer",
        price: 60,
        reviewId: "4"
      },
      rugged: {
        name: "Green Wonder",
        price: 0,
        reviewId: ""
      },
      luxury: {
        name: "The Cruiser",
        price: 90,
        reviewId: "5"
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"03/07",
      id: "374",
      total: 90,
      simple: {
        name: "Modest Explorer",
        price: 0,
        reviewId: ""
      },
      rugged: {
        name: "Green Wonder",
        price: 0,
        reviewId: ""
      },
      luxury: {
        name: "The Cruiser",
        price: 90,
        reviewId: "6"
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"04/07",
      id: "377",
      total: 220,
      simple: {
        name: "Modest Explorer",
        price: 60,
        reviewId: "7"
      },
      rugged: {
        name: "Green Wonder",
        price: 70,
        reviewId: "8"
      },
      luxury: {
        name: "The Cruiser",
        price: 90,
        reviewId: "9"
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"05/07",
      id: "380",
      total: 90,
      simple: {
        name: "Modest Explorer",
        price: 0,
        reviewId: ""
      },
      rugged: {
        name: "Green Wonder",
        price: 0,
        reviewId: ""
      },
      luxury: {
        name: "The Cruiser",
        price: 90,
        reviewId: "10"
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"06/07",
      id: "382",
      total: 130,
      simple: {
        name: "Modest Explorer",
        price: 60,
        reviewId: "11"
      },
      rugged: {
        name: "Green Wonder",
        price: 70,
        reviewId: "12"
      },
      luxury: {
        name: "The Cruiser",
        price: 0,
        reviewId: ""
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"07/07",
      id: "384",
      total: 90,
      simple: {
        name: "Modest Explorer",
        price: 0,
        reviewId: ""
      },
      rugged: {
        name: "Green Wonder",
        price: 0,
        reviewId: ""
      },
      luxury: {
        name: "The Cruiser",
        price: 90,
        reviewId: "13"
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"08/07",
      id: "386",
      total: 150,
      simple: {
        name: "Modest Explorer",
        price: 60,
        reviewId: "14"
      },
      rugged: {
        name: "Green Wonder",
        price: 0,
        reviewId: ""
      },
      luxury: {
        name: "The Cruiser",
        price: 90,
        reviewId: "15"
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"09/07",
      id: "388",
      total: 150,
      simple: {
        name: "Modest Explorer",
        price: 60,
        reviewId: "16"
      },
      rugged: {
        name: "Green Wonder",
        price: 0,
        reviewId: ""
      },
      luxury: {
        name: "The Cruiser",
        price: 90,
        reviewId: "17"
      }
    });
    server.create("transaction", {
      userId: "123",
      date:"10/07",
      id: "390",
      total: 60,
      simple: {
        name: "Modest Explorer",
        price: 60,
        reviewId: "18"
      },
      rugged: {
        name: "Green Wonder",
        price: 0,
        reviewId: ""
      },
      luxury: {
        name: "The Cruiser",
        price: 0,
        reviewId: ""
      }
    });
    server.create("review", {
      rating: 5,
      name: "Elliot",
      date: "01/07",
      text: "The Green Wonder is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "2",
      vanId: "6",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Sandy",
      date: "01/07",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "1",
      vanId: "1",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "John",
      date: "01/07",
      text: "The Cruiser is truly a home away from home. The spacious interior and ample storage make it feel like a luxury apartment on wheels. The large windows provide stunning views, and the comfortable seating makes it easy to relax and enjoy the scenery.",
      id: "3",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 3,
      name: "Charlie",
      date: "02/07",
      text: "While the Modest Explorer is a great van for those seeking a minimalist lifestyle, it's definitely not for everyone. The composting toilet takes some getting used to, and the van can be a bit cramped for longer trips. That being said, it's a great way to experience nature up close and personal.",
      id: "4",
      vanId: "1",
      hostId: "123",
    });
    server.create("review", {
      rating: 4,
      name: "David",
      date: "02/07",
      text: "We rented the Cruiser for a road trip across the country, and it was the perfect vehicle for the job. The comfortable beds ensured we got a good night's sleep, and the kitchen was well-equipped for preparing meals on the road. We loved having the flexibility to stop wherever we wanted and enjoy the open road.",
      id: "6",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Emily",
      date: "03/07",
      text: "If you're looking for a luxury van rental experience, the Cruiser is the way to go. The interior is beautifully appointed, and the amenities are top-notch. We felt like we were staying in a high-end hotel, but with the freedom to explore wherever we wanted.",
      id: "6",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 4,
      name: "Frank",
      date: "04/07",
      text: "If you're looking for a budget-friendly way to travel, the Modest Explorer is a great option. The van is relatively inexpensive to rent, and you can save money on accommodations and food. Plus, it's a lot of fun to explore new places in a van.",
      id: "7",
      vanId: "1",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Henry",
      date: "04/07",
      text: "The Green Wonder was the perfect vehicle for our eco-friendly road trip. The van's sustainable features, like the solar panels and composting toilet, made us feel good about our impact on the environment. It was also incredibly stylish and comfortable, making our journey a truly enjoyable experience.",
      id: "8",
      vanId: "6",
      hostId: "123",
    });
    server.create("review", {
      rating: 4,
      name: "Isabella",
      date: "04/07",
      text: "We traveled with our family in the Cruiser, and it was a great way to experience different parts of the country. The spacious interior provided plenty of room for our kids to play, and the comfortable beds ensured everyone got a good night's sleep. We highly recommend the Cruiser for families looking for a comfortable and convenient way to travel.",
      id: "9",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Jack",
      date: "05/07",
      text: "I've always dreamed of owning a van, and the Cruiser is exactly what I was looking for. It's stylish, comfortable, and has everything I need for my adventures. I can't wait to hit the road and explore new places in my new home on wheels.",
      id: "10",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Katie",
      date: "06/07",
      text: "The Modest Explorer is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "11",
      vanId: "1",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Liam",
      date: "06/07",
      text: "I was initially hesitant to rent a van, but the Green Wonder exceeded my expectations. It's not only sustainable but also incredibly stylish. The interior is beautifully designed, and the van drives smoothly on the road. It's the perfect choice for anyone who wants to travel in style while minimizing their environmental impact.",
      id: "12",
      vanId: "6",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Megan",
      date: "07/07",
      text: "We rented the Cruiser for a weekend getaway to the mountains, and it was the perfect escape. The large windows provided stunning views of the surrounding landscape, and the comfortable seating made it easy to relax and enjoy the scenery. We loved having the flexibility to stop wherever we wanted and explore the area at our own pace.",
      id: "13",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 4,
      name: "Nathan",
      date: "08/07",
      text: "I was initially skeptical about living in a van, but the Modest Explorer quickly changed my mind. It felt like a cozy little home on wheels. The water tank was more than enough for our needs, and the kitchenette was surprisingly spacious. We loved the freedom of being able to explore different locations without having to worry about finding accommodations.",
      id: "14",
      vanId: "1",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Olivia",
      date: "08/07",
      text: "The Cruiser is more than just a van; it's a home on wheels. It's comfortable, convenient, and has everything you need to live and travel in style. We highly recommend it to anyone looking for a luxurious and unforgettable van rental experience.",
      id: "15",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Peter",
      date: "09/07",
      text: "The Cruiser is definitely worth the price. It's a high-quality van with all the features you could want. We were very impressed with the value for money.",
      id: "16",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 4,
      name: "Quinn",
      date: "09/07",
      text: "The rental process was easy and hassle-free, and the customer service was excellent. The staff was friendly and helpful, and they were always available to answer our questions. We would definitely rent from them again.",
      id: "17",
      vanId: "5",
      hostId: "123",
    });
    server.create("review", {
      rating: 5,
      name: "Rachel",
      date: "10/07",
      text: "I've always dreamed of living a nomadic lifestyle, and the Modest Explorer made it possible. I spent a month traveling around the country in the van, and it was the best experience of my life. I loved the simplicity and freedom of it all. I can't wait to do it again.",
      id: "18",
      vanId: "1",
      hostId: "123",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/vans", (schema) => {
      const vans = schema.vans.all();
      return vans;
    });

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      const van = schema.vans.find(id);
      if (van === null) {
        return "abc";
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
      const vansTransactions = schema.transactions.where({ userId: hostId });
      if (!vansTransactions) {
        return new Response(400, {}, { error: "Transactions not found" });
      }
      return vansTransactions;
    });

    this.get("/reviews", (schema, request) => {
      const hostId = request.requestHeaders.HostId;
      const reviews = schema.reviews.where({ hostId: hostId });
      if (!reviews) {
        return new Response(400, {}, { error: "Reviews not found" });
      }
      return reviews;
    });
  },
});
