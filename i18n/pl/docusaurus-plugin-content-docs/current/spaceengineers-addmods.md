---
id: spaceengineers-addmods
title: "Space Engineers: Instalacja modów"
description: "Dowiedz się, jak bezpiecznie skonfigurować i dodać mody do swojego serwera gier Space Engineers, aby uzyskać spersonalizowaną rozgrywkę → Sprawdź teraz"
sidebar_label: Instalacja modów
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Przygotowanie

Aby móc dodać mody na serwerze, trzeba edytować plik konfiguracyjny. Żeby nie było problemów z zastosowaniem zmian, upewnij się, że serwer jest wcześniej zatrzymany!

Żeby w dalszym kroku edytować właściwy config, musisz najpierw poznać nazwę savegame. Jeśli nie zmieniałeś tych ustawień, domyślnie jest to "zap001". Dla pewności sprawdź to tak, jak opisano poniżej:

Aby przejść do ustawień serwera, otwórz pozycję „Ustawienia” w lewej liście pod zakładką „Ustawienia”

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

Nazwę savegame możesz zobaczyć lub zmienić w pierwszym polu na tej stronie. Zapamiętaj tę nazwę, bo później będziesz edytować odpowiedni plik konfiguracyjny.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

Do tego poradnika potrzebujesz też zainstalowanego **Notepad++**, żeby dokładnie wykonać wszystkie kroki!

## Wybierz mody

Mnóstwo modów znajdziesz w warsztacie Space Engineers. Warsztat jest dostępny [tutaj](https://steamcommunity.com/workshop/about/?appid=244850).

Gdy znajdziesz ciekawy mod, kliknij go, żeby zobaczyć szczegóły. Jeśli Ci się spodoba, zapisz teraz jego ID. Mod-ID jest zwykle pogrubione po boku lub na górze w pasku URL:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Otwórz pliki konfiguracyjne

Pliki serwera możesz edytować na dwa sposoby: przez [dostęp FTP](gameserver-ftpaccess.md) lub przez edytor konfiguracji w panelu webowym.

W tym poradniku edytujemy config ręcznie przez FTP, żeby uniknąć błędów składni. Jak nawiązać połączenie FTP, jest dokładnie opisane w instrukcji powyżej.

Po połączeniu się przez FTP, przejdź do katalogu:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

W tym folderze znajdziesz wszystkie savegame’y, które kiedykolwiek powstały na serwerze. Aby edytować config konkretnego savegame’a, otwórz odpowiedni folder. W naszym przykładzie to folder "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

W tym folderze musisz edytować plik sandbox. To właśnie ten config otwórz, tak jak na zrzucie ekranu!

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Dodaj mody

W configu jest już sekcja na mody, która znajduje się na końcu pliku. Zaznacz ją myszką i usuń. Następnie wklej następującą zawartość:

`<Mods></Mods>`

Po wklejeniu, ustaw kursor pomiędzy "&gt;" i "&lt;" i naciśnij ENTER. To automatycznie ustawi poprawną składnię i możesz kontynuować.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

Teraz dodajemy pierwszy mod. Używamy do tego "ModItem", który reprezentuje pojedynczy mod. Skopiuj poniższy fragment i wklej go do configu tak, jak pokazano na GIF-ie:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Zamiast 12345 wpisz ID swojego wybranego moda!
:::

Jak widać na GIF-ie, te same kroki powtarzasz, żeby dodać kolejne mody. Gdy dodasz wszystkie, zapisz config przez **CTRL+S** i zamknij plik. Teraz możesz normalnie uruchomić serwer, a mody zostaną automatycznie zainstalowane.

<InlineVoucher />