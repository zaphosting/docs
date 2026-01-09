---
id: dedicated-windows-fs-25
title: "Servidor Dedicado: Configuración del Servidor Dedicado de Farming Simulator 2025 en Windows"
description: "Descubre cómo configurar un servidor dedicado de Farming Simulator 2025 en Windows para alojar partidas multijugador sin problemas → Aprende más ahora"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un servidor dedicado Windows y quieres instalar el servicio de servidor dedicado de Farming Simulator 2025 en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.



## Preparación

Para alojar un servidor dedicado de Farming Simulator 2025, debes tener un servidor Windows listo junto con una licencia válida del juego para ejecutar el servidor dedicado.

Antes de continuar con la instalación, conéctate a tu servidor Windows a través de Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

### Licencia del Juego

Para alojar el servidor dedicado en tu servidor Windows, debes poseer una copia digital de Farming Simulator 2025 directamente desde la página oficial de [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

No puedes usar la misma clave de licencia con la que juegas, por lo que necesitarás comprar una **segunda** copia del juego solo para tu servidor dedicado.

:::info Licencia de Juego Steam
Es posible usar una licencia de juego Steam para alojar tu servidor dedicado, pero esto puede ser muy incómodo ya que te obligaría a tener el cliente Steam ejecutándose en segundo plano todo el tiempo. Además, no podrías jugar a ningún otro juego en otro sistema usando la misma cuenta Steam debido a las limitaciones de Steam. Por eso, te recomendamos comprar una clave independiente directamente en la web para evitar estos problemas.

Sin embargo, si planeas usar una licencia **Steam**, deberías instalar los archivos a través de Steam como de costumbre y saltarte a la sección **Configuración del Servidor Dedicado** de esta guía.
:::

Una vez que hayas comprado la versión digital en la web, recibirás un código de producto por correo electrónico en la dirección que proporcionaste al hacer la compra. Necesitarás esta clave de licencia en la siguiente sección para descargar el juego y también para validar tu servidor dedicado durante la configuración.

## Instalación

### Instalando Archivos

Ahora que tienes tu clave de licencia y el servidor Windows listo, ve a la página de [Descargas de Giants Software](https://eshop.giants-software.com/downloads.php) desde tu servidor Windows e ingresa la clave de licencia que recibiste por correo.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Si todo es correcto, accederás a una página con varios métodos de descarga del juego. Busca la opción principal para Windows **Farming Simulator 25 (Windows 10/11)** y selecciona descargar.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

La descarga debería comenzar y puede tardar un poco ya que se descarga el juego completo, así que ten paciencia.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Cuando termine, ve a tus descargas y localiza el archivo **.img** que descargaste. Ábrelo con doble clic para montar la unidad en el Explorador de Archivos.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Ahora ejecuta el archivo **Setup.exe** y acepta el aviso de UAC. Sigue el menú de instalación para configurar el juego, lo que incluye aceptar los términos y condiciones y ajustar la ruta de instalación si quieres.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

De nuevo, sé paciente y espera a que termine todo el proceso de instalación. Cuando esté listo, simplemente cierra el menú de instalación. Recomendamos hacer clic derecho en la unidad **DVD montada** en el Explorador de Archivos y seleccionar **Expulsar** para quitarla, ya que no se necesita más. En esta etapa, la instalación base del juego está completa.

### Activando el Juego

Con el juego instalado, necesitas ejecutarlo al menos una vez para activarlo. Simplemente inicia el juego desde el acceso directo en el escritorio o desde la barra de búsqueda de Windows.

Al iniciar, verás un aviso para configurar la clave de licencia por primera vez. Introduce la clave que recibiste por correo y confirma. Si todo va bien, el juego se activará y comenzará a cargar.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Ahora puedes cerrar el juego ya que no es necesario y continuar con la siguiente sección para configurar el servidor dedicado y la interfaz web que viene con él. Si recibes un error de **Controlador de Video**, simplemente selecciona **no** para cancelar el proceso de inicio inmediatamente.

## Configuración del Servidor Dedicado

Con el juego listo, debes ajustar algunas opciones de configuración para tu servidor dedicado. Empieza accediendo a la carpeta de instalación del juego. Por defecto, debería estar en `C:\Program Files (x86)\Farming Simulator 2025`, pero puede variar si cambiaste la ruta durante la instalación.

Una vez ahí, busca y abre el archivo **dedicatedServer.xml** con un editor de texto.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Recomendamos modificar los campos `username` y `passphrase` que están al principio del archivo con tus propios datos. Estas serán las credenciales para acceder al panel de control web de tu servidor. Guarda el archivo y ciérralo cuando termines.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Accediendo a la Interfaz Web

Con las credenciales configuradas, puedes iniciar el servidor ejecutando el archivo **dedicatedServer.exe** que está en la misma carpeta raíz del juego.

:::info Privilegios Administrativos
Asegúrate de ejecutar el archivo del servidor dedicado con privilegios de administrador, de lo contrario probablemente tendrás problemas al intentar iniciar el servidor de juegos. Puedes hacerlo haciendo clic derecho en el archivo y seleccionando **Ejecutar como administrador**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Esto abrirá una ventana CMD nueva que generará automáticamente los certificados necesarios, instalará actualizaciones y herramientas necesarias. Esto puede tardar un poco en el primer inicio, así que paciencia.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Cuando esté listo, podrás acceder al panel web entrando a `http://[tu_dirección_ip]:8080` en un navegador. Usa las credenciales que guardaste para iniciar sesión.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

En este panel web podrás hacer un montón de ajustes en tu servidor, como cambiar configuraciones, gestionar partidas guardadas, mods y mucho más.

### Redirigiendo Puertos en tu servidor

Para que tu servidor sea accesible desde internet, debes configurar las reglas de redirección de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de PowerShell, que es más fácil, o desde la configuración del firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como administrador** para que tengas los permisos necesarios y todo funcione bien.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, si no las configuraciones podrían no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en la consola de PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor de Farming Simulator 2025 sea accesible desde internet.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración de Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor FS2025. Para ello, crea reglas entrantes y salientes para los siguientes protocolos y puertos:
- TCP entrante y saliente: 8080, 10823
- UDP entrante y saliente: 8080, 10823

Si necesitas más ayuda, usa nuestra [Guía de Redirección de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás acceder al panel web desde internet y conectarte al servidor en el juego.

### Iniciando el Servidor

Después de ajustar la configuración y configurar las reglas del firewall, ve a la página principal del panel web y selecciona el botón **Start** para iniciar el proceso de arranque.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Si todo va bien, el servidor comenzará a arrancar y podrás confirmarlo en la interfaz actualizada y en una nueva ventana CMD que ejecutará el servidor de juegos. Si tienes errores al iniciar, asegúrate de ejecutar la interfaz como Administrador.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor dedicado de Farming Simulator 2025 en tu servidor dedicado. Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.