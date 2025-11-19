---
id: dedicated-windows-rescue
title: "Servidor dedicado: Recupera tus archivos usando System Rescue"
description: "Descubre cómo recuperar datos y crear copias de seguridad desde un servidor que no arranca usando SystemRescue ISO y transferencia segura de archivos → Aprende más ahora"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tu servidor ya no arranca? ¿Estás bloqueado fuera de tu sistema o quieres crear una copia de seguridad antes de hacer cambios?
Al arrancar tu servidor con la **SystemRescue ISO**, aún puedes acceder a tus discos, restaurar archivos importantes y crear copias de seguridad localmente. Esto funciona incluso si el sistema operativo original ya no es accesible.

Para transferir los datos recuperados de forma segura, puedes usar **SFTP (Secure File Transfer Protocol)**. Este método te permite copiar archivos desde el sistema de rescate a tu ordenador local o a otro servidor a través de una conexión segura y cifrada.





## Preparación

Para realizar la copia de seguridad de los datos, usarás la **SystemRescue ISO versión 12.01**.
Comienza accediendo a la interfaz de tu servidor dedicado y navega a la sección de **Instalación inicial**.

Selecciona la ISO **SystemRescue 12.01** de las opciones disponibles. Tras seleccionar la ISO correcta, haz clic en **Arrancar desde ISO** para iniciar el proceso de arranque. Una vez que el servidor haya arrancado desde la ISO, conéctate a él vía la [interfaz iLO](dedicated-ilo.md) para continuar.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



En la **interfaz de gestión iLO**, abre la **consola HTML** para acceder a la pantalla remota de tu servidor. Una vez activa la consola, verás el menú de arranque de la **SystemRescue ISO**. Desde aquí, selecciona la opción para arrancar usando los **parámetros por defecto**.

Esto asegura que SystemRescue arranque con la configuración estándar recomendada, proporcionando un entorno estable y listo para mantenimiento del sistema o tareas de copia de seguridad.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## Montar el/los disco(s)

Antes de montar un disco, es importante obtener una visión general de los dispositivos de almacenamiento disponibles y sus particiones. Puedes hacerlo con el siguiente comando:

```
fdisk -l
```

Este comando lista todos los discos detectados junto con los detalles de sus particiones. La salida incluye:

- Dispositivos de almacenamiento conectados (ej. `/dev/sda`, `/dev/sdb`),
- El tamaño de cada disco,
- Tipos de partición,
- Particiones disponibles (ej. `/dev/sda1`, `/dev/sda2`, …),
- El tipo de sistema de archivos (si se detecta).

En este ejemplo, el disco `/dev/sda` tiene tres particiones: `/dev/sda1`, `/dev/sda2` y `/dev/sda3`. Asegúrate de seleccionar la partición correcta antes de montar. La salida de `fdisk -l` te ayuda a evitar errores mostrando claramente qué disco contiene qué datos. Ejemplo:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

Una vez identificada la partición correcta, el siguiente paso es crear un directorio que servirá como punto de montaje. Esta será la ubicación donde la partición será accesible. Luego, monta la partición deseada en este directorio. Se recomienda montar en **modo solo lectura** para asegurar un acceso seguro a los datos.

Para crear el punto de montaje y montar la partición, usa los siguientes comandos:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Sustituye `/dev/sdaX` por el identificador correcto de la partición que encontraste con `fdisk -l`. En este ejemplo, `/dev/sda2` sería la partición correcta para nuestro disco.

:::tip Particiones de Windows en hibernación

Linux no puede abrir de forma segura particiones de Windows que estén en hibernación o afectadas por Fast Boot. Para evitar pérdida o corrupción de datos, siempre monta estas particiones **en modo solo lectura**.

:::

## Configuración del firewall

Por razones de seguridad, SystemRescue activa su firewall por defecto. Esto significa que todas las conexiones entrantes están bloqueadas para proteger el sistema de accesos no autorizados.

Sin embargo, en este caso, necesitas permitir una conexión desde tu máquina local al servidor SFTP que corre en SystemRescue. Para ello, debes configurar el firewall para permitir tráfico SFTP o desactivarlo temporalmente.

Si trabajas en una red de confianza, la solución más fácil y rápida es detener el servicio del firewall en SystemRescue con el siguiente comando:

```
systemctl stop iptables
```



## Configurar la contraseña root

El cliente SFTP debe autenticarse con un usuario y contraseña para poder acceder a los datos del servidor SFTP. Se usa la cuenta root del sistema para que el cliente pueda acceder a los archivos visibles en SystemRescue. Por defecto, la autenticación como root en SystemRescue no está permitida. Debes establecer una contraseña para permitir que el cliente se autentique. Define una contraseña con el siguiente comando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Transferencia de datos

Ya estás listo para hacer la copia de seguridad de tus datos. Para ello, simplemente abre cualquier cliente FTP que prefieras y establece una conexión con tu servidor. Asegúrate de seleccionar `SFTP` como protocolo de transferencia. Para el nombre de host, introduce la `dirección IP` de tu servidor, usa el puerto `21` e inicia sesión con el usuario `root` y la `contraseña` que configuraste antes.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Cuando te conectas a un servidor vía **SFTP** por primera vez, WinSCP muestra este aviso de seguridad. La advertencia aparece porque la **clave del host** del servidor aún no está almacenada en tu caché local.

En esta situación, donde sabes que la dirección IP es correcta y has iniciado esta conexión intencionadamente, **es seguro confiar en el servidor**. Simplemente haz clic en **"Sí"** para confirmar. Esto añadirá la clave del servidor a tu caché para que no te vuelva a preguntar por este servidor en el futuro.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Ahora que estás conectado, navega al **directorio rescue** que creaste antes. Desde ahí tendrás acceso a tus archivos y podrás empezar a descargarlos a tu máquina local. Simplemente explora las carpetas, selecciona los datos que quieres respaldar y transfiérelos de forma segura vía SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusión

Has rescatado y respaldado con éxito tus archivos importantes.
Esto significa que tus datos están seguros y listos para ser restaurados cuando los necesites. En este punto, puedes continuar con otras acciones, como reinstalar tu servidor, reparar el sistema o migrar tus datos a un nuevo entorno.

Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂