---
id: dedicated-windows-ip-configuration
title: "Dedicated Server: Configurazione IP (Windows)"
description: "Scopri come configurare le impostazioni IP su un Dedicated Server Windows → Scopri di più ora"
sidebar_label: Configura indirizzi IP
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Configurare gli indirizzi IP sul tuo Dedicated Server Windows ti permette di controllare come il server comunica all’interno della rete. Questo include assegnare indirizzi IP, definire il gateway predefinito e configurare i server DNS necessari per la connettività di rete.

Una configurazione IP corretta è fondamentale per server che ospitano servizi come game server, web server, database o sistemi di accesso remoto, perché garantisce una comunicazione di rete stabile e un accesso affidabile.

:::warning Server irraggiungibile a causa di mancanza di connessione internet?
Se il tuo server diventa irraggiungibile a causa di una configurazione di rete errata o mancanza di connessione internet, l’accesso remoto tramite RDP potrebbe non funzionare più. Usa la [console iLO HTML](dedicated-ilo.md#the-html5-console) per connetterti al server e correggere la configurazione di rete.
:::

<InlineVoucher />

## Preparazione

Prima di configurare gli indirizzi IP, assicurati di avere a portata di mano queste informazioni:

- Indirizzo IP da assegnare
- Subnet mask
- Gateway predefinito
- Server DNS

Queste informazioni le trovi nell’interfaccia web. Apri la **gestione Dedicated Server** e vai su **Indirizzi IP**.

## Configurazione

Connettiti al tuo Dedicated Server tramite **Remote Desktop (RDP)**. Una volta connesso, apri il **Pannello di controllo**. Naviga su **Pannello di controllo → Rete e Internet → Centro connessioni di rete e condivisione**.

Clicca su **Modifica impostazioni scheda** a sinistra. Vedrai le interfacce di rete disponibili. Fai clic destro sulla tua scheda di rete attiva (di solito **Ethernet**) e seleziona **Proprietà**. Nella lista, seleziona **Protocollo Internet versione 4 (TCP/IPv4)** e clicca su **Proprietà**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Scegli **Utilizza il seguente indirizzo IP** e inserisci i valori richiesti:

- **Indirizzo IP** → Il tuo indirizzo IP assegnato
- **Subnet mask** → La tua subnet mask
- **Gateway predefinito** → Il tuo gateway
- **Server DNS →** 1.1.1.1, 8.8.8.8

Poi configura i server DNS selezionando **Utilizza i seguenti indirizzi server DNS** e inserendo i DNS preferiti. Dopo aver inserito tutti i valori, conferma con **OK** e chiudi le finestre aperte.

## Verifica

Per verificare la configurazione, apri il **Prompt dei comandi** e digita:
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

Questo comando mostra tutte le interfacce di rete e la loro configurazione IP attuale. Cerca la tua scheda di rete attiva e controlla che l’**Indirizzo IPv4** corrisponda all’indirizzo IP che hai configurato. Se l’indirizzo è corretto, la configurazione è stata applicata con successo.

## Conclusione

Complimenti! Hai configurato con successo le impostazioni IP sul tuo Dedicated Server Windows. Se hai altre domande o ti serve aiuto, il nostro supporto è disponibile ogni giorno per darti una mano.

<InlineVoucher />