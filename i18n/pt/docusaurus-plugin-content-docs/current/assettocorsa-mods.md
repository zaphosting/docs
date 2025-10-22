---
id: assettocorsa-mods
title: "Assetto Corsa: Instalando mods em um servidor"
description: "Descubra como configurar e personalizar seu servidor de jogos Assetto Corsa para uma experiência de jogo top → Saiba mais agora"
sidebar_label: Instalar Mods
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conecte-se ao FTP

Antes de configurar o servidor, o [Acesso via FTP](gameserver-ftpaccess.md) precisa estar configurado:

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

Depois de configurado, você pode se conectar e abrir a pasta do servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Preparação

Primeiro, abra a pasta do Assetto Corsa, você pode fazer isso abrindo o Steam e clicando com o botão direito em "Assetto Corsa" na lista de jogos.

Agora abra "Arquivos Locais" para acessar os arquivos locais do jogo:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Agora abra a pasta "server", lá tem um arquivo chamado "acServerManager", abra ele.



## Configurar Carros

Agora vá para a aba "Cars / Entry List", aqui você pode adicionar novos carros:


Para ativar os carros, a caixa de seleção à esquerda deve estar marcada

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

No meio você vê os carros que podem ser colocados na grid, aqui você escolhe os carros nas cores que devem aparecer na grid:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
Para selecionar vários carros, marque várias caixas para adicionar os diferentes carros no meio.

Lembre-se que todos os slots de carro devem estar preenchidos e não pode passar do número de slots disponíveis.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Upload da Configuração

Agora você pode salvar a Config com o botão "Save" e exportar com o botão "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Aqui você escolhe uma pasta livre onde os dados da config serão salvos.

Agora o AC Server Manager pode ser fechado, abra a pasta onde as Configs foram exportadas.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

Essas Configs podem ser copiadas via Drag&Drop para a pasta "cfg" do seu servidor de jogos.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Upload do Conteúdo do Servidor

Agora precisamos gerar o conteúdo para o servidor, para que os Mods de Carro & Mapa sejam carregados no servidor. Para isso, clique em "Update Server Content" lá embaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

Esse processo pode levar alguns minutos, todos os Mapas & Carros serão convertidos para arquivos do servidor.

:::info
Depois que esse processo terminar, pode aparecer a mensagem "Could not update", isso não é problema.
:::

Agora abra a pasta "Server", onde está o AcServerManager, lá tem uma pasta "Content", que você deve enviar para o seu servidor de jogos Assetto Corsa via Drag&Drop, substituindo a pasta "Content" antiga:

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

Depois que o conteúdo for enviado, os mods de carro estarão instalados e ativos após reiniciar o servidor.

<InlineVoucher />