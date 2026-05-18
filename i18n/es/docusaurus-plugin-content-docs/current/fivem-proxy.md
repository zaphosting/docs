---
id: fivem-proxy
title: "FiveM: Configura un Proxy Inverso"
description: "Descubre cómo mejorar la seguridad y fiabilidad de tu servidor de juegos FiveM con una configuración de proxy inverso para una mejor protección DDoS y rendimiento → Aprende más ahora"
sidebar_label: Proxy Inverso
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Un servidor proxy inverso es un servidor que actúa como intermediario entre los usuarios finales (tus jugadores) y tu servidor de juegos FiveM. Esto puede ser muy beneficioso para servidores que reciben ataques DDoS frecuentes, ya que proporciona una capa extra de seguridad y fiabilidad al reducir la visibilidad del host principal y ofrece mitigación adicional.

En esta guía, exploraremos el proceso para configurar un proxy inverso para tu servidor FiveM. Hay dos tipos de proxies inversos en este escenario; el proxy connect que se usa para el endpoint connect y un proxy de servidor que se usa para el endpoint del servidor donde ocurre el proxying directo de TCP/UDP. Ambos pueden configurarse de forma independiente.

<InlineVoucher />

## Preparación

Para configurar un proxy inverso necesitarás un **Servidor Linux** (como un VPS) que alojará tu servidor proxy. En este ejemplo, usaremos Ubuntu como la distro Linux, pero los pasos de instalación deberían ser muy similares para la mayoría de distribuciones Linux.

:::tip Especificaciones recomendadas para VPS
Recomendamos encarecidamente comprar velocidades de red más altas si planeas configurar un proxy de servidor, especialmente si tu servidor tiene muchos jugadores. Esto se debe a que tu VPS estará transmitiendo TCP/UDP en crudo directamente entre el cliente (jugador) y el servidor FiveM. De lo contrario, un servidor con especificaciones base y mínimas mejoras debería ser suficiente. :)
:::

También recomendamos configurar el proxy con un **Dominio** que poseas. Debes crear un registro `A` en el dominio que desees usar (por ejemplo `zapdocs.example.com`), apuntándolo a la dirección IP de tu __VPS Linux__. Esto es lo que los jugadores usarán para conectarse al servidor, aunque técnicamente podrías usar la dirección IP de tu servidor proxy si lo prefieres.

### Accediendo al VPS

Con tu VPS Linux listo, tendrás que conectarte a él. Por favor usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) para aprender cómo hacerlo.

### Instalando Nginx

Usarás Nginx para alojar un servidor proxy inverso ya que es un servidor web open-source muy popular y de alto rendimiento.

Ahora que has accedido a tu VPS, usa el siguiente comando para instalar Nginx.

```
sudo apt install nginx
```

Una vez instalado, tendrás que ajustar tu firewall para asegurarte de que el servicio sea accesible desde internet. Para esta guía, usaremos el **Firewall UFW** ya que Nginx se registra como una app, facilitando la configuración. Puedes aprender más sobre el Firewall UFW en nuestra guía de [Consejos de Seguridad Linux](vserver-linux-security-tips.md).

:::note
Si usas otros firewalls (como Iptables), asegúrate de permitir el acceso correspondiente a Nginx, específicamente en los puertos 80 y 443 donde opera el servicio nginx.
:::

Puedes revisar los perfiles de Nginx ejecutando `sudo ufw app list`. En este caso, queremos seleccionar la opción **Nginx Full**, que proporciona acceso HTTP para pruebas y HTTPS para uso en producción.

```
sudo ufw allow 'Nginx Full'
```

Con Nginx ya configurado, intenta acceder a la página desde un navegador para asegurarte de que funciona correctamente. Si la página de prueba carga como se espera, puedes continuar con la guía.

```
http://[tu_ip_servidor]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Proxy Connect

Un proxy connect se usa para hacer proxy del endpoint connect de tu servidor FiveM. En esencia, esto significa que tu servidor proxy será responsable de recibir las solicitudes del endpoint connect y pasarlas a tu servidor FiveM principal. Esto ofrece una gran ventaja al ocultar la verdadera dirección IP del host FiveM en la lista de servidores, reduciendo su visibilidad.

### Configuración de Nginx

Comienza creando una entrada dentro del directorio de Nginx para el host que seleccionaste anteriormente durante la configuración del dominio. En este ejemplo, usaremos `zapdocs.example.com` como antes.

Usa el siguiente comando para crear el bloque de servidor para tu dominio, reemplazando `[your_domain]` por el tuyo.

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Ahora copia la siguiente plantilla en tu editor y ajústala con tus valores.

```
upstream backend {
    # Dirección IP del servidor FiveM
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # Por ejemplo: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Necesario para pasar correctamente los headers de autenticación
        proxy_pass_request_headers on;
        # Necesario para que las conexiones no se cierren instantáneamente
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Bloque extra para un proxy con caché
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

Con todos los valores adaptados a tu configuración, guarda el archivo y sal de nano usando `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

Ahora necesitas activar el archivo del bloque de servidor creando un enlace simbólico en el directorio activo.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Para asegurarte de que todo está correcto, especialmente la sintaxis, puedes usar `sudo nginx -t` para ver si hay errores. Si el resultado es exitoso, el último paso es reiniciar Nginx para aplicar el nuevo bloque de servidor.

```
systemctl reload nginx.service
```

Con el servicio reiniciado, deberías probar acceder al dominio que usaste para el proxy inverso desde tu navegador. Si todo va bien, la página debería cargar el contenido deseado que configuraste como el parámetro `targetServer`. Si tienes problemas, te recomendamos revisar los logs para solucionar errores con `journalctl -f -u nginx.service`.

### Configuración de FiveM

Con el proxy ya configurado, tendrás que ajustar algunos valores en el archivo `server.cfg` de tu servidor FiveM.

Agrega el siguiente contenido en la configuración, reemplazando los valores por los de tu setup.

```
# Evita que la lista de servidores anuncie tu servidor usando su IP real
set sv_forceIndirectListing true

# Hace que la lista de servidores solicite tu dominio en lugar del valor por defecto (ejemplo: zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# Lista separada por espacios de redes IPv4 en notación CIDR para permitir 'X-Real-IP' y evitar limitador de tasa
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# El endpoint real donde está alojado tu servidor, o uno o varios proxies de endpoint de servidor
set sv_endpoints "[your_fivem_serverip]:30120"
```

Guarda el archivo y reinicia el servidor. La próxima vez que se inicie, tu dominio debería resolver hacia tu servidor FiveM, permitiendo que se use para conectar.

Puedes verificar que todo funciona intentando acceder a: `https://[your_domain]/info.json`. Si carga correctamente, tu proxy connect está funcionando.

## Proxy de Servidor

Un proxy de servidor se usa para hacer proxy del endpoint del servidor a tu servidor FiveM, que hace proxy directo de los endpoints y streams TCP/UDP en crudo.

### Configuración de Nginx

Para esto, usarás el módulo **stream** que forma parte de Nginx. Accede y abre el archivo `nginx.conf` usando nano.

```
sudo nano /etc/nginx/nginx.conf
```

Ahora copia el siguiente contenido en el scope raíz, reemplazando los valores por los de tu configuración.

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

Con todos los valores adaptados, guarda el archivo y sal de nano usando `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

Para asegurarte de que todo está correcto, especialmente la sintaxis, usa `sudo nginx -t` para verificar errores. Si es exitoso, reinicia Nginx para aplicar la nueva configuración.

```
systemctl reload nginx.service
```

Con el servicio reiniciado, intenta conectar a tu servidor de juegos a través del dominio del proxy. Si todo va bien, deberías poder conectarte al servidor, específicamente al servidor que configuraste como parámetro `targetServer`. Si tienes problemas, revisa los logs con `journalctl -f -u nginx.service` para identificar posibles errores.

### Configuración de FiveM

Con el proxy ya configurado, tendrás que ajustar un valor en el archivo `server.cfg` de tu servidor FiveM.

:::tip
Si ya configuraste el parámetro `set sv_endpoints` al configurar un Proxy Connect, puedes saltarte este paso.
:::

Agrega la siguiente línea en la configuración, reemplazando el valor por el de tu setup.

```
# El endpoint real donde está alojado tu servidor, o uno o varios proxies de endpoint de servidor
set sv_endpoints "[your_fivem_serverip]:30120"
```

Guarda el archivo y reinicia el servidor. La próxima vez que se inicie, los endpoints TCP/UDP en crudo deberían transmitirse a través de tu proxy inverso.

Puedes verificar esto analizando la dirección IP de los jugadores, que debería ser la dirección IP de tu servidor proxy seguida de puertos asignados aleatoriamente.

## Certificado SSL

Con tu proxy inverso FiveM ya configurado, recomendamos encarecidamente añadir un Certificado SSL a tus dominios usados para asegurar que el sitio transmita datos de forma segura vía HTTPS.

Consulta nuestra guía de [Instalar Certbot](dedicated-linux-certbot.md), que cubre todo el proceso para solicitar y renovar automáticamente certificados SSL para tu(s) dominio(s).

## Conclusión

¡Felicidades! Has configurado con éxito un proxy inverso para tu servidor FiveM, proporcionándote varias mejoras en seguridad, fiabilidad y rendimiento. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible a diario para asistirte! 🙂

<InlineVoucher />