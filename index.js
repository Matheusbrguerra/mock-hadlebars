const express = require('express')
const moment = require('moment')
const hb = require('handlebars')
const fs = require('fs');
const app = express()

app.get('/', (req, res) => {
  const raw = fs
    .readFileSync('index.html')
    .toString();
  const template = hb.compile(raw);

  const poc = JSON.parse(`{
    "id": 12,
    "AlcadaId": 12,
    "PocId": 12,
    "Alcada": {
      "id": 12,
      "ContextoId": 4,
      "status": 1,
      "justificativa": "uma observação muito relevante Batman é um personagem fictício, um super-herói da banda desenhada americana publicada pela DC Comics. Foi criado pelo escritor Bill Finger e pelo artista Bob Kane, e apareceu pela primeira vez na revista Detective Comics #27 (Maio de 1939).",
      "UsuarioId": "OI398863",
      "createdAt": "2021-01-12T15:12:35.773Z",
      "updatedAt": "2021-01-12T15:12:35.773Z",
      "Usuario": {
        "id": "OI398863",
        "nome": "JONATHAN VELOSO",
        "cpf": "10463904656",
        "email": "matheus.bromonschenkel@gmail.com",
        "telefone": "31989915622",
        "idRede": "OI398863",
        "status": 1,
        "perfilId": 1
      }
    },
    "Poc": {
      "id": 12,
      "PipelineId": 1,
      "razaoSocial": "Padaria do Seu zé",
      "cnpj": "00.544.659/0001-09",
      "regional": "KAC",
      "estado": "MG",
      "cidade": "Disneylandia",
      "propostaId": "-",
      "gpEntregaResponsavel": "-",
      "gpEmail": "-",
      "telefone": "-",
      "descricao": "asdasdasdasd",
      "temParceiroSugerido": true,
      "parceiroSugerido": "Bataman",
      "parceiroJustificativa": "Batman é um personagem fictício, um super-herói da banda desenhada americana publicada pela DC Comics. Foi criado pelo escritor Bill Finger e pelo artista Bob Kane, e apareceu pela primeira vez na revista Detective Comics #27 (Maio de 1939).",
      "periodoInicial": "04/01/2021",
      "periodoFinal": "08/01/2021",
      "temCustoCliente": true,
      "custoCliente": "R$ 445,56",
      "temCustoOi": false,
      "custoOi": "-",
      "resultadoEsperado": "conquistar o mundo",
      "temNegociacaoFechada": true,
      "detalhePosNegociacao": "Robin falou que topa ajudar se o Batman topar",
      "potencialReceitaMensal": "R$ 500,99",
      "observacao": "uma observação muito relevante Batman é um personagem fictício, um super-herói da banda desenhada americana publicada pela DC Comics. Foi criado pelo escritor Bill Finger e pelo artista Bob Kane, e apareceu pela primeira vez na revista Detective Comics #27 (Maio de 1939).",
      "createdAt": "2021-01-12T15:12:35.701Z",
      "updatedAt": "2021-01-12T15:12:35.701Z",
      "Pipeline": {
        "id": 1,
        "ImportacaoId": null,
        "cnpjReferencia": "07737623000190",
        "AcaoComercialId": null,
        "nomeCdc": "1001",
        "nomeProjeto": null,
        "resumoProjeto": null,
        "obs": null,
        "statusCicloVenda": 3,
        "motivoPerda": null,
        "previsaoFechamento": null,
        "PipelineStatusId": null,
        "ativo": 2,
        "dataCompromisso": null,
        "criadoPor": "OI398863",
        "desativadoPor": null,
        "criadoEm": "2021-01-12T17:14:12.137Z",
        "tipoVenda": 1,
        "dataAtualizacao": "2021-01-12T21:08:15.100Z",
        "ganhoDataFechamento": null,
        "perdidoQuem": null,
        "perdidoPorque": null,
        "perdidoCondicoes": null,
        "perdidoDiferencial": null,
        "perdidoPrecoOi": null,
        "perdidoPrecoConcorrente": null,
        "perdaMotivo": null,
        "ganhoComprovacao": null,
        "ganhoObs": null,
        "ganhoReverter": null,
        "ganhoMotivo": null,
        "alcadaGanhoOferta": null,
        "ganhoCnpj": null,
        "ganhoProposta": null,
        "cnpj": null,
        "ganhoAlcada": null,
        "dataLicitacao": null,
        "probabilidadeFecharOi": null,
        "usuarioAtualizacao": null,
        "statusLead": null,
        "nota": null,
        "dataUltimoCiclo": "2021-01-12T14:14:15.030Z",
        "Cliente": {
          "id": "07737623000190",
          "nome": "A ! BODYTECH PARTICIPACOES SA",
          "cnpj": "07737623000190",
          "cnpjCompleto": "07737623000190",
          "cnpjRaiz": "07737623",
          "razaoSocial": "A ! BODYTECH PARTICIPACOES SA",
          "numCdc": 242015,
          "uf": "ES",
          "regional": "RJ",
          "contencioso": 2,
          "status": 1,
          "createdBy": "68314",
          "carteira_fixa": null,
          "carteira_movel": null,
          "pedido_firme": null,
          "tipo_atendimento": null,
          "createdAt": "2018-11-02T16:03:35.317Z",
          "codAtendimento": 11,
          "cdcId": 242015
        }
      }
    },
    "products": [
      {
        "id": 6,
        "ProdutoId": 9,
        "nome": "Projeto Especial",
        "status": 1,
        "minimoAlcada": null,
        "id_produto": 9,
        "produtoId": 9,
        "Produto": {
          "id": 9,
          "FamiliaId": 2,
          "nome": "CPE",
          "status": true,
          "Familia": {
            "id": 2,
            "nome": "DADOS",
            "status": true
          }
        }
      }
    ],
    "link": "http://127.0.0.1:4433/#/login/?redirect=map3c/alcada-poc/:id_poc/alcadas/:id_alcada/aprovacao?hash=a8bf109e57355ff9798152183dcb0cec2fa13821"
  }`)

  
  Object.entries(poc.Poc).forEach(atributoPoc => {
    if(atributoPoc[1] === '' || atributoPoc[1] === undefined || atributoPoc[1] === null){
      poc.Poc[atributoPoc[0]] = '-' 
    }
  })
  
  return res.send(template(poc))
})

app.listen(3000, () => console.log("Rodando na porta 3000"))