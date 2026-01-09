---
id: 7d2d-whitelist
title: "7 Days To Die: Whitelist"
description: "Informacje o tym, jak dodać serwer 7 Days To Die do whitelisty na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Whitelist
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. W 7 Days To Die jest to zazwyczaj zarządzane w pliku serveradmin.xml, który przechowuje zaufane konta Steam. Po włączeniu, tylko gracze znajdujący się na tej liście mogą się połączyć.

<InlineVoucher />


## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i znajdź plik `serveradmin.xml`. W większości instalacji hostingowych znajduje się on w katalogu zapisu, zwykle pod ścieżką podobną do `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` lub bezpośrednio w `7-days-to-die/Saves/serveradmin.xml` w zależności od układu u dostawcy. Otwórz plik i znajdź sekcję `<whitelist>` wewnątrz `<adminTools>`.

Dodaj przynajmniej jedno SteamID64 do whitelisty. Poniższy format odpowiada domyślnej strukturze używanej przez grę.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Zapisz plik i zrestartuj serwer, aby nowa whitelist została załadowana. Jeśli Twój plik zawiera tylko zakomentowane przykłady, upewnij się, że linia `<user ... />` nie jest wewnątrz komentarza XML.

## Zarządzanie Graczami na Whitelistcie

Aby dodać kolejnego gracza, powtórz tę samą zmianę w `serveradmin.xml`, dodając kolejny wpis `<user ... />` w sekcji `<whitelist>`. Użyj SteamID64 gracza jako `steamID`.

Aby usunąć gracza, usuń odpowiednią linię `<user ... />` z sekcji `<whitelist>`, zapisz plik i zrestartuj serwer.

Jeśli wolisz komendy, otwórz Live Console w panelu zarządzania serwerem gier ZAP-Hosting i użyj wbudowanych komend whitelisty, aby dodać lub usunąć graczy. Zmiany wykonane przez komendy zostaną również zapisane w tej samej liście whitelisty, której serwer używa po restarcie.

## Sprawdzanie Działania Whitelisty

Po restarcie spróbuj połączyć się kontem, które nie znajduje się na whitelistcie. Próba dołączenia powinna zostać odrzucona. Następnie spróbuj z kontem znajdującym się na whitelistcie, aby potwierdzić, że dostęp działa.

Jeśli serwer nadal pozwala na dołączenie graczom spoza whitelisty, sprawdź ponownie, czy wpisy whitelisty nie są zakomentowane i czy edytowałeś właściwy plik `serveradmin.xml` dla aktywnego zapisu.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest teraz aktywna i możesz dokładnie kontrolować, kto może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer jeszcze raz i sprawdź plik lub wyjście komend, aby potwierdzić, że zmiana została zastosowana.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />