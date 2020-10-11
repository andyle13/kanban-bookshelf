import fetch from "node-fetch"
import jsdom from "jsdom"

import { Book } from '../models/book'
import { generateRequestUrl } from './urlGenerator'

export const initializeWorkflow = async (isbn: number) : Promise<Book> => {
    const document : Document = await scrapeDocumentByIsbn(isbn);
    const bookInfo : Book = parseDocument(document);

    return bookInfo;
};

const scrapeDocumentByIsbn = async (isbn: number) : Promise<Document> =>
    fetch(generateRequestUrl(isbn), {
        "headers": {
            "Content-type": "application/html",
        }
    })
    .then(txt => txt.text())
    .then(res => new jsdom.JSDOM(res).window.document)

const parseDocument = (document : Document) : Book => {
    const bookTitle : string | undefined | null = document.querySelector("h1")?.textContent?.trim();
    const bookDescription : string | undefined | null  = document.getElementById("description")?.children[1].textContent;
    const bookAuthor : string | undefined | null = document.getElementsByClassName("authorName")[0].textContent

    return new Book(<string> bookTitle,<string> bookDescription,<string> bookAuthor)
}