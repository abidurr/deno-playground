import { dayOfYear, currentDayOfYear } from "https://deno.land/std/datetime/mod.ts"

console.log(dayOfYear(new Date("2000-01-01")))

console.log(currentDayOfYear())

// deno run datetime.ts