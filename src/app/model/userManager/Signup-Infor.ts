export class SignUpInfo {
  name: string;
  username: string;
  email: string;
  avatarUrl: string;
  password: string;
  role: string[];

  constructor(name: string, username: string, email: string, password: string, avatarUrl: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatarUrl = avatarUrl;
    this.role = ['user'];
  }
}
