---
id: source-metamod-plugins
title: Instalación de plugins
description: "Descubre cómo gestionar y solucionar problemas con plugins de Sourcemod para mejorar el rendimiento de tu servidor → Aprende más ahora"
sidebar_label: Plugins
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Instalación de plugins

A continuación te explicamos cómo instalar plugins. Para poder usar plugins necesitas Sourcemod / Metamod. Las instrucciones para instalarlo las encuentras aquí: [Instalación](source-metamod-installation.md)



Para instalar plugins, tienes que subirlos vía FTP. Los archivos del plugin deben subirse al directorio **Plugins** dentro de **../addons/sourcemod/**. Dependiendo de la complejidad del plugin, puede que ya existan archivos de configuración y traducción disponibles. Si es así, estos deben subirse a las carpetas **configs** y **translations**.



## Desactivar / eliminar plugins

En el directorio **Plugins** encontrarás una subcarpeta llamada **disabled**. Ahí puedes poner los plugins que no quieres que se carguen temporalmente. Basta con mover el archivo **.smx** correspondiente.



Si quieres desactivar un plugin de forma permanente, es necesario eliminar los archivos del plugin correspondientes. El plugin se desactivará tras un cambio de mapa o reinicio del servidor.



## Problemas comunes


**¿Por qué no funciona mi plugin instalado?**

Soluciones:

- Asegúrate de que se cumplen todos los requisitos durante la configuración del plugin. Algunos plugins necesitan una base de datos para funcionar correctamente. En ese caso, debes hacer ajustes adicionales en el archivo **database.cfg** que está en el directorio de configuración.
- Los cambios en el motor Source ocurren regularmente. Por eso, un plugin que fue lanzado hace tiempo pero no se ha mantenido puede que ya no sea compatible. En ese caso, la única opción es visitar el foro de Alliedmodders para encontrar una versión corregida no oficial o usar un plugin alternativo.
- Si ninguna de las opciones anteriores funciona, te recomendamos revisar la consola en vivo o los archivos de log. Normalmente ahí se encuentra la causa del problema.

<InlineVoucher />