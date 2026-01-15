---
id: hytale-pvp-management
title: "Hytale: Zarządzanie PvP"
description: "Zarządzaj i konfiguruj walkę gracz kontra gracz (PvP) na swoim serwerze Hytale → Dowiedz się więcej już teraz"
sidebar_label: Zarządzanie PvP
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Zarządzanie PvP na serwerze Hytale kontroluje, czy gracze mogą się nawzajem ranić lub walczyć ze sobą w danym świecie. Poprzez dostosowanie ustawień PvP, właściciele serwerów mogą określić, czy walka między graczami jest w pełni włączona, całkowicie wyłączona lub ograniczona do konkretnych sytuacji.

<InlineVoucher />

## Konfiguracja

Zachowanie PvP definiuje się dla każdego świata osobno i konfiguruje w pliku konfiguracyjnym serwera:

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

To ustawienie decyduje, jak serwer obsługuje obrażenia między graczami i czy PvP jest dozwolone w aktywnym świecie. Zmiany w ustawieniach PvP mają zastosowanie globalne dla danego świata i wymagają restartu serwera, aby zaczęły działać.

Poniższy przykład pokazuje konfigurację, w której PvP jest wyłączone dla świata:

```
"WorldConfig": {
  "PvP": false
}
```

Po zastosowaniu tej konfiguracji, gracze nie mogą już zadawać sobie obrażeń w tym świecie, tworząc tym samym środowisko skupione na PvE.

Aby włączyć PvP i umożliwić walkę między graczami, konfigurację można ustawić tak:

```
"WorldConfig": {
  "PvP": true
}
```

## Podsumowanie

Po skonfigurowaniu masz jasny obraz, jak PvP jest zarządzane i możesz łatwo dostosować ustawienia, by wspierać rozgrywkę kooperacyjną, rywalizacyjną lub ich mieszankę. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />