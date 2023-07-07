import { useFormContext } from "react-hook-form";
import { InputContainerStyle } from "./styles";
import { InputHTMLAttributes } from "react";

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  isNumber?: boolean;
}

export function InputContainer({
  name,
  placeholder,
  isNumber = false,
  ...rest
}: InputContainerProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputContainerStyle>
      <input
        id={name}
        placeholder={placeholder}
        {...rest}
        {...(isNumber
          ? register(name, { valueAsNumber: true })
          : register(name))}
      />
      <span>
        {!!errors[name] && isNumber
          ? "Digite um número"
          : (errors[name]?.message as string)}
      </span>
    </InputContainerStyle>
  );
}
