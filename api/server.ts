// This is using Oak instead of Express but does the same thing, as should be apparent

import { Application } from "https://deno.land/x/oak/mod.ts"
import router from "./routes.ts"

const port = 5000

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Server running on port ${port}`)

await app.listen({ port })
