---
id: spaceengineers-whitelist
title: "Space Engineers: Whitelist"
description: Informacje o tym, jak dodać serwer Space Engineers do whitelisty w ZAP-Hosting → Sprawdź teraz"
sidebar_label: Whitelist
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. W Space Engineers najczęściej stosuje się whitelistę opartą na grupie Steam, gdzie tylko członkowie konkretnej grupy Steam mogą się połączyć.

<InlineVoucher />

## Aktywacja Whitelisty

Stwórz grupę Steam dla swojego serwera i dodaj graczy, którym chcesz pozwolić na dostęp. Następnie połącz się z serwerem przez FTP i otwórz plik `SpaceEngineers-Dedicated.cfg`.

Upewnij się, że serwer jest ustawiony w tryb prywatny i wpisz ID grupy na końcu konfiguracji.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Zamień ID grupy na własne ID grupy Steam. Zapisz plik i zrestartuj serwer.

## Zarządzanie Graczami na Whitelistcie

Aby dodać kogoś do whitelisty, zaproś go do grupy Steam i upewnij się, że do niej dołączył. Po zostaniu członkiem grupy będzie mógł się połączyć.

Aby kogoś usunąć, usuń go z grupy Steam. Gdy nie będzie już członkiem, nie będzie mógł się połączyć. Jeśli chcesz zmienić whitelistę na inną grupę, zmień wartość `<GroupID>` i zrestartuj serwer.

## Sprawdzanie Działania Whitelisty

Po restarcie spróbuj połączyć się kontem Steam, które nie jest w grupie Steam. Serwer powinien odrzucić połączenie. Następnie spróbuj z kontem członka grupy.

Jeśli dostęp jest nadal otwarty, sprawdź, czy serwer działa w trybie prywatnym i czy wpis `<GroupID>` jest obecny w aktywnym pliku `SpaceEngineers-Dedicated.cfg`.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest aktywna i możesz dokładnie kontrolować, kto może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer jeszcze raz i sprawdź plik lub wyjście polecenia, aby potwierdzić, że zmiana została zastosowana.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />