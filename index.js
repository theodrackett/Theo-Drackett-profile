import expess from "express"


const app = expess()
const port = 3000

app.use(expess.static("public"))

app.get("/", (req, res) => {
    res.render("home.ejs")
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


