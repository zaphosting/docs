---
id: dedicated-linux-rescue
title: "Serwer dedykowany: Odzyskaj pliki za pomocą System Rescue"
description: "Dowiedz się, jak odzyskać dane i tworzyć kopie zapasowe z serwera, który się nie uruchamia, korzystając z SystemRescue ISO oraz bezpiecznego transferu plików → Sprawdź teraz"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Twój serwer się nie uruchamia? Nie masz dostępu do systemu lub chcesz zrobić kopię zapasową przed zmianami?  
Uruchamiając serwer z **SystemRescue ISO**, nadal możesz dostać się do swoich dysków, odzyskać ważne pliki i zrobić lokalne kopie zapasowe. Działa to nawet wtedy, gdy oryginalny system operacyjny jest niedostępny.

Do bezpiecznego przesłania odzyskanych danych możesz użyć **SFTP (Secure File Transfer Protocol)**. Ta metoda pozwala kopiować pliki z systemu ratunkowego na lokalny komputer lub inny serwer przez bezpieczne i zaszyfrowane połączenie.





## Przygotowanie

Do wykonania kopii zapasowej użyjesz **SystemRescue ISO w wersji 12.01**.  
Zacznij od wejścia do panelu administracyjnego swojego serwera dedykowanego i przejdź do sekcji **Początkowa instalacja**.

Wybierz ISO **SystemRescue 12.01** z dostępnych opcji. Po wybraniu właściwego ISO kliknij **Boot from ISO**, aby rozpocząć proces uruchamiania. Gdy serwer wystartuje z ISO, połącz się z nim przez [interfejs iLO](dedicated-ilo.md), aby kontynuować.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



W **interfejsie zarządzania iLO** otwórz **konsolę HTML**, aby uzyskać zdalny dostęp do wyświetlacza serwera. Po aktywacji konsoli zobaczysz menu startowe **SystemRescue ISO**. Wybierz opcję uruchomienia z **domyślnymi parametrami**.

Dzięki temu SystemRescue wystartuje z rekomendowaną standardową konfiguracją, zapewniając stabilne i gotowe do użycia środowisko do konserwacji systemu lub tworzenia kopii zapasowych.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## Montowanie dysku(ów)

Zanim zamontujesz dysk, warto sprawdzić, jakie urządzenia pamięci masowej i partycje są dostępne. Możesz to zrobić poleceniem:

```
fdisk -l
```

To polecenie wyświetla wszystkie wykryte dyski wraz ze szczegółami partycji. Wynik zawiera:

- Podłączone urządzenia pamięci masowej (np. `/dev/sda`, `/dev/sdb`),
- Rozmiar każdego dysku,
- Typy partycji,
- Dostępne partycje (np. `/dev/sda1`, `/dev/sda2`, …),
- Typ systemu plików (jeśli wykryty).

W tym przykładzie dysk `/dev/sda` ma trzy partycje: `/dev/sda1`, `/dev/sda2` i `/dev/sda3`. Upewnij się, że wybierasz właściwą partycję przed montowaniem. Wynik `fdisk -l` pomaga uniknąć pomyłek, jasno pokazując, który dysk zawiera jakie dane. Przykład:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Po zidentyfikowaniu właściwej partycji, kolejnym krokiem jest utworzenie katalogu, który posłuży jako punkt montowania. To miejsce, gdzie partycja będzie dostępna. Następnie zamontuj wybraną partycję w tym katalogu. Zalecamy montowanie w trybie **tylko do odczytu**, aby bezpiecznie uzyskać dostęp do danych.

Do utworzenia punktu montowania i podłączenia partycji użyj poleceń:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Zamień `/dev/sdaX` na właściwy identyfikator partycji znaleziony za pomocą `fdisk -l`. W tym przykładzie będzie to `/dev/sda2`.

## Konfiguracja zapory sieciowej

Ze względów bezpieczeństwa SystemRescue domyślnie włącza zaporę sieciową. Oznacza to, że wszystkie przychodzące połączenia są blokowane, aby chronić system przed nieautoryzowanym dostępem.

W tym przypadku musisz jednak zezwolić na połączenie z Twojego lokalnego komputera do serwera SFTP działającego na SystemRescue. Możesz to zrobić, konfigurując zaporę, aby przepuszczała ruch SFTP lub tymczasowo ją wyłączając.

Jeśli pracujesz w zaufanej sieci, najszybszym i najprostszym rozwiązaniem jest zatrzymanie usługi zapory w SystemRescue poleceniem:

```
systemctl stop iptables
```



## Ustawienie hasła root

Klient SFTP musi się uwierzytelnić za pomocą nazwy użytkownika i hasła, aby uzyskać dostęp do danych na serwerze SFTP. Używamy konta root, aby klient miał dostęp do plików widocznych w SystemRescue. Domyślnie uwierzytelnianie na konto root w SystemRescue jest wyłączone. Musisz ustawić hasło, aby umożliwić klientowi logowanie. Zdefiniuj hasło poleceniem:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Transfer danych

Teraz możesz zacząć robić kopię zapasową danych. Wystarczy otworzyć dowolnego klienta FTP i połączyć się z serwerem. Upewnij się, że jako protokół transferu wybrałeś `SFTP`. W polu nazwy hosta wpisz `adres IP` serwera, użyj portu `21` i zaloguj się jako użytkownik `root` z hasłem, które wcześniej ustawiłeś.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Przy pierwszym połączeniu z serwerem przez **SFTP** WinSCP wyświetli takie ostrzeżenie bezpieczeństwa. Pojawia się, ponieważ **klucz hosta** serwera nie jest jeszcze zapisany w lokalnej pamięci podręcznej.

W sytuacji, gdy znasz poprawny adres IP i celowo nawiązujesz to połączenie, **możesz zaufać serwerowi**. Kliknij po prostu **"Yes"**, aby potwierdzić. Klucz serwera zostanie dodany do pamięci podręcznej i nie będziesz już o to pytany przy kolejnych połączeniach.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Po połączeniu przejdź do katalogu **rescue**, który wcześniej utworzyłeś. Tam masz dostęp do swoich plików i możesz zacząć je pobierać na lokalny komputer. Po prostu przeglądaj foldery, wybierz dane do backupu i przesyłaj je bezpiecznie przez SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Podsumowanie

Udało Ci się odzyskać i zabezpieczyć ważne pliki.  
Twoje dane są teraz bezpieczne i gotowe do przywrócenia w razie potrzeby. Możesz teraz kontynuować dalsze działania, takie jak reinstalacja serwera, naprawa systemu czy migracja danych do nowego środowiska.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂