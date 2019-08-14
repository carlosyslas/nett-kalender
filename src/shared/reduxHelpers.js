export const createAsyncActionTypes = baseActionType => ({
  STARTED: `${baseActionType}_STARTED`,
  COMPLETED: `${baseActionType}_COMPLETED`,
  FAILED: `${baseActionType}_FAILED`
});
