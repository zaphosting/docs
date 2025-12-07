---
id: discordbot-setup
title: Configura il tuo Discord Bot
description: "Scopri come far girare e gestire bot Discord per moderazione, musica, giveaway e altro con un hosting server senza intoppi → Scopri di più ora"
sidebar_label: Configurazione
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione

Un **server per bot Discord** ti permette di far girare i tuoi bot Discord in modo fluido e continuo. Questi bot possono svolgere un sacco di compiti, come moderare automaticamente il tuo canale Discord, suonare musica, organizzare giveaway e sondaggi, e molto altro.

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="Come configurare un server per bot Discord e caricare i file del bot!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

<InlineVoucher />



## Linguaggi supportati

I bot Discord possono essere programmati in diversi linguaggi. Il nostro prodotto supporta bot Discord scritti in uno dei seguenti linguaggi di programmazione supportati:

- Java
- Python
- NodeJS

  
  

## Preparazione



### Procurati il Bot

Per iniziare, ti serve un bot Discord completamente funzionante. Puoi crearne uno da zero oppure scaricare un bot già pronto da internet. Salvalo sul tuo PC così potrai caricarlo facilmente sul tuo servizio.

### Carica i file

I file del tuo bot Discord devono essere caricati. Puoi farlo tramite FTP. Se non sai come usare FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md) per istruzioni dettagliate.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Una volta aperta la cartella, puoi semplicemente caricare i file del bot nella cartella vuota:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Configurazione

Per poter far partire il bot tramite il Dashboard, devi configurarlo nella pagina **Impostazioni** del Discord Bot Dashboard.

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Qui devi indicare quale linguaggio di programmazione usa il bot e come si chiama il file principale. In questo esempio si usa Python 3 e si specifica il nome del file del bot Discord da eseguire, che è `main.py`.

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Dipendenze
I bot Discord spesso hanno dipendenze aggiuntive per funzionare correttamente. Assicurati che tutte siano presenti e configurate correttamente nel bot Discord. Queste sono definite nei seguenti file:

- Python: dipendenze in `requirements.txt`.
- Node.js: dipendenze in `package.json`.
- Java: dipendenze in `pom.xml` (Maven) o `build.gradle` (Gradle).

:::



## Test della funzionalità

Dopo aver salvato le impostazioni, puoi avviare il bot semplicemente cliccando sul pulsante verde di avvio in alto nella pagina. Nella console live puoi controllare se il bot è partito correttamente.



## Conclusione

Congratulazioni, hai installato e configurato con successo il tuo Discord Bot. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂






<InlineVoucher />