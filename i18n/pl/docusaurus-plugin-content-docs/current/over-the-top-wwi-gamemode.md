---
title: "Over the Top WWI: Zmiana trybu gry"
description: "Dowiedz się, jak zmienić tryb gry na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Zmiana trybu gry
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Tryb gry na serwerze **Over the Top WWI** definiuje, jak rozgrywane są mecze i jakie cele muszą realizować gracze. Różne tryby gry mogą znacząco zmienić tempo, strategię i ogólne doświadczenie z rozgrywki.

Dostosowując tryb gry, możesz spersonalizować swój serwer, skupiając się na wielkich bitwach, defensywnej rozgrywce lub scenariuszach opartych na celach, w zależności od preferencji Twojej społeczności.

<InlineVoucher />

## Konfiguracja

Tryb gry konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik konfiguracyjny `ServerConfiguration.ini`. W tym pliku znajdź następujący parametr:

```
CurrentGameMode = 2
```

Wartość określa, który tryb gry jest aktywny na Twoim serwerze. Dostępne wartości:

- `2` → Conquest
- `3` → Siege

Wybrana wartość definiuje podstawowe zasady rozgrywki dla każdego meczu.

- **Conquest (2)** skupia się na przejmowaniu i utrzymywaniu celów na mapie, zachęcając do ciągłego ruchu i koordynacji zespołowej.
- **Siege (3)** to zazwyczaj tryb bardziej defensywny, gdzie jedna drużyna atakuje, a druga broni strategicznych pozycji.

Wybór odpowiedniego trybu zależy od Twojego stylu gry i liczby graczy.

Po zmianie wartości w pliku `ServerConfiguration.ini`, zapisz plik i zrestartuj serwer. Nowy tryb gry zostanie zastosowany przy następnym meczu lub rotacji mapy.

## Podsumowanie

Gratulacje! Pomyślnie zmieniłeś tryb gry na swoim **serwerze Over the Top WWI**. Wybierając odpowiedni tryb, możesz kształtować doświadczenie rozgrywki i lepiej dopasować je do preferencji swojej społeczności.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />