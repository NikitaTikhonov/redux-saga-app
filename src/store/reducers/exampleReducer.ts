import _ from 'lodash';
import { CreateExampleModel, Example, ExampleState, UpdateExampleModel } from '_store/types/example/models';
import { ExampleAction } from '_store/types/example/actionTypes';
import { ExampleActionTypes as actTps } from '_store/types/example/actionTypes';
import { ErrorPayload } from '_store/types/system/systemTypes';


const initialState: ExampleState = {
  isFetching: false,
  error: null,
  examples: []
};

const buildSuccessState = (examples: Example[]): ExampleState => {
  return {
    isFetching: false,
    error: null,
    examples: examples
  };
};

export default function exampleReducer(state = initialState, action: ExampleAction): ExampleState {
  switch (action.type) {
  case actTps.EXAMPLE_LOAD_PENDING:
  case actTps.EXAMPLE_CREATE_PENDING:
  case actTps.EXAMPLE_UPDATE_PENDING: {
    return {
      ...state,
      error: null,
      isFetching: true,
    };
  }
  case actTps.EXAMPLE_UPDATE_SUCCESS: {
    const payload = action.payload as UpdateExampleModel;
    const messageToUpdateIndex = _.findIndex(state.examples, example => example.id === payload.id);
    if (messageToUpdateIndex === -1) {
      return state;
    }
    state.examples[messageToUpdateIndex] = _.merge(state.examples[messageToUpdateIndex], payload);
    return buildSuccessState([...state.examples]);
  }
  case actTps.EXAMPLE_CREATE_SUCCESS: {
    const payload = action.payload as CreateExampleModel;
    const newExample: Example = {
      id: _.random(0, 100),
      title: payload.title,
      body: payload.body
    };
    return buildSuccessState([...state.examples, newExample]);
  }
  case actTps.EXAMPLE_LOAD_SUCCESS: {
    const payload = action.payload as Example[];
    if (payload.length > 0) {
      return buildSuccessState(payload);
    }
    return state;
  }
  case actTps.EXAMPLE_CREATE_FAIL:
  case actTps.EXAMPLE_LOAD_FAIL:
  case actTps.EXAMPLE_UPDATE_FAIL: {
    const payload = action.payload as ErrorPayload;
    return {
      error: {
        message: payload.message,
        status: payload.status
      },
      isFetching: false,
      examples: state.examples,
    };
  }
  default:
    return state;
  }
}

