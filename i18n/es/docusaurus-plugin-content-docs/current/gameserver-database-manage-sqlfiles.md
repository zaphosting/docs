---
id: gameserver-database-manage-sqlfiles
title: "Servidor de juegos: Importar o Exportar un archivo SQL"
description: "Descubre cómo gestionar la base de datos de tu servidor de juegos importando y exportando archivos SQL de forma eficiente usando phpMyAdmin → Aprende más ahora"
sidebar_label: Importar/Exportar Archivos SQL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una gran variedad de juegos para tu servidor de juegos utilizan bases de datos para almacenar datos a largo plazo y funcionar correctamente. Algunos juegos, recursos o mods pueden proporcionarte un archivo `.sql` que se usa para importar las tablas y datos adecuados en tu propia base de datos. Exportar tu base de datos también puede ser útil para transferir tus datos entre sistemas o simplemente para hacer una copia de seguridad manualmente. En esta guía, exploraremos el proceso de importar y exportar archivos SQL hacia o desde la base de datos de tu servidor de juegos mediante la interfaz de phpMyAdmin.

<InlineVoucher />

## Preparación

Para comenzar, debes acceder a la base de datos MySQL de tu servidor de juegos, lo cual se puede hacer directamente a través de la interfaz web. También debes tener listo el/los archivo(s) `.sql` que necesitas importar a tu base de datos.

:::tip
Algunos archivos SQL pueden obligarte a usar un nombre de base de datos específico, lo que puede entrar en conflicto con el nombre de base de datos ZAP ID que se te proporciona automáticamente y causar errores.

Puedes identificar este tipo de archivo buscando una sentencia `USE xxx` o `CREATE DATABASE` al abrir el archivo en un editor de texto. Si es así, deberías eliminar ambas sentencias y guardar el archivo antes de importarlo.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Dirígete a la sección **Herramientas->Bases de datos** y usa el botón azul de enlace para abrir la interfaz de phpMyAdmin. Usa las credenciales que aparecen en la página de tu interfaz web para iniciar sesión.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

Para aprender más sobre phpMyAdmin, te recomendamos leer nuestra [guía de Acceso a Bases de Datos](gameserver-databases-pma.md), que cubre la interfaz con más detalle.

## Importar Archivo SQL

Ahora que has iniciado sesión en la interfaz de phpMyAdmin, selecciona la base de datos principal, que debería ser tu ZAP ID. En la barra de navegación superior, encuentra la sección **Importar**.

En esta página, usa el botón **Examinar...** para abrir una ventana del explorador de archivos. Desde ahí, busca el archivo SQL que deseas importar a tu base de datos y ábrelo.

:::note
El tamaño máximo para tu archivo SQL es de 2MB. Si tu archivo es más grande, te recomendamos usar un divisor de SQL como el [Pinetools SQL-Splitter](https://pinetools.com/split-files) que lo dividirá en archivos más pequeños. Luego podrás importarlos por separado.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

También puedes ajustar algunas configuraciones adicionales si quieres. Para la mayoría de usuarios, los valores por defecto son suficientes, así que simplemente baja y usa el botón **Importar**.

El archivo SQL debería importarse correctamente y deberías ver reflejados los cambios en la base de datos, como nuevas tablas, datos y más.

## Exportar Archivo SQL

Exportar tu base de datos es otra función esencial que puede ser útil para transferir bases de datos fácilmente o para hacer copias de seguridad. Una vez más, selecciona la base de datos principal que debería ser tu ZAP ID y encuentra la sección **Exportar** en la barra de navegación superior.

Por defecto, está seleccionado el método de exportación **Rápido**, que exportará automáticamente todas tus tablas y datos. Si quieres personalizar qué tablas y datos se exportan específicamente, selecciona la opción **Personalizado** y ajusta los parámetros según tus preferencias. Cuando estés listo, simplemente usa el botón **Exportar** para descargar un archivo SQL localmente en tu sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## Conclusión

Has exportado con éxito tu base de datos en un archivo SQL, lo que te permite importarla fácilmente en el futuro. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />