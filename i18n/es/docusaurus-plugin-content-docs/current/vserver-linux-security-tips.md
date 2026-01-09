---
id: vserver-linux-security-tips
title: "VPS: Consejos de Seguridad para Linux"
description: "Descubre cómo mejorar la seguridad de tu servidor Linux con consejos esenciales para evitar accesos no autorizados y proteger tus servicios → Aprende más ahora"
sidebar_label: Consejos de Seguridad
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Esta guía contiene algunos consejos y recomendaciones para hacer tu servidor Linux más seguro. Especialmente porque los servidores (virtuales) deben ser accesibles desde el exterior, una protección básica contra accesos no deseados es definitivamente recomendable y no debe ser descuidada.

:::info
Ten en cuenta que estas instrucciones no son exhaustivas y que puedes encontrar información más detallada en otras secciones de la documentación de ZAP. (por ejemplo, [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
La forma más fácil de proteger tu servidor es siempre la misma, sin importar el servidor: usa contraseñas seguras, actualiza tus servicios regularmente y presta atención a qué servicios instalas y qué guías sigues.
:::

<InlineVoucher />

## Asegurando SSH

SSH (Secure Shell) es un servicio que te permite acceder remotamente a la consola de tu servidor para ejecutar comandos. Aquí puedes ver cómo configurar SSH en tu servidor: [Acceso inicial (SSH)](vserver-linux-ssh.md)

Por defecto, SSH usa un inicio de sesión basado en contraseña. Sin embargo, esto tiene la gran desventaja de que la autenticación puede ser vulnerada relativamente fácil mediante un ataque de fuerza bruta, especialmente si usas una contraseña demasiado simple para tu acceso SSH. Así que si decides usar la solución de contraseña, por favor usa una contraseña **segura**.

Para proteger aún mejor tu servidor contra accesos SSH no deseados, deberías habilitar la autenticación exclusivamente vía claves SSH y desactivar el inicio de sesión por contraseña. Echa un vistazo a la guía de [Clave SSH](vserver-linux-sshkey.md), que explica cómo generar y añadir claves SSH.

## Configuración de puertos de tus servicios

| Servicio | Puerto |
|----------|--------|
| SSH      | 22     |
| FTP      | 21     |
| Mail     | 25     |
| DNS      | 53     |
| HTTP     | 80     |
| HTTPS    | 443    |

Servicios como SSH o FTP siempre usan los mismos puertos por defecto (algunos listados en la tabla arriba). Si un actor malicioso externo quiere hacer fuerza bruta al servicio SSH de tu servidor, primero debe saber qué puerto se usa para acceder a SSH. Si no configuras estos puertos de forma diferente, entonces los puertos 22 y 21 suelen ser el blanco para ejecutar comandos directamente en el servidor o acceder a archivos vía FTP.

Para evitar esto, recomendamos configurar los puertos de los servicios estándar como personalizados. En la siguiente parte de esta guía puedes descubrir cómo:

:::danger
¡Tu puerto deseado debe estar entre 1024 y 65536 y no debe ser un puerto que ya esté en uso!
:::
Puedes usar `cat /etc/services` para mostrar algunos puertos estándar y evitar elegir uno que ya esté en uso.

### Puerto SSH

Para cambiar el puerto SSH, debes ajustar el archivo de configuración. Normalmente está ubicado en `/etc/ssh/sshd_config` por defecto, pero si no está ahí puedes usar el siguiente comando para encontrarlo.
```
find / -name "sshd_config" 2>/dev/null
```

Ahora abre el archivo usando nano (como root o con *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Añade tu puerto deseado después de `Port`. Si `Port` está comentado (es decir, `#Port 22`), quita el "#" y reemplaza el 22 por tu puerto deseado. Ahora debes guardar el archivo (en Nano con Ctrl + o) y cerrarlo (Nano: Ctrl + x).

![Puerto sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

El servicio SSH debe reiniciarse para que los cambios tengan efecto.
```
# En Ubuntu/Debian/CentOS por ejemplo
sudo systemctl restart sshd
```

### Puerto FTP

Si has instalado un servicio FTP como **proFTPd**, el puerto también puede cambiarse fácilmente editando el archivo de configuración. El procedimiento es similar al del servicio SSH.

Encuentra el archivo de configuración `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

El archivo normalmente está en `/etc/proftpd.conf` (CentOS) o `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Ahora abre el archivo con nano, quita el "#" antes de `port` y escribe tu puerto deseado después. Ten en cuenta la información anterior para no ingresar un puerto inválido.

:::tip
Usa Ctrl + W para buscar en nano.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Puerto proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Uso de un firewall

El principio de accesibilidad externa de un servidor es siempre el mismo: un puerto debe estar abierto para que el servidor sea accesible desde fuera. En el caso de SSH, esto es **por defecto** el puerto 22/TCP. (mira arriba cómo cambiar el puerto por defecto)

El problema es que este puerto ahora es accesible para todos, sin importar quién, desde dónde o con qué intención. Esto representa una gran vulnerabilidad de seguridad, ya que actores maliciosos podrían saturar el servidor con intentos de inicio de sesión para descubrir la contraseña correcta (mediante un ataque de fuerza bruta si aún tienes habilitado el inicio por contraseña) o intentar sobrecargar la red del servidor mediante flooding (por ejemplo, DDoS), que es algo común.

Para reducir estos efectos, puedes aplicar reglas de firewall que restrinjan el acceso a los puertos abiertos.

Hay dos métodos diferentes que puedes usar:
- **IPTables**: Es el firewall original de Linux, por así decirlo. Te ofrece muchas opciones, pero es un poco más complicado de usar.
- **UFW**: Es básicamente una interfaz más sencilla para usar IPTables sin tener que lidiar con comandos complicados, aunque es un poco más restrictivo.

Al final, depende de ti cuál de los dos métodos quieres usar. Según la aplicación, puede que necesites la versatilidad de IPTables, pero a veces UFW es suficiente. (por ejemplo, si solo quieres abrir/cerrar puertos, que ya es mejor que no hacer nada)

### IPTables

En esta sección usarás IPTables para crear varias reglas que limitan el número de intentos de conexión posibles. Las explicaciones de los comandos individuales están debajo del bloque de código.

Ten en cuenta que esta regla solo se activa para **el puerto 22** (el valor después de `--dport`) y los comandos para otros servicios tendrían que adaptarse.

:::note
Los siguientes comandos pueden no funcionar en todas las distribuciones Linux, pero sí en la gran mayoría de las más populares.
:::

Primero, inicia sesión en tu servidor Linux. Si necesitas ayuda, sigue nuestra guía [Acceso inicial (SSH)](vserver-linux-ssh.md) que explica cómo hacerlo. Luego, ejecuta los siguientes comandos en el orden listado.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  La primera regla descarta paquetes si hay más de 2 conexiones en estado `TIME_WAIT` al puerto 22 desde una sola IP.
2.  La segunda regla añade la dirección IP de una conexión nueva a la lista `recent`.
3.  La tercera regla descarta nuevas conexiones de IPs que hayan intentado hacer más de 2 conexiones en el último segundo.

### UFW

Como se describió arriba, UFW es una interfaz "más simple" para IPTables. El primer paso es instalar UFW, ya que por defecto no está incluido en todas las distribuciones Linux. Debes ejecutar los comandos como root o usando *sudo*.

Primero inicia sesión en tu servidor Linux. Si necesitas ayuda, sigue nuestra guía [Acceso inicial (SSH)](vserver-linux-ssh.md), que explica cómo funciona. Las siguientes instrucciones usan Debian y Ubuntu para pruebas, pero deberían funcionar en otras distribuciones Linux también.

Primero actualiza el directorio apt y los servicios existentes.
```
sudo apt update && sudo apt upgrade -y
```

Luego instala UFW vía apt.
```
sudo apt install ufw -y
```

Asegúrate de que la instalación fue exitosa ejecutando:
```
sudo ufw status
> Firewall not loaded
```

Para no bloquearte a ti mismo, primero debes habilitar el servicio ssh antes de activar el firewall.

:::caution
Si ya cambiaste el puerto para SSH, por favor usa el nuevo puerto aquí en lugar del 22.
:::

Usa los siguientes comandos para habilitar el servicio ssh.
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

Una salida exitosa debería verse así:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Ahora ejecuta el siguiente comando, que limita la conexión a 6 por minuto.
```
ufw limit 22/tcp
```

:::note
UFW solo permite limitar el número de conexiones a 6 por minuto. El limitador de UFW es bastante simple y puede no ser adecuado para todas las situaciones. Para una configuración más detallada y flexible, recomendamos usar IPTables directamente.
:::

:::tip
El firewall (ya sea IPTables o UFW) solo puede contar "a ciegas" los intentos de conexión y bloquearlos en consecuencia. Con Fail2Ban es posible revisar archivos de log en busca de anomalías. La siguiente sección describe cómo instalar y activar Fail2Ban.
:::

## Medidas adicionales con Fail2Ban

Fail2Ban es un servicio que bloquea direcciones IP que intentan conectarse al servidor con intenciones probablemente maliciosas. Fail2Ban monitorea algunos archivos de log en busca de anomalías y así protege tu sistema de forma muy efectiva y sencilla.

Después de la instalación, Fail2Ban ya viene con configuraciones predefinidas para algunos servicios muy usados, incluyendo:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Servicios adicionales pueden añadirse simplemente usando expresiones regulares (RegEx) y especificando el archivo de log deseado.

Como ejemplo, veamos una entrada en `/var/log/auth.log`. Este archivo contiene todos los intentos de inicio de sesión SSH, exitosos o fallidos.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Aquí puedes ver la entrada:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban usa este archivo de log y lo monitorea para detectar autenticaciones fallidas. Como el archivo de log contiene directamente la IP del atacante, Fail2Ban puede bloquear esa IP tras unos pocos intentos fallidos.

### Instalación de Fail2Ban

Primero inicia sesión en tu servidor Linux. Si necesitas ayuda, sigue nuestras instrucciones [Acceso inicial (SSH)](vserver-linux-ssh.md), que explican cómo hacerlo. Debes ejecutar los comandos como root o usando *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Después de instalar Fail2Ban, puedes verificar el estado directamente con `systemctl`: (Puedes salir de systemctl con Ctrl+C)
```
systemctl status fail2ban.service
* fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
     Active: active (running) since Sat 2023-12-02 13:10:33 UTC; 24s ago
       Docs: man:fail2ban(1)
    Process: 23988 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, statu>
   Main PID: 23989 (fail2ban-server)
        CPU: 409ms
     CGroup: /system.slice/fail2ban.service
             `-23989 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Starting Fail2Ban Service...
Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Started Fail2Ban Service.
Dec 02 13:10:34 vps-zap515723-1 fail2ban-server[23989]: Server ready
```

### Configuración de Fail2Ban

Fail2Ban ya está instalado, pero aún no activo ni configurado. Mira en `/etc/fail2ban` y verás que actualmente deberían estar estos archivos:
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
Para crear una "jail" activa, debes crear un archivo llamado `jail.local`. Simplemente copia el contenido de `jail.conf` al nuevo archivo y ábrelo:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Ahora puedes hacer todos los ajustes en el archivo `jail.local`, incluyendo los servicios a monitorear.
Solo debes fijarte en la parte después de `[Default]`. La sección Default se usa para hacer ajustes generales/por defecto.

Desplázate un poco hacia abajo en este archivo hasta encontrar esta parte y ajústala así, por ejemplo:

| Atributo      | Explicación                                                                 | Valor       |
|---------------|-----------------------------------------------------------------------------|-------------|
| ignoreip      | Direcciones IP que no deben ser bloqueadas                                  | 127.0.0.1/8 |
| ignorecommand | No relevante.                                                               |             |
| bantime       | Tiempo que una IP debe estar bloqueada                                     | 1h          |
| findtime      | Intervalo de tiempo para contar intentos fallidos                          | 10m         |
| maxretry      | Número de intentos fallidos que causan un bloqueo                          | 5           |

```
# puede definirse usando separador espacio (y/o coma).
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" es el número de segundos que un host está bloqueado.
bantime  = 1h

# Un host es bloqueado si genera "maxretry" durante los últimos "findtime"
# segundos.
findtime  = 10m

# "maxretry" es el número de fallos antes de que un host sea bloqueado.
maxretry = 5
```

Ya terminaste de configurar los ajustes por defecto. Para monitorear el servicio SSH, por ejemplo, baja un poco más hasta la etiqueta `[sshd]`. Ten en cuenta que si modificaste tu puerto, debes ponerlo en `port`.

La etiqueta `[sshd]` se verá así:
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
Como ves, también es posible hacer ajustes individuales para un servicio específico (como aquí con `maxretry` que es menor que el ajuste por defecto). Aunque hiciste los ajustes generales antes, puedes configurar la mayoría de los ajustes para cada servicio por separado. Si no lo haces, se usará la configuración general.
:::

Ahora solo tienes que reiniciar Fail2Ban para empezar a monitorear.
```
sudo systemctl restart fail2ban.service
```

### Verificar el funcionamiento de Fail2Ban

Si tienes acceso a una VPN o un segundo servidor, puedes intentar bloquearte a ti mismo con Fail2Ban para ver si el servicio funciona como esperas. Con una VPN o un hotspot desde tu móvil deberías obtener una IP diferente, lo que te permitirá probar Fail2Ban.

:::danger
No pruebes esto en tu red normal, porque tu propia IP podría ser bloqueada y **te quedarás bloqueado fuera**.
:::

Intenta establecer una conexión SSH a tu servidor (¡con una IP diferente!) e ingresa la contraseña incorrecta cada vez. El resultado debería verse algo así:
```
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
root@185.223.29.xxx: Permission denied (publickey,password).
root@vps-zap515723-2:/var/log# ssh root@185.223.29.179
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
^C
root@vps-zap515723-2:/var/log# ssh root@185.223.29.xxx
ssh: connect to host 185.223.29.xxx port 22: Connection refused
```

Como ves, la conexión a tu servidor protegido por Fail2Ban ahora es rechazada (`Connection refused` en lugar de `Permission denied`).

Ahora muestra el estado de Fail2Ban. Aquí puedes ver que una IP ha sido bloqueada.
```
fail2ban-client status sshd
Status for the jail: sshd
|- Filter
|  |- Currently failed: 4
|  |- Total failed:     8
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   xxx
```

Si quieres desbloquear la IP, puedes hacerlo con el siguiente comando: `fail2ban-client set sshd unbanip {tu IP}`.

:::info
Si tienes un número inusualmente alto de bloqueos de IP, es recomendable aumentar el tiempo de bloqueo con cada intento fallido para reducir la cantidad de intentos posibles.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# El tiempo de bloqueo debería aumentar con cada bloqueo de esta IP
bantime.increment = true
# Factor de escala de 24 horas (1h,24h,48h,3d,4d....)
bantime.factor = 24
# Tiempo máximo de bloqueo = 5 semanas
bantime.maxtime = 5w
```

## Asegurando servidores web usando Cloudflare

Mucha gente usa Cloudflare como gestor DNS de su dominio. Cloudflare no solo tiene una de las redes más grandes del mundo, que ofrece tiempos de carga más bajos, menor latencia y mejor experiencia general, sino que también protege tus sitios web de ataques DoS/DDoS, incluyendo flooding y nuevos tipos de ataques que aparecen cada día.
En esta guía aprenderás cómo proteger tu servidor web de ataques.

Partimos de la base de que tu dominio ya está gestionado por Cloudflare, si no, puedes seguir [su guía](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) para mover tu dominio. Ve a la pestaña de Registros DNS desde el panel de Cloudflare, y asegúrate de que el registro hacia tu servidor web tenga la nube naranja y diga "Proxied".

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Entonces, todo el tráfico que pase por tu dominio irá a través de Cloudflare y de ahí a tu servidor, siendo tráfico legítimo.
Sin embargo, tu servidor sigue siendo accesible desde fuera de Cloudflare, para esto debes limitar el acceso a los puertos 80 y 443 del protocolo TCP de tu servidor Linux, y solo permitir acceso si viene de tráfico legítimo de Cloudflare.

Para eso, puedes limitar manualmente el acceso usando reglas de firewall con la [lista pública IPv4 de Cloudflare](https://cloudflare.com/ips-v4) y la [lista pública IPv6 de Cloudflare](https://cloudflare.com/ips-v6).

Alternativamente, puedes ahorrar tiempo y usar herramientas como [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) para importar rápidamente estas reglas de firewall en masa.
Asegúrate de no tener reglas separadas que permitan acceso sin restricciones a tu servidor web, aparte de las que acabas de añadir, porque si no no funcionarán.

## Conclusión - ¡tu servidor ahora está mucho más seguro que antes!

Esta guía te ha mostrado algunas funciones básicas y avanzadas para asegurar tu servidor Linux. Si has implementado todas las recomendaciones que aplican a tu sistema, tu servidor ya está mucho más seguro que antes - ¡felicidades!

Por supuesto, se pueden tomar más medidas:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Añadir configuraciones adicionales a Fail2Ban
- Configurar notificaciones por mail en Fail2Ban
- Y muchas más...

<InlineVoucher />