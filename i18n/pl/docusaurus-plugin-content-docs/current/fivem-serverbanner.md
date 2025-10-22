---
id: fivem-serverbanner
title: "FiveM: Skonfiguruj własny baner serwera"
description: "Dowiedz się, jak poprawić wygląd swojego serwera FiveM dzięki własnemu banerowi, który nada mu unikalny, profesjonalny wygląd → Sprawdź teraz"
sidebar_label: Konfiguracja banera serwera
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Własny baner serwera to prosty, ale skuteczny sposób, aby Twój serwer FiveM wyróżniał się na liście serwerów. Nadaje mu unikalny wygląd i dodaje profesjonalnego charakteru, gdy gracze się łączą.

Niezależnie od tego, czy użyjesz własnego zrzutu ekranu, czy zaprojektowanej grafiki, ustawienie banera pomaga Twojej społeczności rozpoznać serwer na pierwszy rzut oka i robi świetne pierwsze wrażenie.

<InlineVoucher />

## Konfiguracja

Aby ustawić własny baner serwera dla swojego serwera FiveM, najpierw potrzebujesz odpowiedniego obrazu. Polecamy zrobić zrzut ekranu w grze, który dobrze reprezentuje Twój serwer. Możesz szybko zrobić zrzut ekranu w grze, naciskając klawisz **F8** podczas rozgrywki i wpisując komendę `screenshot`.

Gdy masz już zrzut ekranu, wrzuć go na serwis hostingowy obrazów, który udostępnia **bezpośredni link** do pliku graficznego (np. kończący się na `.jpg` lub `.png`). Upewnij się, że obraz jest dostępny pod bezpośrednim URL.

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview)

Aby dodać baner, otwórz swój panel główny txAdmin i przejdź do ustawień konfiguracji serwera. Znajdź pole **Server banner URL** i wklej tam bezpośredni link do obrazu. Zapisz zmiany. Twój własny baner pojawi się teraz w szczegółach serwera, gdy gracze zobaczą Twój serwer na liście.

```
# Ustaw opcjonalny baner informacyjny i baner podczas łączenia.
# Rozmiar nie ma znaczenia, każdy obraz w formacie banera będzie OK.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Podmień przykładowe URL-e na bezpośredni link do swojego przesłanego obrazu. Zapisz plik w edytorze CFG i zrestartuj serwer, aby zastosować zmiany.

## Podsumowanie

Twój własny baner będzie teraz widoczny na liście serwerów oraz podczas ekranu łączenia, dzięki czemu Twój serwer będzie wyglądał bardziej unikalnie i profesjonalnie. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />