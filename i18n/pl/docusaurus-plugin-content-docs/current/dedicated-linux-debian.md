---
id: dedicated-linux-debian
title: "Serwer dedykowany: Instalacja Debiana"
description: "Dowiedz się, jak zainstalować i skonfigurować system Debian na swoim serwerze dedykowanym, aby uzyskać optymalną wydajność i niezawodność → Sprawdź teraz"
sidebar_label: Instalacja Debiana
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Poniżej znajdziesz krok po kroku, jak zainstalować i skonfigurować system operacyjny Debian na swoim serwerze dedykowanym. Postępuj uważnie według instrukcji, aby poprawnie zainstalować system i wykorzystać go w pełni.

:::info

Struktura poradnika opiera się na systemie Debian 10. Instalacje z wcześniejszych lub nowszych wersji mogą się nieco różnić pod względem procesu.

:::



## Przygotowanie

Do instalacji i konfiguracji systemu operacyjnego najpierw ważne jest zamontowanie odpowiedniego obrazu ISO systemu. Istnieje kilka sposobów na jego zamontowanie:

1. Montowanie przez konfigurację początkową
2. Montowanie przez iLO (Virtual Media)
3. Montowanie przez iLO (Remote Console)

Jeśli nie znasz jeszcze montowania pliku ISO, najlepiej zajrzyj do naszego [Poradnika konfiguracji początkowej](dedicated-setup.md) lub [Własne ISO](dedicated-iso.md).



## Instalacja

Gdy obraz ISO zostanie poprawnie załadowany, serwer przejdzie do procesu instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

W tym przykładzie przejdziemy przez instalację za pomocą opcji „klasycznej” instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Wybierz język, w którym będzie wyświetlany kreator instalacji. Pamiętaj, że ten język wpłynie później na zainstalowany system.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Nasza lokalizacja nie znajduje się na pierwszej stronie wyboru, więc przechodzimy dalej, klikając „Inne”.

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

W naszym przykładzie wybieramy opcję „Europa”.

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

W zależności od strefy czasowej wybieramy w tym przykładzie strefę czasową Niemiec.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

Wybieramy United States jako locale.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

W naszym przypadku wybieramy niemiecką klawiaturę, czyli układ QWERTZ. Jeśli jesteś z Ameryki, domyślny układ to QWERTY.

:::info
Twój serwer przygotowuje teraz komponenty niezbędne do instalacji, co może potrwać kilka minut.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Serwer automatycznie konfiguruje interfejs sieciowy za pomocą DHCP. Wybierz `eno1` — to domyślny adapter sieciowy Twojego serwera dedykowanego ZAP. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

Nazwa hosta może zostać zmieniona, jeśli chcesz, ale nie jest to konieczne.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

Nazwa domeny również nie musi być zmieniana.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Tutaj ustawiasz hasło dla konta „root”. Zapisz wybrane hasło.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Aby potwierdzić hasło, wpisz je ponownie.

:::info
Kreator instalacji poprosi Cię o utworzenie drugiego konta użytkownika.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Wpisz teraz imię właściciela zwykłego konta użytkownika. Możesz wpisać dowolną nazwę.

:::info
Oczywiście możesz na końcu korzystać z konta „root”.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Wpisz nazwę użytkownika konta. Wybierz też hasło i potwierdź je. Serwer przygotuje kolejne kroki instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Masz teraz możliwość utworzenia partycji lub użycia całego dysku SSD jako jednej partycji. Jeśli nie chcesz nic zmieniać, wybierz „Guided - Use entire disk”.

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Wybierz dysk SSD zainstalowany w Twoim serwerze. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

Generalnie dobrze jest, gdy cała struktura jest na jednej partycji. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Potwierdzamy konfigurację klikając „Finish partitioning and write changes to disk”.

:::info
Jeśli na dysku SSD są stare partycje, potwierdzamy nadpisanie klikając „Yes”.
:::

Serwer wykona teraz partycjonowanie i przygotuje instalację systemu.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Jeśli chcesz dołączyć inne nośniki instalacyjne, np. dla konkretnych pakietów, możesz to zrobić teraz. Zazwyczaj jednak wszystkie pakiety można wygodnie pobrać później przez menedżera pakietów (apt).

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Nasze serwery dedykowane znajdują się w Niemczech, więc zalecamy wybrać niemieckie mirror, aby uzyskać najlepszą prędkość pobierania.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Zalecamy korzystanie z domyślnego repozytorium Debiana.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Jeśli chcesz używać proxy HTTP, możesz wpisać dane (nie jest to wymagane).

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

System chce zbierać anonimowe statystyki, możesz to odrzucić lub potwierdzić.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Wybierz teraz pakiety, które chcesz zainstalować:

* Środowisko graficzne Debiana  
  Utworzy GUI na Twoim serwerze, ale w tym przykładzie korzystamy tylko z powłoki.

* Serwer SSH  
  Potrzebny np. do połączenia przez PuTTY.

* Standardowe narzędzia systemowe  
  Zapewnia podstawowe pakiety.

Wybór pakietów odbywa się za pomocą `TAB` i `strzałek`. Pakiety zaznacza się lub odznacza spacją. Gdy jesteś zadowolony z wyboru, naciśnij `TAB` do „Continue” i zatwierdź Enterem.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Potwierdź, że ten system operacyjny jest jedynym na serwerze, wybierając `Yes`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Jako miejsce przechowywania wybierz domyślną lokalizację na dysku SSD.

:::info
🎉 Instalacja systemu Debian została zakończona.
:::

Otwórz „Virtual Media” w iLO i kliknij „Eject Media”, aby odmontować plik ISO z systemu.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

Po pomyślnym odmontowaniu wybierz Continue, serwer wykona restart.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Konfiguracja

### Logowanie SSH

Po restarcie serwera i udanej instalacji pojawi się monit o logowanie.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Oczywiście chcesz zarządzać serwerem przez SSH, np. PuTTY, więc musimy jeszcze włączyć logowanie:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Otwórz plik konfiguracyjny SSH za pomocą nano: `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Znajdź linię `#PermitRootLogin no` i zmień ją na `PermitRootLogin yes`.

Naciśnij `CTRL + X` i potwierdź zmiany klawiszem `Y`.

Następnie zrestartuj usługę SSH poleceniem `service ssh restart`.

Logowanie SSH jest teraz aktywne i możesz połączyć się np. przez PuTTY.  
Wpisz adres IP swojego serwera, który widzisz w panelu głównym ZAP, i użyj wcześniej ustawionych danych logowania.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Masz pytania lub problemy? Nasze wsparcie chętnie Ci pomoże!
:::





## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś system Debian na swoim serwerze dedykowanym. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂