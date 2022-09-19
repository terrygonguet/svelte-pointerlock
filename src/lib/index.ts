export function usePointerlock() {
	let element: HTMLElement
	return {
		pointerlock(el: HTMLElement) {
			element = el
			return {
				destroy() {
					if (document.pointerLockElement) document.exitPointerLock()
				},
			}
		},
		enter() {
			if (pointerlockEnabled() && element) return element.requestPointerLock()
		},
		exit() {
			if (pointerlockEnabled()) return document.exitPointerLock()
		},
		toggle() {
			if (!pointerlockEnabled()) return
			if (!element) return
			if (!document.pointerLockElement) return element.requestPointerLock()
			else return document.exitPointerLock()
		},
	}
}

function pointerlockEnabled() {
	return "pointerLockElement" in document
}
