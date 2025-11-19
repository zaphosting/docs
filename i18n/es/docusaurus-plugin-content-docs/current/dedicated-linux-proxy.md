---
id: dedicated-linux-proxy
title: "Servidor Dedicado: Configura un Reverse Proxy con nginx en Linux"
description: "Descubre cómo configurar un reverse proxy seguro y eficiente para sitios web y servidores de juegos para mejorar el acceso y la protección → Aprende más ahora"
sidebar_label: Reverse Proxy
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Un servidor reverse proxy es un servidor que actúa como intermediario entre los usuarios finales y otro servidor. Los sitios web y los servidores de juegos son razones populares para implementar un reverse proxy, cada uno con sus propias ventajas, incluyendo seguridad, facilidad de acceso y protección.

En esta guía, exploraremos el proceso de configurar un reverse proxy de propósito general para sitios web, así como uno adaptado a servidores de juegos.

## Preparación

Para configurar un reverse proxy necesitarás un **Servidor Linux** que alojará tu servidor proxy. En este ejemplo, usaremos Ubuntu como la distro Linux, pero los pasos de instalación deberían ser muy similares para la mayoría de distribuciones Linux.

:::tip Especificaciones recomendadas para VPS
Para un reverse proxy orientado a servidores de juegos, recomendamos encarecidamente comprar velocidades de red más altas, especialmente si tu servidor tiene muchos jugadores. Esto se debe a que tu VPS estará transmitiendo TCP/UDP en crudo directamente entre el cliente (jugador) y el servidor de juegos. De lo contrario, un servidor con especificaciones base y mínimas mejoras debería ser suficiente para un proxy relacionado con web. :)
:::

Recomendamos configurar el proxy con un **Dominio** que poseas. Para cada subdominio que planees usar, deberías crear un registro DNS `A` (por ejemplo `zapdocs.example.com`), apuntándolo a la Dirección IP de tu __VPS Linux__. Esto es lo que los usuarios usarán para acceder a tu sitio web o servidor de juegos.

### Accediendo al VPS

Con tu VPS Linux listo, tendrás que conectarte a él. Por favor usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) para aprender cómo hacerlo.

### Instalando Nginx

Usarás Nginx para alojar un servidor reverse proxy ya que es un servidor web open-source muy popular y de alto rendimiento.

Ahora que has accedido a tu VPS, usa el siguiente comando para instalar Nginx.

```
sudo apt install nginx
```

Una vez instalado, tendrás que ajustar tu firewall para asegurarte de que el servicio sea accesible desde internet. Para esta guía, usaremos el **Firewall UFW** ya que Nginx se registra como una app, facilitando el ajuste de configuraciones. Puedes aprender más sobre el Firewall UFW usando nuestra guía de [Consejos de Seguridad Linux](vserver-linux-security-tips.md).

:::note
Si usas otros firewalls (como Iptables), asegúrate de dar acceso relevante al firewall para Nginx, específicamente en los puertos 80 y 443 donde opera el servicio nginx.
:::

Puedes revisar los perfiles de Nginx ejecutando `sudo ufw app list`. En este caso, queremos seleccionar la opción **Nginx Full**, que dará acceso a HTTP para pruebas y HTTPS para uso en producción.

```
sudo ufw allow 'Nginx Full'
```

Con Nginx ya configurado, intenta acceder a la página vía navegador para asegurarte de que funciona como esperas. Si la página de prueba funciona, puedes continuar con la guía.

```
http://[tu_ip_del_servidor]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Para Sitios Web

Un reverse proxy para sitios web puede ser muy beneficioso por varias razones, incluyendo redirigir a recursos internos del servidor, como una instancia de vaultwarden (sin necesidad de incluir el puerto en la URL), o reenviar al usuario a contenido externo, lo cual es útil para balanceo de carga y protección.

Una de las mayores ventajas es que tu servidor puede manejar solicitudes desde tantas fuentes/dominios como necesites, a diferencia de un único servidor web corriendo en el puerto 80/443.

### Configuración de Nginx

Comienza creando una entrada dentro del directorio de Nginx para el dominio que seleccionaste antes, que típicamente será un subdominio como `zapdocs.example.com` en nuestro ejemplo.

:::important
Asegúrate de configurar un registro `A` apuntando a la Dirección IP de tu servidor proxy antes de continuar. Sin esto, el dominio y cualquier paso posterior no funcionarán como esperas.
:::

Accede a la carpeta de bloques de servidor con el siguiente comando. Aquí almacenarás todas tus configuraciones de proxy.

```
cd /etc/nginx/sites-available/
```

Ahora usa el siguiente comando para crear un nuevo archivo de configuración. Recomendamos usar el dominio como nombre del archivo para facilitar su identificación (ej. zapdocs.example.com). Reemplaza `[your_filename]` con el nombre de archivo que quieras usar.

```
sudo nano [your_filename]
```

Esto abrirá el editor nano, que te permitirá ingresar contenido. Copia la siguiente plantilla en el editor. Debes ajustar `[your_domain]` con el dominio que quieres proxyar seguido de `[your_target_server]` para el servidor destino al que quieres llegar.

```
upstream targetServer {
    # Añade el servidor destino al que quieres llegar. Puede ser:
    # Redirección interna "localhost" (ej. 127.0.0.1:9090)
    # Servidor externo (ej. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Dominio que debe ser manejado (ej. zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

Con todos los valores adaptados a tu configuración, guarda el archivo y sal de nano usando `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

Ahora necesitas activar el archivo del bloque de servidor creando un enlace simbólico al directorio activo.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Para asegurarte de que todo está correcto, especialmente la sintaxis, puedes usar `sudo nginx -t` para ver si hay errores. Si devuelve éxito, el último paso es reiniciar Nginx para que el nuevo bloque de servidor entre en efecto.

```
systemctl reload nginx.service
```

Con el servicio reiniciado, ahora deberías probar acceder al dominio que usaste para el reverse proxy en tu navegador. Si todo va bien, la página debería cargar el contenido deseado que configuraste como parámetro `targetServer`. Si tienes problemas, recomendamos revisar los logs para solucionar usando `journalctl -f -u nginx.service` para identificar posibles errores.

## Para Servidores de Juegos

Un reverse proxy para servidores de juegos puede ser muy beneficioso por varias razones, incluyendo proporcionar una capa extra de seguridad y fiabilidad mejorando la mitigación y restringiendo el acceso al host principal.

:::tip
La mayoría de servidores dedicados de juegos deberían funcionar perfectamente con un proxy de endpoint TCP/UDP en crudo que vas a configurar. Sin embargo, una pequeña minoría de juegos como BeamMP puede no funcionar bien con VPNs y proxies, así que tendrás que probarlo caso por caso.
:::

### Configuración de Nginx

Esto requiere el módulo **Nginx Stream**, que no forma parte de una instalación estándar de Nginx.

#### Instalar módulo Nginx stream

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Configuración de Nginx stream

Vas a añadir un nuevo bloque `stream` al archivo principal `nginx.conf` donde definirás el servidor upstream y el puerto por el que se accederá en tu proxy.

Simplemente abre el archivo con el siguiente comando.

```
sudo nano /etc/nginx/nginx.conf
```

Ahora copia en este archivo la siguiente plantilla que añade un nuevo bloque `stream`. Debes reemplazar `[your_target_server]` con el servidor al que quieres hacer streaming, incluyendo el puerto relevante (como `:30120` para FiveM). De igual forma, reemplaza `[your_port_listener]` con el puerto por el que quieres que la gente acceda a tu contenido vía el servidor proxy.

```
stream {
    upstream targetServer {
        # Añade el servidor destino al que quieres llegar (ej. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Puerto que escucha y puentea conexiones (ej. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

En esencia, Nginx escuchará en el puerto específico para conexiones entrantes y transmitirá todo al servidor destino que definiste (desde tu servidor proxy hacia tu servidor real de juegos).

Con todos los valores adaptados a tu configuración, guarda el archivo y sal de nano usando `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

Para asegurarte de que todo está correcto, especialmente la sintaxis, puedes usar `sudo nginx -t` para ver si hay errores. Si devuelve éxito, el último paso es reiniciar Nginx para que la nueva configuración entre en efecto.

```
systemctl reload nginx.service
```

Con el servicio reiniciado, intenta conectarte a tu servidor de juegos vía el dominio proxy. Si todo va bien, deberías poder conectarte al servidor de juegos, específicamente al servidor que configuraste como parámetro `targetServer`. Si tienes problemas, recomendamos revisar los logs para solucionar usando `journalctl -f -u nginx.service` para identificar posibles errores.

## Certificado SSL

Con tu reverse proxy configurado, recomendamos encarecidamente añadir un Certificado SSL a tus dominios usados para asegurar que el sitio transmita datos de forma segura vía HTTPS. Por favor revisa nuestra guía de [Instalar Certbot](dedicated-linux-certbot.md), que cubre todo el proceso de solicitar y renovar automáticamente Certificados SSL para tu(s) dominio(s).

## Conclusión

¡Felicidades! Has configurado con éxito un reverse proxy para un sitio web o tu servidor de juegos (o ambos :), dándote varias mejoras en seguridad, fiabilidad y rendimiento. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible a diario para asistirte! 🙂