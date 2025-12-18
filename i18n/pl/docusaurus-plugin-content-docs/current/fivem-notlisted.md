---
id: fivem-notlisted
title: "FiveM: Serwer nie pojawia się na liście serwerów"
description: "Dowiedz się, jak rozwiązać problemy z wyświetlaniem serwera i upewnij się, że Twój serwer pojawia się poprawnie na liście → Sprawdź teraz"
sidebar_label: Serwer nie na liście serwerów
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Jeśli serwer nie pojawia się na liście serwerów, może to mieć kilka przyczyn. Jeśli ten poradnik nie rozwiąże problemu, prosimy o kontakt z naszym [Supportem](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Błąd konfiguracji

Często problem wynika z prostych błędów konfiguracyjnych. Najpierw sprawdźmy, czy listing serwera nie jest wyłączony, w tym celu sprawdzamy linię `sv_master1`:

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
Ta linia powinna być **zawsze** zakomentowana za pomocą #, jeśli tak nie jest, serwer nie będzie widoczny na liście.
:::

Sprawdź też nazwę serwera (`sv_hostname`):

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)

W tym przypadku brakuje cudzysłowu na końcu linii. Przy niektórych nazwach serwerów mogą też wystąpić problemy z formatowaniem — zalecamy wtedy usunięcie znaków specjalnych, np. [DE], czy liter takich jak ä, ü, ö.

## Problemowe zasoby

Może się też zdarzyć, że jakieś zasoby blokują wyświetlanie serwera. W takim wypadku polecamy usunąć ostatnio zainstalowane zasoby i zostawić serwer online na około 1 godzinę — w większości przypadków serwer powinien się wtedy ponownie pojawić.

## Reinstalacja

Jeśli nic nie pomaga, warto wykonać świeżą instalację, która zresetuje wszystkie pliki serwera do ustawień domyślnych.

:::info
Przed reinstalacją koniecznie wykonaj kopię zapasową, inaczej dane na serwerze zostaną utracone.
:::

<InlineVoucher />