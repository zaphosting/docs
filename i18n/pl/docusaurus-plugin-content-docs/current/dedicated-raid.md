---
id: dedicated-raid
title: "Serwer dedykowany: Konfiguracja RAID"
description: "Dowiedz się, jak konfiguracje RAID poprawiają wydajność i redundancję danych na serwerach dedykowanych z dyskami SSD → Sprawdź teraz"
sidebar_label: Konfiguracja RAID
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RAID (Redundant Array of Independent Disks) to technologia łącząca kilka dysków twardych w jeden logiczny wolumin, aby osiągnąć redundancję danych i/lub zwiększoną wydajność. Istnieją różne poziomy RAID, które oferują różne kombinacje rozkładu danych i odporności na awarie.



## Dostępne typy RAID
Nasze serwery dedykowane mają obecnie 2 zatoki na dyski SSD, co oznacza, że dostępne są dwie możliwe konfiguracje RAID. Pierwsza to RAID0, który służy do łączenia woluminów w jeden duży, a druga to RAID1, który służy do mirroringu woluminów i zachowania redundancji danych. Szczegółowo omówimy obie poniżej.

:::info
RAID0 zapewnia nieco szybsze prędkości odczytu i zapisu, dzięki obecności dwóch dysków.
:::

### RAID0
W tej konfiguracji RAID wszystkie istniejące woluminy są łączone w jeden duży, np. z 2 dysków SSD po 1 TB każdy tworzy się jedna partycja 2 TB, którą można w pełni wykorzystać.

Nie ma tu redundancji danych, więc w przypadku awarii technicznej utrata danych jest często nieunikniona, ponieważ dane są zapisywane w różnych sektorach.

Jeśli przechowujesz wrażliwe dane na swoim systemie, RAID0 nie powinien być używany lub przynajmniej należy regularnie wykonywać kopie zapasowe systemu.

:::info
Jeśli Twój serwer dedykowany ma tylko 1 dysk SSD, to automatycznie jest to RAID0.
:::

### RAID1
Ta konfiguracja różni się znacznie od RAID0 — tutaj dane są redundantne, co oznacza, że wszystko, co zapisujesz na serwerze, jest duplikowane.
Dane są więc mirrorowane na obu dyskach SSD i będą dostępne nawet przy awarii jednego z nich, czyli Twoje dane są bezpieczne przy 1 działającym SSD.

W przypadku awarii technicznej wystarczy wymienić uszkodzony dysk SSD, a serwer odbuduje RAID, czyli ponownie zmirroruje dane.
Szczególnie dla bardziej wrażliwych danych ta konfiguracja jest bardzo polecana, ale nie zastępuje regularnych kopii zapasowych.

:::info
Regularne kopie zapasowe wszystkich ważnych danych to podstawa!
:::

## Asystent konfiguracji

Podczas uruchamiania serwera należy uruchomić narzędzie do konfiguracji RAID. Można to zrobić, naciskając `F8` na odpowiednim etapie bootowania.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Naciśnij F8, aby otworzyć narzędzie do konfiguracji RAID

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

Po kilku sekundach pojawi się ten przegląd konfiguracji.

***

Do wyboru są teraz różne opcje menu:

* Create Logical Drive  
Tworzy nowy wolumin.

* View Logical Drive  
Pokazuje aktualną konfigurację RAID.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive  
Możesz usunąć aktualną konfigurację RAID, np. aby stworzyć nową.

* Select Boot Volume  
Możesz wybrać inny nośnik rozruchowy, co w naszym przypadku nie jest konieczne.

* Manage License Keys  
Nie trzeba nic zmieniać, licencje są już skonfigurowane.

* Cache Settings  
Opcja cache można dostosować, aby nieco zwiększyć prędkości odczytu/zapisu SSD.  
Podczas każdego zapisu ostatnie bloki danych są buforowane dla bezpieczeństwa, np. przy utracie zasilania.  
To powoduje minimalny spadek wydajności.

### Tworzenie nowego RAID

Najpierw sprawdzamy, czy nie ma już woluminu, otwieramy `Delete Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

Naciskamy `F8`, aby usunąć istniejący RAID.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

Potwierdzamy usunięcie, naciskając `F3`.

***

Po pomyślnym usunięciu RAID otwieramy `Create Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)


Tutaj widzisz wszystkie swoje dyski SSD i możesz wybrać konfigurację RAID.  
Oczywiście nie wszystkie konfiguracje RAID da się zastosować w obecnym układzie.

W naszym przykładzie wybieramy RAID0 lub RAID1.

:::info
Między menu przełączasz się klawiszem `TAB`
:::

Po wybraniu konfiguracji RAID zatwierdź ją, naciskając `Enter`.

:::info
Asystenta konfiguracji zamkniesz, naciskając `ESC`
:::

### Wybór woluminu rozruchowego

Jeśli zmieniałeś RAID, konieczne jest wybranie woluminu rozruchowego.  
Zrobisz to łatwo w **Select Boot Volume** — wybierz tam utworzony wolumin logiczny, inaczej serwer utknie w pętli bootowania.

**Select Boot Volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Direct Attached Storage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Logical Drive 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Naciśnij `F8`, aby zapisać jako wolumin rozruchowy**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

Na koniec możesz nacisnąć `F8`, aby od razu zrestartować system lub `Enter`, aby wrócić do menu głównego.  
Pamiętaj, że wolumin rozruchowy musi być ustawiony **za każdym razem**, gdy zmieniasz konfigurację RAID.



## Podsumowanie

Gratulacje, udało Ci się skonfigurować RAID na swoim serwerze dedykowanym. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂