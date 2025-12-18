---
id: dedicated-linux-javascript
title: 'Servidor Dedicado: Instalación de JavaScript'
description: "Descubre cómo instalar y configurar Node.js, Deno y Bun en tu servidor para una gestión eficiente del runtime de JavaScript → Aprende más ahora"
sidebar_label: Instalar JavaScript
services:
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

Para comenzar, necesitas decidir qué runtime de JavaScript instalar. Hay muchos recursos en línea que describen cada uno con mucho detalle. Pero también puedes leer esta guía porque incluye comandos básicos de uso y ejemplos de código. Recomendamos usar NodeJS ya que es uno de los más usados y una opción muy popular.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Instalando Node.js Runtime

Puedes instalar Node.js a través del gestor de paquetes de tu distro Linux o usando nvm. Recomendamos usar apt ya que suele ser más sencillo.

<Tabs>
<TabItem value="apt" label="Gestor de paquetes" default>

Ejecuta el siguiente comando para comenzar la instalación de Node.js vía el gestor de paquetes.

```
apt install nodejs -y
```

Para instalar paquetes de Node.js para tus proyectos, también necesitarás instalar el gestor de paquetes npm.

```
apt install npm
```

### Actualizar Node.js a la última versión

Ejecutar `node -v` mostrará la versión instalada de Node.js. Normalmente no es la última, por lo que tendrás que actualizarla para obtener las últimas funciones. Por suerte, el paquete npm `n` ofrece una forma muy fácil de hacerlo.

Primero, instálalo ejecutando `npm install -g n` y luego puedes ejecutar `n [versión]`, reemplazando `[versión]` por el número de versión deseado, para instalar cualquier versión de Node.js.

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

De forma similar al método anterior, ahora puedes ejecutar un comando (`nvm install v[versión]`) para instalar cualquier versión de Node.js. Si quieres ver todas las versiones descargables, ejecuta `nvm list-remote` y para ver las versiones instaladas, ejecuta `nvm list`.

:::tip
Instalar la versión Long Term Support se hace con `nvm install --lts`
:::

</TabItem>
</Tabs>

### Ejecutando Node.js & npm

Npm es el gestor oficial de paquetes de Node.js. Lo usarás para instalar cualquier paquete desde internet.

:::note
Puedes encontrar todos los paquetes npm en su [sitio web](https://www.npmjs.com/).
:::

### Creando un nuevo proyecto

Cada vez que quieras empezar un nuevo proyecto Node.js, necesitas crear un directorio nuevo (`mkdir [nombre-del-proyecto]`) o entrar (`cd`) en una carpeta vacía y ejecutar el comando `npm init` para comenzar la configuración. Esto te pedirá información básica para crear un archivo `package.json`. Este será el archivo "config" para ejecutar Node.js.

Después de inicializar el nuevo proyecto, puedes crear un archivo llamado `index.js` y escribir código dentro. Como ejemplo, crearemos un servidor http simple en el puerto por defecto 80 que responde con un mensaje de prueba cuando se accede vía localhost. Se ve así:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hola desde ZAP-Hosting Docs =)')
})

server.listen(80)
```

Ahora puedes ejecutar el código con el comando `node .` y comprobar los resultados yendo a `localhost:80` en tu navegador.

:::tip
Instalar paquetes externos desde npm se hace con `npm install [nombre-del-paquete]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalando Deno Runtime

Instalar Deno es tan simple como escribir `curl -fsSL https://deno.land/install.sh | sh` en tu consola.

:::tip
Para comprobar la versión instalada, puedes ejecutar `deno --version`.
:::

### Actualizar Deno a la última versión

Actualizar Deno se hace simplemente ejecutando `deno upgrade`.

### Ejecutando Deno

Para empezar a usar Deno necesitas crear un archivo `index.ts` y escribir algo de código. Como ejemplo, crearemos un servidor http simple en el puerto por defecto 80 que responde con un mensaje de prueba cuando se accede vía localhost. Se ve así:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hola desde ZAP-Hosting Docs =)')
})
```

Ahora puedes ejecutar el código con el comando `deno run --allow-net index.ts` y comprobar los resultados yendo a `localhost:80` en tu navegador.

:::info
Deno fue creado para ser más seguro y por eso requiere ciertos permisos como `--allow-net` para acceder a algunos de sus módulos.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalando Bun Runtime

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

Bun fue creado para ser más rápido que otros motores de JavaScript, manteniendo una configuración similar a Node.js. Para usar Bun, abre un directorio vacío y ejecuta `bun init`.

:::note
Dependiendo del lenguaje elegido (JS o TS), Bun creará un archivo de configuración (jsconfig.json o tsconfig.json).
:::

Para empezar a usar Bun, crea un archivo `index.ts` y escribe algo de código. Como ejemplo, crearemos un servidor http simple en el puerto por defecto 80 que responde con un mensaje de prueba cuando se accede vía localhost. Se ve así:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hola desde ZAP-Hosting Docs =)')
  },
})
```

Ahora puedes ejecutar el código con el comando `bun index.ts` y comprobar los resultados yendo a `localhost:80` en tu navegador.

</TabItem>
</Tabs>

Siguiendo esta guía, habrás instalado con éxito uno de los runtimes de JavaScript más populares en tu servidor Linux.