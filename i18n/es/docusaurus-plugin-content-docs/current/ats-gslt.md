---
id: ats-gslt
title: "American Truck Simulator: Crear un GSLT (Steam Game Server Login Token)"
description: "Descubre cómo asegurar y autenticar tus servidores dedicados con el Game Server Login Token de Steam para un listado público confiable y protección → Más info"
sidebar_label: Crear GSLT
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

El **GSLT (Game Server Login Token)** es un token de acceso requerido por Steam/Valve para ejecutar servidores dedicados de ciertos juegos. Está vinculado a una cuenta de Steam y garantiza que el servidor esté correctamente autenticado.

Sin un GSLT válido, los servidores afectados pueden no aparecer en la lista pública de servidores o no podrán usar la protección VAC.

<InlineVoucher />



## Requisitos

Para usar un Game Server Login Token (GSLT), tu cuenta de Steam no debe estar limitada, baneada ni excluida de la comunidad. Debe estar vinculada a un smartphone verificado y debes ser propietario del juego que quieres alojar. Puedes crear hasta 1000 tokens por cuenta.

Ten en cuenta que eres totalmente responsable de tus tokens. Si un token es mal utilizado o baneado, podrías perder el acceso al juego vinculado de forma permanente. Nunca compartas tus tokens; si lo has hecho, elimínalos inmediatamente. Cuando restableces tu contraseña de Steam, todos los tokens se regeneran automáticamente. Los tokens que no se usen por mucho tiempo expirarán, pero pueden recrearse en cualquier momento.



## Crear GSLT
Para crear un Game Server Login Token, inicia sesión con tu cuenta de Steam y accede a la [Gestión de cuentas de servidores de juegos de Steam](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Una vez dentro, podrás crear un nuevo token usando el formulario que aparece en la página. En el campo **App ID**, introduce el ID `270880` que corresponde a **American Truck Simulator**. Asegúrate de ingresar el ID correcto, ya que el token no funcionará con un valor incorrecto.

En el campo **Memo**, puedes añadir una descripción a tu elección. Esto te ayudará a identificar el propósito del token más adelante, como el nombre o función del servidor. Tras ingresar ambos valores, haz clic en **Create** para generar el token. El token se mostrará y podrá usarse en la configuración de lanzamiento de tu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/LzDP5Gg9ntLJbTt/download)

## Configuración del servidor

Ahora el token de acceso debe añadirse a la configuración de tu servidor. Para ello, abre la interfaz de gestión de tu servidor de juegos y navega a la sección **Settings**. Introduce el token en el campo llamado **GSL Token** y guarda los cambios.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Operar múltiples servidores de American Truck Simulator
Si vas a operar varios servidores de **American Truck Simulator**, necesitarás un GSLT para cada servidor. <u>**No**</u> es posible operar varios servidores de juegos con un solo GSLT.
:::



## Conclusión

El GSLT ha sido creado y aplicado a la configuración de tu servidor. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />