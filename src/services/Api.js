import axios from 'axios'
const token ='Bearer RmHQV-aiyyC-8L0UnKViDsgcCxXiTpIFvV2tfqO5TM4l6poX81umJNu8pctONiOpdMD1JAC27_LD0NeNNfS1_q_nXe9es8bAYol8MXOL_Up4OAMDc8vfmCo6rXPkWXYx'

export function getYelpData (query){
	const url= `https://yelp-api-proxy.herokuapp.com/businesses/search?term=${query}&location=Barcelona`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data.businesses)
}

export function getYelpDataById (id){
  const url= `https://yelp-api-proxy.herokuapp.com/businesses/${id}/reviews`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response)
}
    