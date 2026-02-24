---
id: vserver-linux-gitlab
title: "Configura GitLab en un servidor Linux - Aloja tu propia plataforma DevOps"
description: "Descubre cómo configurar GitLab en Linux de forma eficiente para optimizar flujos DevOps y mejorar la colaboración en equipo → Aprende más ahora"
sidebar_label: Instalar GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

GitLab es una plataforma DevOps completa que permite a los equipos colaborar en código, automatizar flujos de trabajo y gestionar todo el ciclo de vida del desarrollo de software de manera eficiente. En esta guía, se explicará la instalación de GitLab en un servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Preparación

Los siguientes requisitos son recomendados por el equipo oficial de [GitLab](https://docs.gitlab.com/ee/install/requirements.html) y es muy recomendable seguirlos para evitar inconvenientes y problemas más adelante.

#### Hardware

| Componentes   | Mínimo                 | Recomendado                |
| ------------- | ---------------------- | -------------------------- |
| CPU           | 2x 2 GHz               | 4x 2.6+ GHz                |
| RAM           | 4 GB                   | 8 GB                       |
| Almacenamiento| 10 GB                  | 50+ GB                     |
| Ancho de banda| 100 mbit/s (subida & bajada) | 100 mbit/s (subida & bajada) |

#### Software

| Plataforma       | Opciones                                                      |
| ---------------- | ------------------------------------------------------------- |
| Sistema operativo| Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Base de datos    | PostgreSQL 14.9+                                              |
| Servidor web     | NGINX (incluido con GitLab), Puma 6.4.2+                      |
| Otros            | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+                |

:::info
Para la información más precisa y actualizada sobre especificaciones, consulta la documentación oficial de [Requisitos de Hardware](https://docs.gitlab.com/ee/install/requirements.html) de GitLab.
:::

Para instalar GitLab en tu servidor Linux, primero debes establecer una conexión vía cliente SSH. Consulta nuestra [guía de acceso inicial (SSH)](vserver-linux-ssh.md) para más detalles.

Una vez establecida la conexión, puedes comenzar a instalar los paquetes necesarios para la instalación de GitLab.

## Paso 1: Instalando dependencias

Primero, debes instalar algunas dependencias para ejecutar el instalador de GitLab. Usa los siguientes comandos para instalar las dependencias requeridas en tu servidor Linux.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Actualiza la lista de paquetes a la última versión e instala el paquete OpenSSH Server junto con los prerrequisitos necesarios con el siguiente comando. Así se alojará el panel web de GitLab.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

También puedes instalar Postfix (servidor SMTP) si quieres enviar notificaciones por email usando GitLab. Esto es **opcional**.

Si quieres usar notificaciones por email, instala Postfix con el siguiente comando.
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Actualiza la lista de paquetes a la última versión e instala el paquete OpenSSH Server junto con los prerrequisitos necesarios con el siguiente comando. Así se alojará el panel web de GitLab.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

También puedes instalar Postfix (servidor SMTP) si quieres enviar notificaciones por email usando GitLab. Esto es **opcional**.

Si quieres usar notificaciones por email, instala Postfix con el siguiente comando.
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Instala el paquete OpenSSH Server junto con los prerrequisitos necesarios con el siguiente comando. Así se alojará el panel web de GitLab.

```
sudo zypper install curl openssh perl
```

Luego, asegúrate de que el demonio OpenSSH esté habilitado con los siguientes comandos.
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Debes asegurarte de que el firewall permita el acceso necesario, si usas `firewalld`.

Para saber si usas `firewalld`, ejecuta primero:

```bash
sudo systemctl status firewalld
```

Si es así, abre los puertos necesarios (80 y 443 por defecto):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

También puedes instalar Postfix (servidor SMTP) si quieres enviar notificaciones por email usando GitLab. Esto es **opcional**.

Si quieres usar notificaciones por email, instala Postfix con los siguientes comandos.
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Durante la instalación de Postfix puede aparecer una configuración. En ese caso, selecciona 'Internet Site' y presiona enter. Usa el DNS externo de tu servidor Linux para 'mail name' y presiona enter. Si aparecen más pantallas, sigue presionando enter para aceptar la configuración por defecto.

Si prefieres usar otra solución para enviar emails, omite este paso y [configura un servidor SMTP externo](https://docs.gitlab.com/omnibus/settings/smtp) después de instalar GitLab siguiendo una guía oficial del equipo GitLab.
:::

## Paso 2: Instalando GitLab

Después de descargar e instalar todas las dependencias necesarias, ya estás listo para instalar GitLab.

En esta guía, instalaremos GitLab directamente desde los repositorios oficiales.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
El siguiente script añadirá los repositorios de GitLab al gestor de paquetes apt:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Una vez hecho, instala el paquete `gitlab-ee`:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
El siguiente script añadirá los repositorios de GitLab al gestor de paquetes Zypper:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Una vez hecho, instala el paquete `gitlab-ee`:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Cuando este proceso termine, deberías tener GitLab listo en tu servidor Linux. Continúa con la siguiente sección para configurar ajustes esenciales y asegurar que el servidor funcione correctamente.

## Paso 3: Configurando GitLab

Para asegurar que todo funcione, debes hacer algunos cambios en el archivo de configuración. Abre el archivo de configuración de GitLab con tu editor de texto preferido. Usaremos el editor `nano` como ejemplo.
```
sudo nano /etc/gitlab/gitlab.rb
```

Luego, busca la línea `external_url` y escribe tu dominio o la dirección IP de tu servidor Linux si no tienes un dominio para usar con GitLab.

<!-- El siguiente código es del archivo /etc/gitlab/gitlab.rb -->
```
## GitLab URL
##! URL en la que GitLab será accesible.
##! Para más detalles sobre cómo configurar external_url, consulta:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Nota: Durante la instalación/actualizaciones, el valor de la variable de entorno
##! EXTERNAL_URL se usará para rellenar/reemplazar este valor.
##! En instancias AWS EC2, también intentamos obtener el hostname/IP público
##! desde AWS. Para más detalles, consulta:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Tu dominio / dirección IPv4 de tu servidor Linux`'
```

Además, recomendamos ingresar tu email en la línea `letsencrypt['contact_emails']`. Esto permitirá que Let's Encrypt te envíe notificaciones y te contacte sobre los certificados SSL automáticos y gratuitos.

:::note
Necesitas usar un dominio si quieres obtener un certificado SSL gratuito de Let's Encrypt. No puedes solicitar uno directamente para tu dirección IP.
:::

<!-- El siguiente código es del archivo /etc/gitlab/gitlab.rb -->
```
################################################################################
# Integración con Let's Encrypt
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Tu email aquí`] # Debe ser un array de direcciones de email para contacto
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Consulta https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically para más info sobre estas opciones
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Debe ser un número o expresión cron, si se especifica.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Puedes usar `CTRL+W` para buscar `letsencrypt['contact_emails']` y presionar enter para no tener que buscar manualmente en todo el archivo.
:::

Cuando termines, presiona `CTRL+X`, luego `Y` y `Enter` para confirmar los cambios.

Finalmente, ejecuta el siguiente comando para reconfigurar GitLab con las nuevas opciones.
```
sudo gitlab-ctl reconfigure
```

Este proceso puede tardar un poco porque inicializará GitLab con la configuración actualizada y procesos automáticos. También se emitirán los certificados SSL si usaste un dominio.

## Paso 4: Accediendo a la interfaz web

Después de la inicialización, el servidor debería ser accesible vía navegador web. Navega a tu sitio ingresando tu dominio o dirección IP así:
```
https://[tu_dominio] O http://[tu_dirección_ip]
```

Al entrar por primera vez a la interfaz web, verás la página de login.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Para obtener acceso admin en tu primer login, inicia sesión como usuario root usando `root` como nombre de usuario.

Para la contraseña, debes acceder a un archivo en tu servidor Linux donde está almacenada. Ábrelo con el siguiente comando y busca el campo `Password`.
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- El siguiente código es del archivo /etc/gitlab/initial_root_password -->
```
# ADVERTENCIA: Este valor es válido solo en las siguientes condiciones

# 1. Si se proporcionó manualmente (ya sea vía variable de entorno `GITLAB_ROOT_PASSWORD` o mediante la configuración `gitlab_rails['initial_root_password']` en `gitlab.rb` antes de que la base de datos fuera inicializada).

# 2. La contraseña no ha sido cambiada manualmente, ni vía UI ni línea de comandos.

#

# Si la contraseña mostrada aquí no funciona, debes resetear la contraseña admin siguiendo https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[TU_CONTRASEÑA_AQUÍ]`

# NOTA: Este archivo se eliminará automáticamente en la primera ejecución de reconfigure después de 24 horas.
```

Introduce el usuario y contraseña en la página de login para entrar a tu panel GitLab por primera vez. Ya deberías poder acceder a tu panel GitLab en tu propio servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Recomendamos crear un nuevo usuario y/o cambiar la contraseña del usuario `root`. Esto se hace accediendo a **Admin** en la esquina inferior izquierda y seleccionando **Overview->Users**. En esta página podrás gestionar los usuarios de tu instancia GitLab.

## Opcional: Configurar un firewall con ufw

Puedes saltarte esto si no quieres configurar un firewall o, por ejemplo, ya usas `firewalld` en OpenSUSE.
Asegúrate de permitir los puertos 80/443 y el puerto 22.

### Instalar ufw

Si ya tienes instalado `ufw`, puedes saltarte este paso.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt-get install -y ufw
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
```bash
sudo zypper install ufw
```
</TabItem>

</Tabs>

### Abrir puertos necesarios

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Activar firewall

:::warning
Esto bloqueará por defecto el acceso a todos los puertos excepto los permitidos. Asegúrate de que la lista blanca esté bien configurada antes de ejecutar este comando.
:::

Para que el firewall tenga efecto, actívalo con el siguiente comando.

```
sudo ufw enable
```

## Conclusión

¡Felicidades, has instalado GitLab con éxito! Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, disponible para ayudarte todos los días.

Si quieres hacer configuraciones adicionales, te recomendamos leer la [Documentación Oficial de GitLab](https://docs.gitlab.com/ee/install/next_steps.html) para los siguientes pasos.

<InlineVoucher />