---
id: account-backup-storage
title: Przechowywanie kopii zapasowych
description: "Dowiedz się, jak bezpiecznie przechowywać i zarządzać kopiami zapasowymi dzięki skalowalnym opcjom storage, które ułatwiają przywracanie i dostęp → Sprawdź teraz"
sidebar_label: Przechowywanie kopii zapasowych
---

## Co to jest przechowywanie kopii zapasowych?
Przechowywanie kopii zapasowych daje naszym klientom możliwość tworzenia backupów przez ich usługi. Każdy klient ma darmowe 10GB miejsca na swoim storage na kopie zapasowe, które może w pełni wykorzystać. Za niewielką dopłatą można rozszerzyć storage aż do 200GB.

## Jak uzyskać dostęp do moich plików backupu?
Pliki backupu są umieszczane na storage kopii zapasowych zaraz po utworzeniu backupu przez interfejs webowy. Pliki można następnie albo przywrócić do odpowiedniej usługi za pomocą funkcji backupu tej usługi, albo pobrać ze storage kopii zapasowych przez połączenie FTP.

### Połącz się ze storage kopii zapasowych przez FTP
Aby połączyć się ze storage kopii zapasowych przez FTP, pobierz i zainstaluj program [FileZilla](http://www.filezilla.de/download.htm) dla swojego systemu operacyjnego. Po zakończeniu instalacji otwórz program.
Powinieneś teraz zobaczyć interfejs FileZilla:

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

Aby połączyć się ze swoim storage kopii zapasowych, wpisz dane połączenia w pola tekstowe powyżej.
Znajdziesz te dane, gdy wejdziesz na stronę swojego storage kopii zapasowych w panelu administracyjnym.
Kliknij na tę ikonę na górze paska menu:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Na stronie storage kopii zapasowych znajdziesz swoje dane dostępowe do połączenia FTP w polu oznaczonym na obrazku:

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Wpisz adres IP w FileZilla w pole **Serwer**, użytkownika w pole **Nazwa użytkownika** oraz hasło w pole **Hasło**. Nie musisz podawać portu, jeśli jest równy *21*. Teraz kliknij **Połącz**.
Jeśli połączenie się powiedzie, znajdziesz backupy utworzone przez swoje usługi w odpowiednich folderach.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

Backupy są spakowane w pliki **\*.tar.gz** w odpowiednich folderach i można je rozpakować programami takimi jak WinRAR lub 7-Zip.

## Komunikat o błędzie "Transfer connection interrupted"

Jeśli podczas łączenia lub transferu pojawi się komunikat o błędzie "Transfer connection interrupted: ECCONABORTED - Connection aborted", można zmienić tryb transferu z "**Pasywnego**" na "**Aktywny**".
Poniższe kroki pokazują, jak zmienić to w ustawieniach FileZilla.

W FileZilla kliknij "**Edycja**", a następnie otwórz bezpośrednio "**Ustawienia...**":

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

Otworzy się okno "**Ustawienia**". Tam kliknij na "**FTP**", aby zobaczyć ustawienia połączenia FTP.
Domyślny tryb transferu przy "**FTP**" jest ustawiony na "**Pasywny**", tam możesz zaznaczyć przycisk radiowy "**Aktywny**" i zatwierdzić zmianę klikając "**OK**".

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

Po wykonaniu tej zmiany możesz ponownie przetestować połączenie FTP.

## Komunikaty
W sidebarze, w podpunkcie *Komunikaty*, wyświetlany jest log, który pokazuje, pod jakim wyzwalaczem/powodem jaka akcja została wykonana podczas backupów dla którego pakietu i kiedy.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)