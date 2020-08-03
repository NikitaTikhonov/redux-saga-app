import { ExampleAction } from '_store/types/example/actions';
import { exampleActionTypes } from '_store/types/example/actionTypes';
import { CreateExampleModel, UpdateExampleModel } from '_store/types/example/models';


export function updateExampleById(updateData: UpdateExampleModel): ExampleAction {
  return {
    type: exampleActionTypes.EXAMPLE_UPDATE,
    payload: updateData
  };
}

export function createExample(exampleData: CreateExampleModel): ExampleAction {
  return {
    type: exampleActionTypes.EXAMPLE_CREATE,
    payload: exampleData
  };
}
