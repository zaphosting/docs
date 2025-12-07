---
id: dedicated-windows-rescue
title: "Dedikerad Server: Rädda dina filer med System Rescue"
description: "Lär dig hur du återställer data och skapar backups från en server som inte startar med SystemRescue ISO och säker filöverföring → Läs mer nu"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Startar inte din server längre? Har du blivit utelåst från systemet eller vill du skapa en backup innan du gör ändringar?  
Genom att boota din server med **SystemRescue ISO** kan du fortfarande komma åt dina diskar, återställa viktiga filer och skapa lokala backups. Det funkar även om det ursprungliga operativsystemet inte längre är åtkomligt.

För att överföra de återställda filerna säkert kan du använda **SFTP (Secure File Transfer Protocol)**. Den här metoden låter dig kopiera filer från räddningssystemet till din lokala dator eller till en annan server via en säker och krypterad anslutning.





## Förberedelser

För att göra backupen använder du **SystemRescue ISO version 12.01**.  
Börja med att logga in i gränssnittet för din dedikerade server och gå till sektionen **Initial installation**.

Välj **SystemRescue 12.01** ISO från listan med tillgängliga alternativ. När du valt rätt ISO klickar du på **Boot from ISO** för att starta bootprocessen. När servern har startat från ISO:n, anslut till den via [iLO-gränssnittet](dedicated-ilo.md) för att fortsätta.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



I **iLO-hanteringsgränssnittet**, öppna **HTML-konsolen** för att komma åt serverns fjärrskärm. När konsolen är aktiv ser du boot-menyn för **SystemRescue ISO**. Välj här att boota med **standardparametrarna**.

Detta säkerställer att SystemRescue startar med rekommenderad standardkonfiguration, vilket ger en stabil och redo-miljö för systemunderhåll eller backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## Montera disken/diskarna

Innan du monterar en disk är det viktigt att få en överblick över tillgängliga lagringsenheter och deras partitioner. Det gör du med följande kommando:

```
fdisk -l
```

Det här kommandot listar alla upptäckta diskar med deras partitionsdetaljer. Utdata visar:

- Anslutna lagringsenheter (t.ex. `/dev/sda`, `/dev/sdb`),
- Storleken på varje disk,
- Partitionstyper,
- Tillgängliga partitioner (t.ex. `/dev/sda1`, `/dev/sda2`, …),
- Filsystemtyp (om den kan detekteras).

I det här exemplet har disken `/dev/sda` tre partitioner: `/dev/sda1`, `/dev/sda2` och `/dev/sda3`. Se till att välja rätt partition innan du monterar. `fdisk -l` hjälper dig att undvika misstag genom att tydligt visa vilken disk som innehåller vilken data. Exempel:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

När du identifierat rätt partition är nästa steg att skapa en katalog som ska fungera som monteringspunkt. Det är platsen där partitionen blir åtkomlig. Montera sedan önskad partition i den här katalogen. Vi rekommenderar att montera i **read-only-läge** för att garantera säker åtkomst till datan.

För att skapa monteringspunkten och montera partitionen, använd följande kommandon:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Byt ut `/dev/sdaX` mot rätt partitionsbeteckning du hittade med `fdisk -l`. I vårt exempel är `/dev/sda2` rätt partition för disken.

:::tip Vilande Windows-partitioner

Linux kan inte öppna Windows-partitioner som är i viloläge (hibernation) eller påverkade av Fast Boot på ett säkert sätt. För att undvika dataförlust eller korruption, montera alltid dessa partitioner **i read-only-läge**.

:::

## Konfigurera brandväggen

Av säkerhetsskäl är brandväggen i SystemRescue aktiverad som standard. Det betyder att alla inkommande anslutningar blockeras för att skydda systemet från obehörig åtkomst.

Men i det här fallet behöver du tillåta en anslutning från din lokala dator till SFTP-servern som körs på SystemRescue. Det gör du genom att antingen konfigurera brandväggen att tillåta SFTP-trafik eller tillfälligt stänga av den.

Om du jobbar i ett betrott nätverk är det enklaste och snabbaste att stoppa brandväggstjänsten i SystemRescue med följande kommando:

```
systemctl stop iptables
```



## Sätta root-lösenordet

SFTP-klienten måste autentisera sig med användarnamn och lösenord för att kunna komma åt data från SFTP-servern. Systemets root-konto används för att klienten ska kunna nå alla filer som är synliga i SystemRescue. Som standard är autentisering som root inte tillåten i SystemRescue. Ett lösenord måste sättas för att tillåta klienten att logga in. Sätt ett lösenord med följande kommando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Dataöverföring

Nu är du redo att backa upp dina data. Öppna valfri FTP-klient och skapa en anslutning till din server. Se till att välja `SFTP` som överföringsprotokoll. För hostnamn anger du serverns `IP-adress`, använd port `21` och logga in med användarnamnet `root` och det `lösenord` du satte tidigare.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

När du ansluter till en server via **SFTP** för första gången visar WinSCP en säkerhetsvarning. Den dyker upp eftersom serverns **host key** inte finns sparad i din lokala cache än.

I det här läget, när du vet att IP-adressen är korrekt och du medvetet startat anslutningen, **är det säkert att lita på servern**. Klicka bara på **"Yes"** för att bekräfta. Då läggs serverns nyckel till i din cache så du slipper frågan nästa gång.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

När du är ansluten, navigera till den **rescue-mapp** du skapade tidigare. Därifrån får du åtkomst till dina filer och kan börja ladda ner dem till din lokala dator. Bläddra igenom mapparna, välj den data du vill backa upp och överför den säkert via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Avslutning

Du har nu framgångsrikt räddat och säkerhetskopierat dina viktiga filer.  
Det betyder att din data är trygg och redo att återställas när som helst. Nu kan du gå vidare med andra åtgärder, som att installera om servern, reparera systemet eller migrera din data till en ny miljö.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂