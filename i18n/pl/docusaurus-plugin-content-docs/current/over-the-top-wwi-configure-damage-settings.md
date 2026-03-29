---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI: Konfiguracja ustawień obrażeń"
description: "Dowiedz się, jak dostosować obrażenia i zachowanie w walce na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Ustawienia obrażeń
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ustawienia obrażeń w **Over the Top WWI** określają, jak śmiertelna jest walka i jak zachowują się bronie podczas rozgrywki. Dostosowanie tych wartości pozwala stworzyć bardziej realistyczne doświadczenie lub bardziej casualowe i wybaczające środowisko.

Modyfikując mnożniki obrażeń i mechanikę walki, możesz znacząco wpłynąć na tempo eliminacji graczy oraz przebieg starć.

<InlineVoucher />

## Konfiguracja

Ustawienia obrażeń konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. Wewnątrz tego pliku znajdziesz następujące parametry:

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` kontroluje obrażenia zadawane przez broń dystansową

- `MeleeDamageMulti` definiuje obrażenia ataków wręcz

- `ShootingVelocityMulti` wpływa na prędkość pocisków i może mieć znaczenie dla celności oraz rejestracji trafień

- `DragEffector` określa, jak szybko pociski tracą prędkość na dystansie

- `WindEffector` decyduje, jak silnie wiatr wpływa na trajektorię pocisku

- `RandomEffectorr` dodaje losowość do zachowania pocisków, wpływając na celność

Dostosowując te wartości, możesz stworzyć bardziej realistyczne zachowanie balistyczne lub uprościć mechanikę walki, w zależności od stylu Twojego serwera.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia obrażeń i walki zostaną automatycznie zastosowane.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś ustawienia obrażeń na swoim **serwerze gier Over the Top WWI**. Dzięki dostosowaniu tych parametrów możesz dopracować zachowanie walki i stworzyć rozgrywkę idealnie dopasowaną do swojej społeczności.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />