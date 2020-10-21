import React from "react";
import { unit, useShared } from "realar";

const Hello = unit({
  name: "",             // Immutable state
  setName(name) {
    this.name = name;   // Update immutable state
  }
});

const Header = () => {
  const { name } = useShared(Hello);
  return (
    <header>
      Hello {name || "there"}!
    </header>
  )
};

const Main = () => {
  const { name, setName } = useShared(Hello);
  return (
    <main>
      <input
        placeholder="Your name"
        value={name}
        onChange={(ev) => setName(ev.target.value)} />
    </main>
  )
};

export const App = () => (
  <>
    <Header />
    <Main />
  </>
);
