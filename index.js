import expess from "express"


const app = expess()
const port = 3000
const currentYear = new Date().getFullYear()

app.use(expess.static("public"))

app.get("/", (req, res) => {
    res.render("home.ejs", {currentYear: currentYear})
})

app.get("/resume", (req, res) => {
    res.render("resume.ejs")
})

app.get("/hobbies", (req, res) => {
    res.render("hobbies.ejs")
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


