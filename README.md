# @terrygonguet/svelte-pointerlock

A very simple [Svelte](https://svelte.dev/) [action](https://svelte.dev/docs#template-syntax-element-directives-use-action) to take over [pointer management](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API).

## Installation

```
npm install @terrygonguet/svelte-pointerlock
```

## Example

```html
<script lang="ts">
	import { usePointerlock } from "$lib"

	const { pointerlock, enter, exit, toggle } = usePointerlock()

	function onClick() {
		toggle()
	}
</script>

<main use:pointerlock on:click="{onClick}">
	<p>Click to toggle pointer lock</p>
</main>
```

## Usage

Call the `usePointerlock` function in your component and `use:` the `pointerlock` property of the returned object on the element you want to lock the pointer to. The `enter`, `exit` and `toggle` functions do what their names imply and return nothing, same as the underlying [Pointerlock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API).

## API

### `function usePointerlock`

```typescript
function usePointerlock(): {
	pointerlock: Action
	enter(): void
	exit(): void
	toggle(): void
}
```
