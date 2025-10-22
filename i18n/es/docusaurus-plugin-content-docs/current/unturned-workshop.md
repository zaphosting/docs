---
id: unturned-workshop
title: "Unturned: Instala contenido del Workshop en tu servidor"
description: "Descubre cómo mejorar tu servidor de Unturned con contenido personalizado del Steam Workshop para una experiencia de juego única → Aprende más ahora"
sidebar_label: Contenido del Workshop
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

El Steam Workshop te da la oportunidad de personalizar aún más tu servidor. A continuación te explicamos cómo puedes añadir más contenido a tu servidor usando el Steam Workshop.

### Preparación

Existen varias fuentes donde puedes descargar mods, mapas, modelos, etc. La más popular es el Steam Workshop. Ahí encontrarás muchos recursos que puedes instalar en tu servidor. Primero tienes que encontrar los ítems del workshop que quieres. El Steam Workshop para Unturned lo puedes encontrar aquí:  [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

Una vez que te hayas decidido, tienes que copiar el ID del ítem del workshop y luego añadirlo en la interfaz. Dependiendo de si navegas el Steam Workshop usando tu navegador o el Steam Client, puedes copiar el ID como se muestra a continuación:

- **Steam Client**

  Haz clic derecho en la página del ítem del workshop y selecciona Copiar URL de la página. Copia el ID desde la URL.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

- **Navegador**

  Encontrarás una combinación de números después de **.../?id=** en la barra de URL. Cópiala.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)

### Añadir contenido

Una vez que tengas los contenidos deseados, ahora los añades al servidor. Los contenidos se especifican en el archivo **WorkshopDownloadConfig.json**, que puedes encontrar en la interfaz bajo Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

Ahora añadimos los IDs de los ítems individuales del Steam Workshop en 'FileIDs'. El resultado final puede verse así:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Ejemplo (Placeholder)
    0987654321  // Ejemplo (Placeholder)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Actualización de archivo del Workshop detectada, apagando en: {0}",
  "Shutdown_Kick_Message": "Apagando por actualización de archivo del Workshop."
}
```

Después debes iniciar el servidor. El contenido añadido se descargará automáticamente durante el proceso de arranque. Puedes verlo en la Consola en Vivo. La salida debería verse así:

```
1 ítem(s) del workshop para descargar...
Descargando ítem del workshop 1567256534
Ítem del workshop descargado con éxito: 1567256534
```

El contenido ya se ha descargado, configurado y debería estar activo.

<InlineVoucher />