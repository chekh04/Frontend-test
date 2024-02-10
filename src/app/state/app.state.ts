import {SWCharacter} from '../core/models/character-response.model';

export interface AppState {
  totalCount: number;
  nextPage: number;
  characters: SWCharacter[];
  isLoaded: boolean;
}

export const initialState: AppState = {
  totalCount: 0,
  nextPage: 1,
  characters: [],
  isLoaded: false
};

export const rootStateKey = 'state';

