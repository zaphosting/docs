---
id: vserver-linux-nextcloud
title: "Configure o Nextcloud em um Servidor Linux - Monte Sua Nuvem Privada"
description: "Descubra como configurar um servidor Nextcloud de alta performance no Linux para hospedagem de nuvem ideal → Saiba mais agora"
sidebar_label: Instalar Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Nextcloud é uma solução de nuvem open source e fork do Owncloud, fundada em 2016 pelo ex-fundador do Owncloud, Frank Kalitschek.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

Para alcançar desempenho, estabilidade e funcionalidade ideais, a seguinte configuração é recomendada para hospedar um servidor Nextcloud. O servidor Nextcloud não é compatível com Windows e MacOS. Pelo menos não sem virtualização adicional ou soluções similares.

<InlineVoucher />

## Preparação

Os seguintes requisitos são recomendados pelos desenvolvedores e baseados na nossa própria experiência. Você pode enfrentar problemas se não cumprir esses pré-requisitos.

#### Hardware

| Componentes   | Mínimo                | Recomendado                  |
| ------------ | --------------------- | ---------------------------- |
| CPU          | 2x 1 GHz              | 4x 2+ GHz                   |
| RAM          | 512 MB                | 4+ GB                       |
| Armazenamento| 10 GB                 | 50+ GB                      |
| Largura de banda | 100 mbit/s (upload & download) | 500mbit/s (upload & download) Recomendado se vários usuários forem usar a nuvem |

#### Software

| Plataforma       | Opções                                                      |
| ---------------- | ------------------------------------------------------------ |
| Sistema Operacional | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| Banco de Dados   | MySQL ou MariaDB 5.5+ (recomendado), SQLite (apenas para testes e instâncias mínimas) |
| Servidor Web     | Apache 2.4 com `mod_php` ou `php-fpm` (recomendado)         |
| PHP              | 5.6, 7.0 (recomendado), 7.1 (recomendado), 7.2               |

É necessário estabelecer uma conexão via cliente SSH para instalar a nuvem em um servidor Linux. Caso não saiba usar SSH, aqui está um guia de como fazer: [Acesso inicial (SSH)](vserver-linux-ssh.md)

Uma vez conectando, você pode começar a instalar os pacotes necessários para a instalação do Nextcloud. Isso inclui a instalação de um servidor web e PHP.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (Servidor Web)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8:
```
# Passo 1: Adicionar o repositório PPA do PHP 7.3
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Passo 2: Instalar PHP 7.3
sudo apt -y install php7.3

# Passo 3: Instalar extensões PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# Passo 1: Adicionar o repositório PPA do PHP 7.3
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Passo 2: Instalar PHP 7.3
sudo apt -y install php7.3

# Passo 3: Instalar extensões PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# Passo 1: Instalar PHP 7.3
sudo apt -y install php php-common

# Passo 2: Instalar extensões PHP 7.3
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

Verifique a versão do PHP para confirmar funcionamento
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (Servidor Web)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Ubuntu 16.X:
```
# Passo 1: Adicionar PPA do PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Passo 2: Instalar PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Passo 3: Instalar extensões PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# Passo 1: Adicionar PPA do PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Passo 2: Instalar PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Passo 3: Instalar extensões PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# Passo 1: Adicionar PPA do PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Passo 2: Instalar PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Passo 3: Instalar extensões PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

Verifique a versão do PHP para confirmar funcionamento
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (Servidor Web)**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP (Hypertext Preprocessor)**

🗄️ CentOS 6:
```
# Passo 1: Configurar repositório Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Passo 2: Instalar PHP 7.3
yum --enablerepo=remi-php73 install php

# Passo 3: Instalar extensões PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Passo 1: Configurar repositório Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Passo 2: Instalar PHP 7.3
yum --enablerepo=remi-php73 install php

# Passo 3: Instalar extensões PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Passo 1: Configurar repositório Yum
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Passo 2: Instalar PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

Verifique a versão do PHP para confirmar funcionamento
```
php -v
```

</TabItem>
</Tabs>

O próximo passo é definir o tipo de banco de dados para armazenar as informações relevantes. Existem várias opções:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
Se você decidiu usar esse tipo de banco de dados, siga estes passos:

Instalação do pacote:
```
sudo apt-get install mariadb-server php-mysql
```

Durante a instalação, será solicitado que você defina uma senha root. Se não houver solicitação de senha, a senha padrão é vazia. Isso não é seguro e deve ser alterado imediatamente!

O próximo passo é conectar ao servidor de banco de dados e criar o banco necessário:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Depois, crie um usuário que terá acesso ao banco Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'SUA_SENHA_AQUI';
```

:::info
Não pule essa etapa usando o usuário root. Isso não é seguro e pode colocar seus dados em risco!
:::

O último passo é conceder permissões ao novo usuário:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Quando terminar, pressione Ctrl-D para sair do banco e continue com os próximos passos.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
Se você decidiu usar esse tipo de banco de dados, siga estes passos:

Instalação do pacote:
```
sudo apt-get install mysql-server php-mysql
```

Durante a instalação, será solicitado que você defina uma senha root. Se não houver solicitação de senha, a senha padrão é vazia. Isso não é seguro e deve ser alterado imediatamente!

O próximo passo é conectar ao servidor de banco de dados e criar o banco necessário:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Depois, crie um usuário que terá acesso ao banco Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'SUA_SENHA_AQUI';
```

:::info
Não pule essa etapa usando o usuário root. Isso não é seguro e pode colocar seus dados em risco!
:::


O último passo é conceder permissões ao novo usuário:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Quando terminar, pressione Ctrl-D para sair do banco e continue com os próximos passos.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
Se você decidiu usar esse tipo de banco de dados, siga estes passos:

Instalação do pacote:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Durante a instalação, será solicitado que você defina uma senha root. Se não houver solicitação de senha, a senha padrão é vazia. Isso não é seguro e deve ser alterado imediatamente!

O próximo passo é conectar ao servidor de banco de dados e criar o banco necessário:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Depois, crie um usuário que terá acesso ao banco Nextcloud.

```sql
CREATE USER nextcloud with encrypted password 'SUA_SENHA_AQUI';
```

:::info
Não pule essa etapa usando o usuário root. Isso não é seguro e pode colocar seus dados em risco!
:::

O último passo é conceder permissões ao novo usuário:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Quando terminar, pressione Ctrl-D para sair do banco. Depois, você pode modificar o banco PostgreSQL via instalador web ou pelo arquivo **config.php**.

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
Se você decidiu usar esse tipo de banco de dados, siga estes passos:

Instalação do pacote:
```
apt-get install sqlite3 php-sqlite3
```

Crie um novo banco SQLite 3
```
sqlite3 DatabaseName.db
```

Depois disso, o banco SQLite 3 pode ser modificado via instalador web ou pelo arquivo **config.php**.
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## Instalação

Agora a instalação real do Nextcloud pode começar. O software precisa ser baixado e descompactado:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

Quando essa etapa terminar, é hora de rodar o script de instalação. O acesso é possível via navegador pelo seguinte URL:

:::info
**http://dominio.tld/nextcloud/** 
:::

A configuração do script de instalação aparece, onde um usuário root é criado e as informações do banco definidas:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Segurança e proteção

**Avisos de Configuração**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Diretório de Dados**

É altamente recomendado colocar o diretório de dados fora do diretório raiz web (ou seja, fora de /var/www). A forma mais fácil é numa instalação nova. O diretório pode ser definido durante a configuração. Porém, o diretório deve ser criado antes e as permissões correspondentes configuradas. Os dados podem, por exemplo, ser armazenados em um diretório chamado Cloud no diretório home.


```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS via certificado SSL (Let's Encrypt)** 

Uma boa solução de nuvem deve ser acessada apenas via conexão SSL. Sem criptografia SSL, dados e informações são transferidos em texto puro. Essas informações podem ser facilmente interceptadas e lidas sem criptografia.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName dominio.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/dominio.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/dominio.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



Além disso, todo o tráfego HTTP deve ser redirecionado para HTTPS usando um redirecionamento permanente com código de status 301. Isso pode ser feito usando Apache com uma configuração como a seguinte para VirtualHosts:

```
<VirtualHost *:80>
   ServerName dominio.tld
   Redirect permanent / https://dominio.tld/
</VirtualHost>
```


## Gerenciar Nextcloud

O acesso ao Nextcloud é possível via navegador, assim como pelo smartphone e computador usando o app. As fontes para download estão aqui: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

Nas configurações você pode ajustar várias opções mesmo após a instalação e ver informações importantes como logs, atividades. Isso inclui configurações extras de segurança (autenticação em dois fatores, criptografia, ... ), configurações de design (logo, cor, slogan, cabeçalho), configurações de acesso e muito mais.

**Apps**

Além disso, existe a possibilidade de instalar apps adicionais além dos padrões. Você pode acessá-los pelo menu **Apps**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

Com esses **Apps** é possível personalizar ainda mais o Nextcloud conforme suas preferências.


## Conclusão

Parabéns, você instalou o Nextcloud com sucesso! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />