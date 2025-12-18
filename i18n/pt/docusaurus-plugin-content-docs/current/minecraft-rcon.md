---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Descubra como gerenciar servidores de jogos Minecraft remotamente com RCON para um controle flexível, seguro e administração eficiente → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite o acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No Minecraft, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações de gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o Minecraft por ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso pode ser feito diretamente na administração do servidor de jogos. Na seção **Configurações**, há uma opção chamada **RCON** que deve ser ativada. Uma senha segura deve ser definida, assim como uma porta válida. Isso é feito editando o arquivo de configuração localizado em **Configs** no painel de gerenciamento do servidor de jogos. No arquivo chamado `server.properties`, as seguintes entradas devem ser adicionadas ou modificadas:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<defina-sua-senha>
```
A porta RCON atribuída pode ser encontrada no final da página de configurações, na visão geral das portas, e deve ser especificada lá.



## Conectando via RCON

Para conectar ao servidor Minecraft via RCON, usa-se a ferramenta de linha de comando **rcon-cli**. Ela pode ser baixada do repositório oficial no [GitHub](https://github.com/gorcon/rcon-cli). Após baixar e instalar a ferramenta no seu computador, a conexão pode ser estabelecida usando o endereço IP do servidor, a porta RCON e a senha RCON.

A porta atribuída pode ser encontrada na **visão geral das portas** no final da página de configurações na administração do servidor de jogos. A senha e a porta devem corresponder aos valores configurados no painel ou no arquivo de configuração. Use o comando abaixo para conectar e executar um comando diretamente:

```bash
rcon-cli -a <IP>:<PORTA> -p <SENHA> comando
```



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor Minecraft. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando               | Descrição                                  |
|------------------------|---------------------------------------------|
| `list`               | Lista os jogadores conectados               |
| `say <mensagem>`       | Transmite uma mensagem para todos os jogadores |
| `kick <jogador>`       | Expulsa um jogador do servidor              |
| `ban <jogador>`        | Bane um jogador                              |
| `pardon <jogador>`     | Desbane um jogador                           |
| `op <jogador>`         | Concede privilégios de operador a um jogador |
| `deop <jogador>`       | Revoga privilégios de operador               |
| `time set <valor>`    | Define o tempo do mundo (ex: dia, noite, número) |
| `gamemode <modo> <jogador>` | Define o modo de jogo de um jogador     |
| `weather <clear/rain/thunder>` | Altera o clima                      |
| `stop`                | Para o servidor de forma segura             |



## Conclusão

RCON é uma ferramenta essencial para a administração remota de servidores de jogos Minecraft. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />