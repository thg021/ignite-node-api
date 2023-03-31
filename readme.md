# Ambiente

informar no arquivo env o caminho de onde será apontado o banco de dados

# Migrates

## scripts

```bash
    npm run knex --migrate:make add-session-id-to-transactions
```
este comando server para criar uma migrate para criarmos tables, alterar ou excluir. 

```bash
    npm run knex -- migrate:latest
```
comando para executar as nossa migrates. 