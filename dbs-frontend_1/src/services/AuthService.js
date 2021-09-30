import { apiService } from '.'

export class AuthService {
  async login(request) {
    const { data } = await apiService.post('/login', request);
    return data;
  }
}
