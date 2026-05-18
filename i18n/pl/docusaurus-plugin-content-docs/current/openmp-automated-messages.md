---
id: openmp-automated-messages
title: "Open.mp: Zautomatyzowane wiadomości serwera - Informuj swoich graczy o nowościach, linkach społecznościowych i nie tylko!"
description: "Skonfiguruj zautomatyzowane wiadomości serwera za pomocą zadań zaplanowanych, aby wyświetlać powtarzające się ogłoszenia"
sidebar_label: Zautomatyzowane wiadomości serwera
services:
- gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Zautomatyzowane wiadomości serwera to prosty, ale skuteczny sposób na przekazywanie ważnych informacji graczom bezpośrednio w grze. Możesz ich używać do wyświetlania zasad serwera, ogłaszania eventów, dzielenia się przydatnymi wskazówkami lub przypomnień w regularnych odstępach czasu, bez konieczności ręcznej ingerencji administratorów.

Dzięki **Zadaniom Zaplanowanym** wiadomości serwera mogą być automatycznie wysyłane na czacie w grze **Open.mp** poprzez wykonywanie zdefiniowanych wcześniej komend według ustalonego harmonogramu.

<InlineVoucher />



## Jak działają zautomatyzowane wiadomości

Zautomatyzowane wiadomości tworzy się, planując zadanie, które wykonuje komendę serwera o określonym czasie lub w określonych odstępach. Komenda może służyć do wysłania wiadomości na czacie, broadcastu lub powiadomienia serwera.

Po skonfigurowaniu zadanie działa automatycznie w tle i wyświetla wiadomość wszystkim podłączonym graczom. Dzięki temu komunikacja jest spójna, bez potrzeby, aby personel był cały czas online.



## Tworzenie zautomatyzowanej wiadomości

Aby stworzyć zautomatyzowane wiadomości serwera, otwórz panel główny swojego serwera gier i przejdź do sekcji **Zadania Zaplanowane**. Utwórz nowe zadanie zaplanowane i wybierz opcję wykonania **komendy**. W polu komendy wpisz komendę wiadomości obsługiwaną przez Twój serwer gier.

```
<komenda wiadomości> <tekst Twojej wiadomości>
```

Zamień komendę na komendę gry lub rozszerzenia, której chcesz użyć do wywołania wiadomości, a `<tekst Twojej wiadomości>` na treść, którą chcesz pokazać graczom.

Następnie możesz określić, jak często wiadomość ma być wysyłana, np. co kilka minut, co godzinę lub o konkretnych godzinach dnia. Szczegółowe instrukcje dotyczące tworzenia zadań zaplanowanych znajdziesz w [poradniku Zadania zaplanowane](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Dostosowywanie odstępów między wiadomościami

Zadania zaplanowane dają pełną kontrolę nad tym, kiedy i jak często wiadomości się pojawiają. Typowe zastosowania to:

- Wyświetlanie zasad serwera co kilka minut
- Ogłaszanie nadchodzących eventów o stałych godzinach
- Wysyłanie wskazówek dotyczących rozgrywki dla nowych lub powracających graczy
- Przypominanie o linkach do Discorda lub strony internetowej

Odstęp między wiadomościami można zmieniać w dowolnym momencie bez konieczności restartu serwera, co pozwala na elastyczne dostosowanie w miarę rozwoju serwera.



## Ważne uwagi

Funkcjonalność zautomatyzowanych wiadomości serwera zależy od możliwości gry i dostępnych komend. Podstawowe wiadomości zaplanowane można wdrożyć za pomocą standardowych komend serwera, jednak takie rozwiązanie może mieć ograniczenia w zakresie formatowania, warunków czy zaawansowanej personalizacji.

Jeśli gra obsługuje dodatkowe pluginy, mody lub rozszerzenia oferujące większą elastyczność i opcje dostosowania, warto rozważyć ich użycie. W takich przypadkach specjalistyczne systemy wiadomości mogą oferować bogatsze funkcje niż domyślne komendy gry i lepiej sprawdzą się w bardziej złożonych lub mocno spersonalizowanych konfiguracjach serwera.



## Podsumowanie

Zautomatyzowane wiadomości serwera to niezawodny sposób, by informować i angażować graczy bez ręcznego wysiłku. Dzięki zadaniom zaplanowanym wykonującym komendy wiadomości, administratorzy serwera mogą zapewnić spójną komunikację na całym serwerze.

Po skonfigurowaniu zautomatyzowane wiadomości działają samodzielnie i można je łatwo ponownie wykorzystać, po prostu dostosowując komendę i tekst wiadomości specyficzny dla gry.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />