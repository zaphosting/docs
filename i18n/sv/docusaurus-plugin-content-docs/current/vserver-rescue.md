---
id: vserver-rescue
title: "VPS: Rädda dina filer med System Rescue"
description: "Lär dig hur du återställer data och skapar backups från en server som inte startar med SystemRescue ISO på ett säkert sätt → Läs mer nu"
sidebar_label: System Rescue (Backup)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Din server startar inte längre? Du är utelåst från systemet eller vill skapa en backup innan du gör ändringar?
Genom att starta din server med **SystemRescue ISO** kan du fortfarande komma åt dina diskar, återställa viktiga filer och skapa backups lokalt. Detta fungerar även om det ursprungliga operativsystemet inte längre är åtkomligt.

För att överföra den återställda datan säkert kan du använda **SFTP (Secure File Transfer Protocol)**. Denna metod låter dig kopiera filer från rescue-systemet till din lokala dator eller till en annan server över en säker och krypterad anslutning.

<InlineVoucher />



## Förberedelser

För att göra backupen använder du **SystemRescue ISO version 12.01**.
 Börja med att logga in på gränssnittet för din VPS och gå till sektionen **ISOs**. 

Välj ISO:n från de tillgängliga alternativen. Efter att du valt rätt ISO, klicka på **Justera boot-ordning** och sedan på **Starta om** för att påbörja boot-processen. 

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)



När servern har startat från ISO:n, anslut till den via [VNC-konsolen](vserver-vnc.md) för att fortsätta. När konsolen är aktiv ser du boot-menyn för **SystemRescue** ISO:n. Välj här alternativet att starta med **standardparametrar**. 

Detta säkerställer att SystemRescue startar med rekommenderad standardkonfiguration, vilket ger en stabil och redo-miljö för systemunderhåll eller backup-uppgifter.

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)


## Montera disken/diskarna

Innan du monterar en disk är det viktigt att få en överblick över tillgängliga lagringsenheter och deras partitioner. Det gör du med följande kommando:

```
fdisk -l
```

Detta kommando listar alla upptäckta diskar tillsammans med deras partitionsdetaljer. Utdata inkluderar:

- Anslutna lagringsenheter (t.ex. `/dev/sda`, `/dev/sdb`),
- Storleken på varje disk,
- Partitionstyper,
- Tillgängliga partitioner (t.ex. `/dev/sda1`, `/dev/sda2`, …),
- Filsystemtyp (om det upptäcks).

I detta exempel har disken `/dev/sda` tre partitioner: `/dev/sda1`,  `/dev/sda2` och `/dev/sda3`. Se till att välja rätt partition innan du monterar. `fdisk -l` hjälper dig att undvika misstag genom att tydligt visa vilken disk som innehåller vilken data. Exempel:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

När du identifierat rätt partition är nästa steg att skapa en katalog som ska fungera som monteringspunkt. Det är platsen där partitionen blir åtkomlig. Montera sedan önskad partition i denna katalog. Det rekommenderas att montera i **read-only-läge** för att garantera säker åtkomst till datan. 

För att skapa monteringspunkten och montera partitionen, använd följande kommandon:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Byt ut `/dev/sdaX` mot rätt partitionsidentifierare du hittade med `fdisk -l`. I detta exempel är `/dev/sda2` rätt partition för vår disk.



## Nätverkskonfiguration

Nätverket konfigureras inte automatiskt. För att få uppkoppling måste grundläggande nätverksparametrar sättas manuellt. Innan du tilldelar en IP-adress är det bra att kontrollera namnet på nätverksadaptern. I de flesta fall heter adaptern **ens18**, men det kan variera. Du kan kolla detta med kommandot `ip a`.

När du vet rätt adapter kan du manuellt tilldela en IP-adress. Exempel för att konfigurera en adress i ett lokalt subnet:

```
ip addr add <IP>/24 dev <adapter>
```

Byt ut `<IP>` mot önskad adress och `<adapter>` mot det upptäckta enhetsnamnet, oftast `ens18`. För att systemet ska kunna routa trafik korrekt måste du även lägga till en standardgateway:

```
ip route add default via <gateway>
```

Byt ut `<gateway>` mot giltig gateway-adress i ditt nätverk. När detta är klart är nätverksinställningarna aktiva och du kan testa uppkopplingen, t.ex. genom att pinga en extern host.



## Brandväggskonfiguration

Av säkerhetsskäl är brandväggen i SystemRescue aktiverad som standard. Det betyder att alla inkommande anslutningar blockeras för att skydda systemet från obehörig åtkomst.

I detta fall behöver du dock tillåta en anslutning från din lokala dator till SFTP-servern som körs i SystemRescue. Det gör du genom att antingen konfigurera brandväggen att tillåta SFTP-trafik eller tillfälligt stänga av den.

Om du jobbar i ett betrott nätverk är det enklaste och snabbaste att stoppa brandväggstjänsten i SystemRescue med följande kommando:

```
systemctl stop iptables
```



## Sätt root-lösenord

SFTP-klienten måste autentisera sig med användarnamn och lösenord för att komma åt datan från SFTP-servern. Systemets root-konto används så klienten kan nå filer som är synliga i SystemRescue. Som standard är root-inloggning inte tillåten i SystemRescue. Ett lösenord måste sättas för att tillåta autentisering. Sätt ett lösenord med följande kommando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Dataöverföring

Nu är du redo att backa upp din data. Öppna valfri FTP-klient och anslut till din server. Se till att välja `SFTP` som överföringsprotokoll. Som hostnamn anger du serverns `IP-adress`, använd port `21` och logga in med användarnamnet `root` och det `lösenord` du satte tidigare.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

När du ansluter till en server via **SFTP** för första gången visar WinSCP denna säkerhetsvarning. Varningen dyker upp eftersom serverns **host key** inte finns sparad i din lokala cache än.

I detta fall, när du vet att IP-adressen är korrekt och du medvetet startat anslutningen, **är det säkert att lita på servern**. Klicka bara på **"Yes"** för att bekräfta. Då läggs serverns nyckel till i din cache så du slipper frågan nästa gång du ansluter till samma server.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

När du är ansluten, navigera till **rescue-katalogen** du skapade tidigare. Därifrån får du åtkomst till dina filer och kan börja ladda ner dem till din lokala dator. Bläddra helt enkelt igenom mapparna, välj datan du vill backa upp och överför den säkert via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Avslutning

Du har nu framgångsrikt räddat och säkerhetskopierat dina viktiga filer.
 Det betyder att din data är trygg och redo att återställas när som helst. Nu kan du gå vidare med andra åtgärder, som att installera om servern, reparera systemet eller migrera datan till en ny miljö. 

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />