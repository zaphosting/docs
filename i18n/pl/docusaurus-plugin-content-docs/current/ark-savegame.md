---
id: ark-savegame
title: ARK Survival Evolved Import własnego pliku zapisu
description: "Dowiedz się, jak przywrócić serwer Ark: Survival Evolved za pomocą oficjalnych lub własnych kopii zapasowych, aby zapewnić płynną kontynuację rozgrywki → Sprawdź teraz"
sidebar_label: Import pliku zapisu
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Chcesz zaimportować własny lub oficjalny plik zapisu na swój serwer gier Ark: Survival Evolved? Nie szukaj dalej, ten poradnik wyjaśni Ci krok po kroku, jak zaimportować swój zwykły lub oficjalny plik zapisu na nowy serwer.

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="Jak zdobyć serwer ARK:SE z oficjalnymi kopiami zapasowymi serwera" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć informacje w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Przygotuj swój plik zapisu

### Oficjalny plik kopii zapasowej

Najpierw musisz pobrać oficjalny plik zapisu swojego serwera. Możesz to zrobić bezpośrednio ze [strony ARK](https://survivetheark.com/index.php?/server-backups/) lub skorzystać z [narzędzia stworzonego przez społeczność](https://arkutils.netlify.app/tools/officialdownload), które ułatwia znalezienie Twojego serwera dzięki funkcji wyszukiwania.

:::note
Jeśli grasz na Xbox lub Playstation, niestety nie będziesz mógł pobrać oficjalnych plików serwera. Twórcy pozwolili na swobodne pobieranie kopii świata tylko z platform Steam i Epic.
:::

Dostępne są dwie migawki: pierwsza z 25 sierpnia 2023, a druga z 30 września 2023. W obu przypadkach musisz znaleźć swój serwer i pobrać plik zapisu.

:::note
Użycie własnej oficjalnej kopii zapasowej jest możliwe tylko z wariantem serwera gier **ARK - SE (kompatybilny z oficjalnymi kopiami zapasowymi)**. Jeśli korzystasz z innej wersji serwera, możesz zmienić wersję w sekcji **gry** w panelu administracyjnym swojego serwera lub skorzystać z naszego [poradnika zmiany gry](gameserver-gameswitch.md).

![](https://github.com/zaphosting/docs/assets/42719082/8f2ac8fa-2b23-4738-8d95-87c289e9d98a)
:::



### Własny zwykły plik zapisu

Aby zaimportować własny plik zapisu (nieoficjalny), potrzebujesz wszystkich plików z folderu zapisu. Zazwyczaj znajdują się one w katalogu **SavedArks**, który jest w folderze **Shootergame/Saved**. Znajdź te pliki i zachowaj je do procesu importu.

:::note
Do tego celu powinieneś użyć zwykłego wariantu serwera gier **Ark: SE** (bez wsparcia oficjalnych kopii zapasowych), ponieważ importujesz zwykły plik zapisu, który nie jest oficjalny.

![](https://github.com/zaphosting/docs/assets/42719082/43a6f039-778b-471f-82c8-91f1b8644a33)
:::



## Wgrywanie zapisu na serwer

Gdy już pobierzesz swój plik zapisu `.zip`, musisz go rozpakować za pomocą programu takiego jak 7zip lub Winrar. Dla obu typów serwerów gier i plików zapisu proces wgrywania jest taki sam.

Teraz musisz zalogować się na serwer przez FTP, aby przesłać pliki zapisu. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy z logowaniem się przez ulubionego klienta FTP i przesyłaniem plików.

Po otwarciu klienta FTP przejdź do następującego podkatalogu na swoim serwerze gier:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://github.com/zaphosting/docs/assets/42719082/92ca6e48-346e-4f3c-80e2-972421d1f73f)

Usuń wszystkie pliki obecnego zapisu (lub zrób ich kopię zapasową, jeśli chcesz w przyszłości grać na tym zapisie). Następnie przeciągnij i wgraj wszystkie rozpakowane pliki do tego katalogu (w tym pliki .ark, .arktribe i .arkprofile). Bądź cierpliwy, bo przesyłanie może chwilę potrwać, w zależności od rozmiaru całej zawartości zapisu.

Po zakończeniu przesyłania zrestartuj serwer, a nowe pliki zostaną załadowane. Udało Ci się pomyślnie wgrać oficjalny plik kopii zapasowej na swój serwer gier Ark: Survival Evolved.

<InlineVoucher />