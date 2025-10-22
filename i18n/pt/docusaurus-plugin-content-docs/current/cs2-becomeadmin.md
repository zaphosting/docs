---
id: cs2-becomeadmin
title: "CS2: Tornar-se admin"
description: "Descubra como atribuir e gerenciar permissões de administrador para controle total do servidor no gameplay de CS2 → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Preparação
Para usar privilégios de administrador, primeiro é preciso estabelecer uma base. Por padrão, o CS2 não oferece uma gestão completa de administração. No entanto, existem frameworks para esse propósito, como o CounterStrikeSharp. O framework deve ser instalado para configuração. Se você ainda não instalou, confira nosso [guia de Instalação de Plugins](cs2-plugins).

## Definindo Admins

Adicionar um admin é feito via o arquivo de configuração `admins.json`, localizado em `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`. Para declarar um novo admin, você deve criar uma nova entrada. Essa entrada deve incluir um nome, identificador (identity) e flags (permissões). O nome pode ser escolhido por você, pois serve apenas como um marcador/identificador. Para o identificador "identity", deve ser fornecido o SteamID da conta Steam. Além disso, as flags precisam ser definidas conforme necessário.

```js title="admins.json (Exemplo)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## Definindo Grupos de Admin
Também é possível definir grupos de admin. Assim, as permissões de um admin podem ser definidas via seu grupo correspondente. Dessa forma, não é necessário configurar permissões individualmente para cada admin. Os grupos são definidos no arquivo de configuração admin_groups.json, localizado em `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`.

```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## Definindo Imunidade de Admin
Um valor de imunidade pode ser atribuído aos admins. Se um admin ou jogador com valor de imunidade menor atacar outro admin ou jogador com valor de imunidade maior, o comando falhará. Você pode definir um valor de imunidade adicionando a chave immunity para cada admin em configs/admins.json.

```json
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
A verificação de imunidade não é realizada automaticamente pelo CounterStrikeSharp. Cabe aos plugins individuais gerenciar essa verificação de imunidade.
:::

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />