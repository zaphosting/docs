---
id: windrose-firststeps-connect
title: "Windrose: Połącz się z serwerem"
description: "Dowiedz się, jak połączyć się z serwerem Windrose za pomocą poprawnego kodu zaproszenia i nawiązać stabilne połączenie bez typowych problemów -> Sprawdź teraz"
sidebar_label: Połącz się z serwerem
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Nie wiesz, jak połączyć się z serwerem **Hytale** lub czego potrzebujesz, aby zacząć? Spokojnie, mamy to dla Ciebie! Przeprowadzimy Cię przez wszystko, co potrzebne — od wymaganych narzędzi i informacji, po sam proces łączenia, wraz z kluczowymi wskazówkami, które zapewnią płynne i bezproblemowe połączenie. Skorzystaj z naszego poradnika i połączysz się w mgnieniu oka!

## Uzyskaj dane serwera
Zanim się połączysz, musisz zebrać odpowiednie informacje o serwerze z panelu zarządzania Twoim serwerem gier ZAP-Hosting. W przypadku Windrose najważniejszym elementem jest **kod zaproszenia**.

Kod zaproszenia znajdziesz w zarządzaniu serwerem gier, w plikach konfiguracyjnych serwera, w pliku `InviteCode.txt`.

:::info Wymaganie kodu zaproszenia
Dla Windrose kod zaproszenia jest kluczową wartością do połączenia z serwerem. Jeśli użyjesz złego lub przestarzałego kodu, połączenie może się nie powieść.
:::

Poniższe informacje są przydatne przed rozpoczęciem:

| Informacja | Cel |
| --- | --- |
| Zawartość `InviteCode.txt` | Wymagana do połączenia z serwerem Windrose |
| Nazwa serwera | Pomaga zidentyfikować właściwy serwer |
| Opcjonalne hasło serwera | Może być wymagane w zależności od konfiguracji |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Nawiąż połączenie z serwerem
Gdy masz już kod zaproszenia, możesz połączyć się z serwerem Windrose bezpośrednio przez grę.

### Znajdź kod zaproszenia w zarządzaniu serwerem
Otwórz panel zarządzania serwerem gier ZAP-Hosting i przejdź do sekcji konfiguracji serwera. Znajdź plik o nazwie `InviteCode.txt` i otwórz go.

W tym pliku znajdziesz aktualny kod zaproszenia do Twojego serwera. Skopiuj tę wartość dokładnie tak, jak jest podana.

:::note Wartości zastępcze
Jeśli w poradniku widzisz wartość taką jak `[your_invite_code]`, zamień ją na faktyczny kod z własnego pliku `InviteCode.txt`.
:::

### Dołącz do serwera w Windrose
Uruchom Windrose i otwórz menu połączenia z serwerem lub tryb multiplayer. Znajdź opcję pozwalającą dołączyć do serwera za pomocą kodu zaproszenia.

Wprowadź kod zaproszenia z `InviteCode.txt` w wymagane pole i potwierdź połączenie. Jeśli Twój serwer jest chroniony, może być też wymagane podanie hasła na tym etapie.

| Pole | Co wpisać |
| --- | --- |
| Kod zaproszenia | `[your_invite_code]` |
| Hasło | `[your_server_password]` jeśli jest skonfigurowane |

Po wpisaniu kodu gra powinna nawiązać połączenie z Twoim serwerem Windrose.

:::tip Kopiuj kod dokładnie
Aby uniknąć problemów z połączeniem, najlepiej kopiuj i wklejaj kod zaproszenia bezpośrednio z `InviteCode.txt`. Nawet drobny błąd może uniemożliwić połączenie.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Możliwe problemy i rozwiązania
Jeśli połączenie z serwerem nie działa od razu, sprawdź poniższe najczęstsze przyczyny.

### Kod zaproszenia nie działa
Jeśli kod zaproszenia jest odrzucany, najpierw upewnij się, że poprawnie skopiowałeś całą zawartość `InviteCode.txt`. Sprawdź, czy nie ma dodatkowych spacji przed lub po kodzie.

Możliwe też, że kod zaproszenia zmienił się po restarcie serwera, aktualizacji lub zmianie konfiguracji. W takim wypadku ponownie otwórz `InviteCode.txt` i użyj aktualnej wartości.

### Serwer nie jest jeszcze gotowy
Jeśli serwer nadal się uruchamia lub nie zakończył inicjalizacji, gracze mogą nie móc się połączyć nawet z poprawnym kodem zaproszenia.

Sprawdź konsolę serwera i logi w panelu zarządzania serwerem gier, aby potwierdzić, że serwer uruchomił się poprawnie i jest w pełni online.

:::caution Poczekaj na pełne uruchomienie
Nie próbuj łączyć się, gdy serwer wciąż się ładuje lub restartuje. Może to powodować nieudane próby połączenia, nawet jeśli kod zaproszenia jest poprawny.
:::

### Problemy z konfiguracją lub plikami
Jeśli serwer nadal jest niedostępny, może występować problem z konfiguracją lub uszkodzone pliki uniemożliwiające poprawne uruchomienie. W takim przypadku sprawdź ostatnie zmiany w konfiguracji i przejrzyj logi pod kątem błędów.

W razie potrzeby przywróć działającą kopię zapasową lub cofnij ostatnie zmiany konfiguracyjne.

### Brak rozwiązania lub brak pomocy
Jeśli nadal nie możesz się połączyć po sprawdzeniu kodu zaproszenia, statusu serwera i konfiguracji, skontaktuj się z zespołem wsparcia ZAP-Hosting przez oficjalną [stronę wsparcia](https://zap-hosting.com/en/customer/support/).

Przy zgłoszeniu podaj jak najwięcej szczegółów, takich jak:

- Dokładny problem, który występuje
- Czy serwer uruchamia się poprawnie
- Czy kod zaproszenia w `InviteCode.txt` jest widoczny
- Wszelkie istotne komunikaty o błędach z konsoli lub logów

## Conclusion
Gratulacje, pomyślnie połączyłeś się z serwerem Windrose za pomocą kodu zaproszenia. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂