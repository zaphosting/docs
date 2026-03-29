---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI: Konfiguracja ustawień rund"
description: "Dowiedz się, jak skonfigurować czas trwania rund i przebieg meczu na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Ustawienia rund
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ustawienia rund w **Over the Top WWI** określają, jak długo trwają mecze i jak przebiega rozgrywka. Dostosowanie tych wartości pozwala kontrolować tempo meczu, długość rund oraz ogólny przebieg sesji.

To szczególnie ważne, jeśli chcesz zbalansować szybkie mecze z dłuższymi, bardziej strategicznymi bitwami.

<InlineVoucher />

## Konfiguracja

Ustawienia rund konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. W środku znajdziesz następujące parametry:

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` określa, ile rund jest rozgrywanych w meczu  
- `MaxMapTime` ustawia maksymalny czas trwania mapy w minutach  
- `FinalRecapTimer2` kontroluje, jak długo wyświetlane jest podsumowanie na koniec rundy  

- `PersistentMatch` decyduje, czy czas i wynik są kontynuowane między rundami  

  - `0` → Wyłączone  
  - `1` → Włączone  

Dostosuj te wartości, aby tworzyć krótsze mecze z szybszymi rotacjami lub dłuższe sesje z rozbudowaną rozgrywką.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia rund zostaną automatycznie zastosowane.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś ustawienia rund na swoim **serwerze Over the Top WWI**. Teraz masz pełną kontrolę nad czasem trwania meczu i płynnością rozgrywki na swoim serwerze.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />