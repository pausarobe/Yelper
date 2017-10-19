import React from 'react'
import './Pagination.css'

const Pagination = (props) =>{
	console.log("Paginato",props)
	const aNumberOfitems = new Array(props.Items).fill(0)
    var pageNumber= parseInt(props.url.slice(-1))
    const url = props.url.slice(0, -1)
    const prev = (pageNumber <= 1  ) ? 1 : pageNumber - 1;
    const next = (pageNumber >= props.Items  ) ? props.Items : pageNumber + 1;
	return (
		<div className="container text-center">
            <ul className="pagination">
            <li className="enable"><a href={prev}>«</a></li>
            {aNumberOfitems.map(function(obj,i){
				return <li className={props.pageActive-1 === i ? "active" : '' }>
                <a href={url + (i+1)}>{i+1} <span className="sr-only">(current)</span></a></li>
            })}
            <li><a className="enable" href={next}>»</a></li>
            </ul>
        </div>
	)
}
export default Pagination;