# O que precisa ser feito:

- Criar atoms para:
  - financas: nome, renda, objetivoFinanceiro, orcamentoDiario
  - transacoes: descricao, valor, categoria, data, tipo (despesas, receita)
  - conta: banco, saldo
- Criar selectors para:
  - transacoes: listar, filtrar

# Regras de negócio

- Caso o usuário selecione:
  - Economizar: usuário economiza 20% da sua renda diária
  - Investir: usuário investe até 15% da sua renda diária
  - Controlar gastos: usuário não gasta mais do que 80% o orçamento diário
