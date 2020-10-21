# Hello

[Realar](https://github.com/betula/realar) shared state demonstration.

<img alt="demo video" src="./video.gif" width="300" height="150">

```javascript
const Hello = unit({
  name: "",             // Immutable state
  setName(name) {
    this.name = name;   // Update immutable state
  }
});

const Header = () => {
  const { name } = useShared(Hello);
  // ...
};
```

Try It on your computer :blush:

```bash
git clone git@github.com:realar-project/hello.git
cd hello
npm i
npm run start
# Open http://localhost:1234 in your browser
```

Enjoy!
