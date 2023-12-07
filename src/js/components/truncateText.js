document.addEventListener("DOMContentLoaded", (e) => {

	const ordersTexts = document.querySelectorAll('.section-orders__slide-text');
	const readMoreButtons = document.querySelectorAll('.text-more');

	const maxLength = 490;
	function truncateText(text) {
		if (text.length > maxLength) {
			let cutLength = text.length - maxLength;
			// console.log(cutLength)
			// console.log(text.slice(0, - cutLength))
			return text.slice(0, - cutLength) + '<span class="text-more-dots text-m">...<a class="text-more text-m">Читать целиком</a></span>';
		} else {
			return text;
		}
	}

	if (ordersTexts.length) {
		ordersTexts.forEach((ordersText) => {
			const originalText = ordersText.innerHTML;

			ordersText.innerHTML = truncateText(ordersText.innerHTML);

			if (ordersText.closest('.section-orders__slide-text').querySelector('.text-more')) {
				const readMore = ordersText.closest('.section-orders__slide-text').querySelector('.text-more');

				readMore.addEventListener('click', () => {
					ordersText.innerHTML = originalText;
				})
			}
		})
	}

})
