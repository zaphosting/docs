---
id: dedicated-linux-rsync
title: "Dedikerad Server: Säkerhetskopiera Linux-servrar med Rsync"
description: "Upptäck hur du skapar effektiva lokala och fjärrsäkerhetskopior med Rsync för pålitlig datasynkronisering och skydd → Lär dig mer nu"
sidebar_label: Skapa säkerhetskopior med Rsync
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Säkerhetskopior kan göras med verktyget Rsync. De kan kopieras på det lokala systemet till en annan mapp/enhet eller till ett fjärrsystem.  

## Kopiera data till en annan lokal mapp eller enhet:

:::info
Obs: Första körningen kan ta betydligt längre tid än följande körningar, beroende på mängden data. Detta beror på att Rsync första gången synkroniserar all data, från andra gången synkroniseras bara ändrad data. 
:::
>Så skapas en inkrementell backup.  

## Steg 1

Rsync kan installeras med följande kommando:

```
apt install rsync
```

När det är installerat kan det användas direkt. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Daglig backup till lokal mapp/enhet" label="Daglig backup till lokal mapp/enhet">
## Steg 2

I det här exemplet ska mappen Client under /home synkroniseras till mappen Backup under /home. 

Det görs med följande kommando: 

```
rsync -arz /home/Client /home/Backup
```
-a=Arkivering, attributen kopieras
<br/>
-r=Rekursiv, undermappar synkroniseras också
<br/>
-z=Komprimering, beroende på datamängd/datastorlek komprimeras datan


Mappen synkroniserades framgångsrikt

Om en fil etc. i client-mappen tas bort nu, kommer den att finnas kvar i backup-mappen.  
Men eftersom filerna alltid ska vara 1:1 synkroniserade kan rsync-kommandot enkelt ändras, denna ändring ser till att data som inte längre finns i client-mappen också tas bort från backup-mappen. 

Det modifierade kommandot är: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Arkivering, attributen kopieras
<br/>
-r=Rekursiv, undermappar synkroniseras också
<br/>
-z=Komprimering, beroende på datamängd/datastorlek komprimeras datan
<br/>
--delete= Tar bort data som inte längre finns i källan men fortfarande finns i målet

## Steg 3

Så att kommandot inte alltid behöver köras manuellt kan det enkelt läggas in i en cronjob.  
Till exempel ska en backup skapas dagligen kl 03:00: 

Öppna crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Med siffran 1 kan "nano" användas som editor.
Med siffran 2 kan "vim" användas som editor.  

När filen öppnats med t.ex. Nano kan en crontab skapas och läggas in.  
En crontab kan skapas med denna [Generator](https://crontab-generator.org/). 

Den inlagda crontaben ser då ut så här: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Varje dag kl 03:00 körs kommandot och en backup skapas. 

</TabItem>
<TabItem value="Daglig backup till fjärrsystem" label="Daglig backup till fjärrsystem">

## Steg 4

I det här exemplet ska mappen Client under /home synkroniseras till mappen Backup på ett fjärrsystem. Anslutningen ska ske via SSH-nyckel så att backupen kan automatiseras.  
>Viktigt: Rsync måste också vara installerat på fjärrservern.  
>```
>apt install rsync
>```

Till exempel kan följande kommando användas för att säkerhetskopiera data till fjärrhosten (anpassa efter behov): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Arkivering, attributen kopieras
<br/>
-r=Rekursiv, undermappar synkroniseras också
<br/>
-z=Komprimering, beroende på datamängd/datastorlek komprimeras datan
<br/>
-e=Anger SSH-port (standard 22)
<br/>
Ange SSH-nyckel (sökväg)("ssh -i /home/sshkey/keybackup")= ssh -i /[sökväg till nyckel]
<br/>
Ange mappen som ska säkerhetskopieras (/home/client/)= /[mapp]
<br/>
Fjärrhost (root@123.123.123.123:)= Inloggningsnamn för användaren på fjärrhosten och adress: namn@IP/Domän
<br/>
Målmapp för data på fjärrhosten (:/home/Backup/Home-Server1/)= :/[sökväg till mapp]

Mappen/filerna har synkroniserats/sparats framgångsrikt till fjärrmappen efter att kommandot körts.
  

Om en fil etc. tas bort i client-mappen kommer den att finnas kvar i backup-mappen på fjärrhosten.  
Men eftersom filerna alltid ska vara 1:1 synkroniserade kan rsync-kommandot enkelt modifieras för att ta bort data som inte längre finns i client-mappen från backup-mappen på fjärrhosten. 

Det modifierade kommandot är:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Arkivering, attributen kopieras
<br/>
-r=Rekursiv, undermappar synkroniseras också
<br/>
-z=Komprimering, beroende på datamängd/datastorlek komprimeras datan
<br/>
--delete= Tar bort data som inte längre finns i källan men fortfarande finns i målet
<br/>
-e=Anger SSH-port (standard 22)
<br/>
Ange SSH-nyckel (sökväg)("ssh -i /home/sshkey/keybackup")= ssh -i /[sökväg till nyckel]
<br/>
Ange mappen som ska säkerhetskopieras (/home/client/)= /[mapp]
<br/>
Fjärrhost (root@123.123.123.123:)= Inloggningsnamn för användaren på fjärrhosten och adress: namn@IP/Domän
<br/>
Målmapp för data på fjärrhosten (:/home/Backup/Home-Server1/)= :/[Sökväg till mål-mapp]

## Steg 5

Så att kommandot inte alltid behöver köras manuellt kan det enkelt läggas in i en cronjob.  
Till exempel ska en backup skapas dagligen kl 03:00: 

Öppna crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Med siffran 1 kan "nano" användas som editor.
Med siffran 2 kan "vim" användas som editor.  

När filen öppnats med t.ex. Nano kan en crontab skapas och läggas in.  
En crontab kan skapas med denna [Generator](https://crontab-generator.org/). 

Den inlagda crontaben ser då ut så här: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Varje dag kl 03:00 körs kommandot och en backup skapas. 

</TabItem>
</Tabs>