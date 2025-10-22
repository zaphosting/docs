---
id: fivem-installresources
title: "FiveM: Instalacja zasobów"
description: "Dowiedz się, jak wzbogacić swój serwer FiveM o popularne zasoby do większych projektów, takich jak serwery roleplay → Sprawdź teraz"
sidebar_label: Instalacja zasobów
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Wprowadzenie

Zasoby pozwalają rozbudować Twój serwer FiveM o dodatkowe funkcje. Jest to szczególnie ciekawe, jeśli planujesz większe projekty, takie jak serwer roleplay czy podobne. Bez takich dodatkowych zasobów nie da się tego zrobić.

FiveM i jego społeczność oferują ogromną różnorodność zasobów. Przegląd najpopularniejszych znajdziesz na forum Cfx.re: https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Przygotowanie

Instalacja zasobów odbywa się przez FTP. Będziesz potrzebować klienta FTP, aby przesłać pliki na swój serwer. Jeśli nie znasz się na FTP, polecamy zajrzeć do naszego [poradnika o dostępie FTP](gameserver-ftpaccess.md).

Pobrane zasoby zazwyczaj są w formacie skompresowanym. Oznacza to, że musisz je rozpakować za pomocą programu do archiwizacji, takiego jak 7Zip, Winrar czy WinZip. Rozpakowany folder zasobu powinien zawierać przynajmniej pliki: `__resource.lua` lub `fxmanifest.lua` oraz powiązane pliki skryptów.

:::info
Jeśli tych plików nie ma, mogą znajdować się w podkatalogu wewnątrz zasobu.
:::

## Instalacja

### Wgrywanie plików

Teraz musisz wgrać wcześniej rozpakowane pliki jako osobny folder (jeśli jeszcze tego nie zrobiłeś). Twój folder musi zostać przesłany do katalogu `resource` na serwerze. Struktura katalogów zwykle wygląda tak: `/gXXXXXX/fivem/TWÓJ_SZABLON/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Niektóre zasoby współpracują z bazą danych i często zawierają pliki SQL, które trzeba zaimportować do bazy. Jeśli tak jest, zajrzyj do naszego [poradnika Import plików SQL](fivem-sql-file-import.md), aby dowiedzieć się, jak to zrobić.

### Aktywacja

Aby zainstalowany zasób był ładowany przy starcie serwera, musisz go aktywować w pliku `server.cfg` swojego serwera. Aktywacja odbywa się przez komendę `start [nazwa zasobu]`.

Na przykład, jeśli wgrałeś zasób w folderze o nazwie `eup-ui`, komenda startowa w konfiguracji powinna wyglądać tak: 
```
start eup-ui
```

Do pliku `server.cfg` masz dostęp przez edytor CFG w panelu txAdmin.

:::info
Upewnij się, że nazwa wcześniej utworzonego folderu jest dokładnie taka sama, jak w komendzie startowej – uwzględniając wielkość liter.
:::


## Popularne zasoby

Wciąż szukasz idealnych zasobów na swój serwer? Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i polecanych zasobów, które wzbogacą rozgrywkę i dodadzą Twojemu serwerowi ten ostatni szlif. Zainspiruj się i znajdź dokładnie to, co pasuje do Twojego projektu.

<SearchableItemList items={items} />


## Podsumowanie
Na koniec możesz zrestartować swój serwer. Zainstalowany zasób powinien zostać załadowany przy następnym pełnym uruchomieniu serwera. Udało Ci się pomyślnie zainstalować zasób na swoim serwerze gier FiveM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />