---
id: dedicated-linux-wordpress
title: "Dedicated Server: Installazione di WordPress"
description: "Scopri come installare WordPress su un server Linux usando lo stack LAMP per costruire e gestire il tuo sito web in modo efficiente → Scopri di più ora"
sidebar_label: Installa WordPress
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

WordPress è un popolare sistema di gestione dei contenuti web usato per gestire e pubblicare siti web. Oggi WordPress si è evoluto in vari altri ambiti come mailing, forum, negozi e molto altro. Questo è supportato da una community attiva che ha creato un ecosistema solido di plugin e template che rendono facile configurare qualsiasi cosa anche per un utente finale. In questa guida vedremo come installare il CMS WordPress su un server Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Preparazione

Inizia collegandoti al tuo server via SSH. Se non sai come fare, dai un’occhiata alla nostra guida [Accesso iniziale (SSH)](dedicated-linux-ssh.md).

:::info
In questa guida useremo la distro Ubuntu, abbinata ad Apache come web server, MySQL per il database e PHP come dipendenza principale. Questo è noto come stack LAMP: Linux, Apache, MySQL e PHP.
:::

Una volta loggato, esegui il comando di aggiornamento.
```
sudo apt update
```

Ora puoi installare tutte le dipendenze necessarie. Copia il comando completo qui sotto e incollalo per installare tutto in una volta. Abbi pazienza, potrebbe volerci un po’ di tempo.
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

Con le dipendenze installate, ci sono alcuni piccoli passaggi consigliati per assicurarti che tutte le componenti core dello stack LAMP funzionino correttamente.

### Apache & Firewall

Per cominciare, devi configurare il firewall per permettere al web server Apache di comunicare con internet e assicurarti che funzioni. È importante creare le regole firewall appropriate per rendere il web server accessibile da internet.

In questo esempio useremo il **firewall UFW** perché Apache ha un’applicazione registrata per questo. Se usi un firewall diverso, assicurati di aprire la porta 80 (HTTP). Puoi approfondire i firewall Linux nella nostra guida [Gestione Firewall](vserver-linux-firewall.md).

Assicurati che il firewall UFW sia attivo e che ci sia una regola per SSH.
```
# Crea una regola per permettere SSH
sudo ufw allow OpenSSH

# Attiva il firewall UFW
sudo ufw enable
```

:::caution
Assicurati di avere una regola per SSH se usi UFW! Altrimenti **non** potrai più accedere via SSH se perdi la connessione attuale!
:::

Ora crea la regola per Apache e poi verifica che le regole siano attive.
```
# Crea una regola per Apache
sudo ufw allow in "Apache Full"

# Controlla le regole del firewall UFW
sudo ufw status
```

:::tip
Puoi vedere quali profili sono disponibili con il comando `ufw app list`. Nell’esempio sopra, usare `Apache Full` significa che vengono create regole sia per HTTP (porta 80) che HTTPS (porta 443).
:::

Dovresti vedere le regole `Apache` e `Apache (v6)` con azione `ALLOW`, confermando che il firewall è pronto. Vedrai anche altre regole che avevi già configurato, inclusa quella per SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Con il firewall aperto per Apache, assicurati che Apache funzioni. Prova ad accedere al tuo indirizzo IP da browser così: `http://[tuo_indirizzo_ip]`

Se funziona, vedrai la pagina di benvenuto di default. Se no, controlla lo stato del servizio con: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurazione MySQL

Il passo successivo è la configurazione iniziale di MySQL. È consigliato eseguire lo script di installazione sicura per mantenere il server MySQL protetto. È opzionale ma fortemente raccomandato. Puoi farlo con il comando `sudo mysql_secure_installation`.

Segui la procedura interattiva. All’inizio ti verrà chiesto della validazione della password. Ti consigliamo di scegliere `Y` per permettere solo password sicure in futuro, e poi selezionare `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Poi ti verrà chiesto di rimuovere l’utente `anonymous` e di disabilitare il login remoto per root. Consigliamo di accettare con `Y` per motivi di sicurezza. Così l’utente di test viene rimosso e l’utente root può accedere solo localmente via SSH, riducendo i rischi.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Infine ti chiederà di rimuovere il database `test` e ricaricare le tabelle dei privilegi. Anche qui consigliamo di accettare con `Y` perché il database test non serve e devi ricaricare i privilegi per applicare le modifiche.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ora verifica che MySQL sia attivo provando a loggarti con: `sudo mysql -u root`. Se funziona, vedrai un messaggio di benvenuto. Puoi uscire con il comando `quit`.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Test PHP

Infine, assicurati che PHP funzioni correttamente. Crea un file `info.php` nella directory Apache `/var/www/html/` con il comando `phpinfo()`.
```
# Apri nano per creare il file
nano /var/www/html/info.php

# Incolla questo contenuto
<?php
phpinfo();
?>
```

Salva con `CTRL+X`, poi `Y` e `Invio` per confermare.

Ora apri questo URL nel browser, dovrebbe mostrarti la pagina info PHP se tutto funziona:
```
http://[tuo_indirizzo_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Con le dipendenze LAMP testate e funzionanti, sei pronto per procedere con l’installazione principale di WordPress.

## Installazione

L’installazione di WordPress si divide in tre fasi: preparare il database MySQL, installare WordPress e infine configurare tramite la procedura guidata.

### Database MySQL

Per iniziare devi creare un nuovo database MySQL. Ricordati queste credenziali perché ti serviranno nella procedura guidata di WordPress. Ti consigliamo di usare i nostri esempi.

Copia questi comandi per creare database, tabelle e utenti necessari.
```
# Accedi a MySQL
sudo mysql -u root

# Crea il database
CREATE DATABASE wordpress;

# Crea un utente dedicato wordpress
# Sostituisci [your_password] con la tua password
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Imposta i privilegi per l’utente (copia tutto insieme)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Ricarica le tabelle dei privilegi
FLUSH PRIVILEGES;
```

Quando hai finito, esci con `quit`. Ora sei pronto per installare WordPress.

### Installazione di WordPress

Per l’installazione principale consigliamo di scaricare la release ufficiale da **wordpress.org** invece del pacchetto APT, come raccomandato da WordPress per evitare problemi.

Per scaricare l’ultima versione, usa questo comando che la scarica nella cartella temporanea.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Ora estrai l’archivio, che creerà una cartella `wordpress` con tutti i file necessari.
```
tar -xvf latest.tar.gz
```

Dopo aver estratto i file, devi copiare la cartella nella directory Apache `/var/www/html/` per renderla accessibile via web. Esegui questi comandi per copiare la cartella, creare la directory `uploads` e sistemare i permessi per il gruppo `www-data` del web server.
```
# Copia la cartella wordpress e aggiorna proprietà
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Crea la cartella uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Modifica i permessi
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

A questo punto WordPress è installato. Accedi alla procedura guidata via: `http://[tuo_indirizzo_ip]/wordpress`

### Procedura guidata

Ora puoi configurare WordPress tramite la procedura guidata, l’ultimo step dell’installazione. Per prima cosa ti verrà chiesto di scegliere la lingua.

Poi dovrai configurare le impostazioni del database. Hai già preparato tutto con MySQL, quindi usa le stesse credenziali. Se hai seguito i nostri esempi, compila così, sostituendo `[your_password]` con la password scelta.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Dopo questo passaggio, ti verrà chiesto di avviare l’installazione, l’ultimo step.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Nella pagina successiva inserisci titolo sito, email, username e password per l’account admin WordPress. Puoi anche decidere se permettere ai motori di ricerca di indicizzare il sito o meno.

:::tip
Scegli una password forte e salva le credenziali per non perdere l’accesso al pannello WordPress!
:::

Quando sei pronto, clicca su **Installa WordPress** per completare.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Verrai portato a una pagina di successo che ti reindirizza alla pagina di **Login**. Clicca e usa le credenziali per accedere al pannello WordPress per la prima volta!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

E voilà, dopo il login sarai nel pannello WordPress con l’installazione completa.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusione

Congratulazioni, hai installato e configurato WordPress con successo! Il prossimo passo è **altamente consigliato**: configura un dominio e un **certificato SSL** per trasmettere i dati in modo sicuro e rendere più semplice l’accesso al pannello WordPress. Dai un’occhiata alla nostra guida [Certbot](dedicated-linux-certbot.md) focalizzata sul **plugin Apache** e segui la procedura interattiva per configurare facilmente un certificato per il tuo dominio.

Per approfondire e personalizzare, ti consigliamo di esplorare le nostre guide su [Plugin WordPress](webspace-wordpress-plugins.md) e [WordPress Elementor](webspace-wordpress-elementor.md), che spiegano come installare plugin e usare Elementor, un page builder super user-friendly.

Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂