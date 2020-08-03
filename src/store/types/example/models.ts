import { ErrorPayload } from '_store/types/system/systemTypes';

export interface Example {
  title: string;
  body: string;
  id: number;
}

export interface UpdateExampleModel {
  id: number;
  title: string | undefined;
  body: string | undefined;
}

export interface CreateExampleModel {
  title: string;
  body: string;
}

export interface ExampleState {
  isFetching: boolean;
  error: ErrorPayload | null;
  examples: Example[];
}
