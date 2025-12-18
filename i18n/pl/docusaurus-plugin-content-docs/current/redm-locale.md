---
id: redm-locale
title: "RedM: Zmień język / lokalizację (flaga)"
description: "Dowiedz się, jak dostosować języki i flagi serwera RedM, aby poprawić doświadczenie graczy i lokalizację → Sprawdź teraz"
sidebar_label: Język / lokalizacja (flaga)
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery RedM mogą być wyświetlane w różnych językach. Dotyczy to zarówno wyświetlania flagi serwera w przeglądarce serwerów, jak i języka aktywnie używanego na serwerze. Język można dostosować według potrzeb. Masz więc możliwość wyboru swojego języka i flagi kraju dla swojego serwera.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHgoDfcsN4XX8Jb/preview)

<InlineVoucher />

## Konfiguracja

Konfiguracja flagi i języka serwera odbywa się za pomocą opcji Locales. Konfiguracja locales odbywa się poprzez plik konfiguracyjny serwera. Jest to definiowane przez wartość polecenia **sets locale**. Domyślnie wyświetlany jest język angielski i Antarktyda jako lokalizacja (flaga).

### Otwórz plik konfiguracyjny serwera

Plik konfiguracyjny serwera `server.cfg` jest dostępny w panelu txAdmin w zakładce `CFG Editor`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/kHeJyeXiKDfSY2c/preview)



### Znajdź kod locale/języka dla swojego języka

Definicja języka/wyświetlania odbywa się za pomocą locales (kody języków/kody krajów) opartych na standardach ISO 639-1/ISO 3166-1. Poniżej zebraliśmy krótką listę najważniejszych krajów/języków. Faktyczna lista jest oczywiście znacznie dłuższa:

| Kraj           | Język      | Locale |
| -------------- | ---------- | ------ |
| Niemcy         | Niemiecki  | de-DE  |
| USA            | Angielski  | en-US  |
| Kanada         | Angielski  | en-CA  |
| Australia      | Angielski  | en-AU  |
| Wielka Brytania| Angielski  | en-GB  |
| Finlandia      | Fiński     | fi-FI  |
| Francja        | Francuski  | fr-FR  |
| Holandia       | Holenderski| nl-NL  |
| Portugalia     | Portugalski| pt-PT  |
| Brazylia       | Portugalski| pt-BR  |
| Hiszpania      | Hiszpański | es-ES  |
| Singapur       | Angielski  | en-SG  |

:::caution 
Wyświetlanie flagi serwera jest generalnie wspierane przez wszystkie dostępne kraje. Jednak nie wszystkie zasoby zawierają wszystkie języki. Dlatego upewnij się wcześniej, że Twój kraj/język jest obsługiwany!
:::



### Dostosuj zawartość pliku konfiguracyjnego serwera

Po otwarciu pliku konfiguracyjnego i znalezieniu kodu locale/języka, możesz przejść do konfiguracji. Najpierw sprawdź, czy polecenie **sets locale** już istnieje. Jeśli nie, wpis dla niego wygląda tak:

```
# Poprawny identyfikator locale dla głównego języka Twojego serwera.
# Na przykład "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# prosimy ZAMIENIĆ root-AQ powyżej na prawdziwy język! :)
```

Wartość polecenia **sets locale** domyślnie to **root-AQ**. Teraz trzeba ją zmienić. Na przykład, jeśli chcesz użyć flagi USA i języka angielskiego, użyj wartości **en-US**. Zapisz wprowadzone zmiany.


## Podsumowanie

Ostatnim krokiem jest restart serwera, aby zmiana została zastosowana. Następnie możesz odświeżyć listę serwerów w swoim kliencie RedM i powinieneś zobaczyć wprowadzone zmiany. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />