---
id: dedicated-linux-ubuntu-2204
title: "Serwer dedykowany: Instalacja Ubuntu 22.04"
description: "Dowiedz się, jak poprawnie zainstalować i skonfigurować Ubuntu na swoim serwerze dedykowanym, aby uzyskać optymalną wydajność i wsparcie długoterminowe → Sprawdź teraz"
sidebar_label: Ubuntu 22.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Poniżej znajdziesz krok po kroku instrukcję, jak zainstalować i skonfigurować system operacyjny Ubuntu na swoim serwerze dedykowanym. Postępuj uważnie według tych wskazówek, aby poprawnie zainstalować system i wykorzystać go na maxa.



:::warning Dostępna nowsza wersja / Szczegóły EOL

Najnowszą wersją Ubuntu jest [24.04](dedicated-linux-ubuntu.md). Polecamy korzystać z najnowszej wersji przy długoterminowych projektach.

Wsparcie dla starszych wersji Ubuntu zostanie w końcu zakończone. Oto planowane terminy dla wersji 22.04:

- Koniec standardowego wsparcia: 01.04.2027
- Koniec wsparcia Ubuntu Pro: 01.04.2032
- Koniec wsparcia Legacy: 01.04.2034

Więcej info znajdziesz na [oficjalnej stronie](https://ubuntu.com/about/release-cycle).
:::




## Przygotowanie

Do instalacji i konfiguracji systemu operacyjnego najpierw musisz zamontować odpowiedni obraz ISO systemu. Masz kilka opcji montowania:

1. Montowanie przez początkową konfigurację
2. Montowanie przez iLO (Virtual Media)
3. Montowanie przez iLO (Remote Console)

Jeśli nie masz jeszcze doświadczenia z montowaniem plików ISO, najlepiej zajrzyj do naszego [poradnika początkowej konfiguracji](dedicated-setup.md) lub [poradnika własnego ISO](dedicated-iso.md).



## Instalacja

Gdy obraz ISO zostanie poprawnie zamontowany i załadowany, serwer przejdzie do procesu instalacji. Na początku wybierz język, którego chcesz używać w systemie. Wybierz jeden z dostępnych języków i zatwierdź klawiszem `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Następnie wybierz odpowiedni układ klawiatury dopasowany do wybranego języka. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Kolejnym krokiem jest konfiguracja sieci. Domyślnie serwer jest ustawiony na DHCP. Domyślny adapter sieciowy to `eno1`. Potwierdź domyślne ustawienia i przejdź dalej. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Opcjonalnie możesz skonfigurować dodatkowy proxy, ale nie jest to konieczne. Jeśli nie potrzebujesz, po prostu pomiń ten krok. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Teraz wybierz mirror Ubuntu Archive (serwer pobierania pakietów). Nasze serwery dedykowane znajdują się w Niemczech, więc zalecamy wybrać niemiecki mirror, aby uzyskać najlepsze prędkości pobierania.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Teraz możesz ustawić partycje w konfiguracji dysku. Możesz użyć jednej dużej partycji lub podzielić ją według potrzeb. Jeśli chcesz użyć całego dysku SSD jako jednej partycji, wybierz `Use an entire disk` i kontynuuj.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Instalator automatycznie utworzy wolumeny, a Ty możesz przejść dalej, wybierając opcję `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Przed rozpoczęciem procesu pojawi się informacja, że wszystkie istniejące dane zostaną usunięte. Potwierdź to komunikat wybierając `Continue`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Skonfiguruj swoje konto użytkownika według własnych preferencji, możesz też na końcu użyć konta root, zmieniając jego hasło.
Poruszaj się po opcjach za pomocą tabulatora lub strzałek. Gdy skończysz, zatwierdź `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





Zalecamy instalację konfiguracji SSH. Jeśli chcesz zarządzać serwerem przez SSH, wybierz tę opcję i potwierdź instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu oferuje kilka domyślnych snapów, jeśli chcesz z nich skorzystać, zaznacz te, które Cię interesują.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Na koniec musisz wysunąć obraz ISO, aby nie został ponownie załadowany przy restarcie serwera. Uruchom serwer ponownie, aby zakończyć proces. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Konfiguracja



### Zmiana hasła użytkownika root

Hasło użytkownika root możesz łatwo zmienić. Wpisz `sudo su` i podaj swoje hasło. Następnie wpisz `sudo passwd`, aby zmienić hasło. Teraz wpisz nowe hasło dla użytkownika root. Gotowe, możesz teraz logować się jako `root`.



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś system Ubuntu 22.04 na swoim serwerze dedykowanym. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂