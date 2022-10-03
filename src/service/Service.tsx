
export const getSearchRepositoryByName = (inputValue:string) : Promise<Response> => {
    return fetch("https://api.github.com/search/repositories?q="+ inputValue);
}
