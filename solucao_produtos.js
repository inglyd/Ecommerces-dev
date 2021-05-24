let listaProdutos = require("./itens.json");

// Quantidade total de itens em estoque (somatória das quantidades de todos os produtos).
function totalItensEstoque(listaProdutos) {
    let qtdTotalDeProdutos = 0;
    for (posicao = 0; posicao < listaProdutos.length; posicao++) {
        qtdTotalDeProdutos = qtdTotalDeProdutos + listaProdutos[posicao].qtdEstoque;
    }
    console.log("Soma de todos os produtos: " + qtdTotalDeProdutos);
}
totalItensEstoque(listaProdutos);
// Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim").
function totalItensDestaque(listaProdutos) {
    let qtdTotalEmDestaque = 0;
    for (posicao = 0; posicao < listaProdutos.length; posicao++) {
        if (listaProdutos[posicao].emDestaque == "sim") {
            qtdTotalEmDestaque =
                qtdTotalEmDestaque + listaProdutos[posicao].qtdEstoque;
        }
    }

    console.log("Quantidade total de itens em detaque: " + qtdTotalEmDestaque);
}
totalItensDestaque(listaProdutos);

// Quantidade total de itens disponíveis (similar ao anterior)
function totalItensDisponiveis(listaProdutos) {
    let qtdTotalItensDisponiveis = 0;
    for (posicao = 0; posicao < listaProdutos.length; posicao++) {
        if (listaProdutos[posicao].disponivel == "sim") {
            qtdTotalItensDisponiveis =
                qtdTotalItensDisponiveis + listaProdutos[posicao].qtdEstoque;
        }

    }
    console.log("Quantidade total de itens disponíveis: " + qtdTotalItensDisponiveis);
}
totalItensDisponiveis(listaProdutos);

// Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque).
function totalValores(listaProdutos) {
    let qtdTotalDeValores = 0;
    for (posicao = 0; posicao < listaProdutos.length; posicao++) {
        qtdTotalDeValores =
            qtdTotalDeValores +
            listaProdutos[posicao].qtdEstoque * listaProdutos[posicao].preco;

    } console.log("Valor total do inventário da empresa é R$" + qtdTotalDeValores);
}
totalValores(listaProdutos);

// Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o total de itens nele).
function somatorioItensDpto(listaProdutos) {
    let departamento = {
        id: 0,
        nomeDepto: 0,
        qtdEstoque: "",
    };

    let idDepto = 0;

    for (pos = 0; pos < listaProdutos.length; pos++)
        if (idDepto != listaProdutos[pos].departamento.idDepto) {
            if (departamento.id != 0) {
                console.log("Estoque do departamento ");
                console.log(departamento);
            }
            idDepto = listaProdutos[pos].departamento.idDepto;
            departamento.id = idDepto;
            departamento.nomeDepto = listaProdutos[pos].departamento.nomeDepto;
            departamento.qtdEstoque = listaProdutos[pos].qtdEstoque;
        } else {
            departamento.qtdEstoque =
                departamento.qtdEstoque + listaProdutos[pos].qtdEstoque;
        }

    console.log(departamento);
}
somatorioItensDpto(listaProdutos);

// Valor total do inventário por departamento (similar ao item anterior)
function valorInventario(listaProdutos) {
    let departamentoAtual = "";
    let totalInventario = 0;

    for (let pos = 0; pos < listaProdutos.length; pos++) {
        let produto = listaProdutos[pos];
        let departamentoProduto = produto.departamento.nomeDepto;

        if (departamentoAtual == departamentoProduto) {
            totalInventario = totalInventario + produto.preco * produto.qtdEstoque;
        } else {
            if (departamentoAtual) {
                console.log(departamentoAtual, totalInventario);
            }
            departamentoAtual = departamentoProduto;
            totalInventario = produto.preco * produto.qtdEstoque;
        }
    } console.log("O valor do inventário por departamento é: " + totalInventario)
}

valorInventario(listaProdutos);

// Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens)
function ticketMedioProd(listaProdutos) {
    let inventario = 0;
    let estoqueTotal = 0;
    let ticketMedio = 0;
    for (pos = 0; pos < listaProdutos.length; pos++) {
        estoqueTotal = estoqueTotal + listaProdutos[pos].qtdEstoque;
        inventario =
            inventario + listaProdutos[pos].preco * listaProdutos[pos].qtdEstoque;
        ticketMedio = inventario / estoqueTotal;
    }

    console.log(
        "O valor do ticket médio dos produtos da empresa é: " + ticketMedio
    );
}
ticketMedioProd(listaProdutos);

// Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que contenha o nome do departamento e o seu ticket médio)
function ticketMedioDpto(listaProdutos) {
    let departamento = {
        id: 0,
        nomeDepto: 0,
        valor: "",
    };

    let idDepto = 0;

    for (pos = 0; pos < listaProdutos.length; pos++)
        if (idDepto != listaProdutos[pos].departamento.idDepto) {
            if (departamento.id != 0) {
                console.log("Estoque do departamento ");
                console.log(departamento);
            }
            idDepto = listaProdutos[pos].departamento.idDepto;
            departamento.id = idDepto;
            departamento.nomeDepto = listaProdutos[pos].departamento.nomeDepto;
            departamento.valor =
                listaProdutos[pos].qtdEstoque * listaProdutos[pos].preco;
        } else {
            departamento.valor =
                departamento.valor +
                listaProdutos[pos].preco * listaProdutos[pos].qtdEstoque;
        }

    console.log("O ticket médio por departamento: ");
    console.log(departamento);

}
ticketMedioDpto(listaProdutos);

// Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens)
function DptoMaisValioso(listaProdutos) {
    var departamento = {
        id: 0,
        nomeDepto: "",
        inventario: 0,
    };

    var departamentoMaisValioso = {
        id: 0,
        nomeDepto: "",
        inventario: 0,
    };

    let idDepto = 0;
    for (pos = 0; pos < listaProdutos.length; pos++) {
        if (idDepto != listaProdutos[pos].departamento.idDepto) {
            //mudou o departamento
            if (departamento.id != 0) {
                // console.log("Inventario do Departamento...");
                // console.log(departamento);
                if (departamento.inventario > departamentoMaisValioso.inventario) {
                    departamentoMaisValioso.id = departamento.id;
                    departamentoMaisValioso.nomeDepto = departamento.nomeDepto;
                    departamentoMaisValioso.inventario = departamento.inventario;
                    //departamentoMaisValioso = departamento;
                }
            }
            idDepto = listaProdutos[pos].departamento.idDepto;
            departamento.id = idDepto;
            departamento.nomeDepto = listaProdutos[pos].departamento.nomeDepto;
            departamento.inventario =
                listaProdutos[pos].qtdEstoque * listaProdutos[pos].preco;
        } else {
            // manteve o departamento
            departamento.inventario =
                departamento.inventario +
                listaProdutos[pos].qtdEstoque * listaProdutos[pos].preco;
        }
    }
    //console.log(departamento);
    console.log("Departamento mais valioso: ");
    console.log(departamentoMaisValioso);
}
DptoMaisValioso(listaProdutos);

// Produto mais caro da loja (bem como seu departamento)
function prodMaisCaro(listaProdutos) {
    let precoA = listaProdutos[0].preco;
    for (pos = 1; pos < listaProdutos.length; pos++) {
        if (precoA < listaProdutos[pos].preco) {
            precoA = listaProdutos[pos].preco;
        }
    }
    for (pos = 0; pos < listaProdutos.length; pos++) {
        let produtoMaisCaro = listaProdutos[pos];

        if (produtoMaisCaro.preco === precoA) {
            console.log(
                "O produto mais caro da loja: " +
                produtoMaisCaro.descricao +
                " preço: " +
                precoA +
                " departamento: " +
                produtoMaisCaro.departamento.nomeDepto
            );
        }
    }
}
prodMaisCaro(listaProdutos);

// Produto mais barato da loja (bem como seu departamento)
function prodMaisBarato(listaProdutos) {
    let precoB = listaProdutos[0].preco;
    for (pos = 1; pos < listaProdutos.length; pos++) {
        if (precoB > listaProdutos[pos].preco) {
            precoB = listaProdutos[pos].preco;
        }
    }
    for (pos = 0; pos < listaProdutos.length; pos++) {
        let produtoMaisBarato = listaProdutos[pos];

        if (produtoMaisBarato.preco === precoB) {
            console.log(
                "O produto mais barato da loja: " +
                produtoMaisBarato.descricao +
                " preço: " +
                precoB +
                " departamento: " +
                produtoMaisBarato.departamento.nomeDepto
            );
        }
    }
}
prodMaisBarato(listaProdutos);

 
