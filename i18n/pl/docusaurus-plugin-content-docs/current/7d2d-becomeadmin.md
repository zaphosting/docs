---
id: 7d2d-becomeadmin
title: "7 Days to Die: Jak zostać administratorem serwera 7 Days to Die"
description: "Dowiedz się, jak przydzielać i zarządzać uprawnieniami administratora, aby mieć pełną kontrolę nad serwerem i dostosować role adminów → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przydzielenie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w niej. Poniżej znajdziesz wszystkie kroki, które musisz wykonać, aby przydzielić uprawnienia administratora na swoim serwerze.  
<InlineVoucher />

## Konfiguracja
Dodanie admina odbywa się przez plik konfiguracyjny **serveradmin.xml**, który znajdziesz w panelu administracyjnym w zakładce Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Swoje SteamID64 znajdziesz, wchodząc na swój profil Steam i klikając prawym przyciskiem myszy w dowolnym miejscu na profilu. Następnie kliknij **Kopiuj adres URL Steam**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Potem otwórz jedną z poniższych stron i wklej tam adres URL swojego profilu:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Dzięki temu uzyskasz ogólne informacje oraz Steam ID swojego konta. Nam potrzebne jest tylko SteamID64. SteamID64 wpisujesz w sekcji ``<admins>...</admins>``. Wygląda to tak:

```
 <users>
    <user steamID="76561198021925107" name="Podpowiedź, kim jest ten użytkownik" permission_level="0" />
  </users>
```

:::danger  Rekord admina nie jest rozpoznawany? 
Upewnij się, że usunąłeś znaki komentarza `<!--` i `-->`, aby linia była aktywna. W przeciwnym razie pozostanie tylko komentarzem i nie zostanie zastosowana. Po prostu usuń te znaki na początku i końcu linii, aby ją aktywować.
:::

Gra pozwala na definiowanie różnych poziomów uprawnień administratora. Oznacza to, że możesz stworzyć różne grupy adminów z różnymi uprawnieniami. Poziom definiuje opcja ``permission_level``, którą można ustawić od 0 do 1000. W zależności od konfiguracji, administratorzy mają dostęp do przypisanych uprawnień. Po wykonaniu tych kroków uprawnienia administratora zostaną pomyślnie przydzielone. 

## Uprawnienia

Uprawnienia do wszystkich komend administratora definiuje się w sekcji ``permissions``. Tutaj również trzeba ustawić odpowiednio ``permission_level``, tak jak przy dodawaniu adminów. Wygląda to tak:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

Poziom uprawnień to wartość od 0 do 1000, która określa, jakie uprawnienia ma gracz. 1000 to najniższy poziom (brak uprawnień), a 0 to najwyższy (pełne uprawnienia administratora). W zależności od tego, jak chcesz ustawić uprawnienia, musisz odpowiednio dostosować tę wartość. 

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />