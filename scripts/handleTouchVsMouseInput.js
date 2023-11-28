'use strict'

/**
 * This is used to detect touch vs. mouse inputs/devices.
 *
 * Basically, this will enable hover effects whenever a mouse cursor is moved,
 * and disable hover effects whenever a touch is detected.
 *
 * @see https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices?noredirect=1&lq=1
 */
function handleTouchVsMouseInput() {
	const WITH_MOUSE_INPUT_CLASS = 'with-mouse-input'

	const TOUCH_START_EVENT = 'touchstart'
	const MOUSE_MOVE_EVENT = 'mousemove'

	/**
	 * Used for ignoring emulated `mousemove` events
	 * that are fired after `touchstart` events.
	 *
	 * Since they're indistinguishable from real events,
	 * we use the fact that they're fired a few milliseconds
	 * after `touchstart` to filter them.
	 */
	let lastTouchTime = 0

	function updateLastTouchTime() {
		lastTouchTime = new Date()
	}

	function disableMouseRequiredFunctionality() {
		document.body.classList.remove(WITH_MOUSE_INPUT_CLASS)
	}

	function determineIfMouseInput() {
		if (new Date() - lastTouchTime < 500) return
		document.body.classList.add(WITH_MOUSE_INPUT_CLASS)
	}

	document.addEventListener(TOUCH_START_EVENT, updateLastTouchTime, true)
	document.addEventListener(TOUCH_START_EVENT, disableMouseRequiredFunctionality, true)
	document.addEventListener(MOUSE_MOVE_EVENT, determineIfMouseInput, true)

	determineIfMouseInput()
}

handleTouchVsMouseInput()
