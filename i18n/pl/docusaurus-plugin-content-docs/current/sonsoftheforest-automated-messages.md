---
id: sonsoftheforest-automated-messages
title: "Sons of the Forest: Zautomatyzowane wiadomości na serwerze - Informuj swoich graczy o nowościach, linkach społecznościowych i nie tylko!"
description: "Skonfiguruj zautomatyzowane wiadomości na serwerze za pomocą zadań zaplanowanych, aby wyświetlać powtarzające się ogłoszenia"
sidebar_label: Zautomatyzowane wiadomości na serwerze
services:
- gameserver-sonsoftheforest
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Zautomatyzowane wiadomości na serwerze to prosty, ale skuteczny sposób na przekazywanie ważnych informacji graczom bezpośrednio w grze. Możesz ich używać do wyświetlania zasad serwera, ogłaszania eventów, dzielenia się przydatnymi wskazówkami lub przypomnień w regularnych odstępach czasu, bez konieczności ręcznej ingerencji administratorów.

Dzięki **Zadaniom Zaplanowanym** wiadomości na serwerze mogą być automatycznie wysyłane na czat w grze **Sons of the Forest** poprzez wykonywanie zdefiniowanych komend według ustalonego harmonogramu.

<InlineVoucher />



## Jak działają zautomatyzowane wiadomości

Zautomatyzowane wiadomości tworzy się, planując zadanie, które wykonuje komendę serwera o określonym czasie lub w określonych odstępach. Komenda może służyć do wysłania wiadomości na czat, broadcastu lub powiadomienia serwerowego.

Po skonfigurowaniu zadanie działa automatycznie w tle i wyświetla wiadomość wszystkim podłączonym graczom. Dzięki temu komunikacja jest spójna i nie wymaga obecności personelu online.



## Tworzenie zautomatyzowanej wiadomości

Aby stworzyć zautomatyzowane wiadomości na serwerze, otwórz panel główny swojego serwera gier i przejdź do sekcji **Zadania Zaplanowane**. Utwórz nowe zadanie i wybierz opcję wykonania **komendy**. W polu komendy wpisz komendę wiadomości obsługiwaną przez Twój serwer gier.

```
<komenda wiadomości> <tekst Twojej wiadomości>
```

Zamień komendę na komendę gry lub komendę z rozszerzenia, której chcesz użyć do wywołania wiadomości, a `<tekst Twojej wiadomości>` na tekst, który mają zobaczyć gracze.

Następnie możesz określić, jak często wiadomość ma być wysyłana, np. co kilka minut, co godzinę lub o konkretnych porach dnia. Szczegółowe instrukcje dotyczące tworzenia zadań zaplanowanych znajdziesz w [poradniku Zadania zaplanowane](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Dostosowywanie odstępów między wiadomościami

Zadania zaplanowane dają pełną kontrolę nad tym, kiedy i jak często wiadomości się pojawiają. Typowe zastosowania to:

- Wyświetlanie zasad serwera co kilka minut
- Ogłaszanie nadchodzących eventów o stałych godzinach
- Wysyłanie wskazówek dotyczących rozgrywki dla nowych lub powracających graczy
- Przypominanie o linkach do Discorda lub strony internetowej

Odstęp można zmieniać w dowolnym momencie bez konieczności restartu serwera, co pozwala na elastyczne dostosowanie w miarę rozwoju serwera.



## Ważne uwagi

Funkcjonalność zautomatyzowanych wiadomości na serwerze zależy od możliwości gry i dostępnych komend. Podstawowe wiadomości zaplanowane można wdrożyć za pomocą standardowych komend serwera, jednak takie podejście może mieć ograniczenia w zakresie formatowania, warunków czy zaawansowanej personalizacji.

Jeśli gra wspiera dodatkowe pluginy, mody lub rozszerzenia oferujące większą elastyczność i opcje dostosowania, warto rozważyć ich użycie. W takich przypadkach specjalistyczne systemy wiadomości mogą oferować bogatsze funkcje niż domyślne komendy gry i lepiej sprawdzą się w bardziej złożonych lub mocno spersonalizowanych konfiguracjach serwera.



## Podsumowanie

Zautomatyzowane wiadomości na serwerze to niezawodny sposób, by informować i angażować graczy bez ręcznego wysiłku. Dzięki zadaniom zaplanowanym wykonującym komendy wiadomości, administratorzy serwera mogą zapewnić spójną komunikację na całym serwerze.

Po skonfigurowaniu zautomatyzowane wiadomości działają samodzielnie i można je łatwo ponownie wykorzystać, po prostu dostosowując komendę i tekst wiadomości specyficzny dla gry.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />