# Hello

[Realar](https://github.com/betula/realar) shared state demonstration.

[<img alt="demo video" src="./preview.gif" width="208" height="108">](./src/app.js)

```javascript
import React from "react";
import { prop, shared } from "realar";

class Hello {
  // Init immutable state
  @prop name = "";

  // Update immutable state
  setName = (name: string) => {
    this.name = name;
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
```

[Edit wrapped version on CodeSandbox](https://codesandbox.io/s/realar-hello-example-w5b33?file=/src/App.tsx).

Or try It on your computer :blush:

```bash
git clone git@github.com:realar-project/hello.git
cd hello
npm i
npm run start
# Open http://localhost:1234 in your browser
```

Enjoy!
