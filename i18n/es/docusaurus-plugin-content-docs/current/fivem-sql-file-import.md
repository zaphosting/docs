---
id: fivem-sql-file-import
title: "FiveM: Importar archivo SQL"
description: "Entiende cómo importar archivos SQL correctamente para que los recursos de FiveM funcionen bien con tu base de datos → Aprende más ahora"
sidebar_label: Importar archivo SQL
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Muchos recursos para FiveM requieren una base de datos para funcionar correctamente. Por eso, es súper importante que importes los archivos SQL que vienen con tus recursos de forma correcta en tu base de datos, para que los recursos puedan crear entradas y funcionar como se espera.

:::info
¡No todos los recursos necesitan base de datos para funcionar! Cuando descargues un recurso, revisa la descripción o documentación para saber si necesitas importar un archivo SQL.
:::

En muchos casos, uno o más archivos con la extensión **.sql** estarán incluidos en los archivos descargados del recurso. Estos deben importarse en la base de datos.

<InlineVoucher />

## Preparando el archivo SQL

En este ejemplo, vamos a importar el archivo SQL para **ESX**. Debes preparar el archivo SQL del recurso que quieras importar. Para eso, abre la carpeta del recurso que requiere base de datos y busca un archivo con extensión **.sql**.

![](https://github.com/zaphosting/docs/assets/42719082/3d2b4cd2-d98e-4b25-b606-9f451164edc9)

:::info
Antes de seguir con la importación, abre el archivo .sql con cualquier editor de texto y verifica si están estas líneas:

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Si están, asegúrate de eliminar las líneas `CREATE` y `USE` de la base de datos y guarda el archivo, porque si no, no podrás importar el archivo SQL.

Esto es porque la primera línea indica crear una base de datos nueva, pero no la necesitas ya que tu servidor de juegos RedM ya tiene una base de datos con otro nombre. La segunda línea indica usar la base de datos llamada `essentialmode` para importar, pero tampoco la necesitas porque ya tienes una base de datos existente para importar.
:::

## Importa el archivo SQL en tu base de datos

Ahora debes acceder a la sección **Base de datos** en el panel web de tu servidor de juegos.

![](https://github.com/zaphosting/docs/assets/42719082/83ba522a-929e-4a90-8c9e-0badc2d779d4)

En la página de base de datos, tendrás varias funciones para gestionar tu base de datos, como hacer copias de seguridad, crear, administrar y más. Aquí nos enfocaremos en acceder a tu base de datos, pero si quieres más info, checa nuestras otras guías de base de datos: [Acceso externo a base de datos](gameserver-database-external-access.md).

Presiona el ícono azul de redirección que te llevará a la herramienta **phpmyadmin**, donde puedes acceder fácilmente a tu base de datos. Inicia sesión con las credenciales que aparecen en la página de base de datos si te las pide.

Una vez dentro, selecciona tu base de datos en la lista a la izquierda. El nombre de tu base de datos **siempre** empieza con `zap` como prefijo.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Si es la primera vez que la usas, tu base de datos estará vacía. Ahora sí, vamos a importar el archivo .sql.

Haz clic en el botón **Importar** en la barra superior de phpmyadmin para abrir el menú de importación.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Luego, presiona el botón **Examinar...** para abrir el explorador de archivos. Selecciona el archivo **.sql** que quieres importar.

![](https://github.com/zaphosting/docs/assets/42719082/83ba22fb-fc6c-4dbb-9c47-ad42d3a9fa66)

:::note
El tamaño máximo del archivo es 2MB. Si tu archivo SQL es más grande, usa un divisor de SQL para partirlo en partes más pequeñas. Recomendamos la herramienta [Pinetools SQL-Splitter](https://pinetools.com/split-files) que hace esto fácil. Luego puedes importar los archivos SQL normalmente.
:::

Finalmente, presiona el botón **Importar** al final de la página para iniciar el proceso. Si todo salió bien, verás un mensaje de éxito y se creará una nueva tabla en tu base de datos que podrás ver en la barra lateral izquierda.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

## Conclusión

Importar un archivo SQL para tu servidor de FiveM es clave para usar muchos recursos sin problemas. Si tienes dudas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />