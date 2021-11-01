import { default as Components } from "./components";
import { default as Shared } from "./shared";
import { default as PubSub } from "./pubSub";

/* webpack-strip-code-block:start */

// global intellisense for the same API that webpack exposes globally
const clientApp = {
    Components: Components,
    Shared: Shared,
    PubSub: PubSub
}

globalThis.ClientApp = clientApp;

/* webpack-strip-code-block:end */

export { Components, Shared, PubSub }
