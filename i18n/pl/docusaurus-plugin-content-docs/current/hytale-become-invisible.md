---
id: hytale-become-invisible
title: "Hytale: Stań się niewidzialny"
description: "Dowiedz się, jak stać się niewidzialnym na serwerze Hytale → Sprawdź teraz"
sidebar_label: Stań się niewidzialny
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Niewidzialność może być przydatna na serwerach Hytale do moderacji, testów lub tworzenia treści. Pozwala administratorom obserwować graczy bez bycia zauważonym, sprawdzać podejrzane zachowania lub eksplorować obszary bez ingerencji w rozgrywkę. W zależności od konfiguracji serwera i dostępnych uprawnień, niewidzialność można zazwyczaj włączyć za pomocą komend w grze lub konsoli na żywo.

<InlineVoucher />

## Wymagania

Aby korzystać z funkcji niewidzialności, musisz mieć odpowiednie uprawnienia na serwerze. W większości przypadków potrzebujesz uprawnień operatora lub dostępu do komend moderacji i rozgrywki. Jeśli nie masz wymaganych uprawnień, komenda zostanie odrzucona i niewidzialność nie zostanie włączona. Aby uzyskać niezbędne uprawnienia, skorzystaj z naszego [poradnika Jak zostać adminem](hytale-becomeadmin.md).

## Jak stać się niewidzialnym

Aby stać się niewidzialnym, otwórz czat w grze i wpisz komendę niewidzialności obsługiwaną przez serwer. Wykonaj następującą komendę:

```
/hide <playername>
```

Po pomyślnym wykonaniu komendy twoja postać przestanie być widoczna dla innych graczy w świecie. Nadal możesz się poruszać, wchodzić w interakcje i monitorować aktywność, w zależności od zasad serwera i implementacji widoczności.

Oprócz podstawowej komendy hide, Hytale oferuje rozszerzone opcje pozwalające kontrolować, kto może widzieć gracza. Na przykład możesz ukryć gracza tylko przed konkretnym graczem docelowym lub zastosować niewidzialność dla wszystkich na serwerze.

Dostępne komendy to:
- `/hide <playername>`  Czyni wskazanego gracza niewidzialnym.
- `/hide <playername> --target <playername>`  Czyni wskazanego gracza niewidzialnym tylko dla gracza docelowego.
- `/hide all`  Czyni wszystkich graczy niewidzialnymi.

## Wyłączanie niewidzialności

Aby wrócić do normalnej widoczności, ponownie wpisz odpowiednią komendę, aby wyłączyć niewidzialność. Po potwierdzeniu komendy inni gracze znów będą mogli widzieć twoją postać jak zwykle.

```
/hide show <playername>
```

Są też dodatkowe komendy do usuwania niewidzialności w bardziej specyficznych sytuacjach, np. przywracanie widoczności tylko dla wybranych graczy docelowych lub usuwanie niewidzialności ze wszystkich.

Dostępne komendy to:
- `/hide show <playername>`  Usuwa niewidzialność u wskazanego gracza.
- `/hide show <playername> --target <playername>`  Usuwa niewidzialność u wskazanego gracza dla gracza docelowego.
- `/hide showall`  Usuwa niewidzialność u wszystkich graczy.

## Podsumowanie

Stanie się niewidzialnym na serwerze Hytale to przydatne narzędzie dla administratorów i moderatorów, którzy muszą dyskretnie monitorować rozgrywkę. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />