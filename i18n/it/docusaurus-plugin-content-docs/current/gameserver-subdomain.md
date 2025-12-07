---
id: gameserver-subdomain
title: 'Game server: Sottodominio ZAP'
description: "Scopri come configurare e gestire i sottodomini per il tuo game server per una migliore accessibilità e personalizzazione → Scopri di più ora"
sidebar_label: Sottodominio Gameserver
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I nostri Game Server ora offrono la possibilità di configurare facilmente e rapidamente sottodomini per il tuo server. In questa guida scoprirai come utilizzare la funzionalità DNS Subdomain per il tuo server, per generare un sottodominio ZAP Cloud o configurare il tuo dominio personalizzato.

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="Dominio ZAP Cloud per Game Server" description="Ti è più chiaro vedere le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che spiega tutto passo passo. Che tu sia di fretta o preferisca assorbire le info nel modo più coinvolgente possibile!"/>

![](https://screensaver01.zap-hosting.com/index.php/s/yJTBQ7oC926LfbT/preview)

<InlineVoucher />

## Disponibilità

La funzione Sottodominio è disponibile sia per nuovi che per clienti esistenti. I nuovi clienti avranno un sottodominio `xxx`**.zap.cloud** configurato automaticamente durante il processo di installazione. I clienti esistenti dovranno attivarlo manualmente nella sezione **Impostazioni->Impostazioni DNS** nel pannello web del game server. L’uso di questa sezione sarà spiegato nella prossima parte.

Non tutti i giochi sono ancora supportati, ma siamo felici di averla già attiva su diversi titoli popolari come FiveM, Minecraft e altri! A lungo termine puntiamo a estendere questa funzione a quanti più giochi possibile. Purtroppo, alcuni giochi rendono tecnicamente impossibile l’aggiunta, e per questi vedrai semplicemente l’indirizzo IP come al solito nell’interfaccia web.

:::tip
Se il gioco che hai installato non è ancora supportato, contatta pure il [nostro Supporto](https://zap-hosting.com/en/customer/support/) e vedremo se possiamo aggiungerlo :)
:::

## Gestione dei Sottodomini (DNS)

Gestire la funzione sottodominio sul tuo game server è semplice. Vai alla sezione **Impostazioni->Impostazioni DNS** per iniziare.

Qui potrai svolgere varie operazioni di gestione relative sia al sottodominio gratuito ZAP Cloud sia all’uso dei tuoi domini personali configurati nel tuo account ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/M6SMHKJcZ3GgXQd/preview)

:::info
Attualmente puoi avere un massimo di 3 sottodomini attivi per prodotto (escluso il sottodominio ZAP Cloud generato casualmente).
:::

### Sottodominio ZAP Cloud Casuale

Per generare un sottodominio ZAP Cloud casuale, usa il pulsante **Risolvi sottodomini** che trovi in questa pagina delle impostazioni.

:::info
Anche i clienti esistenti devono usare questo pulsante per generare un sottodominio ZAP Cloud casuale la prima volta.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

### Sottodominio ZAP Cloud Personalizzato

Puoi creare il tuo sottodominio ZAP Cloud personalizzato semplicemente inserendo il nome che vuoi usare e selezionando **.zap.cloud** dal menu a tendina (opzione predefinita).

:::note
Se ricevi un errore, è possibile che il sottodominio sia già in uso e/o che tu abbia inserito una parola o carattere vietato per proteggere i nostri clienti.
:::

Ora clicca su **Crea voce** e vedrai il sottodominio comparire nella lista. Potrebbero volerci alcuni minuti prima che sia completamente operativo.

![](https://screensaver01.zap-hosting.com/index.php/s/odqKSyzXRLi5zRx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yWmt4j3nWEgbN6K/preview)

### Dominio Proprio

:::info
Per poter usare il tuo dominio per creare un sottodominio, assicurati che sia associato al tuo account ZAP-Hosting acquistandolo sul nostro sito o trasferendolo da un altro provider.
:::

Creare un sottodominio con il tuo dominio segue gli stessi passaggi del sottodominio ZAP Cloud personalizzato. Inserisci il sottodominio che vuoi usare e seleziona il tuo dominio dal menu a tendina.

:::note
Se ricevi un errore, è possibile che il sottodominio sia già in uso e/o che tu abbia inserito una parola o carattere vietato per proteggere i nostri clienti.
:::

Ora clicca su **Crea voce** e vedrai il sottodominio comparire nella lista. Potrebbero volerci alcuni minuti prima che sia completamente operativo.

![](https://screensaver01.zap-hosting.com/index.php/s/Xoe8c4T9TNpby27/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AX9yFSb3nRNoKiF/preview)

## Risoluzione Problemi

### Sottodominio ZAP Cloud

Se hai problemi con i sottodomini ZAP Cloud, puoi provare a risolverli da solo andando nella sezione **Impostazioni->Impostazioni DNS** come spiegato prima, e usando il pulsante **Risolvi sottodomini** in fondo alla pagina.

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

Aspetta qualche minuto prima di ricontrollare se funzionano correttamente.

### Dominio Personalizzato

Se non vedi il tuo dominio nel menu a tendina quando provi a creare un sottodominio, probabilmente non è associato al tuo account ZAP-Hosting.

Assicurati che il dominio sia attivo nel tuo account ZAP-Hosting, magari trasferendolo da un altro provider.

Se hai ancora problemi con qualsiasi parte della funzione sottodominio, contatta il nostro Supporto aprendo un ticket sul [nostro sito](https://zap-hosting.com/en/customer/support/) e saremo felici di aiutarti.

<InlineVoucher />