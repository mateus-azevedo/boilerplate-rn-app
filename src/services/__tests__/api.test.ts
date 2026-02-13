import { api } from '../api';
import axios from 'axios';

describe('API Instance', () => {
  it('deve ter baseURL definida', () => {
    expect(api.defaults.baseURL).toBeDefined();
  });

  it('deve ter timeout configurado', () => {
    expect(api.defaults.timeout).toBe(10000);
  });

  it('deve ter header padrão JSON', () => {
    expect(api.defaults.headers['Content-Type']).toBe(
      'application/json'
    );
  });
});
