<script lang="ts">
	import { usePointerlock } from "$lib"

	const { pointerlock, enter, exit, toggle } = usePointerlock()

	function onKeydown(e: KeyboardEvent) {
		if (e.key == "p") exit()
	}
</script>

<svelte:head>
	<title>@terrygonguet/svelte-pointerlock demo</title>
</svelte:head>

<svelte:window on:keydown={onKeydown} />

<main use:pointerlock>
	<h1>
		<a href="https://www.npmjs.com/package/@terrygonguet/svelte-pointerlock"
			>@terrygonguet/svelte-pointerlock</a
		> demo
	</h1>

	<button on:click={enter}>Enter pointer lock</button>
	<button on:click={toggle}>Toggle pointer lock</button>
	<p>Press the P key to exit pointer lock</p>
</main>

<style>
	main {
		background-color: white;
	}
</style>
