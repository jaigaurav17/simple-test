import {PostRepository} from '../data/repositories';
import store from '../redux/store';
import {postActions} from '../redux/slices';

export class PostListViewModel {
  static async fetchPosts(page: number, perPage: number) {
    try {
      store.dispatch(postActions.startLoading());
      const data = await PostRepository.fetchPosts(page, perPage);
      if (page === 1) {
        store.dispatch(postActions.setPost(data));
      } else {
        store.dispatch(postActions.appendPost(data));
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      store.dispatch(postActions.stopLoading());
    }
  }
}
