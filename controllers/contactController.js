const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @Desc : Get all contacts
// @route Get /api/contacts
// @acess private

const getcontacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

// @Desc : create New contact
// @route Post /api/contacts
// @acess private
const createcontact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { Name, Email, phone } = req.body;
  if (!Name || !Email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    Name,
    Email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

// @Desc : Get New contact
// @route Get /api/contacts/:id
// @acess private
const getcontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found !");
  }
  res.status(200).json(contact);
});

// @Desc : Update New contact
// @route Put /api/contacts/:id
// @acess private
const Updatecontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found !");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You are not authorized to update this contact");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContact);
});

// @Desc : Delete New contact
// @route Delete /api/contacts/:id
// @acess private
const Deletecontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found !");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You are not authorized to delete this contact");
  }
  const DeleteContact = await Contact.findByIdAndDelete(req.params.id);
  res.send("Deleted");
  res.status(200).json(DeleteContact);
});

module.exports = {
  getcontacts,
  createcontact,
  getcontact,
  Updatecontact,
  Deletecontact,
};
