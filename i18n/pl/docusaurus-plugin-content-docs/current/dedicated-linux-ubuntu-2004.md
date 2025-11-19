---
id: dedicated-linux-ubuntu-2004
title: "Serwer dedykowany: Instalacja Ubuntu 20.04"
description: "Dowiedz się, jak zainstalować i skonfigurować Ubuntu na swoim serwerze dedykowanym, aby uzyskać optymalną wydajność i wsparcie długoterminowe → Sprawdź teraz"
sidebar_label: Ubuntu 20.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Poniżej znajdziesz krok po kroku, jak zainstalować i skonfigurować system operacyjny Ubuntu na swoim serwerze dedykowanym. Postępuj zgodnie z tymi instrukcjami, aby poprawnie zainstalować system i wykorzystać go na maxa.



:::warning Nowsza wersja dostępna / Szczegóły EOL

Najnowszą wersją Ubuntu jest wersja [24.04](dedicated-linux-ubuntu.md). Polecamy korzystać z najnowszej wersji przy długoterminowych projektach.

Wsparcie dla starszych wersji Ubuntu zostanie w końcu zakończone. Oto planowane terminy dla wersji 20.04:

- Koniec standardowego wsparcia: 01.05.2025
- Koniec wsparcia Ubuntu Pro: 01.04.2030
- Koniec wsparcia Legacy: 01.04.2032

Więcej info znajdziesz na [oficjalnej stronie](https://ubuntu.com/about/release-cycle).
:::




## Przygotowanie

Do instalacji i konfiguracji systemu operacyjnego najpierw ważne jest zamontowanie odpowiedniego obrazu ISO systemu. Masz kilka opcji montowania:

1. Montowanie przez początkową konfigurację
2. Montowanie przez iLO (Virtual Media)
3. Montowanie przez iLO (Remote Console)

Jeśli jeszcze nie wiesz, jak zamontować plik ISO, najlepiej zerknij na nasz [Poradnik początkowej konfiguracji](dedicated-setup.md) lub [Poradnik własnego ISO](dedicated-iso.md).



## Instalacja

Gdy ISO zostanie poprawnie zamontowane i załadowane, serwer powinien przejść do procesu instalacji. Na początku wybierz język, którego chcesz używać w systemie. Wybierz jeden z dostępnych języków i potwierdź klawiszem `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Następnie wybierz odpowiedni układ klawiatury dopasowany do języka. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Kolejnym krokiem jest konfiguracja sieci. Domyślnie serwer jest konfigurowany przez DHCP. Domyślny adapter sieciowy to `eno1`. Potwierdź domyślne ustawienia i przejdź dalej. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Opcjonalnie możesz skonfigurować dodatkowy proxy, ale nie jest to konieczne. Jeśli nie potrzebujesz, po prostu pomiń ten krok. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Teraz wybierz mirror Ubuntu Archive (serwer pobierania pakietów). Nasze serwery dedykowane są w Niemczech, więc polecamy wybrać niemiecki mirror, aby mieć najlepsze prędkości pobierania.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Teraz możesz ustawić partycje w konfiguracji dysku. Możesz użyć jednej dużej partycji lub podzielić ją według potrzeb. Jeśli chcesz użyć całego dysku SSD jako jednej partycji, wybierz `Use an entire disk` i kontynuuj.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Instalator automatycznie utworzy wolumeny, a Ty możesz przejść dalej, wybierając opcję `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Przed rozpoczęciem procesu zostaniesz poinformowany, że wszystkie istniejące dane zostaną usunięte. Potwierdź to komunikat wybierając `Continue`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Skonfiguruj swoje konto użytkownika według uznania, możesz też na końcu użyć konta root, zmieniając hasło.
Poruszaj się po opcjach za pomocą tabulatora lub strzałek. Gdy skończysz, zatwierdź `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





Zalecamy instalację konfiguracji SSH. Jeśli chcesz zarządzać serwerem przez SSH, wybierz tę opcję i potwierdź instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu oferuje kilka domyślnych snapów, jeśli chcesz z nich skorzystać, zaznacz te, które Ci pasują.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Aby zakończyć proces, musisz wysunąć ISO, żeby nie załadowało się ponownie po restarcie serwera. Uruchom serwer ponownie, aby zakończyć instalację. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Konfiguracja



### Zmiana hasła użytkownika root

Hasło użytkownika root możesz łatwo zmienić. Wykonaj `sudo su` i wpisz swoje hasło. Następnie wpisz `sudo passwd`, aby zmienić hasło. Teraz wpisz nowe hasło dla użytkownika root. Gotowe, możesz teraz logować się jako `root`.



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś system operacyjny Ubuntu 20.04 na swoim serwerze dedykowanym. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂