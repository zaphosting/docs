---
id: vserver-linux-ftp
title: "VPS: Servicio FTP no disponible (Interfaz GS/TS3)"
description: "Entiende cómo solucionar y restaurar el acceso FTP en tu VPS cuando los servidores de juegos o Teamspeak no están accesibles → Aprende más ahora"
sidebar_label: Servicio FTP no disponible
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servicios de servidor de juegos y Teamspeak 3 creados mediante la interfaz GS/TS3 son servicios totalmente gestionados. El acceso FTP se proporciona a través de la interfaz y la infraestructura subyacente. Si el acceso FTP no es posible, la causa suele estar relacionada con el estado del servicio, la configuración interna o problemas en la infraestructura, más que con la configuración local del cliente FTP.



:::warning Servicio FTP proporcionado por la interfaz GS/TS3
Esta guía aplica únicamente al servicio FTP que se instala y gestiona automáticamente cuando se utiliza la función de la interfaz GS/TS3. Si la interfaz GS/TS3 no está instalada, no se configura ningún servidor FTP por defecto en el sistema. En ese caso, el acceso FTP no está disponible a menos que se instale manualmente un servicio FTP.
:::

<InlineVoucher />



## Verificar el estado de ProFTPD vía SSH

Conéctate al servidor vía SSH o consola y verifica el estado actual del servicio FTP usando el siguiente comando:

```
service proftpd status
```

La salida mostrará si el servicio ProFTPD está actualmente en ejecución. Si el servicio aparece como activo o en ejecución, el servicio FTP está disponible y debería aceptar conexiones entrantes. En este caso, la causa del problema generalmente no es el demonio FTP en sí, sino que puede estar relacionada con los datos de acceso, reglas del firewall o la configuración del cliente.

Si el estado aparece como inactivo, muerto o detenido, el servicio FTP no está funcionando. Mientras el servicio esté detenido, no se podrán establecer conexiones FTP.

## Reiniciar el servicio FTP

Si el servicio ProFTPD no está en ejecución, puede iniciarse manualmente. Para ello, ejecuta el siguiente comando:

```
service proftpd restart
```

Después de iniciar o reiniciar el servicio, siempre se debe verificar nuevamente el estado para confirmar que ProFTPD está funcionando correctamente. Si el servicio aparece como activo tras el reinicio, el acceso FTP debería estar disponible nuevamente.



## Causas comunes de problemas con FTP

Los problemas de acceso FTP suelen deberse a que el servicio FTP no está en ejecución o se detuvo durante un reinicio del sistema o una actualización. Errores de configuración también pueden impedir que ProFTPD se inicie correctamente. En algunos casos, otro servicio puede estar usando ya el puerto 21, lo que impide que el servicio FTP se vincule al puerto requerido. Problemas temporales a nivel de sistema o servicio también pueden causar que el servicio FTP se detenga inesperadamente.

Si ProFTPD no puede iniciarse o se detiene inmediatamente después de iniciarse, se requiere una investigación más profunda. En estos casos, se recomienda revisar los registros del sistema o contactar con soporte.



## Conclusión



El acceso FTP para los servicios de servidor de juegos GS/TS3 se gestiona exclusivamente a través de la interfaz GS/TS3. Si las comprobaciones estándar no resuelven el problema, es necesario escalar a soporte. Proporcionar información completa y precisa ayuda a asegurar una resolución más rápida. Para cualquier pregunta o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂



<InlineVoucher />