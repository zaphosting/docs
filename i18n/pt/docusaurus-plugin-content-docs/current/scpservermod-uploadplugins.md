---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Instalando plugins no servidor"
description: "Descubra como instalar e configurar plugins SMOD para seu servidor SCP para melhorar a jogabilidade e os recursos do servidor → Saiba mais agora"
sidebar_label: Instalar Plugins
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guia Arquivado
Este documento foi arquivado. Documentos são arquivados quando não são mais relevantes, estão incorretos ou desatualizados. Foi arquivado pelos seguintes motivos:

Motivo: A extensão Servermod para SCP foi abandonada e, portanto, não será mais mantida. Recomendamos migrar para **[SCP:EXILED](exiled-plugins.md)**.
::::

<InlineVoucher />

## Conecte-se ao FTP

Antes de instalar plugins, o [Acesso via FTP](gameserver-ftpaccess.md) precisa estar configurado.

Depois de configurado, você pode se conectar e abrir a seguinte pasta do servidor:
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Instalando Plugins

### Encontrando Plugins

Primeiro, você precisa localizar plugins compatíveis com SMOD.

O melhor lugar para conseguir esses plugins é diretamente no [discord deles](https://discord.gg/T9aurNf).

:::info
Esse é apenas um dos lugares onde você pode encontrá-los. Eles podem estar disponíveis em outros locais. É importante verificar se são compatíveis com a sua versão do SMOD.
:::

Neste exemplo, vamos pegar o seguinte plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Enviando Plugins

Depois de baixar os plugins desejados, você deve enviá-los para o FTP do seu servidor. Você pode fazer isso via **arrastar e soltar** na pasta **sm_plugins**.

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Nota: Após instalar qualquer plugin, você precisa **reiniciar seu servidor** para que as alterações **entrem em vigor.**
:::

### Configurando Plugins

Dependendo do plugin, pode ser necessário adicionar várias configurações no seu arquivo config_gameplay.txt.

No nosso exemplo, as seguintes configurações são definidas.

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

Para adicioná-las, editamos o config_gameplay.txt.

Você pode encontrar esse arquivo na aba **Configs** à esquerda.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

Depois, localize o arquivo **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
As configurações podem ser adicionadas em qualquer lugar do arquivo. Para seguir uma boa prática, vamos colocá-las abaixo de '#Misc gameplay settings' no arquivo config_gameplay.txt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
IMPORTANTE: Dependendo do plugin, suas configurações serão diferentes. Sempre leia as instruções do plugin para adicionar as configurações corretamente.
:::

Depois de definir as configurações, reinicie (ou inicie) seu servidor e confira tudo direto no jogo!

<InlineVoucher />