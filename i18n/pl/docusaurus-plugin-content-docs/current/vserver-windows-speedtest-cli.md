---
id: vserver-windows-speedtest-cli
title: "VPS: Instalacja Speedtest CLI na Windows"
description: "Dowiedz się, jak efektywnie zarządzać kodem źródłowym i współpracować dzięki Speedtest CLI dla płynnej kontroli wersji w nowoczesnym developmentcie → Sprawdź teraz"
sidebar_label: Instalacja Speedtest CLI
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Speedtest CLI to rozproszony system kontroli wersji zaprojektowany do efektywnego zarządzania kodem źródłowym. Pozwala deweloperom śledzić zmiany, pracować jednocześnie na różnych gałęziach i bezproblemowo współpracować przy projektach. Dzięki swojej elastyczności i wydajności, Speedtest CLI stał się standardowym narzędziem do kontroli wersji w nowoczesnym tworzeniu oprogramowania.

Myślisz o hostingu tej usługi na własnym VPS? Przeprowadzimy Cię przez każdy krok konfiguracji i ustawień, wraz ze wszystkim, co musisz wiedzieć.

<InlineVoucher />

## Przygotowanie

Przed instalacją **Speedtest CLI** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji. Te przygotowania zapewniają stabilne środowisko i pomagają uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Dzięki temu Twój system będzie miał najnowsze łatki i wersje oprogramowania przed dalszymi krokami.

## Instalacja

Gdy niezbędne przygotowania są już zrobione, możesz przejść do instalacji aplikacji Speedtest CLI. Pobierz Speedtest CLI dla Windows (x64) tutaj: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Następnie uruchom instalator pobranego pliku i postępuj zgodnie z instrukcjami.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)

## Konfiguracja

speedtest-cli nie korzysta z tradycyjnego pliku konfiguracyjnego, ale można go dostosować za pomocą opcji wiersza poleceń i zmiennych środowiskowych. Pozwala to na dopasowanie do spójnego i zautomatyzowanego użycia:

- `--server <ID>`: Wybierz konkretny serwer po jego ID dla bardziej spójnych i porównywalnych wyników testów.  
- `--bytes`: Wyświetl prędkości w bajtach na sekundę zamiast bitów.  
- `--simple`: Wyświetl tylko wartości ping, download i upload w kompaktowym formacie.  
- `--json` lub `--csv`: Przydatne do automatyzacji i logowania, ponieważ wyniki są zapisywane w formacie czytelnym dla maszyn.  
- Obsługa proxy: Skonfiguruj zmienne środowiskowe takie jak `http_proxy` lub `https_proxy`, aby uruchomić speedtest-cli za proxy.  

Dla powtarzalnego użycia z tymi samymi opcjami wygodne jest stworzenie aliasu w shellu lub małego skryptu wrappera. Dzięki temu możesz szybko uruchamiać speedtest-cli, zapewniając jednolity output.

## Podsumowanie i dodatkowe materiały

Gratulacje! Udało Ci się zainstalować i skonfigurować Speedtest CLI na swoim vServerze. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Oficjalna strona

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />