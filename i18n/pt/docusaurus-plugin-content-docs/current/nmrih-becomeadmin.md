---
id: nmrih-becomeadmin
title: "No More Room In Hell: Torne-se admin"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciamento fácil dentro do jogo → Saiba mais agora"
sidebar_label: Torne-se admin
services:
  - gameserver-nmrih
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.

<InlineVoucher />



## Configuração

Para se registrar como admin, a instalação do SourceMod ou MetaMod é obrigatória. Além disso, você precisará do Steam ID da sua conta Steam. Existem várias formas de obtê-lo: você pode usar um site externo que oferece esse serviço ou recuperá-lo diretamente pelo console dentro do jogo.


Para obter seu SteamID via site, primeiro abra seu perfil Steam e clique com o botão direito em qualquer lugar da página para copiar a URL do perfil. Em seguida, cole essa URL em um dos seguintes sites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

A página mostrará seu SteamID junto com outras informações da conta. Para o registro de admin, você precisa do **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

Alternativamente, você pode recuperar seu SteamID dentro do jogo pelo console. Inicie o jogo, conecte-se ao seu servidor, abra o console e digite o comando:

```
status
```

Isso exibirá seus detalhes de conexão, incluindo seu SteamID. Depois, conecte-se ao servidor via FTP e abra o arquivo `admins.cfg` localizado em:

```
.../addons/sourcemod/configs/
```

O arquivo contém um exemplo que você pode copiar e adaptar:

```
Admins
{
	"Nome do jogador"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

O **nome do jogador** não precisa ser igual ao nome da sua conta Steam; serve apenas como referência interna. O campo `auth` define o método de autenticação, que permanece `steam`. Em `identity`, insira o SteamID32. As `flags` definem as permissões concedidas ao admin:

| Permissão   | Flag | Descrição               |
|-------------|:----:|-------------------------|
| reserva     | a    | Reserva de slot         |
| genérico    | b    | Direitos básicos (obrigatório) |
| kick        | c    | Expulsar jogadores      |
| ban         | d    | Banir jogadores         |
| unban       | e    | Desbanir jogadores      |
| slay        | f    | Dar um tapa ou matar jogadores |
| changemap   | g    | Trocar mapa             |
| cvar        | h    | Alterar valores do servidor |
| config      | i    | Executar configs do servidor |
| chat        | j    | Direitos avançados no chat |
| vote        | k    | Iniciar votações admin  |
| password    | l    | Definir senha do servidor |
| rcon        | m    | Executar comandos RCON  |
| cheats      | n    | Ativar `sv_cheats`      |
| root        | z    | Acesso total            |

Você pode combinar várias flags (ex: `bc` para direitos de kick). Para acesso total, use apenas `z`. Você pode abrir o menu admin digitando `admin` no chat ou `sm_admin` no console. Com o comando `admin` no chat ou `sm_admin` no console o menu pode ser aberto.



## Comandos de Admin

Abaixo você encontra uma lista dos comandos comuns que pode usar como admin no seu servidor.

| Comando                           | Descrição                                     |
| --------------------------------- | ----------------------------------------------- |
| `sm_kick <player>`                | Expulsa um jogador                            |
| `sm_ban <player> <time> [reason]` | Bana um jogador por X minutos (0 = permanente) |
| `sm_unban <SteamID/IP>`           | Desbana um jogador                            |
| `sm_slay <player>`                | Mata o jogador instantaneamente               |
| `sm_slap <player> [damage]`       | Dá um tapa no jogador (opcionalmente com dano) |
| `sm_map <mapname>`                | Troca para o mapa especificado                |
| `sm_cvar <cvar> <value>`          | Define uma variável de configuração do servidor em tempo real |
| `sm_vote <topic>`                 | Inicia uma votação básica                      |
| `sm_restartgame <seconds>`        | Reinicia o jogo após uma contagem regressiva  |
| `sm_say <message>`                | Envia uma mensagem para o chat global          |



## Conclusão

Parabéns, se você seguiu tudo certinho, deve ter configurado com sucesso as permissões de admin no seu servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />