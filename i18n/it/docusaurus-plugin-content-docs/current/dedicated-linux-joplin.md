---
id: dedicated-linux-joplin
title: "Dedicated Server: Configura Joplin su Linux"
description: "Scopri come organizzare e sincronizzare note Markdown criptate su più dispositivi con Joplin per prendere appunti in modo sicuro e flessibile → Scopri di più ora"
sidebar_label: Installa Joplin
services:
- dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Joplin è un’app open-source per prendere appunti e gestire to-do che ti permette di organizzare note in Markdown in quaderni ricercabili e sincronizzarle su tutti i tuoi dispositivi. Offre crittografia end-to-end, un web clipper e sincronizzazione cross-platform. Perfetto per chi punta a privacy, flessibilità e controllo totale sui propri dati!

![img](https://screensaver01.zap-hosting.com/index.php/s/qfo8k2RXWPFqi3g/preview)

Vuoi ospitare questo servizio in autonomia? Ti guidiamo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

:::danger Serve Linux con interfaccia grafica
Questa app può essere installata e usata solo su sistemi Linux con interfaccia grafica; in questo esempio usiamo Ubuntu Desktop 25.04 come riferimento.

:::





## Requisiti

Prima di installare **Joplin**, assicurati che il tuo ambiente di hosting soddisfi i seguenti requisiti per un’installazione fluida e prestazioni ottimali.

| Hardware | Minimo | Consigliato da ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU | 1 vCPU Core | 4 vCPU Core |
| RAM | 2 GB | 4 GB |
| Spazio disco | 250 MB | 250 MB |

Il software richiede che tutte le dipendenze necessarie siano installate e che giri su un sistema operativo supportato. Verifica che il tuo server rispetti questi requisiti prima di procedere con l’installazione:

**Dipendenze:** `Libfuse2`

**Sistema Operativo:** Linux con supporto Desktop

Assicurati che tutte le dipendenze siano installate e che la versione del sistema operativo sia corretta per evitare problemi di compatibilità durante l’installazione di Joplin.



## Preparazione

Prima di configurare **Joplin**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze richieste. Questi passaggi garantiscono un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.


### Aggiorna il sistema
Per assicurarti che il sistema abbia le ultime patch di sicurezza e aggiornamenti software, esegui sempre prima un aggiornamento completo. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il sistema sarà aggiornato prima di procedere.

### Installa le dipendenze
Una volta aggiornato il sistema, puoi installare le dipendenze necessarie.

#### Libfuse2
Joplin richiede Libfuse2. Per installarlo, esegui:

```
sudo apt install -y libfuse2
```




## Installazione
Ora che hai tutto pronto, puoi procedere con l’installazione di Joplin. Esegui questo comando:

```
wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash
```

Joplin verrà scaricato e installato tramite lo script ufficiale. Lascia che il processo termini e poi potrai avviare subito l’app.



![img](https://screensaver01.zap-hosting.com/index.php/s/Af9xjkqz7TSr4sZ/preview)



## Configurazione

Dopo l’installazione, configura le impostazioni base per adattare Joplin al tuo modo di lavorare. Trovi tutto nel menu *Impostazioni*.

**Sincronizzazione**  
Joplin supporta vari servizi di sync come Nextcloud, Dropbox, OneDrive o WebDAV. Scegli il tuo provider preferito in “Sincronizzazione” e inserisci le credenziali. Così le note saranno sempre aggiornate su tutti i dispositivi.

**Crittografia**  
Per proteggere le note sincronizzate, attiva la crittografia end-to-end nelle impostazioni “Crittografia”. Verrà generata una chiave da configurare su tutti i dispositivi che accedono alle note.

**Editor & Aspetto**  
Joplin usa Markdown per le note. In “Editor” puoi scegliere se mostrare l’anteprima automaticamente e personalizzare font e dimensioni.

**Plugin & Estensioni**  
Il gestore plugin integrato ti permette di aggiungere funzioni extra, come supporto a diagrammi, integrazione calendario o gestione avanzata dei tag.

**Web Clipper**  
Se vuoi, attiva l’estensione browser “Joplin Web Clipper” per salvare intere pagine web o selezioni direttamente come note.

Con queste impostazioni base, Joplin è pronto per gestire task, documentazione di progetti o basi di conoscenza personali.



![img](https://screensaver01.zap-hosting.com/index.php/s/FyjyeF3EcRFe2qf/preview)




## Conclusione e risorse utili

Complimenti! Hai installato e configurato Joplin sul tuo Dedicated Server. Ti consigliamo anche di dare un’occhiata a queste risorse per ulteriori info e supporto durante la configurazione:

- [Joplinapp.org](https://joplin.org/) - Sito ufficiale  
- [Joplinapp.org/help/](https://joplinapp.org/help/) - Centro assistenza Joplin

Hai domande specifiche che non trovi qui? Per qualsiasi dubbio o supporto, il nostro team è sempre a disposizione, tutti i giorni! 🙂