import App from './App.svelte';
import store from "./store";

const app = new App({
	target: document.body,
	// prop: store
});

export default app;