---
id: rust-plugins
title: "Rust: Instalacja pluginów"
description: "Dowiedz się, jak wzbogacić swój serwer Rust o popularne pluginy dla lepszej personalizacji i rozgrywki → Sprawdź teraz"
sidebar_label: Instalacja Pluginów
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Wprowadzenie

Pluginy pozwalają jeszcze bardziej rozbudować i spersonalizować Twój serwer. Poniżej wyjaśnimy, gdzie znaleźć najczęściej używane pluginy i jak je zainstalować.

<InlineVoucher />


## Przygotowanie

Na początek musisz pobrać pluginy, które chcesz zainstalować na serwerze. Duży wybór pluginów znajdziesz na [umod.org (dawniej OXIDE)](https://umod.org/plugins). Podczas pobierania otrzymasz plik z rozszerzeniem `.cs`.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Instalacja

Gdy już pobierzesz wybrane pluginy, możesz przejść do instalacji. Odbywa się to przez **FTP**, więc potrzebujesz klienta FTP, aby przesłać pliki na swój serwer. Jeśli nie znasz jeszcze FTP i jak to działa, zajrzyj do naszego [poradnika FTP access](gameserver-ftpaccess.md).

Poprawny katalog na pluginy znajdziesz pod ścieżką: `/gXXXXXX/rust-oxide/oxide/plugins`. Po prostu wrzuć tam pobrane pliki `.cs`. Po przesłaniu folder powinien wyglądać mniej więcej tak:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

Więcej nic nie trzeba robić. To już kończy instalację. Następnie możesz sprawdzić na żywo w konsoli, czy plugin został poprawnie skompilowany i załadowany. Wygląda to mniej więcej tak:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Popularne Pluginy

Szukasz idealnych pluginów na swój serwer?

Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i polecanych pluginów, które wzbogacą rozgrywkę i nadadzą Twojemu serwerowi ten wyjątkowy charakter. Zainspiruj się i znajdź dokładnie te dodatki, które pasują do Twojego projektu.

<SearchableItemList items={items} />


## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś mieć już poprawnie zainstalowany plugin. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />