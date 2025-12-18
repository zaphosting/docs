---
id: eco-becomeadmin
title: "ECO: Zostań administratorem"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i sprawnie zarządzać grą → Sprawdź teraz"
sidebar_label: Zostań administratorem
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w niej. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Konfiguracja
Dodanie admina odbywa się poprzez konfigurację **Users.eco**, którą znajdziesz w panelu pod zakładką Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)

Aby dodać nowego gracza jako admina, należy zmodyfikować następującą sekcję w pliku **Users.eco**:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```

Gracz, który ma zostać adminem, jest określany w polu **values**. W przypadku kilku adminów, wpisy oddziela się przecinkami. Do identyfikacji gracza używany jest SteamID64.

Możesz go znaleźć, wchodząc na swój profil Steam, a następnie klikając prawym przyciskiem myszy w dowolnym miejscu na profilu. Tam możesz skopiować URL swojego profilu Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)

Następnie URL należy wkleić na jednej z poniższych stron:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)

Strony te pokażą Ci ogólne informacje o koncie oraz Steam ID, które następnie wstawiasz do pola **values**. Efekt powinien wyglądać tak:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```

Po restarcie serwera gracze wpisani w tej sekcji otrzymają uprawnienia administratora. Jeśli chcesz dodać kolejnych adminów, nie musisz już tego robić przez konfigurację. Możesz to zrobić bezpośrednio w grze, używając komendy:

```
/admin [player]
```

Poniżej znajdziesz przegląd najczęściej używanych komend admina, które możesz wykonywać jako administrator.

## Najczęściej używane komendy

|              Komenda               |                      Opis                        |
| :-------------------------------: | :----------------------------------------------: |
|             /allblocks             |               Generuje wszystkie bloki           |
|          /allconstructed           |       Generuje wszystkie bloki możliwe do budowy przez gracza       |
|             /allplants             |               Generuje wszystkie rośliny          |
|             /allskills             |               Odblokowuje wszystkie umiejętności  |
|            /allterrain             |             Generuje wszystkie wykopywalne bloki  |
|          /allworldobjects          |               Generuje wszystkie obiekty świata   |
|      /kick [player],(reason)       |                  Wyrzuca użytkownika              |
|       /ban [player],(reason)       |                  Banuje użytkownika               |
|     /give [itemname],(amount)      |               Daje sobie przedmiot                 |
| /giveskillpoints [player],(amount) |           Daje punkty umiejętności innemu graczowi |
|                /fly                |                 Włącza/wyłącza tryb latania       |
|         /move [x],[y],[z]          | Przenosi Cię do pozycji x, y, z; gdzie xyz to liczby całkowite. |
|       /removeadmin [player]        |              Usuwa użytkownika z adminów           |

Więcej dostępnych komend znajdziesz na oficjalnej [ECO Wiki](https://eco.gamepedia.com/Chat_Commands).

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />