import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum ScrollStat {
  ACC = "ACC",
  ATT = "ATT",
  DEF = "DEF",
  DEX = "DEX",
  HP = "HP",
  INT = "INT",
  JUMP = "JUMP",
  LUK = "LUK",
  MATT = "MATT",
  MDEF = "MDEF",
  MP = "MP",
  SPEED = "SPEED",
  STR = "STR"
}

export enum ScrollType {
  BOTTOMWEAR = "BOTTOMWEAR",
  CAPE = "CAPE",
  GLOVES = "GLOVES",
  HELMET = "HELMET",
  OVERALL = "OVERALL",
  SHIELD = "SHIELD",
  SHOES = "SHOES",
  TOPWEAR = "TOPWEAR",
  BOW = "BOW",
  CLAW = "CLAW",
  CROSSBOW = "CROSSBOW",
  DAGGER = "DAGGER",
  GUN = "GUN",
  KNUCKLER = "KNUCKLER",
  ONE_HANDED_AXE = "ONE_HANDED_AXE",
  ONE_HANDED_BW = "ONE_HANDED_BW",
  ONE_HANDED_SWORD = "ONE_HANDED_SWORD",
  POLE_ARM = "POLE_ARM",
  SPEAR = "SPEAR",
  STAFF = "STAFF",
  TWO_HANDED_AXE = "TWO_HANDED_AXE",
  TWO_HANDED_BW = "TWO_HANDED_BW",
  TWO_HANDED_SWORD = "TWO_HANDED_SWORD",
  WAND = "WAND",
  JUMP = "JUMP",
  PET_EQUIPMENT = "PET_EQUIPMENT",
  EARRING = "EARRING",
  EYE_ACCESSORY = "EYE_ACCESSORY",
  FACE_ACCESSORY = "FACE_ACCESSORY"
}

export enum ScrollCategory {
  ARMOR = "ARMOR",
  WEAPON = "WEAPON",
  PET_EQUIPMENT = "PET_EQUIPMENT",
  ACCESSORY = "ACCESSORY"
}

export enum ItemType {
  SCROLL = "SCROLL"
}

type ScrollMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PriceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Scroll {
  readonly id: string;
  readonly ScrollPercent: number;
  readonly ScrollType: ScrollType | keyof typeof ScrollType;
  readonly ScrollCategory: ScrollCategory | keyof typeof ScrollCategory;
  readonly ScrollStat: ScrollStat | keyof typeof ScrollStat;
  readonly Is_A: Item;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Scroll, ScrollMetaData>);
  static copyOf(source: Scroll, mutator: (draft: MutableModel<Scroll, ScrollMetaData>) => MutableModel<Scroll, ScrollMetaData> | void): Scroll;
}

export declare class Item {
  readonly id: string;
  readonly ItemID: string;
  readonly ItemType: ItemType | keyof typeof ItemType;
  readonly ItemName: string;
  readonly Has?: (Price | null)[] | null;
  readonly Is_A?: Scroll | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly itemIs_AId?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Price {
  readonly id: string;
  readonly ItemID: string;
  readonly TimeOfPrice: string;
  readonly PriceOfItem: number;
  readonly SubmittedUser: string;
  readonly Has: Item;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Price, PriceMetaData>);
  static copyOf(source: Price, mutator: (draft: MutableModel<Price, PriceMetaData>) => MutableModel<Price, PriceMetaData> | void): Price;
}