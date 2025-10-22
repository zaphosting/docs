---
id: unturned-whitelist
title: "Unturned: Aktywuj i edytuj whitelistę na serwerze"
description: "Dowiedz się, jak zabezpieczyć swój serwer Unturned, aktywując i zarządzając whitelistą, aby kontrolować dostęp graczy → Sprawdź teraz"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Aktywuj whitelistę

Whitelist w Unturned pozwala zabezpieczyć Twój serwer, dopuszczając do niego tylko wybranych graczy znajdujących się na liście. Aktywacja whitelisty odbywa się w grze za pomocą komendy. Wymaga to **uprawnień właściciela**. Jeśli nie wiesz, co to jest i jak je przyznać, sprawdź nasz poradnik: [Zostań adminem](unturned-becomeadmin.md)

Jeśli przeszedłeś poradnik i zostałeś adminem, możesz teraz aktywować whitelistę na swoim serwerze. W tym celu otwórz czat/konsolę w grze na swoim serwerze i wpisz następującą komendę:

```
/Whitelisted
```

Whitelist powinna być teraz aktywna i pozwolić na dołączenie do serwera tylko graczom znajdującym się na liście. Dodawanie i usuwanie graczy jest możliwe za pomocą poniższych komend.

## Zarządzaj whitelistą

**Dodaj gracza do whitelisty:**

```
Permit [SteamID]/[Tag]
```

**Usuń gracza z whitelisty:**

```
Unpermit [SteamID]
```

**Pokaż wszystkich dozwolonych graczy:**

```
Permits
```

<InlineVoucher />