import { apiService } from '.'

export class AuthService {
  async login(request) {
    const { data } = await apiService.post('/auth/login', request);
    return data;
  }
}
