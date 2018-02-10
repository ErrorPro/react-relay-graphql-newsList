# GraphQL Relay news feed.

### This is a simple boilerplate which uses GraphQL, relay-modern, webpack, react libs.

I didn't use any boilerplate or react create app lib. All I've done myself.

Of course I didn't spent time to manage a few things:

Build:
- Split prod and dev builds into separated files.
- Add code-splitting(webpack 2), common-chunks plugin.
- Node works via babel-node, need to use webpack to build node.js as well(or use node v.9.0 or above)
- Run all webservers using proxy(don't need to open another terminal to run server side or client side).

Node:
- Install nodemon for dev mode.

Front-end:
- React-router(relay)
- Add tests(jest or enzyme)

How to install and run the project:
1. `npm install`
2. `npm run relay`
3. `npm start`
4. In another terminal tab: `npm run server`