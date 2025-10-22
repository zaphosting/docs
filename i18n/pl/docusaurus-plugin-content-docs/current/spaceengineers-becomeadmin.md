---
id: spaceengineers-becomeadmin
title: "Space Engineers: Zostań administratorem serwera"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i wygodnie zarządzać nim w grze → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w niej. Wszystkie kroki, które musisz wykonać, aby nadać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

Aby dobrze zarządzać własnym serwerem gier bezpośrednio w grze, ważne jest posiadanie rangi Admin.

### SteamID64 przez stronę internetową

Na początek musisz otworzyć profil w Steam, a następnie kliknąć prawym przyciskiem myszy w dowolnym miejscu na profilu.  
Następnie możesz skopiować URL profilu Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

Po tym kroku możesz wkleić ten URL na jednej z poniższych stron:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### Wpisanie SteamID do konfiguracji

Następnie zaloguj się do swojego panelu administracyjnego i wybierz serwer.  
Przejdź do zakładki **Konfiguracje**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Otwórz plik **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

Po otwarciu naciśnij **STR + F** i wyszukaj *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Teraz wpisz to:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Całość powinna wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Na koniec **Zapisz** plik konfiguracyjny i gotowe!

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />