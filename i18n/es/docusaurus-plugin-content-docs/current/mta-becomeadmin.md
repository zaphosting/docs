---
id: mta-becomeadmin
title: "Multi Theft Auto: Cómo ser admin en servidores MTA"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestionar el juego de forma eficiente → Aprende más ahora"
sidebar_label: Ser admin
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como admin, puedes usar todas las opciones y funciones disponibles que el juego ofrece directamente dentro del juego. A continuación te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

### Preparación

Primero tienes que crear una cuenta de usuario a la que luego se le asignarán los derechos de admin. Para ello, ejecuta el siguiente comando en la Consola en Vivo:

```
addaccount [options] <PASSWORD>
```

La Consola en Vivo la encontrarás en el panel del servidor de juegos dentro de la interfaz mientras el servidor está activo. Se ve así:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Configuración

Una vez creada la cuenta, debes añadirla al Grupo Admin en la configuración **acl.xml**. Para esto, conéctate al servidor vía FTP y abre el archivo. El archivo está ubicado en **gXXXX/gtamta/mods/deathmatch/**. Si aún no sabes qué es un cliente FTP ni cómo usarlo, échale un ojo a esta guía: [Acceso a archivos FTP](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

Ahí tienes que añadir un objeto usuario para asignar el usuario al Grupo Admin:

```
<object name="user.BENUTZERNAME"></object>
```

En vez de BENUTZERNAME, escribe tu propio nombre de usuario. El resultado debería quedar así:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### Iniciar sesión como admin

Una vez terminada la configuración del archivo **acl.xml**, inicia tu juego/servidor y conéctate a tu servidor. Luego puedes iniciar sesión con este comando:

```
login USERNAME PASSWORD
```

## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂


<InlineVoucher />