---
id: vserver-linux-screen
title: "VPS: Installazione di Screen"
description: "Scopri come gestire più sessioni terminal in modo efficiente su sistemi Unix-like con l’utility Screen → Scopri di più ora"
sidebar_label: Installa Screen
services:
  - vserver
---

## Introduzione

Screen è un terminal multiplexer per sistemi operativi Unix-like, come Linux. Ti permette di gestire più sessioni terminal all’interno di una singola finestra o connessione remota. In questa guida vedremo i passaggi per l’installazione e ti daremo qualche dritta su come usarlo al meglio.

## Preparazione

Prima di installare qualsiasi cosa sul server, ti consigliamo di eseguire il comando di aggiornamento corrispondente al tuo sistema operativo per mantenere il server sicuro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
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

Installare l’utility screen è facilissimo, basta eseguire il comando giusto per la tua distro Linux:

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Uso Base di Screen

Come detto, screen ti permette di creare più sessioni. Per avviarne una basta eseguire questo comando, sostituendo `[name]` con il nome che preferisci.
```
screen -S [name]
```

:::info
Ricorda che i comandi in questa guida sono case sensitive, soprattutto per i flag dei parametri.
:::

Si aprirà una nuova schermata screen dove potrai far partire qualsiasi script o programma e tenerlo attivo anche dopo aver chiuso la connessione remota.

Per uscire da una sessione screen usa `CTRL + A` seguito da `D` oppure digita semplicemente `exit` nel terminale.

:::tip
Per vedere tutte le sessioni/schermate attive usa il comando `screen -ls` o `screen -list`.
:::

Per tornare a una sessione screen già creata, esegui `screen -r [name]` e verrai riportato subito alla schermata corrispondente.

## Flag dei Parametri di Screen

Screen ha tanti flag `-` per configurare i comandi. Ecco i più importanti in questa tabella.

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Mostra la versione corrente di screen |
| -S `[name]` | | Avvia una nuova sessione screen chiamata `[name]` |
| -ls | -list | Elenca tutte le sessioni screen attive |
| -wipe `[name]` | | Cancella le sessioni, opzionalmente quella chiamata `[name]` |
| -r `[name]` | | Riattacca alla sessione screen `[name]` |
| -d -r `[name]` | | Stacca la sessione corrente e riattacca a `[name]` |

:::tip
Per vedere tutti i parametri disponibili esegui `screen -h` per una lista completa.
:::

## Uso Avanzato di Screen

### Gestione delle Finestre

Ora che hai preso confidenza con i comandi base di screen, è il momento di imparare qualche shortcut per navigare meglio tra le sessioni. Dentro una sessione screen puoi creare più finestre separate per task diversi.

:::note 
Tutti gli shortcut in questa sezione vanno eseguiti dopo aver premuto `CTRL + A`.
:::

Premendo `C` crei una nuova finestra vuota nella directory corrente. Per spostarti tra le finestre usa `N` (next) o `P` (previous) oppure `"` per aprire una lista e selezionare la finestra con le frecce.

Di default tutte le finestre hanno lo stesso nome (di solito il nome della shell che usi). Per cambiarlo premi `A` e scegli un nuovo nome.

Infine, per chiudere una finestra premi `K`.

#### Finestre Divise (Split)

Per avere 2 finestre affiancate puoi usare `S` (split orizzontale) o `|` (split verticale) e passare da una all’altra con `Tab`.

:::tip
Dopo aver creato una finestra divisa, vai su quella nuova con `Tab` e premi `"` per aprire una finestra precedente nella seconda vista dello split.
:::

Puoi dividere le finestre quanto vuoi, ma tieni conto che l’uso di RAM del server potrebbe aumentare parecchio, come ti aspetteresti multitaskingando.

## Conclusione

Speriamo che questa guida ti abbia aiutato a capire come funziona l’utility screen su Linux. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, sempre pronto ad aiutarti ogni giorno! 🙂