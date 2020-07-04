import {
  RECEIVE_ENTITIES,
  RECEIVE_ENTITY,
  SAVE_ENTITY_SUCCESS,
  SAVE_ENTITY_FAIL,
  CLOSE_MESSAGE,
  REMOVE_ENTITY,
} from '../../actions/admin/entities_actions';

const initialState = {
  entities: [],
  selectedEntity: {},
  shouldRedirectToList: false,
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ENTITIES:
      return { ...state, entities: action.payload, selectedEntity: {}, shouldRedirectToList: false };
    case RECEIVE_ENTITY:
      return { ...state, selectedEntity: action.payload };
    case SAVE_ENTITY_SUCCESS:
      return  { ...state, shouldRedirectToList: true };
    case SAVE_ENTITY_FAIL:
      return  { ...state, errors: action.payload };
    case CLOSE_MESSAGE:
      return { ...state, errors: [] };
    case REMOVE_ENTITY:
      return { ...state, entities: state.entities.filter(entity => entity.id !== action.payload.id) };
    default:
      return state;
  }
};
