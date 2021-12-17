export default class PostService {
  static async getAll() {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
  }
}