---
id: dedicated-windows-javascript
title: "Configura el Entorno de Ejecución JavaScript en un Servidor Windows - Activa la Ejecución de Aplicaciones Web Modernas"
description: "Descubre cómo instalar y configurar Node.js, Deno y Bun en Windows para ejecutar JavaScript de forma eficiente → Aprende más ahora"
sidebar_label: Instalar JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Esta guía ofrece los pasos para la instalación de Node.js, Deno y Bun en Windows. Los pasos que se indican a continuación deben ejecutarse vía RDP; si no sabes cómo conectarte a tu servidor vía RDP, echa un vistazo a nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md).

## Instalación

Para empezar, necesitas decidir qué entorno de ejecución JavaScript instalar. Hay muchos recursos en línea que describen cada uno con mucho detalle. Pero también puedes leer esta guía porque incluye comandos básicos de uso y ejemplos de código. Recomendamos usar Node.js, ya que es uno de los más usados y una opción muy popular.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Instalando Node.js Runtime

### Paso 1: Descargar Archivos
Abre el navegador que prefieras (yo usaré Chrome para esta guía) y dirígete a [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Ahora haz clic en el botón `Download Node.js (LTS)` y espera a que termine la descarga.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Generalmente se recomienda mantener la instalación en la versión Long Term Support (LTS) más reciente.
:::

### Paso 2: Instalando Python
Ejecuta el instalador haciendo clic en él. Ahora se te pedirá configurar algunos ajustes para la instalación. En la página de `Bienvenida` haz clic en `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Luego debes leer y aceptar (marcando la casilla) el Acuerdo de Licencia de Node.js y después hacer clic en el botón `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Después se te pedirá elegir una ubicación para instalar Node.js.

:::note
Recomendamos usar la ubicación de instalación por defecto.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

En la siguiente página, puedes optar por no instalar algunos paquetes principales de Node.js. Si quieres una instalación normal, que es lo recomendado, simplemente presiona el botón `Next`. También tendrás la opción de instalar Chocolatey, pero no es necesario.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Paso 3: Finalizando la Instalación
Eso es todo, ahora puedes hacer clic en `Install` y esperar a que todo se configure. Ten paciencia, puede tardar un poco. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Una vez terminado, simplemente presiona `Finish` en la página final y comienza a usar Node.js en tu servidor.

### Actualizar Node.js a la última versión

Ejecutar `node -v` mostrará la versión instalada de Node.js. De vez en cuando, deberías comprobar que estás usando la última versión LTS. Para actualizar Node.js, debes seguir nuevamente la sección de esta guía [Instalar JavaScript](dedicated-windows-javascript.md).

### Ejecutando Node.js & npm

npm es el gestor oficial de paquetes de Node.js. Lo usarás para instalar cualquier paquete desde internet.

:::tip
Puedes encontrar todos los paquetes npm en su [sitio web](https://www.npmjs.com/).
:::

### Creando un nuevo proyecto

Cada vez que quieras iniciar un nuevo proyecto Node.js, necesitas crear un nuevo directorio para él usando el Explorador de Archivos, abrir el Símbolo del sistema o PowerShell dentro de ese directorio y ejecutar el comando `npm init` para comenzar la configuración. Esto te pedirá información básica para crear un archivo `package.json`. Este será el archivo "config" para ejecutar Node.js.

:::tip
En Windows, hacer clic una vez en la ruta actual del Explorador de Archivos y escribir `cmd` seguido de `Enter` abrirá el Símbolo del sistema dentro del directorio actual, facilitando el proceso.
:::

Después de inicializar el nuevo proyecto, puedes crear un archivo llamado `index.js` y escribir código dentro. Como ejemplo, crearemos un servidor http simple en el puerto 80 por defecto que responde con un mensaje de prueba cuando se accede vía localhost. Se ve así:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hola desde la documentación de ZAP-Hosting =)')
})

server.listen(80)
```

Ahora puedes ejecutar el código con el comando `node .` y comprobar los resultados yendo a `localhost:80` en tu navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Instalar paquetes externos desde npm se hace con el comando `npm install [nombre-del-paquete]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalando Deno Runtime

Instalar Deno es tan simple como escribir `irm https://deno.land/install.ps1 | iex` dentro de una instancia de PowerShell. Usa la barra de búsqueda de Windows y busca `Powershell`. Abre un prompt como administrador y ejecuta el comando anterior, siguiendo cualquier paso que te solicite.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Para comprobar la versión instalada, puedes ejecutar `deno --version`.
:::

### Actualizar Deno a la última versión

Actualizar Deno es tan sencillo como ejecutar `deno upgrade`.

### Ejecutando Deno

Para comenzar a usar Deno, necesitas crear un archivo `index.ts` y escribir algo de código en él. Como ejemplo, crearemos un servidor http simple en el puerto 80 por defecto que responde con un mensaje de prueba cuando se accede vía localhost. Se ve así:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hola desde la documentación de ZAP-Hosting =)')
})
```

Ahora puedes ejecutar el código con el comando `deno run --allow-net index.ts` y comprobar los resultados yendo a `localhost:80` en tu navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno fue creado para ser más seguro y por eso requiere ciertos permisos como `--allow-net` para acceder a algunos de sus módulos.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalando Bun Runtime

Bun también ofrece un instalador muy sencillo con un solo comando, pero también da la opción de instalarlo vía npm si ya has usado Node.js antes.

<Tabs>
<TabItem value="command" label="Comando" default>

Ejecutar `irm bun.sh/install.ps1|iex` dentro de PowerShell instalará Bun en tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
El servidor podría faltar algunos archivos requeridos. Bun te informará sobre esto y también te dará enlaces para descargar dichos archivos al intentar ejecutar el instalador.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Si ya tienes npm instalado, puedes ejecutar `npm install -g bun` para instalar Bun.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Ejecutando Bun

Bun fue creado para ser más rápido que algunos otros motores JavaScript, manteniendo una configuración similar a Node.js. Para ejecutar Bun, abre un directorio vacío y ejecuta `bun init` en un Símbolo del sistema.

:::note
Dependiendo del lenguaje elegido (JS o TS), Bun creará un archivo de configuración (jsconfig.json o tsconfig.json).
:::

Para comenzar a usar Bun, necesitas crear un archivo `index.ts` y escribir algo de código en él. Como ejemplo, crearemos un servidor http simple en el puerto 80 por defecto que responde con un mensaje de prueba cuando se accede vía localhost. Se ve así:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hola desde la documentación de ZAP-Hosting =)')
  },
})
```

Ahora puedes ejecutar el código con el comando `bun index.ts` y comprobar los resultados yendo a `localhost:80` en tu navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## Conclusión

¡Felicidades, has instalado JavaScript con éxito! Para cualquier pregunta o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para asistirte. 🙂