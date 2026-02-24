---
id: vserver-windows-speedtest-cli
title: "Instalacja Speedtest CLI na serwerze Windows – Monitoruj wydajność sieci"
description: "Dowiedz się, jak efektywnie zarządzać kodem źródłowym i współpracować dzięki Speedtest CLI, zapewniając płynną kontrolę wersji w nowoczesnym developmentcie → Sprawdź teraz"
sidebar_label: Instalacja Speedtest CLI
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Speedtest CLI to rozproszony system kontroli wersji zaprojektowany do efektywnego zarządzania kodem źródłowym. Pozwala developerom śledzić zmiany, pracować jednocześnie na różnych gałęziach i bezproblemowo współpracować przy projektach. Dzięki swojej elastyczności i wydajności, Speedtest CLI stał się standardowym narzędziem do kontroli wersji w nowoczesnym tworzeniu oprogramowania.

Myślisz o hostingu tego serwisu na własnym serwerze? Przeprowadzimy Cię krok po kroku przez proces instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />

## Przygotowanie

Zanim zaczniesz instalować **Speedtest CLI**, musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji. Takie przygotowania zapewniają stabilne środowisko i pomagają uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Dzięki temu Twój serwer będzie miał najświeższe łatki i wersje oprogramowania przed dalszymi krokami.

## Instalacja

Gdy przygotowania są już gotowe, możesz przejść do instalacji aplikacji Speedtest CLI. Pobierz Speedtest CLI dla Windows (x64) tutaj: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Następnie uruchom instalator pobranego pliku i postępuj zgodnie z instrukcjami.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)

## Konfiguracja

speedtest-cli nie korzysta z tradycyjnego pliku konfiguracyjnego, ale można go dostosować za pomocą opcji wiersza poleceń i zmiennych środowiskowych. Dzięki temu możesz go łatwo dopasować do automatycznego i spójnego użycia:

- `--server <ID>`: Wybierz konkretny serwer po jego ID, aby uzyskać bardziej spójne i porównywalne wyniki testów.  
- `--bytes`: Wyświetl prędkości w bajtach na sekundę zamiast w bitach.  
- `--simple`: Wyświetl tylko wartości ping, download i upload w kompaktowym formacie.  
- `--json` lub `--csv`: Przydatne do automatyzacji i logowania, bo wyniki są zapisywane w formacie czytelnym dla maszyn.  
- Obsługa proxy: Skonfiguruj zmienne środowiskowe takie jak `http_proxy` lub `https_proxy`, aby uruchomić speedtest-cli za proxy.  

Jeśli często korzystasz z tych samych opcji, warto stworzyć alias w powłoce lub mały skrypt wrapper. Dzięki temu uruchomisz speedtest-cli szybko i zawsze z tymi samymi ustawieniami.

## Podsumowanie i dodatkowe materiały

Gratulacje! Udało Ci się zainstalować i skonfigurować Speedtest CLI na Twoim vServerze. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc Ci jeszcze bardziej podczas konfiguracji serwera:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) – Oficjalna strona

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz pomocy lub wsparcia, śmiało kontaktuj się z naszym zespołem supportu, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />