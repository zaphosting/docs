---
id: factorio-mods
title: "Factorio: Instalando Mods/DLCs en tu servidor de Factorio"
description: "Descubre cómo mejorar tu experiencia en Factorio activando DLCs y añadiendo mods para un juego personalizado → Aprende más ahora"
sidebar_label: Instalar Mods/DLCs
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Introducción

Factorio tiene soporte nativo para mods que te permite añadir fácilmente una gran variedad de mods a tu juego y servidor, junto con los DLCs comprados. En esta guía, cubriremos el proceso para activar DLCs e instalar mods tanto en tu cliente como en tu servidor de Factorio.

<InlineVoucher />

## Preparación

Puedes acceder al sitio oficial de [mods de Factorio](https://mods.factorio.com/) para explorar mods. En esta web encontrarás una enorme biblioteca de mods gratuitos hechos por la comunidad en una gran variedad de categorías.

:::tip
Asegúrate de que los mods que explores y descargues sean compatibles con la versión de tu servidor de Factorio.
:::

## Activar DLCs

Con la actualización 2.0 de Factorio, se introdujo el primer DLC llamado Space Age. Para esto, se añadió una nueva opción de configuración en el panel de la interfaz web que te permite activar o desactivar el DLC.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Activar DLC Space Age de Factorio" description="¿Te gusta entender mejor cuando ves las cosas en acción? ¡Aquí te tenemos! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible." />

Ve al panel de la interfaz web de tu producto y accede a la sección **Configuración**. Baja hasta encontrar la opción **DLC Space Age**, que debería estar activada por defecto.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Activa o desactiva la función y usa el botón verde **Guardar** al final de la página. ¡Ya has activado con éxito un DLC de Factorio!

## Añadir y subir Mods

Ahora que tienes los mods que quieres descargados, tendrás que subirlos a tu servidor de Factorio vía FTP. Usa nuestra guía de [Acceso FTP](gameserver-ftpaccess.md) para ayudarte a conectar con tu servidor.

:::note
El servidor debe estar detenido antes de añadir o modificar mods, de lo contrario los cambios podrían no guardarse.
:::

Cuando estés listo, navega a la siguiente carpeta y sube tus mods descargados, que deben estar en formato `.zip`.

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Al usar mods, estos deben estar sincronizados entre el cliente y el servidor. Factorio lo hace muy fácil: cuando te conectes al servidor por primera vez tras cambiar mods, el juego te pedirá sincronizarlos automáticamente.
:::

Finalmente, reinicia tu servidor para activar e instalar automáticamente los mods en tu servidor de Factorio. Si tienes errores, como que el servidor se apague solo, revisa la sección **Información->Registro de eventos** en tu interfaz web para ver los errores. Probablemente sea un problema de versiones incompatibles.

## Mods Populares

¿Sigues buscando los mods perfectos para tu servidor? Echa un vistazo a nuestra lista cuidadosamente seleccionada con los mods más populares y recomendados para mejorar tu experiencia y darle a tu servidor ese toque final que merece. Inspírate y encuentra justo lo que tu proyecto necesita.

<SearchableItemList items={items} />

## Conclusión

¡Felicidades, has instalado mods con éxito en tu servidor de Factorio! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂.

<InlineVoucher />