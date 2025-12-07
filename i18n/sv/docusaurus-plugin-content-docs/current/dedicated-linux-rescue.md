---
id: dedicated-linux-rescue
title: "Dedikerad Server: Rädda dina filer med System Rescue"
description: "Lär dig hur du återställer data och skapar backups från en server som inte startar med SystemRescue ISO och säker filöverföring → Läs mer nu"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Startar inte din server längre? Har du blivit utelåst från systemet eller vill du skapa en backup innan du gör ändringar?
Genom att boota din server med **SystemRescue ISO** kan du fortfarande komma åt dina diskar, återställa viktiga filer och skapa lokala backups. Detta fungerar även om det ursprungliga operativsystemet inte längre är åtkomligt.

För att överföra de återställda filerna säkert kan du använda **SFTP (Secure File Transfer Protocol)**. Denna metod låter dig kopiera filer från räddningssystemet till din lokala dator eller till en annan server över en säker och krypterad anslutning.





## Förberedelser

För att göra backupen använder du **SystemRescue ISO version 12.01**.
 Börja med att gå in i gränssnittet för din dedikerade server och navigera till sektionen **Initial installation**. 

Välj **SystemRescue 12.01** ISO från de tillgängliga alternativen. Efter att du valt rätt ISO klickar du på **Boot from ISO** för att starta bootprocessen. När servern har startat från ISO:n, anslut till den via [iLO-gränssnittet](dedicated-ilo.md) för att fortsätta.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



I **iLO management interface**, öppna **HTML-konsolen** för att komma åt serverns fjärrdisplay. När konsolen är aktiv ser du boot-menyn för **SystemRescue ISO**. Välj här alternativet att boota med **standardparametrar**. 

Detta säkerställer att SystemRescue startar med rekommenderad standardkonfiguration, vilket ger en stabil och redo-miljö för systemunderhåll eller backupjobb.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## Montera disken/diskarna

Innan du monterar en disk är det viktigt att få en överblick över tillgängliga lagringsenheter och deras partitioner. Det gör du med följande kommando:

```
fdisk -l
```

Detta kommando listar alla upptäckta diskar med deras partitionsdetaljer. Utdata visar:

- Anslutna lagringsenheter (t.ex. `/dev/sda`, `/dev/sdb`),
- Storleken på varje disk,
- Partitionstyper,
- Tillgängliga partitioner (t.ex. `/dev/sda1`, `/dev/sda2`, …),
- Filsystemtyp (om den upptäcks).

I detta exempel har disken `/dev/sda` tre partitioner: `/dev/sda1`, `/dev/sda2` och `/dev/sda3`. Se till att välja rätt partition innan du monterar. `fdisk -l` hjälper dig att undvika misstag genom att tydligt visa vilken disk som innehåller vilken data. Exempel:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

När du identifierat rätt partition är nästa steg att skapa en katalog som ska fungera som mountpunkt. Det är platsen där partitionen blir åtkomlig. Montera sedan önskad partition i denna katalog. Det rekommenderas att montera i **read-only-läge** för att säkert komma åt datan. 

För att skapa mountpunkten och montera partitionen, använd följande kommandon:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Byt ut `/dev/sdaX` mot rätt partitions-ID som du hittade med `fdisk -l`. I detta exempel är `/dev/sda2` rätt partition för vår disk.

## Konfigurera brandväggen

Av säkerhetsskäl är brandväggen i SystemRescue aktiverad som standard. Det betyder att alla inkommande anslutningar blockeras för att skydda systemet från obehörig åtkomst.

Men i detta fall behöver du tillåta en anslutning från din lokala dator till SFTP-servern som körs i SystemRescue. För detta måste du antingen konfigurera brandväggen att tillåta SFTP-trafik eller tillfälligt stänga av den.

Om du jobbar i ett betrott nätverk är det enklaste och snabbaste att stoppa brandväggstjänsten i SystemRescue med följande kommando:

```
systemctl stop iptables
```



## Sätta root-lösenordet

SFTP-klienten måste autentisera sig med användarnamn och lösenord för att komma åt data från SFTP-servern. Systemets root-konto används så klienten kan nå filer som är synliga i SystemRescue. Som standard är root-inloggning inte tillåten i SystemRescue. Ett lösenord måste sättas för att tillåta klienten att autentisera sig. Sätt ett lösenord med följande kommando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Dataöverföring

Nu är du redo att backa upp dina data. Öppna valfri FTP-klient och skapa en anslutning till din server. Se till att välja `SFTP` som överföringsprotokoll. Som hostnamn anger du serverns `IP-adress`, använd port `21` och logga in med användarnamnet `root` och det `lösenord` du satte tidigare.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

När du ansluter till en server via **SFTP** för första gången visar WinSCP denna säkerhetsvarning. Varningen dyker upp eftersom serverns **host key** inte finns sparad i din lokala cache än.

I detta fall, när du vet att IP-adressen är korrekt och du medvetet startat anslutningen, **är det säkert att lita på servern**. Klicka bara på **"Yes"** för att bekräfta. Då läggs serverns nyckel till i din cache så du slipper frågan nästa gång.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

När du är ansluten, navigera till den **rescue-katalog** du skapade tidigare. Därifrån får du åtkomst till dina filer och kan börja ladda ner dem till din lokala dator. Bläddra helt enkelt i mapparna, välj datan du vill backa upp och överför den säkert via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Slutsats

Du har nu framgångsrikt räddat och säkerhetskopierat dina viktiga filer.
 Det betyder att din data är trygg och redo att återställas när som helst. Nu kan du fortsätta med andra åtgärder, som att installera om servern, reparera systemet eller migrera datan till en ny miljö. 

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂