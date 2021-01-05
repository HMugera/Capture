//Import Images
import wed1 from "./img/wed1.jpg";
import wed2 from "./img/wed2.jpg";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
	return [
		{
			title: "Weddings",
			mainImg: wed1,
			secondaryImg: wed2,
			url: "/work/weddings",
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "Birthdays",
			mainImg: goodtimes,
			url: "/work/birthdays",
			secondaryImg: goodtimes2,
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "Graduations",
			mainImg: wed1,
			url: "/work/the-racer",
			secondaryImg: theracer2,
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "Photoshoots",
			mainImg: theracer,
			url: "/work/the-racer",
			secondaryImg: theracer2,
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
	];
};
