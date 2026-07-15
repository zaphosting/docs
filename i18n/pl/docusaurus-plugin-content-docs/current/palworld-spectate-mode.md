---
id: palworld-spectate-mode
title: "Palworld: Tryb obserwatora"
description: "Dowiedz się, jak korzystać z trybu obserwatora w Palworld, ustawić wymagane hasło administratora i wejść w tryb obserwatora na swoim serwerze. -> Dowiedz się więcej"
sidebar_label: "Tryb obserwatora"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Tryb obserwatora w Palworld pozwala Ci obserwować graczy na Twoim serwerze bez aktywnego udziału. W tym poradniku nauczysz się, jak przygotować dostęp administratora, gdzie sprawdzić wymaganą konfigurację w panelu ZAP-Hosting oraz jak wejść i wyjść z trybu obserwatora w grze.

## Przygotowanie

Zanim będziesz mógł korzystać z trybu obserwatora, potrzebujesz dostępu administratora na swoim serwerze Palworld. Wymaga to ustawienia ważnego `AdminPassword` w konfiguracji serwera.

Jeśli jeszcze tego nie skonfigurowałeś, upewnij się, że najpierw przejrzysz ustawienia serwera Palworld i konfigurację administratora.

:::info Wymagany dostęp administratora
Tryb obserwatora jest dostępny tylko dla administratorów. Jeśli nie zalogujesz się najpierw jako admin, komenda obserwatora nie zadziała.
:::

## Sprawdź wymaganą konfigurację serwera

Chociaż sam tryb obserwatora nie wymaga włączenia dedykowanego ustawienia, Twój serwer musi mieć skonfigurowane hasło administratora, abyś mógł się uwierzytelnić jako admin.

### Otwórz plik konfiguracyjny w panelu ZAP

W panelu webowym serwera gier ZAP-Hosting przejdź do sekcji **Configs**. Odpowiednia konfiguracja Palworld znajduje się w pliku:

`PalWorldSettings.ini`

W zależności od szablonu serwera i wersji gry, plik ten zawiera główne opcje serwera, w tym wpis hasła administratora.



### Zweryfikuj wpis hasła administratora

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings` i sprawdź, czy wartość `AdminPassword` jest ustawiona.

Typowy przykład wygląda tak:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[your_admin_password]")
```

Jeśli Twój plik zawiera wiele opcji w jednej linii `OptionSettings=(...)`, wystarczy, że upewnisz się, iż wpis `AdminPassword` istnieje i zawiera wybrane przez Ciebie hasło.

:::caution Zachowaj istniejącą składnię
Nie usuwaj innych istniejących wartości z linii `OptionSettings`. Palworld zwykle przechowuje wiele ustawień w tym samym wpisie, więc dodawaj lub edytuj wartość `AdminPassword` ostrożnie.
:::

### Odniesienie do konfiguracji

| Plik | Lokalizacja w panelu ZAP | Wymagany klucz | Cel |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Pozwala uwierzytelnić się jako admin i korzystać z trybu obserwatora |

## Zapisz zmiany i zrestartuj serwer

Jeśli zmieniłeś `AdminPassword` w `PalWorldSettings.ini`, zapisz plik i zrestartuj swój serwer Palworld z poziomu panelu ZAP-Hosting.

Restart jest wymagany, aby serwer załadował zaktualizowaną konfigurację.

:::note Wymagany restart
Jeśli nie wprowadzałeś zmian w pliku konfiguracyjnym, a hasło administratora było już poprawnie ustawione, nie jest potrzebny dodatkowy restart konfiguracji dla samego trybu obserwatora.
:::

## Zaloguj się jako administrator

Gdy serwer jest online, połącz się z serwerem Palworld w grze jak zwykle. Aby korzystać z trybu obserwatora, musisz uwierzytelnić się hasłem administratora ustawionym wcześniej.

Dokładna komenda logowania administratora może się różnić w zależności od aktualnej implementacji Palworld i zachowania interfejsu. Jeśli Twój serwer wymaga ręcznej autoryzacji admina po dołączeniu, użyj skonfigurowanego hasła administratora w odpowiedniej komendzie admina lub w oknie logowania admina obsługiwanym przez Twoją wersję serwera.

:::info O uwierzytelnianiu administratora
Aktualne źródła zewnętrzne potwierdzają, że tryb obserwatora wymaga uprawnień admina i konfiguracji `AdminPassword`. Jeśli jednak Twoja wersja serwera używa konkretnej komendy logowania admina, postępuj zgodnie z formatem komendy obsługiwanym przez zainstalowaną wersję Palworld.
:::

## Wejdź w tryb obserwatora

Po połączeniu się jako administrator możesz włączyć tryb obserwatora na jeden z poniższych sposobów.

### Użyj skrótu klawiaturowego

Naciśnij klawisz `\`, aby wejść w tryb obserwatora.

### Użyj komendy

Alternatywnie, wpisz w grze komendę:

```text
/togglespectate
```

Ta komenda przełącza tryb obserwatora włączony lub wyłączony dla Twojej aktualnej sesji postaci, pod warunkiem, że jesteś uwierzytelniony jako admin.

### Odniesienie do komend trybu obserwatora

| Akcja | Metoda | Wymaganie |
| --- | --- | --- |
| Wejście w tryb obserwatora | Naciśnij `\` | Uprawnienia admina |
| Przełącz tryb obserwatora | `/togglespectate` | Uprawnienia admina |
| Wyjście z trybu obserwatora | Naciśnij `Esc` | Aktywny tryb obserwatora |

:::tip Kiedy używać trybu obserwatora
Tryb obserwatora jest przydatny, gdy chcesz monitorować graczy, zbadać zgłoszenia lub obserwować aktywność na serwerze bez ingerencji w rozgrywkę.
:::

## Wyjdź z trybu obserwatora

Aby opuścić tryb obserwatora i wrócić do normalnej rozgrywki, naciśnij `Esc`.

W razie potrzeby możesz też ponownie użyć `/togglespectate`, aby wyłączyć tryb, w zależności od zachowania Twojego serwera.

## Rozwiązywanie problemów

Jeśli tryb obserwatora nie działa, sprawdź następujące kwestie.

### Potwierdź, że hasło administratora jest ustawione

Ponownie otwórz `PalWorldSettings.ini` przez **Configs** i upewnij się, że `AdminPassword` jest obecne i nie jest puste.

### Zrestartuj po zmianie konfiguracji

Jeśli niedawno edytowałeś plik konfiguracyjny, zrestartuj serwer przed kolejnym testem.

### Upewnij się, że jesteś uwierzytelniony jako admin

Posiadanie skonfigurowanego `AdminPassword` nie zawsze wystarcza. Musisz być także rozpoznany przez serwer jako aktywny administrator podczas sesji.

### Sprawdź poprawność klawisza

Na niektórych układach klawiatury klawisz `\` może być umieszczony inaczej. Jeśli skrót nie działa, użyj zamiast tego `/togglespectate`.

:::caution Różnice wersji
Palworld nadal podlega zmianom w rozgrywce i serwerze. Jeśli tryb obserwatora lub zachowanie admina różni się na Twoim serwerze, upewnij się, że serwer jest zaktualizowany i sprawdź, czy aktualna wersja gry nie zmieniła powiązanych komend lub uprawnień.
:::

## Podsumowanie

Gratulacje, pomyślnie skorzystałeś z trybu obserwatora na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!