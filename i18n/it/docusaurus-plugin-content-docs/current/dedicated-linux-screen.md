---
id: dedicated-linux-screen
title: "Server Dedicato: Installazione di Screen"
description: "Scopri come gestire più sessioni terminal su Linux con Screen per migliorare la produttività e mantenere le sessioni attive → Scopri di più ora"
sidebar_label: Installa Screen
services:
  - dedicated
---

## Introduzione

Screen è un terminal multiplexer per sistemi operativi Unix-like, come Linux. Ti permette di gestire più sessioni terminal all’interno di una singola finestra o connessione remota. In questa guida vedremo i passaggi per l’installazione e ti daremo qualche dritta per usare screen al meglio.

## Preparazione

Prima di installare qualsiasi cosa sul server, ti consigliamo di eseguire il comando di aggiornamento relativo al tuo sistema operativo per mantenere il server sicuro.

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

Installare lo screen è facilissimo, basta eseguire il comando giusto per la tua distro Linux:

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

Come detto, screen ti permette di creare più sessioni. Per avviarne una basta eseguire questo comando, sostituendo `[name]` con il nome che vuoi dare alla sessione.
```
screen -S [name]
```

:::info
Ricorda che i comandi in questa guida sono case sensitive, soprattutto per i flag dei parametri.
:::

Si aprirà una nuova schermata screen dove potrai lanciare script o programmi che continueranno a girare anche se chiudi la connessione remota.

Per uscire da uno screen usa `CTRL + A` seguito da `D` oppure digita `exit` nella console.

:::tip
Per vedere tutte le sessioni/screen attive usa il comando `screen -ls` o `screen -list`.
:::

Per tornare a uno screen già creato, esegui `screen -r [name]` e verrai riportato subito alla sessione corrispondente.

## Flag dei Parametri di Screen

Screen ha tanti flag `-` che puoi usare per configurare i comandi. Ecco i più importanti in tabella.

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Mostra la versione corrente di screen |
| -S `[name]` | | Avvia un nuovo screen chiamato `[name]` |
| -ls | -list | Elenca tutti gli screen attivi |
| -wipe `[name]` | | Cancella screen, opzionalmente specificando `[name]` |
| -r `[name]` | | Riattacca alla sessione screen `[name]` |
| -d -r `[name]` | | Stacca dallo screen corrente e riattacca a `[name]` |

:::tip
Per vedere tutti i parametri disponibili esegui `screen -h`, ti darà una lista completa.
:::

## Uso Avanzato di Screen

### Gestione delle Finestre

Ora che hai preso confidenza con i comandi base, vediamo qualche shortcut per navigare meglio tra le sessioni. Dentro uno screen puoi creare più finestre separate per task diversi.

:::note 
Tutti gli shortcut in questa sezione vanno eseguiti dopo aver premuto `CTRL + A`.
:::

Premendo `C` crei una nuova finestra vuota nella directory corrente. Per spostarti tra le finestre usa `N` (next), `P` (previous) o `"` e seleziona la finestra con le frecce.

Di default tutte le finestre hanno lo stesso nome (di solito il nome della shell). Per cambiarlo usa il comando `A` e scegli un nuovo nome.

Per chiudere una finestra premi `K`.

#### Finestre Divise

Per avere 2 finestre in split puoi usare `S` (orizzontale) o `|` (verticale) e passare da una all’altra con `Tab`.

:::tip
Dopo aver creato una finestra divisa, vai su di essa con `Tab` e usa `"` per aprire una finestra precedente nella seconda vista dello split.
:::

Puoi dividere le finestre quanto vuoi, ma tieni conto che la RAM del server potrebbe salire parecchio, come ti aspetteresti multitaskingando.

## Conclusione

Speriamo che questa guida ti abbia aiutato a capire come funziona lo screen su Linux. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, sempre pronto ad aiutarti ogni giorno! 🙂