
import type { Person } from "schema-dts"

const john: Person = {
  "@type": "Person",
  "@id": "https://id.johncarlomanuel.com/",
  name: ["John Carlo Manuel", "johncmanuel"],
  identifier: "johncmanuel",
  url: "https://www.johncarlomanuel.com",
  sameAs: ["https://github.com/johncmanuel", "https://x.com/johncmanuel", "https://www.linkedin.com/in/johncarlomanuel"],
  email: "mail@johncarlomanuel.com",
  gender: "male",
  description: "A computer science major and software engineer :)",
  affiliation: ["California State University, Fullerton", "Association for Computing Machinery, CSUF", "FartLabs"],
  knowsLanguage: ["en"]
}

export const graph = {
  "@context": "https://schema.org",
  "@graph": [john]
}
