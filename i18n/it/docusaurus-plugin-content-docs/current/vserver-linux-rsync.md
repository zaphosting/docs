---
id: vserver-linux-rsync
title: "VPS: Backup dei server Linux con Rsync"
description: "Scopri come creare backup incrementali efficienti con Rsync per la sincronizzazione locale o remota dei dati → Scopri di più ora"
sidebar_label: Crea Backup con Rsync
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Rsync:

I backup possono essere fatti con lo strumento Rsync.  
Possono essere copiati sullo stesso sistema locale in un’altra cartella/drive oppure su un sistema remoto.  

## Copiare i dati in un’altra cartella o drive locale:

:::info
Attenzione: La prima esecuzione può richiedere molto più tempo rispetto alle successive, a seconda della quantità di dati. Questo perché la prima volta Rsync sincronizza tutti i dati, dalla seconda volta in poi verranno sincronizzati solo i dati modificati. 
:::
>Così si crea un backup incrementale.  

## Passo 1

Rsync può essere installato con il seguente comando:

```
apt install rsync
```

Dopo l’installazione può essere usato subito. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Backup giornaliero su directory/drive locale" label="Backup giornaliero su directory/drive locale">
## Passo 2

In questo esempio, la cartella Client sotto /home deve essere sincronizzata con la cartella Backup sotto /home. 

Questo si fa con il comando: 

```
rsync -arz /home/Client /home/Backup
```
-a=Archiviazione, vengono copiati gli attributi
<br/>
-r=Ricorsivo, vengono sincronizzate anche le sottocartelle
<br/>
-z=Compressione, i dati vengono compressi in base alla quantità/dimensione


La cartella è stata sincronizzata con successo. 

Se ora un file nella cartella client viene cancellato, rimarrà nella cartella di backup.  
Ma siccome i file devono essere sempre sincronizzati 1:1, il comando rsync può essere modificato facilmente per rimuovere anche i dati che non sono più presenti nella cartella client dalla cartella di backup.  

Il comando modificato è: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Archiviazione, vengono copiati gli attributi
<br/>
-r=Ricorsivo, vengono sincronizzate anche le sottocartelle
<br/>
-z=Compressione, i dati vengono compressi in base alla quantità/dimensione
<br/>
--delete= Elimina i dati che non esistono più nella sorgente ma sono ancora presenti nella destinazione

## Passo 3

Per non dover eseguire sempre manualmente il comando, può essere inserito in un cronjob.  
Ad esempio, un backup giornaliero alle 3 di notte: 

Apri crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

Con il numero 1 si può usare "nano" come editor.  
Con il numero 2 si può usare "vim" come editor.  

Dopo aver aperto il file con ad esempio Nano, si può creare e inserire un crontab.  
Un crontab può essere creato con questo [Generator](https://crontab-generator.org/).  

Il crontab inserito sarà così: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Ogni giorno alle 3 di notte il comando viene eseguito e viene creato il backup. 

</TabItem>
<TabItem value="Backup giornaliero su sistema remoto" label="Backup giornaliero su sistema remoto">

## Passo 4

In questo esempio, la cartella Client sotto /home deve essere sincronizzata con la cartella Backup su un sistema remoto. La connessione avviene tramite chiave SSH, così il backup può essere automatizzato.  
>Importante: Rsync deve essere installato anche sul server remoto.  
>```
>apt install rsync
>```

Ad esempio, questo comando può essere usato per fare il backup sul host remoto (da personalizzare): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Archiviazione, vengono copiati gli attributi
<br/>
-r=Ricorsivo, vengono sincronizzate anche le sottocartelle
<br/>
-z=Compressione, i dati vengono compressi in base alla quantità/dimensione
<br/>
-e=Specifica la porta SSH (default 22)
<br/>
Specifica la chiave SSH (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[percorso della chiave]
<br/>
Specifica la cartella da backuppare (/home/client/)= /[cartella]
<br/>
RemoteHost(root@123.123.123.123:)= Nome utente sul RemoteHost e indirizzo: nome@IP/Dominio
<br/>
Cartella di destinazione sul RemoteHost(:/home/Backup/Home-Server1/)= :/[percorso destinazione]

Dopo aver eseguito il comando, la cartella/i file sono stati sincronizzati/salvati con successo nella directory remota.
  

Se un file viene cancellato nella cartella client, rimarrà nella cartella di backup sul server remoto.  
Ma siccome i file devono essere sempre sincronizzati 1:1, il comando rsync può essere modificato facilmente per rimuovere i dati che non sono più presenti nella cartella client anche dalla cartella di backup sul server remoto.  

Il comando modificato è:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Archiviazione, vengono copiati gli attributi
<br/>
-r=Ricorsivo, vengono sincronizzate anche le sottocartelle
<br/>
-z=Compressione, i dati vengono compressi in base alla quantità/dimensione
<br/>
--delete= Elimina i dati che non esistono più nella sorgente ma sono ancora presenti nella destinazione
<br/>
-e=Specifica la porta SSH (default 22)
<br/>
Specifica la chiave SSH (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[percorso della chiave]
<br/>
Specifica la cartella da backuppare (/home/client/)= /[cartella]
<br/>
RemoteHost(root@123.123.123.123:)= Nome utente sul RemoteHost e indirizzo: nome@IP/Dominio
<br/>
Cartella di destinazione sul RemoteHost(:/home/Backup/Home-Server1/)= :/[percorso destinazione]

## Passo 5

Per non dover eseguire sempre manualmente il comando, può essere inserito in un cronjob.  
Ad esempio, un backup giornaliero alle 3 di notte: 

Apri crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

Con il numero 1 si può usare "nano" come editor.  
Con il numero 2 si può usare "vim" come editor.  

Dopo aver aperto il file con ad esempio Nano, si può creare e inserire un crontab.  
Un crontab può essere creato con questo [Generator](https://crontab-generator.org/).  

Il crontab inserito sarà così: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Ogni giorno alle 3 di notte il comando viene eseguito e viene creato il backup. 

</TabItem>
</Tabs>

<InlineVoucher />