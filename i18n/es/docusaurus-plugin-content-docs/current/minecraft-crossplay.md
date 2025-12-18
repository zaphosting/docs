---
id: minecraft-crossplay
title: "Minecraft: Configurar crossplay entre las ediciones Java y Bedrock de Minecraft"
description: "Descubre cómo habilitar el crossplay sin problemas entre Minecraft Java y Bedrock con los plugins GeyserMC y Floodgate para una experiencia multijugador mejorada → Aprende más ahora"
sidebar_label: Crossplay Java & Bedrock
services:
  - gameserver-minecraft
---

## Introducción

Tradicionalmente, jugar juntos entre las ediciones Java y Bedrock de Minecraft no era posible, ya que ambas ediciones se consideran plataformas completamente separadas. Por suerte, hoy en día puedes hacer que el crossplay sea posible utilizando plugins específicos para servidores de la edición Java que permiten a los jugadores de Bedrock unirse. En esta guía, exploraremos el proceso de instalación y configuración del plugin GeyserMC junto con el plugin Floodgate para hacer que el crossplay entre ambas plataformas sea posible y sencillo.

## Preparación

Para configurar el crossplay, necesitas tener un servidor de juegos Minecraft ejecutando uno de los softwares compatibles para servidores Java. Recomendamos usar Paper, Spigot o Bukkit, que son las opciones más populares.

Debes tener un servidor de juegos Minecraft listo con uno de estos juegos instalado y activado. Si necesitas ayuda con esto, consulta nuestra [guía de cambio de juego](gameserver-gameswitch.md).

## Instalación

Para comenzar la instalación, entra al panel web de tu servidor de juegos y navega a la sección **Configuración->Plugins**. En esta página, localiza el menú desplegable **GeyserMC** y selecciónalo. Usa el botón de instalar para añadir automáticamente el plugin a tu servidor y espera hasta que la barra de progreso termine.

También recomendamos instalar el plugin **Floodgate**, que está en la misma sección, porque ofrece varios beneficios como:
- Permitir que los jugadores de Bedrock Edition se unan sin necesidad de una cuenta Java.
- Poder ver las skins de Bedrock Edition en la edición Java.
- Diversos beneficios para desarrolladores.

:::note
El plugin Floodgate es opcional, pero lo recomendamos mucho porque facilita mucho el crossplay para los jugadores de Bedrock.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

Con los plugins ya instalados en tu servidor, pasa a la siguiente sección para configurar los ajustes.

## Configuración de Plugins

En la misma sección de **Plugins** en el panel web, selecciona el icono azul de configuración que está al lado del plugin GeyserMC, esto te llevará automáticamente al área correspondiente en la sección **Configuración**.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Aquí puedes personalizar el nombre del servidor y las líneas del MOTD que se mostrarán específicamente para los jugadores de Bedrock Edition.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

Si haces scroll hasta el final de la página, también podrás ver los puertos asignados a tu servidor.

- El **Puerto del Juego** es el puerto principal del servidor que debe usarse para conectar desde clientes de la edición Java.
- El **Puerto 5** es el puerto que usará el plugin GeyserMC. Debes usar este para conectar desde clientes de la edición Bedrock.

Cuando te conectes desde un cliente, asegúrate de usar el puerto correcto según la edición de Minecraft.

:::tip
Para clientes con la opción de configuración de servidor **IP propia**, es posible asignar un puerto personalizado bajo petición para ajustarlo a tu gusto. Puedes [contactar con soporte](https://zap-hosting.com/en/customer/support/) mediante un ticket para solicitarlo.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

## Conexión y Solución de Problemas

Con el plugin ya configurado, reinicia tu servidor para que los nuevos ajustes tengan efecto. Luego intenta conectarte al servidor desde ambas ediciones para asegurarte de que todo funcione correctamente.

Asegúrate de usar los puertos correctos según la edición del juego. Esto debería ser **Puerto 5** para jugadores de Bedrock y el **Puerto del Juego** para jugadores de Java, que puedes encontrar en la pestaña **Configuración**. También puedes verlos pasando el cursor sobre el icono de información en el panel de tu interfaz web.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

Si todo va bien, ahora deberías poder hacer crossplay y conectarte fácilmente desde clientes de ambas ediciones.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Si tienes problemas para conectarte al servidor, prueba los siguientes pasos de solución de problemas que deberían ayudar a resolver los problemas más comunes.

#### Cliente desactualizado - Servidor desactualizado

Este error indica que el servidor y el cliente tienen versiones del juego diferentes. Si tienes este problema en la edición Java, simplemente cambia a la versión correcta del juego desde el launcher.

Lamentablemente, no puedes cambiar fácilmente la versión del juego en las ediciones Bedrock. Por eso, si tienes este problema en un cliente de Minecraft Bedrock Edition, asegúrate de actualizar la app y el servidor a las últimas versiones.

También recomendamos usar los plugins ViaVersion y ViaBackwards, que amplían las versiones del juego desde las que el servidor es accesible, permitiendo que usuarios con versiones más bajas o más altas puedan conectarse. Igual que antes, ve a la sección **Plugins** en la interfaz web y en el menú desplegable **Todos los Plugins**, localiza **ViaVersion** y **ViaBackwards**. Usa el icono verde de descarga para instalarlos en tu servidor.

:::note
Si tienes problemas instalando el plugin vía la interfaz web, puede que el plugin no tenga una versión estable más reciente. En esos casos, recomendamos descargar manualmente una versión beta del plugin desde su web y subirla vía FTP. Aprende más sobre cómo hacerlo leyendo nuestra [guía de acceso FTP](gameserver-ftpaccess.md).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

Una vez instalados los plugins, intenta conectarte de nuevo, lo que ahora debería ser posible desde una mayor variedad de versiones del juego.

#### No se puede conectar al mundo

La razón más común para este error es usar el puerto incorrecto al añadir el servidor en tu cliente. Asegúrate de usar el puerto que aparece bajo **Puerto 5** en la sección **Configuración** de la interfaz web de tu servidor cuando te conectes desde clientes Bedrock. Para clientes Java, usa el valor principal de **Puerto del Juego**.

Si el problema persiste, recomendamos revisar el archivo de configuración del plugin GeyserMC para asegurarte de que los puertos correctos están configurados automáticamente. Ve a la sección **Configs** en tu panel web y abre el archivo `plugins/Geyser-[tu_tipo_de_servidor]/config.yml` usando el botón azul de editar.

En este archivo, localiza los parámetros `port` que están bajo las secciones `bedrock` y `remote`. Asegúrate de que el puerto bedrock esté configurado con el valor que aparece bajo **Puerto 5** en la sección **Configuración** y que el puerto remoto esté configurado en **25565** o en el **Puerto del Juego**.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el plugin GeyserMC en tu servidor de Minecraft, lo que ha habilitado el crossplay entre las ediciones Java y Bedrock. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂