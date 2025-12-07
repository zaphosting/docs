---
id: dedicated-linux-rsync
title: "Dedicated Server: Linux-servers backuppen met Rsync"
description: "Ontdek hoe je efficiënte lokale en remote backups maakt met Rsync voor betrouwbare data-synchronisatie en bescherming → Leer het nu"
sidebar_label: Backups maken met Rsync
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Backups maak je met het tooltje Rsync. Je kunt data lokaal kopiëren naar een andere map/schijf of naar een remote systeem.  

## Data kopiëren naar een andere lokale map of schijf:

:::info
Let op: De eerste keer kan het veel langer duren dan de volgende keren, afhankelijk van de hoeveelheid data. Dit komt omdat Rsync de eerste keer alle data synchroniseert, vanaf de tweede keer worden alleen de gewijzigde bestanden gesynchroniseerd.
:::
> Zo wordt er dus een incrementele backup gemaakt.

## Stap 1

Rsync installeer je met het volgende commando:

```
apt install rsync
```

Na installatie kun je het direct gebruiken.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Dagelijkse backup naar lokale map/schijf" label="Dagelijkse backup naar lokale map/schijf">
## Stap 2

In dit voorbeeld synchroniseren we de map Client onder /home naar de map Backup onder /home.

Dat doe je met dit commando:

```
rsync -arz /home/Client /home/Backup
```
-a=Archiveren, attributen worden gekopieerd  
-r=Recursief, submappen worden ook gesynchroniseerd  
-z=Compressie, afhankelijk van hoeveelheid/ grootte van data wordt gecomprimeerd  

De map is nu succesvol gesynchroniseerd.

Als je nu een bestand uit de Client map verwijdert, blijft die nog wel in de Backup map staan.  
Maar omdat de bestanden altijd 1:1 synchroon moeten zijn, kun je het rsync-commando makkelijk aanpassen zodat ook bestanden die niet meer in Client staan, uit Backup worden verwijderd.

Het aangepaste commando is:

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Archiveren, attributen worden gekopieerd  
-r=Recursief, submappen worden ook gesynchroniseerd  
-z=Compressie, afhankelijk van hoeveelheid/ grootte van data wordt gecomprimeerd  
--delete= Verwijdert data die niet meer in de bron staat maar nog wel in de backup

## Stap 3

Om het commando niet steeds handmatig te hoeven uitvoeren, kun je het in een cronjob zetten.  
Bijvoorbeeld: elke dag om 3 uur 's nachts een backup maken.

Open crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Met optie 1 gebruik je "nano" als editor.  
Met optie 2 gebruik je "vim" als editor.

Als het bestand geopend is (bijvoorbeeld met Nano), kun je een crontab aanmaken en invoeren.  
Een crontab maak je makkelijk met deze [Generator](https://crontab-generator.org/).

De ingevoerde crontab ziet er dan zo uit:

```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Elke dag om 3 uur 's nachts wordt het commando uitgevoerd en wordt er een backup gemaakt.

</TabItem>
<TabItem value="Dagelijkse backup naar remote systeem" label="Dagelijkse backup naar remote systeem">

## Stap 4

In dit voorbeeld synchroniseren we de map Client onder /home naar de map Backup op een remote systeem. De verbinding gaat via een SSH-key, zodat de backup ook geautomatiseerd kan worden.  
>Belangrijk: Rsync moet ook op de remote server geïnstalleerd zijn.  
>```
>apt install rsync
>```

Bijvoorbeeld met dit commando kun je de data naar de remote host backuppen (pas aan naar jouw situatie):

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Archiveren, attributen worden gekopieerd  
-r=Recursief, submappen worden ook gesynchroniseerd  
-z=Compressie, afhankelijk van hoeveelheid/ grootte van data wordt gecomprimeerd  
-e=Specificeert SSH-poort (standaard 22)  
SSH key opgeven (pad) ("ssh -i /home/sshkey/keybackup")= ssh -i /[pad naar key]  
Map die gebackupt wordt (/home/client/)= /[map]  
RemoteHost(root@123.123.123.123:)= Inlognaam van de gebruiker op de remote host en adres: naam@IP/Domein  
Doelmap op de remote host(:/home/Backup/Home-Server1/)= :/[pad naar doelmap]

Na uitvoeren van het commando zijn de map/bestanden succesvol gesynchroniseerd/opgeslagen op de remote locatie.

Als je nu een bestand uit de Client map verwijdert, blijft die nog wel in de backup map op de remote host staan.  
Maar omdat de bestanden altijd 1:1 synchroon moeten zijn, kun je het rsync-commando makkelijk aanpassen zodat ook bestanden die niet meer in Client staan, uit de backup map op de remote host worden verwijderd.

Het aangepaste commando is:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Archiveren, attributen worden gekopieerd  
-r=Recursief, submappen worden ook gesynchroniseerd  
-z=Compressie, afhankelijk van hoeveelheid/ grootte van data wordt gecomprimeerd  
--delete= Verwijdert data die niet meer in de bron staat maar nog wel in de backup  
-e=Specificeert SSH-poort (standaard 22)  
SSH key opgeven (pad) ("ssh -i /home/sshkey/keybackup")= ssh -i /[pad naar key]  
Map die gebackupt wordt (/home/client/)= /[map]  
RemoteHost(root@123.123.123.123:)= Inlognaam van de gebruiker op de remote host en adres: naam@IP/Domein  
Doelmap op de remote host(:/home/Backup/Home-Server1/)= :/[pad naar doelmap]

## Stap 5

Om het commando niet steeds handmatig te hoeven uitvoeren, kun je het in een cronjob zetten.  
Bijvoorbeeld: elke dag om 3 uur 's nachts een backup maken.

Open crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Met optie 1 gebruik je "nano" als editor.  
Met optie 2 gebruik je "vim" als editor.

Als het bestand geopend is (bijvoorbeeld met Nano), kun je een crontab aanmaken en invoeren.  
Een crontab maak je makkelijk met deze [Generator](https://crontab-generator.org/).

De ingevoerde crontab ziet er dan zo uit:

```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Elke dag om 3 uur 's nachts wordt het commando uitgevoerd en wordt er een backup gemaakt.

</TabItem>
</Tabs>