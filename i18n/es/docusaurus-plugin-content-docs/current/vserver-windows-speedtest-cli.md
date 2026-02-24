---
id: vserver-windows-speedtest-cli
title: "Configura Speedtest CLI en un Servidor Windows - Monitorea el Rendimiento de tu Red"
description: "Descubre cómo gestionar código fuente de forma eficiente y colaborar usando Speedtest CLI para un control de versiones sin complicaciones en el desarrollo moderno → Aprende más ahora"
sidebar_label: Instalar Speedtest CLI
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Speedtest CLI es un sistema de control de versiones distribuido diseñado para una gestión eficiente del código fuente. Permite a los desarrolladores seguir cambios, trabajar en diferentes ramas simultáneamente y colaborar en proyectos sin problemas. Gracias a su flexibilidad y rendimiento, Speedtest CLI se ha convertido en la herramienta estándar para el control de versiones en el desarrollo de software moderno.

¿Estás pensando en alojar este servicio por tu cuenta? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que debes tener en cuenta.

<InlineVoucher />



## Preparación

Antes de configurar **Speedtest CLI**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la versión más reciente. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.


### Actualizar Sistema
Para asegurarte de que tu sistema esté funcionando con las mejoras más recientes en software y seguridad, siempre debes realizar primero las actualizaciones del sistema. Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.



## Instalación

Ahora que has completado las preparaciones necesarias, puedes proceder con la instalación de la aplicación Speedtest CLI. Para ello, descarga Speedtest CLI para Windows (x64) aquí: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Luego, ejecuta el instalador del archivo descargado y sigue los pasos que se muestran.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Configuración

speedtest-cli no depende de un archivo de configuración tradicional, pero puede personalizarse usando opciones de línea de comandos y variables de entorno. Esto te permite adaptarlo para un uso consistente y automatizado:

- `--server <ID>`: Selecciona un servidor específico por su ID para obtener resultados de prueba más consistentes y comparables.  
- `--bytes`: Muestra velocidades en bytes por segundo en lugar de bits.  
- `--simple`: Muestra solo ping, descarga y subida en un formato compacto.  
- `--json` o `--csv`: Útil para automatización y registro, ya que los resultados se almacenan en un formato legible por máquinas.  
- Soporte para proxy: Configura variables de entorno como `http_proxy` o `https_proxy` para ejecutar speedtest-cli detrás de un proxy.  

Para un uso repetido con las mismas opciones, es conveniente crear un alias de shell o un pequeño script envoltorio. Así podrás ejecutar speedtest-cli rápido y asegurarte de que la salida sea uniforme.



## Conclusión y más Recursos

¡Felicidades! Ahora has instalado y configurado Speedtest CLI exitosamente en tu vServer. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante la configuración de tu servidor:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Sitio Oficial

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂



<InlineVoucher />