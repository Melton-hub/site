
const SwiperFirst = new Swiper(".swiper-first", {
	centeredSlides: true,
	slidesPerView: "auto",
	spaceBetween: 0,
	speed: 600,
	autoplay: {
			delay: 5000,
	},
	loop: true,

	navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
	},

	pagination: {
			el: ".swiper-pagination",
			clickable: true,
	}
});

SwiperFirst.on("transitionEnd", function () {
	const videos = document.querySelectorAll(".main__slider__media video");
	videos.forEach((el) => {
		el.pause();
	});
	PlayButtonFirst.forEach((el) => {
		el.style.display = "block";
	});
});

const SwiperSecond = new Swiper(".swiper-second", {
	centeredSlides: true,
	slidesPerView: "auto",
	spaceBetween: 100,
	speed: 1000,
	autoplay: {
			delay: 5000,
	},
	loop: true,
	pagination: {
			el: ".swiper-pagination",
			clickable: true,
	}
});




// Burger menu

const BurgerBtn = document.querySelector(".burger");
const BurgerClose = document.querySelector(".menu__close");
const Menu = document.querySelector(".menu");

BurgerBtn.addEventListener("click", () => {
	Menu.classList.add("menu__open");
});

BurgerClose.addEventListener("click", () => {
	Menu.classList.remove("menu__open");
});

// Play button

const PlayButtonFirst = document.querySelectorAll(".slider__play");

PlayButtonFirst.forEach((el) => {
	el.addEventListener("click", (e) => {
		const video = e.currentTarget.closest(".main__slider__media").querySelector("video");
		video.play();
		e.currentTarget.style.display = "none";
		setTimeout(() => {
			vid.volume = 1;
		}, 1000);
	});
});

