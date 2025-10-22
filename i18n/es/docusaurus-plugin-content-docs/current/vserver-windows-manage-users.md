---
id: vserver-windows-manage-users
title: "VPS: Gestiona Usuarios en Windows Server"
description: "Descubre cómo gestionar múltiples cuentas de usuario en Windows Server para un acceso remoto seguro y simultáneo con escritorios personalizados → Aprende más ahora"
sidebar_label: Añadir y Gestionar Usuarios
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El sistema operativo Windows incluye una gestión de usuarios integrada que te permite manejar fácilmente usuarios adicionales. Algunos beneficios de usar usuarios individuales incluyen acceso simultáneo (hasta 2) por escritorio remoto con credenciales propias, escritorios y archivos individuales, además de un sistema de permisos sencillo. En esta guía, cubriremos el proceso para gestionar usuarios en tu servidor Windows.

<InlineVoucher />

## Preparación

Comienza conectándote a tu servidor Windows vía RDP. Si necesitas ayuda para hacerlo, consulta nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md).

:::important Privilegios Administrativos
Asegúrate de usar el usuario **Administrador** o cualquier usuario con privilegios administrativos para iniciar sesión en tu servidor Windows, de lo contrario no podrás gestionar usuarios.
:::

Cada usuario que crees en tu servidor Windows podrá usar sus propias credenciales para conectarse al servidor mediante Escritorio Remoto. De igual forma, cada usuario tendrá su propio escritorio, archivos y programas independientes de los demás, y solo podrán ser vistos por usuarios con privilegios administrativos. Los programas instalados para todos los usuarios estarán accesibles globalmente.

Con la licencia estándar de Windows Server, **2** cuentas pueden iniciar sesión y usar el servidor simultáneamente. Si se supera este límite y otro usuario se conecta, el usuario que se conectó primero será desconectado para dar paso al nuevo usuario. Por lo demás, no hay límite en la cantidad de cuentas de usuario que puedes crear.

## Accediendo a la Gestión de Usuarios

La gestión de cuentas de usuario se realiza a través de la configuración en el Panel de Control. Comienza abriendo el menú de inicio de Windows en tu servidor y selecciona **Panel de Control**. Luego elige la opción **Cuentas de usuario**, que te llevará a un submenú.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Una vez más, selecciona la opción **Cuentas de usuario** en el menú para acceder a un área de resumen.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

En la página de resumen, selecciona la opción **Administrar otra cuenta** para acceder a la sección **Administrar cuentas**, usada principalmente para gestionar usuarios.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Ahora estás listo para gestionar los usuarios en tu servidor Windows. Continúa con una de las siguientes secciones según la acción que quieras realizar.

## Crear Nuevo Usuario

Para comenzar el proceso de creación de usuario, selecciona la opción **Agregar una cuenta de usuario** que encontrarás en la sección **Administrar cuentas**.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

Esto abrirá un cuadro de diálogo en pantalla donde deberás completar algunos datos para la cuenta, incluyendo nombre de usuario, contraseña y una pista para la contraseña. Asegúrate de que tu contraseña sea fuerte para evitar errores de validación.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Cuando estés listo, simplemente selecciona el botón siguiente y tu nuevo usuario será creado.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Por último, tendrás que añadir el nuevo usuario a la lista de conexiones de escritorio remoto para asegurarte de que el servidor acepte conexiones RDP desde él. Ve al **Panel de Control** y accede a **Sistema y seguridad**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Desde ahí, localiza **Permitir acceso remoto** y selecciónalo para abrir un nuevo menú.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

En el menú, presiona **Seleccionar usuarios...** en la parte inferior, lo que mostrará una nueva ventana con los usuarios actuales que tienen acceso por escritorio remoto.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

En esta ventana, selecciona **Agregar...** para abrir un selector de usuarios y elige **Avanzado...**.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

Esto expandirá la ventana para facilitar la búsqueda de tu usuario. Usa el botón **Buscar ahora** para obtener una lista de usuarios y encuentra tu nuevo usuario, en este ejemplo es `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Selecciona el usuario y usa los botones **Aceptar** para cerrar todas las ventanas y confirmar los cambios.

Has creado exitosamente un nuevo usuario en tu servidor Windows con acceso a escritorio remoto. Deberías probar acceder al servidor vía RDP usando las credenciales del nuevo usuario para asegurarte de que todo funciona correctamente.

## Gestionar Usuarios

Puedes gestionar fácilmente todos los usuarios desde la sección **Administrar cuentas**. Simplemente selecciona el usuario que quieras gestionar.

:::important Privilegios Administrativos
Para gestionar usuarios, debes usar la cuenta principal **Administrador** o un usuario con tipo de cuenta administrador que tenga todos los privilegios necesarios para ello.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

En esta página podrás usar varias funciones para gestionar al usuario, incluyendo cambiar el nombre de usuario, contraseña, tipo de cuenta y también eliminar al usuario.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />