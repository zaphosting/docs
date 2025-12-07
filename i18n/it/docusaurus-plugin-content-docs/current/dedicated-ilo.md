---
id: dedicated-ilo
title: "Dedicated Server: iLO"
description: "Scopri come gestire completamente il tuo Enterprise Dedicated Server con iLO per un controllo e monitoraggio senza intoppi → Scopri di più ora"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Nei nostri Enterprise Dedicated Server utilizziamo l'interfaccia di gestione iLO, che ti permette una gestione completa e senza limiti del tuo server.  
Le sue funzionalità includono l'accensione/arresto/riavvio del server, console di gestione via Java o HTML5, montaggio di media di avvio (ISO).  
Modifica le impostazioni con attenzione, perché cambi sbagliati possono causare grossi problemi.

## Accesso iLO
Apri il pannello di controllo del tuo ZAP Dedicated Server con il browser che preferisci. Qui troverai già le info più importanti sul tuo iLO.  
Per attivare l’iLO clicca semplicemente su "Attiva iLO".  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Tieni presente che potrebbero volerci alcuni secondi prima che il tuo iLO sia completamente disponibile.  
Quando il sistema ha avviato l’interfaccia di gestione e questa è accessibile, vedrai le credenziali di login.  
Per aprire l’iLO clicca sull’indirizzo IP mostrato e usa le credenziali per accedere.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Dopo un attimo sarai dentro l’interfaccia di amministrazione del tuo dedicated server.  
Qui trovi un sacco di info importanti:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Panoramica
* **System Health**  
Di solito dovrebbe essere verde. Ad ogni avvio il server controlla l’hardware e segnala subito eventuali problemi.  
Le possibili condizioni sono: verde (OK), giallo (Degradato) e rosso (Critico). Può succedere che il server segnali un SSD degradato, di solito non è un problema.  
Ovviamente puoi contattare il supporto, controlleremo per te se serve intervenire. Se lo stato è rosso ("Critico"), avvisa subito il supporto.  
Il primo passo per risolvere è sempre un reboot completo del server.

* **iLO Health**  
Mostra info più dettagliate sui parametri iLO, non dovresti vedere cambiamenti significativi.  
Non è necessario modificare nulla in questa scheda.

* **Server Power**  
Ti mostra lo stato del server, ad esempio "ON" significa che il server è acceso.

* **Integrated Remote Console**  
Qui puoi vedere il server in tempo reale ed eseguire comandi.  
Le console remote si differenziano in due tipi:  
HTML5 si avvia direttamente nel browser senza bisogno di software esterni.  
Java Web Start, come dice il nome, usa Java per aprire la console di gestione.  
Eventuali avvisi di sicurezza possono essere tranquillamente ignorati.  
Come connetterti passo passo con la console remota lo trovi nelle istruzioni dettagliate.

* **Active Sessions**  
Vedi tutti gli utenti attualmente connessi a iLO.

### iLO Event Log
Registra tutte le modifiche fatte tramite iLO, ad esempio login, avvii/arresti server e modifiche alle impostazioni.

### Integrated Management Log
Memorizza tutte le info hardware rilevanti, come i risultati del POST (Power On Self Test) eseguito ad ogni avvio.  
Se ci sono problemi hardware, li vedrai qui.

### Virtual Media
Per integrare i tuoi media di avvio (ISO) usa il sottomenu "Connect CD/DVD-ROM".  
L’ordine di boot è configurato per avviare sempre prima un ISO registrato.  
Puoi cambiare l’ordine nel menu "Boot Order".

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

In "Scripted Media URL" devi inserire il link completo dell’ISO che vuoi montare, ad esempio: http://mydomain.com/bootimage.iso  
Il link deve puntare direttamente all’ISO, quindi deve finire con .iso.  
Poi clicca su "Insert Media" e riavvia il server da "Power Management".  
Il server caricherà l’ISO inserito.

### Power Management
Qui puoi fare tutto ciò che riguarda l’accensione e lo spegnimento del tuo ZAP Dedicated Server.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Graceful Power Off**  
Spegne il server in modo ordinato, come premere una volta il tasto power del tuo notebook/PC.  
Tutte le applicazioni vengono chiuse correttamente e il server si spegne in modo programmato.  
Ovviamente può richiedere un po’ di tempo a seconda delle app in esecuzione.

* **Force Power Off**  
Se devi spegnere subito il server senza aspettare, questa è l’opzione giusta. È come staccare la spina.  
Il sistema si spegne immediatamente senza ritardi.

* **Force System Reset**  
Fa un reboot immediato del sistema.

### Power Meter
Ti mostra il consumo medio di energia del sistema, più è alto il consumo, più è alto il carico sul server.

### Network
Mostra la configurazione di rete del tuo iLO, tieni presente che queste impostazioni non riguardano la rete del server vero e proprio.

:::info
Per configurare il server o se l’accesso via rete non funziona, puoi sempre guardare direttamente il server.
:::

## Remote Consoles (Display)
iLO ti offre due tipi di console remote di default:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### Console HTML5
Con un click sei già dentro il server, non serve altro software e si avvia direttamente nel browser.  
Offre tanti strumenti utili:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - impostazioni power management (start, stop, reboot) del server  
* 2 - invio scorciatoie da tastiera (es. CTRL + ALT + DEL)  
* 3 - montaggio ISO > CD/DVD > Scripted Media URL  
* 4 - System Health  
* 5 - Stato alimentazione server (ON / OFF)  

Se il server ha un’interfaccia grafica (GUI), puoi usare il mouse normalmente e la tastiera funziona come al solito.

### Console Java
Per usare la console Java devi avere Java installato (scaricabile da java.com).  
:::info
Eventuali messaggi di sicurezza possono essere ignorati.
:::

Dopo aver aperto il file vedrai questo messaggio, conferma con "Continue".  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Accetta il rischio e conferma con "Run".  

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Ora si apre la console Java.  
:::info
L’app spesso cambia la tastiera in layout "EN".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - impostazioni power management (start, stop, reboot) del server  
* 2 - montaggio ISO > URL CD/DVD-ROM  
* 3 - invio combinazioni tasti (es. CTRL + ALT + DEL)  
* 4 - System Health  
* 5 - Stato alimentazione server (ON / OFF)  

Se il server ha GUI, mouse e tastiera funzionano normalmente.

## Problemi comuni, consigli & trucchi

* Il server si blocca al POST (Power On Self Test) e non si avvia più.  
Connettiti alla console remota e verifica dove si blocca esattamente. Ci sono errori?  
Spegni il server da Power Management per qualche secondo (Force Power Off) e riaccendilo (Momentary Press).  
Se non si avvia ancora, contatta il supporto.

* L’ISO non si carica.  
Controlla che il link all’ISO sia corretto, il modo più semplice è incollare il link nel browser: se parte il download va bene.  
Assicurati che il link sia inserito correttamente in Virtual Media e che il server sia stato riavviato. Controlla anche l’ordine di boot e verifica che il CD/DVD Drive sia in cima.

* Il server impiega molto ad avviarsi.  
L’hardware Enterprise usato impiega tempo ad avviarsi, è normale. Può volerci anche 10-15 minuti.

* Non riesco più ad aprire l’iLO  
Controlla che l’iLO sia abilitato nel pannello server, per sicurezza l’interfaccia di gestione si spegne automaticamente dopo un po’.  
Puoi disabilitare e riabilitare l’iLO (aspetta almeno 5 minuti dopo l’attivazione).

## Conclusione

Ora la gestione sarà molto più semplice dopo aver letto tutto con calma. Per domande o aiuto, il nostro supporto è sempre pronto a darti una mano, tutti i giorni! 🙂