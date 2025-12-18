---
id: fivem-mods-installaddon
title: "FiveM: Instalar Addon Carmods no Servidor"
description: "Descubra como baixar e converter mods de carros para FiveM facilmente para turbinar sua experiência no jogo com um passo a passo → Saiba mais agora"
sidebar_label: Instalar Addon Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conecte-se via FTP

Primeiro, conecte-se ao seu servidor via FTP, você pode usar nosso [Acesso via FTP](gameserver-ftpaccess.md).

## Preparação

Para este tutorial, vamos usar a ferramenta [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest), que simplifica muito o processo. Baixe as pastas "NConvert.zip" e "rpf2fivem.zip" na seção "Releases":

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

Agora, primeiro descompacte o rpf2fivem em uma pasta vazia:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Depois, abra o arquivo zip do NConvert e copie a pasta "NConvert" para a mesma pasta:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

Agora podemos abrir o `rpf2fivem.exe`!

## Baixando Mods

Para instalar mods via rpf2fivem, precisamos adicionar links diretos nele, por exemplo, do gta5-mods.com. Escolha o carmod que você quer e clique em "Download".

Agora, clique com o botão direito no botão de download e selecione "Copiar endereço do link", depois cole no canto superior esquerdo do rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

Aqui você pode digitar o nome do seu recurso e clicar em "Add to queue".

Se quiser baixar mais mods, é só adicionar do mesmo jeito, vários carmods podem ser instalados ao mesmo tempo:

## Converter Mods

Com a lista de mods pronta, é só clicar no botão "Start".

:::info
Dica: a opção 'compress/downsize textures' deve sempre estar marcada para evitar erros de textura nos Carmods no FiveM.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

Agora os carmods são baixados e preparados para o FiveM.

## Enviar recursos

Quando o rpf2fivem terminar, os carmods estarão na pasta "rpf2fivem":

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

Agora é só enviar esses arquivos via [Instalar recursos](fivem-installresources.md). Também é criado um `servercfg.txt` na pasta rpf2fivem com as entradas para adicionar os carmods direto no server.cfg, basta copiar e colar lá.

Pronto! Os Carmods estão instalados no seu servidor, depois de reiniciar o servidor eles já podem ser usados.

<InlineVoucher />