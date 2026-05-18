---
id: dedicated-linux-notepad++
title: "Configura Notepad++ en un Servidor Linux - Usa Tu Editor Favorito vía Wine"
description: "Descubre cómo configurar y optimizar Notepad++ en Linux para una edición de código potente y ligera que mejora tu productividad como desarrollador → Aprende más ahora"
sidebar_label: Instalar Notepad++
services:
- dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Notepad++ es un editor de texto y código fuente gratuito y de código abierto para Windows. Soporta resaltado de sintaxis, plegado de código y edición en pestañas para muchos lenguajes de programación y scripting, y es altamente personalizable mediante plugins. Reconocido por su rápido rendimiento y bajo consumo de recursos, Notepad++ sigue siendo una opción popular para desarrolladores y usuarios que buscan una herramienta de edición potente pero ligera.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMMDejqDfWDCfrr/preview)

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que debes tener en cuenta.

:::danger Se requiere Linux con variante de escritorio
Esta aplicación solo puede instalarse y usarse en un sistema Linux con interfaz gráfica; en este ejemplo, se usa Ubuntu Desktop 25.04 como referencia.

:::





## Requisitos previos

Antes de instalar **Notepad++**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación sin problemas y un rendimiento óptimo.

| Hardware | Mínimo | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU | 1 núcleo vCPU | 4 núcleos vCPU |
| RAM | 2 GB | 4 GB |
| Espacio en disco | 25 MB | 25 GB |

El software requiere que todas las dependencias necesarias estén instaladas y que se ejecute en un sistema operativo compatible. Asegúrate de que tu servidor cumple con los siguientes requisitos antes de continuar con la instalación:

**Dependencias:** `Snap`

**Sistema operativo:** Linux con soporte de escritorio

Verifica que todas las dependencias estén instaladas y que la versión correcta del sistema operativo esté en uso para evitar problemas de compatibilidad durante la instalación de Notepad++.



## Preparación

Antes de configurar **Notepad++**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.


### Actualizar sistema
Para asegurarte de que tu sistema está ejecutando el software y las mejoras de seguridad más recientes, siempre debes realizar primero las actualizaciones del sistema. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completado el proceso de actualización, puedes proceder con la instalación de las dependencias.

#### Snap
El software Notepad++ requiere que Snap esté instalado primero. Para ello, ejecuta el siguiente comando: 
```
sudo apt install snapd
```




## Instalación
Ahora que se han cumplido todos los requisitos y se han completado las preparaciones necesarias, puedes proceder con la instalación de la aplicación Notepad++. Para ello, ejecuta el siguiente comando:

```
sudo snap install notepad-plus-plus
```

Notepad++ se descargará e instalará usando el script oficial de instalación. Simplemente deja que el proceso termine, después de lo cual podrás lanzar la aplicación de inmediato.

![img](https://screensaver01.zap-hosting.com/index.php/s/ca9Z8D37wCSrDbf/preview)



## Configuración

Notepad++ incluye una amplia gama de opciones de personalización accesibles en *Configuración > Preferencias*. Estas te permiten adaptar el editor a tu flujo de trabajo específico:

- **General**: Controla el comportamiento al iniciar, como recargar archivos abiertos previamente, establecer un lenguaje por defecto o definir cómo se comportan las pestañas.  
- **Configuración del editor**: Ajusta el tipo y tamaño de fuente, ancho de tabulación, numeración de líneas, autoindentación o si se muestran espacios y marcas de tabulación.  
- **Esquemas de color y sintaxis**: Usa el “Configurador de estilos” para cambiar entre temas y personalizar el resaltado de sintaxis para cada lenguaje soportado.  
- **Manejo de archivos**: Configura opciones como recarga automática de archivos al cambiar, comportamiento con archivos grandes o preferencias de codificación como UTF-8.  
- **Seguridad y copias de seguridad**: Activa copias de seguridad automáticas o restauración de sesión para evitar pérdida de datos.  
- **Plugins**: Instala y gestiona extensiones mediante el Gestor de Plugins para añadir funcionalidades como soporte FTP o formateo avanzado.  

Estas preferencias hacen que Notepad++ sea altamente adaptable, ya sea para edición simple de texto o desarrollo de software a gran escala.

![img](https://screensaver01.zap-hosting.com/index.php/s/X8og5qnFkBTRcmA/preview)




## Conclusión y más recursos

¡Felicidades! Ahora has instalado y configurado con éxito Notepad++ en tu servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que podrían brindarte ayuda y orientación adicional durante tu proceso de configuración del servidor:

- [notepad-plus-plus.org/](https://notepad-plus-plus.org/) - Sitio web oficial

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂



