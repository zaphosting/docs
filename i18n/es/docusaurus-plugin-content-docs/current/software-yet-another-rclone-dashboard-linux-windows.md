---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Aprende a configurar Yet Another Rclone Dashboard, una moderna interfaz gráfica y navegador para rclone en Linux y Windows, usando rclone rcd y archivos release desde GitHub de rclone -> Aprende más ahora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Yet Another Rclone Dashboard es un panel web moderno para `rclone rcd` que ofrece una interfaz gráfica para explorar archivos, ver remotos y gestionar transferencias. En esta guía, aprenderás qué hace el software, qué requiere y cómo ejecutarlo en Linux o Windows usando métodos de despliegue compatibles.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, necesitas tener una instalación funcional de [Rclone](https://rclone.org/) porque Yet Another Rclone Dashboard es solo un frontend para el demonio de control remoto de Rclone.

### Requisitos

Los siguientes requisitos se basan en la información disponible del proyecto y el borrador de configuración.

| Requisito | Detalles |
| --- | --- |
| Sistema operativo | Linux o Windows |
| Software requerido | `rclone` |
| Versión recomendada de Rclone | `v1.72.0` o superior |
| Software opcional | `Docker`, `Nginx` o `Caddy` según el método de despliegue |
| Puerto por defecto | `5572/tcp` |
| Acceso a internet | Necesario si quieres descargar releases o usar el método web fetch |

### De qué depende el panel

Yet Another Rclone Dashboard no reemplaza a Rclone. En cambio, se conecta a `rclone rcd`, que es el modo *demonio de control remoto* de Rclone.

| Componente | Función |
| --- | --- |
| Yet Another Rclone Dashboard | Frontend web |
| `rclone rcd` | API backend y operaciones de archivos |
| Remotos de Rclone | Tus conexiones configuradas a almacenamiento en la nube como Google Drive |

:::info Rclone es obligatorio
No puedes usar este panel por sí solo. Debes tener `rclone` instalado y ejecutarlo en modo demonio con la interfaz de control remoto habilitada.
:::

### Valores de marcador de posición usados en esta guía

Varios comandos en esta guía usan marcadores de posición. Reemplázalos con tus propios valores antes de ejecutar los comandos.

| Marcador | Significado |
| --- | --- |
| `[your_user]` | Nombre de usuario para la autenticación del control remoto de Rclone |
| `[your_password]` | Contraseña para la autenticación del control remoto de Rclone |
| `[your_server_ip]` | Dirección IP pública o privada de tu servidor |
| `[your_domain]` | Nombre de dominio usado para acceso vía proxy inverso |
| `[your_build_path]` | Ruta a los archivos extraídos del panel |

## Métodos de despliegue disponibles

Puedes ejecutar Yet Another Rclone Dashboard de varias formas según cómo quieras acceder a él.

| Método | Ideal para | Notas |
| --- | --- | --- |
| `--rc-files` | Despliegues manuales | Usa archivos estáticos extraídos |
| `--rc-web-gui` con `--rc-web-fetch-url` | Configuración rápida | Permite que Rclone descargue la última release del panel |
| Servidor web como Nginx o Caddy | Hosting personalizado | Sirve el frontend estático por separado |
| Proxy inverso con autenticación externa | Configuraciones avanzadas | Útil para autenticación centralizada |

## Descarga la release del panel

Si quieres usar el método manual `--rc-files` o servir el frontend con tu propio servidor web, primero descarga el archivo de la última release desde los releases del proyecto en GitHub.

Fuente oficial del proyecto: [Yet Another Rclone Dashboard en GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

En el momento de esta guía, la última release es `v0.3.8` e incluye el archivo `yet-another-rclone-dashboard-v0.3.8.zip`.

### Ejemplo de descarga en Linux

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Ejemplo de descarga en Windows

En Windows, descarga el `.zip` desde la página de releases de GitHub y extráelo en una carpeta como:

```text
C:\yet-another-rclone-dashboard
```

:::note Información sobre la versión de la release
La versión de la release puede cambiar con el tiempo. Si hay una versión más nueva, usa el archivo actual desde la página de GitHub del proyecto en lugar del ejemplo mostrado aquí.
:::

## Ejecutar el panel con Rclone rc-files

Este es el método más directo si ya descargaste y extrajiste los archivos del frontend.

### Ejemplo en Linux

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Ejemplo en Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Ejemplo local en escritorio

Si solo quieres usar el panel localmente en el mismo sistema, puedes enlazarlo a `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution No expongas Rclone sin autenticación
Usa `--rc-no-auth` solo para pruebas locales en `127.0.0.1`. Si enlazas Rclone a `0.0.0.0`, debes protegerlo con autenticación o un proxy inverso configurado correctamente.
:::

## Ejecutar el panel con Rclone web fetch

Rclone puede descargar automáticamente una interfaz web, lo que puede simplificar el despliegue si tu configuración lo soporta.

### Ejemplo en Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Ejemplo en Windows

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Explicación de flags importantes

| Flag | Función |
| --- | --- |
| `--rc-web-gui` | Habilita soporte para interfaz web en Rclone |
| `--rc-web-fetch-url` | Indica a Rclone la metadata de la última release |
| `--rc-user` | Define el nombre de usuario para login |
| `--rc-pass` | Define la contraseña para login |
| `--rc-addr` | Define la dirección IP y puerto donde escucha |
| `--rc-allow-origin` | Permite solicitudes del navegador desde la URL especificada |
| `--rc-web-gui-no-open-browser` | Evita que se abra el navegador automáticamente |

:::tip Coincide exactamente con el Origin
Configura `--rc-allow-origin` con la URL exacta que usas en el navegador, incluyendo el protocolo correcto como `http://` o `https://`. Esto es especialmente importante si usas un proxy inverso.
:::

## Servir el panel con un servidor web

Como Yet Another Rclone Dashboard es una aplicación web estática, también puedes alojarlo con un servidor web estándar como Nginx o Caddy.

Este enfoque es útil si quieres servir el frontend en un puerto o dominio mientras Rclone corre por separado en segundo plano.

### Ejemplo con Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Ejemplo con Caddy

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### Qué tener en cuenta

Si sirves el frontend por separado, Rclone debe seguir corriendo con configuraciones `rc` compatibles en segundo plano. También debes asegurarte de que las solicitudes del navegador estén permitidas desde la URL del frontend.

| Configuración | Ejemplo |
| --- | --- |
| URL del frontend | `https://[your_domain]` |
| Dirección de enlace de Rclone | `127.0.0.1:5572` o `0.0.0.0:5572` |
| Origen permitido | `https://[your_domain]` |

## Configuración avanzada con autenticación por proxy inverso

Para entornos avanzados, puedes colocar el panel detrás de un proxy inverso y usar una puerta de autenticación externa. El borrador proporcionado menciona el uso de la opción `--rc-user-from-header` de Rclone para este propósito.

### Ejemplo con Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
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

:::info Configuración avanzada de autenticación
Este método depende de tu proxy inverso y pila de autenticación. La configuración exacta para herramientas como `caddy-security` está fuera del alcance de esta guía, pero el ejemplo muestra cómo el panel puede recibir un encabezado de usuario autenticado.
:::

## Configurar acceso y seguridad

Antes de empezar a usar el panel, revisa las configuraciones de acceso más importantes.

### Valores recomendados de configuración

| Opción | Recomendación |
| --- | --- |
| `--rc-user` | Usa un nombre de usuario dedicado como `zaphosting` |
| `--rc-pass` | Usa una contraseña fuerte |
| `--rc-addr` | Usa `127.0.0.1:5572` detrás de un proxy inverso cuando sea posible |
| `--rc-allow-origin` | Coincide con la URL exacta usada en el navegador |
| Firewall | Abre solo `5572/tcp` si se requiere acceso directo |

### Buenas prácticas de seguridad

- Usa autenticación al exponer el servicio en red
- Prefiere un proxy inverso con HTTPS para acceso público
- Limita el acceso directo a `5572/tcp` siempre que sea posible
- Mantén Rclone actualizado si lo usas para acceso a almacenamiento en la nube como `rclone google drive`

:::danger Riesgo de exposición pública
El acceso de control remoto de Rclone puede proporcionar potentes capacidades de gestión de archivos y remotos. No lo expongas públicamente sin autenticación y restricciones de red adecuadas.
:::

## Iniciar y verificar el panel

Una vez que tu configuración esté lista, inicia `rclone rcd` y abre el panel en tu navegador.

### Ejemplos de acceso

| Escenario | URL |
| --- | --- |
| Acceso local | `http://127.0.0.1:5572` |
| Acceso directo al servidor | `http://[your_server_ip]:5572` |
| Acceso vía proxy inverso | `https://[your_domain]` |

### Qué deberías ver

Si todo está configurado correctamente, la interfaz de Yet Another Rclone Dashboard debería cargar y permitirte:

- conectar con tu demonio Rclone
- inspeccionar remotos configurados
- explorar archivos
- ver transferencias
- revisar configuraciones e información del sistema

Si la página no carga, verifica lo siguiente:

| Verificación | Por qué importa |
| --- | --- |
| El proceso de Rclone está corriendo | El panel necesita el demonio backend |
| El puerto `5572` es accesible | Requerido para acceso directo |
| `--rc-allow-origin` es correcto | Evita problemas de acceso desde el navegador |
| Usuario y contraseña son correctos | Necesario para acceso autenticado |
| Encabezados del proxy inverso son correctos | Importante para configuraciones avanzadas de autenticación |

## Solución de problemas

### El navegador no puede conectar

Si tu navegador no puede abrir el panel, verifica que Rclone esté escuchando en la dirección y puerto esperados.

En Linux, puedes comprobar puertos con:

```bash
ss -tulpn | grep 5572
```

En Windows, puedes usar:

```powershell
netstat -ano | findstr 5572
```

### Fallo en la autenticación

Si el login no funciona:

- confirma los valores usados para `--rc-user` y `--rc-pass`
- asegúrate de que tu proxy inverso no esté eliminando encabezados necesarios
- evita usar `--rc-no-auth` en interfaces remotas o públicas

### El frontend carga pero las acciones fallan

Esto suele indicar un problema de origen o comunicación con el backend.

Revisa cuidadosamente estos valores:

- `--rc-allow-origin`
- `--rc-addr`
- dirección objetivo del proxy inverso
- URL usada en el navegador para acceder al panel

:::tip Usa los logs para diagnóstico rápido
Si el panel no funciona como esperas, revisa primero la salida de consola de Rclone. Problemas de autenticación, enlace y origen suelen ser visibles ahí inmediatamente.
:::

## Referencia del software

### Detalles del proyecto

| Ítem | Valor |
| --- | --- |
| Nombre | Yet Another Rclone Dashboard |
| Categoría | Frontend |
| Fuente | [Repositorio GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Release referenciada | `v0.3.8` |
| Archivo de release | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Backend recomendado | `rclone v1.72.0` o superior |

### Funcionalidades conocidas desde la página del proyecto

Según la información del repositorio referenciado, el panel incluye soporte para las siguientes áreas:

- múltiples perfiles de conexión
- información del sistema y resumen de estado de Rclone
- inspección de remotos
- importación y exportación de configuración de Rclone
- exploración y filtrado de archivos
- vistas relacionadas con transferencias

:::note Disponibilidad de funciones
El comportamiento de las funciones puede cambiar entre releases. Si necesitas detalles exactos para una versión más nueva, consulta el changelog y notas de release en GitHub del proyecto original.
:::

## Conclusión

Felicitaciones, has configurado con éxito Yet Another Rclone Dashboard en Linux o Windows. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte! 🙂