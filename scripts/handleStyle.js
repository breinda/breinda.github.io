'use strict'

const THEME_KEY = 'theme'
const DARK_MODE_VALUE = 'dark-mode'
const LIGHT_MODE_VALUE = 'light-mode'
const DARK_MODE_CLASS = 'dark-mode'

const styleswitcher = document.getElementById('style-switcher')

if (!localStorage.getItem(THEME_KEY)) {
	// no theme defined => will set theme as LIGHT (default)
	populateStorage(LIGHT_MODE_VALUE)
}
applyStylesAccordingToTheme()

// populate local storage with theme value, according to `mode` parameter
function populateStorage(mode) {
	// light mode is the default
	// any unexpected value for mode is converted to light mode
	if (mode !== LIGHT_MODE_VALUE && mode !== DARK_MODE_VALUE) {
		mode = LIGHT_MODE_VALUE
	}

	const shouldToggleDarkMode = mode === DARK_MODE_VALUE

	if (shouldToggleDarkMode) {
		localStorage.setItem(THEME_KEY, DARK_MODE_VALUE)
	} else {
		localStorage.setItem(THEME_KEY, LIGHT_MODE_VALUE)
	}
}

function applyStylesAccordingToTheme() {
	const DISPLAY_NONE_STR = 'none'
	const DISPLAY_BLOCK_STR = 'block'

	const theme = localStorage.getItem(THEME_KEY)

	const body = document.body

	const moonSvg = document.getElementById('moon-svg')
	const sunSvg = document.getElementById('sun-svg')

	if (theme === LIGHT_MODE_VALUE) {
		// change icon to MOON
		sunSvg.style.display = DISPLAY_NONE_STR
		moonSvg.style.display = DISPLAY_BLOCK_STR

		// apply light mode styling
		body.classList.remove(DARK_MODE_CLASS)
	} else {
		// change icon to SUN
		sunSvg.style.display = DISPLAY_BLOCK_STR
		moonSvg.style.display = DISPLAY_NONE_STR

		// apply dark mode styling
		body.classList.add(DARK_MODE_CLASS)
	}
}

function switchBetweenDarkAndLightThemes() {
	const isCurrentlyDarkMode = localStorage.getItem(THEME_KEY) === DARK_MODE_VALUE

	if (isCurrentlyDarkMode) {
		populateStorage(LIGHT_MODE_VALUE)
	} else {
		populateStorage(DARK_MODE_VALUE)
	}

	applyStylesAccordingToTheme()
}

styleswitcher.onclick = switchBetweenDarkAndLightThemes
