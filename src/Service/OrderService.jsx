import axios from "axios";
const api = "https://spring-ewaste-b3fwatejf6fff7g6.eastus-01.azurewebsites.net/api/orders"


class OrderService {

  getOrderByUsername(username){
    return axios.get(`${api}/${username}`);
  }

  getOrderById(id){
    return axios.get(`${api}/order/${id}`)
  }

  deleteOrder(id){
    return axios.delete(`${api}/${id}`)
  }

  updateOrder(id,order){
    return axios.put(`${api}/${id}`,order)
  }

  getOrders(){
    return axios.get(`${api}/all`)
  }

}

export default new OrderService();
