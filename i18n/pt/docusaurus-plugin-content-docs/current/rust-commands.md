---
id: rust-commands
title: "Rust: Comandos de Admin"
description: "Descubra comandos essenciais de Rust para gerenciamento de servidor e controle de jogadores para otimizar o gameplay e a administração → Saiba mais agora"
sidebar_label: Comandos de Admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Rust tem uma variedade enorme de comandos diferentes disponíveis para donos de servidor e jogadores usarem. Nesta página, resumimos os mais úteis e populares, usados para configurações do servidor, administração de jogadores e controle dos players.

:::info
Alguns comandos exigem o uso do Steam64 ID do jogador. Use o pequeno tutorial abaixo para entender como pegar o Steam ID de um jogador.
:::

<InlineVoucher />

## Como pegar seu Steam ID
Primeiro, use uma ferramenta como o [Steam ID Finder](https://steamidfinder.com/) para conseguir seu Steam64 ID.

Aqui você insere a URL do seu Steam:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Depois clique em `Find Steam ID`. Agora você deve ver seu perfil Steam, copie o "Steam64ID (Dec)".

E é isso, agora você tem o Steam64 ID e pode usar nos comandos que pedem esse ID abaixo.

## Categorias de Comandos

Use as abas abaixo para navegar entre as categorias. As tabelas mostram o comando, os valores aceitos (se aplicável) e uma descrição para facilitar o entendimento.

:::info
Qualquer comando mencionado aqui é para Rust vanilla.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Configurações do Servidor" default>

| Sintaxe do Comando                  | Valores Aceitos | Descrição | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Quando true, qualquer mensagem no chat será mostrada para todos os jogadores         | 
| server.stop      | -          | Para o servidor         | 
| server.save      | -          | Salva o servidor         | 
| server.saveinterval "valor"      | Inteiro (padrão 60)          | Define o intervalo de auto-save do servidor (em segundos)         | 
| server.secure      | true/false          | Quando true, o Easy Anti Cheat (EAC) bloqueia conexões de jogadores não registrados ou banidos antes de conectarem         | 
| server.seed "valor"     | Inteiro (ex: 123456)          | Define a seed do mundo do servidor         | 
| server.stability      | true/false          | Quando true, ativa a estabilidade das estruturas dos prédios         | 
| server.tickrate "taxa"      | Inteiro (padrão 30)          | Define a taxa de ticks do servidor         | 
| server.writecfg      | -          | Salva as mudanças de configuração feitas por outros comandos do servidor         | 
| chat.serverlog      | true/false          | Quando true, o chat sempre será registrado no console do servidor         | 
| commands.echo "texto"      | String (ex: "Hello World!")          | Imprime a mensagem especificada no console do servidor         | 
| global.say "mensagem"      | String (ex: "Welcome!")          | Envia uma mensagem para todos os jogadores no servidor         | 
| env.time      | Inteiro (ex: 16)          | Define o horário do mundo no jogo (em horas)         | 
| server.events      | -          | Quando true, ativa eventos do servidor como airdrops         | 
| commands.find "comando"      | String (ex: "quit")          | Busca um comando ou usando "." lista todos os comandos disponíveis         | 
| global.quit      | -          | Salva o servidor e o para         | 
| global.init      | -          | Carrega arquivos de configuração         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Administração de Jogadores">

| Sintaxe do Comando                  | Valores Aceitos | Descrição | 
| ----------------------- | ---------- | --------- | 
| global.ban "nomeDoJogador" "motivo"      | String (ex: "Jacob"), String (ex: "Foi mal!")          | Bane um usuário do servidor (motivo opcional)         | 
| global.banid "steam64"      | Inteiro          | Bane um usuário pelo Steam64 ID         | 
| global.banlistex      | -          | Retorna a lista de usuários banidos com nome e motivo         | 
| global.banlist      | -          | Retorna a lista de jogadores banidos no chat         | 
| global.unban "steam64"      | Inteiro          | Desbane um usuário pelo Steam64 ID         | 
| global.kickall      | -          | Expulsa todos os jogadores do servidor         | 
| global.kick "steam64 / nomeDoJogador" "motivo"      | Inteiro/String (ex: "Jacob"), String (ex: "Foi mal!")         | Expulsa um usuário pelo Steam64 ID ou nome (motivo opcional)         | 
| global.ownerid "steam64 / nomeDoJogador"      | Inteiro/String (ex: "Jacob")          | Define o jogador como admin do servidor pelo Steam64 ID ou nome (Auth level 2)         | 
| global.removeowner "steam64"      | Inteiro         | Remove privilégios de admin pelo Steam64 ID         | 
| global.moderatorid "steam64 / nomeDoJogador"      | Inteiro/String (ex: "Jacob")          | Define o jogador como moderador do servidor pelo Steam64 ID ou nome (Auth level 1)         | 
| global.removemoderator "steam64"      | Inteiro          | Remove privilégios de moderador pelo Steam64 ID         | 
| global.listid      | -          | Retorna lista de usuários banidos via Steam64 ID          | 

</TabItem>
<TabItem value="Player Controls" label="Controles do Jogador">

| Sintaxe do Comando                  | Valores Aceitos | Descrição | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Mata seu próprio personagem         | 
| global.quit      | -          | Salva e sai do jogo         | 
| global.god      | true/false          | Ativa/desativa modo Deus para o jogador não receber dano (só admins)          | 
| global.noclip      | true/false          | Ativa/desativa modo Noclip para voar livremente (só admins)          | 
| global.debugcamera      | true/false          | Ativa/desativa modo câmera livre para debug (só admins)          | 
| player.sleep      | -          | Força seu personagem a dormir         | 
| commands.find "comando"      | String (ex: "quit")          | Busca um comando disponível para o jogador
| chat.say "texto"     | String (ex: "Hello World!")          | Envia uma mensagem para todos os jogadores no servidor         | 
| inventory.give "itemID" "quantidade"     | Inteiro (itemID), Inteiro (ex: 5)          | Dá um item para seu inventário         | 
| inventory.giveto "nomeDoJogador" "itemID" "quantidade"      | String (ex: "Jacob"), Inteiro (itemID), Inteiro (ex: 5)          | Dá um item para o inventário do jogador especificado         | 

</TabItem>
</Tabs>

<InlineVoucher />