---
id: dedicated-linux-mastodon
title: "Configura Mastodon en un Servidor Linux - Lanza Tu Propia Plataforma de Redes Sociales"
description: "Descubre cómo configurar una red social Mastodon autoalojada y segura en servidores basados en Debian para microblogging independiente → Aprende más ahora"
sidebar_label: Instalar Mastodon
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Mastodon es un software libre y de código abierto para ejecutar servicios de redes sociales autoalojados.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

Tiene funciones de microblogging similares al servicio X (antes Twitter), que son ofrecidas por una gran cantidad de nodos independientes, conocidos como instancias,  
cada una con su propio código de conducta, términos de servicio, política de privacidad, opciones de privacidad y políticas de moderación.  
:::info
Esta guía se centra en la instalación en una distro basada en Debian. Ejemplos son Debian y Ubuntu. Esta guía varía dependiendo del sistema operativo que uses.
:::

## Requisitos del sistema
Si quieres montar una instancia de Mastodon en tu servidor, debes cumplir algunos requisitos:
- Dominio
- Servidor basado en Linux
- Servidor de correo electrónico

## Preparando tu sistema
Se recomienda desactivar el inicio de sesión por contraseña en SSH antes, ya que usar inicio de sesión por contraseña en servidores accesibles desde Internet es un riesgo de seguridad.  
Puedes hacer esto en el panel web de tu servidor bajo Información -> Acceso y Seguridad -> Desactivar inicio de sesión por contraseña  
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)  
Después, actualiza tus paquetes con el siguiente comando:
```
apt update && apt upgrade -y
```

A continuación, instala las dependencias de Mastodon:
```bash
# Repositorios del sistema
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Después de instalar las dependencias para Mastodon, instala los paquetes necesarios del sistema con estos dos comandos:
```bash
apt update
apt install -y \
  imagemagick ffmpeg libpq-dev libxml2-dev libxslt1-dev file git-core \
  g++ libprotobuf-dev protobuf-compiler pkg-config nodejs gcc autoconf \
  bison build-essential libssl-dev libyaml-dev libreadline6-dev \
  zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev \
  nginx redis-server redis-tools postgresql postgresql-contrib \
  certbot python3-certbot-nginx libidn11-dev libicu-dev libjemalloc-dev
```
Deja que los paquetes se instalen, puede tardar un poco. Luego configura yarn, que es un gestor de paquetes para Node.JS instalado previamente:
```bash
corepack enable
yarn set version stable
```

## Instalando Ruby
Crearemos un usuario diferente, ya que facilita la gestión de versiones de Ruby. Primero crea un usuario llamado mastodon, con inicio de sesión deshabilitado. Luego cambia al usuario mastodon con estos comandos:
```bash
# Puedes dejar los campos vacíos
adduser --disabled-login mastodon
su - mastodon
```

Ahora instalamos el gestor de Ruby `rbenv`, que facilita manejar versiones de Ruby. Instálalo con estos comandos:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Cuando termines, instala Ruby y bundler con este comando:
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Esto puede tardar, así que paciencia y aprovecha para tomar un té o café. Cuando termines, vuelve al usuario root con `exit`.

## Configurando PostgreSQL
Mastodon usa PostgreSQL como sistema de base de datos. Configúralo así:
```bash
sudo -u postgres psql
```

Dentro del prompt de PostgreSQL, ejecuta:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Configurando Mastodon
Vuelve a cambiar al usuario mastodon:
```bash
su - mastodon
```
Descarga la versión más reciente de Mastodon con git usando estos comandos:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Ahora instala las últimas dependencias para Ruby y Javascript con estos comandos:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Crea el archivo de configuración de Mastodon con:
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
Si la configuración de la base de datos falla, inicia sesión en postgres con `sudo -u postgres psql` y sigue esta documentación:  

https://gist.github.com/amolkhanorkar/8706915
:::

Luego vuelve al usuario root con `exit`.

## Configurando el servidor web
Aquí viene la parte más delicada. Primero crea un registro A y/o AAAA en tu DNS que apunte directamente a tu servidor. Alternativamente, puedes apuntar el registro raíz a tu servidor.

Luego copia y habilita la configuración del servidor web de Mastodon con estos comandos:
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Edita el archivo `/etc/nginx/sites-available/mastodon` con un editor como vim o nano y cambia example.com por tu dominio.  
Después, consigue un certificado SSL para tu dominio fácilmente con este comando:
```bash
certbot --nginx -d <tu dominio>
```
Introduce tu dominio. Te pedirá varios datos. Al final te preguntará si quieres redirigir automáticamente las peticiones http a https, te recomendamos activarlo.

## Creando un servicio Mastodon
Por último, creamos un servicio del sistema para Mastodon. Es bastante sencillo.  
Copia la configuración por defecto del servicio al directorio de servicios de tu distribución con:
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Ahora habilita y arranca los nuevos servicios con estos comandos:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

Después de reiniciar, tu setup debería estar listo. ¡Disfruta tu instancia!