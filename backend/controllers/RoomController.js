import { Room } from "../models/Room.js";

const RoomController = {
  get: async (req, res) => {
    res.status(200).json(
      await Room.find(await req.query)
        .limit(10)
        .skip(0)
    );
  },
  add: async (req, res) => {
    res.status(200).json(await Room.create(req.body));
  },
  edit: async (req, res) => {
    const { _id, name, description } = req.body;
    res.status(200).json(
      await Hotel.findByIdAndUpdate(_id, {
        name: name,
        description: description,
      })
    );
  },
  delete: async (req, res) => {
    res.status(200).json(await Romm.findByIdAndDelete(req.body._id));
  },
};
export default RoomController;