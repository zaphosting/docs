---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Descubra como gerenciar e controlar servidores de ARK: Survival Evolved remotamente e com segurança, sem precisar entrar no jogo → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RCON (Remote Console) é um protocolo de rede usado para controlar servidores de jogos remotamente. Ele permite acesso ao console do servidor sem interação direta com o ambiente do servidor. Isso possibilita executar comandos administrativos, ajustar parâmetros de configuração ou obter informações sobre o status do servidor.

No ARK: Survival Evolved, o RCON é usado para executar comandos do lado do servidor, como gerenciar jogadores, alterar configurações do gameplay ou acessar saídas de diagnóstico. A conexão é protegida por senha e opera através de uma porta específica, acessível via clientes RCON compatíveis.

Uma grande vantagem do RCON é que ele permite o gerenciamento do servidor **sem precisar estar conectado ao jogo como jogador**. Administradores podem monitorar e controlar o ARK: Survival Evolved por ferramentas externas, interfaces de linha de comando ou dashboards web, oferecendo flexibilidade e praticidade para operação remota.

<InlineVoucher />

## Configuração

Antes de usar o RCON, ele precisa ser ativado e configurado. Isso é feito editando o arquivo de configuração localizado em **Configs** no painel de gerenciamento do servidor de jogos. No arquivo chamado `GameUserSettings.ini`, as seguintes entradas devem ser adicionadas ou modificadas:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=defina-sua-senha
```
A porta RCON atribuída pode ser encontrada no final da página de configurações, na visão geral de Portas, e deve ser especificada lá.



## Conectando via RCON

Para conectar ao servidor de ARK: Survival Evolved via RCON, usa-se a ferramenta **ARKon**. Ela está disponível para download neste [Steam Thread]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)). Após baixar e instalar a ferramenta no seu computador, um novo perfil de servidor deve ser criado com as seguintes informações:

- Endereço IP do servidor  
- Porta RCON
- Senha RCON 

Depois de salvar o perfil de conexão, o servidor pode ser selecionado na lista e a conexão estabelecida. Uma vez conectado, comandos RCON podem ser executados pela interface gráfica. O ARKon também oferece recursos extras específicos para ARK: Survival Evolved, como:

- Lista de jogadores em tempo real e status online  
- Monitoramento e interação com o chat do jogo  
- Botões de acesso rápido para comandos administrativos comuns  
- Registro da saída RCON e histórico de comandos



## Comandos RCON

Uma vez conectado via RCON, vários comandos administrativos e de diagnóstico podem ser executados no servidor de ARK: Survival Evolved. Os comandos disponíveis dependem do motor do jogo, mas normalmente incluem ações para gerenciamento de jogadores, consultas de status e controle do servidor.

| Comando                            | Descrição                                           |
|-----------------------------------|----------------------------------------------------|
| `EnableCheats <senha>`             | Ativa o modo admin no servidor (comandos admin)   |
| `AdminCheat KickPlayer <Steam64ID>` | Expulsa um jogador                                |
| `AdminCheat BanPlayer <Steam64ID>`  | Bane um jogador                                    |
| `AdminCheat UnbanPlayer <nomeDoJogador>` | Desbane um jogador                              |
| `AdminCheat Broadcast <mensagem>`   | Envia uma mensagem broadcast para todos os jogadores |
| `AdminCheat SaveWorld`              | Salva o estado atual do mundo                      |
| `AdminCheat SetTimeOfDay <hh:mm>`  | Define o horário dentro do jogo                     |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Teleporta um jogador para sua localização    |
| `cheat Slomo <fator>`               | Ajusta a velocidade do jogo                         |
| `AdminCheat GiveItemNum <ItemID> <quantidade> <qualidade> 0` | Gera itens no seu inventário          |




## Conclusão

RCON é uma ferramenta essencial para administração remota de servidores de ARK: Survival Evolved. Ele permite acesso rápido e direto às funções administrativas, oferecendo controle de acesso via autenticação por senha. Uma configuração correta e segura é fundamental para garantir a estabilidade do servidor e proteger contra acessos não autorizados.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />