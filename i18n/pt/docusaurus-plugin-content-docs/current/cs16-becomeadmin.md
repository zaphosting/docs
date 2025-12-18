---
id: cs16-becomeadmin
title: "CS 1.6: Torne-se admin no seu próprio servidor"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciamento aprimorado dentro do jogo → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Configuração
Adicionar um admin é feito via o arquivo de configuração **users.ini**. Para poder se tornar admin e encontrar esses arquivos, você precisa instalar primeiro o **AMXmodX** e o **Metamod**. Se ainda não fez isso, vale a pena conferir o seguinte guia: [Instalar Plugins](cs16-plugins.md)

Para editar o arquivo de configuração **users.ini**, você precisa se conectar ao servidor via FTP. Lá, navegue até o diretório ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``. Em seguida, abra o arquivo com um editor de texto e faça as modificações.

<InlineVoucher />

```
...
; Exemplos de contas de admin:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "Meu Nome" "minha_senha" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

No arquivo de configuração, a entrada ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` deve ser ajustada. Antigamente a autenticação era feita apenas por nome e senha. Hoje em dia, é feita somente via SteamID64. Você pode encontrar seu SteamID64 abrindo seu perfil Steam e clicando com o botão direito em qualquer lugar do perfil. Depois, clique em **Copiar URL do Steam**.

Depois, cole a URL em um dos seguintes sites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

Isso vai te mostrar as informações gerais da conta, incluindo o Steam ID. Aqui, só precisamos do SteamID64. O Steam ID deve ser adicionado na entrada do cliente em **SteamID**. O resultado fica assim:

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

A linha contém as seguintes informações:

1. nome/SteamID - ID único do jogador.  
2. senha - nenhuma disponível se for autenticação Steam  
3. nível de permissão  
4. flags de conexão - as flags controlam como o AMX Mod X tenta autorizar um admin que está conectando.

Nesse caso, não é necessária senha, pois a autenticação é via Steam. Por isso, usamos ``ce`` em vez de ``en``. Abaixo você encontra uma visão geral de todos os níveis de autorização e flags de conexão:

**Nível de autorização**

| Nível de autorização | Descrição                                                  |
| -------------------- | ---------------------------------------------------------- |
| a                    | imunidade (não pode ser kickado/banido/morto/bate e afetado por outros comandos) |
| b                    | reserva (pode entrar em slots reservados)                  |
| c                    | comando amx_kick                                           |
| d                    | comandos amx_ban e amx_unban                               |
| e                    | comandos amx_slay e amx_slap                               |
| f                    | comando amx_map                                           |
| g                    | comando amx_cvar (nem todos os cvars estarão disponíveis)  |
| h                    | comando amx_cfg                                           |
| i                    | comandos amx_chat e outros comandos de chat               |
| j                    | comandos amx_vote e outros comandos de votação            |
| k                    | acesso ao cvar sv_password (via comando amx_cvar)          |
| l                    | acesso ao comando amx_rcon e cvar rcon_password (via comando amx_cvar) |
| m                    | nível customizado A (para plugins adicionais)              |
| n                    | nível customizado B (para plugins adicionais)              |
| o                    | nível customizado C (para plugins adicionais)              |
| p                    | nível customizado D (para plugins adicionais)              |
| q                    | nível customizado E (para plugins adicionais)              |
| r                    | nível customizado F (para plugins adicionais)              |
| s                    | nível customizado G (para plugins adicionais)              |
| t                    | nível customizado H (para plugins adicionais)              |
| u                    | acesso ao menu                                            |
| z                    | usuário (sem admin)                                        |

**Flags de conexão**

| Flag | Descrição                                         |
| -----| -------------------------------------------------|
| a    | desconectar jogador em senha inválida             |
| b    | tag de clã                                        |
| c    | este é steamid/wonid                              |
| d    | este é IP                                         |
| e    | senha não verificada (apenas nome/IP/steamid necessários) |

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />