---
id: vserver-linux-php
title: 'VPS: Installazione di PHP'
description: "Scopri come installare PHP sul tuo server Linux per lo sviluppo web e ottimizza la tua configurazione per Apache o uso standalone → Scopri di più ora"
sidebar_label: Installa PHP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

PHP è un linguaggio di programmazione general-purpose molto popolare, usato soprattutto nello sviluppo web. In questa guida ti spieghiamo come installare PHP sul tuo server.

<InlineVoucher />

## Preparazione

Inizia collegandoti al tuo server via SSH. Se non sai come fare, dai un’occhiata alla nostra guida [Accesso iniziale (SSH)](vserver-linux-ssh.md).

Una volta loggato, ti consigliamo di eseguire il comando di aggiornamento adatto al tuo sistema operativo per mantenere il server sicuro e aggiornato con le ultime funzionalità.

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

Ci sono due modi principali per installare PHP sul tuo server Linux: in modalità standalone oppure come pacchetto aggiuntivo per Apache. Se usi un web server diverso da Apache o vuoi PHP per scopi generici, ti consigliamo il metodo standalone. Se invece usi Apache, installa PHP come modulo aggiuntivo.

## Standalone

Usa questo comando per installare l’ultima versione di PHP. Se vuoi una versione specifica, usa il flag `-y` seguito dalla versione.
```
# Ultima versione
sudo apt install php

# Versione specifica (es. php7.4)
sudo apt -y install php[version]
```

Verifica che l’installazione sia andata a buon fine con il comando `php -v`. Hai installato PHP sul tuo server! Ti consigliamo di leggere la sezione **Estensioni PHP** per installare eventuali estensioni di cui hai bisogno.

## Con Apache

Prima di tutto, se non hai ancora Apache, installalo con questo comando:
```
sudo apt install apache2
```

Dopo l’installazione, assicurati che il firewall permetta l’accesso al web server. Qui usiamo il **firewall UFW** perché Apache ha un’app registrata per questo. Se usi un altro firewall, assicurati di aprire la porta 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Ora il tuo server dovrebbe essere raggiungibile. Prova ad aprire `http://[tuo_indirizzo_ip]` nel browser.

Con Apache pronto, installa il pacchetto PHP per Apache con questo comando:
```
sudo apt install php libapache2-mod-php
```

Controlla l’installazione con `php -v`. PHP è ora installato insieme ad Apache. Dai un’occhiata alla sezione **Estensioni PHP** per aggiungere eventuali moduli extra.

## Estensioni PHP

PHP offre tante estensioni opzionali per estendere le funzionalità. Per vedere la lista delle estensioni disponibili, usa questo comando che ti mostra i risultati in modo navigabile con `less`:

```
apt search php- | less
```

Usa le frecce per scorrere e premi `Q` per uscire. Per installare un’estensione, usa il comando apt install così. Puoi installarne più di una separandole con uno spazio per velocizzare.

```
sudo apt install [php_extension] [...]
```

## Conclusione

Hai installato PHP sul tuo server Linux con successo. Per qualsiasi domanda o aiuto, il nostro supporto è sempre a disposizione ogni giorno! 🙂

<InlineVoucher />