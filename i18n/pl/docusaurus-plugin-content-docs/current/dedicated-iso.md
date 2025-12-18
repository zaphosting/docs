---
id: dedicated-iso
title: "Serwer dedykowany: Własne ISO"
description: "Dowiedz się, jak łatwo zamontować pliki ISO za pomocą iLO lub konsoli zdalnej, aby efektywnie uruchomić swój serwer → Sprawdź teraz"
sidebar_label: Własne ISO
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Chcesz zamontować plik ISO? Może jeden z naszych, a może wolisz swój własny? Żaden problem. Oferujemy szeroki wybór plików ISO, a także dodatkowe opcje.

:::danger Wybór i użycie plików ISO
Korzystając z własnego ISO (systemu operacyjnego), którego aktywnie nie oferujemy, nie możemy zagwarantować działania w przypadku ewentualnych problemów.
:::



## Dostępne opcje montowania
Są dwa sposoby na zamontowanie własnego pliku ISO. Zawsze konieczny jest restart serwera, aby załadować plik. Generalnie nie ma ograniczeń co do montowania pliku, ważne, aby plik ISO był bootowalny.

## Montowanie przez iLO
Otwórz swój interfejs zarządzania iLO i przejdź do „Virtual Media”
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Wpisz URL wskazujący na plik ISO, którego chcesz użyć. Upewnij się, że link kończy się na .iso
* Teraz kliknij „Insert Media”
* Kliknij „Server Reset”, co spowoduje restart systemu.

Twój plik ISO zostanie teraz załadowany.

## Montowanie przez konsolę zdalną

**Konsola HTML5**
Plik ISO możesz łatwo zamontować bezpośrednio w konsoli zdalnej:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Kliknij ikonę dysku
* Wybierz „CD/DVD”
* Wybierz między „Scripted media URL” a „Local .iso File”

Różnica między „Scripted media URL” a „Local .iso File” polega na tym, że możesz zamontować plik ISO, który jest już wgrany na serwer/hosting, lub wybrać bezpośrednio plik z komputera za pomocą „Local *.iso File”, bez konieczności przesyłania go gdziekolwiek.

Po wybraniu pliku ISO wymagany jest restart serwera.


**Konsola Java**
Podobnie jak w konsoli HTML5, plik ISO montujesz bezpośrednio w aplikacji.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Otwórz „Virtual Drives”

Różnica między „Image File CD/DVD-ROM” a „URL CD/DVD-ROM” jest taka, że możesz zamontować plik ISO, który jest już wgrany na serwer/hosting, lub wybrać bezpośrednio plik z komputera za pomocą „Image File CD/DVD-ROM”, bez konieczności przesyłania go gdziekolwiek.

Po wgraniu wybranego pliku ISO wymagany jest restart serwera.


## Podsumowanie
Gratulacje, pomyślnie wybrałeś i zamontowałeś swój plik ISO. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂