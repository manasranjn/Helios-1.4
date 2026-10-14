import React, { createContext } from "react";
import AllFoods from "./Components/AllFoods";

export const example = createContext();

const App = () => {
  return (
    <example.Provider value={{ name: "Biriyani", price: 150, rating: 4.5 }}>
      <AllFoods />
    </example.Provider>
  );
};

export default App;
