---
id: rust-plugins
title: "Rust: Instalación de plugins"
description: "Descubre cómo mejorar tu servidor de Rust con plugins populares para personalización y mejor jugabilidad → Aprende más ahora"
sidebar_label: Instalar Plugins 
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Introducción

Los plugins te permiten ampliar y personalizar aún más tu servidor. A continuación, te explicamos dónde encontrar los plugins más usados y cómo configurarlos.

<InlineVoucher />


## Preparación

Primero, necesitas descargar los plugins que quieres instalar en el servidor. Una gran selección de plugins la encontrarás en [umod.org (antes OXIDE)](https://umod.org/plugins). Durante la descarga obtendrás un archivo `.cs`.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Instalación

Una vez descargados los plugins deseados, puedes proceder con la instalación. Esto se hace vía **FTP**, así que necesitarás un cliente FTP para subir los archivos a tu servidor. Si aún no estás familiarizado con FTP y cómo funciona, consulta la [guía de acceso FTP](gameserver-ftpaccess.md).

Encontrarás el directorio correcto para los plugins en: `/gXXXXXX/rust-oxide/oxide/plugins`. Simplemente sube los archivos `.cs` descargados a esta carpeta. Debería verse algo así después de subirlos:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

No necesitas hacer nada más. Con esto ya se completa la instalación. Luego puedes revisar en la consola en vivo si el plugin se compiló y cargó correctamente. La salida debería verse así:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Plugins Populares

¿Sigues buscando los plugins perfectos para tu servidor?

Explora nuestra lista cuidadosamente seleccionada con los plugins más populares y recomendados para mejorar tu jugabilidad y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.

<SearchableItemList items={items} />


## Conclusión

Si seguiste todos los pasos, deberías haber instalado tu plugin con éxito. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />