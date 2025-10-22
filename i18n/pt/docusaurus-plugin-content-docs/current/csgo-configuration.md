---
id: csgo-configuration
title: "CSGO: Configuração do servidor"
description: "Descubra como configurar servidores de Counter-Strike para vários modos de jogo e ajustes para otimizar a experiência → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guia Arquivado
Este documento foi arquivado. Documentos são arquivados quando não são mais relevantes, estão incorretos ou desatualizados. Foi arquivado pelos seguintes motivos:

Motivo: CS:GO não é mais oferecido ativamente e não está mais sendo desenvolvido. CS2 é a sequência do CS:GO. Recomendamos a migração para CS2.
::::



## Introdução

Servidores de Counter-Strike podem ser configurados de várias formas. Configurações básicas podem ser ajustadas via o arquivo **Server.cfg** e pela página de configurações na interface web. A configuração avançada é feita através dos arquivos de configuração do modo de jogo, como gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg, etc.

Nas configurações você pode escolher o modo de jogo que deseja usar. Os comandos desse arquivo são então carregados conforme a escolha. Eles podem ser gerenciados tanto na administração do servidor de jogos quanto manualmente via FTP em **gXXXXXX/csgo/csgo/cfg/**. 


<InlineVoucher />

## Configuração


### Configuração via interface (Configurações)

Na página de configurações você pode ajustar definições básicas para o token GSL, tipo/modo de jogo, grupo de mapas, tickrate e mais.  

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**Token GSL**

Gameserver Login Tokens (GSLTs) são um procedimento implementado pela Steam como medida de proteção. Para rodar servidores de jogos de certos jogos Steam (principalmente jogos Source) é necessário gerar um token. Mais informações detalhadas estão aqui:

[GSL-Token](source-gsltoken.md)



**Tipo de jogo**

Existem diferentes modos de jogo. Abaixo você vê uma lista de todas as opções disponíveis:

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Grupo de mapas**

Grupos de mapas são conjuntos de mapas que normalmente correspondem a uma certa categoria. Por padrão existem os grupos **mg_active, mg_armsrace, mg_demolition, mg_allclassic**. Opcionalmente você pode criar seus próprios grupos. Isso deve ser adicionado ao arquivo **Gamemodes_server.txt**. A estrutura de um grupo de mapas é simples e fica assim:

```
{	 	 	 	 
 	"mg_meine_mapgroup"	 	 	 
 	{	 	 	 
 	 	"name"	"mg_meine_mapgroup"	 
 	 	"maps"	 	 
 	 	{	 	 
 	 	 	"de_map1"	""
 	 	 	"de_map2"	""
 	 	 	"de_map3"	""
 	 	 	"de_map4"	""
 	 	}	 	 
 	}	 	 	 
}
```



**Tickrate**

O tickrate definido determina a frequência com que o servidor envia a posição de um jogador para os outros jogadores. Quanto maior o valor, melhor a experiência de jogo. Os valores possíveis são: 33, 64, 100 e 128 (melhor valor). 



**Mapa inicial**

O mapa inicial determina qual mapa será carregado durante o processo de inicialização. É importante que o nome do mapa esteja escrito completamente e corretamente. A extensão do arquivo não é necessária. 



**Pingboost**

Pingboost é uma forma de alterar a sensação do jogo por vários métodos para alcançar o menor ping possível.



### Configuração via server.cfg

No **server.cfg** você pode alterar configurações como nome do servidor, senha rcon e senha do servidor. 

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

O nome do host define o nome do servidor. Esse nome será exibido na lista de servidores e no placar.



**rcon_password**

A senha rcon é necessária para executar comandos do servidor no jogo ou via ferramentas Rcon como HLSW. Isso pode ser feito com os seguintes comandos:

```
rcon_password SuaSenha
rcon comando // Por exemplo: rcon changelevel de_dust2
```



**sv_password**

Se você quiser usar seu servidor de forma privada ou permitir acesso apenas para certas pessoas, pode definir uma senha para o servidor. Será solicitado o password ao conectar-se ao servidor.



**sv_cheats**

Certos comandos são protegidos e só podem ser usados se os cheats estiverem ativados. O comando pode ser ativado ou desativado com o valor 0 (desativado) ou 1 (ativado). Comandos protegidos incluem, por exemplo:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 e alguns outros.



### Configuração específica do modo de jogo

Como descrito no início, você pode definir o modo/tipo de jogo que deseja usar na interface na página de configurações. Depois disso, ajuste suas configurações e modifique o arquivo de configuração correspondente. Nos arquivos de configuração do modo de jogo você pode fazer alterações detalhadas na jogabilidade, comportamento dos bots etc.



#### Comandos de Bot



**bot_chatter**
Esse comando define o que os bots podem falar no jogo. Pode ser configurado como off, radio, minimal ou normal.



**bot_difficulty**
Esse comando define a dificuldade dos bots. Os valores possíveis são:  

- 0 - fácil
- 1 - normal
- 2 - difícil
- 3 - expert



**bot_quota**
Esse comando define o número máximo de bots que você pode ter no seu servidor. O valor padrão é 10.



**bot_quota_mode**
Esse comando define o modo usado para controlar a quantidade de bots. As opções são: normal, fill e match. Normal é comportamento padrão. Fill preenche o servidor com o número de bots definido em "bot_quota". Match preenche as vagas de jogadores. Por exemplo, se 3 jogadores estão conectados e 10 bots estão configurados, então apenas 7 bots serão usados.




#### Comandos de Dinheiro

**cash_player_bomb_defused**
Esse comando define quanto dinheiro um jogador ganha por desarmar uma bomba. Você não pode dar mais do que o valor máximo de dinheiro permitido no servidor.



**cash_player_bomb_planted**
Esse comando define quanto dinheiro um jogador recebe por plantar a bomba.



**cash_player_damage_hostage**
Esse comando define quanto dinheiro é descontado ou ganho por ferir um refém. Por padrão, o jogador é cobrado $30 cada vez que o refém é ferido.



**cash_player_interact_with_hostage**
Esse comando define o dinheiro ganho ou perdido por interação com um refém.



**cash_player_killed_enemy_default**
Esse comando define quanto dinheiro é ganho ou perdido ao matar um inimigo com uma arma padrão.



**cash_player_killed_enemy_factor**
Esse comando define quanto dinheiro é ganho ao matar um inimigo com uma das armas principais (pistolas padrão, rifles primários como AK/M4 etc.).



**cash_player_killed_hostage**
Esse comando define quanto dinheiro é ganho ou perdido ao matar um refém.



**cash_player_killed_teammate**
Esse comando define quanto dinheiro é ganho ou perdido ao matar um companheiro de equipe.



**cash_player_rescued_hostage**
Esse comando define quanto dinheiro é ganho ou perdido por resgatar um refém com segurança no modo Refém.



**cash_team_elimination_bomb_map**
Esse comando define quanto dinheiro cada membro da equipe ganha se todos os 5 inimigos em um mapa de desarme de bomba como Mirage ou Dust II forem eliminados.



**cash_team_elimination_hostage_map_t**
Esse comando define quanto dinheiro cada terrorista ganha por vencer uma rodada em um mapa de reféns por eliminação.



**cash_team_elimination_hostage_map_ct**
Esse comando define quanto dinheiro cada membro da equipe CT ganha se eliminarem todos os 5 terroristas em um mapa de reféns.



**cash_team_hostage_alive**
Esse comando define quanto dinheiro é ganho ou perdido se um refém sobreviver à rodada. 



**cash_team_hostage_interaction**
Esse comando define quanto dinheiro é ganho ou perdido por um jogador interagir com um refém.



**cash_team_loser_bonus**
Esse comando define o dinheiro inicial que uma equipe ganha por perder uma rodada. Esse valor aumenta em passos fixos, controlados por outro comando.



**cash_team_loser_bonus_consecutive_rounds**
Esse comando define quanto dinheiro deve ser aumentado para uma sequência de derrotas. Se esse valor for $500 (configuração padrão), significa que cada rodada consecutiva perdida dará $500 a mais para a equipe perdedora do que na rodada anterior. Isso vale para até 5 rodadas consecutivas de derrota.



**cash_team_planted_bomb_but_defused**
Esse comando define o valor que a equipe Terrorista ganha por plantar uma bomba que é desarmada. Isso **se acumula junto com o bônus por perda de rodada**. O valor padrão é $800.



**cash_team_rescued_hostage**
Esse comando define o valor que **a equipe inteira** ganha quando um jogador resgata um refém.



**cash_team_terrorist_win_bomb**
Esse comando define o valor ganho por cada jogador da equipe Terrorista ao vencer uma rodada pela explosão da bomba.



**cash_team_win_by_defusing_bomb**
Esse comando define o valor que a equipe CT ganha por vencer uma rodada desarmando a bomba.



**cash_team_win_by_hostage_rescue**
Esse comando define o valor ganho pelos membros da equipe ao vencer uma rodada resgatando um refém.



**cash_team_win_by_time_running_out_hostage**
Esse comando define o valor ganho pela equipe que protege os reféns ao vencer a rodada por não permitir que os reféns sejam resgatados dentro do tempo limite.



**cash_team_win_by_time_running_out_bomb**
Esse comando define quanto dinheiro os jogadores dos contra-terroristas ganham ao vencer uma rodada quando o tempo acaba. Isso significa que os terroristas não plantaram a bomba nem eliminaram todos os contra-terroristas no tempo exigido.



#### Comandos de Jogabilidade



**mp_afterroundmoney**
Esse comando define quanto dinheiro é pago a cada jogador de cada equipe no final de uma rodada, independente de vitória ou derrota. O valor padrão é 0 (o bônus de vitória/derrota é definido por outro comando).



**mp_buytime**
Esse comando define o tempo (em segundos) que os jogadores têm para comprar equipamentos após o início da rodada. 



**mp_buy_anywhere**
Esse comando define se os jogadores podem acessar o menu de compra fora da zona de compra. Lembre-se que o tempo de compra ainda se aplica. 



**mp_death_drop_defuser**
Esse comando define se kits de desarme são largados na morte ou não. 



**mp_death_drop_grenade**
Esse comando define qual granada (se houver) é largada quando um jogador é morto:

- Valor: 0 - Não largar granadas na morte
- Valor: 1 - Largar a granada mais valiosa na morte 



**mp_death_drop_gun**
Esse comando define qual arma deve ser largada quando um jogador é morto. A configuração padrão é 1 (a melhor). Escolha uma das opções:

- Valor: 0 - Não largar armas na morte
- Valor: 1 - Largar a melhor arma na morte
- Valor: 2 - Se o jogador estiver segurando uma arma na hora da morte, largar essa, se não, largar a arma mais valiosa



**mp_defuser_allocation**
Esse comando define se os jogadores recebem um kit de desarme grátis no início da rodada e, se sim, quem recebe:

- Valor: 1 - Sem kits grátis
- Valor: 2 - Jogadores aleatórios recebem um kit
- Valor: 3 - Todos os jogadores recebem um kit



**mp_force_pick_time** 

Esse comando define a duração em segundos que um jogador tem para escolher um time. Após esse tempo, um time é selecionado automaticamente. O padrão é 15 segundos.



**mp_forcecamera**

Esse comando define o alcance que os espectadores têm (ou seja, quem os jogadores podem assistir quando morrem). Veja as opções:

- Valor: 0 - Jogadores mortos podem assistir qualquer jogador
- Valor: 1 - Jogadores mortos podem assistir seus companheiros
- Valor: 2 - A tela fica preta até a próxima rodada.



**mp_free_armor**

Esse comando define se o jogador recebe armadura e capacete grátis no início da rodada:

- Valor: 0 - Desativado
- Valor: 1 - Ativado



**mp_freezetime**

Esse comando define quanto tempo os jogadores ficam congelados no início de cada rodada. Esse tempo permite que os jogadores comprem equipamentos e discutam táticas antes da rodada começar. O padrão é 15 segundos.



**mp_friendlyfire**

Esse comando define se o fogo amigo está ativado ou desativado. Quando ativado, jogadores podem causar dano aos próprios companheiros. A configuração padrão depende do modo de jogo. Em modos competitivos, o fogo amigo está ativado, mas não em jogos casuais.



**mp_win_panel_display_time**

Esse comando define o tempo (em segundos) que o placar é exibido entre as rodadas. O padrão é 3 segundos.



**mp_respawn_immunitytime**

Esse comando define quantos segundos os jogadores ficam imunes após o respawn. É usado no modo Deathmatch.



**mp_halftime**

Esse comando define se os times são trocados no intervalo ou não. O padrão é 1.



**mp_maxmoney**

Esse comando define a quantidade máxima de dinheiro que um jogador pode ter.



**mp_maxrounds**

Esse comando define o número máximo de rodadas que o servidor vai jogar.



**mp_roundtime**

Esse comando define o número máximo de minutos que uma rodada dura antes de ser ganha/perdida. Se a rodada for abandonada após esse tempo, a vitória é dada aos contra-terroristas. Os segundos são dados em dígitos decimais, 1.92 = 1m55s.



**mp_solid_teammates**

Esse comando define se você pode colidir com seus companheiros ou não:

- Valor: 0 - Colisão desativada
- Valor: 1 - Colisão ativada



**mp_startmoney**

Esse comando define quanto dinheiro um jogador recebe no início de um tempo. O padrão é $800.



**mp_timelimit**

Esse comando define a duração máxima de cada jogo em minutos. Por padrão está desativado (0).



**mp_warmuptime**

Esse comando define quanto tempo dura o período de aquecimento antes do jogo começar. O tempo é em segundos.



**sv_allow_votes**

Esse comando define se votações (ex: votação de timeout) são permitidas ou não:

- Valor: 0 - Desativado
- Valor: 1 - Ativado



**sv_infinite_ammo**

Esse comando define se os jogadores têm munição ilimitada ou não:

- Valor: 1 - Munição infinita que pode ser disparada sem recarregar.
- Valor: 2 - Número infinito de carregadores. Porém, o carregador deve ser recarregado quando vazio.



**ammo_grenade_limit_flashbang**

Esse comando define quantas granadas flash um jogador pode carregar.



**ammo_grenade_limit_total**

Esse comando define quantas granadas um jogador pode carregar no total.





### Configuração Esportiva (Configs ESL)

Se você quer usar o servidor para fins de e-sports, vale a pena fazer upload das configs fornecidas pela ESL. Você pode baixá-las no site oficial da ESL: [Download](https://play.eslgaming.com/download/26251762/)

As configs devem ser enviadas para o diretório **cfg** e podem ser executadas no jogo com os comandos:

```
rcon_password SuaSenha // Login via rcon para executar comandos rcon
rcon exec esl5on5
```

Depois disso, todos os valores dos comandos ESL serão carregados e o jogo pode começar!

<InlineVoucher />