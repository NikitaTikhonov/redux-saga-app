import { CreateExampleModel, Example, UpdateExampleModel } from '_store/types/example/models';
import { ErrorPayload } from '_store/types/system/systemTypes';

export enum ExampleActionTypes {
    EXAMPLE_LOAD_PENDING = 'EXAMPLE_LOAD_PENDING',
    EXAMPLE_LOAD_SUCCESS= 'EXAMPLE_LOAD_SUCCESS',
    EXAMPLE_LOAD_FAIL= 'EXAMPLE_LOAD_FAIL',
    EXAMPLE_UPDATE_PENDING= 'EXAMPLE_UPDATE_PENDING',
    EXAMPLE_UPDATE_SUCCESS= 'EXAMPLE_UPDATE_SUCCESS',
    EXAMPLE_UPDATE_FAIL= 'EXAMPLE_UPDATE_FAIL',
    EXAMPLE_CREATE_PENDING= 'EXAMPLE_CREATE_PENDING',
    EXAMPLE_CREATE_SUCCESS= 'EXAMPLE_CREATE_SUCCESS',
    EXAMPLE_CREATE_FAIL= 'EXAMPLE_CREATE_FAIL',
}


export interface UpdateExampleById {
  type: ExampleActionTypes.EXAMPLE_UPDATE_SUCCESS;
  payload: UpdateExampleModel;
}

export interface CreateExample {
  type: typeof  ExampleActionTypes.EXAMPLE_CREATE_SUCCESS;
  payload: CreateExampleModel;
}

export interface ExampleRequestPending {
  type: ExampleActionTypes.EXAMPLE_UPDATE_PENDING
  | ExampleActionTypes.EXAMPLE_CREATE_PENDING | ExampleActionTypes.EXAMPLE_LOAD_PENDING;
  payload: null;
}

export interface LoadAllExamples {
  type: ExampleActionTypes.EXAMPLE_LOAD_SUCCESS;
  payload: Example[];
}

export interface ExampleRequestsFail {
  type: ExampleActionTypes.EXAMPLE_UPDATE_FAIL |
  ExampleActionTypes.EXAMPLE_LOAD_FAIL | ExampleActionTypes.EXAMPLE_CREATE_FAIL;
  payload: ErrorPayload;
}

export type ExampleAction = UpdateExampleById | CreateExample | ExampleRequestPending
| ExampleRequestsFail | LoadAllExamples
