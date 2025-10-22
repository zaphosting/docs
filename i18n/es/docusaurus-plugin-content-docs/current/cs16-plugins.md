---
id: cs16-plugins
title: "CS 1.6: Instala plugins en tu propio servidor"
description: "Descubre cómo mejorar tu servidor de juegos Counter-Strike 1.6 con AMXmodX y Metamod para una personalización y administración avanzada → Aprende más ahora"
sidebar_label: Instalar Plugins
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Introducción

**AMXmodX** y **Metamod** son necesarios para usar plugins en un servidor de juegos Counter-Strike 1.6. Estas son dos extensiones de Half Life que te permiten personalizar el servidor mucho más que de costumbre. Esto incluye, por ejemplo, el uso de plugins y una administración extendida de tu servidor.

<InlineVoucher />

## Instalación de AMXmodX / Metamod

### Preparación

Primero que nada, necesitas las extensiones reales. Las extensiones se pueden descargar desde [amxmodx.org](https://amxmodx.org/downloads-new.php). Por favor, usa siempre las versiones más recientes (**estables**), para que sigan siendo totalmente funcionales y compatibles.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Necesitas los paquetes para Linux **AMX Mod X Base, Counter-Strike Addon y Metamod**. Puedes descargarlos desde ahí. Después de eso, deberías tener tres archivos comprimidos descargados. Descomprímelos en tu computadora. Esto debería darte una carpeta **addons** que contiene una carpeta **amxmodx** y otra **metamod**:

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### Instalación

Una vez completados los pasos anteriores, es hora de la instalación real. Los archivos deben subirse a tu servidor vía FTP. Necesitas un cliente FTP para poder subir archivos a tu servidor. Si no sabes qué es FTP ni cómo funciona, deberías echar un vistazo a esta guía: [Acceso vía FTP](gameserver-ftpaccess.md)

Ahora, la carpeta **addons** debe subirse al directorio principal del servidor. La estructura de archivos de la carpeta debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

La configuración de **AMXmodX** y **Metamod** ya está completa. Puedes conectarte a tu servidor en el juego y usar el comando ``amxx version`` en la consola para comprobar si AMX se instaló correctamente. La salida debería verse así:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Si aparece el mensaje **Unknown command**, algo salió mal durante la instalación.

## Instalación de plugins

### Preparación

Una vez que la configuración de **AMXmodX** y **Metamod** esté completa y funcionando, puedes empezar a instalar plugins. Primero tienes que descargar los plugins que quieres instalar en el servidor. Una gran selección de plugins la puedes encontrar en [amxmodx.org](https://www.amxmodx.org/compiler.php). A lo largo de los años se han publicado numerosos plugins y siguen agregándose más regularmente. Necesitas el archivo **.amxx** para cada plugin.

### Instalación

Ahora que tienes los plugins descargados, puedes empezar la instalación real. La configuración de los plugins también se hace vía FTP. Los archivos de los plugins deben subirse al directorio de plugins bajo ``../addons/amx``.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

La próxima vez que el servidor arranque, los plugins subidos deberían cargarse automáticamente.

## Plugins populares

¿Sigues buscando los plugins perfectos para tu servidor?  
Explora nuestra lista cuidadosamente seleccionada de los plugins más populares y recomendados para mejorar tu experiencia de juego y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.

<SearchableItemList items={items} />

## Conclusión

Si seguiste todos los pasos, deberías haber instalado con éxito AMXmodX / Metamod y los plugins que querías. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />