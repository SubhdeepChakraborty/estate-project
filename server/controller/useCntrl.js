import asynchandler from "express-async-handler";
import { prisma } from "../config/prisma.config.js";
import { BinaryCipher } from "decrypto";

// Creating User
const createUser = asynchandler(async (req, res) => {
  let { email, password, ...data } = req.body;

  try {
    if (!password) {
      res.status(400).send({
        message: "Bad request.",
      });
    }

    // Finding the user with the email
    const userExists = await prisma.user.findUnique({ where: { email } });

    // Condition if user doesn't exist, create it
    if (!userExists) {
      let encryptedPassword = BinaryCipher.encrypt(password);
      console.log(`Encrypted password in binary ${encryptedPassword}`);

      const userData = {
        email,
        password: encryptedPassword,
        ...data,
      };
      console.log(userData, "daaaaaaaaaaaaaaaaaataa");
      try {
        const user = await prisma.user.create({ data: userData });
        res.send({
          message: "User registered successfully",
          user: user,
        });
      } catch (err) {
        console.log(err, "error");
        res.status(500).send({
          message: "Error creating user.",
        });
      }
    } else {
      res.send({
        message: "User already exists",
        user: userExists,
      });
    }
  } catch (err) {
    console.log(err, "error");
    res.status(500).send({
      message: "Something went wrong.",
    });
  }
});

//Login or not
const loginLogout = asynchandler(async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body, "Starting data is here"); // Fixed variable name to password
  try {
    let realPassword = BinaryCipher.encrypt(password);
    console.log(realPassword, "decrypted password"); // Fixed log message
    // Finding the user with the email
    const userExists = await prisma.user.findUnique({ where: { email } });
    console.log(userExists, "user data is here"); // Fixed log message
    if (!userExists) {
      res.status(400).send({
        status: false,
        message: "Please register yourself.", // Fixed typo in message
      });
    } else {
      const { password: storedPassword, ...userData } = userExists; // Renamed password variable to storedPassword to avoid conflict
      console.log(storedPassword, "user password");
      if (realPassword === storedPassword) {
        res.status(200).send({
          status: true,
          message: "Hey there is your data",
          data: userData, // Changed to userData to avoid sending the password in response
        });
      } else {
        res.status(400).send({
          status: false,
          message: "Incorrect password.",
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: false,
      message: "Something went wrong.",
    });
  }
});

//Get Single User
const getSIngleUser = asynchandler(async (req, res) => {
  const { id } = req.params; // Destructure 'id' from 'req.params'
  try {
    const user = await prisma.user.findUnique({
      where: { id: String(id) }, // Change id to String
    });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "Getting single user", user });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).send({ message: "An error occurred" });
  }
});

//Get All Users
const getallUsers = asynchandler(async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      orderBy: {
        id: "desc",
      },
    });
    res.send({
      user: user,
    });
  } catch (err) {
    console.log(err);
    res.send({
      message: "Something went wrong",
    });
  }
});

//Delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    await prisma.residency.deleteMany({
      where: { userEmail: email },
    });
    await prisma.user.delete({
      where: {
        id: String(id), // Assuming id is a number, you should use Number() to convert it
      },
    });
    res.send({
      message: "Successfully deleted",
    });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).send({
      message: "Something went wrong",
    });
  }
};

//Bookvisit for user
const bookVisit = asynchandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;
  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVists: true },
    });
    if (alreadyBooked.bookedVists.some((visit) => visit.id === id)) {
      res.status(400).send({
        message: "Residency already booked by you",
      });
    } else {
      await prisma.user.update({
        where: { email },
        data: {
          bookedVists: { push: { id, date } },
        },
      });
      res.status(201).send({
        message: "Your response is booked successfully.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Something is wrong",
    });
  }
});

//Update user
const updateUser = asynchandler(async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.update({
      where: { id: String(id) },
      data: req.body,
    });
    res.status(201).send({
      message: `Successfully updated ${id}`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

//Get All Bookings of users
const getAllbookings = asynchandler(async (req, res) => {
  const { id } = req.params;
  try {
    const users = await prisma.user.findUnique({
      where: { id: String(id) },
      select: { bookedVists: true },
    });
    res.status(200).send({
      message: "Your bookings",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: "Something went wrong.",
    });
  }
});

//Cancel Booking
const cancelBookings = asynchandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVists: true },
    });

    //Here we will got the index of certain visits
    const index = user.bookedVists.findIndex((visit) => visit.id === id);

    //if index didn't found anything then the result of that index would be -1
    if (index === -1) {
      res.status(400).send({
        message: "Booking not found",
      });
    } else {
      user.bookedVists.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVists: user.bookedVists,
        },
      });
      res.status(200).send({
        message: "Your booking cancelled successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Something went wrong.",
    });
  }
});

//Add Fav Residency
const addFavResidency = asynchandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const updatedFavResidencies = user.favResidencies.includes(rid)
      ? user.favResidencies.filter((id) => id !== rid) // Remove if already favorited
      : [...user.favResidencies, rid]; // Add if not favorited

    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        favResidencies: {
          set: updatedFavResidencies,
        },
      },
    });

    const message = user.favResidencies.includes(rid)
      ? `Removed successfully fav residency id : ${rid}`
      : `Added to your fav list residency id : ${rid}`;

    res.status(200).send({
      message,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

//Get All Fav Residency
const getAllFavResidency = asynchandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (user) {
      const allFavs = await prisma.user.findUnique({
        where: { id: String(id) },
        select: {
          favResidencies: true,
        },
      });
      res.status(201).send({
        message: `Your fav Residencies`,
        data: allFavs,
      });
    } else {
      res.status(400).send({
        message: `You need to registered first.`,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Somwthing went wrong",
    });
  }
});

//Search Functionality
const getSearchedUser = asynchandler(async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export {
  createUser,
  getSIngleUser,
  getallUsers,
  deleteUser,
  bookVisit,
  updateUser,
  getAllbookings,
  cancelBookings,
  addFavResidency,
  getAllFavResidency,
  getSearchedUser,
  loginLogout,
};
