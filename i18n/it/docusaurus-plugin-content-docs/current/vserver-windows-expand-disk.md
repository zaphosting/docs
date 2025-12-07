---
id: vserver-windows-expand-disk
title: "VPS: Estendere il disco (partizione) su Windows Server"
description: "Scopri come estendere in sicurezza la partizione del tuo server Windows per sfruttare al meglio lo spazio disco → Scopri di più ora"
sidebar_label: Estendi Disco (Partizione)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Windows OS offre strumenti integrati per la gestione di dischi e partizioni che ti permettono di eseguire facilmente una vasta gamma di operazioni, tra cui estendere partizioni, dividere dischi e altro. Tra queste funzionalità c’è la possibilità di estendere le partizioni, particolarmente utile dopo aver aumentato la capacità di archiviazione del tuo server Windows. In questa guida vedremo come estendere una partizione sul tuo server Windows.

<InlineVoucher />

## Preparazione

Inizia collegandoti al tuo server Windows tramite RDP. Se ti serve una mano, dai un’occhiata alla nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Ci sono due modi per gestire dischi e partizioni: uno è tramite l’utility **Gestione Disco** (Disk Management) con interfaccia grafica, l’altro è tramite la CLI **diskpart**. Lo strumento **Gestione Disco** è una versione GUI di Diskpart che copre la maggior parte delle operazioni comuni, inclusa l’estensione delle partizioni. Per utenti più esperti, `diskpart` è più potente e flessibile.

## Estendere la Partizione

In diversi casi potrebbe essere necessario estendere la partizione esistente per sfruttare il nuovo spazio disco. Un esempio è l’upgrade dello spazio disco del server, che di default non viene assegnato finché non estendi la partizione principale.

Ti consigliamo di usare il metodo con l’utility **Gestione Disco** perché è più semplice, soprattutto se sei alle prime armi. Questo processo è sicuro e non influisce sui dati.

<Tabs>
<TabItem value="disk-management" label="Con Gestione Disco (GUI)" default>

Inizia aprendo lo strumento **Gestione Disco**. Cerca semplicemente “Gestione Disco” nel menu Start oppure premi `Windows Key + R`, digita `diskmgmt.msc` e conferma.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

Con lo strumento aperto, clicca col tasto destro sulla partizione principale e seleziona l’azione **Estendi Volume** che aprirà una nuova procedura guidata.

:::tip
La partizione di avvio principale è sempre la **C:**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

Nella procedura guidata clicca su **Avanti** per arrivare alla pagina di configurazione dove puoi decidere quanto spazio aggiungere. Di default Windows imposta automaticamente tutto lo spazio non allocato, che è la scelta ideale.

Quindi clicca di nuovo su **Avanti** e infine su **Fine** per completare l’operazione.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Al termine, la configurazione aggiornata verrà mostrata di nuovo in Gestione Disco con la dimensione del disco aggiornata.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Con Diskpart (CLI)">

Apri il prompt dei comandi come amministratore. Cerca “cmd” nel menu Start, clicca col destro e seleziona **Esegui come amministratore**.

Digita `diskpart` per entrare nell’utility CLI. Una volta avviata, esegui `list disk` per vedere tutti i dischi collegati.

Poi esegui `select disk [numero_disco]` sostituendo `[numero_disco]` con il numero del disco che vuoi estendere.

:::tip
La partizione di avvio principale è sempre la **C:**.
:::

Con il disco selezionato, esegui `list volume` per vedere tutti i volumi del disco selezionato. Trova il volume da estendere e poi esegui `select volume [numero_volume]` sostituendo `[numero_volume]` con il numero del volume.

Con disco e volume selezionati, puoi estendere il volume con questo comando. Puoi usarlo senza parametri per usare tutto lo spazio non allocato oppure specificare una dimensione.
```
# Estendi tutto lo spazio non allocato
extend

# Estendi a una dimensione specifica (10240 = 10240MB = 10GB)
extend size=10240
```

Se tutto va a buon fine, vedrai la dimensione del volume aumentare sia con il comando che in Esplora File. Per uscire da diskpart, digita `quit`.

</TabItem>
</Tabs>

## Conclusione

Hai esteso con successo la partizione principale del tuo disco per sfruttare tutto lo spazio disponibile. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />