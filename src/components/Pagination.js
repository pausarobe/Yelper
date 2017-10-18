import React from 'react'

const Pagination = (props) =>{
	const aNumberOfitems = new Array(props.Items).fill(0)	
	return (
		<div className="container text-center">
            <ul className="pagination">
            <li className="disabled"><a href="#">«</a></li>
            {aNumberOfitems.map(function(obj,i){
				return <li className="active"><a href="#">{i+1} <span className="sr-only">(current)</span></a></li>
            })}
                <li><a href="#">»</a></li>
            </ul>
        </div>
	)
}
export default Pagination;