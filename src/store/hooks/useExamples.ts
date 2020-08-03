import { Example, ExampleState } from '_store/types/example/models';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorPayload, RootState } from '_store/types/system/systemTypes';
import { useCallback } from 'react';
import { startLoadExamples } from '_store/types/example/actions';

interface ExamplesSelector {
  examples: Example[];
  loadMore: () => void;
  error: ErrorPayload | null;
  isFetching: boolean;
}

export function useExamples(intialExamples: Example[] | null): ExamplesSelector {
  const examples: ExampleState = useSelector<RootState, ExampleState>((state) => state.examples);
  const dispatch = useDispatch();
  const loadMore = useCallback(() => dispatch(startLoadExamples()), [dispatch]);

  return {
    examples: examples.examples.length > 0 ? examples.examples : intialExamples ?? [],
    loadMore,
    error: examples.error,
    isFetching: examples.isFetching
  };
}
