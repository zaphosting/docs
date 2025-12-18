---
id: dedicated-windows-rdp-freeze
title: "Servidor Dedicado: Caídas en la Conexión de Escritorio Remoto"
description: "Descubre cómo solucionar el congelamiento del RDP mejorando la estabilidad de la conexión y evitando interrupciones en la sesión → Aprende más ahora"
sidebar_label: Caídas en Conexión RDP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El problema del congelamiento del RDP es un fenómeno común donde, dependiendo del sistema operativo y la versión usada, las sesiones de escritorio remoto se congelan inesperadamente. Este problema puede ser frustrante y afectar significativamente la productividad. En este documento, aprenderás más sobre la causa del problema y cómo solucionarlo.

## Causa Principal

Diversas fuentes indican cada vez más que el problema se debe a la menor resistencia del protocolo RDP a la pérdida de paquetes o paquetes corruptos. Además, un bug en ciertas versiones de Windows puede causar que el sistema operativo no cambie de forma fluida entre los protocolos TCP y UDP, agravando aún más el problema.

## Enfoque de Solución

Para resolver el problema, puedes desactivar el protocolo UDP para la conexión RDP y usar en su lugar el protocolo TCP, que es más estable. Para ello, abre el Símbolo del sistema (cmd.exe) como administrador en tu computadora y ejecuta el siguiente comando:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Al ejecutar este comando, tu computadora usará ahora el protocolo TCP en lugar del UDP para la sesión RDP. Esto puede mejorar la estabilidad de la conexión, especialmente en redes con conexiones inestables o alta pérdida de paquetes.

:::info 
**Confirma la entrada** presionando la tecla Enter y **reinicia tu computadora después** para que el cambio se aplique y tenga efecto.
:::
