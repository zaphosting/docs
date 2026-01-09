---
id: openmp-rcon
title: "Open.mp: Serwer z użyciem RCON"
description: "Dowiedz się, jak zdalnie zarządzać serwerami gier za pomocą RCON dla efektywnej kontroli i bezpieczeństwa → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Co to jest RCON?

RCON to interfejs w różnych programach, takich jak serwery gier, który umożliwia zdalną konserwację i administrację. Ten interfejs pozwala zarządzać serwerami, które są już uruchomione i dostępne. Do interfejsu można uzyskać dostęp za pomocą specjalnego programu do zdalnej administracji i w ten sposób zarządzać serwerem.

<InlineVoucher />

## Dostęp do pliku konfiguracyjnego

Aby korzystać z RCON, musisz najpierw uzyskać dostęp do konfiguracji serwera i włączyć tę funkcję. Plik konfiguracyjny możesz edytować albo przez webinterface serwera, albo bezpośrednio przez FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Przez plik konfiguracyjny w WI">

#### Przez plik konfiguracyjny w Webinterface

Polecamy tę metodę, bo jest najprostsza.

:::note
Serwer musi być zatrzymany, zanim będzie można edytować konfigurację. Edycja pliku i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Po prostu przejdź do sekcji **Configs** w webinterface swojego serwera gier i kliknij niebieski przycisk edycji pliku, jak na obrazku poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Otworzy się edytor tekstu, w którym możesz bezpośrednio edytować plik. W pliku wyszukaj sekcję `rcon`. Tam ustaw parametr `enable` na `true`, np. `"enable":true`. Polecamy użyć `CTRL+F`, aby szybko znaleźć tę sekcję.

W tej samej sekcji ustaw też hasło do dostępu do interfejsu RCON, zmieniając parametr `password`. To zabezpieczy dostęp i powinno pozostać prywatne.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Przez FTP">

#### Przez FTP

:::note
Serwer musi być zatrzymany, zanim będzie można edytować konfigurację. Edycja pliku i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Inną metodą edycji pliku konfiguracyjnego jest FTP. Jeśli nie znasz FTP, polecamy zerknąć na [Poradnik Dostęp przez FTP](gameserver-ftpaccess.md). Ta metoda jest jednak wolniejsza, a jeśli chcesz szybko edytować zawartość pliku, lepiej użyć sekcji **Configs** w webinterface serwera, jak opisano wyżej.

Po połączeniu się z serwerem przez FTP, przejdź do katalogu:
```
..g[zap_id]/gta-openmp/
```

Znajdź tam plik `config.json` i otwórz go. To plik konfiguracyjny serwera, który powinieneś edytować.

W pliku znajdź sekcję `rcon`. Ustaw parametr `enable` na `true` i ustaw hasło do interfejsu RCON w parametrze `password`.

</TabItem>
</Tabs>

:::info
Pamiętaj, aby po zmianach zrestartować serwer.
:::

## Korzystanie z RCON

Teraz, gdy włączyłeś RCON w konfiguracji serwera, możesz uzyskać dostęp do interfejsu RCON Open.mp przez port zdefiniowany w pliku.

Do połączenia potrzebujesz programu RCON. Polecamy [RCON Console](https://sourceforge.net/projects/rconconsole/), bo jest open-source.

W wybranym programie RCON wpisz adres IP i port swojego serwera. Upewnij się, że serwer gier jest online i działa.

Jeśli połączenie się powiedzie, będziesz mógł wysyłać komendy do swojego serwera Palworld przez wybrany program RCON Console.

:::tip
Sprawdź nasz [Poradnik Komendy Serwera](openmp-server-commands.md), aby zobaczyć wszystkie dostępne komendy, które możesz wykonać przez RCON.
:::

Gratulacje, udało Ci się włączyć RCON na swoim serwerze Palworld.

<InlineVoucher />