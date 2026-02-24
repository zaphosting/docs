---
id: dedicated-linux-phpmyadmin
title: "Configura phpMyAdmin su un Server Linux - Gestisci i Tuoi Database via Interfaccia Web"
description: "Scopri come gestire facilmente database MySQL e MariaDB con l’interfaccia web di phpMyAdmin per un’amministrazione database super efficiente → Scopri di più ora"
sidebar_label: Installa phpMyAdmin
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

phpMyAdmin è uno strumento gratuito basato sul web per gestire database MySQL e MariaDB. Offre un’interfaccia user-friendly che permette di creare, modificare, gestire ed eliminare database senza dover scrivere manualmente comandi SQL.



## Preparazione

Prima di iniziare l’installazione, assicurati che il sistema sia aggiornato. Aggiornamenti e upgrade pendenti possono essere eseguiti così:

```
sudo apt update -y
sudo apt upgrade -y
```

Devi anche assicurarti di avere già PHP installato sul sistema. È fondamentale per usare phpMyAdmin. Per scoprire come installare PHP, dai un’occhiata alla nostra guida [Installa PHP](vserver-linux-php.md).

:::warning Pacchetti PHP mancanti
Se mancano i pacchetti PHP necessari, i file PHP di phpMyAdmin non possono essere processati e visualizzati correttamente.
:::

## Installazione

Se la preparazione è completa, puoi iniziare l’installazione dell’interfaccia phpMyAdmin. Per prima cosa apri la directory di installazione dove vuoi mettere phpMyAdmin.

Spostati nella directory giusta con il comando `cd /usr/share`. Poi scarica l’ultima versione di phpMyAdmin nella directory di installazione usando `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Se il comando `wget` non è disponibile, puoi installarlo con `sudo apt install wget -y`.
:::

Quando il download è finito, estrai il file ZIP con questo comando:

```
unzip phpmyadmin.zip
```
:::warning
Se il comando `unzip` non è disponibile, puoi installarlo con `sudo apt install unzip -y`.
:::

Ora rinomina l’archivio estratto con un nome più semplice, elimina il file ZIP e imposta i permessi necessari:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configurazione

### File di configurazione del web server

Adesso devi aggiungere phpMyAdmin alla configurazione del web server. Usa `nano /etc/apache2/conf-available/phpmyadmin.conf` per creare un nuovo file di configurazione Virtual Host e inserisci questo contenuto:

```
# Configurazione Apache per phpMyAdmin

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Blocca l’accesso web per motivi di sicurezza alle directory non necessarie
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Quando hai inserito il contenuto, salva e chiudi con `CTRL+X`, poi premi `Y` e conferma con `Enter`.

Ora devi attivare e caricare il nuovo file di configurazione Virtual Host. Esegui questi comandi:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Creazione della directory temporanea necessaria

Per far funzionare phpMyAdmin correttamente, devi creare una directory temporanea e impostare i permessi giusti. Fallo con questi comandi:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusione

Congratulazioni, hai installato e configurato phpMyAdmin con successo. Puoi accedere all’interfaccia web usando l’indirizzo IP e il percorso del tuo server (http://IP-Address/phpmyadmin). Per qualsiasi domanda o supporto, il nostro team è sempre pronto ad aiutarti ogni giorno! 🙂