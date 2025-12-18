---
id: factorio-becomeadmin
title: "Factorio: Zostań administratorem"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i skutecznie zarządzać opcjami w grze → Sprawdź teraz"
sidebar_label: Zostań administratorem
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Konfiguracja

Uprawnienia administratora pozwalają na dokonywanie zmian bezpośrednio w grze na Twoim serwerze, bez konieczności edycji Configa. Dodanie admina odbywa się poprzez plik konfiguracyjny **server-settings.json**, który znajdziesz w panelu pod zakładką Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

Na końcu pliku konfiguracyjnego znajduje się kluczowa część. To tam definiuje się administratorów:

```
  "_comment_admins": "Lista nazw użytkowników ignorująca wielkość liter, którzy zostaną od razu awansowani",
  "admins": []
}
```

Nazwy graczy, którzy mają otrzymać uprawnienia administratora, muszą być tam wpisane. Jeśli chcesz dodać kilku adminów, może to wyglądać na przykład tak:

```
  "_comment_admins": "Lista nazw użytkowników ignorująca wielkość liter, którzy zostaną od razu awansowani",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

Gracze o nazwach **PlayerName1, PlayerName2, PlayerName3** otrzymali teraz uprawnienia. Komendy administratora można wykonywać w grze przez konsolę. Poniżej znajdziesz przegląd najczęściej używanych komend.



### Najczęściej używane komendy

|                Komenda                 |                         Opis                          |
| :------------------------------------: | :---------------------------------------------------: |
|                 /admin                 |               Otwiera GUI zarządzania graczami.       |
|           /ban player reason           |                          Banuje gracza                |
|                 /bans                  |               Wyświetla listę zbanowanych graczy.     |
|             /unban player              |                         Odbanowuje gracza             |
|  /banlist add/remove/get/clear player  | Dodaje lub usuwa gracza z listy banów. To samo co /ban lub /unban. |
|          /kick player reason           |                         Wyrzuca gracza z serwera      |
|              /mute player              |                         Wycisza gracza                 |
|             /unmute player             |                        Odmienia wyciszenie gracza     |
| /whitelist add/remove/get/clear player |         Dodaje lub usuwa gracza z whitelisty           |

Więcej dostępnych komend znajdziesz na oficjalnej [Wiki Factorio](https://wiki.factorio.com/Console).


## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />