---
id: vserver-windows-troubleshooting-icmpv4-echo
title: "Rozwiązywanie problemów sieciowych: Brak ICMPv4 Echo – Serwer widoczny jako offline"
description: "Dowiedz się, jak zezwolić na żądania ICMPv4 Echo w zaporze Windows, aby Twój serwer był poprawnie wykrywany przez systemy monitorujące → Sprawdź teraz"
sidebar_label: Brak ICMPv4 Echo
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W niektórych sytuacjach serwer Windows może być widoczny jako **offline w panelu administracyjnym**, mimo że system działa normalnie. Ten problem zwykle wynika z ustawień zapory sieciowej, które blokują **żądania ICMPv4 Echo**. Te żądania są wykorzystywane przez znane polecenie `ping` i często używane przez systemy monitorujące do sprawdzania, czy serwer lub adres IP jest osiągalny.

Jeśli zapora Windows blokuje żądania ICMP Echo, system monitorujący nie otrzyma odpowiedzi od serwera. W efekcie panel administracyjny może pokazywać serwer lub przypisane adresy IP jako offline, mimo że serwer działa bez problemów.

![img](https://screensaver01.zap-hosting.com/index.php/s/ptD4W4MkAo85PAo/download)



## Przyczyna

Najczęstszą przyczyną tego problemu jest brak reguły w **Zapora Windows Defender**, która pozwala na przychodzące żądania ICMPv4 Echo. Bez tej reguły zapora domyślnie blokuje żądania ping.

Systemy monitorujące polegają na tych odpowiedziach, aby określić dostępność serwera, dlatego system może być widoczny jako offline, mimo że usługi na serwerze działają normalnie.



## Rozwiązanie

Aby rozwiązać ten problem, trzeba utworzyć regułę zapory, która zezwoli na żądania ICMPv4 Echo. Zacznij od połączenia się przez VNC. Kliknij na **Konsola VNC** w sekcji zarządzania VPS i zaloguj się swoimi standardowymi danymi.

![img](https://screensaver01.zap-hosting.com/index.php/s/mDQt7LLbLNSPC6a/download)

Po zalogowaniu otwórz interfejs **Zapora Windows Defender z zaawansowanymi zabezpieczeniami**. Naciśnij `Windows + R`, wpisz poniższe polecenie i zatwierdź Enterem:

```
wf.msc
```
Otworzy się okno zaawansowanej konfiguracji zapory. W lewym menu wybierz **Reguły przychodzące**, ponieważ serwer musi akceptować przychodzące żądania ICMP. Po prawej stronie kliknij **Nowa reguła**, aby utworzyć nową regułę zapory.

Podczas tworzenia reguły wybierz **Niestandardowa** jako typ reguły. W kolejnym kroku wybierz protokół **ICMPv4**. Po wybraniu protokołu otwórz ustawienia **Dostosuj** i włącz opcję **Żądanie Echo**, która pozwala serwerowi odpowiadać na żądania ping.

Kontynuuj kreatora i wybierz **Zezwalaj na połączenie** jako akcję dla tej reguły. W kroku wyboru profilu zazwyczaj możesz włączyć regułę dla wszystkich profili, aby działała niezależnie od tego, czy serwer jest w sieci publicznej, prywatnej czy domenowej.

Na koniec nadaj regule czytelną nazwę, np. `Zezwól na żądania ICMPv4 Echo`. Po zakończeniu kreatora nowa reguła od razu pozwoli na przychodzące żądania ICMP Echo.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Weryfikacja

Po utworzeniu reguły możesz sprawdzić, czy serwer odpowiada na żądania ping. Z innego systemu uruchom polecenie:
```
ping <TWÓJ_ADRES_IP_SERWERA>
```
Jeśli serwer odpowie poprawnie, system monitorujący również będzie mógł go ponownie wykryć. Po chwili status serwera w panelu powinien zmienić się z offline na online.



## Podsumowanie

Gratulacje! Tworząc regułę ICMPv4 Echo w zaporze Windows, zapewniłeś, że Twój Windows VPS ponownie odpowiada na żądania ping.

Dzięki temu systemy monitorujące mogą poprawnie wykrywać dostępność Twojego serwera i zapobiegasz jego wyświetlaniu jako offline w panelu administracyjnym.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂