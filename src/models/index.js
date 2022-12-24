// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ScrollStat = {
  "ACC": "ACC",
  "ATT": "ATT",
  "DEF": "DEF",
  "DEX": "DEX",
  "HP": "HP",
  "INT": "INT",
  "JUMP": "JUMP",
  "LUK": "LUK",
  "MATT": "MATT",
  "MDEF": "MDEF",
  "MP": "MP",
  "SPEED": "SPEED",
  "STR": "STR"
};

const ScrollType = {
  "BOTTOMWEAR": "BOTTOMWEAR",
  "CAPE": "CAPE",
  "GLOVES": "GLOVES",
  "HELMET": "HELMET",
  "OVERALL": "OVERALL",
  "SHIELD": "SHIELD",
  "SHOES": "SHOES",
  "TOPWEAR": "TOPWEAR",
  "BOW": "BOW",
  "CLAW": "CLAW",
  "CROSSBOW": "CROSSBOW",
  "DAGGER": "DAGGER",
  "GUN": "GUN",
  "KNUCKLER": "KNUCKLER",
  "ONE_HANDED_AXE": "ONE_HANDED_AXE",
  "ONE_HANDED_BW": "ONE_HANDED_BW",
  "ONE_HANDED_SWORD": "ONE_HANDED_SWORD",
  "POLE_ARM": "POLE_ARM",
  "SPEAR": "SPEAR",
  "STAFF": "STAFF",
  "TWO_HANDED_AXE": "TWO_HANDED_AXE",
  "TWO_HANDED_BW": "TWO_HANDED_BW",
  "TWO_HANDED_SWORD": "TWO_HANDED_SWORD",
  "WAND": "WAND",
  "JUMP": "JUMP",
  "PET_EQUIPMENT": "PET_EQUIPMENT",
  "EARRING": "EARRING",
  "EYE_ACCESSORY": "EYE_ACCESSORY",
  "FACE_ACCESSORY": "FACE_ACCESSORY"
};

const ScrollCategory = {
  "ARMOR": "ARMOR",
  "WEAPON": "WEAPON",
  "PET_EQUIPMENT": "PET_EQUIPMENT",
  "ACCESSORY": "ACCESSORY"
};

const ItemType = {
  "SCROLL": "SCROLL"
};

const { Scroll, Item, Price } = initSchema(schema);

export {
  Scroll,
  Item,
  Price,
  ScrollStat,
  ScrollType,
  ScrollCategory,
  ItemType
};