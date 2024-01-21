export const validateUsr = (username: string): boolean =>
  /^[a-z0-9_]{4,16}$/g.test(username);
