---
id: voiceserver-configuration
title: "Servidor de voz: Configuración"
description: "Descubre cómo personalizar la configuración de tu servidor Teamspeak para una experiencia única y una gestión de usuarios optimizada → Aprende más ahora"
sidebar_label: Configuración del servidor
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El servidor Teamspeak se puede configurar de forma individual. A continuación te explicamos cómo puedes configurar tu servidor. Te mostraremos cómo personalizar ajustes generales como el nombre del servidor, icono, banner, permisos de usuario, permisos de canales y grupos de servidor.

<InlineVoucher />

## General

**Interfaz web**

Si quieres hacer la configuración general de tu servidor a través de la interfaz web, encontrarás las opciones en la Administración del Servidor Teamspeak bajo Ajustes. La página de configuración se verá así:

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Cliente Teamspeak**

Si prefieres hacer la configuración general de tu servidor directamente desde el cliente Teamspeak, puedes encontrar las opciones haciendo clic derecho en el canal superior **TeamSpeak ]I[ Server** y luego seleccionando **Editar Servidor Virtual**.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)


Como la configuración en la interfaz web está pensada para ser lo más clara posible y no todo se puede ajustar ahí, esta guía se centra en la configuración del servidor Teamspeak a través del cliente Teamspeak.



### Nombre

En el campo **Nombre del Servidor** puedes definir el nombre de tu servidor Teamspeak. Este nombre se mostrará en la lista de servidores, en la web y en cualquier otro lugar.



### Banner

Si has contratado la opción de banner propio, puedes añadir tu propio banner en el campo **URL del Banner Gfx**. Es importante que proporciones el enlace directo a la imagen, de lo contrario no se reconocerá. En el campo **URL** puedes definir a dónde debe redirigir el banner cuando alguien haga clic en él.

:::info
Si no se ha contratado un banner propio, el banner se reemplazará automáticamente por el banner predeterminado de ZAP.
:::



### Slots (slots reservados)

Los slots son establecidos por nosotros y no se pueden cambiar. Sin embargo, tienes la posibilidad de configurar slots reservados. Esto significa que se reservan para que, en caso de que el servidor Teamspeak esté lleno, los usuarios con los permisos adecuados puedan seguir conectándose.



### Mensaje de bienvenida

Aquí puedes añadir un mensaje de bienvenida personalizado. Este mensaje se mostrará cuando te conectes. Por ejemplo, puede verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Nivel de seguridad

El nivel de seguridad requerido determina cuánto tiempo necesitan los usuarios para aumentar el nivel de seguridad de su identidad hasta que esta se considere suficientemente segura. Básicamente, esto reduce el potencial de spam y abuso. Cuanto más alto sea el nivel de seguridad, más tiempo tomará. Aquí tienes un resumen de la duración:

- Nivel 0-23 - generado en segundos
- Nivel 23-29 - generado en minutos
- Nivel 29-34 - generado en horas
- Nivel 35-39 - generado en días
- Nivel 40-43 - generado en meses
- Nivel 44+ - generado en años



### Gestión de usuarios (kick, ban, lista de baneos, lista de quejas)

Puedes expulsar o banear a un usuario haciendo clic derecho sobre él. En caso de ban, la identidad y la dirección IP se almacenan en la lista de baneos. Puedes encontrar esta lista en la **barra de navegación -> extras**. Ahí puedes eliminar baneos existentes.

También encontrarás la lista de quejas. Esta es una función de Teamspeak que permite a los usuarios quejarse de otros usuarios, del servidor, etc., en caso de que no haya un admin en el servidor Teamspeak.



## Personaliza

Puedes crear más canales y grupos de servidor en tu servidor Teamspeak para personalizarlo aún más. A continuación te mostramos cómo hacerlo exactamente.


### Canal

Para crear más canales, tienes que hacer **clic derecho** debajo de los canales existentes y luego hacer clic en **Crear canal**. Se abrirá una ventana emergente donde podrás configurar el canal con las siguientes opciones: Nombre del canal, Contraseña, Icono, Descripción, Tipo de canal y más.



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Grupos de servidor

Para crear grupos de servidor adicionales, tienes que hacer clic en **permisos** en la **barra de navegación** y luego ir a **grupos de servidor**. Ahí encontrarás un resumen de los grupos de servidor existentes, sus permisos y los usuarios asignados. En la lista de grupos de servidor puedes hacer clic en el **símbolo de más** en la parte inferior para crear un nuevo grupo.



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Permisos

Hasta ahora debería estar claro cómo ajustar la configuración general del servidor Teamspeak y cómo personalizar tu servidor creando canales y grupos de servidor adicionales. A continuación, veremos cómo se pueden ajustar los permisos.



### Permisos: Usuario

Los permisos de los usuarios dependen de los grupos de servidor asignados. Por defecto, a un usuario se le asigna el grupo **Normal**. Si quieres añadir más permisos al usuario, puedes hacerlo haciendo clic derecho sobre el usuario, luego en Grupos de Servidor y asignando el grupo deseado.

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Permisos: Canal

Se pueden definir permisos para cada canal. Por ejemplo, puedes definir qué usuarios pueden **entrar, suscribirse, describir, ver, modificar, eliminar** el canal y **acceder al explorador de archivos del canal**.


![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



El valor de cada campo depende del grupo de servidor. Por ejemplo, si creas un grupo de servidor adicional llamado **Miembro** y solo esos usuarios deben tener acceso al canal, entonces el valor debe coincidir con el del grupo de servidor. Si el grupo tiene un valor de permiso de 50, entonces se debe poner **50** en los campos individuales.



### Permisos: Grupos de servidor

Para los permisos de grupos de servidor, hay varias categorías que se pueden personalizar. Esto incluye lo siguiente:

- Opciones generales
- Gestión de grupos
- Añadir, eliminar usuarios, gestionar claves de permiso
- Gestión de usuarios (mover, expulsar, banear)
- Gestión de canales
- Básicos


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



Puedes cambiar estos permisos a tu gusto. Si quieres hacer cambios más avanzados en los permisos, puedes hacerlo yendo a las opciones de tu cliente Teamspeak, luego a Aplicación y activando el **Sistema avanzado de permisos**.


<InlineVoucher />