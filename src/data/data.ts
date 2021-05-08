import pic_1 from "./pictures/pic_1.jpg";
import pic_2 from "./pictures/pic_2.jpg";
import pic_3 from "./pictures/pic_3.jpg";
import pic_4 from "./pictures/pic_4.jpg";
import pic_5 from "./pictures/pic_5.jpg";
import pic_6 from "./pictures/pic_6.jpg";
import pic_7 from "./pictures/pic_7.jpg";
import pic_8 from "./pictures/pic_8.png";

export type dataElem = {
	label: string,
	value: string,
}

export type linkGroup = {
	title: string;
	links: dataElem[];
}

/*
──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█ BEEP BEEP
▄▄▄▌▐██▌█ GAY PORN DELIVERY
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀(@)▀
*/
export const links: linkGroup[] = [
	{
		title: "Absorb",
		links: [
			{
				label: "Youtube",
				value: "https://www.youtube.com"
			},
			{
				label: "Crunchyroll",
				value: "https://www.crunchyroll.com"
			}
		]
	},
	{
		title: "Reddit",
		links: [
			{
				label: "r/unixporn",
				value: "https://www.reddit.com/r/unixporn"
			},
			{
				label: "r/abruptchaos",
				value: "https://www.reddit.com/r/AbruptChaos"
			},
		]
	},
	{
		title: "Docker",
		links: [
			{
				label: "Searx",
				value: "http://localhost:5000"
			},
			{
				label: "Portainer",
				value: "http://localhost:9000"
			},
			{
				label: "CyberChef",
				value: "localhost:6969"
			}
		]
	},
	{
		title: "Music",
		links: [
			{
				label: "Car Playlist",
				value: "https://www.youtube.com/playlist?list=PLUFq4veSOMyMS-DHRJCxYanihDp2gslGI",
			}
		]
	},
]

export const images: dataElem[] = [
	{ label: "pic_1", value: pic_1 },
	{ label: "pic_2", value: pic_2 },
	{ label: "pic_3", value: pic_3 },
	{ label: "pic_4", value: pic_4 },
	{ label: "pic_5", value: pic_5 },
	{ label: "pic_6", value: pic_6 },
	{ label: "pic_7", value: pic_7 },
	{ label: "pic_8", value: pic_8 },
];

export const searchEngines: dataElem[] = [
	{
		label: "Searx",
		value: "https://duckduckgo.com"
	},
];

export type FastForwards = {
	[key: string]: string,
}

export type Search = {
	engine: string,
	fastForward: FastForwards,
}

export const searchSettings: Search = {
	engine: searchEngines[0].value,
	fastForward: {
		"deepl": "https://deepl.com/",
		"maps": "https://google.de/maps/",
		"reddit": "https://reddit.com/",
		"github": "https://github.com/",
		"gitlab": "https://gitlab.com/",
		"youtube": "https://youtube.com/",
	}
}

export type colorsType = {
	[key: string]: string
	"--bg-color": string,
	"--default-color": string,
	"--accent-color": string,
	"--accent-color2": string,
}

export type Theme = {
	name: string,
	image: string,
	colors: colorsType,
};

export const themes: Theme[] = [
	{
		name: "Oneshot",
		image: "https://static.wikia.nocookie.net/omniversal-battlefield/images/8/82/Niko_and_Rue.gif/revision/latest/scale-to-width-down/640?cb=20190624054404",
		colors: {
			"--bg-color": "#220a2f",
			"--default-color": "#cd0e5b",
			"--accent-color": "#660a4b",
			"--accent-color2": "#f6177b"
		}
	},
	{
		name: "Kitties",
		image: "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
		colors: {
			"--bg-color": "#00001E",
			"--default-color": "#01F1FA",
			"--accent-color": "#9632C8",
			"--accent-color2": "#C8789F"
		}
	},
	{
		name: "DeathAndMilk",
		image: pic_1,
		colors: {
			"--bg-color": "#2E2E2E",
			"--default-color": "#E6E6E6",
			"--accent-color": "#FFB4E6",
			"--accent-color2": "#B4FFE6",
		},
	},
	{
		name: "Pop!OS",
		image: "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
		colors: {
			"--bg-color": "#333136",
			"--default-color": "#2BC5EB",
			"--accent-color": "#FCD307",
			"--accent-color2": "#2BC5EB",
		},
	},
	{
		name: "Dark Souls",
		image: "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
		colors: {
			"--bg-color": "#32323C",
			"--default-color": "#A0A08C",
			"--accent-color": "#9A6650",
			"--accent-color2": "#461E28",
		},
	},
	{
		name: "S.E.Lain",
		image: "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
		colors: {
			"--bg-color": "#0a1a25",
			"--default-color": "#a6b7ab",
			"--accent-color": "#94656b",
			"--accent-color2": "#57182e"
		}
	},
	{
		name: "pretty chill",
		image: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
		colors: {
			"--bg-color": "#397d76",
			"--default-color": "#f1daba",
			"--accent-color": "#c5bdb5",
			"--accent-color2": "#93a662"
		}
	}
]
