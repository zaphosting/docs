---
id: vserver-linux-sftp
title: "VPS: Skapa anslutning via SFTP"
description: "Upptäck hur du säkert överför filer med SFTP och skyddar dina data med krypterade anslutningar → Lär dig mer nu"
sidebar_label: SFTP-anslutning
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Introduktion

SFTP är ett säkert protokoll för att överföra filer mellan datorer via Internet eller ett nätverk. Det står för **“SSH File Transfer Protocol”** eller **“Secure File Transfer Protocol”** och bygger på **SSH-protokollet (Secure Shell)**.

Till skillnad från FTP (File Transfer Protocol), där data överförs okrypterat, ser SFTP till att all data är krypterad och därmed skyddad från obehörig åtkomst.

<InlineVoucher />



## Skapa anslutning

För anslutningen via **SFTP** används inloggningsuppgifterna för root-användaren. Det här exemplet visar hur du ställer in anslutningen med WinSCP-appen. Skapa en **Ny session** i WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

Välj `SFTP` som **överföringsprotokoll** i konfigurationsfönstret för den nya sessionen. Ange sedan **IP-adressen** till din server och port **22**. För användarnamn och lösenord använder du inloggningsuppgifterna för din `root`-användare.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Användning av SSH-nycklar
Om du använder en SSH-nyckel istället för lösenordsalternativet, klicka på **Avancerat** och gå till **SSH -> Autentisering**. Där kan du spara din SSH-nyckel.
:::

Första gången du ansluter via SFTP visas detta meddelande eftersom din dator ännu inte känner igen servern. Bekräfta med **“Ja”** om du litar på servern. Då sparas dess säkerhetsnyckel och du kommer inte att bli tillfrågad igen vid framtida anslutningar. Detta är ett normalt steg när du ansluter till en ny server för första gången.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Avslutning

Om du följt alla stegen har du nu lyckats skapa en SFTP-anslutning till din server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />