import {Post} from '../data/models';

export class PostService {
  static async fetchPosts(page: number, perPage: number): Promise<Post[]> {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
