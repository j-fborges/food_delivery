import { InputGroup, FormContainer } from "../../app/style";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHookFormMask } from "use-mask-input";
import {
  setPaymentStage,
  setShippingInfo,
  setShoppingStage,
} from "../../features/shoppingCart/shoppingCartSlice";
import { RootReducer } from "../../app/store";

export type ShippingFormInputs = {
  receiverName: string;
  address: string;
  number: string;
  city: string;
  cepShippingCode: string;
  addressDetails: string;
};

function ShippingAddressForm() {
  const dispatch = useDispatch();
  const shippingData = useSelector(
    (state: RootReducer) => state.shoppingCart.shippingData,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    defaultValues: {
      receiverName: shippingData.receiverName,
      address: shippingData.address,
      number: shippingData.number,
      city: shippingData.city,
      cepShippingCode: shippingData.cepShippingCode,
      addressDetails: shippingData.addressDetails,
    },
  });
  const onSubmit: SubmitHandler<ShippingFormInputs> = (data) => {
    dispatch(setShippingInfo(data));
    dispatch(setPaymentStage());
  };
  const registerWithMask = useHookFormMask(register);

  return (
    <FormContainer>
      <h4>Entrega</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <label htmlFor="receiverName">Quem irá receber</label>
          <input
            type="text"
            id="receiverName"
            {...register("receiverName", {
              required: "Campo de Nome do Destinatário é obrigatório",
              minLength: {
                value: 3,
                message: "O Campo precisa conter pelomenos 3 caracteres",
              },
            })}
          />
          <span>{errors.receiverName?.message}</span>
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            {...register("address", {
              required: "Campo de Endereço é obrigatório",
              minLength: {
                value: 3,
                message: "O Campo precisa conter pelomenos 3 caracteres",
              },
            })}
            id="address"
          />
          <span>{errors.address?.message}</span>
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            {...register("city", {
              required: "Campo de Cidade é obrigatório",
              minLength: {
                value: 3,
                message: "O Campo precisa conter pelomenos 3 caracteres",
              },
            })}
            id="city"
          />
          <span>{errors.city?.message}</span>
        </InputGroup>
        <div className="input-row">
          <InputGroup>
            <label htmlFor="cepShippingCode">CEP</label>
            <input
              type="text"
              {...registerWithMask("cepShippingCode", ["99999-999"], {
                required: "Campo de CEP é Obrigatório",
                maxLength: {
                  value: 9,
                  message: "O CEP precisa conter 8 dígitos",
                },
                minLength: {
                  value: 9,
                  message: "O CEP precisa conter 8 dígitos",
                },
                jitMasking: true,
                validate: (input) => {
                  return input.length == 9 ? true : false;
                },
              })}
              id="cepShippingCode"
            />
            <span>{errors.cepShippingCode?.message}</span>
          </InputGroup>
          <InputGroup>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              {...register("number", {
                required: "Campo de Número é obrigatório",
                minLength: {
                  value: 2,
                  message: "O número precisa ter dois digitos",
                },
              })}
              id="number"
            />
            <span>{errors.number?.message}</span>
          </InputGroup>
        </div>
        <InputGroup>
          <label htmlFor="addressDetails">Endereço</label>
          <input
            type="text"
            {...register("addressDetails")}
            id="addressDetails"
          />
          <span>{errors.addressDetails?.message}</span>
        </InputGroup>
        <div className="form-buttons">
          <button type="submit">Continuar com o pagamento</button>
          <button
            type="button"
            onClick={() => {
              dispatch(setShoppingStage());
            }}
          >
            Voltar para o carrinho
          </button>
        </div>
      </form>
    </FormContainer>
  );
}

export default ShippingAddressForm;
