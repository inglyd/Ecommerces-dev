-- Quantos pedidos existem no sistema? // 1 consulta contemplando contagem ou totalização

select count(*) as quantidadeDePedidos from pedidos;

-- Quais são os produtos e departamentos da empresa? // 1 consulta contemplando a junção entre 2 tabelas

select * from produtos
inner join departamentos
on produtos.departamentos = departamentos.id;

-- Como consultar as tabelas de clientes e endereços e retornar os dados relativos aos clientes e aos endereços ao mesmo tempo? // Junção de três tabelas 
SELECT * from clientes
inner join enderecos
on clientes.id = enderecos.cliente
inner join cidadeestado
on enderecos.cidadeestado = cidadeestado.id;

-- Qual é a soma dos preços por departamento? // 1 consulta contemplando a junção entre 2 tabelas + uma operação de totalização e agrupamento
SELECT sum(produtos.preco) as somaDosProdutos, departamentos.nome
from produtos
inner join departamentos
on produtos.departamentos = departamentos.id
group by departamentos.id;

 -- Qual é o preço total dos pedidos por cidade/estado? // 1 consulta contemplando a junção entre 3 ou mais tabelas + uma operação de totalização e agrupamento
SELECT cidadeestado.estado, cidadeestado.cidade, sum(pedidosprodutos.precototal) as precototal
from clientes
inner join pedidos
on clientes.id = pedidos.clientes
inner join pedidosprodutos
on pedidosprodutos.pedidoid = pedidos.id
inner join enderecos
on enderecos.cliente = clientes.id
inner join cidadeestado
on cidadeestado.id = enderecos.cidadeestado
group by cidadeestado.estado
