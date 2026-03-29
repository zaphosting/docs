---
title: "Over the Top WWI: Konfiguracja wiadomości serwera"
description: "Dowiedz się, jak ustawić automatyczne wiadomości na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Wiadomości Serwera
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Automatyczne wiadomości serwera to super sposób, żeby przekazywać ważne info graczom podczas rozgrywki. Możesz nimi podzielić się zasadami, zachęcić do dołączenia na Discorda albo dać przydatne wskazówki.

Na serwerze **Over the Top WWI** wiadomości mogą się wyświetlać w regularnych odstępach czasu, dzięki czemu wszyscy gracze dostaną ważne info bez Twojej ręcznej ingerencji.

<InlineVoucher />

## Konfiguracja

Wiadomości serwera konfiguruje się w pliku konfiguracyjnym serwera. Możesz go znaleźć i edytować w swoim **panelu zarządzania serwerem gier** w zakładce **Konfiguracje**. Odszukaj i otwórz plik `ServerConfiguration.ini`. W środku znajdziesz takie parametry:

```
ShowServerTimedMessages = 1
AddServerMessage = Dołącz do oficjalnego Discorda! discord.gg/example
AddServerMessage = Zgłaszaj błędy na naszym Discordzie.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` włącza lub wyłącza automatyczne wiadomości. Ustaw na `1`, żeby je włączyć, lub `0`, żeby wyłączyć.
- `AddServerMessage` definiuje wiadomości, które będą wyświetlane. Możesz dodać kilka linii, żeby rotować różne wiadomości podczas gry.
- `ServerMessagesTimer` ustala odstęp między wiadomościami w sekundach. Na przykład `120` oznacza, że wiadomość pojawi się co 2 minuty.

Możesz dowolnie personalizować i rozszerzać swoje wiadomości, dodając kolejne linie:

```
AddServerMessage = Witaj na serwerze!
AddServerMessage = Przestrzegaj zasad i szanuj innych graczy.
AddServerMessage = Dołącz do naszego Discorda, żeby być na bieżąco.
```

Po zmianach w `ServerConfiguration.ini` zapisz plik i zrestartuj serwer. Wiadomości będą się automatycznie pojawiać w grze zgodnie z ustawionym interwałem.

## Podsumowanie

Gratulacje! Udało Ci się skonfigurować automatyczne wiadomości na swoim **serwerze Over the Top WWI**. Dzięki temu łatwiej utrzymasz graczy w temacie i poprawisz komunikację na serwerze.

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />