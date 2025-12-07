---
id: vserver-windows-addip
title: "VPS: Configura indirizzi IP aggiuntivi su Windows"
description: "Scopri come ottimizzare le prestazioni e la sicurezza del server usando più indirizzi IP per una migliore isolazione dei servizi → Scopri di più ora"
sidebar_label: Indirizzi IP aggiuntivi
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Avere più indirizzi IP su un server può essere utile per diversi motivi, soprattutto in ambienti di rete complessi o per soddisfare requisiti specifici di performance, sicurezza e gestione della rete. Assegnare indirizzi IP diversi a servizi o applicazioni differenti sullo stesso server permette una migliore isolazione.

<InlineVoucher />


## Preparazione

L’uso di più indirizzi IP presuppone che il tuo pacchetto server li includa. Se non hai prenotato indirizzi IP aggiuntivi di default, dovrai prima aggiungerli tramite un upgrade. Poi, connettiti al tuo server via [RDP](vserver-windows-userdp).




## Configurazione



### Raccogliere le informazioni

Per prima cosa, ti servono le informazioni sugli indirizzi IP disponibili. Gli indirizzi IP aggiuntivi puoi vederli nella gestione server sotto la sezione Indirizzi IP.

![](https://screensaver01.zap-hosting.com/index.php/s/ER3d6R7T28mNSKp/preview)





### Accesso alla configurazione di rete

Ci sono vari modi per accedere alla configurazione di rete su un Windows Server. Per esempio, puoi aprire la configurazione di rete tramite il Pannello di Controllo sotto **Centro connessioni di rete e condivisione**.

Apri il **Pannello di Controllo**, clicca su **Rete e Internet**, poi su **Centro connessioni di rete e condivisione**. Vai su "Modifica impostazioni scheda" e fai doppio clic sull’adattatore di rete (Ethernet 2). Si aprirà la finestra dell’adattatore di rete, dove devi accedere alle proprietà.

Ora, nelle **Proprietà** dell’adattatore di rete, seleziona l’opzione **Protocollo Internet versione 4 (TCP/IPv4)**. Qui vedrai le info sull’indirizzo IP principale, la subnet mask, il gateway predefinito e i server DNS. Clicca sul pulsante **Avanzate** per aggiungere l’indirizzo IP aggiuntivo.

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### Aggiungere indirizzo(i) IP

Ora, l’indirizzo IP aggiuntivo si aggiunge tramite le **Impostazioni TCP/IP avanzate**. Clicca sul pulsante **Aggiungi** sotto Indirizzi IP e compila i campi per **Indirizzo IP** e **Subnet mask**. Nel campo indirizzo IP inserisci l’indirizzo IP aggiuntivo. La subnet mask da usare è 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Conclusione

L’indirizzo IP è stato configurato e aggiunto con successo. Puoi controllare lo stato attuale degli indirizzi IP andando nella sezione **Indirizzi IP** nella gestione server. Qui il nuovo indirizzo IP aggiunto dovrebbe apparire come raggiungibile.

![](https://screensaver01.zap-hosting.com/index.php/s/xBZGM72WX4nqXS6/preview)

<InlineVoucher />