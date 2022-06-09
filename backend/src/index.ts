import express from "express"

const PORT = 8080
const app = express()

app.get("/", (request, response, next) => {
    response.type("text/plain")
    response.write("Some Response")
    response.end()
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})