---
id: dods-becomeadmin
title: "Day of Defeat: Source: Como virar admin"
description: "Descubra como atribuir permissões de admin para controle total do servidor e gerenciar funções do jogo de forma eficiente → Saiba mais agora"
sidebar_label: Virar admin
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como admin, você pode usar todas as opções e funções disponíveis no jogo diretamente dentro dele. Todos os passos que você precisa seguir para atribuir permissões de admin ao seu servidor estão descritos abaixo.

<InlineVoucher />



## Configuração

Para se registrar como admin, a instalação do SourceMod ou MetaMod é obrigatória. Além disso, você vai precisar do Steam ID da sua conta Steam. Existem várias formas de obtê-lo: você pode usar um site externo que oferece esse serviço ou pegar direto pelo console dentro do jogo.


Para obter seu SteamID via site, primeiro abra seu perfil Steam e clique com o botão direito em qualquer lugar da página para copiar a URL do perfil. Depois, cole essa URL em um dos sites abaixo:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

A página vai mostrar seu SteamID junto com outras informações da conta. Para o registro de admin, você precisa do **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

Alternativamente, você pode pegar seu SteamID dentro do jogo pelo console. Inicie o jogo, conecte-se ao seu servidor, abra o console e digite o comando:

```
status
```

Isso vai mostrar seus dados de conexão, incluindo seu SteamID. Depois, conecte-se ao servidor via FTP e abra o arquivo `admins.cfg` que fica em:

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

O **nome do jogador** não precisa ser igual ao nome da sua conta Steam; serve só como referência interna. O campo `auth` define o método de autenticação, que deve ser `steam`. Em `identity`, coloque o SteamID32. As `flags` definem as permissões que o admin terá:

| Permissão  | Flag | Descrição |
|-------------|:----:|-------------|
| reserva    | a    | Reserva de slot |
| genérico   | b    | Direitos básicos (obrigatório) |
| kick       | c    | Expulsar jogadores |
| ban        | d    | Banir jogadores |
| unban      | e    | Desbanir jogadores |
| slay       | f    | Dar um tapa ou matar jogadores |
| changemap  | g    | Trocar mapa |
| cvar       | h    | Alterar valores do servidor |
| config     | i    | Executar configs do servidor |
| chat       | j    | Direitos avançados no chat |
| vote       | k    | Iniciar votações de admin |
| password   | l    | Definir senha do servidor |
| rcon       | m    | Executar comandos RCON |
| cheats     | n    | Ativar `sv_cheats` |
| root       | z    | Acesso total |

Você pode combinar várias flags (ex: `bc` para direitos de kick). Para acesso total, use só `z`. O menu de admin pode ser aberto digitando `admin` no chat ou `sm_admin` no console.



## Comandos de Admin

Aqui está uma lista dos comandos mais comuns que você pode usar como admin no seu servidor.

| Comando                           | Descrição                                     |
| --------------------------------- | ----------------------------------------------- |
| `sm_kick <player>`                | Expulsa um jogador                             |
| `sm_ban <player> <tempo> [motivo]` | Bane um jogador por X minutos (0 = permanente) |
| `sm_unban <SteamID/IP>`           | Desbana um jogador                             |
| `sm_slay <player>`                | Mata o jogador instantaneamente                |
| `sm_slap <player> [dano]`         | Dá um tapa no jogador (opcionalmente com dano) |
| `sm_map <nome_do_mapa>`           | Troca para o mapa especificado                 |
| `sm_cvar <cvar> <valor>`          | Define uma variável de configuração do servidor em tempo real |
| `sm_vote <tópico>`                | Inicia uma votação básica                       |
| `sm_restartgame <segundos>`       | Reinicia o jogo após uma contagem regressiva   |
| `sm_say <mensagem>`               | Envia uma mensagem no chat global               |



## Conclusão

Parabéns! Se você seguiu tudo certinho, já deve ter configurado as permissões de admin no seu servidor com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />