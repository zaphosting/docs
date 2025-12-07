---
id: minecraft-add-own-world
title: "Minecraft: Aggiungi il tuo mondo al server"
description: "Scopri come caricare e configurare mondi Minecraft personalizzati sul tuo server per un'esperienza di gioco su misura → Scopri di più ora"
sidebar_label: Aggiungi il tuo mondo
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Vuoi usare il tuo mondo o un mondo scaricato da internet sul tuo server? Allora sei nel posto giusto! Ti serve solo il tuo mondo e un client FTP. Se non sai cos’è un client FTP e come usarlo, dai un’occhiata a questa guida: [Accesso via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="Come caricare MAPPE personalizzate sul tuo server Minecraft" description="Ti è più facile capire vedendo le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

Una volta stabilita la connessione al server via FTP, puoi iniziare a configurare il tuo mondo. Per farlo, devi prima andare nella cartella giusta dove si trova il mondo attuale. Si trova nella directory: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

Ora devi caricare il nuovo mondo nella cartella. Puoi cancellare e sostituire la vecchia cartella **world** oppure caricare il nuovo mondo con un nome diverso. In questo esempio carichiamo il mondo con un nome nuovo:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Adesso devi solo configurare il mondo appena caricato nel file **server.properties**. Lo trovi nella **gestione del game server** sotto **Config**. Qui devi modificare il valore del comando **level-name=**:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

Dopo aver riavviato il server, il nuovo mondo sarà attivo. Goditi il tuo nuovo mondo! 🙂

<InlineVoucher />

<InlineVoucher />