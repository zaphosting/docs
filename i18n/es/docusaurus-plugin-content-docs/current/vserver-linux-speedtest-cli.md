---
id: vserver-linux-speedtest-cli
title: "Configura Speedtest CLI en un Servidor Linux - Monitorea el Rendimiento de Red de tu Servidor"
description: "Descubre cómo instalar y usar Speedtest-Cli para pruebas de red confiables y automatización → Aprende más ahora"
sidebar_label: Instalar Speedtest-Cli
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Speedtest-Cli es tanto una herramienta gratuita de línea de comandos como una librería de software (libSpeedtest-Cli) para transferir datos usando URLs. Soporta una amplia variedad de protocolos — incluyendo HTTP(S), FTP, SMTP, LDAP, MQTT y más — y se usa comúnmente para tareas como descargar archivos, probar APIs y automatizar operaciones de red.

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que necesitas tener en cuenta.

<InlineVoucher />

## Preparación

Antes de configurar **Speedtest-Cli**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la versión más reciente. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.

### Actualizar Sistema
Para asegurarte de que tu sistema esté corriendo con el software y mejoras de seguridad más recientes, siempre debes realizar actualizaciones primero. Para hacerlo, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

## Instalación

Ahora que las preparaciones necesarias están completas, puedes proceder con la instalación de la aplicación Speedtest-Cli. Para ello, ejecuta el siguiente comando:

```console
sudo apt install speedtest-cli
```

## Configuración

speedtest-cli no depende de un archivo de configuración tradicional, pero puede personalizarse usando opciones de línea de comandos y variables de entorno. Esto te permite adaptarlo para un uso consistente y automatizado:

- `--server <ID>`: Selecciona un servidor específico por su ID para obtener resultados de prueba más consistentes y comparables.  
- `--bytes`: Muestra velocidades en bytes por segundo en lugar de bits.  
- `--simple`: Muestra solo ping, descarga y subida en un formato compacto.  
- `--json` o `--csv`: Útil para automatización y registro, ya que los resultados se almacenan en un formato legible por máquinas.  
- Soporte para proxy: Configura variables de entorno como `http_proxy` o `https_proxy` para ejecutar speedtest-cli detrás de un proxy.

Para un uso repetido con las mismas opciones, es conveniente crear un alias en shell o un pequeño script wrapper. Así podrás ejecutar speedtest-cli rápido y asegurarte de que la salida sea uniforme.

## Conclusión y más Recursos

¡Felicidades! Ahora has instalado y configurado Speedtest-Cli exitosamente en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante la configuración de tu servidor:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Sitio Oficial

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />