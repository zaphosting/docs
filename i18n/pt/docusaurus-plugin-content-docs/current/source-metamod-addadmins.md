---
id: source-metamod-addadmins
title: Torne-se um admin do servidor
description: "Descubra como virar admin obtendo seu Steam ID e configurando permissões para gerenciar o servidor → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Torne-se um admin

Para poder se registrar como admin, a instalação do Source- / Metamod é essencial.

Além disso, você precisa do Steam ID da sua conta Steam. Existem várias formas de conseguir isso. Você pode usar um site externo que oferece esse serviço ou usar o console do jogo.

<InlineVoucher />

### SteamID via site

Primeiro, abra o perfil no Steam e clique com o botão direito em qualquer lugar do perfil. Lá você pode copiar a URL Steam do perfil.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

Depois, cole essa URL em um dos seguintes sites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

Você receberá o Steam ID junto com as informações gerais da conta. O que você precisa é o **Steam ID 32**:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID via console do jogo

Inicie o jogo e conecte-se ao seu servidor. Abrindo o console do jogo e usando o comando 'status', você verá a seguinte saída:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Configuração

Agora, conecte-se ao servidor via FTP e abra o arquivo de configuração admins.cfg. Ele fica no diretório: addons/sourcemod/configs

O arquivo já contém um exemplo de como deve ser uma entrada de admin. Você pode copiar e editar assim:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

O **nome do jogador** **não** precisa ser igual ao nome da conta Steam. Ele serve só para facilitar a identificação no arquivo. A entrada 'auth' é o método de autenticação. Aqui é fixo como Steam, então não precisa mudar. Em `identity` você coloca o SteamID32 da conta Steam. Em `flags` você define as permissões. Existem vários níveis de acesso.

| permissão | flag | uso |
| ------------|:----:|:--------:|
| reserva | a || reserva de slot |
| básico | b | básico (necessário) |
| kick | c || expulsar jogadores |
| ban | d || banir jogadores |
| unban | e || liberar jogadores |
| slay | f || matar jogadores |
| changemap | g | trocar mapas |
| cvar | h | alterar valores do servidor |
| config | i | rodar configs do servidor |
| chat | j | permissões avançadas de chat |
| vote | k | votos de admin |
| password | l || definir senha do servidor |
| rcon | m | executar comandos RCON |
| cheats | n | ativar sv_cheats no jogo |
| root | z | acesso total |

Dependendo das permissões que você quer dar, as flags são colocadas uma após a outra. Por exemplo, se quiser só dar permissão para kick, use as flags 'b' e 'c'. Para acesso total, só a flag `z` já basta.

### Usando o Menu de Admin

Com o comando 'admin' no chat ou 'sm_admin' no console, o menu aparece.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />