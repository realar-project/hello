import React from "react";
import { box, observe, shared } from "realar";

class Hello {
  @box name = "";       // Init immutable state
  setName = (name: string) => {
    this.name = name;   // Update immutable state
  }
};

const sharedHello = () => shared(Hello);

const Header = observe(() => {
  const { name } = sharedHello();
  return (
    <header>
      Hello {name || "there"}!
    </header>
  )
});

const Main = observe(() => {
  const { name, setName } = sharedHello();
  return (
    <main>
      <input
        placeholder="Your name"
        value={name}
        onChange={(ev) => setName(ev.target.value)} />
    </main>
  )
});

export const App = () => (
  <>
    <Header />
    <Main />
  </>
);
