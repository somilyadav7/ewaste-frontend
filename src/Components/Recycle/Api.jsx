import axios from "axios";
import { getUserName } from "../Auth";
//const username = getUserName();

const ORDER_REST_API_BASE_URL = `https://spring-ewaste-b3fwatejf6fff7g6.eastus-01.azurewebsites.net/api/orders/${getUserName()}`
console.log(ORDER_REST_API_BASE_URL);

export const submitRecyclingForm = (registerObj) => axios.post(`https://spring-ewaste-b3fwatejf6fff7g6.eastus-01.azurewebsites.net/api/orders/${registerObj.user}`,registerObj);
  