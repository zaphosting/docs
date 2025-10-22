---
id: ark-serverlisting
title: "ARK: Problemy z listowaniem serwerów w grach Steam korzystających ze Steamworks"
description: "Dowiedz się, dlaczego popularne gry mają problemy z listowaniem serwerów z powodu ograniczeń Steamworks i jak wpływa to na Twoje doświadczenie multiplayer → Sprawdź teraz"
sidebar_label: Problemy z listowaniem serwerów
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Niestety, wiele popularnych gier jak ARK czy Valheim ma ogromne problemy z wyświetlaniem wszystkich serwerów w liście serwerów w grze.

Wynika to z faktu, że te gry korzystają z oprogramowania "Steamworks" do listowania serwerów.

Steamworks może wyświetlić maksymalnie 4880 serwerów. Jeśli gra ma więcej aktywnych serwerów, tylko niewielka część z nich pojawi się na liście dla gracza.

To bardzo losowe, czy gracz 1 zobaczy serwer Y, czy nie. 
Zdarza się więc, że gracz 1 widzi serwer Y, ale gracz 2 już nie. Gracz 3 z kolei widzi go ponownie, ale nie widzi innego serwera, który widzi gracz 1.

Aby wykluczyć problem po stronie dostawcy serwera, możesz wyszukać serwer w "Steam" - "Widok" - "Serwer" po adresie IP i porcie. Jeśli serwer tam jest, połączenie między graczem a serwerem działa bez zarzutu. Dzieje się tak, ponieważ zapytanie jest bezpośrednie, wykonane przez gracza.

Dobrym przykładem potwierdzającym problem jest fakt, że szczególnie gracze ARK, którzy uruchamiają grę przez Steam, nie mogą znaleźć serwerów. Jeśli uruchomią ARK przez Epic Games, serwery są wyszukiwane bez problemu. Tutaj nie jest używany Steamworks.

Różni twórcy gier komentowali ten problem. Na przykład Garry Newman z Garrysmod myślał, że problem leży po stronie jego dostawcy serwera OVH. Jednak tak nie było. Problem dotyczy również ZAP-Hosting i każdego innego dostawcy serwerów, ponieważ leży bezpośrednio po stronie Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/M6DkmBYCjLsPBeW/preview)

Źródło: https://x.com/garrynewman/status/1334446218437681152?s=20

Albo nawet Rust, jak piszą na swoim blogu:

```
To nie jest tak różowo, gdy nagle zyskujesz taką popularność. 
Zaczynają pojawiać się pęknięcia w fundamentach, najbardziej widoczne dla nas to, że przeglądarka serwerów nigdy nie była zaprojektowana do obsługi tak dużej liczby serwerów.
Nie wchodząc w szczegóły techniczne, skutkuje to tym, że wiele serwerów nie wyświetla się użytkownikom, co powoduje frustrację właścicieli serwerów. 
Obecnie pracujemy nad rozwiązaniami i je testujemy, prosimy o cierpliwość.
```

Źródło: https://rust.facepunch.com/blog/

Będziemy dalej monitorować problem i informować tutaj, gdy pojawi się rozwiązanie.

<InlineVoucher />