import { CoffeeCard } from "./components/CoffeeCard";
import { HomeIntro } from "./components/HomeIntro";
import { CoffeeList, CoffeeMain } from "./styles";

import { coffees } from "../../database/coffees";

export function Home() {
  return (
    <div>
      <HomeIntro />
      <CoffeeMain>
        <h3>Nossos cafés</h3>
        <CoffeeList>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </CoffeeList>
      </CoffeeMain>
    </div>
  );
}
