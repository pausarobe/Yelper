import React from 'react'

const Pagination = () =>(

		<div className="container text-center">
            <ul className="pagination">
                <li className="disabled"><a href="#">«</a></li>
                <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">»</a></li>
            </ul>
        </div>

	)
export default Pagination;