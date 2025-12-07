---
id: dedicated-linux-php
title: 'Server Dedicato: Installazione di PHP'
description: "Scopri come installare PHP sul tuo server Linux per lo sviluppo web e ottimizza la tua configurazione con le estensioni essenziali → Scopri di più ora"
sidebar_label: Installa PHP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

PHP è un linguaggio di programmazione general-purpose molto popolare, usato soprattutto nello sviluppo web. In questa guida ti spieghiamo come installare PHP sul tuo server.



## Preparazione

Inizia collegandoti al tuo server via SSH. Se non sai come fare, dai un’occhiata alla nostra guida [Accesso iniziale (SSH)](vserver-linux-ssh.md).

Una volta loggato, ti consigliamo di eseguire il comando di aggiornamento relativo al tuo sistema operativo per mantenere il server sicuro e aggiornato con le ultime funzionalità.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installazione

Ci sono due modi principali per installare PHP sul tuo server Linux: come standalone oppure come pacchetto aggiuntivo per Apache. Se usi un web server diverso da Apache o vuoi PHP per scopi generici, ti consigliamo il metodo standalone. Se invece usi Apache, installa PHP come modulo aggiuntivo per Apache.

## Standalone

Usa questo comando per installare l’ultima versione di PHP. Se vuoi una versione specifica, usa il flag `-y` seguito dalla versione.
```
# Ultima versione
sudo apt install php

# Versione specifica (es. php7.4)
sudo apt -y install php[version]
```

Controlla che l’installazione sia andata a buon fine con il comando `php -v`. Hai appena installato PHP sul tuo server! Ti consigliamo di leggere la sezione **Estensioni PHP** per aggiungere eventuali moduli extra che ti servono.

## Con Apache

Prima di tutto, se non hai ancora Apache, installalo con questo comando:
```
sudo apt install apache2
```

Dopo l’installazione, assicurati che il firewall permetta l’accesso al web server. Qui usiamo **UFW Firewall** perché Apache ha un’app registrata per questo. Se usi un altro firewall, ricordati di aprire la porta 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Ora il tuo server dovrebbe essere raggiungibile. Prova ad aprire `http://[tuo_indirizzo_ip]` nel browser.

Con Apache pronto, installa PHP come modulo per Apache con questo comando:
```
sudo apt install php libapache2-mod-php
```

Verifica l’installazione con `php -v`. PHP è ora installato e integrato con Apache. Dai un’occhiata alla sezione **Estensioni PHP** per aggiungere eventuali moduli extra.

## Estensioni PHP

PHP offre tante estensioni opzionali per estendere le funzionalità. Per vedere la lista completa, usa questo comando che ti mostra i risultati con `less` per scorrere comodamente:

```
apt search php- | less
```

Usa le frecce per navigare e premi `Q` per uscire. Per installare un’estensione, usa il comando apt install così. Puoi installarne più di una insieme, separate da uno spazio, per velocizzare il tutto.

```
sudo apt install [php_extension] [...]
```

## Conclusione

Hai installato PHP sul tuo server Linux con successo! Se hai domande o bisogno di aiuto, il nostro supporto è sempre qui per te, disponibile ogni giorno! 🙂