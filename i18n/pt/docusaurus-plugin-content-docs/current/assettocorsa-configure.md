---
id: assettocorsa-configure
title: "Assetto Corsa: Configure seu servidor"
description: "Descubra como configurar seu servidor de jogos Assetto Corsa com mapas e carros personalizados para uma experiência de jogo top → Saiba mais agora"
sidebar_label: Configurar Servidor
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conecte-se ao FTP

Antes de configurar o servidor, o [Acesso via FTP](gameserver-ftpaccess.md) precisa estar configurado:

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

Depois disso, você pode se conectar e abrir a pasta do servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## Preparação

Primeiro, abra a pasta do Assetto Corsa, você pode fazer isso abrindo o Steam e clicando com o botão direito em "Assetto Corsa" na lista de jogos.

Agora abra "Arquivos Locais" para acessar os arquivos locais do jogo:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

Agora abra a pasta "server", lá tem um arquivo chamado "acServerManager", abra ele.

## Definir Mapa

Estamos agora na interface do "AC Server Manager", com ela podemos criar e gerenciar configs do servidor, primeiro vamos criar uma nova config.

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

Agora podemos configurar nosso servidor, no nosso caso só queremos editar as pistas e os carros, para isso abrimos a aba "Tracks".

Aqui você pode clicar no mapa que preferir, acima dá pra ajustar o número de carros na pista.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
Fique ligado para não colocar mais carros do que slots disponíveis no seu servidor, senão ele não vai iniciar.
:::

## Definir Carros

Agora vamos para a aba "Cars / Entry List", aqui você pode adicionar novos carros:


Para ativar os carros, a caixinha à esquerda precisa estar marcada.

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

No meio você vê os carros que podem ser colocados na grid, aqui você escolhe os carros nas cores que quer que apareçam na grid:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
Para selecionar vários carros, marque várias caixinhas para adicionar os diferentes carros no meio.

Lembre-se que todos os slots de carro precisam estar preenchidos e não ultrapasse o número de slots disponíveis.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## Enviar Config

Agora você pode salvar a Config com o botão "Save" e exportar com o botão "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

Aqui você escolhe uma pasta livre onde os dados da config serão salvos.

Agora pode fechar o AC Server Manager e abrir a pasta onde as Configs foram exportadas.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

Essas Configs podem ser copiadas via Drag&Drop para a pasta "cfg" do seu servidor de jogos.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

Agora o servidor pode ser iniciado com a nova Config.

<InlineVoucher />