---
id: vserver-windows-nointernet
title: "VPS: Risolvi Problemi di Connessione Internet"
description: "Scopri come risolvere efficacemente i problemi di connessione internet sul tuo VPS Windows → Scopri di più ora"
sidebar_label: Risolvi Problemi Internet
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Una connessione internet interrotta o difettosa può dipendere da vari motivi, come indirizzo IP, subnet mask, gateway, server DNS o impostazioni firewall errate. In questa guida ti spieghiamo come risolvere e diagnosticare i problemi di rete più comuni.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="Come Risolvere Problemi di Connessione Internet su VPS Windows" description="Ti è più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che spiega tutto passo passo. Perfetto se sei di fretta o se preferisci imparare in modo super coinvolgente!"/>



<InlineVoucher />

## Accesso VNC senza Internet

Se non riesci a connetterti al tuo server tramite RDP (Remote Desktop) a causa della mancanza di connessione internet, puoi usare la console VNC (Virtual Network Computing) disponibile sul nostro sito.

Questa opzione ti permette di accedere al server e risolvere i problemi anche senza connessione internet attiva. Puoi trovarla nella sezione **Tools->VNC-Console** nel pannello web del tuo server.

Da qui puoi attivare la console cliccando su **Open Web Client** e accedere con le tue credenziali abituali.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Metodi di Risoluzione Problemi

### Controlla Indirizzo IP, Subnet Mask e Gateway

Il primo passo è verificare che la configurazione tecnica della scheda di rete del server sia corretta, inclusi indirizzo IP, subnet mask e gateway.

Vai nella sezione **Settings->IP-Addresses** nel pannello web del server per vedere tutti gli indirizzi IP attivi sul tuo servizio.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Ora accedi al server via RDP o tramite la console VNC se hai problemi. Vai nelle Impostazioni della scheda di rete di Windows seguendo il percorso: 
```
Settings -> Network and Internet -> Change Adapter Options -> Network Adapter
```

Trova l’opzione **Internet Protocol, Version 4 (TCP/IPv4)** nella lista e clicca su **Properties**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Configurazione della Scheda di Rete

Confronta le informazioni trovate nella scheda e assicurati che siano impostate così:
- Indirizzo IP: deve corrispondere all’indirizzo IP mostrato nella pagina **IP-Addresses** del pannello web.
- Subnet Mask: di solito `255.255.255.0` perché la nostra rete usa la classe C.
- Gateway Predefinito: deve essere il tuo indirizzo IP con l’ultimo ottetto (`.xxx`) sostituito da `.1`.

#### Esempio di Configurazione

:::info
Questo è un **esempio** per facilitare la comprensione. Sostituisci l’indirizzo IP con quello **del tuo** server.
:::

Con un IP `185.223.28.163`, la configurazione sarà:

| Impostazione    | Valore         |
| --------------- | -------------- |
| Indirizzo IP    | 185.223.28.163 |
| Subnet Mask     | 255.255.255.0  |
| Gateway Predefinito | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

Quando hai finito, clicca su **Ok** per applicare le modifiche. Ti consigliamo di riavviare il server per completare il processo di risoluzione.

### Impostazioni Server DNS

Se continui ad avere problemi di connessione, verifica che il server DNS sia configurato correttamente. Sostituisci eventuali valori DNS mancanti o errati con server DNS affidabili.

Ti consigliamo di usare i DNS di Google o Cloudflare, molto usati e stabili.

| Provider DNS | Valori Server DNS                      |
| ------------ | ------------------------------------- |
| Google       | Preferito: 8.8.8.8 / Alternativo: 8.8.4.4 |
| Cloudflare   | Preferito: 1.1.1.1 / Alternativo: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Clicca di nuovo su **Ok** per applicare. Anche qui, consigliamo di riavviare il server per completare la configurazione.

:::tip
Puoi aprire il prompt dei comandi (cmd.exe) sul server ed eseguire questo comando per impostare i DNS in modo rapido e semplice: 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::

### Impostazioni Firewall

Ultimo step: assicurati che il firewall di Windows sia configurato correttamente.

Prova a disabilitare temporaneamente il firewall per vedere se il problema persiste. Cerca **Windows Defender Firewall Settings** su Windows e seleziona **Turn Windows Defender Firewall on or off** nella colonna a sinistra.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

Se il problema si risolve disabilitando il firewall, probabilmente è un problema di configurazione firewall.

La soluzione dipende dal problema specifico. Se ti serve aiuto con le regole firewall, dai un’occhiata alla nostra guida su [Port Forwarding (Firewall)](vserver-windows-port.md).

## Reset Configurazione Rete

Puoi resettare la configurazione di rete direttamente dal pannello web del VPS cliccando su **Reset network configuration** nella pagina delle impostazioni. Questo riporta a default IP, subnet mask, gateway e DNS.

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Conclusione
Se hai seguito tutti i passaggi, la connessione dovrebbe tornare a funzionare normalmente. Per qualsiasi dubbio o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />