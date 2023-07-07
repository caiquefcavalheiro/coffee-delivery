import { CheckoutMainContainer } from "./styles";

import { FormMainContainer } from "./FormMainContainer";
import { CartInfoContainer } from "./CartInfoContainer";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

const purchaseFormSchema = zod.object({
  zipCode: zod.string().min(8, "Digite os 8 digitos do CEP").max(8),
  street: zod.string(),
  number: zod.number(),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.string(),
});

export type purchaseFormData = zod.infer<typeof purchaseFormSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { cartTotal, finalizeOrder } = useContext(CoffeeContext);

  const purchaseForm = useForm<purchaseFormData>({
    resolver: zodResolver(purchaseFormSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = purchaseForm;

  function handlePurchase(data: purchaseFormData) {
    finalizeOrder();
    // reset();
    navigate("/success");
  }

  useEffect(() => {
    const validateErrors = Object.keys(errors).length > 0;
    if (validateErrors) {
      toast.error(
        "Preencha todos os campos do formulário e selecione um método de pagamento"
      );
    }
  }, [errors]);

  useEffect(() => {
    if (cartTotal < 1) {
      navigate("/");
    }
  }, [cartTotal, navigate]);

  return (
    <FormProvider {...purchaseForm}>
      <CheckoutMainContainer onSubmit={handleSubmit(handlePurchase)}>
        <FormMainContainer />
        <CartInfoContainer />
      </CheckoutMainContainer>
    </FormProvider>
  );
}
