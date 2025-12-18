---
id: vrising-becomeadmin
title: "V Rising: Como virar admin"
description: "Descubra como gerenciar e atribuir permissões de administrador completas para seu servidor de jogos de forma eficiente → Saiba mais agora"
sidebar_label: Virar admin
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis no jogo diretamente dentro dele. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

### Adicionar permissões

A administração das permissões de admin é feita pelo arquivo de configuração **adminlist.txt**. Você pode acessar esse arquivo na interface web em Configs. É necessário o SteamID64 do jogador para adicionar um admin. Você pode obtê-lo abrindo seu perfil Steam e clicando com o botão direito em qualquer lugar. Lá, você terá a opção de copiar a URL da página. Essa URL pode ser inserida em um dos seguintes sites: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Depois, cole a URL do seu perfil Steam no campo indicado e você receberá seu SteamID64. Adicione o SteamID64 no arquivo de configuração **adminlist.txt**. Para isso, acesse a administração do seu servidor de jogos na interface web, vá até a categoria Configs e abra o arquivo adminlist.txt. 

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
Se você pretende atribuir permissões de admin para vários jogadores, cada SteamID deve estar em uma linha separada para cada jogador. 
:::

### Ativar permissões

Antes de poder atribuir as permissões de admin no jogo, você precisa ativar o console do seu jogo. Conecte-se ao seu servidor e vá para as configurações. Nas configurações, ative a opção **Console Enabled**. O console pode ser aberto por padrão com a tecla Gravis no teclado. As permissões de admin podem então ser ativadas no console com o comando `adminauth`. 

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)


### Lista de comandos de admin

Aqui está uma visão rápida dos comandos de admin mais comuns que você pode executar no seu servidor. 

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Atribuição de permissões de admin                        |
| admindeauth              | Remoção de permissões de admin                           |
| banuser [nome/IP/userID] | Banir um jogador específico por nome, IP ou user ID     |
| banned                   | Exibe a lista de todos os usuários banidos              |
| bancharacter             | Usado para banir um personagem específico                |
| give [nome]              | Fornece um item específico no jogo                       |
| giveset                  | Permite explorar vários conjuntos de armaduras e armas  |
| kick [nome/IP/userID]    | Expulsar um jogador específico por nome, IP ou user ID  |
| unban [nome/IP/userID]   | Desbanir um jogador específico por nome, IP ou user ID  |


## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />