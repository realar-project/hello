import React from "react";
import { prop, shared } from "realar";

class Hello {
  @prop name = "";       // Init immutable state

  setName = (name) => {
    this.name = name;   // Update immutable state
  }
};

const sharedHello = () => shared(Hello);

const Header = () => {
  const { name } = sharedHello();
  return (
    <header>
      Hello {name || "there"}!
    </header>
  )
};

const Main = () => {
  const { name, setName } = sharedHello();
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
