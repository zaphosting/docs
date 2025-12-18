---
id: factorio-becomeadmin
title: "Factorio: Torne-se um Admin"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciar opções do jogo de forma eficaz → Saiba mais agora"
sidebar_label: Torne-se admin
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis no jogo diretamente dentro do próprio jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Configuração

Os direitos de administrador permitem que você faça alterações diretamente no jogo no seu servidor, sem precisar alterar o Config. Adicionar um admin é feito via o arquivo **server-settings.json** do Config, que você encontra na interface em Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

No final do arquivo de config está a parte importante. Os admins são definidos ali:

```
  "_comment_admins": "Lista de nomes de usuário case insensitive, que serão promovidos imediatamente",
  "admins": []
}
```

Os nomes dos jogadores que devem receber direitos de administrador precisam ser especificados ali. Se vários admins forem adicionados, pode ficar assim, por exemplo:

```
  "_comment_admins": "Lista de nomes de usuário case insensitive, que serão promovidos imediatamente",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

Os jogadores com os nomes **PlayerName1, PlayerName2, PlayerName3** agora receberam as permissões. Comandos de admin podem ser executados no jogo via console. A seguir você encontra uma visão geral dos comandos mais usados.



### Comandos mais usados

|                Comando                 |                         Descrição                          |
| :------------------------------------: | :----------------------------------------------------------: |
|                 /admin                 |               Abre a interface de gerenciamento de jogadores.               |
|           /ban player reason           |                          Bane o jogador                          |
|                 /bans                  |               Exibe a lista de jogadores banidos.               |
|             /unban player              |                         Desbane o jogador                         |
|  /banlist add/remove/get/clear player  | Adiciona ou remove um jogador da lista de banimento. Igual a /ban ou /unban. |
|          /kick player reason           |                         Expulsa o jogador                          |
|              /mute player              |                         Silencia o jogador                          |
|             /unmute player             |                        Remove o silêncio do jogador                         |
| /whitelist add/remove/get/clear player |         Adiciona ou remove um jogador da whitelist          |

Mais comandos disponíveis podem ser encontrados na [Wiki oficial do Factorio](https://wiki.factorio.com/Console).


## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />