---
id: vserver-rescue
title: "VPS: Odzyskaj pliki za pomocą System Rescue"
description: "Dowiedz się, jak odzyskać dane i tworzyć kopie zapasowe z nieuruchamiającego się serwera za pomocą SystemRescue ISO w bezpieczny sposób → Sprawdź teraz"
sidebar_label: System Rescue (Backup)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Twój serwer nie chce się już uruchomić? Nie masz dostępu do systemu lub chcesz zrobić kopię zapasową przed zmianami?  
Uruchamiając serwer z **SystemRescue ISO**, nadal możesz dostać się do swoich dysków, odzyskać ważne pliki i zrobić backup lokalnie. Działa to nawet wtedy, gdy oryginalny system operacyjny jest niedostępny.

Do bezpiecznego przesłania odzyskanych danych możesz użyć **SFTP (Secure File Transfer Protocol)**. Ta metoda pozwala kopiować pliki z systemu ratunkowego na lokalny komputer lub inny serwer przez szyfrowane i bezpieczne połączenie.

<InlineVoucher />



## Przygotowanie

Do wykonania backupu danych użyjesz **SystemRescue ISO w wersji 12.01**.  
Zacznij od wejścia do panelu Twojego VPS i przejdź do sekcji **ISOs**.

Wybierz ISO z dostępnych opcji. Po wybraniu właściwego ISO kliknij **Dostosuj kolejność bootowania**, a następnie przycisk **Restartuj**, aby rozpocząć proces uruchamiania.

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)



Gdy serwer uruchomi się z ISO, połącz się z nim przez [konsolę VNC](vserver-vnc.md), aby kontynuować. Po aktywacji konsoli zobaczysz menu startowe **SystemRescue** ISO. Wybierz opcję uruchomienia z **domyślnymi parametrami**.

To zapewni, że SystemRescue wystartuje z rekomendowaną standardową konfiguracją, dając stabilne i gotowe do użycia środowisko do naprawy systemu lub tworzenia kopii zapasowych.

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)


## Montowanie dysku(ów)

Zanim zamontujesz dysk, warto sprawdzić, jakie urządzenia pamięci masowej i partycje są dostępne. Możesz to zrobić poleceniem:

```
fdisk -l
```

To polecenie wyświetli listę wykrytych dysków wraz ze szczegółami partycji. W wyniku zobaczysz:

- Podłączone urządzenia (np. `/dev/sda`, `/dev/sdb`),
- Rozmiar każdego dysku,
- Typy partycji,
- Dostępne partycje (np. `/dev/sda1`, `/dev/sda2`, …),
- Typ systemu plików (jeśli wykryty).

W tym przykładzie dysk `/dev/sda` ma trzy partycje: `/dev/sda1`, `/dev/sda2` i `/dev/sda3`. Upewnij się, że wybierasz właściwą partycję przed montowaniem. Wynik `fdisk -l` pomaga uniknąć pomyłek, pokazując jasno, który dysk zawiera jakie dane. Przykład:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Gdy już zidentyfikujesz właściwą partycję, następnym krokiem jest utworzenie katalogu, który posłuży jako punkt montowania. To miejsce, gdzie partycja będzie dostępna. Następnie zamontuj wybraną partycję w tym katalogu. Zalecamy montowanie w trybie **tylko do odczytu**, aby bezpiecznie uzyskać dostęp do danych.

Do utworzenia punktu montowania i podłączenia partycji użyj poleceń:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Zamień `/dev/sdaX` na właściwy identyfikator partycji znaleziony za pomocą `fdisk -l`. W tym przykładzie będzie to `/dev/sda2`.



## Konfiguracja sieci

Sieć nie jest konfigurowana automatycznie. Aby nawiązać połączenie, podstawowe parametry sieciowe trzeba ustawić ręcznie. Przed przypisaniem adresu IP warto sprawdzić nazwę karty sieciowej. Najczęściej nazywa się ona **ens18**, ale może się różnić. Sprawdź to poleceniem `ip a`.

Gdy znasz już właściwy adapter, możesz przypisać adres IP ręcznie. Przykład konfiguracji adresu w lokalnej podsieci:

```
ip addr add <IP>/24 dev <adapter>
```

Zamień `<IP>` na wybrany adres, a `<adapter>` na nazwę wykrytego urządzenia, zwykle `ens18`. Aby system mógł poprawnie kierować ruch, dodaj też domyślną bramę:

```
ip route add default via <gateway>
```

Zamień `<gateway>` na poprawny adres bramy w Twojej sieci. Po wykonaniu tych kroków konfiguracja sieci jest aktywna i możesz przetestować połączenie np. przez ping do zewnętrznego hosta.



## Konfiguracja zapory sieciowej

Ze względów bezpieczeństwa SystemRescue domyślnie włącza zaporę sieciową. Oznacza to, że wszystkie przychodzące połączenia są blokowane, aby chronić system przed nieautoryzowanym dostępem.

W tym przypadku musisz jednak zezwolić na połączenie z Twojego lokalnego komputera do serwera SFTP działającego na SystemRescue. Możesz to zrobić, konfigurując zaporę tak, by przepuszczała ruch SFTP lub tymczasowo ją wyłączając.

Jeśli pracujesz w zaufanej sieci, najprostsze i najszybsze jest zatrzymanie usługi zapory w SystemRescue poleceniem:

```
systemctl stop iptables
```



## Ustawienie hasła root

Klient SFTP musi się uwierzytelnić za pomocą nazwy użytkownika i hasła, aby mieć dostęp do danych na serwerze SFTP. Używamy konta root, żeby klient miał dostęp do plików widocznych w SystemRescue. Domyślnie logowanie na konto root w SystemRescue jest zablokowane. Musisz ustawić hasło, żeby umożliwić uwierzytelnienie klienta. Zdefiniuj hasło poleceniem:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Transfer danych

Teraz możesz zacząć robić backup danych. Wystarczy, że otworzysz dowolnego klienta FTP i połączysz się z serwerem. Ustaw protokół transferu na `SFTP`. Jako nazwę hosta wpisz `adres IP` serwera, użyj portu `21` i zaloguj się jako użytkownik `root` z hasłem, które wcześniej ustawiłeś.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Przy pierwszym połączeniu przez **SFTP** WinSCP wyświetli komunikat bezpieczeństwa. Ostrzeżenie pojawia się, bo klucz hosta serwera nie jest jeszcze zapisany w lokalnej pamięci podręcznej.

W sytuacji, gdy znasz poprawny adres IP i świadomie nawiązujesz to połączenie, **możesz zaufać serwerowi**. Kliknij po prostu **"Yes"**, aby potwierdzić. To doda klucz serwera do pamięci podręcznej i nie będziesz już o to pytany przy kolejnych połączeniach.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Po połączeniu przejdź do katalogu **rescue**, który wcześniej utworzyłeś. Tam masz dostęp do swoich plików i możesz zacząć je pobierać na lokalny komputer. Po prostu przeglądaj foldery, wybierz dane do backupu i przesyłaj je bezpiecznie przez SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Podsumowanie

Udało Ci się odzyskać i zabezpieczyć ważne pliki.  
Twoje dane są teraz bezpieczne i gotowe do przywrócenia, kiedy tylko zajdzie taka potrzeba. Możesz teraz przejść do kolejnych działań, np. reinstalacji serwera, naprawy systemu lub migracji danych do nowego środowiska.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />