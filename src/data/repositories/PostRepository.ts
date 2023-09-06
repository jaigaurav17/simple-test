import {PostService} from '../../services/PostService';
import {Post} from '../models';

export class PostRepository {
  static async fetchPosts(page: number, perPage: number): Promise<Post[]> {
    try {
      const data = await PostService.fetchPosts(page, perPage);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
