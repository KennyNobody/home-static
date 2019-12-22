import "%modules%/header/header";
import "%modules%/footer/footer"

import "%modules%/peppermint/peppermint"

import PhotoSwipe from "%modules%/gallery/js/photoswipe.min"
import PhotoSwipeUI_Default from "%modules%/gallery/js/photoswipe-ui-default"

var openPhotoSwipe = function() {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	var items = [
	{
		src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
		w: 964,
		h: 1024,
		title: 'Image Caption'
	},
	{
		src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
		w: 1024,
		h: 683,
		title: 'Image Caption'
	}
	];

	var options = {       
		history: true,
		focus: false,

		showAnimationDuration: 0,
		hideAnimationDuration: 0

	};

	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

document.getElementById('btn').onclick = openPhotoSwipe;