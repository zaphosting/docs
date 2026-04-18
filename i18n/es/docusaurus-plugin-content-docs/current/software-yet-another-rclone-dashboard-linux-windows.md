---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Aprende a configurar Yet Another Rclone Dashboard como una moderna GUI y navegador para rclone en sistemas Linux y Windows. -> Aprende más ahora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Yet Another Rclone Dashboard es un panel web moderno para `rclone rcd` que te ofrece una interfaz gráfica para explorar archivos, inspeccionar remotos y gestionar tu configuración de Rclone. En esta guía, aprenderás a desplegarlo en Linux o Windows y conectarlo de forma segura a tu demonio Rclone existente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de que tu sistema cumple con los requisitos básicos y que Rclone ya está disponible.

### Requisitos

| Requisito | Detalles |
|---|---|
| Sistema operativo | Linux o Windows |
| Versión de Rclone | Se recomienda `v1.72.0` o superior |
| Método de acceso | Consola local, SSH o RDP |
| Red | Acceso a la URL del panel desde tu navegador |
| Puerto por defecto | `5572/tcp` |

### Lo que debes saber primero

Yet Another Rclone Dashboard no es un servicio de almacenamiento independiente. Es una interfaz para `rclone rcd`, que es el modo demonio de control remoto de Rclone. Esto significa que debes iniciar `rclone rcd` con las opciones web correctas para que el panel pueda cargar y comunicarse con el backend.

:::info Rclone es obligatorio
Necesitas una instalación funcional de [Rclone](https://rclone.org/) antes de usar este panel. Si aún no tienes Rclone instalado, instálalo y configúralo primero.
:::

### Lista de preparación recomendada

| Tarea | Por qué es importante |
|---|---|
| Instalar Rclone | Necesario para ejecutar `rclone rcd` |
| Configurar al menos un remoto | Necesario si quieres explorar almacenamiento en la nube como `rclone google drive` |
| Abrir o redirigir el puerto requerido | Necesario para acceso remoto desde el navegador |
| Decidir acceso local o remoto | Determina si se requiere autenticación |

## Cómo funciona el panel

Yet Another Rclone Dashboard es una aplicación web estática que se conecta a la API de control remoto de Rclone. Puedes servir los archivos del panel directamente a través de Rclone o alojar el frontend por separado con un servidor web como Nginx o Caddy.

### Funciones principales

Según la información publicada del proyecto, el panel ofrece las siguientes funciones:

| Función | Descripción |
|---|---|
| Múltiples perfiles de conexión | Conecta con diferentes instancias de `rclone rcd` |
| Información del sistema | Visualiza el estado de Rclone y detalles del entorno |
| Inspección de remotos | Revisa remotos disponibles y datos de configuración |
| Explorador de archivos | Navega directorios y gestiona archivos |
| Vista previa multimedia | Previsualiza contenido soportado |
| Vista de transferencias | Monitorea la actividad de transferencias |
| Interfaz de configuración | Ajusta opciones relacionadas con el panel |

### Cuándo usar este panel

Este proyecto es útil si quieres una GUI ligera o navegador para `rclone` en lugar de trabajar solo en la terminal. Es especialmente práctico para gestionar remotos en la nube desde un VPS, servidor dedicado o sistema Windows local.

## Métodos de instalación

Puedes desplegar Yet Another Rclone Dashboard de varias formas. La opción correcta depende de si quieres la configuración más simple, una instalación manual o un proxy inverso delante del servicio.

### Método 1: Servir el panel con archivos locales

Este método usa la compilación extraída del panel con la opción `--rc-files` de Rclone.

#### Descargar la versión

Descarga el archivo de la última versión desde la página de releases del proyecto en GitHub:

- Proyecto en GitHub: [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Última versión verificada en el material fuente: `v0.3.8`
- Archivo de la versión: `yet-another-rclone-dashboard-v0.3.8.zip`

Extrae el archivo en una ubicación de tu elección.

Ejemplos de ubicaciones:

| Plataforma | Ruta ejemplo |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Iniciar Rclone en Linux

Si ejecutas el panel localmente en la misma máquina y solo quieres acceso local desde el navegador, puedes enlazarlo a `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

Si quieres acceder remotamente desde otro dispositivo, usa autenticación y escucha en todas las interfaces.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[tu_usuario_rc] \
  --rc-pass=[tu_contraseña_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[tu_ip_servidor]:5572
```

#### Iniciar Rclone en Windows

Abre `Command Prompt` o `PowerShell` y ejecuta:

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[tu_usuario_rc] `
  --rc-pass=[tu_contraseña_rc] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[tu_ip_servidor]:5572
```

Sustituye los valores entre corchetes por los tuyos:

| Marcador | Significado |
|---|---|
| `[tu_usuario_rc]` | Usuario para iniciar sesión en la API de Rclone |
| `[tu_contraseña_rc]` | Contraseña para proteger la API de Rclone |
| `[tu_ip_servidor]` | Dirección IP pública o privada para acceder al panel |

:::caution No expongas una API de Rclone sin autenticación
No uses `--rc-no-auth` junto con `0.0.0.0:5572` en un servidor accesible por internet. Esto expondría tu interfaz de control de Rclone sin protección.
:::

### Método 2: Usar el fetcher WebGUI de Rclone

Este método permite que Rclone descargue automáticamente el panel en lugar de descargar manualmente los archivos. Simplifica el despliegue para una configuración rápida.

#### Ejemplo de acceso local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Ejemplo de acceso remoto

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

:::note Comportamiento de descarga automática
La ruta exacta donde Rclone guarda los archivos descargados depende de tu entorno Rclone. Si necesitas control total sobre los archivos y actualizaciones, el método manual con `--rc-files` suele ser más fácil de gestionar.
:::

### Método 3: Servir el frontend con un servidor web

Como el proyecto es una aplicación web estática, puedes alojar el frontend por separado con un servidor web y mantener `rclone rcd` ejecutándose en segundo plano.

#### Ejemplo con Nginx

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

#### Ejemplo con Caddy

```caddy
[tu_dominio] {
    root * /ruta/a/build_extraido
    file_server
}
```

Este enfoque es útil si ya usas un stack de proxy inverso y quieres servir el panel desde un dominio personalizado.

:::tip Mejor práctica con proxy inverso
Si usas un dominio o proxy inverso, configura `--rc-allow-origin` con la URL exacta que abres en tu navegador, por ejemplo `https://[tu_dominio]`.
:::

### Método 4: Proxy inverso avanzado con autenticación externa

Una configuración avanzada puede usar una puerta de enlace de autenticación externa y pasar el usuario autenticado a Rclone mediante un encabezado. Esto es para usuarios con experiencia.

#### Ejemplo Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/ruta/a/build_extraido' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[tu_dominio]
```

#### Ejemplo Caddy

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

:::danger Configuración avanzada de autenticación
La autenticación basada en encabezados solo debe usarse detrás de un proxy inverso confiable. Si se configura mal, puede permitir acceso no autorizado a tu instancia de Rclone.
:::

## Opciones importantes de Rclone

Las siguientes opciones son las más relevantes al desplegar Yet Another Rclone Dashboard.

| Opción | Propósito |
|---|---|
| `--rc-files` | Sirve los archivos extraídos del panel a través de Rclone |
| `--rc-web-gui` | Activa soporte para la GUI web mediante Rclone |
| `--rc-web-fetch-url` | Descarga metadatos de la versión del GUI desde una fuente remota |
| `--rc-user` | Define el usuario para la API |
| `--rc-pass` | Define la contraseña para la API |
| `--rc-no-auth` | Desactiva la autenticación |
| `--rc-addr` | Define la dirección y puerto de escucha |
| `--rc-allow-origin` | Permite acceso desde el origen especificado en el navegador |
| `--rc-web-gui-no-open-browser` | Evita que se abra el navegador automáticamente |
| `--rc-user-from-header` | Acepta el usuario autenticado desde un encabezado de proxy inverso |

## Guía de configuración

Después de elegir un método de instalación, revisa los valores principales de configuración antes del primer uso.

### Configuración de autenticación

Si el panel solo se usa localmente en tu máquina, el acceso local sin autenticación puede ser aceptable. Para cualquier configuración remota o pública, siempre debes usar autenticación.

| Tipo de acceso | Configuración recomendada |
|---|---|
| Solo local | `127.0.0.1` con opción `--rc-no-auth` opcional |
| Acceso LAN o internet | `0.0.0.0` con `--rc-user` y `--rc-pass` |
| Proxy inverso con dominio | Enlace a `127.0.0.1` o privado más autenticación en el proxy |

### Origen permitido

El valor de `--rc-allow-origin` debe coincidir con la URL desde la que tu navegador carga el panel.

Ejemplos:

| URL de acceso | `--rc-allow-origin` correspondiente |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[tu_ip_servidor]:5572` | `http://[tu_ip_servidor]:5572` |
| `https://[tu_dominio]` | `https://[tu_dominio]` |

Si no coinciden, el navegador puede bloquear las solicitudes y el panel puede no cargar correctamente.

## Iniciar y verificar el panel

Una vez que tu comando esté en ejecución, abre la dirección configurada en tu navegador.

### Qué esperar

Si la configuración es correcta, deberías ver la interfaz de Yet Another Rclone Dashboard y poder conectarte a tu demonio Rclone configurado.

Ejemplos típicos:

| Escenario | URL |
|---|---|
| Acceso local Linux o Windows | `http://127.0.0.1:5572` |
| Acceso remoto por IP | `http://[tu_ip_servidor]:5572` |
| Acceso vía proxy inverso | `https://[tu_dominio]` |

### Pasos básicos de verificación

1. Inicia `rclone rcd` con el método elegido.
2. Abre la URL del panel en tu navegador.
3. Inicia sesión si la autenticación está habilitada.
4. Confirma que los remotos, funciones del explorador o información de estado son visibles.
5. Prueba una acción simple de lectura, como abrir un directorio.

## Solución de problemas

Si el panel no carga o no se conecta correctamente, revisa las siguientes causas comunes.

### Conexión rechazada

Si recibes un error de conexión rechazada, verifica:

- Que `rclone rcd` esté realmente en ejecución
- Que se use el puerto correcto `5572`
- Que el servicio escuche en la interfaz esperada
- Que tu firewall permita acceso entrante si es necesario

### Problemas con origen del navegador o inicio de sesión

Si la página carga pero las solicitudes API fallan:

- Verifica `--rc-allow-origin`
- Confirma que la URL del navegador coincide exactamente con el origen permitido
- Verifica `--rc-user` y `--rc-pass`
- Asegúrate de que tu proxy inverso reenvíe las solicitudes correctamente

### Problemas con la ruta de archivos

Si usas `--rc-files` y la interfaz no aparece:

- Confirma que los archivos extraídos del panel están en el directorio correcto
- Verifica la sintaxis de la ruta para Linux o Windows
- Asegúrate de que el contenido del archivo fue extraído, no solo descargado

:::tip Revisa la salida de la consola de Rclone
Rclone suele imprimir información útil de inicio y errores directamente en la terminal. Revisa esa salida primero si el panel, `rclone download` o funciones del explorador remoto no funcionan como esperas.
:::

## Recomendaciones de seguridad

Un panel que controla Rclone puede acceder a remotos configurados y operaciones de archivos, por lo que la seguridad es importante.

| Recomendación | Motivo |
|---|---|
| Usa autenticación para acceso remoto | Protege la API de Rclone |
| Enlaza a `127.0.0.1` cuando sea posible | Reduce la exposición |
| Usa HTTPS detrás de un proxy inverso | Protege credenciales en tránsito |
| Limita la exposición del firewall | Reduce la superficie de ataque |
| Usa credenciales fuertes | Previene accesos no autorizados |

:::caution Remotos sensibles
Si tu configuración de Rclone incluye almacenamiento en la nube como Google Drive, exponer el panel sin seguridad también puede exponer el acceso a esos remotos y datos.
:::

## Información adicional del proyecto

El proyecto está publicado en GitHub y fue destacado en Self-Host Weekly el 10 de abril de 2026.

| Ítem | Valor |
|---|---|
| Nombre del proyecto | Yet Another Rclone Dashboard |
| Categoría | Frontend |
| Fuente | [Repositorio GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Destacado semanal | [Self-Host Weekly (10 abril 2026)](https://selfh.st/weekly/2026-04-10/) |
| Versión verificada del material fuente | `v0.3.8` |

## Conclusión

Felicitaciones, has configurado con éxito Yet Another Rclone Dashboard en Linux o Windows. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂