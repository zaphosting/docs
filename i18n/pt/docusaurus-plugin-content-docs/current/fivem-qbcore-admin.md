---
id: fivem-qbcore-admin
title: "FiveM: Torne-se admin usando QBCore"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciamento aprimorado no jogo → Saiba mais agora"
sidebar_label: Torne-se admin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.

<InlineVoucher />

## Configuração

A configuração das permissões de administrador é feita através do arquivo de configuração ``server.cfg``. Para isso, faça login na interface do txAdmin e abra o Editor CFG. Depois, navegue até o final do arquivo de configuração até encontrar `Permissions`.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

O QBCore suporta vários identificadores de jogador, incluindo IDs do FiveM (`identifier.fivem:`), licenças Rockstar (`identifier.license:`) e IDs do Discord (`identifier.discord:`). Esses identificadores podem ser obtidos diretamente na sua interface do txAdmin. Assim, você pode decidir se quer dar a eles o status GOD, Admin ou Mod.

Depois de obter os identificadores e decidir qual status deseja definir, você pode atribuir permissões individuais aos jogadores adicionando-os ao seu `server.cfg`. Para isso, adicione uma dessas três opções disponíveis como uma nova entrada na seção de permissões:

```
add_principal identifier.license:xxxxxx qbcore.god   # Nome do Jogador
add_principal identifier.license:xxxxxx qbcore.admin # Nome do Jogador
add_principal identifier.license:xxxxxx qbcore.mod   # Nome do Jogador
```

O resultado final pode ficar assim, por exemplo:

```
## Permissions ##
add_ace group.admin command allow # permite todos os comandos
# Nota do Deployer: este admin master não tem identificadores para serem adicionados automaticamente.
# add_principal identifier.discord:111111111111111111 group.admin #exemplo

add_principal identifier.fivem:16219250 qbcore.admin # Nome do Jogador
```

## Conclusão

Se você seguiu todos os passos com sucesso, agora você é um admin no seu próprio servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />