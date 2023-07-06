import { CoffeeCard } from "./components/CoffeeCard";
import { HomeIntro } from "./components/HomeIntro";
import { CoffeeList, CoffeeMain } from "./styles";

import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

export function Home() {
  const { userCart } = useContext(CoffeeContext);

  return (
    <div>
      <HomeIntro />
      <CoffeeMain>
        <h3>Nossos cafés</h3>
        <CoffeeList>
          {userCart.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </CoffeeList>
      </CoffeeMain>
    </div>
  );
}
