---
id: palworld-server-savegames
title: "Palworld: Gestión de partidas guardadas de Palworld"
description: "Descubre cómo gestionar y hacer copias de seguridad de tus partidas guardadas de Palworld para una continuidad de juego sin interrupciones → Aprende más ahora"
sidebar_label: Gestionar partidas guardadas
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

En esta guía, exploraremos cómo gestionar tus partidas guardadas de Palworld en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas locales y del servidor, así como subirlas a tu servidor.

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Deberás conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->FTP-Browser** en el panel web de tu servidor de juegos. Usa nuestra [guía de acceso vía FTP](gameserver-ftpaccess.md) para obtener ayuda adicional para conectarte a tu servidor.

## Copia de seguridad de la partida guardada

### Partida guardada local

Las partidas guardadas locales son las que creas mientras alojas una partida multijugador localmente en tu dispositivo. Estas se encuentran dentro del AppData de Windows, específicamente en la siguiente ruta:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Puedes acceder fácilmente a esta ruta presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de diálogo Ejecutar: `%localappdata%/Pal/Saved/SaveGames/`. Simplemente presiona **OK** y serás llevado a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

En esta ubicación, verás una carpeta que será tu SteamID. Ábrela y podrás ver todas tus partidas guardadas locales en un solo lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### Accediendo a la partida guardada vía FTP

Hacer una copia de seguridad de tu partida guardada desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, dirígete a la siguiente ruta:
```
../palworld/Pal/Saved/SaveGames/0
```

En esta ubicación, deberías ver una carpeta con una serie de caracteres aleatorios que corresponde a tu partida guardada. Simplemente haz clic derecho sobre la carpeta y usa el botón **Descargar** para guardarla localmente en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu partida guardada (y archivo de configuración) directamente desde nuestro panel web. Simplemente ve al panel web de tu servidor de juegos y accede a la sección **Herramientas->Backups**. Aquí puedes configurar varias opciones para programar copias de seguridad automáticas para tu servidor. Te proporcionamos 10 GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más información sobre copias de seguridad, consulta nuestra guía dedicada [Backups](gameserver-backups.md).

## Subir partida guardada

De manera similar a hacer una copia de seguridad, subir tu partida guardada es sencillo. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP. Cuando estés listo, dirígete a la siguiente ruta:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Simplemente arrastra y suelta cualquiera de tus partidas guardadas en esta carpeta a través de tu cliente FTP y se subirán a tu servidor.

:::tip
Puede ser útil copiar el nombre de la carpeta de la partida guardada que has subido, ya que lo necesitarás si quieres activarla en la siguiente sección.
:::

## Activar partida guardada

Para usar una partida guardada específica, tendrás que editar un archivo de configuración. Ve a la siguiente ruta y busca el archivo llamado **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # Para Windows
../Pal/Saved/Config/LinuxServer/ # Para Linux
```

En esta carpeta, abre el archivo **GameUserSettings.ini** y busca el parámetro `DedicatedServerName`.

En esta línea, edita el contenido reemplazándolo con el nombre de la partida guardada (el nombre de la carpeta) que deseas activar en tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Asegúrate de guardar este archivo y reiniciar tu servidor para que los cambios tengan efecto. ¡Has añadido exitosamente una partida guardada a tu servidor de juegos!

## La partida guardada ha desaparecido

En casos raros, es posible que el servidor cree una nueva partida guardada al iniciarse en lugar de cargar una existente.

Primero, revisa tus archivos guardados a través de tu cliente FTP yendo a la siguiente ruta:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

En esta ubicación deberías ver aún la partida guardada antigua y una nueva que se generó. Para solucionarlo, simplemente edita el archivo de configuración como se describe en la sección Activar partida guardada arriba, con el nombre correcto de la carpeta de la partida guardada.

La partida guardada debería estar activa nuevamente una vez que guardes el archivo y reinicies tu servidor.

:::info
Recomendamos encarecidamente activar las copias de seguridad automáticas como se mencionó en la sección anterior [Copia de seguridad automática](#copia-de-seguridad-automática), ya que Palworld aún está en Early Access y es posible que las partidas guardadas se pierdan o corrompan durante las actualizaciones.
:::

<InlineVoucher />