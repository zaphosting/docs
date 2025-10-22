---
id: vserver-linux-nodejs
title: "VPS: Configura Node.js en Linux"
description: "Descubre cómo montar un entorno estable de Node.js para aplicaciones escalables y en tiempo real usando Docker y preparación del sistema → Aprende más ahora"
sidebar_label: Instalar Node.js
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Node.js es un entorno de ejecución de JavaScript multiplataforma y de código abierto que ejecuta código JavaScript fuera del navegador, como en servidores o herramientas de línea de comandos. Construido sobre el motor V8, soporta E/S asíncrona y orientada a eventos, lo que lo hace súper eficiente para crear aplicaciones de red escalables y en tiempo real.

El paradigma de “JavaScript en todas partes” permite a los desarrolladores usar un solo lenguaje tanto en el backend como en el frontend.  



<InlineVoucher />



## Preparación

Antes de configurar **Node.js**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a evitar problemas durante o después de la instalación.


### Actualizar sistema
Para asegurarte de que tu sistema corre con el software y las mejoras de seguridad más recientes, siempre deberías hacer una actualización del sistema primero. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez que el proceso de actualización termine, puedes proceder con la instalación de dependencias. Node.js se desplegará y ejecutará en tu máquina usando una serie de contenedores Docker. Por eso, primero necesitas tener Docker instalado. Para hacerlo, ejecuta este comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un tutorial completo del proceso de instalación y cómo usar Docker está disponible en nuestra [guía de Docker](vserver-linux-docker.md).



## Instalación

Ahora que tienes todos los requisitos y preparativos listos, puedes continuar con la instalación de la aplicación Node.js.


Para usar Node.js dentro de un entorno aislado, primero necesitas descargar la imagen oficial basada en Alpine. Ejecuta el siguiente comando para obtener la última imagen de Node.js 22 en tu sistema, dejándola lista para desplegar contenedores:

```
docker pull node:22-alpine
```

Luego, puedes lanzar un contenedor basado en esta imagen y abrir una sesión shell dentro de él. Úsalo para iniciar el contenedor con una shell interactiva. La opción `--rm` asegura que el contenedor se elimine automáticamente al salir, manteniendo limpio tu entorno host.  

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Dentro del contenedor, verifica la versión instalada de Node.js con `node -v`, que debería mostrar `v22.19.0`. También puedes confirmar la versión de npm ejecutando

`npm -v`, y la salida esperada es `10.9.3`. Esto confirma que la imagen provee las versiones correctas de Node.js y npm, listas para usar al instante.





## Configuración

Después de iniciar el contenedor de Node.js, se recomienda configurar ajustes esenciales de Node.js dentro del propio entorno. Una práctica común es definir variables de entorno, por ejemplo:

```
export NODE_ENV=production
```

Esto activa el modo producción, habilitando optimizaciones de rendimiento y ajustando el comportamiento de los logs. Para desarrollo, puedes en cambio poner NODE_ENV=development para aprovechar mensajes de error detallados y funciones de depuración.  

Un directorio de proyecto bien estructurado es clave, empezando con un archivo de configuración creado con:

```
npm init -y
```

Esto genera un archivo `package.json`, que define dependencias, scripts y metadatos para tu proyecto. Es el archivo central de configuración para cualquier aplicación Node.js.  

Las dependencias se instalan con `npm install <paquete>`, mientras que las dependencias de desarrollo se añaden con `npm install <paquete> --save-dev`. La sección `scripts` dentro de `package.json` te permite definir comandos personalizados, como `npm start` o `npm run build`, para facilitar la ejecución y gestión del proyecto.  

Para configuraciones más avanzadas, Node.js puede personalizarse usando archivos `.npmrc` o `.nvmrc`, que permiten configurar registros privados, opciones de caché o forzar una versión específica de Node.js. Esto asegura que tus aplicaciones corran de forma consistente en distintos entornos.



## Conclusión y más recursos

¡Felicidades! Ya has instalado y configurado Node.js en tu VPS con éxito. También te recomendamos echar un vistazo a estos recursos, que pueden darte ayuda y guía extra durante la configuración de tu servidor:

- [Node.js.com](https://Node.js.com/) - Sitio oficial
- https://Node.js.com/help/ - Centro de ayuda de Node.js (Documentación)

¿Tienes preguntas específicas que no se cubren aquí? Para dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂