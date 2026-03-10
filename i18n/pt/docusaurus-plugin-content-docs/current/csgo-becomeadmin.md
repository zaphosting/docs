---
id: csgo-becomeadmin
title: "CS:GO: Torne-se admin"
description: "Descubra como atribuir e gerenciar permissões de administrador para controle total do servidor em CS:GO com Sourcemod → Saiba mais agora"
sidebar_label: Torne-se admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo Sourcemod diretamente no jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Preparação

Para usar privilégios de administrador, primeiro é preciso estabelecer uma base. Por padrão, o CS:GO não oferece um gerenciamento completo de administração. No entanto, existem frameworks para esse propósito, como o Sourcemod. O framework deve ser instalado para configuração. Se você ainda não instalou, confira nosso guia de instalação de plugin para CS:GO.

## Definindo Admins

Adicionar admins pode ser feito via o arquivo de configuração `admins_simple.ini` ou `admins.cfg`, encontrados em `../csgo/cstrike/addons/sourcemod/configs/`. Para configurações simples, o `admins_simple.ini` geralmente é suficiente. Nele, você pode definir admins pelo SteamID e atribuir flags de permissão diretamente.

```ini title="admins_simple.ini (Exemplo)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

Neste exemplo, o primeiro admin recebe permissões totais através da flag `z`, enquanto o segundo admin recebe apenas permissões selecionadas.

Se quiser usar configurações mais avançadas como grupos, imunidade ou senhas, use o `admins.cfg`.

```
Admins
{
  "User 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "User 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## Definindo Grupos de Admin

Também é possível definir grupos de admin. Assim, as permissões de um admin podem ser gerenciadas via seu grupo correspondente. Dessa forma, não é necessário configurar permissões individualmente para cada admin. Os grupos são definidos no arquivo `admin_groups.cfg`, localizado em `../csgo/cstrike/addons/sourcemod/configs/`.

```
Groups
{
  "Full Admin"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderator"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

Depois, você pode atribuir um grupo a um admin no arquivo `admins.cfg`:

```
Admins
{
  "User 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Full Admin"
  }
}
```

## Definindo Imunidade de Admin

Um valor de imunidade pode ser atribuído a admins ou grupos. Se um admin com imunidade menor tentar agir contra outro admin com imunidade maior, o comando falhará. Você pode definir o valor de imunidade adicionando a chave `immunity` para cada admin em `admins.cfg` ou diretamente em `admin_groups.cfg`.

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

Um valor de imunidade maior significa um nível maior de proteção contra ações administrativas de outros admins com imunidade menor.

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador para seu servidor de jogos CS:GO com Sourcemod. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />