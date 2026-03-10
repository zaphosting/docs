---
id: vserver-windows-troubleshooting-icmpv4-echo
title: "Risoluzione problemi di rete: ICMPv4 Echo mancante – Server sembra offline"
description: "Scopri come permettere le richieste ICMPv4 Echo nel Windows Firewall così il tuo server può essere rilevato correttamente dai sistemi di monitoraggio → Scopri di più ora"
sidebar_label: ICMPv4 Echo mancante
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In alcune situazioni un server Windows può sembrare **offline nel pannello di controllo** anche se il sistema funziona normalmente. Questo comportamento è solitamente legato alle impostazioni del firewall che bloccano le **richieste ICMPv4 Echo**. Queste richieste sono usate dal famoso comando `ping` e sono comunemente utilizzate dai sistemi di monitoraggio per capire se un server o un indirizzo IP è raggiungibile.

Se il Windows Firewall blocca le richieste ICMP Echo, il sistema di monitoraggio non riceve risposta dal server. Di conseguenza, il pannello di controllo può mostrare il server o gli IP assegnati come offline anche se il server funziona senza problemi.

![img](https://screensaver01.zap-hosting.com/index.php/s/ptD4W4MkAo85PAo/download)



## Causa

La causa più comune di questo problema è la mancanza di una regola nel **Windows Defender Firewall** che permetta le richieste ICMPv4 Echo in ingresso. Senza questa regola, il firewall blocca di default le richieste ping.

I sistemi di monitoraggio si basano su queste risposte per verificare la disponibilità del server, motivo per cui il sistema può sembrare offline anche se i servizi sul server continuano a funzionare normalmente.



## Soluzione

Per risolvere il problema, devi creare una regola firewall che permetta le richieste ICMPv4 Echo. Inizia stabilendo una connessione via VNC. Per farlo, clicca su **VNC Console** nella sezione di gestione del VPS e accedi con le tue credenziali abituali.

![img](https://screensaver01.zap-hosting.com/index.php/s/mDQt7LLbLNSPC6a/download)

Una volta loggato, apri l’interfaccia **Windows Defender Firewall con sicurezza avanzata**. Premi `Windows + R`, inserisci il comando seguente e conferma con Invio:

```
wf.msc
```
Si aprirà la finestra di configurazione avanzata del firewall. Nel menu di navigazione a sinistra seleziona **Regole in ingresso**, perché il server deve accettare richieste ICMP in entrata. Sul lato destro scegli **Nuova regola** per crearne una nuova.

Durante la creazione della regola scegli **Personalizzata** come tipo di regola. Nel passaggio successivo seleziona il tipo di protocollo **ICMPv4**. Dopo aver selezionato il protocollo, apri le impostazioni **Personalizza** e abilita l’opzione **Echo Request**, che permette al server di rispondere alle richieste ping.

Prosegui con il wizard e seleziona **Consenti la connessione** come azione per questa regola. Nel passaggio di selezione del profilo puoi solitamente abilitare la regola per tutti i profili così funziona indipendentemente dal fatto che il server sia in una rete pubblica, privata o di dominio.

Infine assegna un nome chiaro alla regola, ad esempio `Consenti richieste ICMPv4 Echo`. Dopo aver completato il wizard, la nuova regola permetterà immediatamente le richieste ICMP Echo in ingresso.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Verifica

Una volta creata la regola, puoi verificare che il server risponda alle richieste ping. Da un altro sistema, esegui il comando seguente:
```
ping <IL_TUO_IP_SERVER>
```
Se il server risponde correttamente, anche il sistema di monitoraggio potrà rilevarlo di nuovo. Dopo poco il stato del server nel pannello dovrebbe cambiare da offline a online.



## Conclusione

Congratulazioni! Creando la regola ICMPv4 Echo nel Windows Firewall hai assicurato che il tuo Windows VPS possa rispondere di nuovo alle richieste ping.

Questo permette ai sistemi di monitoraggio di rilevare correttamente la disponibilità del tuo server e evita che appaia offline nel pannello di controllo.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂