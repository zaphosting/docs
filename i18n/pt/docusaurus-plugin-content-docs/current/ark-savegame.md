---
id: ark-savegame
title: ARK Survival Evolved Importar seu próprio arquivo de save
description: "Descubra como restaurar seu servidor de jogos Ark: Survival Evolved usando saves oficiais ou pessoais para uma continuidade de jogo sem interrupções → Saiba mais agora"
sidebar_label: Importando arquivo de save
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Quer importar seu próprio arquivo de save ou um backup oficial para seu servidor de jogos Ark: Survival Evolved? Chegou no lugar certo! Este guia vai te mostrar o passo a passo para importar seu save regular ou oficial para seu novo servidor.

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="Como ter um servidor ARK:SE com backups oficiais" description="Prefere entender vendo na prática? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo de forma simples. Seja na correria ou querendo aprender de um jeito mais legal!"/>

<InlineVoucher />

## Prepare seu arquivo de save

### Backup oficial do save

Primeiro, você precisa baixar o arquivo oficial de save do seu servidor. Pode fazer isso direto no [site oficial do ARK](https://survivetheark.com/index.php?/server-backups/) ou usar [uma ferramenta criada pela comunidade](https://arkutils.netlify.app/tools/officialdownload) que facilita a busca pelo seu servidor.

:::note
Se você joga no Xbox ou Playstation, infelizmente não vai conseguir baixar os arquivos oficiais do servidor. Os devs liberaram o download dos saves oficiais apenas para as plataformas Steam e Epic.
:::

Existem dois snapshots disponíveis, um de 25 de agosto de 2023 e outro de 30 de setembro de 2023. Em ambos, você precisa encontrar seu servidor e baixar o arquivo de save.

:::note
O uso do seu próprio backup oficial só é possível com a variante de servidor de jogos **ARK - SE (compatível com backup oficial)**. Se você estiver usando outra versão no seu servidor, pode trocar a versão na seção **games** no painel de controle do seu servidor ou seguir nosso [guia de troca de jogo](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::



### Save regular próprio

Para importar seu próprio arquivo de save (não oficial), você precisa de todos os arquivos do save. Normalmente eles ficam na pasta **SavedArks**, que está dentro do diretório **Shootergame/Saved**. Procure esses arquivos e salve-os para o processo de importação.

:::note
Para isso, use a variante regular do servidor de jogos **Ark: SE** (sem suporte a backup oficial), já que você está importando um save normal, não oficial.

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::



## Enviando o save para o servidor

Depois de baixar seu arquivo `.zip` de save, descompacte ele usando um programa como 7zip ou Winrar. Para qualquer tipo de servidor de jogos e save, o processo de upload é o mesmo.

Agora você precisa acessar seu servidor via FTP para enviar os arquivos do save. Use nosso [guia de acesso via FTP](gameserver-ftpaccess.md) se precisar de ajuda para conectar pelo seu cliente FTP preferido e transferir os arquivos.

Com seu cliente FTP aberto, navegue até o seguinte subdiretório dentro do seu servidor de jogos:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

Apague todos os arquivos do save atual (ou faça backup deles antes, caso queira jogar nesse save depois). Depois, arraste e envie todos os arquivos extraídos para essa pasta (incluindo os arquivos .ark, .arktribe e .arkprofile). Tenha paciência, pois o upload pode demorar dependendo do tamanho do seu save.

Quando o upload terminar, reinicie seu servidor e os arquivos enviados serão carregados. Pronto! Você importou com sucesso um arquivo de backup oficial para seu servidor de jogos Ark: Survival Evolved.

<InlineVoucher />