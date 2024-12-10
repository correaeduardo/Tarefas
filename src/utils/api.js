
import axios from 'axios'
const url = 'http://localhost/tasks/';

export default axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
});