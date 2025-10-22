---
id: minecraft-worlds
title: "Minecraft: Gestiona tus mundos guardados"
description: "Descubre cómo gestionar, convertir y hacer copias de seguridad de tus mundos de Minecraft entre plataformas para mantener tu progreso seguro y sin interrupciones → Aprende más ahora"
sidebar_label: Gestionar Mundos
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esencia, Minecraft guarda las partidas como **mundos**, siendo cada mundo una partida independiente. En esta guía, exploraremos cómo gestionar los mundos en tu servidor de juegos Minecraft, incluyendo la conversión de mundos entre plataformas, regenerar mundos, hacer copias de seguridad de tus mundos locales y del servidor, y subir mundos a tu servidor.

<InlineVoucher />

## Preparación

Para gestionar tus mundos, primero tendrás que acceder a tu servidor de juegos Minecraft vía FTP. Si no estás familiarizado con el uso de FTP, consulta nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md).

## Comparando diferencias entre plataformas

Una diferencia clave entre un servidor vanilla y las plataformas de servidor es que los servidores vanilla combinan el mundo normal, el Nether y el End en una sola partida guardada.

En cambio, plataformas alternativas como Spigot, PaperMC y Bukkit separan cada dimensión en partidas guardadas individuales. Puedes ver en la tabla a continuación cómo se trata un mundo de ejemplo llamado **zapdocs** en ambos tipos de plataformas.

| Dimensión del Mundo | Servidor Vanilla (Combinado) | Plataformas de Servidor (Individual) |
| ------------------- | ----------------------------- | ------------------------------------ |
| Normal/Overworld    | zapdocs                       | zapdocs                              |
| Nether              | zapdocs                       | zapdocs_nether                       |
| The End             | zapdocs                       | zapdocs_the_end                      |

## Convertir Mundos

Al cambiar entre un servidor vanilla y una plataforma de servidor, puede que quieras conservar tu mundo guardado. Debido a las diferencias mencionadas, tendrás que ajustar la estructura de archivos para extraer o fusionar los mundos individuales del Nether y el End según la acción.

:::info
Esto solo es necesario si cambias entre vanilla y plataformas de servidor y quieres conservar y mover un mundo existente. Si solo cambias entre vanilla o entre plataformas de servidor, no necesitas convertir nada.
:::

:::note
Asegúrate de apagar el servidor antes de continuar para evitar conflictos o pérdidas de datos.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Convertir desde Vanilla" default>

Para convertir un mundo de vanilla a formato de plataforma de servidor, tendrás que extraer ciertas carpetas para crear mundos individuales para cada dimensión. Se espera que muevas todos los mundos a un nuevo servidor que esté ejecutando una plataforma como Spigot, PaperMC o Bukkit.

Accede a tu servidor vía FTP y sigue la ruta `../vanilla/[tu_mundo]` para acceder al mundo que quieres convertir. Localiza las carpetas **DIM1** y **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

La carpeta **DIM1** contiene los datos del End, mientras que **DIM-1** contiene los datos del Nether.

Tendrás que mover cada carpeta a su propia carpeta de mundo nueva, así:
- Para el Nether, crea una carpeta nueva llamada `[tu_mundo]_nether` en la raíz. Mueve la carpeta **DIM-1** a esta nueva carpeta de mundo separada.
- De forma similar para el End, crea una carpeta nueva llamada `[tu_mundo]_the_end` en la raíz. Mueve la carpeta **DIM1** a esta nueva carpeta de mundo separada.

:::info
Puede que tengas que sobrescribir las carpetas `DIM`, pero es normal porque las plataformas de servidor generan todas las dimensiones por defecto.
:::

En este ejemplo, el mundo se llama `world`, por lo que se crearon las carpetas `world_nether` y `world_the_end` en la raíz, moviendo las carpetas `DIM` correspondientes.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

Los tres mundos individuales ya están listos para usarse en plataformas de servidor.

</TabItem>

<TabItem value="converting-to-vanilla" label="Convertir a Vanilla">

Para convertir un mundo de una plataforma de servidor a formato vanilla, el proceso es prácticamente igual pero al revés. Tendrás que extraer datos de los mundos individuales del Nether y el End para fusionarlos en un solo mundo. Se espera que muevas el mundo combinado a un nuevo servidor vanilla.

Accede a tu servidor vía FTP y entra en la raíz. Localiza las tres carpetas individuales de mundo que deberían ser `[tu_mundo]`, `[tu_mundo]_nether` y `[tu_mundo]_the_end`, reemplazando `[tu_mundo]` por el nombre del mundo.

Abre la carpeta `[tu_mundo]_nether` y mueve la carpeta `DIM-1` a la carpeta principal `[tu_mundo]`. En este ejemplo, como antes, el mundo se llama `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Ahora repite lo mismo con la carpeta `[tu_mundo]_the_end` y mueve `DIM1` a la carpeta principal `[tu_mundo]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

El mundo combinado ya está listo para usarse en un servidor vanilla.

</TabItem>
</Tabs>

## Generar Mundos

Generar mundos es sencillo y puedes elegir entre crear un mundo completamente nuevo o regenerar el mundo actual desde cero. Minecraft usa un sistema de **semillas** donde cada mundo tiene una semilla única, lo que significa que solo con la semilla puedes regenerar una copia exacta del mundo.

<Tabs>
<TabItem value="generating-new" label="Generar mundo nuevo" default>

Para generar un mundo nuevo, simplemente apaga el servidor y conéctate vía FTP. También abre el archivo de configuración `server.properties`, ya sea desde la sección **Configs** en el panel web de tu servidor o vía FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Para generar un mundo nuevo, puedes:
- A través de FTP, busca el mundo que tenga el mismo nombre que el parámetro `level-name` en el archivo de configuración y bórralo.
- Editar el parámetro `level-name` en el archivo de configuración a otro nombre y guardar.

Si quieres conservar la partida antigua, recomendamos la opción 2, así el mundo antiguo quedará en el servidor pero "inactivo".

Ahora inicia el servidor y detectará que falta el mundo con el nombre `level-name`, por lo que generará un mundo nuevo con una semilla nueva.

</TabItem>

<TabItem value="regenerating-current" label="Regenerar mundo actual">

Para regenerar el mundo actual, primero debes anotar la semilla. Esto se puede hacer desde la sección **Consola** en el panel web o directamente en el juego, pero recuerda que necesitas ser OP (operador) para hacerlo en el juego.

Ejecuta el comando `/seed` en la consola o en el juego para obtener la semilla del mundo actual. Anota esta semilla.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Con la semilla anotada, edita el parámetro `level-seed` en el archivo `server.properties`. Puedes hacerlo desde la sección **Configs** en el panel web o vía FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Asegúrate de apagar el servidor antes para que el archivo se guarde correctamente.
:::

Cambia el parámetro `level-seed` por la semilla anotada y guarda el archivo. Luego conéctate vía FTP.

Para regenerar el mundo, puedes:
- A través de FTP, busca el mundo con el nombre del parámetro `level-name` y bórralo.
- Editar el parámetro `level-name` a otro nombre y guardar.

Si quieres conservar la partida antigua, recomendamos la opción 2 para que el mundo antiguo quede "inactivo".

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Ahora inicia el servidor y detectará que falta el mundo con el nombre `level-name`, por lo que regenerará el mundo actual usando la semilla del parámetro `level-seed`.

</TabItem>
</Tabs>

## Copias de Seguridad de Mundos Guardados

### Guardados Locales

Los mundos guardados localmente son los que creaste jugando en modo un jugador. Se encuentran en tu Windows AppData, específicamente en esta ruta:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Puedes acceder fácilmente a esta ruta presionando `CTRL` + `R` al mismo tiempo y escribiendo `%appdata%/.minecraft/saves/` en el cuadro de diálogo Ejecutar. Solo pulsa **OK** y te llevará a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

En esta carpeta verás todos tus mundos locales en un solo lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Acceso a Guardados vía FTP

Hacer copia de seguridad de tu mundo guardado en el servidor es fácil. Una vez conectado a tu servidor de juegos vía FTP, accede a la carpeta raíz de la plataforma de servidor que uses. Los mundos guardados están ahí, con el nombre por defecto `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Copia de Seguridad Automática

También ofrecemos la opción de hacer copias de seguridad automáticas de tu mundo guardado (y archivo de configuración) directamente desde nuestro panel web. Solo ve a la interfaz web de tu servidor de juegos y entra en la sección **Herramientas->Copias de seguridad**. Ahí puedes configurar varias opciones para programar backups automáticos. Te damos 10GB de almacenamiento gratuito para tus copias. Para más info, consulta nuestra guía dedicada a [Copias de seguridad](gameserver-backups.md).

## Subir Mundo Guardado

Al igual que hacer backup, subir tu mundo guardado es sencillo. Primero, asegúrate de conectarte a tu servidor de juegos vía FTP. Luego ve a la carpeta raíz de la plataforma de servidor que uses.

:::info Mundos Vanilla & Plataformas de Servidor
Recuerda que los servidores vanilla y las plataformas de servidor guardan los mundos en formatos ligeramente diferentes.

Si estás moviendo un guardado de vanilla a una plataforma como PaperMC, o viceversa, revisa la sección de conversión de mundos de esta guía.
:::

Simplemente arrastra y suelta cualquiera de tus mundos guardados en la carpeta raíz a través de tu cliente FTP y se subirá al servidor.

:::tip
Puede ser útil copiar el nombre de la carpeta del mundo que subiste, ya que lo necesitarás para activarlo en la siguiente sección.
:::

## Activar Mundo Guardado

Para usar un mundo guardado específico, tienes que editar el archivo de configuración `server.properties`, específicamente el parámetro `level-name`.

Puedes hacerlo desde la sección **Configs** en el panel web de tu servidor o vía FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

En el archivo, busca el parámetro `level-name` y cámbialo para que coincida con el nombre de la carpeta de tu mundo guardado. Si usas una plataforma de servidor, usa el nombre de la carpeta principal y no las carpetas `_nether` o `_the_end`.





## Conclusión

Ahora sabes cómo manejar tus mundos de Minecraft con confianza. Desde convertir partidas entre vanilla y plataformas de servidor, generar mundos nuevos, regenerar antiguos usando semillas, hacer copias de seguridad fiables, subir mundos personalizados y activarlos en tu servidor. Con este conocimiento, estás listo para gestionar tus mundos sin líos y mantener tus aventuras seguras y organizadas.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />