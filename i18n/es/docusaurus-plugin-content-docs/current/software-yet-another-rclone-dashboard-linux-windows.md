---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Aprende a usar Yet Another Rclone Dashboard como una GUI moderna para rclone en Linux y Windows, incluyendo acceso al navegador y configuración del daemon con rclone rcd. -> Aprende más ahora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Yet Another Rclone Dashboard es un panel web moderno para gestionar `rclone rcd` mediante una interfaz basada en navegador. En esta guía, aprenderás qué hace el software, qué requiere y cómo configurarlo en Linux o Windows usando métodos de despliegue compatibles.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de que tu sistema cumple con los requisitos básicos y que `rclone` ya está instalado.

### Requisitos

Según el repositorio del proyecto, Yet Another Rclone Dashboard está diseñado para `rclone rcd` y recomienda **Rclone `v1.72.0` o superior**.

| Requisito | Detalles |
|---|---|
| Sistema operativo | Linux o Windows |
| Dependencia principal | `rclone` |
| Versión recomendada de Rclone | `v1.72.0` o superior |
| Método de acceso | Navegador web |
| Puerto RC por defecto | `5572/tcp` |
| Software opcional | `Docker`, `Nginx` o `Caddy` según tu configuración |

### Qué ofrece el panel

El proyecto original describe Yet Another Rclone Dashboard como un frontend para `rclone rcd`. Según la información disponible, incluye las siguientes funcionalidades:

| Función | Descripción |
|---|---|
| Múltiples perfiles de conexión | Conecta con diferentes instancias de `rclone rcd` |
| Información del sistema | Visualiza información y estado de Rclone |
| Gestión remota | Inspecciona remotos e importa o exporta configuración de Rclone |
| Explorador de archivos | Navega directorios y gestiona archivos desde el panel |

:::info Requisito de Rclone
Este software no es un servidor de almacenamiento independiente. Necesitas una instalación funcional de `rclone` y ejecutar `rclone` en modo daemon con `rcd`.
:::

### Descargar el código fuente

El código oficial del proyecto está disponible en GitHub:

- [Yet Another Rclone Dashboard en GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Al momento del material proporcionado, la última versión es `v0.3.8` e incluye el archivo `yet-another-rclone-dashboard-v0.3.8.zip`.

## Entender cómo funciona el panel

Yet Another Rclone Dashboard es un frontend web estático que se conecta a la *API de control remoto de Rclone* proporcionada por `rclone rcd`. Esto significa que el panel no reemplaza a `rclone`, sino que te ofrece una experiencia tipo GUI para rclone en tu navegador.

En la práctica, tienes varias formas de usarlo:

| Método | Caso de uso | Notas |
|---|---|---|
| `--rc-files` | Despliegue manual local o en servidor | Sirve los archivos extraídos del panel directamente a través de `rclone rcd` |
| `--rc-web-gui` con URL de descarga | Descarga automática vía Rclone | Permite que Rclone obtenga la última versión del panel |
| Proxy inverso | Acceso basado en dominio | Útil para publicar el panel mediante `Nginx` o `Caddy` |
| Servidor web externo | Hosting de archivos estáticos | Sirve el frontend por separado y lo conecta a `rclone rcd` |

:::note Acceso vía navegador
Como es un panel web, accederás a él desde tu navegador después de que `rclone rcd` esté corriendo y configurado correctamente.
:::

## Descargar los archivos del panel

Si quieres usar el método manual, primero descarga el archivo de la última versión desde la página de releases en GitHub y extráelo en tu servidor o sistema local.

### Ejemplo en Linux

Puedes descargar el archivo actual con `wget`:

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Luego extráelo:

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [tu_directorio_del_panel]
```

Sustituye `[tu_directorio_del_panel]` por la carpeta donde quieras guardar los archivos extraídos, por ejemplo `/opt/yet-another-rclone-dashboard`.

### Ejemplo en Windows

En Windows, descarga el archivo `.zip` desde la página de releases de GitHub y extráelo en una carpeta como:

```text
C:\yet-another-rclone-dashboard
```

:::tip Mantén los archivos en una ubicación permanente
No extraigas el panel en una carpeta temporal. `rclone rcd` necesita acceso continuo a los archivos si usas el método `--rc-files`.
:::

## Iniciar Rclone con el panel

Una vez que los archivos estén listos, puedes iniciar `rclone rcd` y exponer el panel.

### Método 1: Configuración manual con `--rc-files`

Este método usa los archivos extraídos del panel directamente.

#### Ejemplo local en Linux

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Ejemplo en servidor Linux

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[tu_usuario_rc] \
  --rc-pass=[tu_contraseña_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[tu_ip_servidor]:5572
```

#### Ejemplo en Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[tu_usuario_rc] `
  --rc-pass=[tu_contraseña_rc] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[tu_ip_servidor]:5572
```

### Método 2: Configuración automática con `--rc-web-gui`

Este método indica a Rclone que descargue el panel automáticamente desde la API de releases de GitHub.

#### Ejemplo local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Ejemplo en servidor remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[tu_usuario_rc] \
  --rc-pass=[tu_contraseña_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[tu_ip_servidor]:5572
```

:::caution No expongas una interfaz RC sin protección
Si enlazas `rclone rcd` a `0.0.0.0`, el servicio puede ser accesible desde otros sistemas. Usa `--rc-user` y `--rc-pass` o colócalo detrás de un proxy inverso configurado correctamente.
:::

## Opciones importantes de Rclone

Las siguientes opciones son las más relevantes para configurar este panel.

| Opción | Propósito |
|---|---|
| `--rc-files` | Sirve archivos estáticos del panel desde un directorio local |
| `--rc-web-gui` | Activa el mecanismo de descarga del panel de Rclone |
| `--rc-web-fetch-url` | Especifica el endpoint API para la versión del panel |
| `--rc-no-auth` | Desactiva autenticación, solo para uso local confiable |
| `--rc-user` | Define el usuario para autenticación RC |
| `--rc-pass` | Define la contraseña para autenticación RC |
| `--rc-addr` | Define la dirección y puerto de escucha |
| `--rc-allow-origin` | Permite acceso desde el origen especificado en el navegador |
| `--rc-web-gui-no-open-browser` | Evita abrir el navegador automáticamente en sistemas sin interfaz gráfica |
| `--rc-user-from-header` | Acepta el usuario autenticado desde un encabezado de proxy inverso |

### Explicación de valores de marcador de posición

Usa los siguientes marcadores en los ejemplos:

| Marcador | Significado |
|---|---|
| `[tu_directorio_del_panel]` | Carpeta con los archivos extraídos del panel |
| `[tu_usuario_rc]` | Usuario para autenticación de `rclone rcd` |
| `[tu_contraseña_rc]` | Contraseña para autenticación de `rclone rcd` |
| `[tu_ip_servidor]` | Dirección IP pública o privada de tu servidor |

## Configurar acceso desde el navegador

Después de iniciar `rclone rcd`, abre la URL del panel en tu navegador.

### Acceso local

Si iniciaste el servicio localmente en la misma máquina, abre:

```text
http://127.0.0.1:5572
```

### Acceso remoto

Si iniciaste el servicio en un servidor Linux o Windows remoto y permitiste acceso externo, abre:

```text
http://[tu_ip_servidor]:5572
```

Si usas un dominio y proxy inverso, abre la URL configurada, por ejemplo:

```text
https://[tu_dominio]
```

:::info El origen permitido debe coincidir
El valor usado en `--rc-allow-origin` debe coincidir con la dirección que realmente usas en el navegador. Si no coincide, el panel puede fallar al conectar correctamente.
:::

## Usar un proxy inverso

Un proxy inverso es útil si quieres URLs más limpias, HTTPS o control de acceso adicional.

### Ejemplo con Nginx

El siguiente ejemplo sirve los archivos estáticos extraídos del panel mediante `Nginx`:

```nginx
server {
    listen 80;
    server_name [tu_dominio];

    location / {
        root /ruta/a/build_extraido;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Ejemplo con Caddy

El siguiente ejemplo sirve los archivos estáticos del panel mediante `Caddy`:

```caddy
[tu_dominio] {
    root * /ruta/a/build_extraido
    file_server
}
```

:::note Hosting estático del frontend
Estos ejemplos solo sirven los archivos frontend. Aún necesitas un backend `rclone rcd` funcional al que el panel pueda conectarse.
:::

## Autenticación avanzada con proxy inverso

El proyecto también documenta una configuración avanzada donde la autenticación la maneja un gateway externo y se pasa a Rclone con `--rc-user-from-header`.

### Ejemplo con Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/ruta/a/build_extraido' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[tu_dominio]
```

### Ejemplo de proxy inverso con Caddy

```caddy
@rclone host [tu_dominio]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::caution La autenticación avanzada requiere pruebas cuidadosas
Esta configuración depende de que tu proxy inverso y gateway de autenticación reenvíen los encabezados correctos. Si falta o está mal configurado, el acceso puede fallar o comportarse de forma inesperada.
:::

## Verificar la instalación

Una vez que todo esté en marcha, verifica que el panel cargue correctamente.

### Comprobaciones básicas

Confirma lo siguiente:

| Comprobación | Resultado esperado |
|---|---|
| Proceso `rclone rcd` en ejecución | Sin errores de inicio en consola o logs |
| Puerto `5572` escuchando | Servicio accesible local o remotamente |
| Navegador abre la URL configurada | Se carga la interfaz de Yet Another Rclone Dashboard |
| Autenticación funciona | Puedes iniciar sesión si está habilitada |

### Problemas comunes

| Problema | Causa posible | Acción sugerida |
|---|---|---|
| El panel no carga | URL incorrecta o servicio no iniciado | Verifica el valor de `--rc-addr` y estado del proceso |
| Errores de conexión en navegador | Puerto bloqueado por firewall | Permite acceso entrante a `5572/tcp` si es necesario |
| Fallo en inicio de sesión | Usuario o contraseña RC incorrectos | Reinicia `rclone rcd` con credenciales correctas |
| Frontend abre pero fallan llamadas API | Desajuste en `--rc-allow-origin` | Ajusta el origen al URL exacto del navegador |
| Acceso remoto no disponible | Servicio ligado solo a `127.0.0.1` | Usa `0.0.0.0:5572` si quieres acceso remoto |

:::danger Exposición pública sin protección
No expongas el panel directamente a internet sin autenticación o un proxy inverso seguro. Si planeas usarlo como navegador remoto de `rclone` o para gestionar remotos `rclone google drive` en red, asegúrate de proteger el endpoint primero.
:::

## Notas adicionales para Linux y Windows

### Linux

Linux suele ser el entorno más sencillo para servicios `rclone rcd` de larga duración. Puedes ejecutar el comando manualmente, con un multiplexor de terminal o como servicio según tu diseño.

### Windows

En Windows, asegúrate de que la ruta usada en `--rc-files` apunte al directorio extraído del panel y que el firewall permita el puerto configurado si necesitas acceso remoto.

### Nota sobre Docker

El material fuente menciona Docker como dependencia opcional, pero no incluye un procedimiento verificado para desplegar este proyecto en Docker. Si quieres usar flujos de trabajo con `rclone docker`, revisa el repositorio original antes de proceder y no asumas una configuración en contenedor.

## Conclusión

Felicidades, has configurado con éxito Yet Another Rclone Dashboard en Linux o Windows. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂