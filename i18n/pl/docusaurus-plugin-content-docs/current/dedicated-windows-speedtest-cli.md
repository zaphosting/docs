---
id: dedicated-windows-speedtest-cli
title: "Serwer dedykowany: Instalacja Speedtest CLI na Windows"
description: "Dowiedz się, jak efektywnie zarządzać kodem źródłowym i współpracować bezproblemowo ze Speedtest CLI dla nowoczesnego developmentu → Sprawdź teraz"
sidebar_label: Instalacja Speedtest CLI
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Speedtest CLI to rozproszony system kontroli wersji zaprojektowany do efektywnego zarządzania kodem źródłowym. Pozwala deweloperom śledzić zmiany, pracować jednocześnie na różnych gałęziach i współpracować nad projektami bez żadnych przeszkód. Dzięki swojej elastyczności i wydajności, Speedtest CLI stał się standardowym narzędziem kontroli wersji w nowoczesnym tworzeniu oprogramowania.

Myślisz o hostingu tego serwisu na własnym serwerze? Przeprowadzimy Cię przez każdy krok konfiguracji i ustawień oraz podpowiemy, na co zwrócić uwagę.





## Przygotowanie

Zanim zaczniesz instalować **Speedtest CLI**, musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji. Te przygotowania zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze najpierw wykonaj aktualizację systemu. Dzięki temu Twój system będzie miał najnowsze łatki i wersje oprogramowania przed dalszymi krokami.



## Instalacja

Gdy niezbędne przygotowania są już zrobione, możesz przejść do instalacji aplikacji Speedtest CLI. Pobierz Speedtest CLI dla Windows (x64) tutaj: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Następnie uruchom instalator pobranego pliku i postępuj zgodnie z instrukcjami na ekranie.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Konfiguracja

speedtest-cli nie korzysta z tradycyjnego pliku konfiguracyjnego, ale można go dostosować za pomocą opcji wiersza poleceń i zmiennych środowiskowych. Pozwala to na dopasowanie do spójnego i zautomatyzowanego użycia:

- `--server <ID>`: Wybierz konkretny serwer po jego ID, aby uzyskać bardziej spójne i porównywalne wyniki testów.  
- `--bytes`: Wyświetl prędkości w bajtach na sekundę zamiast w bitach.  
- `--simple`: Wyświetl tylko wartości ping, download i upload w kompaktowym formacie.  
- `--json` lub `--csv`: Przydatne do automatyzacji i logowania, ponieważ wyniki są zapisywane w formacie czytelnym dla maszyn.  
- Obsługa proxy: Skonfiguruj zmienne środowiskowe takie jak `http_proxy` lub `https_proxy`, aby uruchomić speedtest-cli za proxy.  

Jeśli często korzystasz z tych samych opcji, wygodnie jest stworzyć alias w powłoce lub mały skrypt wrapper. Dzięki temu szybko uruchomisz speedtest-cli z jednolitym wynikiem.



## Podsumowanie i dodatkowe materiały

Gratulacje! Udało Ci się zainstalować i skonfigurować Speedtest CLI na Twoim serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Oficjalna strona

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂