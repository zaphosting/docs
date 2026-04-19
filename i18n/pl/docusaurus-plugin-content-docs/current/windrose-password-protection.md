---
id: windrose-password-protection
title: "Windrose: Ochrona Hasłem"
description: "Ustaw hasło na swoim serwerze gier Windrose, aby zabezpieczyć dostęp i zarządzać ustawieniami zmiany hasła bezpiecznie w konfiguracji serwera -> Dowiedz się więcej teraz"
sidebar_label: Ochrona Hasłem
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Windrose obsługuje ochronę hasłem, która pozwala ograniczyć dostęp do twojego serwera dedykowanego za pomocą hasła do dołączenia. W tym poradniku nauczysz się, jak włączyć, zmienić lub usunąć hasło na swoim serwerze Windrose korzystając z zarządzania serwerem gier ZAP-Hosting.

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera Windrose w panelu głównym ZAP-Hosting oraz uprawnienia do edycji plików serwera.

:::info Wymagany Dostęp
Potrzebujesz dostępu do panelu głównego serwera oraz sekcji zarządzania plikami, aby edytować plik `ServerDescription.json`.
:::

## Zrozumienie ochrony hasłem w Windrose

Ustawienie hasła pomaga zapobiec nieautoryzowanemu dołączaniu graczy do twojego serwera gier Windrose. Gracze nadal mogą dotrzeć do serwera przez kod zaproszenia, ale muszą podać poprawne hasło, zanim się połączą.

Jest to przydatne, jeśli chcesz:
- ograniczyć dostęp do znajomych, ekipy lub prywatnej grupy
- chronić serwer testowy przed publicznym dostępem
- kontrolować, kto może dołączyć bez polegania na osobnym menedżerze haseł lub systemie haseł konta

:::note Zachowanie Hasła
Windrose korzysta z hasła skonfigurowanego bezpośrednio w pliku serwera. Jest to niezależne od hasła twojego konta ZAP-Hosting i nie ma związku z narzędziami takimi jak menedżer haseł, integracja Google menedżera haseł czy jakiekolwiek listy haseł.
:::

## Włącz ochronę hasłem

Aby zastosować hasło, musisz najpierw zatrzymać serwer, edytować plik konfiguracyjny, a następnie ponownie uruchomić serwer.

### Zatrzymaj serwer

Otwórz panel główny swojego serwera w panelu głównym ZAP-Hosting i całkowicie zatrzymaj serwer przed wprowadzeniem zmian.

:::caution Zatrzymaj serwer przed edycją
Przed edycją pliku `ServerDescription.json` zatrzymaj serwer, aby uniknąć konfliktów konfiguracji lub nadpisania pliku podczas działania serwera.
:::

### Otwórz plik konfiguracyjny

W panelu bocznym wybierz `Pliki`.

Następnie znajdź i otwórz plik `ServerDescription.json` w katalogu głównym listy plików serwera.

### Edytuj ustawienia hasła

W pliku `ServerDescription.json` ustaw `IsPasswordProtected` na `true` i zdefiniuj swoje wybrane hasło w polu `Password`.

```json
"IsPasswordProtected": true,
"Password": "TwojeHasloTutaj"
```

Zamień `TwojeHasloTutaj` na swoje własne, bezpieczne hasło.

:::tip Wybierz silne hasło
Użyj unikalnego hasła, które nie jest powiązane z hasłem do twojego konta ani żadnej innej usługi. To pomoże chronić twój serwer Windrose przed niechcianym dostępem.
:::

### Zapisz i uruchom serwer ponownie

Po edycji pliku kliknij `Zapisz zawartość`.

Gdy plik zostanie zapisany, uruchom serwer ponownie z panelu głównego. Twój serwer Windrose będzie teraz wymagał skonfigurowanego hasła przy próbie dołączenia graczy.

## Odniesienie konfiguracji

Poniższa tabela wyjaśnia odpowiednie ustawienia w `ServerDescription.json`:

| Klucz | Typ | Przykład | Opis |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Boolean | `true` | Włącza lub wyłącza ochronę hasłem |
| `Password` | String | `"TwojeHasloTutaj"` | Definiuje hasło do dołączenia używane przy włączonej ochronie hasłem |

## Zmiana istniejącego hasła

Jeśli chcesz później zmienić hasło, proces jest taki sam jak przy pierwszej konfiguracji.

### Zaktualizuj wartość hasła

Zatrzymaj serwer, otwórz `ServerDescription.json` i zmień wartość w polu `Password` na nowe hasło.

Przykład:

```json
"IsPasswordProtected": true,
"Password": "[twoje_nowe_haslo]"
```

Symbol zastępczy `[twoje_nowe_haslo]` oznacza nowe hasło, którego chcesz używać do dołączania graczy na serwer.

### Zapisz i ponownie uruchom

Zapisz plik i uruchom serwer ponownie, aby zmiana hasła zaczęła obowiązywać.

:::note Sprawdzenie hasła
Jeśli gracze nie mogą dołączyć po zmianie hasła, poproś ich o dokładne sprawdzenie wpisywanego hasła, uwzględniając wielkość liter, jeśli ma to znaczenie.
:::

## Usuń ochronę hasłem

Jeśli nie chcesz już chronić swojego serwera Windrose hasłem, możesz wyłączyć tę funkcję w tym samym pliku konfiguracyjnym.

### Wyłącz ustawienie

Zatrzymaj serwer i ponownie otwórz `ServerDescription.json`.

Ustaw `IsPasswordProtected` na `false`. Wartość `Password` jest ignorowana, gdy ta opcja jest wyłączona.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Zapisz i uruchom serwer ponownie

Kliknij `Zapisz zawartość` i uruchom serwer ponownie. Gracze będą mogli dołączać bez podawania hasła.

## Rozwiązywanie problemów

Jeśli ochrona hasłem nie działa zgodnie z oczekiwaniami, sprawdź poniższe punkty.

| Problem | Możliwa przyczyna | Rozwiązanie |
| --- | --- | --- |
| Serwer nie pyta o hasło | `IsPasswordProtected` jest nadal ustawione na `false` | Ustaw na `true`, zapisz plik i uruchom serwer ponownie |
| Gracze nie mogą dołączyć z poprawnym hasłem | Hasło zostało wpisane niepoprawnie | Zweryfikuj skonfigurowaną wartość i poproś graczy o dokładne sprawdzenie wpisywanego hasła |
| Zmiany nie są stosowane | Serwer nie został ponownie uruchomiony po edycji | Uruchom serwer ponownie po zapisaniu `ServerDescription.json` |
| Zmiany w pliku znikają | Plik był edytowany podczas działania serwera | Najpierw zatrzymaj serwer, ponownie wprowadź zmiany, zapisz i uruchom ponownie |

:::danger Nie przechowuj poufnych haseł publicznie
Nie udostępniaj swojego hasła do serwera publicznie na forach, w zrzutach ekranu ani w eksportach plików. Unikaj też używania haseł z dawnych list haseł lub ponownego używania danych logowania z innych usług.
:::

## Podsumowanie

Gratulacje, pomyślnie ustawiłeś ochronę hasłem na swoim serwerze Windrose. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!