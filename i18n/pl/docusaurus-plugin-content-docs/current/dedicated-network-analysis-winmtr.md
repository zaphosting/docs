---
id: dedicated-network-analysis-winmtr
title: "Serwer dedykowany: Identyfikacja problemów sieciowych za pomocą WinMTR/MTR"
description: "Dowiedz się, jak diagnozować problemy sieciowe, analizując trasy wychodzące i powrotne, aby skutecznie wykrywać opóźnienia i utratę pakietów → Sprawdź teraz"
sidebar_label: Problemy sieciowe
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Problemy sieciowe mogą być uciążliwe i oczywiście nie powinny być częścią codzienności. Jednak gdy się pojawią, ważne jest szybkie i skuteczne zidentyfikowanie przyczyny, aby rozwiązać problem. Szczegółowe informacje o problemach sieciowych można efektywnie analizować za pomocą aplikacji **WinMTR (Windows)** lub **MTR (Linux/Mac OS)**.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR to narzędzie diagnostyczne sieci, które łączy funkcje Ping i Traceroute. Pozwala na szczegółową analizę zarówno **trasy wychodzącej (Klient → Serwer)**, jak i **trasy powrotnej (Serwer → Klient)**, śledząc ścieżkę pakietów danych w obu kierunkach. Przy tym zbiera ważne informacje, takie jak opóźnienia i utrata pakietów, które są kluczowe do precyzyjnej diagnozy i rozwiązania problemów sieciowych.

**Trasa wychodząca (Klient → Serwer)**: Raport dla **trasy wychodzącej** jest przydatny, gdy pojawiają się problemy takie jak zerwania połączenia, wolne łącze lub trudności z nawiązaniem połączenia. Ta analiza pomaga zidentyfikować potencjalne problemy na drodze od klienta do serwera, takie jak przeciążenie sieci, utrata pakietów czy błędne trasowanie.

**Trasa powrotna (Serwer → Klient)**: Raport dla **trasy powrotnej** ma sens dopiero po potwierdzeniu stabilnego i działającego połączenia na trasie wychodzącej. Oznacza to, że raport trasy powrotnej jest szczególnie istotny, gdy trasa wychodząca nie wykazuje problemów, ale nadal występują takie kłopoty jak wolne odpowiedzi serwera, opóźnione ładowanie czy niekompletne przesyłanie danych.

Podsumowując, jeśli pojawią się zauważalne problemy sieciowe, najpierw należy przeanalizować **trasę wychodzącą (Klient → Serwer)**. Jeśli raport trasy wychodzącej nie wykazuje anomalii, a problemy nadal występują, konieczne jest sprawdzenie **trasy powrotnej (Serwer → Klient)**, aby wykryć ewentualne problemy asymetryczne. Problemy asymetryczne pojawiają się, gdy pakiety danych są przesyłane bez problemów w jednym kierunku, a w przeciwnym występują opóźnienia lub utrata pakietów.

## Instalacja

Skoro już wiadomo, kiedy raporty dla tras wychodzących i powrotnych są przydatne, przejdźmy do instalacji na poziomie klienta i serwera.

### Klient

Dla trasy wychodzącej aplikacja musi być zainstalowana na kliencie (**Twoim komputerze**). Poniższe kroki wyjaśnią, jak zainstalować aplikację dla Twojego systemu operacyjnego.

<Tabs>
<TabItem value="windows" label="Windows" default>

Na komputerze z systemem Windows analizę sieci przeprowadza się za pomocą aplikacji WinMTR. Aby zainstalować WinMTR na swoim komputerze, najpierw pobierz aplikację ze strony ZAP-Hosting. Po pobraniu rozpakuj plik. W efekcie otrzymasz plik wykonywalny `WinMTR.exe`.

| Aplikacja | Pobierz                                   |
| --------- | ----------------------------------------- |
| WinMTR    | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>

<TabItem value="linux" label="Linux">

Na komputerze z systemem Linux analizę sieci przeprowadza się za pomocą aplikacji MTR. Aby zainstalować MTR na swoim systemie, otwórz terminal i wykonaj odpowiednie polecenie instalacyjne dla swojego systemu operacyjnego:

**Debian**

```
apt install mtr -y
```

**Ubuntu**

```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

</TabItem>

<TabItem value="macos" label="MacOS">

Na komputerze z systemem Mac OS analizę sieci przeprowadza się za pomocą aplikacji MTR. Jednak MTR nie jest preinstalowany na urządzeniach Mac OS i nie jest dostępny w Apple Store. Aby zainstalować MTR, musisz najpierw zainstalować Homebrew jako system zarządzania pakietami na swoim komputerze.

**Instalacja Homebrew**

Otwórz terminal na swoim komputerze i uruchom poniższe polecenie, aby zainstalować Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Instalacja MTR**

Postępuj zgodnie z wyświetlanymi krokami, aby zakończyć instalację. Po pomyślnym skonfigurowaniu Homebrew możesz użyć go do instalacji MTR, wpisując w terminalu:

```
brew install mtr
```

</TabItem>
</Tabs>


### Serwer
Dla trasy powrotnej aplikacja musi być zainstalowana na serwerze. Poniższe kroki wyjaśnią, jak zainstalować aplikację dla systemu operacyjnego Twojego serwera.

<Tabs>

<TabItem value="linux" label="Serwer działający na Linux" default>

Połącz się z serwerem przez **[SSH](vserver-linux-ssh.md)**. Aby zainstalować MTR na swoim systemie, wykonaj odpowiednie polecenie instalacyjne dla systemu operacyjnego serwera:

**Debian**
```
apt install mtr -y
```

**Ubuntu**
```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

</TabItem>

<TabItem value="windows" label="Serwer działający na Windows">

Połącz się z serwerem przez **[Zdalny pulpit (Remote Desktop Connection)](vserver-windows-userdp.md)**. Aby zainstalować WinMTR na serwerze, najpierw pobierz aplikację ze strony ZAP-Hosting. Po pobraniu rozpakuj plik. W efekcie otrzymasz plik wykonywalny `WinMTR.exe`.

| Aplikacja | Pobierz                                   |
| --------- | ----------------------------------------- |
| WinMTR    | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>
</Tabs>

## Tworzenie raportu

Poniżej pokażemy, jak stworzyć raport za pomocą aplikacji WinMTR/MTR. Zrobimy to zarówno dla **trasy wychodzącej (Klient → Serwer)**, jak i **trasy powrotnej (Serwer → Klient)**.

:::warning Twórz raport podczas aktywnych problemów 
Raport powinien być generowany, gdy problem jest aktywny i zauważalny. Tylko wtedy raport dostarczy przydatnych informacji, które pomogą w diagnozie i rozwiązaniu problemu.
:::

### Trasa wychodząca (Klient → Serwer)

Aby przeanalizować trasę z Twojego komputera do serwera, otwórz aplikację WinMTR/MTR na swoim komputerze i wykonaj poniższe kroki.

<Tabs>
<TabItem value="windows" label="Windows" default>

Aplikację WinMTR uruchom przez dwukrotne kliknięcie pliku `WinMTR.exe`. W polu `Host` wpisz adres IP lub nazwę hosta serwera. Następnie rozpocznij raport. Pozwól aplikacji działać przez co najmniej **jedną minutę**, aby zebrać wystarczająco dużo danych. Gdy masz już dane, zatrzymaj analizę i zapisz wynik, klikając `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

Aplikację MTR uruchom na swoim komputerze, otwierając terminal i wpisując:

```
mtr <adres-ip-twojego-serwera>
```

Pozwól aplikacji działać przez co najmniej **jedną minutę**, aby zebrać wystarczająco dużo danych. Gdy masz już dane, zatrzymaj analizę i zapisz wynik.

</TabItem>

<TabItem value="macos" label="MacOS">

Aplikację MTR uruchom na swoim komputerze, otwierając terminal i wpisując:

```
mtr <adres-ip-twojego-serwera>
```

Pozwól aplikacji działać przez co najmniej **jedną minutę**, aby zebrać wystarczająco dużo danych. Gdy masz już dane, zatrzymaj analizę i zapisz wynik.

</TabItem>
</Tabs>

### Trasa powrotna (Serwer → Klient)

Aby przeanalizować trasę z serwera do Twojego komputera, połącz się z serwerem i wykonaj poniższe kroki.

<Tabs>
<TabItem value="linux" label="Serwer działający na Linux" default>

Aplikację MTR uruchom na serwerze, wykonując w terminalu SSH polecenie:
```
mtr <adres-ip-twojego-komputera>
```

Pozwól aplikacji działać przez co najmniej **jedną minutę**, aby zebrać wystarczająco dużo danych. Gdy masz już dane, zatrzymaj analizę i zapisz wynik.

:::info
Nie znasz swojego adresu IP lub nie wiesz, jak go znaleźć? Istnieje kilka sposobów, aby to sprawdzić. Najszybszy to skorzystanie z serwisu online, np. WhatIsMyIPAddress.
:::

</TabItem>

<TabItem value="windows" label="Serwer działający na Windows">

W polu `Host` wpisz adres IP swojego połączenia. Następnie rozpocznij raport. Pozwól aplikacji działać przez co najmniej **jedną minutę**, aby zebrać wystarczająco dużo danych. Gdy masz już dane, zatrzymaj analizę i zapisz wynik, klikając `Export TEXT`.

:::info
Nie znasz swojego adresu IP lub nie wiesz, jak go znaleźć? Istnieje kilka sposobów, aby to sprawdzić. Najszybszy to skorzystanie z serwisu online, np. **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Ocena raportu

Podczas oceny wyników warto zwrócić uwagę na kilka kluczowych punktów. Poniższa sekcja wyjaśni je dokładniej i wyjaśni ich znaczenie dla analizy. Uważne śledzenie tych aspektów jest kluczowe dla precyzyjnej diagnozy i skutecznego wykrycia potencjalnych przyczyn.

### Utrata pakietów

Jeśli w wynikach widzisz utratę pakietów, oznacza to potencjalne problemy sieciowe. Niewielka, chwilowa utrata pakietów na poziomie 1-2% może nie być problemem, ale wyższe wartości sugerują poważniejsze kłopoty. Utrata pakietów może powodować opóźnienia lub przerwy w połączeniach usług. Jeśli utrata jest równomiernie rozłożona na wszystkich przeskokach (hopach), problem może leżeć w Twojej sieci lokalnej lub po stronie serwera. Natomiast jeśli utrata występuje tylko na konkretnym przeskoku lub obszarze, problem prawdopodobnie dotyczy tego węzła lub połączenia do następnego. Ważne jest też, że niewielkie straty na pierwszych przeskokach, które należą do Twojej lokalnej sieci, nie muszą być krytyczne, ponieważ te urządzenia często niżej traktują zapytania ICMP (np. ping) i mogą je odrzucać.

### Opóźnienia (czasy ping)

Wartości opóźnień (`Avg`, `Best`, `Worst`) dają wgląd w szybkość i stabilność połączenia. Jeśli zauważysz, że opóźnienia są stale wysokie na konkretnym przeskoku, może to wskazywać na przeciążenie sieci lub wolny router. Nagły wzrost opóźnień między dwoma przeskokami wskazuje na możliwe wąskie gardło. Zwykle opóźnienia rosną stopniowo wzdłuż trasy do celu. Jednak warto uważać na nagłe, duże skoki, które często świadczą o problemie. Porównanie tras wychodzącej i powrotnej może też pomóc wykryć problemy asymetryczne, które oznaczają, że ruch w jednym kierunku napotyka trudności.

Dzięki uważnej analizie tych czynników możesz dokładnie określić, gdzie leży problem sieciowy — czy w Twojej sieci lokalnej, u dostawcy internetu, czy gdzieś na trasie do serwera.

### Przykłady diagnostyczne

Aby lepiej zrozumieć powyższe informacje, wyjaśnimy je na kilku przykładach diagnostycznych. Przygotowaliśmy kilka scenariuszy, które ilustrują różne sytuacje i możliwe przyczyny. Te przykłady pomogą Ci lepiej interpretować dane i skuteczniej diagnozować problemy sieciowe.

:::info
Poniższe przykłady diagnostyczne ilustrują różne scenariusze na podstawie fikcyjnych raportów WinMTR/MTR. Zawarte adresy IP, nazwy hostów i trasy są całkowicie fikcyjne i nie mają związku z rzeczywistymi sieciami czy hostami.
:::

<Tabs>
<TabItem value="mtrResultsExample1" label="Przykład 1" default>

**Przykład:** Utrata pakietów po stronie klienta

**Opis**

W tym przykładzie sytuacja opisuje utratę pakietów po stronie klienta, widoczną zarówno na trasie wychodzącej, jak i powrotnej.

**Trasa wychodząca (Klient → Serwer)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                     15.0%   20    1.1    3.4   1.0   10.2  2.8
2. 10.0.0.1                        10.0%   20   12.3   15.7  10.5   30.8  5.5
3. 172.16.0.1                       0.0%   20   25.1   26.0  24.8   27.2  0.6
4. 203.0.113.5                      0.0%   20   35.4   34.5  33.2   36.1  0.9
5. be1234.ccr42.isp.net             0.0%   20   50.6   49.8  49.1   51.5  0.8
6. be5678.ccr21.isp.net             0.0%   20   60.1   59.9  59.5   61.0  0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3  0.5
8. Destination-IP (Serwer)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
```

**Trasa powrotna (Serwer → Klient)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serwer)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2  0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7  0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0  0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0  0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3  0.7
7. 10.0.0.1                        10.0%   20   15.8   16.5  15.0   35.2  6.2
8. 192.168.1.1                     15.0%   20    2.0    4.0   1.2   12.0  3.8
```

**Ocena**

Ocena pokazuje, że utrata pakietów występuje po stronie klienta. Obie trasy pokazują straty na pierwszych przeskokach (Hop 1 i 2), co wskazuje na problem po stronie klienta, w sieci lokalnej lub routerze.

</TabItem>

<TabItem value="mtrResultsExample2" label="Przykład 2">

**Przykład:** Utrata pakietów po stronie serwera

**Opis**

W tym przykładzie sytuacja opisuje utratę pakietów po stronie serwera, widoczną zarówno na trasie wychodzącej, jak i powrotnej.

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
7. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
8. Destination-IP (Serwer)                15.0%   20   85.3   90.2  85.0  105.0  7.0
```

**Trasa powrotna (Serwer → Klient)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serwer)                15.0%   20   85.3   90.2  85.0  105.0  7.0
2. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
```

**Ocena**

Ocena wskazuje, że utrata pakietów występuje po stronie serwera. Obie trasy pokazują straty na ostatnich przeskokach (Hop 7 i 8), co wskazuje na problem po stronie serwera.

</TabItem>

<TabItem value="mtrResultsExample3" label="Przykład 3">

**Przykład:** Problemy z opóźnieniami po stronie klienta

**Opis**

W tym przykładzie sytuacja opisuje wysokie czasy opóźnień po stronie klienta, widoczne zarówno na trasie wychodzącej, jak i powrotnej.

**Trasa wychodząca (Klient → Serwer)**

```console {2-3} 
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
2. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
3. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
4. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
5. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
6. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Serwer)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Trasa powrotna (Serwer → Klient)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serwer)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
7. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
8. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
```

**Ocena**

Ocena pokazuje, że występują wysokie opóźnienia po stronie klienta. Obie trasy wykazują zwiększone opóźnienia na pierwszych przeskokach (Hop 1 i 2), co wskazuje na problem po stronie klienta.

</TabItem>

<TabItem value="mtrResultsExample4" label="Przykład 4">

**Przykład:** Problemy z opóźnieniami po stronie serwera

**Opis**

W tym przykładzie sytuacja opisuje wysokie czasy opóźnień po stronie serwera, widoczne zarówno na trasie wychodzącej, jak i powrotnej.

**Trasa wychodząca (Klient → Serwer)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
8. Destination-IP (Serwer)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
```

**Trasa powrotna (Serwer → Klient)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serwer)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
2. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Ocena**

Ocena pokazuje, że występują wysokie opóźnienia po stronie serwera. Obie trasy wykazują zwiększone opóźnienia na ostatnich przeskokach (Hop 7 i 8), co wskazuje na problem po stronie serwera.

</TabItem>

<TabItem value="mtrResultsExample5" label="Przykład 5">

**Przykład:** Problem z trasowaniem (trasowanie ISP)

**Opis**

W tym przykładzie sytuacja opisuje, że trasa od Klienta X do serwera działa bez problemów, podczas gdy trasa od Klienta Y do serwera ma problemy z trasowaniem, prowadzące do utraty pakietów. Wskazuje to na problem z trasowaniem u dostawcy internetu (ISP).

**Trasa wychodząca (Klient X → Serwer)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Serwer)                 0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Trasa wychodząca (Klient Y → Serwer)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net            25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net            10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Serwer)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Trasa powrotna (Serwer → Klient X)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serwer)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Trasa powrotna (Serwer → Klient Y)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serwer)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3

```

**Ocena**

Ocena pokazuje, że występuje problem z trasowaniem u ISP. Trasa od Klienta X do serwera jest stabilna, natomiast trasa od Klienta Y wykazuje poważne problemy, skutkujące utratą pakietów i wysokim opóźnieniem.

</TabItem>

<TabItem value="mtrResultsExample6" label="Przykład 6">

**Przykład:** Utrata pakietów tylko na trasie wychodzącej (Klient → Serwer)

**Opis**

W tym przykładzie utrata pakietów występuje tylko na trasie wychodzącej (od klienta do serwera), podczas gdy trasa powrotna (od serwera do klienta) nie wykazuje strat. Może to wskazywać na problem w segmencie sieci w kierunku serwera, spowodowany np. wadliwymi routerami, przeciążeniem lub słabym połączeniem na trasie.

**Trasa wychodząca (Klient → Serwer)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net            15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net            10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Serwer)                 0.0%   20   85.3   85.0  84.5   86.0   0.5

```

**Trasa powrotna (Serwer → Klient)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serwer)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Ocena**

Ocena pokazuje, że utrata pakietów występuje wyłącznie na trasie wychodzącej. Straty widoczne są na przeskokach 4, 5 i 6, co wskazuje na problem na drodze od klienta do serwera, np. przeciążenie lub wadliwe urządzenia sieciowe na fragmencie trasy. Na trasie powrotnej nie ma strat, co oznacza, że połączenie w przeciwnym kierunku jest stabilne.

</TabItem>

<TabItem value="mtrResultsExample7" label="Przykład 7">

**Przykład:** Utrata pakietów tylko na trasie powrotnej (Serwer → Klient)

**Opis**

W tym przykładzie utrata pakietów występuje tylko na trasie powrotnej (od serwera do klienta), podczas gdy trasa wychodząca (od klienta do serwera) nie wykazuje strat. Może to wskazywać na problem w segmencie sieci na trasie powrotnej.

**Trasa wychodząca (Klient → Serwer)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Serwer)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
```

**Trasa powrotna (Serwer → Klient)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serwer)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
4. be1234.ccr42.isp.net            10.0%   20   50.6   51.0  50.0   55.0   1.2
5. 203.0.113.5                     15.0%   20   35.7   36.5  34.5   40.0   1.8
6. 172.16.0.1                      10.0%   20   20.2   21.5  19.5   25.0   2.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Ocena**

Ocena pokazuje, że utrata pakietów występuje tylko na trasie powrotnej. Straty widoczne są na przeskokach 4, 5 i 6 trasy powrotnej, co wskazuje na problem na drodze od serwera do klienta.

</TabItem>

</Tabs>

## Zgłaszanie problemów

Chociaż ZAP-Hosting stale monitoruje sieć, ważne jest, aby w przypadku problemów sieciowych niezwłocznie skontaktować się z naszym zespołem wsparcia. Aby zapewnić precyzyjną diagnozę i szybką naprawę, prosimy o przesłanie wyników raportów WinMTR/MTR zarówno dla trasy wychodzącej, jak i powrotnej. Te informacje pomagają nam dokładnie zlokalizować potencjalne problemy i szybko je rozwiązać.