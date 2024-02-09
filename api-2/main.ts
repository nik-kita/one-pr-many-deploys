// @deno-types="npm:hono@latest"
import { Hono } from "https://deno.land/x/hono@v3.10.0/mod.ts"

const app = new Hono()

app.get('/', (c) => c.text('Hello from api-2!'))

Deno.serve(app.fetch)
