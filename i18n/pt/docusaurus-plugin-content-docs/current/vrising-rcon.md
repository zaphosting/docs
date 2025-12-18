---
id: vrising-rcon
title: "V Rising: RCON"
description: "Descubra como gerenciar e controlar servidores de V Rising remotamente e com eficiência, sem precisar estar conectado no jogo → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite o acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No V Rising, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações de gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o V Rising por meio de ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso é feito editando o arquivo de configuração localizado em **Configs** no painel de gerenciamento do servidor de jogos. No arquivo chamado `ServerHostSettings.json`, as seguintes entradas devem ser adicionadas ou modificadas:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "defina-sua-senha"
  },
```

A porta RCON atribuída pode ser encontrada no final da página de configurações, na visão geral das Portas, e deve ser especificada lá.



## Conectando via RCON

Para conectar ao servidor de V Rising via RCON, utiliza-se a ferramenta de linha de comando **rcon-cli**. Ela pode ser baixada do repositório oficial no [GitHub](https://github.com/gorcon/rcon-cli). Após baixar e instalar a ferramenta no seu computador, a conexão pode ser estabelecida usando o endereço IP do servidor, a porta RCON e a senha RCON.

A porta atribuída pode ser encontrada na **visão geral das Portas** no final da página de configurações na administração do servidor de jogos. A senha e a porta devem corresponder aos valores configurados no painel ou no arquivo de configuração. Use o comando abaixo para conectar e executar um comando diretamente:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> comando
```



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor de V Rising. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                                    | Descrição                                                    |
|--------------------------------------------|--------------------------------------------------------------|
| `adminauth`                                | Ativa direitos de admin para seu personagem (somente in-game)|
| `admindeauth`                              | Desativa direitos de admin                                   |
| `banuser <SteamID>`                        | Bane um jogador permanentemente                              |
| `unbanuser <SteamID>`                      | Desbane um jogador previamente banido                        |
| `kick <playername>`                        | Expulsa imediatamente um jogador do servidor                |
| `give <ItemName> <Amount>`                 | Dá itens diretamente para seu inventário                     |
| `teleport <X> <Y>`                         | Teleporta seu personagem para as coordenadas indicadas       |
| `teleportplayer <name> <X> <Y>`            | Teleporta outro jogador para coordenadas específicas          |
| `changehealth <value>`                     | Define sua vida atual para um valor específico                |
| `spawn <EntityName> <Amount>`              | Gera NPCs, criaturas ou outras entidades                      |



## Conclusão

RCON é uma ferramenta essencial para a administração remota de servidores de jogos V Rising. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />