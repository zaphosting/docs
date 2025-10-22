---
id: fivem-prohibited-resources
title: "FiveM: 'Resource contains prohibited logic?'"
description: "Dowiedz się, jak chronić swój serwer FiveM przed złośliwymi zasobami i zapewnić bezpieczną, wydajną rozgrywkę → Sprawdź teraz"
sidebar_label: Zasób zawiera zabronioną logikę
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Twórcy zasobów FiveM w ostatnich latach włożyli dużo wysiłku, aby chronić swój kod źródłowy za pomocą technik takich jak obfuskacja, blokada IP, zdalne ładowanie kodu i innych metod. Niestety, te zabezpieczenia często powodują problemy, o których wielu już wie. Niektóre z tych narzędzi nie tylko znacznie spowalniają działanie kodu, ale też wprowadzają liczne zagrożenia bezpieczeństwa.

Dlatego Cfx.re zaczął blokować złośliwe zasoby, które zawierają kod mający na celu infekowanie serwerów i innych zasobów. Te zasoby czasem próbują „rozprzestrzeniać” swój kod na inne zasoby, aby dać osobom trzecim dostęp do skryptów i baz danych. Warto podkreślić, że takie zasoby można generalnie porównać do wirusów i stanowią poważne zagrożenie.

<InlineVoucher />



## Znaczenie

Nasz system sprawdza wszystkie zasoby przed uruchomieniem serwera z powodów bezpieczeństwa i wyłącza wszystkie, które zostaną rozpoznane jako niebezpieczne. Ten krok jest absolutnie konieczny, dlatego niestety nie ma tu miejsca na wyjątki. Bezpieczeństwo jest najważniejsze!

Jeśli któryś z Twoich przesłanych zasobów zostanie zablokowany, konsola serwera poda dodatkowe informacje na ten temat. Zawartość tych informacji może wyglądać na przykład tak:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Jak postępować

Pierwszym i najważniejszym krokiem jest natychmiastowe usunięcie wszystkich złośliwych zasobów. Ponadto, powinieneś instalować tylko zasoby pochodzące z zaufanych źródeł. Dobrym miejscem na start jest oficjalna strona lub [Forum](https://forum.cfx.re/c/development/releases/7) FiveM, gdzie znajdziesz szeroki wybór zasobów.

Jako twórca lub osoba współpracująca z twórcą, polecamy zapoznać się z **systemem FiveM Asset Escrow**, który został opracowany przez Cfx.re we współpracy z **Tebex**. Szczegóły znajdziesz w oficjalnym [wpisie na forum Cfx.re](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151).



## Zasoby zabronione

Niestety nie ma oficjalnej listy zasobów, które mogą wywołać ten komunikat. Zasadniczo nie powinieneś używać zasobów, które stosują inne metody obfuskacji lub nie bazują na systemie FiveM Asset Escrow.



## Podsumowanie
Aby utrzymać bezpieczne i stabilne środowisko serwera, kluczowe jest korzystanie wyłącznie z zaufanych zasobów i natychmiastowe usuwanie tych oznaczonych jako niebezpieczne. Stosując się do tych wskazówek i korzystając z systemu FiveM Asset Escrow, pomagasz zapewnić bezpieczeństwo i zgodność w ekosystemie FiveM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />