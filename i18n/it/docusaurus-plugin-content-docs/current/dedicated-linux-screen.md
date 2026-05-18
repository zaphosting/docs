---
id: dedicated-linux-screen
title: "Configura Screen su un Server Linux - Gestisci Sessioni Terminali Persistenti"
description: "Scopri come gestire più sessioni terminali su Linux con Screen per migliorare produttività e persistenza delle sessioni → Scopri di più ora"
sidebar_label: Installa Screen
services:
  - vserver
  - dedicated
---

## Introduzione

Screen è un terminal multiplexer per sistemi operativi Unix-like, come Linux. Ti permette di gestire più sessioni terminali all’interno di una singola finestra o connessione remota. In questa guida vedremo i passaggi per l’installazione e ti daremo qualche dritta per usare screen al meglio.

## Preparazione

Prima di installare qualsiasi cosa su un server, ti consigliamo di eseguire il comando di aggiornamento corrispondente al tuo sistema operativo per mantenere il server sicuro.

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

Si aprirà una nuova schermata screen dove potrai far partire script o programmi che continueranno a girare anche se chiudi la connessione remota.

Per uscire da uno screen usa `CTRL + A` seguito da `D` oppure digita `exit` nel terminale.

:::tip
Puoi vedere tutte le sessioni/screen attive con il comando `screen -ls` o `screen -list`.
:::

Per tornare a uno screen già creato, esegui `screen -r [name]` e verrai riportato subito alla sessione corrispondente.

## Flag dei Parametri di Screen

Screen ha tanti flag `-` per configurare i comandi. Ecco i più importanti in tabella.

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Mostra la versione corrente di screen |
| -S `[name]` | | Avvia un nuovo screen chiamato `[name]` |
| -ls | -list | Elenca tutti gli screen attivi |
| -wipe `[name]` | | Elimina screen, opzionalmente specificando `[name]` |
| -r `[name]` | | Ricollega alla sessione screen `[name]` |
| -d -r `[name]` | | Stacca dallo screen corrente e ricollega a `[name]` |

:::tip
Per vedere tutti i parametri disponibili esegui `screen -h` per una lista completa.
:::

## Uso Avanzato di Screen

### Gestione delle Finestre

Ora che hai preso confidenza con i comandi base di screen, è il momento di imparare qualche shortcut per navigare meglio tra le sessioni. Dentro uno screen puoi creare più finestre separate per task diversi.

:::note 
Tutti gli shortcut qui sotto vanno eseguiti dopo aver premuto `CTRL + A`.
:::

Premendo `C` crei una nuova finestra vuota nella directory corrente. Per spostarti tra le finestre usa `N` (next), `P` (previous) o `"` per aprire la lista e selezionare con le frecce.

Di default tutte le finestre hanno lo stesso nome (di solito il nome della shell che usi). Per cambiarlo premi `A` e scegli un nuovo nome.

Per chiudere una finestra premi `K`.

#### Finestre Divise

Per avere 2 finestre in split puoi usare `S` (orizzontale) o `|` (verticale) e passare da una all’altra con `Tab`.

:::tip
Dopo aver creato uno split, vai sulla nuova finestra con `Tab` e premi `"` per aprire una finestra precedente nella seconda vista dello split.
:::

Puoi dividere le finestre quanto vuoi, ma ricorda che l’uso di RAM del server aumenterà parecchio se fai multitasking pesante.

## Conclusione

Speriamo che questa guida ti abbia aiutato a capire come funziona lo screen su Linux. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, sempre pronto ad aiutarti ogni giorno! 🙂