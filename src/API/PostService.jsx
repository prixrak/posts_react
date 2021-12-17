export default class PostService {
  // limit responsible for number of posts visible in one page
  static async getAll(limit = 10, page = 1) {
    return await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  }

  static async getById(id) {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/`+id);
  }

  static async getCommentsByPostId(id) {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}