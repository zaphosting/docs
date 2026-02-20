---
id: vserver-linux-nextcloud
title: "Configura Nextcloud su un Server Linux - Crea il Tuo Cloud Privato"
description: "Scopri come configurare un server Nextcloud ad alte prestazioni su Linux per un hosting cloud ottimale → Scopri di più ora"
sidebar_label: Installa Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Nextcloud è una soluzione cloud open source e fork di Owncloud, fondata nel 2016 dall’ex creatore di Owncloud Frank Kalitschek.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

Per ottenere prestazioni, stabilità e funzionalità ottimali, si consiglia la seguente configurazione per ospitare un server Nextcloud. Il server Nextcloud non è compatibile con Windows e MacOS. Almeno non senza ulteriori virtualizzazioni o workaround simili.

<InlineVoucher />

## Preparazione

I seguenti requisiti sono raccomandati dagli sviluppatori e basati sulla nostra esperienza. Potresti incontrare problemi se non rispetti questi prerequisiti.

#### Hardware

| Componenti    | Minimo                 | Consigliato                |
| ------------- | ---------------------- | -------------------------- |
| CPU           | 2x 1 GHz               | 4x 2+ GHz                  |
| RAM           | 512 MB                 | 4+ GB                      |
| Storage       | 10 GB                  | 50+ GB                     |
| Banda         | 100 mbit/s (up & down) | 500 mbit/s (up & down) Consigliato se più utenti devono usare il cloud |

#### Software

| Piattaforma       | Opzioni                                                      |
| ----------------- | ------------------------------------------------------------ |
| Sistema Operativo | Ubuntu (14.04, 16.04, 18.04), Debian (8,9,10), CentOS 6.5/7  |
| Database          | MySQL o MariaDB 5.5+ (consigliato), SQLite (solo per test e installazioni minime) |
| Web server        | Apache 2.4 con `mod_php` o `php-fpm` (consigliato)           |
| PHP               | 5.6, 7.0 (consigliato), 7.1 (consigliato), 7.2               |

Per installare il cloud su un server Linux, devi connetterti tramite un client SSH. Se non sai come usare SSH, ecco una guida: [Accesso iniziale (SSH)](vserver-linux-ssh.md)

Una volta stabilita la connessione, puoi iniziare a installare i pacchetti necessari per l’installazione di Nextcloud. Questo include l’installazione di un web server e PHP.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (Web server)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8:
```
# Passo 1: Aggiungi il repository PPA di PHP 7.3
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Passo 2: Installa PHP 7.3
sudo apt -y install php7.3

# Passo 3: Installa le estensioni PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# Passo 1: Aggiungi il repository PPA di PHP 7.3
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Passo 2: Installa PHP 7.3
sudo apt -y install php7.3

# Passo 3: Installa le estensioni PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# Passo 1: Installa PHP 7.3
sudo apt -y install php php-common

# Passo 2: Installa le estensioni PHP 7.3
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

Controlla la versione PHP per verificarne il funzionamento
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (Web server)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Ubuntu 16.X:
```
# Passo 1: Aggiungi il PPA di PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Passo 2: Installa PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Passo 3: Installa le estensioni PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# Passo 1: Aggiungi il PPA di PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Passo 2: Installa PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Passo 3: Installa le estensioni PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# Passo 1: Aggiungi il PPA di PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Passo 2: Installa PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Passo 3: Installa le estensioni PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

Controlla la versione PHP per verificarne il funzionamento
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (Web server)**

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
# Passo 1: Configura il repository Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Passo 2: Installa PHP 7.3
yum --enablerepo=remi-php73 install php

# Passo 3: Installa le estensioni PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Passo 1: Configura il repository Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Passo 2: Installa PHP 7.3
yum --enablerepo=remi-php73 install php

# Passo 3: Installa le estensioni PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Passo 1: Configura il repository Yum
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Passo 2: Installa PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

Controlla la versione PHP per verificarne il funzionamento
```
php -v
```

</TabItem>
</Tabs>

Il passo successivo è definire il tipo di database per memorizzare le informazioni rilevanti. Ci sono diverse opzioni:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
Se hai deciso di usare questo tipo di database, segui questi passaggi:

Installazione pacchetti:
```
sudo apt-get install mariadb-server php-mysql
```

Durante l’installazione ti verrà chiesto di impostare una password root. Se non viene richiesta, la password di default è vuota. Questo non è sicuro e va cambiato subito dopo!

Il passo successivo è connettersi al server database e creare il database richiesto:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Poi devi creare un utente che abbia accesso al database Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
Non saltare questo passaggio usando l’utente root. Non è sicuro e può mettere a rischio i tuoi dati!
:::

L’ultimo passo è assegnare i permessi al nuovo utente:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Quando hai finito, premi Ctrl-D per uscire dal database e continua con i passaggi successivi.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
Se hai deciso di usare questo tipo di database, segui questi passaggi:

Installazione pacchetti:
```
sudo apt-get install mysql-server php-mysql
```

Durante l’installazione ti verrà chiesto di impostare una password root. Se non viene richiesta, la password di default è vuota. Questo non è sicuro e va cambiato subito dopo!

Il passo successivo è connettersi al server database e creare il database richiesto:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Poi devi creare un utente che abbia accesso al database Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
Non saltare questo passaggio usando l’utente root. Non è sicuro e può mettere a rischio i tuoi dati!
:::


L’ultimo passo è assegnare i permessi al nuovo utente:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Quando hai finito, premi Ctrl-D per uscire dal database e continua con i passaggi successivi.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
Se hai deciso di usare questo tipo di database, segui questi passaggi:

Installazione pacchetti:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Durante l’installazione ti verrà chiesto di impostare una password root. Se non viene richiesta, la password di default è vuota. Questo non è sicuro e va cambiato subito dopo!

Il passo successivo è connettersi al server database e creare il database richiesto:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Poi devi creare un utente che abbia accesso al database Nextcloud.

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

:::info
Non saltare questo passaggio usando l’utente root. Non è sicuro e può mettere a rischio i tuoi dati!
:::

L’ultimo passo è assegnare i permessi al nuovo utente:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Quando hai finito, premi Ctrl-D per uscire dal database. Poi puoi modificare il database PostgreSQL tramite il web installer o tramite il file **config.php**.

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
Se hai deciso di usare questo tipo di database, segui questi passaggi:

Installazione pacchetti:
```
apt-get install sqlite3 php-sqlite3
```

Crea un nuovo database SQLite 3
```
sqlite3 DatabaseName.db
```

Dopodiché il database SQLite 3 può essere modificato tramite il web installer o tramite il file **config.php**.
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

## Installazione

Ora puoi iniziare l’installazione vera e propria di Nextcloud. Il software va scaricato e scompattato:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

Una volta completato questo passaggio, è il momento di eseguire lo script di installazione. Puoi accedervi via browser tramite questo URL:

:::info
**http://domain.tld/nextcloud/** 
:::

Apparirà la configurazione dello script di installazione, dove potrai creare un utente root e definire le informazioni del database:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Sicurezza e protezione

**Avvisi di configurazione**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Cartella dati**

È fortemente consigliato posizionare la cartella dati fuori dalla root web (cioè fuori da /var/www). Il modo più semplice è farlo durante una nuova installazione. La cartella può essere definita durante la configurazione, ma deve essere creata prima e avere i permessi corretti. Ad esempio, i dati possono essere salvati in una cartella chiamata Cloud nella home directory.


```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS tramite certificato SSL (Let's Encrypt)** 

Una buona soluzione cloud dovrebbe essere accessibile solo tramite connessione SSL. Senza crittografia SSL, dati e informazioni viaggiano in chiaro. Queste info possono essere intercettate e lette facilmente senza crittografia.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domain.tld

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

SSLCertificateFile /etc/letsencrypt/live/domain.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domain.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



Inoltre, tutto il traffico HTTP dovrebbe essere reindirizzato a HTTPS usando un redirect permanente con codice 301. Puoi farlo con Apache usando una configurazione come questa:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## Gestisci Nextcloud

Puoi accedere a Nextcloud via browser, smartphone o computer usando l’app. Le fonti per il download le trovi qui: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

Nelle impostazioni puoi modificare altre opzioni anche dopo l’installazione e vedere info importanti come log e attività. Ci sono anche impostazioni di sicurezza extra (autenticazione a due fattori, crittografia, ...), personalizzazione grafica (logo, colori, slogan, header), impostazioni di accesso e molto altro.

**App**

In più, puoi installare app aggiuntive oltre a quelle di default. Le trovi nel menu **App**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

Con queste **App** puoi personalizzare Nextcloud ancora di più a tuo piacimento.


## Conclusione

Congratulazioni, hai installato Nextcloud con successo! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />