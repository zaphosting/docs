---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Aprende a usar Yet Another Rclone Dashboard como una GUI para rclone en Linux y Windows, incluyendo la descarga de rclone y acceso al panel basado en navegador -> Aprende más ahora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Yet Another Rclone Dashboard es un panel web moderno para gestionar `rclone rcd` a través de una interfaz basada en navegador. En esta guía, aprenderás qué hace el software, qué requiere y cómo configurarlo en Linux o Windows con Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, necesitas una instalación funcional de [Rclone](https://rclone.org/) porque este panel está diseñado para conectarse a `rclone rcd` y no para funcionar como backend independiente.

### Requisitos

Los siguientes requisitos se basan en la información disponible del proyecto y el borrador de configuración proporcionado.

| Requisito | Detalles |
| --- | --- |
| Sistema operativo | Linux o Windows |
| Software requerido | `rclone` |
| Versión recomendada de Rclone | `v1.72.0` o superior |
| Software opcional | `Nginx`, `Caddy` u otro servidor web si quieres servir los archivos estáticos por separado |
| Dependencia opcional para compilación | `Node.js` si planeas compilar el proyecto desde el código fuente |
| Puerto RC por defecto | `5572/tcp` |

:::info Rclone es obligatorio
Yet Another Rclone Dashboard es un frontend para `rclone rcd`. No puedes usarlo sin una instancia de control remoto de Rclone en ejecución.
:::

### Consideraciones de acceso y red

También debes asegurarte de que el sistema donde ejecutas Rclone permita el acceso al puerto configurado si quieres abrir el panel de forma remota.

| Escenario | Dirección bind recomendada | URL de ejemplo |
| --- | --- | --- |
| Acceso local solamente | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Acceso remoto en red | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Configuración con proxy inverso | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Expón el panel de forma segura
Si enlazas Rclone a `0.0.0.0`, el servicio podría ser accesible desde otros sistemas. Debes usar autenticación y, si es posible, un proxy inverso con HTTPS.
:::

## Acerca de Yet Another Rclone Dashboard

Yet Another Rclone Dashboard es un frontend web para el modo daemon de Rclone. Según el repositorio del proyecto, soporta conexión a `rclone rcd`, múltiples perfiles de conexión, inspección remota, importación y exportación de configuración, navegación de archivos y gestión relacionada con transferencias.

Esto significa que puedes usarlo como una `rclone gui` o `rclone browser` para tareas comunes que normalmente requerirían interacción directa por línea de comandos.

### Detalles del proyecto

| Ítem | Valor |
| --- | --- |
| Nombre | Yet Another Rclone Dashboard |
| Categoría | Frontend |
| Fuente | [Repositorio GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Última versión referenciada | `v0.3.8` |
| Archivo de la versión | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Backend recomendado | `rclone rcd` |

### Modelo de uso soportado

La información del proyecto confirma que el panel está pensado para funcionar con el modo de control remoto de Rclone. El comportamiento exacto específico para cada sistema operativo no está completamente documentado en el material fuente proporcionado, por lo que esta guía se centra en los métodos de despliegue verificados del contenido del repositorio.

## Métodos de instalación

Puedes desplegar Yet Another Rclone Dashboard de varias formas según cómo quieras acceder a él. El método más directo es dejar que Rclone sirva los archivos del panel directamente.

### Método 1: Servir el panel con `--rc-files`

Este método usa los archivos extraídos del panel y le indica a `rclone rcd` que los sirva directamente.

#### Descargar los archivos de la versión

Descarga el archivo de la última versión desde la página de releases del proyecto en GitHub:

- [Releases de Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

En el momento de la referencia, el archivo de la última versión es:

- `yet-another-rclone-dashboard-v0.3.8.zip`

Extrae el archivo en una carpeta en tu servidor o sistema local.

:::note Reemplaza las rutas de ejemplo
En los siguientes comandos, reemplaza `[your_dashboard_path]` por la carpeta que contiene los archivos extraídos del build del panel.
:::

#### Ejemplo en Linux

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Ejemplo en Windows

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Ejemplo en servidor remoto con autenticación

Para un servidor sin interfaz gráfica, usa autenticación y enlaza solo a una dirección accesible externamente si es necesario.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Método 2: Usar el fetcher web GUI de Rclone

El borrador de configuración también menciona el fetcher web GUI incorporado de Rclone. Esto puede descargar y servir el panel automáticamente sin necesidad de extraer archivos manualmente.

#### Ejemplo en Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Ejemplo en Windows

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Ejemplo en servidor remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Usa el fetcher para actualizaciones más simples
Si quieres un flujo de trabajo más sencillo para descargar los archivos del panel, el método basado en fetcher puede ser más cómodo que descargar manualmente los archivos de las versiones.
:::

### Método 3: Servir los archivos estáticos con un servidor web

Como Yet Another Rclone Dashboard es una aplicación web estática, también puedes servir el frontend por separado con un servidor web estándar como [Nginx](https://nginx.org/) o [Caddy](https://caddyserver.com/).

En esta configuración, Rclone sigue proporcionando el backend a través de `rclone rcd`, mientras que tu servidor web sirve los archivos del frontend.

#### Ejemplo con Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Ejemplo con Caddy

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Frontend y backend separados
Si usas un servidor web separado, asegúrate de que tu frontend pueda alcanzar el endpoint RC de Rclone. En este caso, el valor de `--rc-allow-origin` es especialmente importante.
:::

## Opciones importantes de Rclone

Las siguientes opciones son las más relevantes al configurar Yet Another Rclone Dashboard.

| Opción | Propósito |
| --- | --- |
| `--rc-files` | Sirve archivos estáticos del panel desde un directorio local |
| `--rc-web-gui` | Activa el mecanismo web GUI de Rclone |
| `--rc-web-fetch-url` | Define la URL fuente para descargar el panel |
| `--rc-serve` | Sirve la interfaz RC por HTTP |
| `--rc-addr` | Establece la dirección IP y puerto de escucha |
| `--rc-no-auth` | Desactiva la autenticación |
| `--rc-user` | Define el usuario RC |
| `--rc-pass` | Define la contraseña RC |
| `--rc-allow-origin` | Permite acceso desde el origen especificado en el navegador |
| `--rc-web-gui-no-open-browser` | Evita que se abra el navegador automáticamente |
| `--rc-user-from-header` | Acepta el usuario desde un encabezado confiable de proxy inverso |

### Elegir el `--rc-allow-origin` correcto

Debes configurar `--rc-allow-origin` con la URL exacta que usas en tu navegador.

| Método de acceso | Valor de ejemplo |
| --- | --- |
| Acceso local | `http://127.0.0.1:5572` |
| Acceso directo por IP | `http://[your_server_ip]:5572` |
| Proxy inverso con HTTPS | `https://[your_domain]` |

:::caution Orígenes incorrectos pueden romper el panel
Si `--rc-allow-origin` no coincide con la URL real del navegador, el panel puede fallar al conectar con Rclone debido a restricciones de seguridad del navegador.
:::

## Configuración avanzada de proxy inverso

Si quieres colocar el panel detrás de una puerta de autenticación, el borrador de configuración incluye un ejemplo avanzado usando un proxy inverso y `--rc-user-from-header`.

### Ejemplo con Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Ejemplo con Caddy

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::danger Solo confía en encabezados de tu proxy
Solo debes usar `--rc-user-from-header` cuando Rclone esté enlazado a una interfaz local confiable como `127.0.0.1` y solo sea accesible a través de tu proxy inverso. De lo contrario, un cliente podría falsificar encabezados.
:::

## Primer inicio y verificación

Una vez que hayas elegido un método de despliegue, puedes verificar que el panel funciona correctamente.

### Iniciar el servicio

Inicia `rclone rcd` con el comando que seleccionaste y mantén el proceso en ejecución.

### Abrir el panel

Abre la URL correspondiente en tu navegador:

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Confirmar acceso exitoso

Si todo está configurado correctamente, deberías ver la interfaz de Yet Another Rclone Dashboard y poder conectar con tu backend de Rclone.

Luego podrás usarlo para inspeccionar remotos, navegar archivos y gestionar transferencias, según tu configuración de Rclone.

## Solución de problemas

Si el panel no carga o no puede conectar, revisa los siguientes puntos.

### Problemas comunes

| Problema | Causa posible | Acción sugerida |
| --- | --- | --- |
| El navegador no abre la página | Rclone no está en ejecución | Inicia `rclone rcd` de nuevo y revisa la salida en terminal |
| El panel carga pero no conecta | `--rc-allow-origin` es incorrecto | Configúralo con la URL exacta del navegador |
| Fallo en acceso remoto | El puerto `5572` está bloqueado | Abre el puerto en tu firewall o usa un proxy inverso |
| Fallo en autenticación | Usuario o contraseña incorrectos | Verifica tus credenciales |
| Fallo en configuración de proxy inverso | Desajuste en encabezados o origen | Revisa los encabezados del proxy y `--rc-allow-origin` |

### Revisión de logs

Siempre debes revisar primero la salida de consola de Rclone. El material fuente no incluye una ruta de log específica para Yet Another Rclone Dashboard, por lo que el paso más fiable es inspeccionar la salida activa del proceso de Rclone.

:::tip Prefiere HTTPS para acceso remoto
Si quieres acceder al panel desde internet, deberías colocarlo detrás de un proxy inverso con TLS en lugar de exponer HTTP plano directamente.
:::

## Notas adicionales

El borrador menciona escenarios opcionales con Docker y compilación desde código fuente, pero el material del proyecto no incluye instrucciones verificadas para despliegue con Docker en el contenido referenciado. Por eso, esta guía no proporciona un comando Docker para evitar documentar comportamientos no verificados.

De igual forma, el nombre exacto del directorio interno de compilación puede variar según la estructura del archivo de la versión, por lo que debes confirmar el contenido de la carpeta extraída antes de configurar `[your_dashboard_path]`.

## Conclusión

Felicidades, has configurado con éxito Yet Another Rclone Dashboard con Rclone en Linux o Windows. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte! 🙂