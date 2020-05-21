import { serve } from "https://deno.land/std/http/server.ts"

const s = serve({ port: 8000 })

console.log("Server running at http://localhost:8000")

for await (const req of s) {
    req.respond({body: "Hello world!\nThe sevrer hopes you have a great day"})
} 

// deno run --allow-net simpleserver.ts