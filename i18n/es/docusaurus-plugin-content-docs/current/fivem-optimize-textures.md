---
id: fivem-optimize-textures
title: "FiveM: Optimiza texturas"
description: "Descubre cómo optimizar las texturas de mods de GTA5 para reducir su tamaño y mejorar el rendimiento del juego → Aprende más ahora"
sidebar_label: Optimiza texturas
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Quieres optimizar las texturas de tus mods de GTA5 y reducir su tamaño sin perder calidad? En esta guía te mostramos cómo comprimir texturas de forma efectiva para dejarlas por debajo de 16MB. Con unos pasos sencillos y las herramientas adecuadas, puedes mejorar el rendimiento de tu juego y ahorrar espacio de almacenamiento. Esto también ayuda a evitar problemas comunes como:

```
El asset hevo/hevo.ytd usa 166.0 MiB de memoria física. Los assets sobredimensionados pueden y causarán problemas de streaming (modelos que no cargan/renderizan, comúnmente conocidos como 'pérdida de texturas', 'bug de la ciudad' o 'streaming no óptimo').
```

<InlineVoucher />


## Preparación

Antes de empezar, asegúrate de haber descargado e instalado las herramientas necesarias. Descarga **OpenIV** y **XnResize** desde sus sitios oficiales y sigue las instrucciones de instalación. Estas herramientas te servirán para editar las texturas:

- **OpenIV**  [(Descargar)](https://openiv.com/)
- **XnResize** [(Descargar)](https://www.xnview.com/en/xnresize/#downloads)



## Configuración
Una vez que tengas las herramientas instaladas, puedes comenzar a editar las texturas. Localiza el archivo .ytd de tu mod en OpenIV y ábrelo para acceder a las texturas. 

![Diccionario de Texturas en OpenIV](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

En OpenIV, encontrarás la opción "Exportar todas las texturas" en la parte inferior izquierda. Haz clic para exportar todas las texturas de tu mod. Guárdalas en una carpeta dentro del directorio de tu mod de vehículo, por ejemplo en "textures". 



## Optimización

Ahora que has exportado todas las texturas, es hora de editarlas y redimensionarlas. Abre XnResize en tu PC. Arrastra todos los archivos .dds exportados a la ventana de XnResize. Ahora deberías ver todas tus texturas dentro de la aplicación. En la pestaña "Acción" de XnResize, configura el ancho y alto en porcentaje y reduce el tamaño de las texturas al 50% del original. Asegúrate de mantener la proporción.

![Pestaña Acción en XnResize](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



En la pestaña "Salida", selecciona una carpeta destino para las texturas editadas, por ejemplo "textures_resized", y establece el formato a DDS - Direct Draw Surface.

![Pestaña Salida en XnResize](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## Conclusión
Después de editar todas las texturas y ajustar su tamaño, reemplaza las texturas antiguas de tu mod con las nuevas versiones comprimidas. Verás que el tamaño de las texturas comprimidas es mucho menor, lo que no solo ahorra espacio de almacenamiento sino que también mejora el rendimiento de tu juego. 

| **Descripción**            | **Diccionario de Texturas Original** | Diccionario de Texturas Comprimido | Mejor X Veces     |
| :-------------------------- | :---------------------------------- | :-------------------------------- | :----------------- |
| **Tamaño Comprimido**       | 11.8 MB                            | 1.23 MB                           | 9.6x               |
| **Tamaño Sin Comprimir**    | 164 MB                            | 11 MB                            | 14.9x              |
| **Memoria Virtual**         | 0.05 MiB                          | 0.05 MiB                         | -                  |
| **Memoria Física**          | 166.00 MiB                        | 10.69 MiB                       | 15.5x              |

No olvides probar las texturas en el juego. Si surgen problemas, siempre puedes restaurar texturas individuales a su tamaño original o usar los archivos .dds originales.

<InlineVoucher />