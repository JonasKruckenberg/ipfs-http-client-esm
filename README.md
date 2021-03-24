# js-ipfs-client-esm 

> WARNING :warning: THIS PACKAGE IS NEITHER RELEASED NOR WORKING YET! <br>
> It is currently nothing more a playground for ideas, so feel free to open issue and submit PRs! <br>
> This project is also not meant to replace ipfs-http-client in any way, but rather serve as a basis for PRs and the like.

## Why ?

Earlier this year I started a little web project that'd use IPFS and with me being a real [vite](https://vitejs.dev) fan now, it was only natural to use it as my build-tool of choice, but boy was I wrong! <br>

It's important to remember that it's been only fairly recently that es-modules got widespread support (es-module support in nodejs is only stable since 15.x!) This hasn't been an issue historically though since you could always use buildtools like [webpack](https://webpack.js.org) or [browserify](https://browserify.org) that would make your commonjs/nodejs code work in the browser and everything was fine!

Once you start using buildtools like [rollup](https://rollupjs.org) or vite that much rather not touch commonjs modules at all it get's a bit tricky. They need some setting up to work correctly with all those commonjs dependencies and even then you might run into the odd dependency that expects nodejs apis to be available in the browser.

And besides that, there have been a couple cool new features added to javascript added so why not make use of them right?<br>
This is why I (in somewhat of a mad decision) decided to rewrite the whole ipfs-http-client!

The goals are quite simple:

1. ES-Module
    - **fully tree-shakeable!**
    - Smaller package size!

2. Use modern javascript
    - **Less dependencies!**
    - Faster code
    - Smaller packages size

3. A generic transport layer

    Uses the browsers fetch by default but could use all sorts of transports that conform to that API! (e.g. for electron)

4. Typescript
    - Fully typed APIs without the housekeeping

## License

[MIT © Jonas Kruckenberg.](./LICENSE)
