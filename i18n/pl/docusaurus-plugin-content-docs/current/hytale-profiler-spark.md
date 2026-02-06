---
id: hytale-profiler-spark
title: "Hytale: Spark Profiler – Zidentyfikuj Wąskie Gardła Wydajności"
description: "Użyj moda Spark, aby diagnozować problemy z wydajnością i znaleźć przyczyny lagów na swoim serwerze Hytale → Sprawdź teraz"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Wprowadzenie

Problemy z wydajnością, takie jak niski TPS (ticks na sekundę), nagłe skoki lagów czy przycinanie, mogą mocno zepsuć rozgrywkę na serwerze Hytale. Ręczne znalezienie przyczyny tych problemów bez szczegółowej diagnostyki jest trudne.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

Mod **Spark** to potężne narzędzie dla właścicieli serwerów, które pozwala analizować wydajność serwera. Po instalacji Spark zbiera dane o użyciu CPU, czasie ticków, metrykach zdrowia serwera i wielu innych, generując szczegółowe raporty, które pomagają dokładnie wskazać, gdzie pojawiają się problemy z wydajnością. To must-have do rozwiązywania problemów i optymalizacji, zwłaszcza na większych lub mocno obciążonych światach Hytale.

<InlineVoucher />

## Co robi Spark

Spark oferuje kilka funkcji profilowania:

- **Profilowanie wydajności** – rejestruje aktywność serwera i wykrywa wolne ticki lub wysokie użycie CPU  
- **Metryki zdrowia serwera** – pokazuje czas trwania ticków, TPS, użycie CPU i pamięci  
- **Interaktywne raporty** – generuje raporty webowe, które można przeglądać w przeglądarce  
- **Lekki i prosty w użyciu** – zaprojektowany tak, by minimalnie obciążać serwer podczas zbierania danych  

## Instalacja Spark

Spark jest dostępny na CurseForge i instalowany jako mod. Możesz zainstalować mody przez nasz Mods Installer lub przez FTP. Więcej info znajdziesz w naszym [poradniku Instalacja modów](http://localhost:3000/guides/docs/hytale-mods). Po instalacji zrestartuj serwer Hytale.

<Button label="Pobierz Spark" link="https://www.curseforge.com/hytale/mods/spark" block />

## Uruchamianie profilera

Po zainstalowaniu Sparka i uruchomieniu serwera, otwórz zakładkę **Live Console** w panelu głównym serwera lub użyj czatu w grze, jeśli masz odpowiednie uprawnienia. Aby zacząć zbierać dane o wydajności, uruchom profiler komendą:

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

Po uruchomieniu Spark zaczyna rejestrować szczegółową aktywność serwera, taką jak czas trwania ticków, użycie CPU i wykonywanie wątków. Profiler powinien działać w czasie, gdy występuje problem, który chcesz przeanalizować, np. podczas największego ruchu graczy lub skoków lagów. Zazwyczaj 30-60 sekund działania wystarcza, by zebrać wartościowe dane.

Podczas działania profilera możesz na bieżąco oglądać wyniki, wpisując:

```
/spark profiler open
```

Ta komenda wygeneruje link w konsoli lub czacie. Po otwarciu go w przeglądarce zobaczysz live podgląd danych profilowania, w tym wykresy ticków i rozkład obciążenia.

Gdy uznasz, że masz wystarczająco danych, zatrzymaj profiler komendą:

```
/spark profiler stop
```

Po zatrzymaniu Spark wygeneruje link do końcowego raportu. Raport zawiera pełny zestaw danych z sesji profilowania i można go otworzyć w przeglądarce lub udostępnić do dalszej analizy.

Jeśli chcesz anulować aktualną sesję i zacząć od nowa, użyj:

```
/spark profiler cancel
/spark profiler start
```

To wyczyści dotychczasowe dane i od razu rozpocznie nową sesję profilowania.

## Analiza wyników profilera

Raport Spark profila daje szczegółowy podgląd, jak wykorzystywane są zasoby serwera. Jednym z najważniejszych elementów jest oś czasu ticków, pokazująca, ile trwa każdy tick. Długie ticki to często znak dużego obciążenia, które bezpośrednio wpływa na TPS i płynność gry.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

Profiler wskazuje też **hotspoty** – funkcje lub systemy, które zużywają najwięcej zasobów. Dzięki temu łatwiej ustalić, czy problemy z wydajnością wynikają z konkretnych modów, zachowań graczy, mechanik świata czy konfiguracji serwera.

Raporty Spark są łatwe do udostępniania. Szukając pomocy u supportu lub innych adminów, podanie linku do profilera pozwala im szybko przejrzeć dane i dać konkretne wskazówki.

## Podsumowanie

Mod Spark profiler do Hytale to super narzędzie do diagnozowania problemów z wydajnością i znalezienia źródła lagów na serwerze. Masz pytania lub potrzebujesz pomocy? Nasz support jest dostępny codziennie i chętnie Ci pomoże! 🙂

<InlineVoucher />