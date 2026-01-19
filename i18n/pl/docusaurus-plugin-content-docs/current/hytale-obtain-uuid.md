---
id: hytale-obtain-uuid
title: "Hytale: Jak zdobyć UUID"
description: "Dowiedz się, jak znaleźć lub zdobyć UUID gracza do konfiguracji serwera i uprawnień → Sprawdź teraz"
sidebar_label: Zdobycie UUID
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Każdy gracz na serwerze Hytale jest wewnętrznie identyfikowany przez UUID, czyli Uniwersalny Unikalny Identyfikator. Ten identyfikator jest stały i nie zmienia się, nawet jeśli gracz zmieni później swoją nazwę użytkownika.

UUID są niezbędne do różnych zadań administracyjnych, takich jak zarządzanie uprawnieniami, przypisywanie grup czy odwoływanie się do graczy w komendach serwera i plikach konfiguracyjnych.

:::info Informacja o Wczesnym Dostępie

Hytale zostało wydane 13 stycznia 2026 i jest obecnie dostępne we Wczesnym Dostępie. Ponieważ gra jest nadal w aktywnej fazie rozwoju, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się z czasem zmieniać.

:::

<InlineVoucher />


## Jak zdobyć UUID

UUID gracza można zdobyć bezpośrednio w grze, korzystając z wbudowanej komendy czatu serwera. Ta metoda jest szczególnie przydatna, gdy gracz jest już online i UUID jest potrzebny od razu.

Będąc zalogowanym z odpowiednimi uprawnieniami, otwórz czat w grze i wykonaj komendę wyszukiwania UUID dla wybranego gracza:

```
/whoami <playername>
```

Po wykonaniu komendy serwer odpowie bezpośrednio na czacie, podając UUID powiązany z określonym graczem. Zwrócony UUID jednoznacznie identyfikuje tego gracza i można go skopiować do zarządzania uprawnieniami, przypisywania grup, wpisów na whitelistę lub innych operacji po stronie serwera.



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## Podsumowanie

Zdobycie UUID gracza to kluczowy krok w zaawansowanym zarządzaniu serwerem Hytale. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />