---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Descubra como gerenciar e controlar servidores de Counter-Strike: Source remotamente de forma segura e eficiente → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite o acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No Counter-Strike: Source, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações de gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o Counter-Strike: Source por ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso é feito editando o arquivo de configuração localizado em **Configs** no painel de gerenciamento do servidor de jogos. No arquivo chamado `server.cfg`, as seguintes entradas devem ser adicionadas ou modificadas:

```cfg
rcon_password "defina-sua-senha"
```


## Conectando via RCON

Para conectar ao servidor de Counter-Strike: Source via RCON, utiliza-se a ferramenta de linha de comando **rcon-cli**. Ela pode ser baixada do [repositório oficial no GitHub](https://github.com/gorcon/rcon-cli). Após baixar e instalar a ferramenta no seu computador, a conexão pode ser estabelecida usando o endereço IP do servidor, a porta RCON e a senha RCON.

A porta atribuída pode ser encontrada na **Visão geral das portas** no final da página de configurações na administração do servidor de jogos. A senha e a porta devem corresponder aos valores configurados no painel ou no arquivo de configuração. Use o comando abaixo para conectar e executar um comando diretamente:

```bash
rcon-cli -a <IP>:<PORTA> -p <SENHA> comando
```



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor de Counter-Strike: Source. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                    | Descrição                                      |
|---------------------------|--------------------------------------------------|
| `rcon_password <senha>`   | Autentica como admin RCON                       |
| `status`                  | Mostra informações dos jogadores e do servidor |
| `changelevel <mapa>`      | Troca o mapa                                    |
| `mp_autoteambalance 0/1`  | Ativa/desativa balanceamento automático de times |
| `mp_timelimit <minutos>`  | Define o limite de tempo do mapa                |
| `mp_friendlyfire 0/1`     | Ativa/desativa fogo amigo                        |
| `mp_freezetime <segundos>`| Define o tempo de congelamento no início da rodada |
| `sv_cheats 0/1`           | Ativa cheats (uso exclusivo de admin)           |
| `exec <arquivo.cfg>`      | Executa um arquivo de configuração               |
| `kick <jogador>`          | Expulsa um jogador do servidor                   |



## Conclusão

RCON é uma ferramenta essencial para administração remota de servidores de jogos Counter-Strike: Source. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />