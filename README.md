# ProjetoFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

- npm install
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Descrição do projeto

1. [x] Criar um frontend Angular para receber e exibir uma lista de usuários;
2. [x] Usuário deverá utilizar filtros com input tipo radio e checkbox;
3. [x] Ao usar o filtro, é utilizado uma API randômica e carrega na tela pelo botão 'Pesquisar';
4. [x] Um segundo botão para salvar dados anteriores no Session Storage;
5. [x] Tratamento de erro da API. Para verificar o tratamento, comentar a chamada de API no pesquisa-usuario.service.js e descomentar o "throwError(new Error('Erro genérico'));"
6. [x] O site foi desenvolvido de modo responsivo, UX e estilo por conta do desenvolvedor;
7. [x] Carregar na tela no máximo 20 usuários, contendo foto, nome, gênero, nacionalidade e e-mail;
8. [x] O estilo do projeto foi desenvolvido em SCSS, com o uso do bootstrap em casos pontuais.

## Melhorias

- Separação de componentes, deixando o formulário mais genérico e utilizável, passando informações de filho para pai, utilizando o OutPut(), carregando as informações da API numa Home e não direto na mesma página do formulário;
- Alterar as varáveis tipo 'any' para interfaces;
- Melhorar funções de submit, adicionando outras funcçoes e chamando dentro dela.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
