import './vendor';
import './helpers';
import './sliders';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';

import './components/form';
import './components/header';
import './components/footer';
import './components/truncateText';
import './components/modals';





import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";



ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

// header.init();
lazyLoading.init();


lightGallery(document.getElementById('document'), {
	plugins: [lgZoom, lgThumbnail],
	licenseKey: 'your_license_key',
	download: false,
	zoom: false,
	speed: 300,
});


export const getScrollbarWidth = () => {

	// Creating invisible container
	const outer = document.createElement('div');
	outer.style.visibility = 'hidden';
	outer.style.overflow = 'scroll'; // forcing scrollbar to appear
	outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
	document.body.appendChild(outer);

	// Creating inner element and placing it in the container
	const inner = document.createElement('div');
	outer.appendChild(inner);

	// Calculating difference between container's full width and the child width
	const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

	// Removing temporary elements from the DOM
	outer.parentNode.removeChild(outer);

	return scrollbarWidth;

}
