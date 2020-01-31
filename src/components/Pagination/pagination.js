import React from "react";

const makePage = (max, page, func) => {
    const pages = [];
    for (let i = 1; i<=Math.ceil(max/3); i += 1) {
        let classes = (page === i) ? "page-item disabled": "page-item";

        pages.push(
            <li className={classes} key={i} >
                <button className="page-link" onClick={() => func(i)}>{i}</button>
            </li>
        )
    }
    return pages;
}

const Pagination = props => {
    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination pagination-sm">
                {

                    makePage(props.total_task_count, props.page, props.pickPage)
                }
            </ul>
        </nav>
    )
}

export default Pagination;
