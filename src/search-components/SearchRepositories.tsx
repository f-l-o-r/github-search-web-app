import React, { useState, useEffect } from "react";
import './SearchRepositories.scss'; 
import { getSearchRepositoryByName } from "../service/Service";
import RepositoriesList from "./RepositoriesList";
import Pagination from "../common-components/Pagination";

function SearchRepository() {
    const [inputValue, setInputValue] = useState("");
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5);

    //get current data
    const indexofLastData = currentPage * dataPerPage;
    const indexofFirstData = indexofLastData - dataPerPage;
    const currentData = repos.slice(indexofFirstData, indexofLastData);

    // change page 
    const paginate = (pageNumber: number )=> setCurrentPage(pageNumber)

    useEffect(() => {
        if (!inputValue) {
            setLoading(false);
            return;
        } else {
            setLoading(true);
            getSearchRepositoryByName(inputValue)
                .then(response => {
                    return response.json();
                })
                .then(value => {
                    setRepos(value.items);
                    setLoading(false);
                })
                .catch( e => {
                    setLoading(false);
                });
        }
    }, [inputValue]);

    return (
        <div className="App">
            <form className="search-form"
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    // @ts-ignore
                    setInputValue(event.target.elements.query.value);
                }}>
                <label className="text-xl"> Search repositories</label>
                <input className="search-input-text" type="text" name="query" placeholder='Search Repositories'></input>
                <input className="search-input-submit"type="submit" value="Search"></input>
            </form>
            <RepositoriesList loading={loading} data={currentData}></RepositoriesList>
            <Pagination dataPerPage={dataPerPage} totalData={repos.length} paginate={paginate} currentPage={currentPage}></Pagination>
        </div>
    );
}

export default SearchRepository;