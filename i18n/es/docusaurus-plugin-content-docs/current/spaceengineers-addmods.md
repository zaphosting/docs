---
id: spaceengineers-addmods
title: "Space Engineers: Instalación de mods"
description: "Descubre cómo configurar y añadir mods de forma segura en tu servidor de Space Engineers para una experiencia de juego personalizada → Aprende más ahora"
sidebar_label: Instalar mods
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Preparación

Para poder añadir mods en un servidor, es necesario editar un archivo de configuración. Para evitar problemas al aplicar los cambios, ¡asegúrate de que tu servidor esté detenido antes de empezar!

Para que se procese la configuración correcta más adelante, primero hay que saber el nombre del savegame. Si no se ha cambiado esta configuración, el valor por defecto es "zap001". Pero para estar seguros, compruébalo como se explica a continuación:

Para acceder a la configuración de tu servidor, abre el apartado "Ajustes" en la lista de la izquierda bajo la pestaña "Ajustes".

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

El nombre del savegame se puede ver o modificar en el primer campo de esta página. Recuerda este nombre para poder editar el archivo de configuración correcto más adelante.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

También es imprescindible tener instalado **Notepad++** para seguir esta guía y realizar los pasos exactamente igual.

## Elegir Mods

Hay un montón de mods en el workshop de Space Engineers. Puedes encontrar el workshop [aquí](https://steamcommunity.com/workshop/about/?appid=244850).

Cuando encuentres un mod interesante, haz clic en él para ver todos los detalles. Si te gusta, guarda el ID del mod. El ID suele estar en negrita en un lateral o en la parte superior de la barra de URL:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Abrir archivos de configuración

Hay dos formas de editar los archivos de un servidor. Una es a través del [acceso FTP](gameserver-ftpaccess.md) y la otra es mediante el editor de configuración en la interfaz web.

En este caso, editaremos la configuración manualmente vía FTP para evitar errores de sintaxis. Cómo conectar vía FTP está explicado detalladamente en la guía enlazada arriba.

Una vez establecida la conexión FTP, navega hasta el siguiente directorio:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

Esta carpeta contiene todos los savegames que se han creado en el servidor. Para modificar la configuración del savegame correspondiente, abre la carpeta con el nombre del savegame. En nuestro ejemplo, sería la carpeta "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

Ahora hay que editar el archivo sandbox en esta carpeta. Justo este archivo es el que tienes que abrir, como muestra la captura:

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Añadir Mods

Ya existe una sección de mods en la configuración, que está al final del archivo. Selecciona esa parte con el ratón y bórrala. Luego añade el siguiente contenido:

`<Mods></Mods>`

Cuando pegues este contenido, coloca el cursor entre "&gt;" y "&lt;" y pulsa ENTER una vez. Esto aplicará automáticamente la sintaxis correcta y podrás continuar.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

En el siguiente paso añadimos el primer mod. Para ello usamos un "ModItem", que representa un mod. Copia el siguiente contenido y pégalo en la configuración como se muestra en el GIF:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Aquí 12345 debe ser reemplazado por el ID del mod que hayas elegido.
:::

Como se ve en el GIF, solo tienes que repetir estos pasos para añadir más mods. Cuando hayas añadido todos los mods que quieras, guarda la configuración con **CTRL+S** y cierra el archivo. Luego puedes arrancar el servidor normalmente y los mods se instalarán automáticamente.

<InlineVoucher />