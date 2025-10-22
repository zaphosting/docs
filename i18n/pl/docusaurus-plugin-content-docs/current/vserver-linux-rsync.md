---
id: vserver-linux-rsync
title: "VPS: Tworzenie kopii zapasowych serwerów Linux za pomocą Rsync"
description: "Dowiedz się, jak tworzyć efektywne przyrostowe kopie zapasowe z Rsync do lokalnej lub zdalnej synchronizacji danych → Sprawdź teraz"
sidebar_label: Tworzenie kopii zapasowych z Rsync
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Rsync:

Kopie zapasowe można tworzyć za pomocą narzędzia Rsync.  
Dane można kopiować na tym samym systemie do innego katalogu/dysku lub na system zdalny.  

## Kopiowanie danych do innego lokalnego katalogu lub dysku:

:::info
Uwaga: Pierwsze uruchomienie może potrwać znacznie dłużej niż kolejne, w zależności od ilości danych. Dzieje się tak, ponieważ Rsync za pierwszym razem synchronizuje wszystkie dane, a od drugiego uruchomienia synchronizowane są tylko zmienione pliki. 
:::
>W ten sposób tworzona jest kopia przyrostowa.  

## Krok 1

Rsync można zainstalować poleceniem:

```
apt install rsync
```

Po instalacji można go od razu używać. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Codzienna kopia zapasowa do lokalnego katalogu/dysku" label="Codzienna kopia zapasowa do lokalnego katalogu/dysku">
## Krok 2

W tym przykładzie folder Client w /home ma być zsynchronizowany z folderem Backup w /home. 

Można to zrobić poleceniem: 

```
rsync -arz /home/Client /home/Backup
```
-a=Archiwizacja, atrybuty plików zostaną skopiowane
<br/>
-r=Rekurencyjnie, synchronizowane są też podfoldery
<br/>
-z=Kompresja, w zależności od ilości/rozmiaru danych są one kompresowane


Folder został pomyślnie zsynchronizowany. 

Jeśli teraz jakiś plik w folderze Client zostanie usunięty, pozostanie on w folderze Backup.  
Jeśli jednak pliki mają być zawsze zsynchronizowane 1:1, polecenie rsync można łatwo zmodyfikować, aby usunąć z folderu Backup dane, które nie istnieją już w folderze Client. 

Zmodyfikowane polecenie to: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Archiwizacja, atrybuty plików zostaną skopiowane
<br/>
-r=Rekurencyjnie, synchronizowane są też podfoldery
<br/>
-z=Kompresja, w zależności od ilości/rozmiaru danych są one kompresowane
<br/>
--delete= Usuwa dane, które nie istnieją już w źródle, ale nadal są w celu kopii zapasowej

## Krok 3

Aby nie wykonywać polecenia ręcznie za każdym razem, można je umieścić w cronjobie.  
Na przykład kopia zapasowa ma być tworzona codziennie o 3:00 rano: 

Otwórz crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

Pod numerem 1 można wybrać edytor "nano".  
Pod numerem 2 można wybrać edytor "vim".  

Po otwarciu pliku np. w Nano, można wygenerować i wpisać crontab.  
Crontab można wygenerować za pomocą tego [Generatora](https://crontab-generator.org/). 

Wpisany crontab wygląda wtedy tak: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Codziennie o 3:00 rano polecenie zostanie wykonane i zostanie utworzona kopia zapasowa. 

</TabItem>
<TabItem value="Codzienna kopia zapasowa na system zdalny" label="Codzienna kopia zapasowa na system zdalny">

## Krok 4

W tym przykładzie folder Client w /home ma być zsynchronizowany z folderem Backup na systemie zdalnym. Połączenie ma być realizowane przez klucz SSH, aby kopia zapasowa mogła być zautomatyzowana.  
>Ważne: Rsync musi być również zainstalowany na serwerze zdalnym.  
>```
>apt install rsync
>```

Na przykład do wykonania kopii zapasowej na zdalnym hoście można użyć polecenia (wymaga dostosowania): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Archiwizacja, atrybuty plików zostaną skopiowane
<br/>
-r=Rekurencyjnie, synchronizowane są też podfoldery
<br/>
-z=Kompresja, w zależności od ilości/rozmiaru danych są one kompresowane
<br/>
-e=Określa port SSH (domyślnie 22)
<br/>
Określenie klucza SSH (ścieżka)("ssh -i /home/sshkey/keybackup")= ssh -i /[ścieżka do klucza]
<br/>
Określenie katalogu do backupu (/home/client/)= /[katalog]
<br/>
Zdalny host(root@123.123.123.123:)= Nazwa użytkownika i adres zdalnego hosta: nazwa@IP/Domena
<br/>
Katalog docelowy na zdalnym hoście(:/home/Backup/Home-Server1/)= :/[ścieżka docelowa]

Po wykonaniu polecenia folder/pliki zostały pomyślnie zsynchronizowane/zapisane na zdalnym katalogu.

Jeśli jakiś plik zostanie usunięty w folderze Client, pozostanie on w folderze Backup na zdalnym hoście.  
Jeśli jednak pliki mają być zawsze zsynchronizowane 1:1, polecenie rsync można łatwo zmodyfikować, aby usunąć z folderu Backup na zdalnym hoście dane, które nie istnieją już w folderze Client. 

Zmodyfikowane polecenie to:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Archiwizacja, atrybuty plików zostaną skopiowane
<br/>
-r=Rekurencyjnie, synchronizowane są też podfoldery
<br/>
-z=Kompresja, w zależności od ilości/rozmiaru danych są one kompresowane
<br/>
--delete= Usuwa dane, które nie istnieją już w źródle, ale nadal są w celu kopii zapasowej
<br/>
-e=Określa port SSH (domyślnie 22)
<br/>
Określenie klucza SSH (ścieżka)("ssh -i /home/sshkey/keybackup")= ssh -i /[ścieżka do klucza]
<br/>
Określenie katalogu do backupu (/home/client/)= /[katalog]
<br/>
Zdalny host(root@123.123.123.123:)= Nazwa użytkownika i adres zdalnego hosta: nazwa@IP/Domena
<br/>
Katalog docelowy na zdalnym hoście(:/home/Backup/Home-Server1/)= :/[ścieżka docelowa]

## Krok 5

Aby nie wykonywać polecenia ręcznie za każdym razem, można je umieścić w cronjobie.  
Na przykład kopia zapasowa ma być tworzona codziennie o 3:00 rano: 

Otwórz crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

Pod numerem 1 można wybrać edytor "nano".  
Pod numerem 2 można wybrać edytor "vim".  

Po otwarciu pliku np. w Nano, można wygenerować i wpisać crontab.  
Crontab można wygenerować za pomocą tego [Generatora](https://crontab-generator.org/). 

Wpisany crontab wygląda wtedy tak: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Codziennie o 3:00 rano polecenie zostanie wykonane i zostanie utworzona kopia zapasowa. 

</TabItem>
</Tabs>

<InlineVoucher />