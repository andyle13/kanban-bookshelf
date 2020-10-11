import express from "express"
import { initializeWorkflow } from "./services/scraper"

const app = express()
const port = 8080

// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.send("Use the path '/book/{isbn}' to retrieve a book by an ISBN number.");
});

app.get("/book/:isbn", async (req, res) => {
    const isbn : number = Number(req.params["isbn"]);

    if(isbn.toString().length < 13) res.status(404).send({error: "ISBN must contain 13 digits."})
    else res.send(await initializeWorkflow(isbn));
});

// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});