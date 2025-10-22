---
id: exiled-plugins
title: "SCP EXILED: Instalación de plugins"
description: "Descubre cómo ampliar y personalizar tu servidor con plugins confiables para una funcionalidad y personalización mejoradas → Aprende más ahora"
sidebar_label: Instalar Plugins
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Introducción

Los plugins te permiten ampliar y personalizar aún más tu servidor. A continuación, te explicamos dónde encontrar los plugins más usados y cómo configurarlos.

<InlineVoucher />

## Preparación

Primero, necesitarás descargar los plugins que quieras instalar en tu servidor. Una amplia variedad de plugins EXILED se encuentran en su página oficial de GitHub. Una vez que hayas seleccionado un repositorio de plugins, encontrarás una sección de releases donde podrás descargar la última versión. Más abajo te damos instrucciones detalladas sobre cómo proceder.

Aunque los plugins pueden descargarse de varias fuentes, recomendamos usar plataformas confiables como el repositorio oficial de GitHub, ya que generalmente son las más seguras. Siempre ten cuidado al añadir plugins a tu servidor: verifica la fuente, revisa quiénes son los desarrolladores y entiende bien qué hace el plugin antes de instalarlo.

Para descargar un plugin desde GitHub, comienza visitando la [página oficial de EXILED en GitHub](https://github.com/Exiled-Team) y selecciona el repositorio del plugin que quieras usar.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Dentro del repositorio del plugin, busca la sección **Releases**, que está en el lado derecho.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

En la sección Releases encontrarás un archivo **.dll** para descargar. Haz clic en él para iniciar la descarga.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

¡Eso es todo! Una vez descargado, puedes seguir los pasos de instalación más abajo en esta guía para aprender cómo instalar el archivo **.dll** en tu servidor.


## Instalación

Una vez que tengas los plugins descargados, puedes proceder con la instalación. Esto se hace vía **FTP**, así que necesitarás un cliente FTP para subir los archivos a tu servidor. Si aún no estás familiarizado con FTP y cómo funciona, consulta esta guía: [Acceso vía FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Encontrarás el directorio correcto para los plugins en: ```/gXXXXXX/.config/EXILED/Plugins```. Simplemente sube los archivos **.dll** descargados a esta carpeta. Después de subirlos, debería verse algo así:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Una vez completado este paso, la instalación del plugin estará terminada. Por último, revisa la **consola en vivo** para verificar que el plugin se haya compilado y cargado correctamente. La confirmación en la consola debería verse así:  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Plugins Populares

¿Sigues buscando los plugins perfectos para tu servidor? Echa un vistazo a nuestra lista cuidadosamente seleccionada de los plugins más populares y recomendados para mejorar tu experiencia de juego y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.

<SearchableItemList items={items} />


## Conclusión

Si seguiste todos los pasos, deberías haber instalado tu plugin con éxito. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />