import axios from 'axios'
const token ='Bearer RmHQV-aiyyC-8L0UnKViDsgcCxXiTpIFvV2tfqO5TM4l6poX81umJNu8pctONiOpdMD1JAC27_LD0NeNNfS1_q_nXe9es8bAYol8MXOL_Up4OAMDc8vfmCo6rXPkWXYx'

export function getTestData(){
 axios.get('https://yelp-api-proxy.herokuapp.com/businesses/search?term=Sushi&location=Barcelona',{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}
export function getYelpData(){
	const url= 'https://yelp-api-proxy.herokuapp.com/businesses/search?term=Sushi&location=Barcelona'
    axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}