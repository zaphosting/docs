---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "Aprenda como gerenciar seu servidor HumanitZ remotamente usando RCON e rcon-cli → Saiba mais agora"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite que administradores executem comandos no servidor sem precisar se conectar diretamente ao jogo. Isso possibilita gerenciar jogadores, ajustar configurações ou monitorar a atividade do servidor externamente.

No **HumanitZ**, o RCON pode ser usado para executar comandos administrativos como expulsar jogadores, enviar mensagens ou controlar o comportamento do servidor. O acesso é protegido por uma senha e uma porta dedicada.

Uma grande vantagem do RCON é que ele permite a administração do servidor **sem estar conectado como jogador no jogo**, possibilitando uma gestão remota flexível e eficiente.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado na configuração do servidor. Abra a página de configurações do seu servidor e habilite a opção rcon. Você também pode ajustar isso pelos arquivos de configuração. Acesse o painel de controle do seu servidor de jogos, navegue até Configs e localize o arquivo `GameServerSettings.ini`.

Adicione ou ajuste as seguintes entradas:

```
RCONEnabled=true
RCONPassword=sua_senha_segura
RCONPort=XXXXX
```

A porta RCON atribuída pode ser encontrada na **Visão geral de portas** dentro da administração do seu servidor. Certifique-se de que a senha e a porta estejam corretas conforme sua configuração.

Após fazer as alterações, salve o arquivo e **reinicie o servidor** para que as configurações entrem em vigor.

## Conectando via RCON

Para se conectar ao seu servidor HumanitZ via RCON, você pode usar a ferramenta de linha de comando **rcon-cli**. Ela está disponível no repositório oficial do GitHub:
https://github.com/gorcon/rcon-cli

Depois de instalada, conecte-se ao seu servidor usando o comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

Substitua os espaços reservados pelo endereço IP do seu servidor, porta RCON e senha.

Esse comando permite executar comandos RCON diretamente do seu sistema local, sem precisar de uma sessão interativa.

## Comandos RCON

Uma vez conectado via RCON, você pode executar vários comandos administrativos no seu servidor HumanitZ. Os comandos disponíveis dependem da implementação do jogo, mas geralmente incluem gerenciamento de jogadores e controle do servidor.

| Comando | Descrição |
|----------------------------------|------------------------------------------|
| `broadcast <mensagem>`| Envia uma mensagem para todos os jogadores |
| `kick <nome_do_jogador>`| Expulsa um jogador do servidor |
| `ban <nome_do_jogador>` | Bane um jogador |
| `unban <nome_do_jogador>` | Remove o banimento de um jogador |
| `save` | Salva o estado atual do jogo |
| `restart`| Reinicia o servidor |
| `shutdown` | Desliga o servidor |
| `whitelist add <steamid>`| Adiciona um jogador à whitelist |
| `whitelist remove <steamid>` | Remove um jogador da whitelist |

## Conclusão

Parabéns! Você configurou e usou com sucesso o **RCON para seu servidor HumanitZ**. Isso permite gerenciar seu servidor remotamente, executar comandos administrativos e manter o controle sem precisar entrar no jogo.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />