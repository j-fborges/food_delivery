import { useSelector } from "react-redux";
import { FormContainer, InputGroup } from "../../app/style";
import { RootReducer, useAppDispatch } from "../../app/store";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  clearCart,
  paymentCheckout,
  setShippingStage,
  shoppingCartStage,
} from "../../features/shoppingCart/shoppingCartSlice";
import { useHookFormMask } from "use-mask-input";
import { SuspenseContainer } from "../../app/style";
import OrderConfirmation from "../OrderConfirmation";
import { formatPrice } from "../DishModal";

export type PaymentFormInputs = {
  cardHolderName: string;
  cardNumber: number;
  securityCode: number;
  expiryMonth: number;
  expiryYear: number;
};

function PaymentForm() {
  const dispatch = useAppDispatch();
  const inSuccessStage = useSelector(
    (state: RootReducer) =>
      state.shoppingCart.cartStage == shoppingCartStage.SUCCESS,
  );
  const shippingData = useSelector(
    (state: RootReducer) => state.shoppingCart.shippingData,
  );
  const cartProducts = useSelector(
    (state: RootReducer) => state.shoppingCart.items,
  );
  const checkoutLoading = useSelector(
    (state: RootReducer) => state.shoppingCart.loadingPaymentCheckout,
  );
  const cartTotal = useSelector(
    (state: RootReducer) => state.shoppingCart.cartTotal,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    defaultValues: {
      cardHolderName: "",
      cardNumber: undefined,
      securityCode: undefined,
      expiryMonth: undefined,
      expiryYear: undefined,
    },
  });

  const onSubmit: SubmitHandler<PaymentFormInputs> = (data) => {
    dispatch(
      paymentCheckout({ shippingData, cartProducts, paymentData: data }),
    );
    dispatch(clearCart());
  };

  const registerWithMask = useHookFormMask(register);

  if (checkoutLoading == "pending") {
    return (
      <SuspenseContainer>
        <span>CARREGANDO PAGAMENTO</span>
      </SuspenseContainer>
    );
  }

  if (checkoutLoading == "fulfilled" && inSuccessStage) {
    return <OrderConfirmation />;
  }

  return (
    <FormContainer>
      <h4>{`Pagamento - Valor a pagar ${formatPrice(cartTotal)}`}</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <label htmlFor="cardHolderName">Nome no cartão</label>
          <input
            type="text"
            id="cardHolderName"
            {...register("cardHolderName", {
              required: "Campo de Nome no Cartão é obrigatório",
              minLength: {
                value: 3,
                message: "O Campo precisa conter pelomenos 3 caracteres",
              },
            })}
          />
          <span>{errors.cardHolderName?.message}</span>
        </InputGroup>
        <div className="input-row">
          <InputGroup style={{ width: "70%" }}>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              type="text"
              {...registerWithMask("cardNumber", ["9999-9999-9999-9999"], {
                required: "Campo de Número do cartão é Obrigatório",
                maxLength: {
                  value: 19,
                  message: "O Número do cartão precisa conter 16 dígitos",
                },
                minLength: {
                  value: 19,
                  message: "O Número do cartão precisa conter 16 dígitos",
                },
                jitMasking: true,
                validate: (input) => {
                  return input.length == 19 ? true : false;
                },
              })}
              id="cardNumber"
            />
            <span>{errors.cardNumber?.message}</span>
          </InputGroup>
          <InputGroup style={{ width: "30%" }}>
            <label htmlFor="securityCode">CVV</label>
            <input
              type="text"
              {...register("securityCode", {
                required: "Campo de CVV é Obrigatório",
                maxLength: {
                  value: 3,
                  message: "O CVV precisa conter 3 dígitos",
                },
                minLength: {
                  value: 3,
                  message: "O CVV precisa conter 3 dígitos",
                },
              })}
              id="securityCode"
            />
            <span>{errors.securityCode?.message}</span>
          </InputGroup>
        </div>
        <div className="input-row">
          <InputGroup>
            <label htmlFor="expiryMonth">Mês de Vencimento</label>
            <input
              type="text"
              {...register("expiryMonth", {
                required: "Campo de Mês de Vencimento é Obrigatório",
                maxLength: {
                  value: 2,
                  message: "O Mês de Vencimento precisa conter 2 dígitos",
                },
                minLength: {
                  value: 2,
                  message: "O Mês de Vencimento precisa conter 2 dígitos",
                },
                max: {
                  value: 12,
                  message: "O número não corresponde ao de um mês",
                },
              })}
              id="expiryMonth"
            />
            <span>{errors.expiryMonth?.message}</span>
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiryYear">Ano de Vencimento</label>
            <input
              type="text"
              {...register("expiryYear", {
                required: "Campo de Ano de Vencimento é Obrigatório",
                maxLength: {
                  value: 4,
                  message: "O Ano de Vencimento precisa conter 4 dígitos",
                },
                minLength: {
                  value: 4,
                  message: "O Ano de Vencimento precisa conter 4 dígitos",
                },
                min: {
                  value: new Date().getFullYear() - 1,
                  message: "O ano precisa ser maior que 2024",
                },
              })}
              id="expiryYear"
            />
            <span>{errors.expiryYear?.message}</span>
          </InputGroup>
        </div>
        <div className="form-buttons">
          <button type="submit">Finalizar pagamento</button>
          <button
            type="button"
            onClick={() => {
              dispatch(setShippingStage());
            }}
          >
            Voltar para a edição de endereço
          </button>
        </div>
      </form>
    </FormContainer>
  );
}

export default PaymentForm;
