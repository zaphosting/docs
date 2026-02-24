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

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię krok po kroku przez proces instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.



## Przygotowanie

Przed instalacją **Git** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji. Te przygotowania zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj następujące polecenie:

```
sudo apt update && sudo apt upgrade -y
```
Dzięki temu Twój system będzie miał najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.



## Instalacja

Gdy niezbędne przygotowania są już gotowe, możesz przejść do instalacji aplikacji Git. Wykonaj poniższe polecenie:

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

Skonfiguruj swoją nazwę użytkownika i e-mail w Git za pomocą poniższych poleceń, zamieniając przykładowe dane na swoje. Te dane będą powiązane z każdym Twoim commitem.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Podsumowanie i dodatkowe materiały

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Git na swoim VPS/serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą Ci pomóc i wesprzeć podczas konfiguracji serwera:

- [git-scm.com](https://git-scm.com/) – Oficjalna strona
- [git-scm.com/doc](https://git-scm.com/doc) – Dokumentacja Git

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂