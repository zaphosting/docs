---
id: assettocorsa-contentmanager
title: "Assetto Corsa: Configure o Servidor com Content Manager"
description: "Descubra como configurar e gerenciar seu servidor de jogos de forma eficiente para desempenho e personalização ideais → Saiba mais agora"
sidebar_label: Configure o Servidor com Content Manager
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Importante** Para gerenciar o servidor com o Content Manager, é necessário ter a versão completa, a versão lite *não* permite gerenciar servidores.
:::

<InlineVoucher />


## Preparação

Primeiro, abra o seu Content Manager e clique no menu sanduíche no canto superior direito, onde selecionamos "Server":

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

Aqui vamos criar um novo preset e selecioná-lo:

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## Definir Slots do Servidor

Primeiro precisamos definir a capacidade do nosso servidor, no nosso caso ele tem apenas 10 slots, então selecionamos '10' em Capacity:

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## Definir Mapa

Aqui Imola está selecionado como mapa padrão, clicando no mapa podemos escolher o nosso próprio mapa:

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## Definir Carros

Agora mudamos para a aba "Entry List", aqui podemos adicionar novos carros:


![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
Note que todos os slots de carro estão preenchidos e que não há mais carros do que a quantidade de slots disponíveis.

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## Configurar Upload via FTP

No menu "Advanced" podemos configurar um uploader FTP para que você envie a configuração do seu servidor com um clique.

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


Agora insira seus dados FTP aqui:

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
No campo "Folder" você deve inserir o ID do seu servidor de jogos como aparece na URL do seu servidor, por exemplo:

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

No nosso caso, seria:

```
/g427814/assetto-corsa/
```

Para AssettoServer:

```
/g427814/assettoserver/
```

Depois disso, é só clicar em "Upload Content", a configuração, pista e carros configurados serão enviados automaticamente, aí é só iniciar seu servidor!

<InlineVoucher />