import App from './App.svelte';

const app: App = new App({
	target: document.getElementById('app'),
	// hydrate: true,
	props: { 
		// no props
	 }
});

export default app;