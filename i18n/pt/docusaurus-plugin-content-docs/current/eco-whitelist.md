---
id: eco-whitelist
title: "ECO: Whitelist"
description: "Informações sobre como colocar seu servidor ECO na whitelist com a ZAP-Hosting→ Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma whitelist é uma lista de acesso que limita quem pode se conectar ao seu servidor. No ECO, a whitelist fica armazenada na configuração `Users.eco` e é ativada automaticamente assim que pelo menos um SteamID64 estiver presente.

## Ativando a Whitelist

Conecte-se ao seu servidor via FTP e localize o arquivo `Users.eco`. Abra-o e encontre a seção `WhiteList`. Adicione os valores SteamID64 dentro de `$values`.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Salve o arquivo e reinicie o servidor para garantir que a nova lista de acesso seja aplicada.

## Gerenciando Jogadores na Whitelist

Adicionar jogadores também pode ser feito pelo Console ao Vivo no gerenciamento do servidor de jogos da ZAP-Hosting, se você tiver a permissão necessária no jogo. Use o comando whitelist com o nome do jogador.

```text
/whitelist PlayerName
```

Remover jogadores é feito editando o `Users.eco`. Apague o SteamID64 de `$values`, salve e reinicie o servidor, já que não existe comando no servidor para remover entradas.

## Verificando o Funcionamento da Whitelist

Após o reinício, tente conectar com uma conta que não esteja incluída em `$values`. O acesso deve ser bloqueado. Depois, conecte com uma conta que esteja na whitelist.

Se o acesso ainda estiver liberado, confirme que pelo menos um SteamID64 está presente e que o arquivo `Users.eco` que você editou corresponde à instância ativa do servidor.

## Conclusão

Se todas as etapas acima foram seguidas corretamente, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor mais uma vez e verifique o arquivo ou a saída do comando para confirmar que a alteração foi aplicada.

<InlineVoucher />