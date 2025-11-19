---
id: dedicated-freebsd
title: "Servidor Dedicado: Instalación de FreeBSD"
description: "Descubre cómo instalar y configurar FreeBSD en tu servidor dedicado para un rendimiento y fiabilidad óptimos → Aprende más ahora"
sidebar_label: Instalar FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

A continuación te explicamos paso a paso cómo instalar y configurar el sistema operativo FreeBSD en tu servidor dedicado. Sigue estas instrucciones con cuidado para asegurarte de que configuras el sistema operativo correctamente y lo aprovechas al máximo.

:::info

La estructura de esta guía está basada en el uso del sistema operativo FreeBSD 13.0. Las instalaciones de versiones anteriores o más recientes pueden variar ligeramente en el proceso.

:::



## Preparación

Para la instalación y configuración de un sistema operativo, es importante montar inicialmente el ISO correspondiente del sistema operativo. Hay varias formas posibles de montarlo:

1. Montaje vía la configuración inicial
2. Montaje vía iLO (Medios Virtuales)
3. Montaje vía iLO (Consola Remota)

Si aún no estás familiarizado con cómo montar un archivo ISO, lo mejor es que consultes nuestra [Configuración inicial](dedicated-setup.md) o la guía de [ISO propia](dedicated-iso.md).



## Instalación
Cuando el ISO se haya cargado correctamente, el servidor estará en el proceso de configuración.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Comenzamos la instalación pulsando `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Elige el mapa de teclado que prefieras y continúa.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Elige el nombre de host que desees.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Puedes seleccionar paquetes opcionales del sistema que quieras instalar, cuando termines continúa con OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

En este paso puedes crear particiones, en este ejemplo usamos un RAID0. Más información sobre RAIDs está explicada en [Configurar RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Puedes continuar con `Enter` si no hay cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Como tenemos un RAID0, elegimos sin redundancia.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Marca tu volumen con `Space` y continúa pulsando `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

Verificamos que todos los datos serán borrados

:::info
Tu servidor está procesando la configuración, esto puede tardar varios minutos
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Por favor, introduce tu contraseña y continúa pulsando `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Elige "No" en la configuración IPv4/IPv6, esto se hará al final.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Elige "Sí" y selecciona tu zona horaria y la fecha/hora.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Puedes cambiar los servicios que se iniciarán automáticamente al arrancar el servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Si es necesario, puedes modificar los ajustes de seguridad.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

La configuración ya está lista, elige "Salir" y confirma pulsando `Enter`

:::info
Elimina el archivo ISO en tu iLO y elige "Reiniciar"
:::



## Configuración

### Red

Para habilitar el dispositivo de red, por favor inicia sesión en tu sistema usando la contraseña.

Abre loader.conf con un editor de tu elección, por ejemplo `ee /boot/loader.conf` y añade la siguiente línea:

```if_oce_load="YES"```

Puedes salir del editor pulsando `CTRL+C` y escribiendo exit, después reinicia tu servidor dedicado.

***

Tras el reinicio, necesitamos modificar el rc.conf, por ejemplo con `ee /etc/rc.conf`, añade las siguientes líneas:

```
ifconfig_oce0="DHCP"
```

:::caution
El nombre del adaptador de red mostrado en el ejemplo **oce0** puede ser diferente. Asegúrate de especificar el adaptador de red correcto. Esto se puede verificar con el comando ifconfig. La información se obtendrá automáticamente a través del servidor DHCP.
:::

Esto debería verse así, por ejemplo:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Sal del editor pulsando `CTRL+C` y escribiendo "exit", después ejecuta el comando `/etc/netstart` una vez.

:::info
Tu servidor debería tener ahora una conexión a internet activa
:::



## Conclusión

¡Felicidades, has instalado con éxito el sistema operativo FreeBSD en tu servidor dedicado! Para cualquier pregunta o ayuda, no dudes en contactar con nuestro equipo de soporte, disponible a diario para asistirte 🙂