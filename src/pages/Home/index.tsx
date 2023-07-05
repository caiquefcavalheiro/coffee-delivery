import { CoffeeCard } from "./components/CoffeeContainer";
import { HomeIntro } from "./components/HomeIntro";

import { CoffeeList } from "./styles";

export function Home() {
  return (
    <div>
      <HomeIntro />
      <div>
        <h3>Nossos cafés</h3>
        <CoffeeList>
          <CoffeeCard />
        </CoffeeList>
      </div>
    </div>
  );
}
