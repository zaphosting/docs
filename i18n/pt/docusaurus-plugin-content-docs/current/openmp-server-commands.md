---
id: openmp-server-commands
title: "Open.mp: Comandos do Servidor Open.mp"
description: "Descubra como gerenciar comandos do servidor Open.mp com acesso RCON de forma segura e melhore o controle do seu servidor → Saiba mais agora"
sidebar_label: Comandos do Servidor
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores Open.mp vêm com um conjunto de comandos úteis embutidos que podem ser usados dentro do jogo e pelo console do servidor. Neste guia, vamos explorar muitos desses comandos, fornecendo descrições e exemplos de uso para cada um.

<InlineVoucher />

## Configurando o acesso (RCON)

Para poder executar comandos do servidor dentro do jogo, você precisa ativar o recurso RCON. Acesse o arquivo de configuração `config.json` e ajuste os parâmetros necessários para ativar o recurso e definir uma senha. Use nosso [guia de Configuração do Servidor](openmp-configuration.md) para acessar o arquivo de configuração do seu servidor.

Com o arquivo aberto, localize os parâmetros abaixo; ative o recurso e defina uma senha para o RCON.

| Nome do Parâmetro             | Exemplo                                | Descrição                                                                                      |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------- | 
| rcon.enable                   | true                                  | Ativa ou desativa o recurso RCON                                                              |
| rcon.password                 | ZAP-IS-AWESOME                        | Define a senha que deve ser usada para acessar o RCON pelos clientes                           |

:::info
Garanta que você configurou uma senha para o RCON no seu arquivo de configuração. Caso contrário, você pode ter problemas e o RCON ficará acessível para qualquer pessoa, o que é altamente inseguro.
:::

Depois de fazer as alterações, salve o arquivo no local correto e reinicie seu servidor. Na próxima vez que o servidor iniciar, o RCON estará acessível e pronto para uso.

:::tip
Quer saber mais sobre RCON? Dá uma olhada no nosso [guia de RCON](openmp-rcon.md) que explica tudo em detalhes.
:::

## Comandos Disponíveis

A tabela abaixo mostra vários comandos importantes para servidores Open.mp, com exemplos de uso e descrições. Eles podem ser usados dentro do jogo, pelo console do servidor ou via um programa RCON. Para ver todos os comandos atuais, recomendamos o [guia de controle de servidor do open.mp](https://www.open.mp/docs/server/ControllingServer), que lista todos os comandos disponíveis.

:::tip
Quando executar comandos direto pelo console ou via programa RCON, não precisa usar o prefixo `/rcon`. Use o prefixo **somente** quando estiver rodando os comandos **dentro do jogo**.
:::

:::note
Certifique-se de que o RCON está ativado, caso contrário esses comandos não funcionarão dentro do jogo nem via programa RCON.
:::

### Comandos Gerais

| Sintaxe do Comando            | Valores Aceitos  | Descrição                                                          | 
| ----------------------------- | ---------------- | ------------------------------------------------------------------ | 
| /rcon cmdlist                 | -                | Retorna uma lista com todos os comandos do servidor               | 
| /rcon varlist                 | -                | Retorna uma lista com todas as variáveis atuais do servidor       | 
| /rcon exit                    | -                | Desliga o servidor                                                | 
| /rcon echo [texto]            | String           | Envia uma mensagem para o console do servidor (não aparece no jogo) | 
| /rcon say [texto]             | String           | Envia uma mensagem para todos os jogadores no jogo (aparece como "Admin: [texto]") | 
| /rcon players                 | -                | Mostra informações sobre todos os jogadores conectados atualmente | 
| /rcon reloadlog               | -                | Recarrega o arquivo de log do servidor                             |

### Comandos Moderativos

| Sintaxe do Comando            | Valores Aceitos  | Descrição                                                          | 
| ----------------------------- | ---------------- | ------------------------------------------------------------------ | 
| /rcon kick [id]               | Inteiro          | Expulsa o jogador alvo do servidor                                | 
| /rcon ban [id]                | Inteiro          | Bane o jogador alvo do servidor                                   | 
| /rcon banip [ip]              | String           | Bane um endereço IP do servidor                                   | 
| /rcon unbanip [ip]            | String           | Remove o banimento de um endereço IP do servidor                  | 
| /rcon reloadbans              | -                | Recarrega o arquivo de banimentos                                 |

<InlineVoucher />