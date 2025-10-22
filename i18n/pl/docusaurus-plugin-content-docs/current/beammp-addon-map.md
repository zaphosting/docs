---
id: beammp-addon-map
title: "BeamMP: Instalacja dodatku mapy"
description: "Dowiedz się, jak wzbogacić swój serwer BeamMP o niestandardowe dodatki map dla lepszej rozgrywki multiplayer → Sprawdź teraz"
sidebar_label: Instalacja dodatku mapy
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

BeamNG.Drive ma natywne wsparcie dla modów i ogromną społeczność, która pozwala na rozbudowę i ulepszenie rozgrywki ze znajomymi. Ponieważ BeamMP to po prostu modyfikacja multiplayer, większość dodatków map powinna być kompatybilna z Twoim serwerem BeamMP. W tym poradniku pokażemy, jak zainstalować i aktywować niestandardowy dodatek mapy na Twoim serwerze BeamMP.

<InlineVoucher />

## Przygotowanie

Aby zainstalować dodatek mapy na swoim serwerze BeamMP, musisz połączyć się z nim przez FTP. Jeśli nie masz z tym doświadczenia, polecamy zajrzeć do [poradnika Dostęp przez FTP](gameserver-ftpaccess.md).

Przed instalacją musisz też znaleźć dodatki map, które chcesz zainstalować na swoim serwerze. Polecamy przeglądać [oficjalne forum BeamNG.Drive](https://www.beamng.com/resources/categories/terrains-levels-maps.9/), gdzie znajdziesz ogromną bibliotekę modów i dodatków map stworzonych przez społeczność.

:::tip
Ponieważ BeamMP to modyfikacja multiplayer dla BeamNG.Drive, większość dodatków map powinna działać na Twoim serwerze BeamMP. Jednak niektóre specyficzne mapy mogą nie działać poprawnie, więc każdą mapę warto przetestować.
:::

## Instalacja

Na początek upewnij się, że pobrałeś dodatek mapy, który chcesz dodać do swojego serwera. Powinien to być plik w formacie `.zip`.

### Wybór nazwy mapy

Zanim przejdziesz dalej, ważne jest, aby upewnić się, że używasz poprawnej nazwy mapy. Plik `.zip`, który pobrałeś, zazwyczaj ma właściwą nazwę, ale nie zawsze, dlatego warto to sprawdzić.

Aby to zrobić, otwórz pobrany plik `.zip`. W środku znajdź i otwórz katalog `levels`, który zawiera właściwą mapę.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Musisz skopiować dokładną nazwę folderu dodatku mapy znajdującego się w tym katalogu. Zrób to klikając prawym przyciskiem myszy, wybierając opcję `Właściwości` i kopiując zaznaczony tekst za pomocą `CTRL + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Konfiguracja mapy

Gdy już znasz nazwę mapy, musisz zmodyfikować plik konfiguracyjny i ustawić parametr z aktywną mapą.

#### Dezaktywacja nadpisania konfiguracji

Najpierw wyłącz domyślny wybór mapy w ustawieniach, bo inaczej nadpisze Twoje zmiany.

Zrobisz to łatwo, przechodząc do sekcji **Ustawienia** w panelu administracyjnym swojego serwera gier.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

Tam wyłącz opcję "Map".

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

Na koniec zapisz zmiany na dole strony.

#### Zmiana mapy w konfiguracji

Aby zmienić mapę w konfiguracji, przejdź do sekcji **Konfiguracje** w panelu webowym.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Znajdź i otwórz plik konfiguracyjny `ServerConfig.toml`, a następnie wyszukaj linię:
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

Zamień wartość na `Map = "/levels/[twoja_nazwa_mapy]/info.json"` używając nazwy mapy, którą wcześniej ustaliliśmy, i zapisz plik.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
W rzadkich przypadkach mapa może mieć inną strukturę. Jeśli po wykonaniu wszystkich kroków mapa nie działa, zamiast `Map = "/levels/[twoja_nazwa_mapy]/info.json"` spróbuj ustawić ścieżkę: `Map = "/levels/[twoja_nazwa_mapy]/[twoja_nazwa_mapy].mis"`
:::

:::tip
W każdej chwili możesz wrócić do domyślnych map gry, po prostu ponownie włączając tę opcję w ustawieniach i wybierając jedną z nich:
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Wgrywanie mapy

Na koniec musisz przesłać wcześniej pobrany plik `.zip` z mapą na swój serwer BeamMP przez FTP. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md).

W swoim kliencie FTP przejdź do ścieżki:
```
../beammp/Resources/Client
```

Po prostu przeciągnij i upuść plik `.zip` z dodatkiem mapy do tego folderu, aby przesłać mapę na serwer. Po edycji pliku konfiguracyjnego i przesłaniu plików mapy, dodatek powinien być gotowy do użycia.

## Podsumowanie

Po wykonaniu wszystkich kroków zrestartuj swój serwer BeamMP. Gratulacje, właśnie zainstalowałeś dodatek mapy na swoim serwerze gier BeamMP. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />