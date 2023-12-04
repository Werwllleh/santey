document.addEventListener("DOMContentLoaded", (e) => {

	const maxLength = 490;
	function truncateText(text) {
		if (text.length > maxLength) {
			let cutLength = text.length - maxLength;
			return text.slice(0, - cutLength) + '<span class="text-more-dots text-m">...</span>' + ' ' + '<a class="text-more text-m">Читать целиком</a>';
		} else {
			return text;
		}
	}

	const ordersTexts = document.querySelectorAll('.section-orders__slide-text');

	ordersTexts.forEach((ordersText) => {
		ordersText.innerHTML = truncateText(ordersText.innerHTML);
	})
})
