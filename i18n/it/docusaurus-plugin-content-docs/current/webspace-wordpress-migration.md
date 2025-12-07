---
id: webspace-wordpress-migration
title: "Webspace: Migrare il tuo sito WordPress su ZAP-Hosting"
description: "Scopri come migrare senza problemi il tuo sito WordPress su ZAP-Hosting Webspace e potenziare la tua presenza online → Scopri di più ora"
sidebar_label: Migrazione
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato ai nostri potenti prodotti Webspace e vuoi passare da noi? Sei nel posto giusto! In questa guida vedremo come migrare il tuo sito WordPress sul tuo prodotto ZAP-Hosting Webspace usando un plugin WordPress.

<InlineVoucher />

## Preparazione

Prima di continuare con la guida, assicurati di avere pronto quanto segue:
- Un dominio, con accesso admin per gestire le impostazioni DNS.
- Accesso admin alla tua vecchia installazione WordPress.
- Un prodotto [Webspace](https://zap-hosting.com/en/shop/product/webspace/) attivo con noi.

## Passo 1: Preparare il Webspace

Inizia visitando la nostra pagina prodotto [Webspace](https://zap-hosting.com/en/shop/product/webspace/) e acquista il piano hosting webspace più adatto alle esigenze del tuo sito. Una volta attivato il prodotto, dovrai installarci WordPress. Leggi la nostra guida dedicata [Installazione](webspace-wordpress.md) per istruzioni dettagliate.

Con WordPress installato sul Webspace, dovrai collegare il tuo dominio. Anche in questo caso, consulta la nostra guida dedicata [Aggiungere Dominio](webspace-adddomain.md) per i dettagli.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Passo 2: Configurare il plugin Migrate Guru

Per automatizzare la migrazione userai il plugin WordPress **Migrate Guru**, gratuito e molto popolare. Dovrai installarlo sia sulla tua vecchia che sulla nuova installazione WordPress.

:::tip Accesso al pannello admin
Per accedere come admin a un sito WordPress, apri il browser e vai sul tuo sito. Aggiungi `/wp-admin` alla fine dell’URL (es. `[tuo_sito].com/wp-admin`) e premi invio. Verrai reindirizzato alla pagina di login admin WordPress, dove dovrai inserire le credenziali del pannello admin del tuo vecchio hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

Nel pannello WordPress, vai nella sezione **Plugin** sulla sinistra. Seleziona **Aggiungi nuovo** e cerca **Migrate Guru** nella barra di ricerca.

Quando appare il risultato, clicca su **Installa** e poi su **Attiva**. Assicurati di farlo sia sulla vecchia che sulla nuova installazione WordPress prima di procedere.

Una volta attivato, ti verrà chiesto di inserire la tua email e accettare termini e condizioni, completa questa procedura.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Passo 3: Ottenere la Migration Key

Con Migrate Guru installato su entrambe le installazioni, devi recuperare la **Migration Key** dalla tua **nuova** installazione WordPress su ZAP-Hosting.

La trovi nella sezione **Migrate Guru** nel menu a sinistra del pannello WordPress. Copia questa chiave, ti servirà nel passo successivo.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Backup consigliato
Per sicurezza, ti consigliamo di fare un backup della tua vecchia installazione WordPress prima di procedere con la migrazione tramite plugin. La migrazione non causa perdita dati, ma è sempre meglio avere un backup pronto.
:::

## Passo 4: Processo di migrazione

Torna al pannello admin della tua **vecchia** installazione WordPress. Nella sezione **Migrate Guru**, clicca su **Migrate** e seleziona **Other Hosts** dalla lista.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Incolla la Migration Key che hai copiato dalla tua nuova installazione WordPress ZAP-Hosting e clicca su **Migrate** per avviare la migrazione.

:::warning
Assicurati di copiare la Migration Key dal pannello admin WordPress **nuovo** di ZAP-Hosting e incollarla nel pannello admin WordPress **vecchio**. Se fai il contrario, rischi di cancellare dati.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

Dopo aver cliccato su **Migrate**, la migrazione partirà subito dopo alcuni controlli di validazione.

La migrazione avviene in background senza downtime e dovrebbe completarsi in pochi minuti. La durata dipende dalla dimensione del sito. Quando finisce, vedrai una schermata di successo.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
Ti consigliamo di testare a fondo il sito sulla nuova installazione WordPress per assicurarti che la migrazione sia andata a buon fine.
:::

## Passo 5: Aggiornare le impostazioni DNS del dominio

Con la migrazione completata, l’ultimo passo è aggiornare le impostazioni DNS del tuo dominio per puntare al nuovo Webspace.

Devi modificare i DNS del dominio impostando l’indirizzo IP del webspace ZAP Hosting, così il sito WordPress sarà servito dai nostri server.

Per trovare l’IP del webspace, vai al pannello web del tuo webserver sul sito ZAP-Hosting e apri la sezione **DNS**. Qui trovi l’IP del tuo Webspace.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

Ora che hai l’IP, se il dominio non è gestito da ZAP-Hosting, accedi al pannello del tuo provider dominio.

Cerca la sezione **DNS Settings** o simile. Devi sostituire tutti gli **A Record** che puntano al vecchio hosting con l’IP del tuo Webspace ZAP.

Fallo per tutti gli A Record ancora attivi verso il vecchio hosting. Quando finito, il dominio sarà pronto per funzionare con il tuo sito WordPress su ZAP-Hosting.

:::info
Ricorda che le modifiche ai record DNS possono impiegare fino a 24 ore per propagarsi. Di solito è veloce, ma a volte può richiedere più tempo.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Passo 6: Configurare il certificato SSL

Ultimo step: ti consigliamo di configurare un nuovo certificato SSL per il tuo sito sul Webspace ZAP-Hosting. Di default, quando aggiungi un dominio al webspace, non è ancora criptato.

Consulta la nostra guida dedicata [Creare certificato SSL](webspace-plesk-ssl.md) per istruzioni dettagliate su come fare.

## Conclusione

Seguendo questa guida, hai migrato con successo il tuo vecchio sito WordPress sul nuovo Webspace ZAP-Hosting. Ti consigliamo di testare tutto a fondo per assicurarti che la migrazione sia andata liscia.

<InlineVoucher />