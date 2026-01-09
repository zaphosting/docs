---
id: sunkenland-setup-server
title: "Sunkenland: Sunkenland Server Setup"
description: "Discover how to set up your Sunkenland game server for smooth gameplay and proper functionality → Learn more now"
sidebar_label: Server Setup
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Sunkenland-servrar kräver en snabb första setup för att servern ska fungera korrekt. I den här guiden går vi igenom stegen för att sätta upp din Sunkenland-spelserver.

<InlineVoucher />

## Förberedelser
Innan du börjar måste du först starta Sunkenland och skapa en världssparfil. Se till att spara världen innan du går vidare.

För att kunna komma åt dina serverfiler senare i guiden behöver du också en FTP-klient som [WinSCP](https://winscp.net/eng/index.php) eller [FileZilla](https://filezilla-project.org/), båda är open-source och gratis att ladda ner.

## Kom åt dina lokala data
Första steget är att komma åt dina Sunkenland-sparfiler.

Tryck helt enkelt på `CTRL+R` på tangentbordet och skriv in följande i Windows Kör-fönstret:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

Här hittar du en mapp som heter `Worlds` där alla dina lokala sparfiler finns. Välj den värld du vill hosta på servern, eller om du är ny, välj den nya sparfil du skapade innan du började den här guiden.

:::tip
Ser du inget här? Se till att du har startat Sunkenland och skapat en världssparfil, då skapas mappen automatiskt.
:::

## Ladda upp sparfilen
Nästa steg är att koppla upp dig mot din spelserver via FTP och ladda upp sparfilen du valde i föregående steg.

Börja med att ansluta till din server via en FTP-klient med de inloggningsuppgifter du hittar under **Verktyg->FTP-Browser** i din spelservers webbgränssnitt. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) om du behöver hjälp att ansluta.

När du är ansluten, gå till Sunkenland-mappen, öppna "AppData" och sedan "Worlds". Välj sparfilen från föregående steg och ladda upp den hit.

Mappstrukturen ska nu se ut så här, där `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` är din sparfil.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
Kopiera GUID:en som står i slutet av världens namn i sparfilen. Du behöver den i nästa steg för att få servern att fungera.

GUID:en ser ut så här:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Fullständigt världnamn
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # GUID:en du behöver
```
:::

## Aktivera servern
Till sist, gå till **Inställningar** i din spelservers webbgränssnitt.

Hitta alternativet **World GUID** och klistra in den GUID du kopierade i föregående steg.

Glöm inte att klicka på den gröna **Spara**-knappen längst ner på sidan. Försök sedan starta servern, den borde nu starta utan problem.

Grattis, du har nu satt upp din Sunkenland-spelserver!

<InlineVoucher />