---
id: cs2-configuration
title: "CS2: Configuração do servidor"
description: "Descubra como configurar servidores de Counter-Strike com gamemodes, grupos de mapas e tokens GSL para uma jogabilidade otimizada → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-dods-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores de Counter-Strike podem ser configurados de várias formas. Configurações básicas podem ser ajustadas via o arquivo **server.cfg** e pela página de configurações na interface web. A configuração avançada é feita através dos arquivos de configuração do gamemode, como gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, entre outros.

Nas configurações você pode escolher o gamemode que deseja usar. Os comandos desse arquivo são carregados conforme a escolha. Eles podem ser gerenciados tanto pela administração do servidor de jogos quanto manualmente via FTP em **gXXXXXX/cs2/game/csgo/cfg/**.

<InlineVoucher />

## Configuração



### Configuração via interface (Configurações)

Na página de configurações você pode ajustar definições básicas para o token GSL, tipo de jogo/gamemode, grupo de mapas e mais.

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**Token GSL**

Gameserver Login Tokens (GSLTs) são um procedimento implementado pela Steam como medida de proteção. Para rodar servidores de jogos de certos jogos Steam (principalmente jogos Source) é necessário gerar um token. Mais informações detalhadas podem ser encontradas aqui:

[GSL-Token](source-gsltoken.md)



**Tipo de jogo**

Existem diferentes gamemodes. Abaixo você vê uma lista de todas as opções disponíveis:

- Classic Casual
- Classic Competitive
- Deathmatch
- Wingman



**Grupo de mapas**

Grupos de mapas são conjuntos de mapas que normalmente correspondem a uma certa categoria. Por padrão existem os grupos **mg_active, mg_allclassic**. Opcionalmente você pode criar seus próprios. Isso deve ser adicionado ao **gamemodes_server.txt**. A estrutura de um grupo de mapas é simples e fica assim:

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



**Mapa inicial**

O mapa inicial define qual mapa será carregado durante o processo de startup. É importante que o nome do mapa seja escrito completamente e corretamente. A extensão do arquivo não é necessária.



**Pingboost**

Pingboost é uma forma de alterar a sensação do jogo por vários métodos para alcançar o menor ping possível.



### Configuração via server.cfg

No **server.cfg** você pode alterar configurações como nome do servidor, senha rcon e senha do servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

O nome do host define o nome do servidor. Esse nome será exibido na lista de servidores e no placar.



**rcon_password**

A senha rcon é necessária para executar comandos do servidor no jogo ou via ferramentas Rcon como HLSW. Isso pode ser feito com os seguintes comandos:

```
rcon_password SuaSenha
rcon comando // Por exemplo: rcon changelevel de_dust2
```



**sv_password**

Se você quiser usar seu servidor de jogos de forma privada ou permitir acesso apenas para certas pessoas, pode definir uma senha para o servidor. Será solicitado o password ao conectar no servidor.



**sv_cheats**

Certos comandos são protegidos e só podem ser usados se cheats estiverem ativados. O comando pode ser ativado ou desativado com o valor 0 (desativado) ou 1 (ativado). Comandos protegidos incluem, por exemplo:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 e alguns outros.



### Configuração específica do gamemode

Como descrito no começo, você pode definir o gamemode/tipo de jogo que deseja usar na interface na página de configurações. Depois disso, você deve ajustar suas configurações e modificar o arquivo de configuração correspondente. Nos arquivos de configuração do gamemode você pode fazer alterações detalhadas na jogabilidade, comportamento dos bots etc.



#### Comandos para bots



**bot_chatter**
Esse comando define o que os bots podem falar no jogo. Pode ser configurado como off, radio, minimal ou normal.



**bot_difficulty**
Esse comando define a dificuldade dos bots. Os valores possíveis são:  

- 0 - fácil
- 1 - normal
- 2 - difícil
- 3 - expert



**bot_quota**
Esse comando define o número máximo de bots que você pode ter no seu servidor de jogos. O valor padrão é 10.



**bot_quota_mode**
Esse comando define o modo usado para controlar a quantidade de bots. As opções são: normal, fill e match. Normal é comportamento padrão. Fill preenche o servidor com o número de bots definido em "bot_quota". Match preenche as vagas de jogadores. Por exemplo, se 3 jogadores estão conectados e 10 bots estão configurados, então apenas 7 bots serão usados.




#### Comandos de dinheiro

**cash_player_bomb_defused**
Esse comando define quanto dinheiro um jogador ganha por desarmar a bomba. Você não pode dar mais do que o máximo de dinheiro permitido no servidor.



**cash_player_bomb_planted**
Esse comando define quanto dinheiro um jogador recebe por plantar a bomba.



**cash_player_damage_hostage**
Esse comando define quanto dinheiro é descontado ou ganho por ferir um refém. Por padrão, o jogador é cobrado $30 cada vez que o refém é ferido.



**cash_player_interact_with_hostage**
Esse comando define o dinheiro ganho ou perdido por interagir com um refém.



**cash_player_killed_enemy_default**
Esse comando define quanto dinheiro é ganho ou perdido ao matar um inimigo com uma arma padrão.



**cash_player_killed_enemy_factor**
Esse comando define quanto dinheiro é ganho ao matar um inimigo com uma das armas principais (pistolas padrão, rifles primários como AK/M4 etc.).



**cash_player_killed_hostage**
Esse comando define quanto dinheiro é ganho ou perdido ao matar um refém.



**cash_player_killed_teammate**
Esse comando define quanto dinheiro é ganho ou perdido ao matar um companheiro de time.



**cash_player_rescued_hostage**
Esse comando define quanto dinheiro é ganho ou perdido por resgatar um refém com segurança no modo refém.



**cash_team_elimination_bomb_map**
Esse comando define quanto dinheiro cada membro do time ganha se todos os 5 inimigos em um mapa de bomba como Mirage ou Dust II forem eliminados.



**cash_team_elimination_hostage_map_t**
Esse comando define quanto dinheiro cada terrorista ganha por vencer uma rodada em um mapa de refém por eliminação.



**cash_team_elimination_hostage_map_ct**
Esse comando define quanto dinheiro cada membro do time CT ganha se eliminarem todos os 5 terroristas em um mapa de refém.



**cash_team_hostage_alive**
Esse comando define quanto dinheiro é ganho ou perdido se um refém sobreviver à rodada.



**cash_team_hostage_interaction**
Esse comando define quanto dinheiro é ganho ou perdido por um jogador ao interagir com um refém.



**cash_team_loser_bonus**
Esse comando define o dinheiro inicial que um time ganha por perder uma rodada. Esse valor aumenta em passos fixos, controlados por outro comando.



**cash_team_loser_bonus_consecutive_rounds**
Esse comando define quanto dinheiro deve ser aumentado para uma sequência de derrotas. Se esse valor for $500 (configuração padrão), significa que cada rodada consecutiva perdida dará ao time perdedor $500 a mais que a anterior. Isso vale para até 5 rodadas consecutivas perdidas.



**cash_team_planted_bomb_but_defused**
Esse comando define quanto dinheiro o time Terrorista ganha por plantar uma bomba que é desarmada. Isso **se acumula junto com o bônus por perda de rodada**. O valor padrão é $800.



**cash_team_rescued_hostage**
Esse comando define quanto dinheiro **todo o time** ganha quando um jogador resgata um refém.



**cash_team_terrorist_win_bomb**
Esse comando define quanto dinheiro cada jogador do time Terrorista ganha ao vencer uma rodada com a bomba explodindo.



**cash_team_win_by_defusing_bomb**
Esse comando define quanto dinheiro o time CT ganha ao vencer uma rodada desarmando a bomba.



**cash_team_win_by_hostage_rescue**
Esse comando define quanto dinheiro os membros do time ganham ao vencer uma rodada resgatando um refém.



**cash_team_win_by_time_running_out_hostage**
Esse comando define quanto dinheiro o time que protege os reféns ganha ao vencer a rodada por não permitir que nenhum refém seja resgatado dentro do tempo limite.



**cash_team_win_by_time_running_out_bomb**
Esse comando define quanto dinheiro os jogadores do time contra-terrorista ganham ao vencer uma rodada quando o tempo acaba. Isso significa que os terroristas não plantaram a bomba nem eliminaram todos os contra-terroristas dentro do tempo.



#### Comandos de jogabilidade



**mp_afterroundmoney**
Esse comando define quanto dinheiro é pago para cada jogador de cada time no final da rodada, independentemente de vitória ou derrota. O valor padrão é 0 (o bônus de vitória/derrota é configurado por outro comando).



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
Esse comando define se os jogadores devem receber um kit de desarme grátis no começo da rodada e, se sim, quem deve receber:

- Valor: 1 - Sem kits grátis
- Valor: 2 - Jogadores aleatórios recebem um kit
- Valor: 3 - Todos os jogadores recebem um kit



**mp_force_pick_time**

Esse comando define a duração em segundos que um jogador tem para escolher um time. Após esse tempo, um time é selecionado automaticamente. O tempo padrão é 15 segundos.



**mp_forcecamera**

Esse comando define o alcance que os espectadores têm (ou seja, quem os jogadores podem assistir quando morrem). Veja as opções de alcance:

- Valor: 0 - Jogadores mortos podem assistir qualquer jogador
- Valor: 1 - Jogadores mortos podem assistir seus companheiros de time
- Valor: 2 - A tela fica preta até a próxima rodada.



**mp_free_armor**

Esse comando define se o jogador recebe armadura e capacete grátis no começo da rodada:

- Valor: 0 - Desativado
- Valor: 1 - Ativado



**mp_freezetime**

Esse comando define quanto tempo os jogadores ficam congelados no início de cada rodada. Esse tempo permite que os jogadores comprem equipamentos e discutam táticas antes da rodada começar. O padrão é 15 segundos.



**mp_friendlyfire**

Esse comando define se o fogo amigo está ativado ou desativado. Quando ativado, jogadores podem causar dano aos próprios companheiros. A configuração padrão depende do gamemode. Em modos competitivos, o fogo amigo está ativado, mas não em jogos casuais.



**mp_win_panel_display_time**

Esse comando define o tempo (em segundos) que o placar deve ser exibido entre as rodadas. O padrão é 3 segundos.



**mp_respawn_immunitytime**

Esse comando define quantos segundos os jogadores ficam imunes após o respawn. Esse comando é usado no modo Deathmatch.



**mp_halftime**

Esse comando define se os times são trocados no intervalo ou não. O valor padrão é 1.



**mp_maxmoney**

Esse comando define a quantidade máxima de dinheiro que um jogador pode ter.



**mp_maxrounds**

Esse comando define o número máximo de rodadas que o servidor vai jogar.



**mp_roundtime**

Esse comando define o número máximo de minutos que uma rodada dura antes de ser ganha/perdida. Se a rodada acabar após esse tempo, a vitória é dada para os contra-terroristas. Os segundos são dados em dígitos decimais, 1.92 = 1m55s.



**mp_solid_teammates**

Esse comando define se você pode colidir com seus companheiros de time ou não:

- Valor: 0 - Colisão desativada
- Valor: 1 - Colisão ativada



**mp_startmoney**

Esse comando define quanto dinheiro um jogador recebe no começo de um half. O valor padrão é $800.



**mp_timelimit**

Esse comando define a duração máxima de cada jogo em minutos. Por padrão está desativado (configurado para 0).



**mp_warmuptime**

Esse comando define quanto tempo dura o período de aquecimento antes do jogo começar de verdade. O tempo é definido em segundos.



**sv_allow_votes**

Esse comando define se votações (ex: votação de timeout) são permitidas ou não:

- Valor: 0 - Desativado
- Valor: 1 - Ativado



**sv_infinite_ammo**

Esse comando define se os jogadores têm munição ilimitada ou não:

- Valor: 1 - Munição infinita que pode ser disparada sem recarregar.
- Valor: 2 - Número infinito de carregadores de munição. Porém, o carregador deve ser recarregado quando acabar.



**ammo_grenade_limit_flashbang**

Esse comando define quantas granadas flash um jogador pode carregar.



**ammo_grenade_limit_total**

Esse comando define quantas granadas um jogador pode carregar no total.

<InlineVoucher />