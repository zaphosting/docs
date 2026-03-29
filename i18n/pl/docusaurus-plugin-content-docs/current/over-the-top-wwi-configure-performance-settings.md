---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI: Optymalizacja wydajności serwera"
description: "Dowiedz się, jak zoptymalizować wydajność i działanie serwera Over the Top WWI → Sprawdź teraz"
sidebar_label: Ustawienia wydajności
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ustawienia wydajności w **Over the Top WWI** wpływają na płynność działania Twojego serwera, zwłaszcza przy dużej liczbie graczy lub intensywnym użyciu AI. Odpowiednia konfiguracja może poprawić stabilność, zmniejszyć lagi i zapewnić lepsze doświadczenia z gry dla wszystkich graczy.

Dzięki dostosowaniu tych wartości możesz wyważyć symulację wizualną, obliczenia AI oraz obciążenie serwera.

<InlineVoucher />

## Konfiguracja

Ustawienia wydajności konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w **panelu zarządzania serwerem gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. Wewnątrz pliku znajdziesz następujące parametry:

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` definiuje profil wydajności serwera

  - `0` → Domyślny
  - `1` → Optymalizacja pod większą liczbę graczy
  - `2` → Optymalizacja pod bardzo dużą liczbę graczy

- `NavCalcsPerFrame` kontroluje, ile obliczeń nawigacji jest przetwarzanych na klatkę
- `NavMeshFrames` określa, jak często aktualizowane są siatki nawigacyjne
- `NavMeshAutoSeed` wpływa na sposób generowania ścieżek nawigacji AI
- `ResetIfNoPlayers` automatycznie resetuje serwer, gdy nie ma podłączonych graczy

  - `0` → Wyłączone
  - `1` → Włączone

Dostosowanie tych ustawień może pomóc poprawić wydajność serwera, zwłaszcza przy dużej liczbie botów lub podczas organizowania wielkich bitew.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia wydajności zostaną zastosowane automatycznie.

## Podsumowanie

Gratulacje! Pomyślnie zoptymalizowałeś ustawienia wydajności na swoim **serwerze gier Over the Top WWI**. Odpowiednie dostrojenie tych wartości pomaga utrzymać stabilność i zapewnia płynną rozgrywkę nawet przy dużym obciążeniu.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />