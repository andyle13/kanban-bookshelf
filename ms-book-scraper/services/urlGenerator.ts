export const generateRequestUrl = (isbn: number) : string => {
    //const reverseProxy : string = getReverseProxy()
    const linkToBook : string = getGoodreadsUrl()

    return `${linkToBook}${isbn}`
}

const getReverseProxy = () : string => "https://cors-anywhere.herokuapp.com/"

const getGoodreadsUrl = () : string => `https://www.goodreads.com/search?q=`