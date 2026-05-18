---
id: humanitz-change-pvp-mode
title: "HumanitZ: Zmień tryb PvP"
description: "Dowiedz się, jak włączyć lub wyłączyć PvP na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Zmień tryb PvP"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Player versus Player (PvP) to kluczowa mechanika w grach survivalowych takich jak HumanitZ. Włączenie lub wyłączenie PvP zmienia sposób, w jaki gracze mogą się ze sobą mierzyć w walce, czy mogą zadawać sobie obrażenia oraz czy mogą wchodzić w interakcje z przedmiotami należącymi do innych graczy, takimi jak pojazdy czy kontenery.

<InlineVoucher />

## Konfiguracja

Tryb PvP jest kontrolowany w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu administracyjnym swojego serwera w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujący parametr:

```
;false/true=Wyłącz/Włącz. To również wpływa na możliwość interakcji z przedmiotami graczy, takimi jak samochody i kontenery
PVP=true
```

- `PVP=true` – Włącza tryb Player versus Player  
- `PVP=false` – Wyłącza tryb Player versus Player

Aby zmienić tryb PvP, ustaw wartość na `true` (Włączony) lub `false` (Wyłączony), w zależności od tego, jak chcesz, aby PvP działało na Twoim serwerze.

Przykład – PvP wyłączone:

```
PVP=false
```

Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienia zaczęły działać.

## Podsumowanie

Gratulacje! Modyfikując wartość `PVP` w pliku `GameServerSettings.ini`, pomyślnie zmieniłeś tryb PvP na swoim serwerze HumanitZ. Jeśli masz dodatkowe pytania lub potrzebujesz pomocy, śmiało skontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />