---
id: satisfactory-addmods
title: "Satisfactory: Instalar Mods"
description: "Descubre cómo gestionar e instalar mods de forma segura en servidores de Satisfactory mientras proteges tu partida guardada → Aprende más ahora"
sidebar_label: Instalar Mods
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**IMPORTANTE**

¡Los mods actualmente no funcionan!
:::

:::info
**PRECAUCIÓN**

Los mods **no están oficialmente** soportados por los desarrolladores, ¡pero sí están tolerados!

En el peor de los casos, la instalación de mods puede destruir la partida guardada, hacerla temporalmente injugable por una actualización o incluso borrarla.

¡Se debe crear una copia de seguridad **en cualquier caso antes** de instalar mods y también hacer copias de seguridad regularmente por si acaso!
:::

<InlineVoucher />

## Instalar Satisfactory Modificado en el servidor

Para poder instalar mods en tu servidor, primero debes pedir un Servidor de Satisfactory Modificado: https://zap-hosting.com/en/satisfactory-server-hosting/
Si ya tienes un servidor de Satisfactory alquilado, el juego se puede cambiar en cualquier momento gracias al sistema en la nube como se describe en [Cambio de Juego](gameserver-gameswitch.md).

## Instalar Mod-Manager

La herramienta "SatisfactoryModManager" facilita mucho la administración e instalación de mods y se puede hacer con solo unos clics.
La herramienta está disponible para Windows y Linux y se puede descargar aquí: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Todas las versiones están listadas en la página enlazada; como regla general, siempre se debe usar la versión más reciente, es decir, la primera entrada desde arriba.
La herramienta se puede descargar bajo "Assets". Dependiendo del sistema operativo (Windows o Linux) que uses, haz clic en el archivo correspondiente, que iniciará la descarga automáticamente o, según tu navegador o configuración, tendrás que confirmarla.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

Cuando la descarga termine, ejecuta el archivo e instala el mod manager en tu PC, eligiendo las opciones que prefieras durante la instalación.

## Instalar Mods

Los mismos mods deben estar instalados 1:1 en el cliente (por todos los jugadores) y en el servidor para que la conexión sea posible y no haya crashes.
En el primer paso, los mods se compilan e instalan en el cliente para luego poder transferirse al servidor.

:::info
**ADVERTENCIA**

¡No todos los mods son compatibles con el multijugador!

Si el mod es compatible con el multijugador, normalmente siempre se menciona en la descripción del mod.

Nota: Aunque se indique que el mod es compatible con el multijugador, ¡esto no es garantía!
:::

### Cliente

Los mods se guardan en perfiles para que, por ejemplo, puedas probar otros mods en un mundo de prueba y volver a los mods regulares con un clic.
Primero selecciona un perfil o crea uno nuevo como se muestra en la captura.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Primero pon el filtro en "Compatible" para que solo se muestren mods que actualmente son compatibles con la versión.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Ahora los mods se pueden instalar simplemente haciendo clic en el icono de descarga si se ha asegurado que el mod es compatible con el multijugador, como se explicó arriba.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Servidor

Después de instalar todos los mods deseados en el cliente y asegurarte de que el mod es compatible con el multijugador, ahora puedes instalar los mods en el servidor.
Para evitar problemas con la transferencia de cambios, ¡asegúrate de que tu servidor esté detenido antes!

Ahora conéctate a tu servidor vía FTP para poder subir los mods en el siguiente paso.
Hemos explicado todo sobre la conexión FTP en [Acceso vía FTP](gameserver-ftpaccess.md).
Una vez establecida la conexión, abre la siguiente ruta de carpeta: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Ahora tienes que abrir la carpeta local de Satisfactory en tu PC.
Los pasos varían un poco entre Steam y Epic Games:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Si instalaste Satisfactory vía Steam, puedes abrir la carpeta directamente desde el cliente de Steam:

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games no tiene un botón para abrir la carpeta de instalación, así que debes abrirla manualmente.
Para ello, abre el Explorador de Windows y navega a la carpeta donde instalaste Epic Games.
Normalmente esta es la ruta correcta: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

Los mods que instalaste en el cliente con el mod manager ahora deben subirse vía FTP.
Para acceder a los mods, abre las siguientes carpetas una tras otra: `FactoryGame -> Mods`.

Ahora selecciona todas las carpetas **excepto la carpeta SML** manteniendo pulsada la tecla CTRL y haciendo clic en cada carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

Las carpetas seleccionadas se arrastran y sueltan en la carpeta de mods abierta en FTP.

## Iniciar servidor

Después de subir los mods, simplemente inicia el servidor desde el panel web. Ahora el servidor debería ser accesible, y puedes aprender más en la guía [Conectar al Servidor](satisfactory-connect.md).

<InlineVoucher />