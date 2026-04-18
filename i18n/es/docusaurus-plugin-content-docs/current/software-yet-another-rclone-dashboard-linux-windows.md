---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Configura Yet Another Rclone Dashboard, una moderna GUI y navegador para rclone en Linux y Windows, para gestionar tu daemon de rclone de forma segura -> Aprende más ahora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Yet Another Rclone Dashboard es un panel web moderno para `rclone rcd` que te ofrece una interfaz gráfica para gestionar remotos, explorar archivos y revisar transferencias. En esta guía, aprenderás cómo desplegarlo en Linux o Windows y conectarlo a tu configuración existente de Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de que tu sistema cumple con los requisitos básicos y que Rclone ya está instalado.

### Requisitos

| Componente | Requisito |
| --- | --- |
| Sistema operativo | Linux o Windows |
| Versión de Rclone | Se recomienda `v1.72.0` o superior |
| Método de acceso | Shell local, SSH o RDP |
| Puerto por defecto | `5572/tcp` |
| Opcional | Proxy inverso como Nginx o Caddy |

### Lo que necesitas antes de la instalación

Necesitas lo siguiente:

- Una instalación funcional de [Rclone](https://rclone.org/)
- Al menos un remoto de Rclone configurado si quieres acceder a almacenamiento en la nube como *rclone Google Drive*
- Acceso para abrir o redirigir el puerto `5572` si quieres conectarte de forma remota
- Un navegador para acceder al panel

:::info Requisito de Rclone
Yet Another Rclone Dashboard es solo un frontend para `rclone rcd`. No reemplaza a Rclone, por lo que debes instalar y configurar Rclone primero.
:::

### Marcadores de posición importantes usados en esta guía

Los comandos a continuación usan marcadores de posición que debes reemplazar con tus propios valores.

| Marcador de posición | Significado |
| --- | --- |
| `[your_dashboard_path]` | Ruta donde se almacenan los archivos del panel |
| `[your_server_ip]` | Dirección IP pública o privada de tu servidor |
| `[your_domain]` | Nombre de dominio usado para acceso vía proxy inverso |
| `[your_rc_user]` | Nombre de usuario para autenticación RC de Rclone |
| `[your_rc_password]` | Contraseña para autenticación RC de Rclone |

## Acerca de Yet Another Rclone Dashboard

Yet Another Rclone Dashboard es un frontend web estático publicado en [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard). Según el README del proyecto, está diseñado para `rclone rcd` y soporta funciones como:

- conexión a Rclone en modo daemon
- gestión de múltiples perfiles de conexión
- inspección de información y estado del sistema
- exploración de directorios
- trabajo con remotos y datos de configuración

Como es un frontend, las operaciones reales de archivos las sigue manejando Rclone. Esto significa que el panel depende de una instancia activa de `rclone rcd`.

## Métodos de Instalación

Puedes desplegar el panel de varias formas según cómo quieras acceder a él. Los métodos más comunes son usar Rclone directamente con archivos estáticos o dejar que Rclone obtenga la GUI web automáticamente.

### Resumen de instalación

| Método | Ideal para | Notas |
| --- | --- | --- |
| `--rc-files` | Despliegues manuales | Descargas y extraes el panel tú mismo |
| `--rc-web-gui` con `--rc-web-fetch-url` | Configuración rápida | Rclone descarga la última versión del panel |
| Servidor web externo | Hosting personalizado | Útil con Nginx o Caddy |
| Proxy inverso con gateway de autenticación | Configuraciones avanzadas | Mejor para acceso remoto seguro |

## Descargar el Panel Manualmente

Si quieres control total sobre la versión desplegada, puedes descargar la última versión manualmente desde los releases en GitHub del proyecto.

### Linux

Crea un directorio para el panel, descarga el archivo de la última versión y extráelo.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

En Windows, descarga el archivo de la versión desde la página oficial de releases en GitHub y extráelo en una carpeta como:

```text
C:\rclone-dashboard
```

:::note Versión del Release
Al momento de escribir, la última versión verificada es `v0.3.8`. Si hay una versión más reciente, puedes usar esa en su lugar.
:::

## Iniciar el Panel con Rclone

Una vez que los archivos estén disponibles, puedes iniciar `rclone rcd` y servir el panel a través de Rclone.

### Acceso local en Linux

Usa este método si solo quieres acceder al panel localmente en el mismo sistema.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Acceso remoto en Linux

Usa este método si quieres acceder al panel desde otro dispositivo en la red.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Acceso local en Windows

Abre el Símbolo del sistema o PowerShell y ejecuta:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Acceso remoto en Windows

Para acceso remoto, ejecuta:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution No expongas una GUI de Rclone sin protección
Si enlazas Rclone a `0.0.0.0`, no uses `--rc-no-auth`. Siempre protege el acceso remoto con autenticación o un proxy inverso.
:::

## Usar el Descargador WebGUI de Rclone

Rclone también puede descargar el panel automáticamente desde GitHub. Esto es útil si no quieres descargar y extraer los archivos manualmente.

### Modo local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Modo remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Actualizaciones automáticas
Este método es conveniente si quieres que Rclone descargue automáticamente la última versión del panel. Suele ser la opción más rápida para probar un nuevo despliegue de GUI de rclone.
:::

## Servir el Panel con un Servidor Web

Como Yet Another Rclone Dashboard es un frontend estático, también puedes alojarlo con un servidor web estándar y mantener `rclone rcd` corriendo en segundo plano.

### Ejemplo con Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Ejemplo con Caddy

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

Este método es útil si ya usas un proxy inverso o quieres un acceso más limpio basado en dominio para tu app del panel.

## Configuración Avanzada de Proxy Inverso

Si quieres asegurar el acceso mediante una capa externa de autenticación, puedes usar un proxy inverso delante de Rclone y reenviar el usuario autenticado mediante un encabezado.

### Comando Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Ejemplo Caddy con encabezado de usuario reenviado

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Autenticación avanzada
La implementación exacta del gateway de autenticación depende de tu entorno. El ejemplo anterior solo muestra el patrón de integración entre Rclone y el proxy inverso. Si usas software adicional como un proveedor de identidad o un plugin de Caddy, configúralo según la documentación oficial de ese software.
:::

## Referencia de Configuración

Las opciones RC de Rclone más importantes usadas con este panel se listan a continuación.

| Opción | Propósito |
| --- | --- |
| `--rc-files` | Sirve los archivos extraídos del panel |
| `--rc-web-gui` | Habilita soporte para Rclone WebGUI |
| `--rc-web-fetch-url` | Descarga metadatos del release del panel desde GitHub |
| `--rc-no-auth` | Desactiva autenticación, solo para uso local |
| `--rc-user` | Define el usuario RC de Rclone |
| `--rc-pass` | Define la contraseña RC de Rclone |
| `--rc-addr` | Define la dirección y puerto de escucha |
| `--rc-allow-origin` | Permite acceso desde el URL especificado en el navegador |
| `--rc-web-gui-no-open-browser` | Evita abrir el navegador automáticamente |
| `--rc-user-from-header` | Acepta usuario autenticado desde un encabezado proxy |

### Elegir el `--rc-allow-origin` correcto

Configura `--rc-allow-origin` con la URL exacta que usas en tu navegador.

| Tipo de acceso | Valor de ejemplo |
| --- | --- |
| Acceso local | `http://127.0.0.1:5572` |
| Acceso remoto por IP | `http://[your_server_ip]:5572` |
| Proxy inverso con HTTPS | `https://[your_domain]` |

:::caution El origen debe coincidir
Si `--rc-allow-origin` no coincide con la URL usada en tu navegador, el panel puede no cargarse correctamente debido a restricciones de seguridad del navegador.
:::

## Acceder y Verificar el Panel

Una vez que `rclone rcd` esté corriendo, abre el panel en tu navegador.

### URLs comunes de acceso

| Escenario | URL |
| --- | --- |
| Máquina local | `http://127.0.0.1:5572` |
| Remoto por IP | `http://[your_server_ip]:5572` |
| Proxy inverso | `https://[your_domain]` |

### Qué verificar después de iniciar

Después de abrir la página, verifica lo siguiente:

- que la interfaz de Yet Another Rclone Dashboard cargue
- que tus remotos configurados sean visibles
- que la exploración de archivos funcione en la vista del navegador de Rclone
- que los paneles de transferencia e información del sistema respondan correctamente

Si la página no carga, revisa primero la salida de la consola de Rclone. Los errores de autenticación, desajustes de origen y problemas de enlace de puerto son las causas más comunes.

## Recomendaciones de Seguridad

Ejecutar un panel para tu almacenamiento en la nube requiere configuraciones de seguridad cuidadosas, especialmente si lo expones por internet.

### Prácticas recomendadas de seguridad

| Recomendación | Razón |
| --- | --- |
| Usa `--rc-user` y `--rc-pass` para acceso remoto | Evita accesos no autenticados |
| Prefiere HTTPS mediante proxy inverso | Protege credenciales en tránsito |
| Enlaza a `127.0.0.1` cuando sea posible | Reduce exposición |
| Restringe acceso firewall a `5572/tcp` | Limita la superficie de ataque |
| Evita `--rc-no-auth` en redes públicas | Previene acceso abierto a tu instancia Rclone |

:::danger Riesgo de exposición pública
Una instancia `rclone rcd` expuesta y sin protección puede permitir acceso a tus remotos y archivos configurados. Si te preguntas "¿es seguro rclone?", la respuesta depende mucho de qué tan seguro expongas y autentiques el servicio.
:::

## Solución de Problemas

Si el panel no funciona como esperas, usa las siguientes comprobaciones.

### La página del panel no se abre

Posibles causas:

- `rclone rcd` no está corriendo
- el puerto `5572` está bloqueado por un firewall
- el servicio está enlazado a `127.0.0.1` pero intentas conectar remotamente

### La interfaz carga pero las acciones fallan

Posibles causas:

- `--rc-user` o `--rc-pass` inválidos
- `--rc-allow-origin` incorrecto
- configuración del remoto Rclone ausente o dañada

### El panel no carga a través de un proxy inverso

Posibles causas:

- el proxy apunta al backend incorrecto
- la URL HTTPS no coincide con `--rc-allow-origin`
- los encabezados requeridos no se pasan correctamente

### Comprobaciones útiles

Linux:

```bash
ss -tulpn | grep 5572
```

Windows PowerShell:

```powershell
netstat -ano | findstr 5572
```

Prueba el endpoint local:

```bash
curl http://127.0.0.1:5572
```

:::tip Revisa primero los logs de Rclone
La mayoría de problemas de inicio y conexión se ven directamente en la terminal o logs del servicio donde corre `rclone rcd`. Siempre revisa esos logs antes de cambiar tu configuración.
:::

## Notas Adicionales

Yet Another Rclone Dashboard fue destacado en Self-Host Weekly el 10 de abril de 2026 y está alojado públicamente en GitHub. Al momento de escribir, el proyecto es una solución enfocada en frontend para mejorar la experiencia de gestionar Rclone mediante un panel basado en navegador.

Algunos métodos de despliegue como Docker pueden ser posibles en entornos personalizados, pero no se encontraron instrucciones verificadas para Docker en el material fuente proporcionado. Por eso, esta guía solo cubre métodos de configuración directamente soportados por la información disponible del proyecto.

## Conclusión

Felicidades, has instalado y configurado con éxito Yet Another Rclone Dashboard en Linux o Windows. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible a diario para ayudarte!