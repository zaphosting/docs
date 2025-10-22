---
id: vserver-linux-add-ip
title: "VPS: Configura dirección(es) IP"
description: "Aprende a configurar y gestionar direcciones IP principales y adicionales en sistemas Debian y Ubuntu para optimizar tu red → Aprende más ahora"
sidebar_label: Configurar dirección(es) IP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Quieres configurar tu red y especificar direcciones IP?

<InlineVoucher />

## Configuración de la dirección IP

Esta sección explica cómo definir y establecer la dirección IP principal.

<Tabs>
  <TabItem value="debian" label="Debian" default>

La configuración de red en Debian se realiza a través de las interfaces de red. Ejecuta el comando `sudo nano /etc/network/interfaces` para abrir la configuración de red. Por defecto, el contenido debería verse así:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

Si no está disponible, el contenido debe ser como se muestra. Sustituye el marcador de dirección IP (XXX.XXX.XXX.XXX) por la dirección IP de tu servidor, que puedes ver en la administración del servidor en el panel. Usa `255.255.255.0` (red clase C) como máscara de subred y asegúrate de que el último octeto solo contenga el 1 para la puerta de enlace.

Guarda los cambios con CTRL+X y confirma con Enter. Ahora debes reiniciar el módulo de red para que la nueva dirección IPv4 se active, esto se hace con el siguiente comando:

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

  </TabItem>
</Tabs>

## Configuración de direcciones IP adicionales
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   Placeholder

  </TabItem>
</Tabs>

## Comprobando la configuración
Para verificar que una dirección IP configurada es correcta y funciona, puedes hacer un test de ping. Por ejemplo, en tu propio ordenador abre la consola (cmd.exe) y ejecuta el siguiente comando:

```
ping <tu_ip_del_servidor>
```

Si la configuración es correcta, el resultado debería verse así:

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## Conclusión

¡Felicidades, has configurado tu red con éxito! Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂 

<InlineVoucher />