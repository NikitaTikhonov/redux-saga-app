import { Example } from '_store/types/example/models';
import {
  ExampleActionTypes,
  ExampleRequestPending,
  ExampleRequestsFail,
  LoadAllExamples
} from '_store/types/example/actionTypes';


export function loadExamples(examples: Example[]): LoadAllExamples  {
  return {
    type: ExampleActionTypes.EXAMPLE_LOAD_SUCCESS,
    payload: examples
  };
}

export function startLoadExamples(): ExampleRequestPending {
  return {
    type: ExampleActionTypes.EXAMPLE_LOAD_PENDING,
    payload: null
  };
}

export function loadError(message: string, status: number | null): ExampleRequestsFail {
  return {
    type:  ExampleActionTypes.EXAMPLE_LOAD_FAIL,
    payload: {
      message: message,
      status: status
    }
  };
}
