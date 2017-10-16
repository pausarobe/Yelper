import React, {Component} from 'react';
import Api from '../services/Api'
import bootstrap from 'react-bootstrap'


class Results extends Component {

	render() {
		return <div className="row">
  <div className="span8">
    <div className="row">
      <div className="span8">
        <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
      </div>
    </div>
    <div className="row">
      <div className="span2">
        <a href="#" className="thumbnail">
            <img src="http://placehold.it/260x180" alt=""/>
        </a>
      </div>
      <div className="span6">      
        <p>
          Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
        </p>
        <p><button type="button" className="btn btn-info"><a href="#">More info</a></button></p>
      </div>
    </div>
  </div>
</div>
	}
}

export default Results;




// const Results = () => (<div>
// 		<h1>Estoy en la Results</h1>
// 	</div>)