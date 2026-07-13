export const username = "admin";
export const password = "1234";

export function login(inputUsername: string, inputPassword: string) {
  return inputUsername === username && inputPassword === password;
}
