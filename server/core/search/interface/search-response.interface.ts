import { Result } from 'ytsr';
import { SearchItem } from '../type/search-item.type';
export interface ISearchResponse extends Omit<Result, 'items'> {
  items: {
    channels: Array<any>;
    videos: Array<any>;
    movies: Array<any>;
    verticalShelf: Array<any>;
    searchRefinements: Array<any>;
  };
}