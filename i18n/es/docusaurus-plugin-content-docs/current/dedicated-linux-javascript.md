---
id: dedicated-linux-javascript
title: "Configura el Entorno de Ejecución JavaScript en un Servidor Linux - Activa la Ejecución de Aplicaciones Web Modernas"
description: "Descubre cómo instalar y configurar Node.js, Deno y Bun en tu servidor para una gestión eficiente del entorno de ejecución JavaScript → Aprende más ahora"
sidebar_label: Instalar JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Esta guía ofrece los pasos para la instalación de Node.js, Deno y Bun. Estos comandos deben ejecutarse vía SSH, si no sabes cómo conectarte a tu servidor vía SSH, echa un vistazo a nuestro [Acceso inicial (SSH)](vserver-linux-ssh.md).

## Preparación

Antes de instalar cualquier cosa en un servidor, se recomienda ejecutar el comando de actualización correspondiente a tu sistema operativo para mantener tu servidor seguro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Instalación

Para empezar, necesitas decidir qué entorno de ejecución JavaScript instalar. Hay muchos recursos en línea que describen cada uno con mucho detalle. Pero también puedes leer esta guía porque incluye comandos básicos de uso y ejemplos de código. Recomendamos usar NodeJS ya que es uno de los más usados y una opción muy popular.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Instalando el Entorno de Ejecución Node.js

Puedes instalar Node.js a través del gestor de paquetes de tu distro Linux o usando nvm. Recomendamos usar apt ya que suele ser más sencillo.

<Tabs>
<TabItem value="apt" label="Gestor de Paquetes" default>

Ejecuta el siguiente comando para comenzar la instalación de Node.js vía el gestor de paquetes.

```
apt install nodejs -y
```

Para instalar paquetes de Node.js para tus proyectos, también necesitarás instalar el gestor de paquetes npm.

```
apt install npm
```

### Actualizar Node.js a la última versión

Ejecutar `node -v` mostrará la versión instalada de Node.js. Usualmente no es la última, por lo que necesitarás actualizarla para obtener las últimas funcionalidades. Por suerte, el paquete npm `n` ofrece una forma muy fácil de hacerlo.

Primero, instálalo ejecutando `npm install -g n` y luego puedes ejecutar `n [versión]`, reemplazando `[versión]` con el número de versión deseado, para instalar cualquier versión de Node.js.

:::tip
Generalmente se recomienda mantener tu instalación en la última versión Long Term Support. Puedes hacerlo ejecutando `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Instalar Node.js vía nvm ofrece un control más detallado para tener diferentes versiones de Node.js con sus propios paquetes.

Primero, asegúrate de tener curl instalado en tu sistema y luego ejecuta el siguiente comando.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Esto descargará y ejecutará el script de instalación de nvm desde GitHub.

:::note
Si los comandos de nvm no funcionan después de instalar, ejecuta `source ~/.bashrc` para recargar el archivo de configuración bash.
:::

De forma similar al método anterior, ahora puedes ejecutar un comando (`nvm install v[versión]`) para instalar cualquier versión de Node.js. Si quieres ver todas las versiones disponibles para descargar, ejecuta `nvm list-remote` y para ver las versiones instaladas, ejecuta `nvm list`.

:::tip
La instalación de la versión Long Term Support se puede hacer con `nvm install --lts`
:::

</TabItem>
</Tabs>

### Ejecutando Node.js & npm

Npm es el gestor oficial de paquetes de Node.js. Lo usarás para instalar cualquier paquete desde internet.

:::note
Puedes encontrar todos los paquetes npm en su [sitio web](https://www.npmjs.com/).
:::

### Creando un nuevo proyecto

Cada vez que quieras iniciar un nuevo proyecto Node.js, necesitas crear un nuevo directorio para él (`mkdir [nombre-del-proyecto]`) o entrar (`cd`) en una carpeta vacía y ejecutar el comando `npm init` para comenzar la configuración. Esto te pedirá información básica para crear un archivo `package.json`. Este será el archivo "config" para ejecutar Node.js.

Después de inicializar el nuevo proyecto, puedes crear un archivo llamado `index.js` y escribir código dentro. Como ejemplo, crearemos un servidor http simple en el puerto por defecto 80 que responde con un mensaje de prueba cuando se accede vía localhost. Se muestra a continuación.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hola desde la documentación de ZAP-Hosting =)')
})

server.listen(80)
```

Ahora puedes ejecutar el código con el comando `node .` y comprobar los resultados accediendo a `localhost:80` en tu navegador.

:::tip
Instalar paquetes externos desde npm se hace con `npm install [nombre-del-paquete]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalando el Entorno de Ejecución Deno

Instalar Deno es tan simple como escribir `curl -fsSL https://deno.land/install.sh | sh` en tu consola.

:::tip
Para comprobar la versión instalada, puedes ejecutar `deno --version`.
:::

### Actualizar Deno a la última versión

Actualizar Deno se hace simplemente ejecutando `deno upgrade`.

### Ejecutando Deno

Para empezar a usar Deno necesitarás crear un archivo `index.ts` y escribir algo de código. Como ejemplo, crearemos un servidor http simple en el puerto por defecto 80 que responde con un mensaje de prueba cuando se accede vía localhost. Se muestra a continuación.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hola desde la documentación de ZAP-Hosting =)')
})
```

Ahora puedes ejecutar el código con el comando `deno run --allow-net index.ts` y comprobar los resultados accediendo a `localhost:80` en tu navegador.

:::info
Deno fue creado para ser más seguro y por eso requiere ciertos permisos como `--allow-net` para acceder a algunos de sus módulos.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalando el Entorno de Ejecución Bun

Bun ofrece 2 formas oficiales de instalación, vía curl o npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Ejecutar `curl -fsSL https://bun.sh/install | bash` instalará Bun en tu servidor.

:::tip
Para instalar otras versiones de Bun, puedes ejecutar `curl -fsSL https://bun.sh/install | bash -s "bun-v[versión]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Si ya tienes npm instalado, puedes ejecutar `npm install -g bun`.

</TabItem>
</Tabs>

### Ejecutando Bun

Bun fue creado para ser más rápido que algunos otros motores JavaScript, manteniendo una configuración similar a Node.js. Para ejecutar Bun, abre un directorio vacío y ejecuta `bun init`.

:::note
Dependiendo del lenguaje elegido (JS o TS), Bun creará un archivo de configuración (jsconfig.json o tsconfig.json).
:::

Para empezar a usar Bun, necesitarás crear un archivo `index.ts` y escribir algo de código. Como ejemplo, crearemos un servidor http simple en el puerto por defecto 80 que responde con un mensaje de prueba cuando se accede vía localhost. Se muestra a continuación.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hola desde la documentación de ZAP-Hosting =)')
  },
})
```

Ahora puedes ejecutar el código con el comando `bun index.ts` y comprobar los resultados accediendo a `localhost:80` en tu navegador.

</TabItem>
</Tabs>

Siguiendo esta guía, habrás instalado con éxito uno de los entornos de ejecución JavaScript más populares en tu servidor Linux.