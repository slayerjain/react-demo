import authReducer from '../../reducers/auth';

test('should set uid', () => {
  const uid = 1;
  const state = authReducer(undefined, { type: 'LOGIN', uid });
  expect(state).toEqual({
    uid,
  });
});

test('should remove uid', () => {
  const uid = 1;
  const state = authReducer({ uid }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});

