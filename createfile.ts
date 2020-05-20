const encoder = new TextEncoder()

const greetText = encoder.encode("Hello world!\nI am Abidur")

await Deno.writeFile("greet.txt", greetText);

// deno run --allow-write createfile.ts