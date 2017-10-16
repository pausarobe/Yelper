import React, {Component} from 'react';
import Api from '../services/Api'
import bootstrap from 'react-bootstrap'

import './Results.css'


class Results extends Component {

	render() {
		return <div className="container">
    <div className="row">
    <div className="well">
        <h1 className="text-center">Results Page</h1>
        <div className="list-group">
          <a href="#" className="list-group-item active">
                <div className="media col-md-3">
                    <figure className="pull-left">
                        <img className="media-object img-rounded img-responsive"  src="http://placehold.it/350x250" alt="placehold.it/350x250" />
                    </figure>
                </div>
                <div className="col-md-6">
                    <h4 className="list-group-item-heading"> Nombre del comercio </h4>
                    <p className="list-group-item-text"> Qui diam libris ei, vidisse incorrupte at mel. His euismod salutandi dissentiunt eu. Habeo offendit ea mea. Nostro blandit sea ea, viris timeam molestiae an has. At nisl platonem eum. 
                        Vel et nonumy gubergren, ad has tota facilis probatus. Ea legere legimus tibique cum, sale tantas vim ea, eu vivendo expetendis vim. Voluptua vituperatoribus et mel, ius no elitr deserunt mediocrem. Mea facilisi torquatos ad.
                    </p>
                </div>
                <div className="col-md-3 text-center">
                    <button type="button" className="btn btn-default btn-lg btn-block">More Info</button>
                    <div className="stars">
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                    <p> Average 4.5 <small> / </small> 5 </p>
                </div>
          </a>
          <a href="#" className="list-group-item">
                <div className="media col-md-3">
                    <figure className="pull-left">
                        <img className="media-object img-rounded img-responsive" src="http://placehold.it/350x250" alt="placehold.it/350x250" />
                    </figure>
                </div>
                <div className="col-md-6">
                    <h4 className="list-group-item-heading"> Nombre del comercio </h4>
                    <p className="list-group-item-text"> Eu eum corpora torquatos, ne postea constituto mea, quo tale lorem facer no. Ut sed odio appetere partiendo, quo meliore salutandi ex. Vix an sanctus vivendo, sed vocibus accumsan petentium ea. 
                        Sed integre saperet at, no nec debet erant, quo dico incorrupte comprehensam ut. Et minimum consulatu ius, an dolores iracundia est, oportere vituperata interpretaris sea an. Sed id error quando indoctum, mel suas saperet at.                         
                    </p>
                </div>
                <div className="col-md-3 text-center">
                    <button type="button" className="btn btn-primary btn-lg btn-block">More info</button>
                    <div className="stars">
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                    <p> Average 3.9 <small> / </small> 5 </p>
                </div>
          </a>
          <a href="#" className="list-group-item">
                <div className="media col-md-3">
                    <figure className="pull-left">
                        <img className="media-object img-rounded img-responsive" src="http://placehold.it/350x250" alt="placehold.it/350x250"/>
                    </figure>
                </div>
                <div className="col-md-6">
                    <h4 className="list-group-item-heading"> Nombre del comercio </h4>
                    <p className="list-group-item-text"> Ut mea viris eripuit theophrastus, cu ponderum accusata consequuntur cum. Suas quaestio cotidieque pro ea. Nam nihil persecuti philosophia id, nam quot populo ea. 
                        Falli urbanitas ei pri, eu est enim volumus, mei no volutpat periculis. Est errem iudicabit cu. At usu vocibus officiis, ad ius eros tibique appellantur.                         
                    </p>
                </div>
                <div className="col-md-3 text-center">
                    <button type="button" className="btn btn-primary btn-lg btn-block">More info</button>
                    <div className="stars">
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                    <p> Average 4.1 <small> / </small> 5 </p>
                </div>
          </a>
        </div>
        </div>
  </div>
</div>
}
}

export default Results;



// <div className="container-fluid">
//   <div className="row body">
//     <div className="span8">
//       <div className="row">
//         <div className="span8">
//           <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
//         </div>
//       </div>
//       <div className="row">
//         <div className="span2">
//           <a href="#" className="thumbnail">
//             <img src="http://placehold.it/260x180" alt=""/>
//           </a>
//         </div>
//         <div className="span6">      
//           <p>
//             Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
//           </p>
//           <p><button type="button" className="btn btn-default"><a href="#">More info</a></button></p>
//         </div>
//       </div>
//     </div>

//   <div className="span8">
//     <div className="row">
//       <div className="span8">
//         <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
//       </div>
//     </div>
//     <div className="row">
//       <div className="span2">
//         <a href="#" className="thumbnail">
//             <img src="http://placehold.it/260x180" alt=""/>
//         </a>
//       </div>
//       <div className="span6">      
//         <p>
//           Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
//         </p>
//         <p><button type="button" className="btn btn-default"><a href="#">More info</a></button></p>
//       </div>
//     </div>
//   </div>

//   <div className="span8">
//     <div className="row">
//       <div className="span8">
//         <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
//       </div>
//     </div>
//     <div className="row">
//       <div className="span2">
//         <a href="#" className="thumbnail">
//             <img src="http://placehold.it/260x180" alt=""/>
//         </a>
//       </div>
//       <div className="span6">      
//         <p>
//           Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
//         </p>
//         <p><button type="button" className="btn btn-default"><a href="#">More info</a></button></p>
//       </div>
//     </div>
//   </div>

//   <div className="span8">
//     <div className="row">
//       <div className="span8">
//         <h4><strong><a href="#">Nombre del comercio</a></strong></h4>
//       </div>
//     </div>
//     <div className="row">
//       <div className="span2">
//         <a href="#" className="thumbnail">
//             <img src="http://placehold.it/260x180" alt=""/>
//         </a>
//       </div>
//       <div className="span6">      
//         <p>
//           Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option. Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari conclusionemque, ad nobis propriae quaerendum sea.
//         </p>
//         <p><button type="button" className="btn btn-default"><a href="#">More info</a></button></p>
//       </div>
//     </div>
//   </div>
//   </div>
// </div>
//   }