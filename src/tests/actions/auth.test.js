import { login } from '../../actions/auth';

test('should generate login action object', () => {
  const uid = 1;
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('should generate logout action object', () => {
  const action = login();
  expect(action).toEqual({
    type: 'LOGIN',
  });
});
