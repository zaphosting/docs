---
id: redm-sql-file-import
title: "RedM: Importación de archivos SQL"
description: "Descubre cómo importar correctamente archivos SQL en tu base de datos de RedM para asegurar la funcionalidad de los recursos y la integración con la base de datos → Aprende más ahora"
sidebar_label: Importación de archivos SQL
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Importando archivos SQL en tu base de datos de RedM

Muchos recursos para RedM requieren una base de datos para funcionar correctamente. Por eso, es importante que importes los archivos SQL que vienen con tus recursos de forma correcta en tu base de datos para asegurar que los recursos puedan crear entradas y funcionar como se espera.

:::info
¡No todos los recursos necesitan una base de datos para funcionar! Cuando descargues un recurso, revisa la descripción o documentación para saber si necesitas importar un archivo SQL.
:::

En muchos casos, uno o más archivos con la extensión **.sql** estarán incluidos en los archivos descargados del recurso. Estos deben importarse en la base de datos.

## Preparando el archivo SQL

En este ejemplo, importaremos el archivo SQL para el framework RP **RedEM**. Debes preparar el archivo SQL para el recurso que quieres importar. Para ello, abre la carpeta del recurso que requiere base de datos y busca un archivo con la extensión **.sql**.

![](https://github.com/zaphosting/docs/assets/42719082/331d2a3d-0d81-4b39-8ad6-d0aba84ff19c)

:::info
Antes de continuar con la importación, abre el archivo .sql con cualquier editor de texto y verifica si están presentes las siguientes líneas:

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Si existen en tu archivo .sql, asegúrate de eliminar las líneas `CREATE` y `USE` de la base de datos y guarda el archivo, de lo contrario no podrás importarlo.

Esto es porque la primera línea indica que se debe crear una nueva base de datos, pero no la necesitas ya que tu servidor de juegos RedM ya tiene una base de datos con otro nombre. La segunda línea indica que se debe usar la base de datos llamada `essentialmode` para importar, pero tampoco la necesitas porque ya existe una base de datos que usarás para la importación.
:::

## Importa el archivo SQL en tu base de datos de RedM

Ahora debes acceder a la sección **Base de datos** en el panel web de tu servidor de juegos.

![](https://github.com/zaphosting/docs/assets/42719082/5f0f81ec-832b-4b9e-a39a-8ec78fd10890)

En la página de la base de datos, tendrás varias funciones para gestionar tu base de datos, incluyendo opciones para hacer copias de seguridad, crear, administrar y más. Nos centraremos en acceder a tu base de datos, pero si quieres más info, echa un vistazo a nuestras otras guías de base de datos: [Acceso externo a base de datos](gameserver-database-external-access.md).

Pulsa el icono azul de redirección que te llevará a la herramienta **phpmyadmin**, donde podrás acceder fácilmente a tu base de datos. Inicia sesión con las credenciales que aparecen en la página de la base de datos si te las piden.

Una vez dentro, selecciona tu base de datos en la lista de la izquierda. El nombre de tu base de datos **siempre** empezará con el prefijo `zap`.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Si es la primera vez que la usas, tu base de datos estará vacía. Ahora sí, vamos a importar el archivo .sql.

Pulsa el botón **Importar** en la barra de navegación superior de phpmyadmin para abrir el menú de importación.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Después, pulsa el botón **Examinar...** que abrirá una ventana para explorar archivos. Selecciona el archivo **.sql** que quieres importar.

![](https://github.com/zaphosting/docs/assets/42719082/02d09225-a68d-498b-a2bd-df57386ce242)

:::note
El tamaño máximo del archivo es 2MB. Si tu archivo SQL es más grande, deberías usar un divisor de SQL para partirlo en partes más pequeñas. Recomendamos la herramienta [Pinetools SQL-Splitter](https://pinetools.com/split-files) que hace esto por ti. Luego podrás importar los archivos SQL normalmente.
:::

Finalmente, pulsa el botón **Importar** al final de la página para iniciar el proceso. Si todo salió bien, verás un mensaje de éxito y se creará una nueva tabla en tu base de datos que podrás ver en la parte izquierda.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

¡Has importado con éxito un archivo SQL en la base de datos de tu servidor de juegos!


## Conclusión

Importar un archivo SQL para tu servidor RedM es necesario para usar muchos recursos sin problemas. Si tienes dudas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />