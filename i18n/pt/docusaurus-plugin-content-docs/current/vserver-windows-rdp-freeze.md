---
id: vserver-windows-rdp-freeze
title: "VPS: Conexão Remote Desktop Cai"
description: "Descubra como resolver problemas de congelamento do RDP melhorando a estabilidade da conexão e aumentando a produtividade do desktop remoto → Saiba mais agora"
sidebar_label: Quedas na Conexão RDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O problema de congelamento do RDP é um fenômeno comum onde, dependendo do sistema operacional e da versão usada, sessões de desktop remoto congelam inesperadamente. Esse problema pode ser frustrante e prejudicar bastante a produtividade. Neste documento, você vai entender melhor a causa do problema e como resolvê-lo.

<InlineVoucher />

## Causa Principal

Diversas fontes indicam cada vez mais que o problema é devido à menor resistência do protocolo RDP à perda de pacotes ou pacotes corrompidos. Além disso, um bug em certas versões do Windows pode fazer com que o sistema operacional não consiga alternar de forma fluida entre os protocolos TCP e UDP, agravando ainda mais a situação.

## Como Resolver

Para resolver o problema, você pode desativar o protocolo UDP para a conexão RDP e usar o protocolo TCP, que é mais estável. Para isso, abra o Prompt de Comando (cmd.exe) como administrador no seu computador e execute o seguinte comando:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Ao executar esse comando, seu computador vai usar o protocolo TCP em vez do UDP para a sessão RDP. Isso pode melhorar a estabilidade da conexão, especialmente em redes com conexões instáveis ou alta perda de pacotes.

:::info 
**Confirme a entrada** pressionando a tecla Enter e **reinicie seu computador depois** para que a alteração seja aplicada e entre em vigor.
:::

<InlineVoucher />