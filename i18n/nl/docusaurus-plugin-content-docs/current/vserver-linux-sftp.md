---
id: vserver-linux-sftp
title: "VPS: Verbinding maken via SFTP"
description: "Ontdek hoe je veilig bestanden overzet met SFTP en je data beschermt met versleutelde verbindingen → Leer het nu"
sidebar_label: SFTP Verbinding
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Introductie

SFTP is een veilig protocol om bestanden tussen computers te versturen via het internet of een netwerk. Het staat voor **“SSH File Transfer Protocol”** of **“Secure File Transfer Protocol”** en is gebaseerd op het **SSH-protocol (Secure Shell)**.

In tegenstelling tot FTP (File Transfer Protocol), waarbij data onversleuteld wordt verstuurd, zorgt SFTP ervoor dat alle data versleuteld is en dus beschermd tegen ongeautoriseerde toegang.

<InlineVoucher />



## Verbinding maken

Voor de verbinding via **SFTP** gebruik je de inloggegevens van de root-gebruiker. Dit voorbeeld laat zien hoe je de verbinding opzet met de WinSCP-app. Maak een **Nieuwe sessie** aan in WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

Kies `SFTP` als **overdrachtsprotocol** in het configuratievenster van de nieuwe sessie. Vul vervolgens het **IP-adres** van je server in en poort **22**. Voor de gebruikersnaam en het wachtwoord gebruik je de inloggegevens van je `root` gebruiker.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Gebruik van SSH-sleutels
Als je een SSH-sleutel gebruikt in plaats van alleen een wachtwoord, klik dan op **Geavanceerd** en ga naar **SSH -> Authenticatie**. Daar kun je je SSH-sleutel opslaan.
:::

De eerste keer dat je verbinding maakt via SFTP verschijnt dit bericht omdat je computer de server nog niet kent. Bevestig met **“Ja”** als je de server vertrouwt. Hierdoor wordt de beveiligingssleutel opgeslagen en wordt je bij volgende verbindingen niet meer gevraagd. Dit is een normale stap bij de eerste keer verbinden met een nieuwe server.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Conclusie

Als je alle stappen hebt gevolgd, heb je nu succesvol een SFTP-verbinding met je server opgezet. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />