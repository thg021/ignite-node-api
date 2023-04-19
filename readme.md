# Ambiente

informar no arquivo env o caminho de onde será apontado o banco de dados

# Migrates

## scripts

```bash
    npm run knex -- migrate:make add-session-id-to-transactions
```
este comando server para criar uma migrate para criarmos tables, alterar ou excluir. 

```bash
    npm run knex -- migrate:latest
```
comando para executar as nossa migrates. 

# Testes 

- vitest

```bash
    npm i vitest -D
```
- criar no package um script de execução

```json
{
    "test" : "vitest" 
}
```
- supertest 
para fazermos requisições em nossos teste
```bash
    npm i supertest -D
    npm install @types/supertest -D
```

# Deploy

para fazer o processo de build. 

```bash
    npm i tsup -D
```

Criar um script no package.json. Caso queira alterar o nome o da pasta de saida. `--out-dir build`, por default o nome da pasta é `dist`.

```json
{
    "build": "tsup src --out-dir build"
}
```
Criar um arquivo `eslintignore` para adicionar a pasta build e node_modules. Adiciona no gitignore a pasta build


- [render](https://render.com/).
- [fly.io](https://fly.io/).
- [railway](https://railway.app/).