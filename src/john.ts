import type { Person } from "schema-dts";

type SocialsCollection = Record<string, string>;

const Socials: SocialsCollection = {
	linkedin: "https://www.linkedin.com/in/johncarlomanuel",
	github: "https://github.com/johncmanuel",
	blog: "https://registers.johncarlomanuel.com/",
	x: "https://x.com/johncmanuel",
	twitter: "https://x.com/johncmanuel",
	devpost: "https://devpost.com/johncmanuel",
};

interface Book {
	title: string;
	link: string;
	description: string;
}

type BookCollection = Book[];

const Books: BookCollection = [
	{
		title: "20 Years",
		description: "A fantasy, adventure novel written and published in 2020.",
		link: "https://www.amazon.com/dp/B08JRJ1YV6",
	},
];

interface WebringItem {
	webring_name: string;
	// the name as it appears on the webring link
	name: string;
	link: string;
}

type WebringCollection = WebringItem[];

const Webring: WebringCollection = [
	{
		webring_name: "Skyline College Computer Science Club",
		name: "john",
		link: "https://raw.githubusercontent.com/Skyline-College-Computer-Science-Club/clubwebring/master/webring.json",
	},
];

// originally from https://github.com/johncmanuel/johncarlomanuel.com/blob/master/src/lib/public/self/self.json
// or if file doesn't exist in that link, it was from my website's repo

type SkillsCollection = string[];

const Skills: SkillsCollection = [
	"Python",
	"C++",
	"C#",
	"Deno",
	"ASP.NET",
	"TypeScript",
	"JavaScript",
	"HTML",
	"CSS",
	"SQL",
	// "x86-64 Assembly",
	"Next.js",
	"React",
	"Node.js",
	"FastAPI",
	"SvelteKit",
	"Git",
	"Docker",
];

interface ProjectItem {
	name: string;
	url: string;
	desc: string;
	// tags were already lowercase prior to making this change, so keep it consistent
	tags?: Lowercase<string>[];
	challenges?: string[];
	outcomes?: string[];
	img_url?: string;
}

type ProjectCollection = ProjectItem[];

const Projects: ProjectCollection = [
	{
		name: "Code Red",
		url: "https://github.com/johncmanuel/codered",
		desc: "A web-based, multiplayer icebreaker activity that emphasizes verbal communication and teamwork",
		tags: ["typescript", "svelte", "colyseus.js", "phaser.js"],
	},
	// {
	// 	name: "bettercs",
	// 	url: "https://github.com/johncmanuel/bettercs",
	// 	desc: "A gamified web application designed to help CS students learn concepts through highly interactive activities for typical weed-out classes such as Data Structures and Computer Organization. FullyHacks 2024.",
	// 	tags: ["next.js", "typescript", "react"],
	// 	challenges: [
	// 		"Creating a dynamic and interactive UI for the users",
	// 		"Learning new technology for implmentation",
	// 		"Writing and meeting clear and concise requirements",
	// 	],
	// 	outcomes: [
	// 		"Gained exposure to new technologies",
	// 		"Learned to adapt to new changes under time constraints",
	// 		"Became more comfortable with working under pressure",
	// 	],
	// 	img_url: "/assets/projects/bettercs.webp",
	// },
	{
		name: "isabot",
		url: "https://github.com/johncmanuel/isabot",
		desc: "A Discord interactions and webhook bot for AR Club, a World of Warcraft guild in US-Shandris/Bronzebeard.",
		tags: ["deno", "typescript", "discord"],
		challenges: [
			"Learning Discord webhooks and slash commands ",
			"Working with external APIs",
			"Rewriting from Python to Deno to solve serverless issues and simplify codebase",
		],
		outcomes: [
			"Delivered a more reliable and efficient Discord bot to the guild",
			"Improved code quality, optimization, and maintainability",
			"Learned more about Deno and its features",
		],
		img_url: "/assets/projects/isabot.webp",
	},
	{
		name: "RateMyLoo",
		url: "https://github.com/johncmanuel/RateMyLoo",
		desc: "A web application for users who want to share pictures of their bathrooms and rate others. CPSC 362 Project",
		img_url: "/assets/projects/ratemyloo.webp",
		tags: [
			"react",
			"firebase",
			"typescript",
			"nextjs",
			"tailwindcss",
			"playwright",
		],
		challenges: [
			"Learning Backend-as-a-Service (BaaS) via Firebase and end-to-end testing via Playwright",
			"Designing and implementing a user-friendly UI",
			"Producing the business logic for the application, given the new technologies",
		],
		outcomes: [
			"Delivered and presented a functional full-stack web application",
			"Became more comfortable with end-to-end testing",
			"Helped group members understand web development and the technologies behind it to enable them to contribute effectively",
		],
	},
	{
		name: "discordbot",
		url: "https://github.com/johncmanuel/discordbot",
		desc: "A customizable, dynamic Discord bot in Python that supports multple features.",
		img_url: "/assets/projects/discordbot.webp",
		tags: ["python", "firebase", "discord.py"],
		challenges: [
			"Learning to work with Discord's API for the first time",
			"Implementing a useful and user-friendly help command",
			"Refactoring the codebase to be more maintainable and easy to add new features",
		],
		outcomes: [
			"Delivered a Discord bot to friends that they found fun to use",
			"Learned more about bot development with Discord",
			"Learned more about asynchronous programming via Python",
		],
	},
	{
		name: "Xplora",
		url: "https://github.com/johncmanuel/Xplora",
		desc: "A remote-controlled and autonomous car designed for exploring unknown and risky environments. Part of the 2022 Winter Scholars Program at Skyline College.",
		img_url: "/assets/projects/xplora.webp",
		tags: ["arduino", "c++"],
		challenges: [
			"Designing and implementing the remote-control and autonomous aspects of the car in a team",
			"Learning to work with Arduino and its libraries, and various hardware components",
			"Adapting to new environments and constraints throughout the project lifecycle",
		],
		outcomes: [
			"Presented a working prototype of the car with team",
			"Gained exposure to hardware development and programming",
			"Learned more about conducting research and development in a team setting",
		],
	},
	{
		name: "UniPals",
		url: "https://github.com/johncmanuel/UniPals",
		desc: "A website that allows users, specifically university students, to connect with others and socialize. LA Hacks 2021.",
		img_url: "/assets/projects/unipals.webp",
		tags: ["react", "django", "semantic-ui"],
		challenges: [
			"Integrating a React application with a Django backend",
			"Working with a small team remotely to develop the project",
			"Learning best practices for web development and version control in a team project",
		],
		outcomes: [
			"Learned to work well with a team remotely",
			"Became more adept with frontend development",
			"Learned best practices for web development and version control",
		],
	},
];

type ExtendedPerson = Person & {
	projects?: ProjectCollection;
	skills?: SkillsCollection;
	webring?: WebringCollection;
	books?: BookCollection;
	socials?: SocialsCollection;
};

const john: ExtendedPerson = {
	"@type": "Person",
	"@id": "https://id.johncarlomanuel.com/",
	name: ["John Carlo Manuel", "johncmanuel", "John"],
	identifier: "johncmanuel",
	url: [
		"https://johncarlomanuel.com/",
		"https://fart.johncarlomanuel.com/",
		// "https://registers.johncarlomanuel.com/",
		Socials["blog"],
		"https://react.johncarlomanuel.com/",
	],
	sameAs: [
		Socials["blog"],
		Socials["x"],
		Socials["github"],
		Socials["linkedin"],
		Socials["devpost"],
	],
	email: "johncnmanuel@gmail.com",
	gender: "male",
	description: "A computer science major at CSUF and software engineer :)",
	affiliation: [
		{
			"@type": "Organization",
			"@id": "https://www.fullerton.edu/",
		},
		{
			"@type": "Organization",
			"@id": "https://acmcsuf.com/",
		},
		{
			"@type": "Organization",
			"@id": "http://id.fartlabs.org/",
		},
	],
	knowsLanguage: ["en"],
	projects: Projects,
	skills: Skills,
	webring: Webring,
	books: Books,
	socials: Socials,
};

export const graph = {
	"@context": "https://schema.org",
	"@graph": [john],
};
