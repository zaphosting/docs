---
id: hytale-teleport-between-worlds
title: "Hytale: Teleport między światami"
description: "Dowiedz się, jak teleportować się między światami na serwerze Hytale → Sprawdź teraz"
sidebar_label: Teleport między światami
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Teleportacja między światami na serwerze Hytale pozwala graczom płynnie przechodzić z jednego świata do drugiego. Ta funkcja jest często wykorzystywana na serwerach, które mają wiele światów, takich jak huby, mapy przygodowe, strefy kreatywne czy oddzielne obszary rozgrywki.

:::info Informacja o Wczesnym Dostępie

Hytale zostało wydane 13 stycznia 2026 i jest obecnie dostępne we Wczesnym Dostępie. Ponieważ gra jest nadal w aktywnej fazie rozwoju, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się z czasem zmieniać.

:::

<InlineVoucher />


## Teleportacja

Polecenia teleportacji między światami można wykonywać z konsoli serwera lub przez operatora w czacie gry. Gdy polecenie jest wykonane z konsoli, dotyczy wskazanego gracza natychmiast. W przypadku wykonania w grze, gracz wydający polecenie musi mieć uprawnienia operatora lub równoważne.

Aby przeteleportować gracza z jego aktualnego świata do innego, użyj następującego polecenia:

```
/world teleport <playername> <worldname>
```

Parametr `<playername>` określa nazwę gracza, który ma zostać przeteleportowany. Parametr `<worldname>` wskazuje nazwę docelowego świata.

Teleportacja między światami wymaga, aby świat docelowy był dostępny na serwerze. Jeśli docelowy świat nie jest aktualnie załadowany, polecenie teleportacji nie powiedzie się. Aby udostępnić świat do teleportacji, załaduj go za pomocą polecenia:

```
/world load <worldname>
```


:::tip Przegląd nazw światów

Jeśli nie jesteś pewien dokładnej nazwy świata, możesz wyświetlić listę wszystkich dostępnych światów, używając polecenia `/world list`.
:::


## Podsumowanie

Teleportacja między światami to potężne narzędzie do zarządzania serwerami Hytale z wieloma światami. Korzystając z odpowiednich poleceń świata w konsoli lub czacie gry oraz dbając o to, by światy docelowe były załadowane, administratorzy mogą zapewnić płynną i elastyczną nawigację między różnymi środowiskami serwera.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />