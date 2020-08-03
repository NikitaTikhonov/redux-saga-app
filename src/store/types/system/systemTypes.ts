import rootReducer from '_store/reducers';

export interface ErrorPayload {
  message: string;
  status: number | null;
}


export type RootState = ReturnType<typeof rootReducer>
