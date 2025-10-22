---
id: vserver-rescue
title: "VPS: Odzyskaj swoje pliki za pomocą System Rescue"
description: "Dowiedz się, jak odzyskać dane i tworzyć kopie zapasowe z nieuruchamiającego się serwera za pomocą SystemRescue ISO w bezpieczny sposób → Sprawdź teraz"
sidebar_label: System Rescue (Backup)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Twój serwer nie chce się już uruchomić? Zostałeś zablokowany w systemie lub chcesz zrobić kopię zapasową przed wprowadzeniem zmian?  
Uruchamiając serwer z **SystemRescue ISO**, nadal masz dostęp do swoich dysków, możesz odzyskać ważne pliki i tworzyć lokalne kopie zapasowe. Działa to nawet wtedy, gdy oryginalny system operacyjny jest już niedostępny.

Aby bezpiecznie przesłać odzyskane dane, możesz użyć **SFTP (Secure File Transfer Protocol)**. Ta metoda pozwala kopiować pliki z systemu ratunkowego na lokalny komputer lub inny serwer przez bezpieczne i zaszyfrowane połączenie.

<InlineVoucher />

## Przygotowanie

Do wykonania kopii zapasowej danych użyjesz **SystemRescue ISO w wersji 12.01**.  
Zacznij od zalogowania się do panelu Twojego VPS i przejdź do sekcji **ISOs**.

Wybierz ISO z dostępnych opcji. Po wybraniu właściwego ISO kliknij **Dostosuj kolejność bootowania**, a następnie przycisk **Restartuj**, aby rozpocząć proces uruchamiania.

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)

Gdy serwer uruchomi się z ISO, połącz się z nim przez [konsolę VNC](vserver-vnc.md), aby kontynuować. Po aktywacji konsoli zobaczysz menu startowe dla **SystemRescue** ISO. Wybierz opcję uruchomienia z **domyślnymi parametrami**.

To zapewni, że SystemRescue wystartuje z rekomendowaną standardową konfiguracją, oferując stabilne i gotowe do użycia środowisko do konserwacji systemu lub tworzenia kopii zapasowych.

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)

## Montowanie dysku(ów)

Przed zamontowaniem dysku warto najpierw sprawdzić, jakie urządzenia pamięci masowej i partycje są dostępne. Możesz to zrobić za pomocą polecenia:

```
fdisk -l
```

To polecenie wyświetla wszystkie wykryte dyski wraz ze szczegółami partycji. W wyniku zobaczysz:

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

Po zidentyfikowaniu właściwej partycji, kolejnym krokiem jest utworzenie katalogu, który będzie punktem montowania. To miejsce, gdzie partycja stanie się dostępna. Następnie zamontuj wybraną partycję w tym katalogu. Zaleca się montowanie w trybie **tylko do odczytu**, aby bezpiecznie uzyskać dostęp do danych.

Do utworzenia punktu montowania i podłączenia partycji użyj poniższych poleceń:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Zamień `/dev/sdaX` na właściwy identyfikator partycji znaleziony za pomocą `fdisk -l`. W tym przykładzie będzie to `/dev/sda2`.

## Konfiguracja zapory sieciowej

Ze względów bezpieczeństwa SystemRescue domyślnie włącza zaporę sieciową. Oznacza to, że wszystkie przychodzące połączenia są blokowane, aby chronić system przed nieautoryzowanym dostępem.

W tym przypadku musisz jednak zezwolić na połączenie z Twojego lokalnego komputera do serwera SFTP działającego na SystemRescue. Możesz to zrobić, konfigurując zaporę, aby dopuścić ruch SFTP lub tymczasowo ją wyłączając.

Jeśli pracujesz w zaufanej sieci, najprostszym i najszybszym rozwiązaniem jest zatrzymanie usługi zapory w SystemRescue za pomocą polecenia:

```
systemctl stop iptables
```

## Ustawienie hasła root

Klient SFTP musi się uwierzytelnić za pomocą nazwy użytkownika i hasła, aby uzyskać dostęp do danych na serwerze SFTP. Używamy konta root, aby klient miał dostęp do plików widocznych w SystemRescue. Domyślnie uwierzytelnianie na konto root w SystemRescue jest wyłączone. Musisz ustawić hasło, aby umożliwić klientowi logowanie. Zdefiniuj hasło za pomocą polecenia:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## Transfer danych

Teraz jesteś gotowy, aby wykonać kopię zapasową danych. Wystarczy otworzyć dowolnego klienta FTP i nawiązać połączenie z serwerem. Upewnij się, że jako protokół transferu wybierasz `SFTP`. W polu nazwy hosta wpisz `adres IP` serwera, użyj portu `21` i zaloguj się jako użytkownik `root` z hasłem, które wcześniej ustawiłeś.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Przy pierwszym połączeniu z serwerem przez **SFTP** WinSCP wyświetli takie ostrzeżenie bezpieczeństwa. Pojawia się, ponieważ klucz hosta serwera nie jest jeszcze zapisany w lokalnej pamięci podręcznej.

W sytuacji, gdy znasz poprawny adres IP i celowo nawiązujesz to połączenie, **możesz zaufać serwerowi**. Po prostu kliknij **"Tak"**, aby potwierdzić. To doda klucz serwera do pamięci podręcznej i nie będziesz już o to pytany przy kolejnych połączeniach.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Po połączeniu przejdź do katalogu **rescue**, który wcześniej utworzyłeś. Tam uzyskasz dostęp do swoich plików i możesz zacząć je pobierać na lokalny komputer. Przeglądaj foldery, wybierz dane do backupu i przesyłaj je bezpiecznie przez SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Podsumowanie

Udało Ci się pomyślnie odzyskać i wykonać kopię zapasową ważnych plików.  
Twoje dane są teraz bezpieczne i gotowe do przywrócenia w razie potrzeby. Możesz teraz kontynuować dalsze działania, takie jak reinstalacja serwera, naprawa systemu lub migracja danych do nowego środowiska.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />