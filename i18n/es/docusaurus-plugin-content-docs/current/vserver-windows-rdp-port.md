---
id: vserver-windows-rdp-port
title: "VPS: Cambiar el puerto RDP de Windows"
description: "Descubre cómo cambiar el puerto RDP de Windows → Aprende más ahora"
sidebar_label: Cambiar puerto RDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

El Protocolo de Escritorio Remoto (RDP) usa por defecto el puerto 3389. Este puerto es muy conocido y suele ser objetivo frecuente de escaneos automáticos. Cambiar el puerto RDP puede reducir intentos de conexión no deseados y mejorar la seguridad básica.

<InlineVoucher />



## Cambiar el puerto RDP en el registro

Inicia sesión en el servidor localmente o a través de una conexión de Escritorio Remoto existente. Abre el cuadro de diálogo Ejecutar con **Win + R**, escribe `regedit` y confirma para abrir el Editor del Registro. Navega a la siguiente ruta del registro:

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Localiza la entrada del registro llamada **PortNumber**. Cambia el formato del valor a **Decimal** e ingresa el nuevo número de puerto deseado. Se recomienda un puerto superior a 1024 que no esté en uso por otro servicio. Después de aplicar el cambio, cierra el Editor del Registro.

## Ajustar las reglas del firewall de Windows

El nuevo puerto RDP debe estar permitido en el firewall de Windows. Abre **Firewall de Windows Defender con seguridad avanzada** y navega a la sección de reglas de entrada.

Modifica la regla existente de Escritorio Remoto o crea una nueva regla de entrada que permita tráfico TCP en el puerto configurado. Asegúrate de que la regla permita la conexión y se aplique a los perfiles de red necesarios.

## Reiniciar el servicio para aplicar los cambios

El cambio de puerto solo se activa después de reiniciar los Servicios de Escritorio Remoto o reiniciar el sistema. Se recomienda un reinicio completo del servidor para asegurar que la configuración se aplique correctamente.

## Conectar usando el nuevo puerto

Al establecer una nueva conexión de Escritorio Remoto, el puerto debe especificarse explícitamente añadiéndolo a la dirección IP o nombre de host. Ejemplo:

```
203.0.113.10:3390
```

## Conclusión

Cambiar el puerto RDP de Windows reduce la exposición a escaneos automáticos e intentos de conexión no autorizados. El proceso implica actualizar el Registro de Windows, permitir el nuevo puerto en el firewall y reiniciar el sistema o los servicios.

Tras completar, verifica el acceso inmediatamente y documenta el puerto configurado para evitar problemas futuros de conexión. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />