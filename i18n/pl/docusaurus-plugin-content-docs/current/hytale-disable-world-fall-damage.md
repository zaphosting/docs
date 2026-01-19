---
id: hytale-disable-world-fall-damage
title: "Hytale: Wyłącz obrażenia od upadku w świecie"
description: "Dowiedz się, jak wyłączyć obrażenia od upadku na swoim serwerze Hytale → Sprawdź teraz"
sidebar_label: Wyłącz obrażenia od upadku
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Na serwerze Hytale grawitacja i obrażenia od upadku są częścią mechaniki rozgrywki świata. Gdy obrażenia od upadku są włączone, gracze otrzymują obrażenia przy wysokich upadkach, a gdy są wyłączone, mogą swobodnie spadać bez uszczerbku na zdrowiu. Wyłączenie obrażeń od upadku może się przydać na serwerach kreatywnych, projektach budowlanych, środowiskach testowych lub w każdej sytuacji, gdzie obrażenia od upadku nie powinny wpływać na doświadczenie gracza. 

<InlineVoucher />



## Konfiguracja

Obrażenia od upadku są kontrolowane indywidualnie dla każdego świata za pomocą pliku konfiguracyjnego świata. Każdy świat w uniwersum serwera ma swój własny plik `config.json`, a w nim znajduje się ustawienie decydujące o tym, czy obrażenia od upadku są aktywne. 

Aby wyłączyć obrażenia od upadku, otwórz plik `config.json` świata, który znajduje się w odpowiednim folderze świata pod ścieżką `universe/worlds/<world_name>/config.json`. Znajdź ustawienie kontrolujące obrażenia od upadku, zwykle oznaczone jako flaga Boolean, np. `IsFallDamageEnabled`, i ustaw je na `false`:

```
{
  "IsFallDamageEnabled": false
}
```

Gdy ta wartość jest ustawiona na `false`, gracze nie będą już otrzymywać obrażeń od upadku. Jeśli obrażenia mają pozostać włączone, wartość powinna być ustawiona na `true`:

```
{
  "IsFallDamageEnabled": true
}
```

Po aktualizacji pliku zapisz zmiany i **zrestartuj serwer**.
Zmiany w konfiguracji są stosowane tylko podczas przeładowania świata, więc restart jest konieczny, aby nowe ustawienie zaczęło działać.



## Podsumowanie

Dzięki konfiguracji flagi obrażeń od upadku w pliku konfiguracyjnym świata masz pełną kontrolę nad tym, czy gracze otrzymują obrażenia od upadków. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />