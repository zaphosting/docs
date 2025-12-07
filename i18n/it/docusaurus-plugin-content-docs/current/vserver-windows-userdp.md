---
id: vserver-windows-userdp
title: "VPS: Accesso a Windows Server tramite Desktop Remoto (RDP)"
description: "Scopri come connetterti in modo sicuro al tuo server Windows da remoto usando RDP e gestire facilmente gli accessi → Scopri di più ora"
sidebar_label: Accesso Iniziale (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Windows OS utilizza il protocollo Remote Desktop (RDP) per facilitare facilmente la connessione remota ad altri sistemi Windows. In questa guida, ti mostreremo il semplice processo di connessione via RDP al tuo server Windows.

<InlineVoucher />

## Preparare i Dati di Connessione

Indipendentemente dall’app che usi per accedere al server Windows, ti verrà sempre richiesto di inserire le credenziali per connetterti.

Inizia accedendo al pannello web del tuo server e vai alla sezione **Accesso & Sicurezza**. Qui potrai vedere tutte le info necessarie, principalmente l’**Indirizzo IP** del server e le credenziali di accesso. Le tue credenziali sono composte dal campo **Username**, che dovrebbe essere `Administrator`, e dal campo **Password**.

Se il server è nuovo, potrai vedere la password iniziale generata casualmente tramite un prompt su questa pagina. Altrimenti, la password è nascosta per motivi di sicurezza, ma se la dimentichi puoi sempre generarne o impostarne una nuova dalla stessa pagina.

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

Ora che hai tutte le info di connessione, passa alla sezione successiva per scegliere l’app giusta per connetterti.

## Connessione da Windows

Da quando esiste RDP, Windows ha l’app **Connessione Desktop Remoto** preinstallata come app di sistema. Puoi aprirla semplicemente cercandola nella barra di ricerca di Windows o premendo il tasto Windows e usando la barra di ricerca del menu Start.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Nella nuova finestra, inserisci nel campo **Computer** l’indirizzo IP del tuo server e clicca su **Connetti**. Ora vedrai apparire la finestra nativa di inserimento credenziali di Windows, dove dovrai mettere come **Username** `Administrator` e la **Password** del tuo server Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Premi **OK** e dovresti riuscire a connetterti in remoto al tuo server Windows. Se hai problemi, ricontrolla che le credenziali inserite siano corrette.

:::info
Potresti vedere un errore di certificato al primo collegamento. È normale e puoi ignorarlo in sicurezza.
:::

Sei connesso con successo al tuo Windows Server.

## Altre App per Connessione Remota (RDP)

### App Desktop

Ecco alcune ottime alternative per connetterti al tuo server Windows tramite il protocollo Remote Desktop (RDP). Ti consigliamo comunque di usare l’app integrata se accedi da Windows (come visto sopra), perché è più semplice e funziona alla grande.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### App per Dispositivi Mobili

Oggi Microsoft offre un’app ufficiale Remote Desktop (RDP) per i due principali sistemi operativi mobili. Ti consigliamo di usarle su mobile perché hanno un sacco di funzioni utili.

Puoi scaricarle qui, in base alla piattaforma: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) e [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />