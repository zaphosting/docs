---
id: redm-txadmin-features
title: "RedM: Interface txAdmin"
description: "Descubra como gerenciar e monitorar seu servidor RedM de forma eficiente com o painel web completo do txAdmin → Saiba mais agora"
sidebar_label: Interface txAdmin
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

O txAdmin é um painel web totalmente gratuito e completo para Gerenciar & Monitorar seu servidor RedM. Ele oferece uma ampla gama de recursos projetados para tornar o gerenciamento de um servidor RedM super fácil. Neste guia, vamos apresentar a interface do txAdmin, destacando suas funcionalidades e explicando exatamente o que você pode fazer com ela.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navegação

O menu de navegação inclui os seguintes itens: **Jogadores**, **Histórico**, **Whitelist**, **Admins**, **Configurações** e **Sistema**. Cada um deles será explicado com mais detalhes a seguir.

### Jogadores

A seção Jogadores oferece uma visão geral das estatísticas dos jogadores, incluindo o número total de jogadores que se conectaram, o número de jogadores conectados nas últimas 24 horas e o número de novos jogadores conectados nas últimas 24 horas e 7 dias. Abaixo disso, você encontra uma lista dos jogadores atualmente conectados, junto com o tempo total de jogo, a primeira conexão e a última conexão.

Clique em um jogador para acessar opções adicionais de gerenciamento. Aqui, você pode ver mais informações, notas, histórico (banimentos/avisos), IDs (Identificadores do Jogador, IDs de Hardware do Jogador) e as opções de banimento.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### Histórico

A seção Histórico lista todos os avisos e banimentos aplicados aos jogadores, junto com informações detalhadas sobre o jogador, o motivo e quem aplicou ou executou o aviso/banimento, incluindo data e hora. Você também pode revogar avisos e banimentos por aqui.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

Na seção Whitelist, você pode gerenciar a função de whitelist. A whitelist permite restringir quem tem acesso ao servidor. Se essa opção estiver ativada nas configurações do txAdmin, uma solicitação de whitelist é criada automaticamente quando um novo jogador se conecta pela primeira vez. Você pode gerenciar essas solicitações conforme necessário nesta seção.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

Na seção Admins, os administradores podem ser especificados e gerenciados. Novos admins podem ser adicionados clicando no botão **Adicionar**. Isso abre uma janela pop-up onde você pode criar a conta e definir as permissões apropriadas.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Configurações

Na seção Configurações, você pode configurar uma ampla variedade de opções tanto para o txAdmin quanto para o servidor em si. Devido à grande quantidade de configurações disponíveis, elas são categorizadas nas seguintes seções: **Geral**, **FXServer**, **Restarter**, **Gerenciador de Jogadores**, **Discord** e **Jogo**. Cada uma será explicada com mais detalhes a seguir.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### Geral

Configurações para o nome do servidor, idioma das mensagens do chat/Discord e templates de banimento podem ser configuradas na seção Geral.

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

Configurações para a Pasta de Dados do Servidor e Caminho do Arquivo CFG, assim como argumentos adicionais como ativar gamemodes/DLCs, habilitar/desabilitar OneSync, Autostart e Modo Silencioso, podem ser configuradas na seção FXServer.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Banimentos

Na seção Banimentos, você pode gerenciar a função de banimento. Defina se as contas devem ser verificadas ativamente quanto ao status de banimento e qual mensagem deve ser exibida caso a conexão seja rejeitada devido a um banimento.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

Na seção Whitelist, você pode gerenciar a função de whitelist. Defina se deseja ativar ou desativar a whitelist e qual mensagem deve ser exibida caso a conexão seja rejeitada por falta de registro na whitelist.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

A integração com Discord pode ser ativada na seção Discord, permitindo que informações sejam transmitidas automaticamente para o servidor Discord vinculado. Para habilitar isso, os detalhes necessários para o bot de voz do Discord devem ser configurados.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Jogo

Na seção Jogo, você pode ativar o Menu txAdmin para uso dentro do jogo, permitindo que admins acessem e gerenciem o menu usando o comando /tx. Opções adicionais de personalização para layout, configuração de botões para alternar switches e notificações/avisos também podem ser definidas.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### Sistema

Na seção Configurações, você encontra algumas opções gerais importantes e informações. Elas são categorizadas nas seguintes seções: **Ações Mestre**, **Diagnósticos**, **Log do Console** e **Log de Ações**. Cada uma será explicada com mais detalhes a seguir.



#### Ações Mestre

Em Ações Mestre você encontra a opção de reiniciar seu FXServer, fazer backup do banco de dados, limpar o banco de dados e definir quando jogadores devem ser removidos da whitelist caso estejam inativos por muito tempo.  

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnósticos

A seção Diagnósticos exibe todas as informações relevantes sobre o ambiente, tempo de execução do txAdmin, Relatório de Diagnóstico, FXServer /info.json e processos.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Log do Console

O Log do Console mostra a saída do txAdmin no terminal principal, incluindo as mensagens de debug normalmente ocultas.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Log de Ações

O Log do Console exibe o Log de Ações, que registra todas as ações realizadas pelo txAdmin ou por qualquer Admin.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Barra Lateral

O menu da barra lateral inclui os seguintes itens: **Dashboard**, **Console ao Vivo**, **Recursos**, **Log do Servidor** e **Editor CFG**. Cada um será explicado com mais detalhes a seguir.



### Dashboard

O dashboard exibe todas as informações gerais essenciais sobre o servidor. Dados ao vivo sobre utilização e desempenho podem ser monitorados através das estatísticas. O status do servidor, se iniciado, online ou parado, é visível na barra lateral. De lá, você também pode iniciar, parar ou reiniciar o servidor, expulsar todos os jogadores com um clique e enviar anúncios. Além disso, reinícios agendados podem ser configurados. No lado direito da barra lateral, você pode ver informações sobre os jogadores atualmente conectados.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Console ao Vivo

O Console ao Vivo fornece informações em tempo real sobre as atividades do servidor. Aqui, você pode ver detalhes sobre atividades, avisos e mensagens de erro. Ele serve como um ponto de referência valioso para depurar problemas analisando possíveis mensagens de erro.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Recursos
Na seção Recursos, você encontra uma visão geral de todos os recursos, seja pré-instalados via template (receita) ou adicionados por você depois. Você também pode reiniciá-los ou pará-los conforme necessário.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Log do Servidor

O log do servidor permite monitorar todas as atividades no servidor. Por exemplo, você pode ver detalhes como quando jogadores se conectam ou desconectam, mensagens de chat, mortes no jogo, ações no menu, comandos executados e eventos do sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### Editor CFG

Você pode usar o editor CFG para gerenciar e atualizar o arquivo de configuração `server.cfg` do seu servidor. É aqui que você encontra todos os comandos essenciais de configuração que controlam as definições do seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />
