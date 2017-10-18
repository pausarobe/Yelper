import React from 'react'

const Pagination = (props) =>{
	console.log("Paginato",props)
	const aNumberOfitems = new Array(props.Items).fill(0)
    const url = props.url.slice(0, -1)
	return (
		<div className="container text-center">
            <ul className="pagination">
            <li className="disabled"><a href="#">«</a></li>
            {aNumberOfitems.map(function(obj,i){
				return <li className={props.pageActive-1 === i ? "active" : '' }>
                <a href={url + (i+1)}>{i+1} <span className="sr-only">(current)</span></a></li>
            })}
                <li><a href="#">»</a></li>
            </ul>
        </div>
	)
}
export default Pagination;