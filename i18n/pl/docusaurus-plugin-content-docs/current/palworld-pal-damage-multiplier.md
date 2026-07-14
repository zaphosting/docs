---
id: palworld-pal-damage-multiplier
title: "Palworld: Mnożnik obrażeń Pal"
description: "Dowiedz się, jak zmienić mnożnik obrażeń Pal w Palworld, edytując ustawienia obrażeń dla wartości ataku i obrony na swoim serwerze. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Mnożnik obrażeń Pal
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala na dostosowanie, ile obrażeń zadają i otrzymują Twoje Pals, zmieniając ustawienia mnożnika obrażeń na serwerze. W tym poradniku dowiesz się, który plik konfiguracyjny edytować w panelu administracyjnym ZAP-Hosting, jakie wartości zmienić oraz jak poprawnie zastosować nowe ustawienia.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Przed rozpoczęciem upewnij się, że masz dostęp do swojego serwera gier Palworld przez panel administracyjny serwera gier ZAP-Hosting.

:::info Wymagana ręczna konfiguracja
Ta konfiguracja odbywa się poprzez ręczną edycję pliku konfiguracyjnego Palworld. Nie jest wymagane żadne osobne polecenie w grze.
:::

## Otwórz właściwy plik konfiguracyjny

Aby zmienić mnożnik obrażeń Pal, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting otwórz sekcję `Configs` i znajdź tam plik `PalWorldSettings.ini`. Ten plik zawiera główne wartości konfiguracyjne świata i rozgrywki dla Twojego serwera Palworld.

:::note Lokalizacja konfiguracji
Odpowiedni plik do tego poradnika to `PalWorldSettings.ini`, dostępny w panelu administracyjnym serwera gier pod `Configs`.
:::

## Edytuj wartości mnożnika obrażeń Pal

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings`. Ustawienia mnożnika obrażeń Pal są przechowywane jako klucze konfiguracyjne w tej sekcji.

Musisz dostosować następujące wpisy:

| Klucz konfiguracyjny | Wartość domyślna | Cel |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Kontroluje, ile obrażeń zadają Twoje Pals |
| `PalDamageRateDefense` | `1.000000` | Kontroluje, ile obrażeń otrzymują Twoje Pals |

### Przykładowa konfiguracja

Jeśli klucze już istnieją, zmień ich wartości na wybrany mnożnik. Jeśli ich brakuje, dodaj je wewnątrz wpisu `OptionSettings`.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### Co oznaczają wartości

Użyj poniższego zachowania jako odniesienia przy wyborze wartości mnożnika:

| Zmiana wartości | Efekt |
| --- | --- |
| Wyższa `PalDamageRateAttack` | Twoje Pals zadają więcej obrażeń |
| Niższa `PalDamageRateAttack` | Twoje Pals zadają mniej obrażeń |
| Wyższa `PalDamageRateDefense` | Twoje Pals otrzymują mniej korzystne balansowanie obrony i faktycznie otrzymują obrażenia zgodnie z podwyższonym mnożnikiem |
| Niższa `PalDamageRateDefense` | Twoje Pals otrzymują więcej obrażeń |

:::caution Sprawdź dokładnie wartości mnożnika
Ustawienia serwera Palworld używają numerycznych wartości mnożnika. Wprowadź tylko poprawne liczby dziesiętne, takie jak `0.500000`, `1.000000` lub `2.000000`. Nieprawidłowy format może uniemożliwić poprawne załadowanie konfiguracji przez serwer.
:::

## Zapisz zmiany

Po edycji wartości w `PalWorldSettings.ini` zapisz plik w edytorze konfiguracji ZAP-Hosting.

Jeśli dostosowujesz balans dla rozgrywki PvE lub kooperacyjnej, zaleca się najpierw zmieniać jeden mnożnik na raz. Ułatwia to testowanie, jak bardzo zmieniła się zadawana lub otrzymywana ilość obrażeń.

:::tip Zacznij od małych zmian
Małe zwiększenie, np. `1.200000` dla `PalDamageRateAttack`, jest zwykle łatwiejsze do zbalansowania niż duży skok, np. `3.000000`.
:::

## Uruchom ponownie serwer

Po zapisaniu zaktualizowanej konfiguracji zrestartuj swój serwer gier Palworld, aby nowe ustawienia mnożnika obrażeń zostały załadowane.

Nie są wymagane dodatkowe polecenia konsolowe po edycji pliku. Wystarczy pełny restart serwera, aby zastosować zmiany.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Uruchom dodatkowe polecenia | Nie |
| Zrestartuj serwer | Tak |

## Sprawdź nowe ustawienia obrażeń

Po restarcie serwera dołącz do swojego serwera Palworld i przetestuj walkę z Twoimi Pals. Sprawdź, czy:

- Twoje Pals zadają oczekiwaną ilość obrażeń
- Twoje Pals otrzymują oczekiwaną ilość obrażeń
- balans rozgrywki nadal pasuje do konfiguracji Twojego serwera

Jeśli efekt jest zbyt silny lub zbyt słaby, wróć do `PalWorldSettings.ini`, ponownie dostosuj wartości mnożnika, zapisz plik i ponownie zrestartuj serwer.

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś mnożnik obrażeń Pal na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!