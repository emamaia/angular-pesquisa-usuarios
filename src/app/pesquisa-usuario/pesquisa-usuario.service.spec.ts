import { TestBed } from '@angular/core/testing';

import { PesquisaUsuarioService } from './pesquisa-usuario.service';

describe('PesquisaUsuarioService', () => {
  let service: PesquisaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
