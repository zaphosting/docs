---
id: 7d2d-rcon
title: "7 Days to Die: RCON"
description: "Descubra como gerenciar e controlar servidores de 7 Days to Die remotamente e com segurança, sem precisar acessar o jogo, para uma administração eficiente → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite o acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No 7 Days to Die, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações do gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o 7 Days to Die por ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso pode ser feito diretamente na administração do servidor de jogos. Na seção **Configurações**, há uma opção chamada **RCON** que deve ser ativada. Defina uma senha segura e uma porta válida.

A porta RCON atribuída pode ser encontrada no final da página de configurações, em **Visão geral das portas**.

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso é feito editando o arquivo de configuração localizado em **Configs** no painel de gerenciamento do servidor de jogos. No arquivo chamado `serverconfig.xml`, as seguintes entradas devem ser adicionadas ou modificadas:

```cfg
<property name="TelnetPassword" value="defina-sua-senha-aqui"/>
```
A porta RCON atribuída pode ser encontrada no final da página de configurações em Visão geral das portas e deve ser especificada lá.



## Conectando via RCON

Para conectar ao servidor de 7 Days to Die via RCON, usa-se a ferramenta de linha de comando **rcon-cli**. Ela pode ser baixada do repositório oficial no [GitHub](https://github.com/gorcon/rcon-cli). Após baixar e instalar a ferramenta no seu computador, a conexão pode ser estabelecida usando o endereço IP do servidor, a porta RCON e a senha RCON.

A porta atribuída pode ser encontrada na **Visão geral das portas** no final da página de configurações na administração do servidor de jogos. A senha e a porta devem corresponder aos valores configurados no painel ou no arquivo de configuração. Use o comando abaixo para conectar e executar um comando diretamente:

```bash
rcon-cli -a <IP>:<PORTA> -p <SENHA> -t telnet comando
```



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor de 7 Days to Die. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                | Descrição                                    |
|------------------------|------------------------------------------------|
| `dm` ou `debugmenu on`  | Ativa o modo desenvolvedor                    |
| `giveme <ItemName> <count>` | Dá um item para você                        |
| `buffplayer <ID> <buff>` | Concede um buff a um jogador                   |
| `tele <x> <y> <z>`     | Teleporta você para as coordenadas             |
| `settime <seconds>`     | Define o tempo atual do jogo                    |
| `setgameday <day>`      | Define o dia atual do jogo                       |
| `spawnentity <ID>`      | Gera uma entidade pelo ID                        |
| `kick <player>`         | Expulsa um jogador do servidor                   |
| `ban <address>`         | Bane um IP ou jogador                            |
| `saveworld`             | Salva manualmente o estado do mundo             |



## Conclusão

RCON é uma ferramenta essencial para a administração remota de servidores de jogos 7 Days to Die. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />