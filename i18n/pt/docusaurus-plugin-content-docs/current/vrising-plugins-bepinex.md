---
id: vrising-plugins-bepinex
title: "V Rising: Instalando plugins no servidor (BepInEx)"
description: "Descubra como turbinar seu gameplay de V Rising com mods BepInEx e melhorar a personalização do servidor → Saiba mais agora"
sidebar_label: Instalar plugins (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guia Arquivado
Este documento foi arquivado. Documentos são arquivados quando não são mais relevantes, estão incorretos ou desatualizados. Ele foi arquivado pelos seguintes motivos:

**Motivo**: O produto V Rising com BepInEx não está mais funcional e, por isso, foi removido da loja. 
::::

## Introdução
BepInEx é um framework open-source super popular para plugins e mods que permite aos jogadores adicionar mods em vários jogos que tradicionalmente não suportam modding oficial. Neste guia, vamos mostrar como você pode instalar plugins via BepInEx no V Rising.
<InlineVoucher />

## Versão do Jogo BepInEx

Para usar plugins compatíveis com **BepInEx** no V Rising, você precisa primeiro instalar a versão do jogo **V Rising BepInEx** no seu servidor. Isso pode ser feito facilmente usando a funcionalidade de troca de jogo do nosso servidor de jogos, saiba mais lendo nosso [Guia de Troca de Jogo](gameserver-gameswitch.md).

## Enviando Plugins

Comece encontrando mods compatíveis com BepInEx que você queira adicionar ao seu servidor. Normalmente, você encontra informações sobre a compatibilidade do plugin na página de download dele.

:::important
Os plugins usados devem ser compatíveis com **BepInEx**, caso contrário não vão funcionar!
:::

Quando tiver um mod pronto, conecte-se ao seu servidor de jogos via FTP. Leia nosso [Guia de Acesso via FTP](gameserver-ftpaccess.md) para aprender como fazer isso.

Com seu cliente FTP aberto, navegue até o seguinte diretório:
```
../vrising/BepInEx/plugins
```

Dentro dessa pasta, você deve colocar os mods que baixou. Normalmente, eles são arquivos com extensão `.dll`. Neste exemplo, enviamos um mod framework que é útil para criar comandos.

:::note
O servidor deve estar parado antes de adicionar ou editar mods, caso contrário as alterações podem ser desfeitas.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Iniciando o Servidor

Depois de enviar os plugins que queria, basta iniciar seu servidor novamente.

:::info
Alguns plugins podem precisar ser instalados também no cliente do seu PC. Confira as informações no site do plugin para saber se isso é necessário.
:::

Você instalou com sucesso novos plugins BepInEx no seu servidor de jogos V Rising!

<InlineVoucher />