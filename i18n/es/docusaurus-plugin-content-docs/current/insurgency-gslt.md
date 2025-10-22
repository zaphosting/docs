---
id: insurgency-gslt
title: "Insurgency: Crear un GSLT (Steam Game Server Login Token)"
description: "Descubre cómo asegurar y autenticar tu servidor dedicado de juegos con un Steam Game Server Login Token para mejor visibilidad y protección → Aprende más ahora"
sidebar_label: Crear GSLT
services:
  - gameserver-insurgency
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

El **GSLT (Game Server Login Token)** es un token de acceso requerido por Steam/Valve para ejecutar servidores dedicados de ciertos juegos. Está vinculado a una cuenta de Steam y garantiza que el servidor esté correctamente autenticado.

Sin un GSLT válido, los servidores afectados pueden no aparecer en la lista pública de servidores o no podrán usar la protección VAC.

<InlineVoucher />



## Requisitos

Para usar un Game Server Login Token (GSLT), tu cuenta de Steam no debe estar limitada, baneada ni excluida de la comunidad. Debe estar vinculada a un smartphone verificado y debes ser propietario del juego que quieres alojar. Puedes crear hasta 1000 tokens por cuenta.

Ten en cuenta que eres totalmente responsable de tus tokens. Si un token es mal utilizado o baneado, podrías perder el acceso al juego vinculado de forma permanente. Nunca compartas tus tokens; si lo has hecho, elimínalos inmediatamente. Cuando restableces tu contraseña de Steam, todos los tokens se regeneran automáticamente. Los tokens que no se usen por mucho tiempo expirarán, pero pueden ser recreados en cualquier momento.



## Crear GSLT
Para crear un Game Server Login Token, inicia sesión con tu cuenta de Steam y accede a la [Gestión de cuentas de servidores de juegos de Steam](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Una vez dentro, tienes la opción de crear un nuevo token usando el formulario que aparece en la página. En el campo **App ID**, ingresa el ID de la app `17700` que corresponde a **Insurgency**. Asegúrate de ingresar el ID correcto, ya que el token no funcionará con un valor incorrecto.

En el campo **Memo**, puedes añadir una descripción a tu elección. Esto te ayudará a identificar el propósito del token más adelante, como el nombre o función del servidor. Después de ingresar ambos valores, haz clic en **Create** para generar el token. El token se mostrará y podrá usarse en la configuración de lanzamiento de tu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/mc5ZdTGiPWbSRdB/preview)

## Configuración del servidor

Ahora el token de acceso debe añadirse a la configuración de tu servidor. Para hacerlo, abre la interfaz de gestión de tu servidor de juegos y navega a la sección **Settings**. Ingresa el token en el campo etiquetado como **GSL Token** y guarda los cambios.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Operar múltiples servidores de Insurgency
Si operas varios servidores de **Insurgency**, necesitarás un GSLT para cada servidor. <u>**No**</u> es posible operar múltiples servidores de juegos con un solo GSLT.
:::



## Conclusión

El GSLT ha sido creado y aplicado a la configuración de tu servidor. Para cualquier duda o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />