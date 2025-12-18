---
id: factorio-rcon
title: "Factorio: RCON"
description: "Descubra como gerenciar e controlar remotamente seu servidor de jogos Factorio para uma administração eficiente e ajustes no gameplay → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite o acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No Factorio, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações do gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o Factorio por meio de ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso pode ser feito diretamente na administração do servidor de jogos. Na seção **Configurações**, há uma opção chamada **RCON** que deve ser ativada. Uma senha segura deve ser definida.

A porta RCON atribuída pode ser encontrada no final da página de configurações, em **Visão geral das portas**. 



## Conectando via RCON

Para conectar ao servidor Factorio via RCON, utiliza-se a ferramenta de linha de comando **rcon-cli**. Ela pode ser baixada do repositório oficial no [GitHub](https://github.com/gorcon/rcon-cli). Após baixar e instalar a ferramenta no seu computador, a conexão pode ser estabelecida usando o endereço IP do servidor, a porta RCON e a senha RCON.

A porta atribuída pode ser encontrada na **Visão geral das portas** no final da página de configurações na administração do servidor de jogos. A senha e a porta devem corresponder aos valores configurados no painel ou no arquivo de configuração. Use o comando abaixo para conectar e executar um comando diretamente:

```bash
rcon-cli -a <IP>:<PORTA> -p <SENHA> comando
```



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor Factorio. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                          | Descrição                                            |
|----------------------------------|--------------------------------------------------------|
| `/help`                          | Exibe todos os comandos disponíveis                   |
| `/players`                       | Lista todos os jogadores conectados                    |
| `/kick <player>`                 | Expulsa um jogador do servidor                         |
| `/ban <player>`                  | Bane um jogador permanentemente                        |
| `/unban <player>`                | Remove o banimento de um jogador previamente banido   |
| `/admins`                        | Mostra a lista de administradores do servidor         |
| `/promote <player>`              | Concede direitos de admin a um jogador                 |
| `/demote <player>`               | Revoga os direitos de admin de um jogador              |
| `/save`                          | Salva o estado atual do mundo                           |
| `/server-save`                   | Aciona um salvamento manual do servidor                 |



## Conclusão

RCON é uma ferramenta essencial para a administração remota de servidores de jogos Factorio. Ele permite acesso rápido e direto às funcionalidades administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />