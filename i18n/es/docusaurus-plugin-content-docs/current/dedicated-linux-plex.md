---
id: dedicated-linux-plex
title: "Configura Plex en un Servidor Linux - Transmite tu Biblioteca Personal de Medios"
description: "Descubre cómo gestionar y transmitir tu biblioteca personal de medios sin complicaciones con Plex para acceder fácilmente desde cualquier dispositivo → Aprende más ahora"
sidebar_label: Instalar Plex
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Plex es una plataforma para gestionar y transmitir contenido multimedia como películas, series, música y fotos desde una ubicación central. Con el Plex Media Server, puedes organizar tus bibliotecas, enriquecerlas automáticamente con metadatos y transmitirlas a varios dispositivos tanto en la red local como por internet. Esto hace de Plex una solución flexible para acceder a tus colecciones personales de medios con facilidad y comodidad.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso para configurarlo y ajustarlo, junto con todo lo que necesitas tener en cuenta.



## Instala Plex con el Instalador de Apps One Click

Puedes instalar **Plex** directamente a través de nuestro **Instalador de Apps One Click** en la interfaz web del VPS. Tras completar la configuración inicial de apps, abre el catálogo de aplicaciones, busca **Plex** y comienza el despliegue con tu proyecto, entorno y configuración de dominio preferidos. Esto te ofrece una forma rápida y sencilla de desplegar y gestionar **Plex** sin necesidad de configurar manualmente por línea de comandos, mientras aprovechas la gestión integrada vía web, soporte para dominios personalizados y provisión de SSL donde esté disponible.

## Requisitos Previos

Antes de instalar **Plex**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación fluida y un rendimiento óptimo.

| Hardware   | Mínimo       | Recomendación ZAP-Hosting |
| ---------- | ------------ | ------------------------- |
| CPU        | 4 núcleos vCPU | 8 núcleos vCPU           |
| RAM        | 4 GB         | 8 GB                      |
| Espacio en disco | 25 GB    | 25 GB                     |

El software requiere que todas las dependencias necesarias estén instaladas y que se ejecute en un sistema operativo soportado. Asegúrate de que tu servidor cumple con los siguientes requisitos antes de continuar con la instalación:

**Dependencias:** Ninguna

**Sistema Operativo:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Verifica que todas las dependencias estén instaladas y que la versión del sistema operativo sea la correcta para evitar problemas de compatibilidad durante la instalación de Plex.



## Instalación

La web oficial de Plex Media ofrece la versión actual para Linux del Plex Media Server para descargar. Usa la variante de 64 bits para asegurar compatibilidad con todas las ediciones modernas de Linux. Ejecuta el siguiente comando para descargar el archivo `.deb`

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Después de descargarlo, puedes ejecutar el instalador para configurar el Plex Media Server. Una vez instalado, la configuración se realiza a través de la interfaz web en el navegador, permitiéndote crear bibliotecas y gestionar tu colección de medios. Ejecuta el siguiente comando para iniciar la instalación:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Para configurar Plex Media Server, en la misma máquina donde instalaste el servidor, abre una ventana del navegador y ve a `http://127.0.0.1:32400/web`. En esta etapa, se te pedirá iniciar sesión con una cuenta Plex existente o crear una nueva si aún no tienes una.

Este paso de inicio de sesión es necesario para vincular el servidor a tu cuenta personal, habilitando funciones como acceso remoto, gestión de usuarios y sincronización entre dispositivos. Tras la autenticación exitosa, entrarás en tu propia instancia de Plex Media. Desde ahí, puedes crear bibliotecas para películas, series, música o fotos, obtener metadatos automáticamente y compartir contenido con otros usuarios en tu red local o por internet.

Después de la configuración, también puedes acceder a tu Plex Media Server externamente abriendo la interfaz web en un navegador vía `http://<ip-address>:32400`. Sustituye `<ip-address>` por la dirección pública de tu servidor.

El puerto 32400 es el puerto por defecto para el acceso web de Plex y puede que necesites permitirlo en tu firewall o router si quieres conectarte desde internet.

Una vez accedas a esa dirección, serás redirigido a la página de inicio de sesión de Plex y podrás gestionar tus bibliotecas y ajustes. Para un acceso externo seguro, se recomienda activar el Acceso Remoto en la configuración de Plex, ya que esto asegura una conexión cifrada y enruta el tráfico a través del servicio de Plex.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Conclusión y más Recursos

¡Felicidades! Ya has instalado y configurado Plex con éxito en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante el proceso de configuración de tu servidor:

- [Plex.com](https://Plex.com/) - Sitio Oficial
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Centro de Ayuda Plex (Documentación)

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂