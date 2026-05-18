---
id: vserver-linux-speedtest-cli
title: "Jak zainstalować Speedtest CLI na serwerze Linux - Monitoruj wydajność sieci swojego serwera"
description: "Dowiedz się, jak skonfigurować i używać Speedtest-Cli do niezawodnego testowania sieci i automatyzacji → Sprawdź teraz"
sidebar_label: Instalacja Speedtest-Cli
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Speedtest-Cli to darmowe narzędzie wiersza poleceń oraz biblioteka programistyczna (libSpeedtest-Cli) do transferu danych za pomocą URLi. Obsługuje szeroki zakres protokołów — w tym HTTP(S), FTP, SMTP, LDAP, MQTT i wiele innych — i jest często wykorzystywane do pobierania plików, testowania API oraz automatyzacji operacji sieciowych.

Myślisz o hostingu tej usługi na własnym serwerze? Przeprowadzimy Cię krok po kroku przez cały proces instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />

## Przygotowanie

Zanim zaczniesz instalować **Speedtest-Cli**, musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji. Te przygotowania zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z najnowszymi poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj poniższe polecenie:

```
sudo apt update && sudo apt upgrade -y
```
Dzięki temu Twój system będzie miał najnowsze łatki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

## Instalacja

Gdy przygotowania są już gotowe, możesz przejść do instalacji aplikacji Speedtest-Cli. Wykonaj następujące polecenie:

```console
sudo apt install speedtest-cli
```

## Konfiguracja

speedtest-cli nie korzysta z tradycyjnego pliku konfiguracyjnego, ale można go dostosować za pomocą opcji wiersza poleceń oraz zmiennych środowiskowych. Dzięki temu łatwo dopasujesz go do powtarzalnego i zautomatyzowanego użytku:

- `--server <ID>`: Wybierz konkretny serwer po jego ID, aby uzyskać bardziej spójne i porównywalne wyniki testów.  
- `--bytes`: Wyświetl prędkości w bajtach na sekundę zamiast w bitach.  
- `--simple`: Wyświetl tylko wartości ping, pobierania i wysyłania w kompaktowym formacie.  
- `--json` lub `--csv`: Przydatne do automatyzacji i logowania, bo wyniki są zapisywane w formacie czytelnym dla maszyn.  
- Obsługa proxy: Skonfiguruj zmienne środowiskowe takie jak `http_proxy` lub `https_proxy`, aby uruchomić speedtest-cli za proxy.

Jeśli często korzystasz z tych samych opcji, warto stworzyć alias w shellu lub mały skrypt wrapper. Dzięki temu szybko uruchomisz speedtest-cli z jednolitym wynikiem.

## Podsumowanie i dodatkowe materiały

Gratulacje! Właśnie zainstalowałeś i skonfigurowałeś Speedtest-Cli na swoim VPS/serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą Ci pomóc i wesprzeć podczas konfiguracji serwera:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Oficjalna strona

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym supportem — jesteśmy dostępni codziennie, by Ci pomóc! 🙂

<InlineVoucher />