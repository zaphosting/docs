---
id: dedicated-linux-git
title: "Konfiguracja Git na serwerze Linux – Włącz kontrolę wersji dla swoich projektów"
description: "Dowiedz się, jak zainstalować i skonfigurować Git, aby efektywnie zarządzać wersjami i współpracować nad projektami → Sprawdź teraz"
sidebar_label: Instalacja Git
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Git to rozproszony system kontroli wersji zaprojektowany do efektywnego zarządzania kodem źródłowym. Pozwala deweloperom śledzić zmiany, pracować na różnych gałęziach jednocześnie oraz bezproblemowo współpracować nad projektami. Dzięki swojej elastyczności i wydajności, Git stał się standardowym narzędziem do kontroli wersji we współczesnym tworzeniu oprogramowania.

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok konfiguracji i ustawień, wraz ze wszystkim, co warto mieć na uwadze.



## Instalacja Git za pomocą One Click Apps Installer

Git możesz zainstalować bezpośrednio przez nasz **One Click Apps Installer** w panelu VPS. Po zakończeniu wstępnej konfiguracji aplikacji, otwórz katalog aplikacji, wyszukaj **Git** i rozpocznij wdrożenie z wybranymi ustawieniami projektu, środowiska i domeny. To szybki i wygodny sposób na uruchomienie i zarządzanie **Git** bez ręcznej konfiguracji w terminalu, a jednocześnie z korzyściami takimi jak zintegrowane zarządzanie przez przeglądarkę, wsparcie dla własnej domeny i automatyczne SSL tam, gdzie jest dostępne.

## Przygotowanie

Zanim zaczniesz konfigurację **Git**, musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji. Te przygotowania zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj poniższe polecenie:

```
sudo apt update && sudo apt upgrade -y
```
To zapewni, że Twój system ma najnowsze łatki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.



## Instalacja

Po wykonaniu niezbędnych przygotowań możesz przejść do instalacji Git. Wykonaj następujące polecenie:

```console
sudo apt install git-all -y
```

Po zakończeniu instalacji sprawdź, czy Git działa poprawnie, otwierając terminal lub wiersz poleceń. Wpisz `git --version` i naciśnij Enter.

Jeśli instalacja przebiegła pomyślnie, Git zwróci numer aktualnie zainstalowanej wersji. Jeśli pojawi się błąd lub brak odpowiedzi, oznacza to zwykle, że Git nie został poprawnie zainstalowany lub polecenie nie jest dostępne w ścieżce systemowej.

```
git --version
git version 2.51.2
```



## Konfiguracja

Skonfiguruj swoją nazwę użytkownika i e-mail w Git, wpisując poniższe polecenia i zastępując przykładowe dane swoimi. Te dane będą powiązane z każdym Twoim commitem.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Podsumowanie i dodatkowe materiały

Gratulacje! Właśnie zainstalowałeś i skonfigurowałeś Git na swoim VPS/serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc i wesprzeć Cię podczas dalszej konfiguracji serwera:

- [git-scm.com](https://git-scm.com/) – Oficjalna strona
- [git-scm.com/doc](https://git-scm.com/doc) – Dokumentacja Git

Masz pytania, których tu nie ma? Jeśli potrzebujesz pomocy lub masz dodatkowe pytania, śmiało kontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc! 🙂