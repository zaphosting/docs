---
id: dedicated-linux-wordpress
title: "Configura WordPress su un Server Linux - Lancia il Tuo Sito o Blog"
description: "Scopri come installare WordPress su un server Linux usando lo stack LAMP per costruire e gestire il tuo sito in modo efficiente → Scopri di più ora"
sidebar_label: Installa WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

WordPress è un CMS molto popolare usato per gestire e pubblicare siti web. Oggi WordPress si è evoluto in tanti altri ambiti come mailing, forum, negozi e molto altro. Questo grazie a una community super attiva che ha creato un ecosistema di plugin e template che rendono facilissimo configurare qualsiasi cosa anche per chi non è un esperto. In questa guida vedremo come installare WordPress CMS su un server Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Installa WordPress con il One Click Apps Installer

Puoi installare **WordPress** direttamente tramite il nostro **One Click Apps Installer** nell’interfaccia web del VPS. Dopo aver completato la configurazione iniziale delle app, apri il catalogo app, cerca **WordPress** e avvia il deploy scegliendo progetto, ambiente e dominio preferiti. È un modo super veloce e user-friendly per installare e gestire **WordPress** senza dover usare la linea di comando, con in più gestione web integrata, supporto per domini personalizzati e provisioning SSL dove disponibile.

## Preparazione

Inizia collegandoti al tuo server via SSH. Se non sai come fare, dai un’occhiata alla nostra guida [Accesso iniziale (SSH)](dedicated-linux-ssh.md).

:::info
In questa guida useremo la distro Ubuntu, con Apache come web server, MySQL per il database e PHP come dipendenza principale. Questo setup è noto come stack LAMP: Linux, Apache, MySQL e PHP.
:::

Una volta loggato, esegui il comando di aggiornamento.
```
sudo apt update
```

Ora puoi installare tutte le dipendenze necessarie. Copia e incolla il comando qui sotto per installare tutto in una volta. Sii paziente, potrebbe volerci un po’.
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

Con le dipendenze installate, ci sono alcuni piccoli passaggi consigliati per assicurarti che tutto lo stack LAMP funzioni a dovere.

### Apache & Firewall

Per prima cosa devi configurare il firewall per permettere al web server Apache di comunicare con internet e assicurarti che funzioni. È fondamentale creare le regole firewall giuste per rendere il server web accessibile da internet.

In questo esempio useremo il **firewall UFW** perché Apache ha un’app registrata per questo. Se usi un firewall diverso, assicurati di aprire la porta 80 (HTTP). Puoi approfondire i firewall Linux nella nostra guida [Gestione Firewall](vserver-linux-firewall.md).

Assicurati che UFW sia attivo e che ci sia una regola per SSH.
```
# Crea una regola per permettere SSH
sudo ufw allow OpenSSH

# Attiva il firewall UFW
sudo ufw enable
```

:::caution
Assicurati di avere una regola per SSH se usi UFW! Altrimenti, se perdi la connessione, **non potrai più accedere via SSH al server!**
:::

Ora crea la regola per Apache e verifica che le regole siano attive.
```
# Crea una regola per Apache
sudo ufw allow in "Apache Full"

# Controlla lo stato delle regole UFW
sudo ufw status
```

:::tip
Puoi vedere quali profili sono disponibili con il comando `ufw app list`. Nel nostro esempio, `Apache Full` apre sia HTTP (porta 80) che HTTPS (porta 443).
:::

Dovresti vedere le regole `Apache` e `Apache (v6)` con azione `ALLOW`, confermando che il firewall è pronto. Vedrai anche altre regole che avevi già configurato, inclusa quella per SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Con il firewall aperto per Apache, verifica che Apache funzioni. Prova ad aprire il tuo indirizzo IP nel browser così: `http://[tuo_indirizzo_ip]`

Se funziona, vedrai la pagina di benvenuto di default. Se no, controlla lo stato del servizio con: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurazione MySQL

Ora devi fare la configurazione iniziale di MySQL. Ti consigliamo di eseguire lo script di installazione sicura per mantenere il server MySQL protetto. È opzionale ma super consigliato. Lancia il comando `sudo mysql_secure_installation`.

Segui la procedura interattiva. All’inizio ti chiederà della validazione password. Ti consigliamo di scegliere `Y` per permettere solo password sicure e poi selezionare `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Poi ti chiederà di rimuovere l’utente `anonymous` e di disabilitare il login remoto per root. Ti consigliamo di accettare con `Y` per motivi di sicurezza. Così l’utente di test viene rimosso e l’utente root può accedere solo localmente via SSH, riducendo i rischi.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Infine ti chiederà di rimuovere il database `test` e ricaricare le tabelle dei privilegi. Anche qui accetta con `Y` perché il database test non serve e devi ricaricare i privilegi per applicare le modifiche.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ora verifica che MySQL sia attivo provando a fare il login: `sudo mysql -u root`. Se va bene, vedrai un messaggio di benvenuto. Esci con il comando `quit`.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Test PHP

Infine verifica che PHP funzioni. Crea un file `info.php` nella cartella Apache `/var/www/html/` con il comando `phpinfo()`.
```
# Apri nano per creare il file
nano /var/www/html/info.php

# Incolla questo contenuto
<?php
phpinfo();
?>
```

Salva con `CTRL+X`, poi `Y` e `Enter`.

Ora apri nel browser:
```
http://[tuo_indirizzo_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Con lo stack LAMP testato e funzionante, sei pronto per installare WordPress.

## Installazione

L’installazione di WordPress si divide in tre fasi: preparare il database MySQL, installare WordPress e configurare tramite il setup wizard.

### Database MySQL

Per prima cosa crea un nuovo database MySQL. Ti servirà durante il setup di WordPress, quindi ti consigliamo di usare i nostri esempi.

Copia questi comandi per creare database, tabelle e utente dedicato.
```
# Accedi a MySQL
sudo mysql -u root

# Crea il database
CREATE DATABASE wordpress;

# Crea un utente wordpress dedicato
# Sostituisci [your_password] con la tua password
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Assegna i privilegi all’utente (copia tutto insieme)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Ricarica i privilegi
FLUSH PRIVILEGES;
```

Quando hai finito esci con `quit`. Ora sei pronto per installare WordPress.

### Installazione WordPress

Per installare WordPress ti consigliamo di scaricare la release ufficiale da **wordpress.org** invece di usare il pacchetto APT, così eviti problemi.

Scarica l’ultima versione con questo comando, che la mette nella cartella temporanea.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Estrai l’archivio, che creerà una cartella `wordpress` con tutti i file.
```
tar -xvf latest.tar.gz
```

Ora copia la cartella dentro `/var/www/html/` di Apache per renderla accessibile via web. Esegui questi comandi per copiare, creare la cartella uploads e sistemare i permessi per il gruppo `www-data` del web server.
```
# Copia la cartella wordpress e aggiorna proprietà
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Crea la cartella uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Imposta i permessi
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

A questo punto WordPress è installato. Apri il setup wizard su: `http://[tuo_indirizzo_ip]/wordpress`

### Setup Wizard

Nel wizard puoi configurare WordPress, ultima fase dell’installazione. Prima scegli la lingua.

Poi configuri il database. Hai già preparato tutto con MySQL, quindi usa le stesse credenziali. Se hai seguito i nostri esempi, compila così, sostituendo `[your_password]` con la password scelta.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Dopo questo passo ti verrà chiesto di avviare l’installazione, ultima parte del setup.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Nella pagina successiva inserisci titolo sito, email, username e password per l’account admin WordPress. Puoi anche decidere se far indicizzare il sito dai motori di ricerca o meno.

:::tip
Scegli una password forte e salva bene le credenziali per non perdere l’accesso al pannello WordPress!
:::

Quando sei pronto clicca su **Installa WordPress** per completare.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Verrai portato a una pagina di successo che ti reindirizza al login. Clicca e usa le credenziali per entrare nel pannello WordPress per la prima volta!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

E voilà, dopo il login sei nel pannello WordPress con installazione completa.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusione

Complimenti, hai installato e configurato WordPress con successo! Il prossimo passo è **fortemente consigliato**: configura un dominio e un **certificato SSL** per trasmettere i dati in sicurezza e rendere più semplice l’accesso al pannello WordPress. Dai un’occhiata alla nostra guida [Certbot](dedicated-linux-certbot.md) con focus sul **plugin Apache** e segui la configurazione interattiva per mettere su un certificato per il tuo dominio.

Per approfondire ti consigliamo di dare un’occhiata alle nostre guide su [Plugin WordPress](webspace-wordpress-plugins.md) e [WordPress Elementor](webspace-wordpress-elementor.md), che spiegano come installare plugin e usare Elementor, un page builder super user-friendly.

Per qualsiasi domanda o aiuto, il nostro supporto è sempre disponibile ogni giorno per darti una mano! 🙂