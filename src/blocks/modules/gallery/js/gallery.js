// Сохраняем пропорции квадрата для гелереи

// (function scaleGallery(){
// 	const items = document.querySelectorAll('.gallery__item');
// 	let documentWidth;

// 	if (items) {
// 		window.addEventListener('DOMContentLoaded', resizeBlocks)
// 		window.addEventListener('resize', resizeBlocks)
// 	}

// 	function resizeBlocks() {
// 		documentWidth = document.defaultView.innerWidth;
// 		let i;
// 		let widthBlock;
// 		let heightBlock;

// 		for (i = 0; i < items.length; i++) {
// 			let block = items[i].querySelector('.gallery__link');

// 			if (documentWidth > 800) {
// 				block.style.height = block.offsetWidth + 'px';
// 			} else {
// 				block.style.height = '';
// 			}
// 		}
// 	}

// })();