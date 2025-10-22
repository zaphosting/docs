---
id: satisfactory-blueprints
title: "Satisfactory: Gestiona Planos (Importar/Exportar)"
description: "Descubre cómo crear, compartir y gestionar planos personalizados para construcciones y diseños eficientes en Satisfactory → Aprende más ahora"
sidebar_label:  Gestionar Planos
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Satisfactory cuenta con un sistema de planos personalizados que permite a los usuarios crear y compartir diseños de construcción con otros miembros de la comunidad. Estos planos van desde distribuciones eficientes de fábricas hasta salones elaborados y complejos sistemas ferroviarios.

Hay una amplia selección de planos disponibles a través del sitio web Satisfactory Calculator. Los planos pueden importarse y exportarse con facilidad.

<InlineVoucher />

## Gestionar Planos

La gestión de planos en un servidor de Satisfactory se realiza completamente vía FTP. Si aún no sabes cómo conectarte a tu servidor usando FTP, consulta nuestra [guía de Acceso FTP](gameserver-ftpaccess.md) para empezar.

### Importar Planos
Para comenzar, necesitas obtener los archivos de plano que deseas subir. Estos consisten en un archivo `.sbp` y, opcionalmente, un archivo de configuración asociado `.sbpcfg`. Estos archivos pueden provenir de fuentes confiables de la comunidad o ser creados desde otras instancias del juego.

Antes de proceder con la subida, se recomienda apagar completamente el servidor usando tu interfaz de gestión. Esto asegura que no haya conflictos de archivos ni problemas de memoria durante el proceso de subida.

Luego, conéctate al servidor usando un cliente FTP. Una vez dentro, navega hasta el directorio de planos:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Dentro de este directorio debe haber una subcarpeta con el nombre exacto del mundo (o sesión) que estás usando. Este nombre corresponde al nombre del archivo `.sav` almacenado en el servidor. Si la carpeta no existe aún, debe crearse manualmente con el nombre exacto del archivo de guardado.

Una vez preparada la subcarpeta correcta, sube los archivos de plano a esa carpeta. Es fundamental incluir tanto el archivo `.sbp` como, si está disponible, el archivo `.sbpcfg`. Tras completar la subida, reinicia el servidor. Cuando esté activo de nuevo, los planos subidos estarán disponibles en el juego a través de la interfaz del Diseñador de Planos, permitiéndote acceder y usarlos normalmente.

### Exportar Planos

Exportar planos desde un servidor de Satisfactory significa descargar los archivos de plano del servidor y guardarlos localmente en tu PC. Comienza apagando el servidor, ya que esto garantiza que los archivos de plano estén en un estado consistente y accesible. Abre tu cliente FTP y conéctate al servidor. Navega hasta el directorio:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Localiza la subcarpeta que coincide con el mundo/sesión desde donde quieres exportar los planos. Dentro de esta carpeta encontrarás el archivo `.sbp`, junto con el archivo opcional `.sbpcfg`, correspondientes a cada plano guardado.

Descarga los archivos de plano deseados directamente a tu computadora local usando el cliente FTP. Una vez completada la transferencia, puedes archivar los archivos, abrirlos localmente o importarlos en otra instalación o entorno de servidor. Si planeas reutilizar los planos en otro servidor, sigue el mismo procedimiento de importación descrito arriba.

## Conclusión

Gestionar planos en un servidor de Satisfactory es un proceso sencillo si sigues los pasos documentados. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂


<InlineVoucher />