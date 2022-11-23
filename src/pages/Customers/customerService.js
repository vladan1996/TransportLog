import axios from "axios";
//insert 
const API_URL = "https://localhost:7034/api/Customers"

export function insertCustomer(customer){
    console.log('customer')
    console.log(customer)
    axios.post(API_URL + "/insertCustomer", customer).then(res=>console.log(res)).catch(err => console.log(err)) 
    
    // fetch(API_URL + "/insertCustomer", {
    //     method: "post",
    //     header: {'Content-Type': 'application/json; charset=utf-8'},
    //     body: JSON.stringify({
    //         value:customer
    //     })
    // }).then(data =>{
    //     console.log(data);
    //     console.log(customer);
    //     return data
    // })
}
  




//update


//delete 

