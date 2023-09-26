import asyncHandler from "express-async-handler";
import { prisma } from "../config/prisma.config.js";

//Creating residenncy
const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;
  console.log(req.body.data);
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: {
          connect: {
            email: userEmail,
          },
        },
      },
    });

    res.status(201).json({
      message: "Residency created successfully",
      residency,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
});

//get all residency
const getAllresidency = asyncHandler(async (req, res) => {
  try {
    const residency = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(201).send({
      data: residency,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

// Get Single Residency
const singleResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const residency = await prisma.residency.findUnique({
      where: { id: String(id) },
    });
    res.status(201).send({
      data: residency,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

//Delete Single residency
const deleteResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userEmail } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return res.status(400).send({
        message: "You can only delete your residencies.",
      });
    }
    await prisma.residency.delete({
      where: { id: String(id) },
    });

    res.status(201).send({
      message: `Deleted Successfully id: ${id}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

//Update residency
const updateResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // console.log(data);
  try {
    const updateResidency = await prisma.residency.update({
      where: { id: String(id) },
      data: req.body,
    });
    const residency = await prisma.residency.findUnique({
      where: { id: String(id) },
    });
    res.status(201).send({
      message: "Successfully done",
      data: residency,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: "Something went wrong",
    });
  }
});

export {
  createResidency,
  getAllresidency,
  singleResidency,
  deleteResidency,
  updateResidency,
};
