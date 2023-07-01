import highBleachCoral from "../models/highBleachCoral.js";
import mediumBleachCoral from "../models/mediumBleachCoral.js";
import lowBleachCoral from "../models/lowBleachCoral.js";
import noBleachCoral from "../models/noBleachCoral.js";
import unknownCorals from "../models/unknownCorals.js";

export const getHighBleachingCoral = async (req, res) => {
  try {
    const allHighBleachingCorals = await highBleachCoral.find();
    res.status(200).json(allHighBleachingCorals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMediumBleachingCoral = async (req, res) => {
  try {
    const allMediumBleachingCorals = await mediumBleachCoral.find();
    res.status(200).json(allMediumBleachingCorals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLowBleachingCoral = async (req, res) => {
  try {
    const allLowBleachingCorals = await lowBleachCoral.find();
    res.status(200).json(allLowBleachingCorals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNoBleachingCoral = async (req, res) => {
  try {
    const allNoBleachingCorals = await noBleachCoral.find();
    res.status(200).json(allNoBleachingCorals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUnknownCoral = async (req, res) => {
  try {
    const allUnknownBleachingCorals = await unknownCorals.find();
    res.status(200).json(allUnknownBleachingCorals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
