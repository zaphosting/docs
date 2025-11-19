---
id: dedicated-centos
title: "Servidor dedicado: Instalación de CentOS"
description: "Descubre cómo instalar y configurar CentOS en tu servidor dedicado para un rendimiento y seguridad óptimos → Aprende más ahora"
sidebar_label: Instalar CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

A continuación te explicamos paso a paso cómo instalar y configurar el sistema operativo CentOS en tu servidor dedicado. Sigue estas instrucciones con cuidado para asegurarte de configurar el sistema operativo correctamente y aprovecharlo al máximo.

:::info

La estructura de esta guía está basada en el uso del sistema operativo CentOS 8.3. Las instalaciones de versiones anteriores o más recientes pueden variar ligeramente en el proceso.

:::



## Preparación

Para la instalación y configuración de un sistema operativo, es importante montar inicialmente el ISO correspondiente del sistema operativo. Hay varias formas posibles de montarlo:

1. Montaje vía configuración inicial
2. Montaje vía iLO (Medios Virtuales)
3. Montaje vía iLO (Consola Remota)

Si aún no estás familiarizado con montar un archivo ISO, lo mejor es que consultes nuestra [guía de configuración inicial](dedicated-setup.md) o la guía de [ISO propia](dedicated-iso.md).



## Instalación

Cuando el ISO se haya cargado correctamente, el servidor estará en el proceso de configuración.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Teclado  
Elige la distribución de teclado que prefieras

* Fecha y hora  
Selecciona tu zona horaria

* Contraseña root  
Establece una contraseña para tu cuenta root. Puede ser cualquiera, pero recuerda usar una contraseña fuerte y guardarla en un lugar seguro.

* Destino de instalación  
Selecciona el SSD donde se instalará CentOS

* Red y nombre de host  
Debido a un problema de incompatibilidad, la red no pudo configurarse aún, lo haremos al final.

Cuando hayas configurado todo a tu gusto, pulsa 'Begin Installation'.

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

Tras completar la instalación, elimina el archivo ISO de tu servidor y haz clic en 'Reboot System'.



## Configuración

### Red

A continuación configuraremos el dispositivo de red, lo que requiere actualizar algunos archivos. Por favor, monta este archivo ISO en tu servidor, ya sea a través de la consola remota o del propio iLO.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

Después de montar el archivo ISO correctamente, necesitamos montarlo en nuestro sistema para tener acceso a él.

```mount /dev/sr0 /mnt```

El archivo ISO ahora está montado en `/mnt`

```rpm -i /mnt/be2net.rpm```

A continuación, instala el paquete de actualización.

```modprobe be2net```

En este paso ejecutaremos la actualización, esto puede tardar unos segundos.  
Ahora puedes comprobar con `ip a s` si existe un dispositivo de red llamado `eno1`, si es así, por favor reinicia tu sistema.

Después de que el sistema se reinicie, continúa configurando el dispositivo de red.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Por favor, rellena los siguientes datos en el archivo:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Puedes salir de nano pulsando `CTRL+X` y luego `Y`

Ahora necesitamos arrancar nuestro dispositivo de red con `ifup eno1` 

:::info
Tu servidor dedicado debería tener ahora una conexión a internet funcionando.
:::





## Conclusión

¡Felicidades, has instalado con éxito el sistema operativo CentOS en tu servidor dedicado! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂


