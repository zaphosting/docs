---
id: dedicated-linux-speedtest-cli
title: "Serwer dedykowany: Instalacja Speedtest-Cli na Linuxie"
description: "Dowiedz się, jak zainstalować i używać Speedtest-Cli do niezawodnego testowania sieci i automatyzacji z wieloma protokołami → Sprawdź teraz"
sidebar_label: Instalacja Speedtest-Cli
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Speedtest-Cli to darmowe narzędzie wiersza poleceń oraz biblioteka programistyczna (libSpeedtest-Cli) do transferu danych za pomocą URLi. Obsługuje szeroki wachlarz protokołów — w tym HTTP(S), FTP, SMTP, LDAP, MQTT i wiele innych — i jest często wykorzystywane do pobierania plików, testowania API oraz automatyzacji operacji sieciowych.

Myślisz o hostingu tego serwisu na własnym serwerze? Przeprowadzimy Cię krok po kroku przez instalację i konfigurację oraz podpowiemy, na co zwrócić uwagę.



## Przygotowanie

Zanim zaczniesz instalować **Speedtest-Cli**, musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji. Te kroki zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z najnowszymi poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj polecenie:

```
sudo apt update && sudo apt upgrade -y
```
Dzięki temu Twój system będzie miał najnowsze łatki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.



## Instalacja

Gdy przygotowania są już zrobione, możesz przejść do instalacji aplikacji Speedtest-Cli. Wykonaj polecenie:

```console
sudo apt install speedtest-cli
```



## Konfiguracja

speedtest-cli nie korzysta z tradycyjnego pliku konfiguracyjnego, ale można go dostosować za pomocą opcji wiersza poleceń i zmiennych środowiskowych. Dzięki temu łatwo dopasujesz go do powtarzalnego i zautomatyzowanego użytku:

- `--server <ID>`: Wybierz konkretny serwer po jego ID, aby uzyskać bardziej spójne i porównywalne wyniki testów.  
- `--bytes`: Wyświetl prędkości w bajtach na sekundę zamiast bitów.  
- `--simple`: Wyświetl tylko wartości ping, pobierania i wysyłania w kompaktowym formacie.  
- `--json` lub `--csv`: Przydatne do automatyzacji i logowania, bo wyniki są w formacie czytelnym dla maszyn.  
- Obsługa proxy: Skonfiguruj zmienne środowiskowe takie jak `http_proxy` lub `https_proxy`, aby uruchomić speedtest-cli za proxy.  

Jeśli często korzystasz z tych samych opcji, warto stworzyć alias w shellu lub mały skrypt wrapper. Dzięki temu szybko uruchomisz speedtest-cli z jednolitym outputem.



## Podsumowanie i dodatkowe materiały

Gratulacje! Udało Ci się zainstalować i skonfigurować Speedtest-Cli na Twoim serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc Ci jeszcze bardziej podczas konfiguracji serwera:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Oficjalna strona

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz pomocy lub wsparcia, śmiało kontaktuj się z naszym zespołem supportu, który jest do Twojej dyspozycji codziennie! 🙂