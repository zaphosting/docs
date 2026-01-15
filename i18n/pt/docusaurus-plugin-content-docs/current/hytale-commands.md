---
id: hytale-commands
title: "Hytale: Lista de Comandos"
description: "Visão geral dos comandos disponíveis no console e no jogo para servidores Hytale → Saiba mais agora"
sidebar_label: Lista de Comandos
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores Hytale oferecem uma variedade de comandos que permitem aos administradores gerenciar o gameplay, jogadores, mundos e a configuração do servidor. Esses comandos podem ser executados tanto pelo console do servidor ao vivo quanto diretamente no jogo, desde que as permissões necessárias estejam disponíveis.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Esta página traz uma visão geral dos comandos mais usados e oficialmente documentados para servidores Hytale.

<InlineVoucher />



## Autenticação

Comandos de autenticação são necessários para autorizar o servidor a aceitar conexões de jogadores e interagir com os serviços online do Hytale.

| Comando               | Descrição                                                  |
| --------------------- | ------------------------------------------------------------ |
| `/auth login device`  | Inicia o fluxo de autenticação via dispositivo. O servidor gera uma URL e um código de dispositivo que devem ser confirmados usando uma conta Hytale. |
| `/auth login browser` | Inicia o fluxo de autenticação via navegador. Requer ambiente gráfico no servidor. |
| `/auth status`        | Exibe o status atual da autenticação do servidor.           |
| `/auth logout`        | Desloga o servidor e remove a sessão de autenticação ativa. |



## Jogador & Permissões

Esses comandos controlam o acesso administrativo e a atribuição detalhada de permissões para usuários e grupos.

| Comando                                   | Descrição                                             |
| ----- | - |
| `/op add <PlayerName>`                    | Concede privilégios de operador ao jogador especificado.     |
| `/op remove <PlayerName>`                 | Revoga privilégios de operador do jogador especificado.  |
| `/perm user list <uuid>`                  | Exibe todas as permissões atribuídas diretamente ao usuário. |
| `/perm user add <uuid> <permission>`      | Atribui uma ou mais permissões diretamente ao usuário.   |
| `/perm user remove <uuid> <permission>`   | Remove permissões específicas do usuário.             |
| `/perm user group list <uuid>`            | Mostra todos os grupos de permissão aos quais o usuário pertence.    |
| `/perm user group add <uuid> <group>`     | Adiciona o usuário ao grupo de permissão especificado.        |
| `/perm user group remove <uuid> <group>`  | Remove o usuário do grupo de permissão especificado.   |
| `/perm group list <group>`                | Lista todas as permissões atribuídas a um grupo.              |
| `/perm group add <group> <permission>`    | Adiciona permissões a um grupo.                            |
| `/perm group remove <group> <permission>` | Remove permissões de um grupo.                       |



## Lista Branca (Whitelist)

Comandos de whitelist restringem o acesso ao servidor apenas para jogadores aprovados.

| Comando                          | Descrição                                      |
| -------------------------------- | ------------------------------------------------ |
| `/whitelist add <playername>`    | Adiciona o jogador especificado à whitelist.      |
| `/whitelist remove <playername>` | Remove o jogador especificado da whitelist. |
| `/whitelist list`                | Exibe todos os jogadores atualmente na whitelist.      |
| `/whitelist enable`              | Ativa a aplicação da whitelist.                   |
| `/whitelist disable`             | Desativa a whitelist.                          |
| `/whitelist status`              | Exibe o status atual da whitelist.           |



## Gerenciamento de Mundo

Comandos de mundo controlam a criação, carregamento, descarregamento e exclusão de mundos.

| Comando                    | Descrição                                        |
| -- | -- |
| `/world create <name>`     | Cria um novo mundo com o nome especificado.       |
| `/world load <name>`       | Carrega um mundo existente e o torna ativo.       |
| `/world unload <name>`     | Descarrega um mundo sem apagar seus dados.         |
| `/world remove <name>`     | Apaga um mundo e todos os dados associados.           |
| `/world setdefault <name>` | Define o mundo padrão que carrega na inicialização do servidor. |



## Gameplay e Ambiente

Esses comandos afetam diretamente as regras do jogo e o comportamento do mundo.

| Comando                    | Descrição                                 |
| -------------------------- | ------------------------------------------- |
| `/list`                    | Exibe todos os jogadores conectados no momento.   |
| `/tp <player> <target>`    | Teleporta um jogador para outro jogador.     |
| `/tp <player> <x> <y> <z>` | Teleporta um jogador para coordenadas específicas. |



## Teleporte & Posicionamento

Comandos usados para gerenciar posições e visibilidade dos jogadores.

| Comando                    | Descrição                                 |
| -- | - |
| `/list`                    | Exibe todos os jogadores conectados no momento.   |
| `/tp <player> <target>`    | Teleporta um jogador para outro jogador.     |
| `/tp <player> <x> <y> <z>` | Teleporta um jogador para coordenadas específicas. |



## Utilitários e Ajuda

Comandos utilitários fornecem ajuda e informações do servidor.

| Comando           | Descrição                                          |
| ----- | ---- |
| `/help`           | Exibe uma lista dos comandos disponíveis.               |
| `/help <command>` | Exibe ajuda detalhada para um comando específico.       |
| `/status`         | Mostra o status atual do servidor e informações de runtime. |



## Conclusão

O sistema de comandos do Hytale oferece ferramentas poderosas para gerenciar servidores, jogadores e o comportamento do gameplay. Entendendo e usando os comandos disponíveis, administradores podem operar e personalizar seu ambiente de servidor Hytale com eficiência.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂



<InlineVoucher />