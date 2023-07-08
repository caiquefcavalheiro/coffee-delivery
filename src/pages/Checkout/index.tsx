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
  zipCode: zod
    .string()
    .min(8, "Digite os 8 números do CEP")
    .max(8, "Digite os 8 números do CEP"),
  street: zod.string().nonempty("Campo obrigatório"),
  number: zod.number().min(1, "Digite um número").default(0),
  complement: zod.string().optional(),
  district: zod.string().nonempty("Campo obrigatório"),
  city: zod.string().nonempty("Campo obrigatório"),
  state: zod.string().min(1, "Obrigatório").max(2, "Máximo 2 caracteres"),
  paymentMethod: zod.enum(["credit", "debit", "money"]),
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
    localStorage.setItem(
      "@coffeeDelivery:address-info.1.0.0",
      JSON.stringify(data)
    );

    finalizeOrder();
    reset();
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
