import './Pagination.scss';

interface PaginationInterface {
    dataPerPage: number,
    totalData: number,
    paginate: any,
    currentPage: number
}

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }: PaginationInterface) => {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    if (pageNumbers.length === 0) {
        return <></>;
    }

    return (
        <nav className="pagination">
            <ul className="page-item">
                <li>
                    <p>{'<<'}</p>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a href="!#" onClick={() => paginate(number)} className={`${currentPage === number ? "active" : ""}`}>
                            {number}
                        </a>
                    </li>
                ))
                }
                <li>
                    <p>{'>>'}</p>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;