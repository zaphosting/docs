---
id: vserver-windows-troubleshooting-icmpv4-echo
title: "Solución de problemas de red: Falta ICMPv4 Echo – El servidor aparece desconectado"
description: "Descubre cómo permitir las solicitudes ICMPv4 Echo en el Firewall de Windows para que tu servidor sea detectado correctamente por los sistemas de monitoreo → Aprende más ahora"
sidebar_label: Falta ICMPv4 Echo
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En algunas situaciones, un servidor Windows puede aparecer **desconectado en el panel de control** aunque el sistema esté funcionando normalmente. Este comportamiento suele estar relacionado con la configuración del firewall que bloquea las **solicitudes ICMPv4 Echo**. Estas solicitudes son usadas por el conocido comando `ping` y comúnmente por sistemas de monitoreo para determinar si un servidor o dirección IP es accesible.

Si el Firewall de Windows bloquea las solicitudes ICMP Echo, el sistema de monitoreo no puede recibir respuesta del servidor. Como resultado, el panel puede mostrar el servidor o las direcciones IP asignadas como desconectadas aunque el servidor funcione sin problemas.

![img](https://screensaver01.zap-hosting.com/index.php/s/ptD4W4MkAo85PAo/download)



## Causa

La razón más común para este problema es la falta de una regla en el **Firewall de Windows Defender** que permita las solicitudes entrantes ICMPv4 Echo. Sin esta regla, el firewall bloquea por defecto las solicitudes ping.

Los sistemas de monitoreo dependen de estas respuestas para determinar la disponibilidad del servidor, por eso el sistema puede aparecer desconectado aunque los servicios en el servidor sigan funcionando normalmente.



## Solución

Para resolver este problema, hay que crear una regla en el firewall que permita las solicitudes ICMPv4 Echo. Comienza estableciendo una conexión vía VNC. Para ello, haz clic en **Consola VNC** en la sección de gestión del VPS e inicia sesión con tus credenciales habituales.

![img](https://screensaver01.zap-hosting.com/index.php/s/mDQt7LLbLNSPC6a/download)

Una vez dentro, abre la interfaz de **Firewall de Windows Defender con seguridad avanzada**. Pulsa `Windows + R`, escribe el siguiente comando y confirma con Enter:

```
wf.msc
```
Se abrirá la ventana de configuración avanzada del firewall. En el menú de navegación izquierdo selecciona **Reglas de entrada**, ya que el servidor debe aceptar solicitudes ICMP entrantes. En el lado derecho elige **Nueva regla** para crear una nueva regla de firewall.

Durante el proceso de creación, selecciona **Personalizada** como tipo de regla. En el siguiente paso elige el protocolo **ICMPv4**. Después de seleccionar el protocolo, abre la configuración de **Personalizar** y activa la opción **Solicitud de eco (Echo Request)**, que permite que el servidor responda a las solicitudes ping.

Continúa con el asistente y selecciona **Permitir la conexión** como acción para esta regla. En el paso de selección de perfil, normalmente puedes habilitar la regla para todos los perfiles para que funcione sin importar si el servidor está en una red pública, privada o de dominio.

Finalmente, asigna un nombre claro a la regla, por ejemplo `Permitir solicitudes ICMPv4 Echo`. Al terminar el asistente, la nueva regla permitirá inmediatamente las solicitudes ICMP Echo entrantes.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Verificación

Una vez creada la regla, puedes verificar que el servidor responde a las solicitudes ping. Desde otro sistema, ejecuta el siguiente comando:
```
ping <TU_IP_DEL_SERVIDOR>
```
Si el servidor responde correctamente, el sistema de monitoreo también podrá detectarlo de nuevo. Tras un momento, el estado del servidor en el panel debería cambiar de desconectado a conectado.



## Conclusión

¡Felicidades! Al crear la regla ICMPv4 Echo en el Firewall de Windows, has asegurado que tu VPS Windows pueda responder a las solicitudes ping nuevamente.

Esto permite que los sistemas de monitoreo detecten correctamente la disponibilidad de tu servidor y evita que aparezca desconectado en el panel de control.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂