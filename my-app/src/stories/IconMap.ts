import {
  TiTick,
  TiHome,
  TiArrowBack,
  TiArrowForward,
  TiShoppingCart,
} from "react-icons/ti";
import { FaCashRegister } from "react-icons/fa";
import { RiCopyrightFill } from "react-icons/ri";

export enum IconType {
  TICK = "TiTick",
  HOME = "TiHome",
  BACK = "TiArrowBack",
  FORWARD = "TiArrowForward",
  CART = "TiShoppingCart",
  CHECKOUT = "FaCashRegister",
  COPYRIGHT = "RiCopyrightFill",
}

export const iconMap = {
  TiTick: TiTick,
  TiHome: TiHome,
  TiArrowBack: TiArrowBack,
  TiArrowForward: TiArrowForward,
  TiShoppingCart: TiShoppingCart,
  FaCashRegister: FaCashRegister,
  RiCopyrightFill: RiCopyrightFill,
};
