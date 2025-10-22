---
id: source-metamod-plugins
title: Instalacja pluginów
description: "Dowiedz się, jak efektywnie zarządzać i rozwiązywać problemy z pluginami Sourcemod, aby poprawić wydajność serwera → Sprawdź teraz"
sidebar_label: Pluginy
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Instalacja pluginów

Poniżej znajdziesz instrukcję, jak zainstalować pluginy. Aby móc korzystać z pluginów, potrzebujesz Sourcemod / Metamod. Instrukcje instalacji znajdziesz tutaj: [Instalacja](source-metamod-installation.md)



Aby zainstalować pluginy, musisz przesłać je przez FTP. Pliki pluginu muszą zostać przesłane do katalogu **Plugins** w ścieżce **../addons/sourcemod/**. W zależności od złożoności pluginu, mogą być dostępne już pliki konfiguracyjne i tłumaczenia. Jeśli tak jest, to musisz je przesłać do folderów **configs** i **translations**.



## Wyłączanie / usuwanie pluginów

W katalogu **Plugins** znajdziesz podfolder o nazwie **disabled**. Tam możesz umieścić pluginy, które chcesz tymczasowo wyłączyć. Wystarczy przenieść odpowiedni plik **.smx**.



Jeśli chcesz wyłączyć plugin na stałe, musisz usunąć odpowiednie pliki pluginu. Plugin zostanie wtedy dezaktywowany po zmianie mapy lub restarcie serwera.



## Najczęstsze problemy


**Dlaczego mój zainstalowany plugin nie działa?**

Możliwe rozwiązania:

- Upewnij się, że podczas instalacji pluginu spełnione są wszystkie wymagania. Niektóre pluginy potrzebują bazy danych, aby działać poprawnie. W takim przypadku musisz dokonać dodatkowych ustawień w pliku **database.cfg** znajdującym się w katalogu config.
- Silnik Source jest regularnie aktualizowany. Dlatego plugin, który został wydany dawno temu i nie jest już utrzymywany, może być niekompatybilny. W takim wypadku jedyną opcją jest odwiedzenie forum Alliedmodders, aby znaleźć nieoficjalną poprawioną wersję lub ogólnie użyć alternatywnego pluginu.
- Jeśli powyższe opcje nie pomogą, warto zajrzeć do konsoli na żywo lub plików logów. Zazwyczaj tam znajdziesz przyczynę problemu.

<InlineVoucher />