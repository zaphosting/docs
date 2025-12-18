---
id: gmod-servercfg
title: "Garry's Mod: Configurações do Server.cfg"
description: "Configure as configurações do seu servidor de jogos Garry's Mod para personalizar a jogabilidade e limites de spawn para uma experiência otimizada → Saiba mais agora"
sidebar_label: Modificação do Server.cfg do Garry's Mod
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Configure seu server.cfg no Garry's Mod.

Para alterar o server.cfg diretamente pelo nosso painel web, vá até a aba Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

Depois disso, abra o server.cfg no nosso editor de configurações embutido.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

Agora você está no nosso editor de configurações, aqui você pode alterar todas as variáveis como quiser. Só tome cuidado para não misturar as configurações da aba Configurações com as do server.cfg, isso pode afetar: hostname, rcon_password e sv_password.

Variáveis possíveis para personalizar seu servidor de jogos Garry's Mod:

Configurações de Spawn:
```
sbox_maxprops 150		//Define o limite máximo de props que um jogador pode ter.
sbox_maxragdolls 10		//Define o limite máximo de ragdolls que um jogador pode ter.
sbox_maxballoons 10		//Define o limite máximo de balões que um jogador pode ter.
sbox_maxeffects 10		//Define o limite máximo de efeitos que um jogador pode ter. (sensível a FPS)
sbox_maxdynamite 10		//Define o limite máximo de dinamite que um jogador pode ter.
sbox_maxlamps 10		//Define o limite máximo de lâmpadas que um jogador pode ter.
sbox_maxthrusters 10	//Define o limite máximo de propulsores que um jogador pode ter.
sbox_maxwheels 10		//Define o limite máximo de rodas que um jogador pode ter.
sbox_maxnpcs 10			//Define o limite máximo de NPCs que um jogador pode ter.
sbox_maxhoverballs 10	//Define o limite máximo de hoverballs que um jogador pode ter.
sbox_maxvehicles 10		//Define o limite máximo de veículos que um jogador pode ter.
sbox_maxbuttons 10		//Define o limite máximo de botões que um jogador pode ter.
```

Configurações do jogo:
```
sbox_plpldamage 0 / 1	//0 = PVP desligado, 1 = PVP ligado
sbox_godmode	0 / 1	//0 = desligado, 1 = ligado (Godmode para todos os jogadores)
sbox_noclip		0 / 1	//0 = Noclip desligado, 1 = Noclip ligado
sv_noclipaccelerate 3	//Altera a velocidade do noclip.
sv_alltalk 1			//Se ativado, você pode ouvir todos os jogadores no servidor.
```

Configurações relacionadas à rede (não recomendado alterar)
```
sv_minrate 0			//Velocidade mínima de conexão
sv_maxrate 10000		//Velocidade máxima de conexão
sv_minupdaterrate 10	//Tickrate mínima
sv_maxupdaterrate 66	//Tickrate máxima
net_maxfilesize	64		//Tamanho máximo de arquivo que pode ser transferido sem FastDL.
sv_lan 0				//Define o jogo como online.
sv_region 3				//0+1 = EUA, 2 = África do Sul, 3 = Europa, 4 = Ásia, 5 = Austrália, 6 = Oriente Médio, 7 = África, 255 = Mundial
```

Se você alterou tudo como deseja, basta salvar suas mudanças.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

Após reiniciar o servidor, todas as mudanças estarão ativas.

<InlineVoucher />