import axios from 'axios';
import { URLS } from '../configAndUtils';

const API = URLS.apiUrl;

export class RequestHandler {
  static fetchPosts() {
    return axios.get(`${API}/posts`);
  }

  static fetchPost(id) {
    return axios.get(`${API}/posts/${id}`);
  }

  static editPost(id) {
    return axios.put(`${API}/posts/${id}`);
  }

  static deletePost(id) {
    return axios.delete(`${API}/posts/${id}`);
  }
}
