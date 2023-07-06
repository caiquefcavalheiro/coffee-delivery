import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee, coffees } from "../database/coffees";

interface CoffeeContextType {
  userCart: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffeeFromCart: (coffee: Coffee) => void;
  finalizeOrder: () => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [userCart, setUserCart] = useState<Coffee[]>(() => {
    const cartStorage = localStorage.getItem(
      "@coffeeDelivery:coffees-state.1.0.0"
    );
    if (cartStorage) {
      return JSON.parse(cartStorage) as Coffee[];
    }

    return coffees;
  });

  useEffect(() => {
    localStorage.setItem(
      "@coffeeDelivery:coffees-state.1.0.0",
      JSON.stringify(userCart)
    );
  }, [userCart]);

  function addCoffeeToCart(newCoffee: Coffee) {
    const findCoffee = userCart.find((coffee) => coffee.id === newCoffee.id);
    if (findCoffee) {
      setUserCart((state) =>
        state.map((coffee) => {
          if (coffee.id === newCoffee.id) {
            coffee.quantity++;
            return coffee;
          }
          return coffee;
        })
      );
    } else {
      setUserCart((state) => [...state, newCoffee]);
    }
  }

  function removeCoffeeFromCart(removeCoffee: Coffee) {
    const findCoffee = userCart.find((coffee) => coffee.id === removeCoffee.id);
    if (findCoffee) {
      if (findCoffee.quantity < 1) {
        return;
      } else {
        setUserCart((state) =>
          state.map((coffee) => {
            if (coffee.id === removeCoffee.id) {
              coffee.quantity--;
              return coffee;
            }
            return coffee;
          })
        );
      }
    }
  }

  function finalizeOrder() {
    setUserCart([]);
    localStorage.removeItem("@coffeeDelivery:coffees-state.1.0.0");
  }

  return (
    <CoffeeContext.Provider
      value={{
        userCart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        finalizeOrder,
      }}>
      {children}
    </CoffeeContext.Provider>
  );
}
