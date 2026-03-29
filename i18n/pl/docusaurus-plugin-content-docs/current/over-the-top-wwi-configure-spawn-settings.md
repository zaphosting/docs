---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI: Konfiguracja ustawień respawnu"
description: "Dowiedz się, jak skonfigurować zachowanie respawnu na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Ustawienia Respawnu
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ustawienia respawnu w **Over the Top WWI** kontrolują, jak i kiedy gracze wracają na pole bitwy. Te ustawienia mają bezpośredni wpływ na tempo rozgrywki, sprawiedliwość i ogólny flow meczu.

Dzięki regulacji timerów respawnu, okresów bezkarności i zachowania przy odradzaniu, możesz stworzyć szybszą rozgrywkę lub bardziej taktyczne i wymagające starcia.

<InlineVoucher />

## Konfiguracja

Ustawienia respawnu konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. Wewnątrz pliku znajdziesz następujące parametry:

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` definiuje, jak długo gracze mogą respawnować się bez kar lub ograniczeń na początku
- `AttackerRespawnTime` ustawia czas odrodzenia dla drużyny atakującej
- `DefenderRespawnTime` ustawia czas odrodzenia dla drużyny broniącej

- `WaveSpawning` włącza lub wyłącza respawn falowy

- `WaveLegnth` określa, jak długo trwa jedna fala respawnu
- `WaveBuildUpTime` kontroluje, ile czasu zajmuje pełne utworzenie fali

Dostosowując te wartości, możesz kontrolować, czy gracze respawnować się indywidualnie, czy w skoordynowanych falach oraz jak szybko mogą wrócić na pole bitwy.

Po zmianie pliku `ServerConfiguration.ini`, zapisz go i zrestartuj serwer. Nowe ustawienia respawnu zostaną zastosowane automatycznie.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś ustawienia respawnu na swoim **serwerze Over the Top WWI**. Te zmiany pozwalają Ci precyzyjnie dostroić tempo rozgrywki i poprawić ogólne doświadczenie graczy.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />