---
id: redm-prohibited-resources
title: "RedM: „Zasób zawiera zabronioną logikę?”"
description: "Dowiedz się, jak chronić swój serwer przed złośliwymi zasobami RedM i zapewnić bezpieczną, wydajną rozgrywkę → Sprawdź teraz"
sidebar_label: Zasób zawiera zabronioną logikę
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Twórcy zasobów RedM w ostatnich latach włożyli dużo pracy w ochronę swojego kodu źródłowego, stosując techniki takie jak obfuskacja, blokada IP, zdalne ładowanie kodu i inne metody. Niestety, te zabezpieczenia często powodują problemy, o których wielu już słyszało. Niektóre z tych narzędzi nie tylko znacznie spowalniają działanie kodu, ale też wprowadzają liczne zagrożenia bezpieczeństwa.

Cfx.re zaczęło więc blokować złośliwe zasoby, które zawierają kod mający na celu infekowanie serwerów i innych zasobów. Te zasoby czasem próbują „rozprzestrzeniać” swój kod na inne zasoby, by dać osobom trzecim dostęp do skryptów i baz danych. Warto podkreślić, że takie zasoby można porównać do wirusów i stanowią poważne zagrożenie.

<InlineVoucher />



## Znaczenie

Nasz system sprawdza wszystkie zasoby przed uruchomieniem serwera z powodów bezpieczeństwa i wyłącza te, które zostaną rozpoznane jako niebezpieczne. Ten krok jest absolutnie konieczny, dlatego niestety nie ma tu miejsca na wyjątki. Bezpieczeństwo jest najważniejsze!

Jeśli któryś z Twoich przesłanych zasobów zostanie zablokowany, konsola serwera wyświetli dodatkowe informacje na ten temat. Treść takiej informacji może wyglądać na przykład tak:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Jak postępować

Pierwszym i najważniejszym krokiem jest natychmiastowe usunięcie wszystkich złośliwych zasobów. Ponadto, powinieneś instalować tylko zasoby pochodzące z zaufanych źródeł. Dobrym miejscem na start jest oficjalna strona lub [Forum](https://forum.cfx.re/c/development/releases/7) RedM, gdzie znajdziesz szeroki wybór zasobów.

Jako twórca lub osoba współpracująca z twórcą, polecamy korzystać z **systemu RedM Asset Escrow**, który został opracowany przez Cfx.re we współpracy z **Tebex**. Szczegóły znajdziesz w oficjalnym [wpisie na forum Cfx.re](https://forum.cfx.re/t/introducing-redm-asset-escrow/5303450).



## Zasoby zabronione

Niestety nie ma oficjalnej listy zasobów, które mogą wywołać ten komunikat. Zasadniczo nie powinieneś używać zasobów, które stosują inne metody obfuskacji lub nie są oparte na systemie RedM Asset Escrow.



## Podsumowanie
Aby utrzymać bezpieczne i stabilne środowisko serwera, kluczowe jest korzystanie wyłącznie z zaufanych zasobów i natychmiastowe usuwanie tych oznaczonych jako niebezpieczne. Stosując się do tych wskazówek i korzystając z systemu RedM Asset Escrow, pomagasz zapewnić bezpieczeństwo i zgodność w ekosystemie RedM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />