---
id: dst-create-cave
title: "Don't Starve Together: Tworzenie jaskiń na serwerach"
description: "Dowiedz się, jak skonfigurować serwery master i slave dla jaskiń w Don't Starve Together, aby ulepszyć rozgrywkę → Sprawdź teraz"
sidebar_label: Tworzenie jaskiń
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Przygotowanie do jaskiń

Aby korzystać z jaskiń w Don't Starve Together, potrzebne są dwa serwery zamówione u nas. Jeden serwer to "master", który obsługuje świat górny, a drugi to "slave", który służy wyłącznie do jaskiń. Który serwer będzie "masterem", a który "slave" decyduje konfiguracja plików server.ini i cluster.ini.

Obie konfiguracje znajdziesz w panelu pod zakładką "**Konfiguracje**" i możesz je tam edytować.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Edytowana jest tylko sekcja "**[SHARD]**" w obu plikach .ini

## Master

Master to serwer świata górnego, ten serwer musi być ustawiony jako master w konfiguracjach.

### server.ini

:::info
**WAŻNE** "**MASTERIP**" oznacza adres IP serwera master, jeśli ten IP to 123.123.123.123, to w pliku musi być wpisane "bind_ip = 123.123.123.123".

"**MASTERIP**" nie jest wartością statyczną, którą wpisujesz na stałe w server.ini przy "bind_ip = ".
:::

Domyślnie w sekcji "**[SHARD]**" w server.ini jest tylko "is_master = true", teraz dodajemy tam następujące linijki:
```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

Domyślnie w sekcji "**[SHARD]**" w cluster.ini jest tylko "is_master = true", teraz dodajemy tam:

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

Slave to serwer jaskiń, gdzie w konfiguracjach muszą znaleźć się dane z serwera master.

### server.ini

:::info
**WAŻNE** "**SLAVEIP**" oznacza adres IP serwera slave, jeśli ten IP to 123.123.123.123, to w pliku musi być wpisane "bind_ip = 123.123.123.123".

"**SLAVEIP**" nie jest wartością statyczną, którą wpisujesz na stałe w server.ini przy "bind_ip = ".

"**MASTERIP**" nie jest wartością statyczną, którą wpisujesz na stałe w server.ini przy "master_ip = ".
:::

Domyślnie w sekcji "**[SHARD]**" w server.ini jest tylko "is_master = true", teraz dodajemy tam:

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

Domyślnie w sekcji "**[SHARD]**" w cluster.ini jest tylko "is_master = true", teraz dodajemy tam:

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Generowanie nowego świata

Jeśli wszystkie konfiguracje są poprawnie ustawione, na serwerze slave trzeba wygenerować nowy świat. Potrzebny jest nowy plik, aby jaskinie zostały poprawnie utworzone.

Skorzystaj z [dostępu przez FTP](gameserver-ftpaccess.md), aby przejść do serwera slave w katalogu: */starve/Save/Cluster_1/Master/*  
W tym katalogu utwórz nowy plik o nazwie "*worldgenoverride.lua*".  
Wypełnij go następującą zawartością:

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Następnie na serwerze przytrzymaj przycisk "**TAB**", aby wyświetlić status serwera. Kliknij na trzy kropki w lewym górnym rogu i wybierz "**Regenerate World**", aby raz wygenerować świat z nadpisanymi ustawieniami.

Po przeładowaniu wszystko jest gotowe i możesz grać z jaskiniami na swoim serwerze.

<InlineVoucher />