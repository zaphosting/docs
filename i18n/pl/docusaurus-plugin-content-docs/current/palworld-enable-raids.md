---
id: palworld-enable-raids
title: "Palworld: Włączanie Najazdów"
description: "Dowiedz się, jak włączyć lub wyłączyć najazdy na swoim serwerze Palworld, edytując odpowiednią konfigurację ataków wrogów na bazę. -> Sprawdź teraz"
sidebar_label: Palworld: Włączanie Najazdów
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Najazdy w Palworld to ataki wrogów na bazy graczy na Twoim serwerze. W tym poradniku nauczysz się, jak włączyć lub wyłączyć najazdy, ręcznie edytując odpowiedni plik konfiguracyjny w panelu administracyjnym serwera gier ZAP-Hosting.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld przez panel ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych serwera.

:::info Wymagana Ręczna Konfiguracja
Ta konfiguracja odbywa się poprzez ręczną edycję ustawień serwera Palworld w sekcji **Configs** w panelu administracyjnym serwera gier. Po zapisaniu zmian musisz zrestartować serwer, aby nowe ustawienia zaczęły działać.
:::

## Znajdź Odpowiedni Plik Konfiguracyjny

Aby włączyć lub wyłączyć najazdy, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer gier **Palworld**.
2. Przejdź do sekcji **Configs**.
3. Otwórz plik o nazwie `PalWorldSettings.ini`.

Ten plik zawiera główne wartości konfiguracyjne rozgrywki na Twoim serwerze Palworld, w tym ustawienie kontrolujące włączenie najazdów.

## Edytuj Ustawienie Najazdów

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings`. Odpowiedni klucz konfiguracyjny to:

```ini
bEnableInvaderEnemy=True
```

To ustawienie decyduje, czy najazdy wrogów są aktywne na serwerze.

### Włącz Najazdy

Jeśli chcesz włączyć najazdy, ustaw wartość na `True`:

```ini
bEnableInvaderEnemy=True
```

Dzięki temu w trakcie rozgrywki mogą się pojawiać okresowe ataki wrogów na bazy graczy.

### Wyłącz Najazdy

Jeśli chcesz wyłączyć najazdy, ustaw wartość na `False`:

```ini
bEnableInvaderEnemy=False
```

To całkowicie wyłącza ataki wrogów, co może zapewnić spokojniejszą rozgrywkę i nieco zmniejszyć obciążenie serwera.

## Referencja Konfiguracji

Poniższa tabela to szybkie podsumowanie ustawienia najazdów:

| Plik konfiguracyjny | Klucz konfiguracyjny | Wartość | Efekt |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Włącza najazdy i ataki wrogów |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Wyłącza wszystkie najazdy i ataki wrogów |

:::note Domyślne Zachowanie
Domyślnie serwer Palworld ma ustawione `bEnableInvaderEnemy=True`, czyli najazdy są włączone, chyba że zmienisz to ręcznie.
:::

## Zapisz i Zastosuj Zmiany

Po edycji wartości w `PalWorldSettings.ini` zapisz plik w sekcji **Configs** w panelu ZAP-Hosting.

Następnie musisz zrestartować serwer Palworld, aby załadować zaktualizowaną konfigurację.

### Restart Serwera

Użyj funkcji restartu w panelu administracyjnym serwera gier ZAP-Hosting po zapisaniu pliku.

:::caution Wymagany Restart
Jeśli nie zrestartujesz serwera, zmiana ustawienia najazdów może nie zostać zastosowana. Sama edycja pliku nie wystarczy.
:::

## Sprawdź Ustawienie

Po zakończeniu restartu nowe ustawienie najazdów powinno być aktywne.

- Jeśli `bEnableInvaderEnemy=True`, najazdy są włączone.
- Jeśli `bEnableInvaderEnemy=False`, najazdy są wyłączone.

Jeśli ustawienie nie działa, otwórz ponownie `PalWorldSettings.ini` i sprawdź, czy wartość została poprawnie zapisana bez błędów formatowania.

:::tip Spokojna Budowa Bazy
Wyłączenie najazdów może być przydatne, jeśli chcesz skupić się na eksploracji, budowie bazy lub spokojnej kooperacji bez okresowych ataków wrogów.
:::

## Podsumowanie

Gratulacje, pomyślnie włączyłeś lub wyłączyłeś najazdy na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂