import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { Dish } from "../restaurants/restaurant";
import { ShippingFormInputs } from "../../components/ShippingAddressForm";
import { PaymentFormInputs } from "../../components/PaymentForm";

export enum shoppingCartStage {
  CART = "cart",
  SHIPPING = "Shipping",
  PAYMENT = "payment",
  SUCCESS = "success",
}

interface ShoppingCartState {
  isOpen: boolean;
  items: Dish[];
  cartTotal: number;
  cartStage: shoppingCartStage;
  shippingData: ShippingFormInputs;
  loadingPaymentCheckout: string;
  errorLoadingPaymentCheckout: SerializedError;
  orderId: string;
}

const initialState: ShoppingCartState = {
  isOpen: false,
  items: [],
  cartTotal: 0,
  cartStage: shoppingCartStage.CART,
  shippingData: {
    receiverName: "",
    address: "",
    number: "",
    city: "",
    cepShippingCode: "",
    addressDetails: "",
  },
  loadingPaymentCheckout: "",
  errorLoadingPaymentCheckout: {},
  orderId: "",
};

export type CheckoutFields = {
  paymentData: PaymentFormInputs;
  shippingData: ShippingFormInputs;
  cartProducts: Dish[];
};

export const paymentCheckout = createAsyncThunk(
  "comments/postComment",
  async ({ paymentData, shippingData, cartProducts }: CheckoutFields) => {
    const requestBody = JSON.stringify({
      products: formatCartProducts(cartProducts),
      delivery: formatDeliveryData(shippingData),
      payment: formatPaymentData(paymentData),
    });

    const response = await fetch(
      `https://api-ebac.vercel.app/api/efood/checkout`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: requestBody,
      },
    );
    const json = await response.json();
    return json;
  },
);

const formatPaymentData = (paymentData: PaymentFormInputs) => {
  const payment = {
    card: {
      name: paymentData.cardHolderName,
      number: paymentData.cardNumber,
      code: Number(paymentData.securityCode),
      expires: {
        month: Number(paymentData.expiryMonth),
        year: Number(paymentData.expiryYear),
      },
    },
  };

  return payment;
};

const formatCartProducts = (dishes: Dish[]) => {
  const products: Omit<
    Dish,
    "name" | "picture" | "servingSize" | "description"
  >[] = [];
  dishes.map((dish) => {
    products.push({ id: dish.id, price: dish.price });
  });

  return products;
};

const formatDeliveryData = (shippingData: ShippingFormInputs) => {
  const deliveryData = {
    receiver: shippingData.receiverName,
    address: {
      description: shippingData.address,
      city: shippingData.city,
      zipCode: shippingData.cepShippingCode,
      number: Number(shippingData.number),
      complement: shippingData.addressDetails,
    },
  };
  return deliveryData;
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    addItem: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload);
      state.cartTotal += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<Dish>) => {
      const idToRemove = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      state.items = state.items.filter((item, key) => key != idToRemove);
      state.cartTotal -= action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.cartTotal = 0;
    },
    setShoppingStage: (state) => {
      state.cartStage = shoppingCartStage.CART;
    },
    setShippingStage: (state) => {
      state.cartStage = shoppingCartStage.SHIPPING;
    },
    setPaymentStage: (state) => {
      state.cartStage = shoppingCartStage.PAYMENT;
    },
    setSuccessStage: (state) => {
      state.cartStage = shoppingCartStage.SUCCESS;
    },
    setShippingInfo: (state, action: PayloadAction<ShippingFormInputs>) => {
      state.shippingData = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addAsyncThunk(paymentCheckout, {
      pending: (state) => {
        state.loadingPaymentCheckout = "pending";
      },
      fulfilled: (state, action) => {
        state.orderId = action.payload.orderId;
        state.cartStage = shoppingCartStage.SUCCESS;
      },
      rejected: (state, action) => {
        state.errorLoadingPaymentCheckout = action.error;
        console.error(action.error);
      },
      settled: (state, action) => {
        state.loadingPaymentCheckout = action.meta.requestStatus;
      },
    });
  },
});

export default shoppingCartSlice.reducer;
export const {
  addItem,
  closeCart,
  openCart,
  removeItem,
  setShippingStage,
  setPaymentStage,
  setShoppingStage,
  setSuccessStage,
  setShippingInfo,
  clearCart,
} = shoppingCartSlice.actions;
