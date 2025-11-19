---
id: dedicated-linux-debian
title: "Servidor Dedicado: Instalación de Debian"
description: "Aprende cómo instalar y configurar el sistema operativo Debian en tu servidor dedicado para un rendimiento y fiabilidad óptimos → Aprende más ahora"
sidebar_label: Instalar Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

A continuación te explicamos paso a paso cómo instalar y configurar el sistema operativo Debian en tu servidor dedicado. Sigue estas instrucciones con cuidado para asegurarte de que configuras el sistema operativo correctamente y lo aprovechas al máximo.

:::info

La estructura de esta guía está basada en el uso del sistema operativo Debian 10. Las instalaciones de versiones anteriores o más recientes pueden variar ligeramente en el proceso.

:::



## Preparación

Para la instalación y configuración de un sistema operativo, es importante montar inicialmente el ISO correspondiente del sistema operativo. Hay varias formas posibles de montarlo:

1. Montaje vía la configuración inicial
2. Montaje vía iLO (Medios Virtuales)
3. Montaje vía iLO (Consola Remota)

Si aún no estás familiarizado con montar un archivo ISO, lo mejor es que consultes nuestra [Configuración inicial](dedicated-setup.md) o la [Guía de ISO propia](dedicated-iso.md).



## Instalación

Cuando el ISO se haya cargado correctamente, el servidor estará en proceso de configuración.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

En este ejemplo, recorreremos el proceso de instalación usando la instalación "clásica".

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Selecciona el idioma en el que quieres que se muestre el asistente de instalación. Ten en cuenta que este idioma afectará al sistema instalado al final.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Nuestra ubicación deseada no está en la primera página de selección, así que vamos a la siguiente página con "Otro".

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

En nuestro ejemplo seleccionamos la opción "Europa".

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

Dependiendo de la zona horaria deseada, elegimos la zona horaria alemana en este ejemplo.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

Elegimos Estados Unidos como configuración regional.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

En nuestro caso elegimos la distribución de teclado alemana que es la QWERTZ. Si eres de América, la distribución por defecto sería QWERTY.

:::info
Tu servidor está preparando algunos componentes necesarios para la instalación, esto puede tardar unos minutos.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Tu servidor configura automáticamente su interfaz de red usando DHCP. Selecciona `eno1`, que es el adaptador de red por defecto de tu servidor dedicado ZAP. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

El nombre de host puede modificarse si quieres, pero no es obligatorio cambiarlo.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

El nombre de dominio tampoco tiene que cambiarse.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Aquí tienes que establecer la contraseña para tu cuenta "root". Apunta la contraseña elegida.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Para confirmar la contraseña, tienes que introducirla de nuevo.

:::info
El asistente de instalación te pedirá crear una segunda cuenta de usuario.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Ahora introduce el nombre del propietario para una cuenta de usuario normal. Por supuesto, puedes elegir libremente lo que quieras poner aquí.

:::info
Por supuesto, al final puedes usar la cuenta "root".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Ahora introduce el nombre de usuario de la cuenta. También elige una contraseña y confírmala de nuevo. Tu servidor preparará los siguientes pasos de instalación.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Ahora tienes la posibilidad de crear particiones o usar todo el SSD como una sola partición. Si no quieres cambiar nada en la partición, simplemente elige "Guiado - Usar disco entero".

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Selecciona el SSD que está instalado en tu servidor. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

Básicamente está bien si toda la estructura se almacena en una sola partición. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Confirmamos la configuración con "Finalizar particionado y escribir cambios en el disco".

:::info
Si hay particiones antiguas en tu SSD, confirmamos la sobrescritura con "Sí".
:::

Tu servidor ahora realiza el particionado y prepara la instalación del sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Si quieres incluir otros medios de instalación, por ejemplo para ciertos paquetes, esto podría hacerse ahora. Normalmente, sin embargo, puedes descargar todos los paquetes cómodamente después vía el gestor de paquetes (apt).

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Nuestros servidores dedicados están ubicados en Alemania, por lo que se recomienda elegir el mirror alemán para lograr la mejor velocidad de descarga posible.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Básicamente recomendamos usar el repositorio Debian por defecto.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Si quieres usar un proxy HTTP, puedes introducir los datos. (esto no es obligatorio)

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

El sistema quiere recopilar estadísticas anónimas, esto puede rechazarse o confirmarse.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Ahora selecciona los paquetes que quieres instalar:

* Entorno de escritorio Debian  
Crearía una interfaz gráfica en tu servidor, pero en este ejemplo solo usamos el nivel shell del servidor.

* Servidor SSH  
Es necesario, por ejemplo, para conectarse con PuTTY.

* Utilidades estándar del sistema  
Es necesario para proporcionar varios paquetes básicos.

La selección de los diferentes paquetes se hace con `TAB` y las `flechas`. Los paquetes se seleccionan o deseleccionan con la barra espaciadora.  
Cuando estés satisfecho con tu selección, presiona `TAB` hasta llegar a Continuar y confirma con Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Confirma que este sistema operativo es el único en el servidor actual con `Sí`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Como ubicación de almacenamiento elegimos la ubicación por defecto en nuestro SSD.

:::info
🎉 La instalación de tu sistema Debian ha finalizado.
:::

Abre "Medios Virtuales" en tu iLO y presiona "Expulsar medios" para quitar el archivo ISO del sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

Cuando esto se haga correctamente, seleccionamos Continuar, el servidor realizará un reinicio.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Configuración

### Login SSH

Una vez que el reinicio de tu servidor haya terminado y la instalación haya sido exitosa, se te pedirá iniciar sesión.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Por supuesto, también quieres poder gestionar tu servidor vía SSH, es decir, por ejemplo con PuTTY, así que aún necesitamos habilitar el login para eso:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Abre con nano el archivo de configuración de tu servicio SSH `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Busca `#PermitRootLogin no` y cámbialo a `PermitRootLogin yes`.

Ahora presiona `CTRL + X` y confirma los cambios con `Y`.

Después tienes que reiniciar el servicio SSH escribiendo `service ssh restart`.

Tu login SSH ya está activo y puedes conectarte vía PuTTY, por ejemplo.  
Introduce la dirección IP de tu servidor, que ves en tu panel ZAP, y usa las credenciales definidas anteriormente.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Si tienes más preguntas o problemas, ¡nuestro soporte está encantado de ayudarte!
:::





## Conclusión

¡Felicidades, has instalado con éxito el sistema operativo Debian en tu servidor dedicado! Para más preguntas o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible a diario para asistirte 🙂