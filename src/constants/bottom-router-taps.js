import Home from "../navigation/Home";
import Categories from "../navigation/Categories";
import Orders from "../navigation/Orders";
import Account from "../navigation/Account";
import Cart from "../navigation/Cart";

export const bottomRouterTaps = [
  {
    _id: 0,
    name: "Home",
    iocnFocus: "home-variant",
    iconNoFocus: "home-variant-outline",
    component: Home,
    label: "Home",
  },
  {
    _id: 1,
    name: "Categories",
    iocnFocus: "tag-text",
    iconNoFocus: "tag-text-outline",
    component: Categories,
    label: "Categories",
  },
  {
    _id: 2,
    name: "Orders",
    iocnFocus: "view-list",
    iconNoFocus: "view-list-outline",
    component: Orders,
    label: "Orders",
  },
  {
    _id: 3,
    name: "Account",
    iocnFocus: "account",
    iconNoFocus: "account-outline",
    component: Account,
    label: "My Account",
  },
  {
    _id: 4,
    name: "Cart",
    iocnFocus: "cart",
    iconNoFocus: "cart-outline",
    component: Cart,
    label: "Cart",
  },
];
