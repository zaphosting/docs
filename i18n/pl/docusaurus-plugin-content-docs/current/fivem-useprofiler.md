---
id: fivem-useprofiler
title: "FiveM: Jak używać Profilera do wykrywania problemów na serwerze"
description: "Dowiedz się, jak analizować wydajność serwera i wykrywać problemy z zasobami za pomocą Profilera FiveM dla płynniejszej rozgrywki → Sprawdź teraz"
sidebar_label: Użyj Profilera
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie

Profiler to bardzo przydatne i proste w użyciu narzędzie do mierzenia wydajności serwera. Można go użyć do sprawdzenia kodów i wątków, które mogą powodować problemy z wydajnością. Przyczyną mogą być na przykład źle napisane zasoby lub podobne kwestie. Profiler jest bezpośrednio zintegrowany z oprogramowaniem serwera.

<InlineVoucher />

## Jak korzystać z Profilera
Procedura korzystania z Profilera FiveM jest dość prosta. W konsoli na żywo wpisz polecenia `profiler record 100` oraz `profiler view`. Zostanie utworzony profil z 100 klatkami, do którego możesz uzyskać dostęp przez link podany w konsoli. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## Wykrywanie problemów
Profiler zawiera informacje o poszczególnych aktywnościach (tickach), które warto dokładniej przeanalizować. Wybierz obszar ticka i przybliż go. Na podstawie ticka zobaczysz, które procesy zostały wykonane i ile czasu zajęły.

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

Dzięki temu możesz na przykład rozpoznać, które zasoby zajmują dużo czasu. Zasoby, które łącznie zużywają ponad 6 ms, mogą powodować potencjalne problemy.
:::



## Podsumowanie

Gratulacje, udało Ci się stworzyć profil FiveM, który pozwala zidentyfikować potencjalne problemy. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />