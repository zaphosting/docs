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

WordPress è un CMS molto popolare usato per gestire e pubblicare siti web. Oggi WordPress si è evoluto in tanti altri ambiti come mailing, forum, negozi e molto altro. Questo grazie a una community super attiva che ha creato un ecosistema di plugin e template che rendono facilissimo configurare qualsiasi cosa anche per chi non è esperto. In questa guida vedremo come installare WordPress CMS su un server Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Preparazione

Inizia collegandoti al tuo server via SSH. Se non sai come fare, dai un’occhiata alla nostra guida [Accesso iniziale (SSH)](dedicated-linux-ssh.md).

:::info
In questa guida useremo la distro Ubuntu, con Apache come web server, MySQL per il database e PHP come dipendenza principale. Questo setup è noto come stack LAMP: Linux, Apache, MySQL e PHP.
:::

Una volta loggato, esegui il comando di aggiornamento.
```
sudo apt update
```

Ora puoi installare tutte le dipendenze necessarie. Copia e incolla il comando qui sotto per installare tutto in un colpo solo. Abbi pazienza, potrebbe volerci un po’ di tempo.
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

Con le dipendenze installate, ci sono alcuni passaggi consigliati per assicurarti che tutto lo stack LAMP funzioni a dovere.

### Apache & Firewall

Per prima cosa devi configurare il firewall per permettere al web server Apache di comunicare con internet e assicurarti che funzioni. È fondamentale creare le regole firewall giuste per rendere il web server accessibile da internet.

In questo esempio useremo il **firewall UFW** perché Apache ha un’app registrata per questo. Se usi un firewall diverso, assicurati di aprire la porta 80 (HTTP). Per saperne di più sui firewall Linux, dai un’occhiata alla nostra guida [Gestione Firewall](vserver-linux-firewall.md).

Assicurati che UFW sia attivo e che ci sia una regola per SSH.
```
# Crea una regola per permettere SSH
sudo ufw allow OpenSSH

# Attiva il firewall UFW
sudo ufw enable
```

:::caution
Assicurati di avere una regola per SSH se usi UFW! Se non ce l’hai, **non** potrai più connetterti via SSH se perdi la sessione attuale!
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

Segui la procedura interattiva. All’inizio ti chiederà della validazione della password. Ti consigliamo di scegliere `Y` per permettere solo password sicure e poi selezionare `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Poi ti chiederà di rimuovere l’utente `anonymous` e di disabilitare il login remoto per root. Ti consigliamo di accettare con `Y` per motivi di sicurezza. Così rimuovi l’utente di test e il root potrà accedere solo localmente via SSH, riducendo i rischi.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Infine ti chiederà di rimuovere il database `test` e di ricaricare le tabelle dei privilegi. Anche qui accetta con `Y` perché il database di test non serve e devi ricaricare i privilegi per applicare le modifiche.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ora verifica che MySQL sia attivo provando a loggarti con: `sudo mysql -u root`. Se funziona, vedrai un messaggio di benvenuto. Esci con il comando `quit` quando vuoi.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Test PHP

Ultimo step: assicurati che PHP funzioni. Crea un file `info.php` nella cartella Apache `/var/www/html/` con il comando `phpinfo()`.
```
# Apri nano per creare il file
nano /var/www/html/info.php

# Incolla questo codice dentro
<?php
phpinfo();
?>
```

Salva con `CTRL+X`, poi `Y` e `Enter` per confermare.

Ora apri nel browser:
```
http://[tuo_indirizzo_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Se vedi la pagina info PHP, tutto funziona. Ora sei pronto per installare WordPress.

## Installazione

L’installazione di WordPress si divide in tre parti: preparare il database MySQL, installare WordPress e configurare tramite il setup wizard.

### Database MySQL

Per prima cosa crea un nuovo database MySQL. Ti servirà durante il setup di WordPress, quindi ti consigliamo di usare i nostri esempi.

Copia questi comandi per creare database, tabelle e utente.
```
# Accedi a MySQL
sudo mysql -u root

# Crea il database
CREATE DATABASE wordpress;

# Crea un utente dedicato wordpress
# Sostituisci [your_password] con la tua password
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Assegna i permessi all’utente (copia tutto insieme)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Ricarica i privilegi
FLUSH PRIVILEGES;
```

Quando hai finito, esci con `quit`. Ora sei pronto per installare WordPress.

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

Ora copia la cartella dentro `/var/www/html/` di Apache per renderla accessibile via web. Esegui questi comandi per copiare, creare la cartella uploads e sistemare i permessi per il gruppo `www-data`.
```
# Copia la cartella wordpress e aggiorna i permessi
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Crea la cartella uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Imposta i permessi
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Fatto questo, WordPress è installato. Apri il setup wizard via: `http://[tuo_indirizzo_ip]/wordpress`

### Setup Wizard

Nel wizard puoi configurare WordPress, l’ultimo step dell’installazione. Prima scegli la lingua.

Poi configuri il database. Hai già preparato tutto in MySQL, quindi usa le stesse credenziali. Se hai seguito i nostri esempi, compila così, sostituendo `[your_password]` con la password scelta.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Dopo questo, ti verrà chiesto di avviare l’installazione. È l’ultimo passo.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Nella pagina successiva inserisci titolo sito, email, username e password per l’account admin WordPress. Puoi anche scegliere se far indicizzare il sito dai motori di ricerca o meno.

:::tip
Scegli una password forte e salva bene le credenziali per non perdere l’accesso al pannello WordPress!
:::

Quando sei pronto, clicca su **Installa WordPress** per completare.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Verrai portato a una pagina di successo che ti reindirizza al login. Clicca e usa le credenziali per entrare nel pannello WordPress per la prima volta!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

E voilà, dopo il login sei nel pannello WordPress con l’installazione completa.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusione

Complimenti, hai installato e configurato WordPress con successo! Il prossimo passo è **fortemente consigliato**: configura un dominio e un **certificato SSL** per trasmettere i dati in modo sicuro e rendere più semplice l’accesso al pannello WordPress. Dai un’occhiata alla nostra guida [Certbot](dedicated-linux-certbot.md) con focus sul **plugin Apache** e segui la procedura interattiva per configurare facilmente il certificato per il tuo dominio.

Per approfondire, ti consigliamo di esplorare le nostre guide su [Plugin WordPress](webspace-wordpress-plugins.md) e [WordPress Elementor](webspace-wordpress-elementor.md), che spiegano come installare plugin e usare Elementor, un page builder super user-friendly.

Per qualsiasi domanda o aiuto, il nostro supporto è sempre disponibile ogni giorno per darti una mano! 🙂