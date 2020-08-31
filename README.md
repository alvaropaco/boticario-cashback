# Desafio Boticaŕio Front-end

### Requisitos de front-end:
- Tela de cadastro de um novo revendedor(a) solicitando Nome completo, CPF,
e- mail e senha;
- Tela de login para informar e-mail e senha;
- Tela de cadastro de compras onde deverá ser informado o código, valor e data;
- Tela de listagem das compras cadastradas exibindo as informações de código
da compra, valor, data, % de cashback aplicado, valor do cashback e status do
cadastro. O status do cadastro poderá ser “Em validação”, “Reprovado” e “Aprovado”;
- Tela para exibir o valor de cashback acumulado até o momento, esta
informação virá de uma das APIs do boticário, que é um outro sistema que
agrupa e consolida todas as vendas do revendedor(a).

## Como executar

No repositorio do porjeto:

### `npm run start`

Roda a aplicação em modo de desenvolvimento. O comando vai subir uma `API`de mock do endereço
`http://localhost:3004` carregando os dados de um arquivo JSON localizado na pasta `./data/db.json`.
<br />
Após executar, vá [http://localhost:3000](http://localhost:3000) para abrir o projeto.

### Login

Você pode executar o login com as credenciais de teste:
- email: teste@teste.com
- senha: 1234

### `npm test`

Executa os testes integrados.

### `npm run build`

Compila uma versão para produção na pasta `build`.<br />
