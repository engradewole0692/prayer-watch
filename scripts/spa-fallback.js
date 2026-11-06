import { copyFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
copyFileSync(join(root, "dist", "index.html"), join(root, "dist", "404.html"))
console.log("Created dist/404.html for hosts that serve it on unknown paths.")
