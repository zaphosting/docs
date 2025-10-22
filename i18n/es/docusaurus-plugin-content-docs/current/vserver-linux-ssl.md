---
id: vserver-linux-ssl
title: "VPS: Crear certificado SSL (Let's Encrypt) para servidor Linux"
description: "Descubre cómo asegurar tu sitio web con certificados SSL gratuitos usando Certbot y Let's Encrypt para una transmisión de datos segura → Aprende más ahora"
sidebar_label: Instalar certificado SSL (Let's Encrypt)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los certificados SSL son una parte esencial de internet, asegurando que los datos se transmitan de forma segura entre el cliente y el host. En esta guía, exploraremos el proceso para configurar la herramienta de código abierto [**Certbot**](https://certbot.eff.org/) para solicitar certificados SSL gratuitos de la autoridad certificadora sin fines de lucro **Let's Encrypt**.

<InlineVoucher />

## Preparación

Para usar Certbot, necesitarás un servidor Linux y un **dominio** que poseas. Debes tener acceso a la configuración DNS del dominio y **debes** crear un registro DNS `A` apuntando a la dirección IP de tu __servidor Linux__ para cada dominio raíz o subdominio que planees usar.

Certbot también tiene plugins adicionales que te permiten configurar un certificado para un dominio con un solo clic, compatible con varios servidores web como Nginx o Apache. Recomendamos usar Nginx, ya que es un servidor web open-source muy popular y de alto rendimiento. Consulta nuestra [guía de proxy inverso en Linux](vserver-linux-proxy.md) para ayudarte con esta configuración.

## Instalación

Comienza instalando el paquete de código abierto [**Certbot**](https://certbot.eff.org/), que usarás para solicitar certificados SSL gratuitos de **Let's Encrypt**.

```
sudo apt install certbot
```

Con Certbot instalado, puedes proceder a solicitar certificados para tu(s) dominio(s). Let's Encrypt y Certbot ofrecen varios desafíos ACME para verificar la propiedad del dominio.

Recomendamos usar el método predeterminado **HTTP-01** porque permite la renovación automática. Sin embargo, si tienes problemas con este método, puedes intentar usar el método **DNS-01** como alternativa, que es manual y no soporta renovaciones automáticas ya que depende de verificar mediante un registro DNS **TXT**.

:::tip Usa plugins para servidores web
Si usas un servidor web como Nginx, Apache o tu propio servidor, te recomendamos ir a la sección **Plugins para servidores web** más abajo, donde mostramos cómo usar plugins adicionales de Certbot para estos servidores y así aprovechar una instalación con un solo clic y solicitar certificados sin necesidad de apagar el servidor web.
:::

### Desafío HTTP-01

Con Certbot instalado, ahora puedes solicitar certificados para tu(s) dominio(s). En este ejemplo, usaremos el modo standalone, lo que significa que Certbot iniciará un servidor web temporal para realizar las acciones necesarias. Esto implica que debes abrir el puerto 80 en las reglas de tu firewall y no tener ningún servidor web o servicio corriendo en el puerto 80 para permitir que el servidor temporal se inicie y que el desafío pueda ser obtenido (de ahí el `HTTP` en el nombre del desafío).

En el siguiente comando, usarás el parámetro `--standalone` para indicarle a Certbot que quieres usar la opción de servidor web temporal.

```
# Para dominios raíz
certbot certonly --standalone -d [tu_dominio_raiz] -d www.[tu_dominio_raiz]

# Para subdominios
certbot certonly --standalone -d [tu_dominio]

# Configuración interactiva
certbot certonly --standalone
```

Al ejecutar el comando, puede que debas seguir una configuración interactiva inicial que te pedirá ingresar un correo electrónico para comunicaciones del certificado, seguido de una lista de correo opcional y los términos y condiciones que debes aceptar.

Certbot generará un desafío ACME y lo alojará usando el servidor web temporal. Los servidores de Let's Encrypt intentarán obtenerlo desde tu servidor y, si tiene éxito, los certificados se crearán y guardarán en la ruta `/etc/letsencrypt/live/[tu_dominio]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Ahora puedes usar los certificados SSL donde los necesites simplemente proporcionando la ruta local a los certificados.

### Registro DNS TXT

Si tienes dificultades para verificar tu dominio mediante el método **HTTP-01**, como alternativa puedes usar el método **DNS-01**, que implica crear un registro DNS **TXT** con un valor proporcionado por Let's Encrypt.

Como se mencionó antes, este método **no** soporta renovación automática a menos que configures tu propia infraestructura para gestionarlo. Por eso, recomendamos usar el método **HTTP-01** siempre que sea posible.

En el siguiente comando, usarás el parámetro `--preferred-challenges` para indicarle a Certbot que quieres usar el método `DNS-01`.

```
# Para dominios raíz
certbot certonly --preferred-challenges dns-01 -d [tu_dominio_raiz] -d www.[tu_dominio_raiz] --manual -m [tu_dominio_raiz] -m www.[tu_dominio_raiz]

# Para subdominios
certbot certonly --preferred-challenges dns-01 -d [tu_dominio] --manual -m [tu_dominio]

# Configuración interactiva
certbot certonly --preferred-challenges dns-01
```

Al ejecutar el comando, puede que debas seguir una configuración interactiva inicial que te pedirá ingresar un correo electrónico para comunicaciones del certificado, seguido de una lista de correo opcional y los términos y condiciones que debes aceptar.

Certbot te dará instrucciones para crear un registro DNS **TXT** con un valor específico que debes usar. El objetivo normalmente será `_acme-challenge.` seguido de tu dominio (en este ejemplo, sería `_acme-challenge.zapdocs.example.com`) y el valor que debe tener se mostrará en la consola.

Una vez creado el registro, presiona enter para continuar. Si todo está correcto y propagado, los certificados se crearán y guardarán en la ruta `/etc/letsencrypt/live/[tu_dominio]`.

:::note
Ten paciencia, ya que los cambios en los registros DNS pueden tardar un poco en propagarse. Normalmente ocurre en minutos, pero en casos raros puede tardar más.
:::

Ahora puedes usar los certificados SSL donde los necesites simplemente proporcionando la ruta local a los certificados.

## Plugins para servidores web

Certbot incluye varios plugins adicionales para servidores web que facilitan aún más la gestión de certificados, ya que los plugins editan automáticamente los bloques de servidor relevantes. Para usar un plugin, solo tienes que añadir el parámetro correspondiente a tu comando `certbot`.

Ambos métodos usan el desafío **HTTP-01** y funcionan de manera similar. Cuando usas uno de los plugins, Certbot busca el bloque de servidor que incluye el dominio solicitado como parámetro `server_name`. Una vez encontrado, Certbot genera un desafío ACME y añade un bloque temporal `location /.well-known/acme-challenge/...` en la configuración del bloque de servidor.

Los servidores de Let's Encrypt intentarán obtener este desafío desde tu servidor y, si tiene éxito, tu certificado será generado y la configuración del bloque de servidor para el servidor web seleccionado se editará automáticamente para usar HTTPS (puerto 443) y añadir las rutas al certificado recién generado.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Plugin Nginx

Antes de usar el plugin, asegúrate de que esté instalado.

```
sudo apt install python3-certbot-nginx
```

Para usar el plugin de Nginx, debes usar el parámetro `--nginx` en tu comando así:

```
# Para dominios raíz
certbot --nginx -d [tu_dominio_raiz] -d www.[tu_dominio_raiz]

# Para subdominios
certbot --nginx -d [tu_dominio]

# Configuración interactiva
certbot --nginx
```

:::tip
Si quieres desactivar los ajustes automáticos de bloques de servidor con un solo clic de Certbot, puedes incluir el parámetro `certonly` en el comando, por ejemplo `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Plugin Apache

Antes de usar el plugin, asegúrate de que esté instalado.

```
sudo apt install python3-certbot-apache
```

Para usar el plugin de Apache, debes usar el parámetro `--apache` en tu comando así:

```
# Para dominios raíz
certbot --apache -d [tu_dominio_raiz] -d www.[tu_dominio_raiz]

# Para subdominios
certbot --apache -d [tu_dominio]

# Configuración interactiva
certbot --apache
```

:::tip
Si quieres desactivar los ajustes automáticos de bloques de servidor con un solo clic de Certbot, puedes incluir el parámetro `certonly` en el comando, por ejemplo `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Plugin Webroot

Si usas tu propio servidor web local que no utiliza software tradicional, puede que quieras usar el método webroot para usar tu servidor sin tener que detenerlo.

Para usar el plugin Webroot, debes usar el parámetro `--webroot` en tu comando. También necesitas incluir `-w [ruta_de_tu_servidor_web]` (abreviatura de `--webroot-path`), que es la ruta al directorio raíz de tu servidor web.

```
# Para dominios raíz
certbot --webroot -w [ruta_de_tu_servidor_web] -d [tu_dominio_raiz] -d www.[tu_dominio_raiz]

# Para subdominios
certbot --webroot -w [ruta_de_tu_servidor_web] -d [tu_dominio]

# Configuración interactiva
certbot --webroot -w [ruta_de_tu_servidor_web]
```

:::tip
Una de las ubicaciones más comunes para el webroot es `/var/www/html`. También puedes usar esto para servidores web como Nginx o Apache si quieres usar el servidor sin que se hagan ajustes automáticos en los bloques de servidor como con los plugins nativos.
:::

</TabItem>
</Tabs>

## Renovación automática

En la mayoría de los casos, Certbot debería configurar automáticamente la renovación del certificado usando un cronjob y/o un timer de systemd. Puedes confirmar esto ejecutando el siguiente comando, que usa el parámetro `--dry-run` para probar el proceso.

```
certbot renew --dry-run
```

:::tip
Como se mencionó antes, el método **DNS-01** no soporta renovación automática vía Certbot, a menos que configures tu propia infraestructura para gestionarlo. Por eso, recomendamos usar el método **HTTP-01**.
:::

Esto debería ser exitoso si todo está como se espera. Si quieres ver o modificar la renovación automática, el comando estará en alguna de estas ubicaciones: `/etc/crontab/`, `/etc/cron.*/*` o mediante `systemctl list-timers`.

### Configuración manual de Cronjob

Si por alguna razón la renovación automática no está configurada, puedes añadirla tú mismo con un cronjob. Abre el menú crontab con `crontab -e`. Si es la primera vez que lo haces, te pedirá seleccionar un editor. Elige la primera opción, que debería ser `/bin/nano`.

Con el archivo abierto en nano, añade la siguiente línea para ejecutar la renovación todos los días a las 6am hora local.

```
0 6 * * * certbot renew
```

Guarda el archivo y sal de nano con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

## Conclusión

Has configurado con éxito Certbot para tu(s) dominio(s) usando varios métodos, incluyendo standalone, webroot o mediante plugins, proporcionando a tu sitio web una transmisión de datos segura vía HTTPS. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />