# Typescript Project

### Pros

- Community
- Libraries typings
- IDE integration
- Excerpt from email to [Jan Varwig](http://jan.varwig.org/2017/02/15/flow-vs-typescript.html):
  ```
  I would still very strongly advise to prefer Typescript over Flow, and especially, since you say you are starting a new codebase, use Typescript from the beginning. Adding types to an untyped project later is harder than using types from the start. I also recommend to use Typescripts strict mode. That makes you put in more work in providing the Typechecker with information, but will also give you better confidence and safety.

  [...] Our conversion project was very successful and we are not looking back.

  Typescript feels way way more mature than Flow especially if you consider using Visual Studio Code, which has an amazing editing experience for Typescript.
  ```

### Cons

- Compiling time
- MAIN ONE: Watcher sometimes takes some time to catch a change
- Not Javascript. Wait for Typescript to implement ES Features
- Harder Setup

### Notes

Enforce read only properties:
```Javascript
type Point = {
    readonly x: number;
    readonly y: number;
};
```

[Types vs Interfaces](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)
[Types vs Interfaces](https://stackoverflow.com/questions/36782896/in-typescript-what-is-the-difference-between-type-and-interface)
