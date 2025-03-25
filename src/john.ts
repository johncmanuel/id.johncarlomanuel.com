import type { Person } from "schema-dts";

const john: Person = {
	"@type": "Person",
	"@id": "https://id.johncarlomanuel.com/",
	name: ["John Carlo Manuel", "johncmanuel", "John"],
	identifier: "johncmanuel",
	url: [
		"https://johncarlomanuel.com/",
		"https://fart.johncarlomanuel.com/",
		"https://registers.johncarlomanuel.com/",
		"https://react.johncarlomanuel.com/",
	],
	sameAs: [
		"https://github.com/johncmanuel",
		"https://x.com/johncmanuel",
		"https://www.linkedin.com/in/johncarlomanuel",
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
};

export const graph = {
	"@context": "https://schema.org",
	"@graph": [john],
};
