---
id: dedicated-reset
title: "Serwer dedykowany: Reset serwera (stan fabryczny)"
description: "Dowiedz się, jak skutecznie zresetować swój serwer, aby przywrócić wydajność lub zacząć od nowa z bezpiecznym usunięciem danych → Sprawdź teraz"
sidebar_label: Reset serwera
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Twój serwer nie działa już tak, jak powinien, albo chcesz zacząć od nowa, ale nie wiesz jak? Spoko, możesz zresetować swój serwer przez reinstalację. Ten poradnik wyjaśni Ci, jak to zrobić i na co zwrócić uwagę.





## Przygotowania

Zanim zresetujesz dane na swoim serwerze, musisz wiedzieć, że wszystkie istniejące dane zostaną utracone. Jeśli masz ważne pliki, to idealny moment, żeby najpierw zrobić kopię zapasową, zanim zaczniesz reinstalację. Potem musisz zdecydować, jak dokładnie chcesz zresetować swój system. 



## Resetowanie danych

Są dwie różne metody resetowania danych, w zależności od Twoich potrzeb i sytuacji. Poniżej wyjaśniamy obie opcje szczegółowo:

- Resetowanie danych przez konfigurację RAID (szybka metoda)
- Resetowanie danych przez Wipe ISO (pełna metoda)

Resetowanie danych przez konfigurację RAID polega na logicznym usunięciu istniejących danych i zastąpieniu ich nowymi, co jest szybkim i efektywnym rozwiązaniem do reinstalacji systemu.

Natomiast resetowanie przez Wipe ISO to wielokrotne cykle usuwania, które gwarantują trwałe i nieodwracalne skasowanie wszystkich danych. Ta metoda jest najlepsza, gdy potrzebujesz całkowitego wyczyszczenia systemu i dokładnego usunięcia danych.



### Szybka metoda

Podobnie jak przy konfiguracji RAID, konfigurację RAID otwierasz klawiszem `F8` podczas uruchamiania serwera. W menu konfiguracji RAID wybierz opcję **Delete Logical Drive**. Powinna się wyświetlić aktualna konfiguracja RAID oraz dyski twarde. Naciśnij `F8`, aby usunąć istniejący RAID. Potwierdź to klawiszem `F3`. 

Następnie wróć do konfiguracji RAID i wybierz opcję **Create Logical Drive**. Teraz wybierz dyski twarde oraz pożądaną konfigurację RAID (Raid 0/1) i utwórz RAID, potwierdzając klawiszem `Enter`.

Jeśli nie jesteś pewien, jak skonfigurować RAID na swoim systemie, polecamy zerknąć na nasz ogólny [Poradnik Konfiguracji RAID](dedicated-raid.md). 



### Pełna metoda

Aby wykonać faktyczny reset danych, musisz zamontować i uruchomić wymagany Wipe ISO. Pliki ISO można zamontować przez iLO lub konsolę zdalną. Jeśli nie wiesz, jak to zrobić, sprawdź nasz poradnik [Własne ISO](http://localhost:3000/guides/docs/dedicated-iso).

Zamontuj następujący plik Wipe ISO na swoim serwerze i zrestartuj go:


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

Po restarcie serwer powinien automatycznie wykryć i załadować Wipe ISO. Połącz się ze swoim serwerem dedykowanym przez wybraną konsolę zdalną (HTML5, .NET, Java Web Start).

Zobaczysz, jak serwer automatycznie wykonuje proces i jaki jest postęp formatowania. Twój serwer nadpisze wszystkie istniejące wolumeny, skutecznie usuwając wszystkie dane. W zależności od rozmiaru dysku SSD, proces może potrwać od 45 minut do 2 godzin.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
Ten proces jest nieodwracalny i ostateczny. Nie ma możliwości przywrócenia danych z kopii zapasowej po jego wykonaniu.
Zdecydowanie odradzamy wykonywanie tego procesu, jeśli nie jesteś absolutnie pewien, że chcesz usunąć wszystkie swoje dane.
:::



## Podsumowanie

Gratulacje, pomyślnie usunąłeś dane na swoim serwerze dedykowanym. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂