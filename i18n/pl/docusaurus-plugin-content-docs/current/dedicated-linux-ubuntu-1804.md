---
id: dedicated-linux-ubuntu-1804
title: "Serwer dedykowany: Instalacja Ubuntu 18.04"
description: "Dowiedz się, jak zainstalować i skonfigurować Ubuntu na swoim serwerze dedykowanym, aby uzyskać optymalną wydajność i wsparcie długoterminowe → Sprawdź teraz"
sidebar_label: Ubuntu 18.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Poniżej znajdziesz krok po kroku instrukcję, jak zainstalować i skonfigurować system operacyjny Ubuntu na swoim serwerze dedykowanym. Postępuj zgodnie z tymi wskazówkami, aby poprawnie zainstalować system i wykorzystać go w pełni.



:::warning Nowsza wersja dostępna / Szczegóły EOL

Najnowszą wersją Ubuntu jest wersja [24.04](dedicated-linux-ubuntu.md). Zalecamy korzystanie z najnowszej wersji przy długoterminowych projektach.

Wsparcie dla starszych wersji Ubuntu zostanie w końcu zakończone. Oto planowane terminy dla wersji 18.04:

- Koniec standardowego wsparcia: 01.03.2023
- Koniec wsparcia Ubuntu Pro: 01.04.2028
- Koniec wsparcia Legacy: 01.04.2030

Więcej informacji znajdziesz na [oficjalnej stronie](https://ubuntu.com/about/release-cycle).
:::




## Przygotowanie

Do instalacji i konfiguracji systemu operacyjnego najpierw ważne jest zamontowanie odpowiedniego obrazu ISO systemu. Istnieje kilka sposobów na jego zamontowanie:

1. Montowanie przez początkową konfigurację
2. Montowanie przez iLO (Virtual Media)
3. Montowanie przez iLO (Remote Console)

Jeśli nie masz jeszcze doświadczenia z montowaniem plików ISO, najlepiej zajrzyj do naszego [poradnika Początkowa konfiguracja](dedicated-setup.md) lub [Własne ISO](dedicated-iso.md).



## Instalacja

Gdy obraz ISO zostanie poprawnie zamontowany i załadowany, serwer powinien przejść do procesu instalacji. Na początku instalacji wybierz język, którego chcesz używać w systemie operacyjnym. Wybierz jeden z dostępnych języków i potwierdź wybór klawiszem `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Następnie wybierz odpowiedni układ klawiatury dopasowany do języka. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Kolejnym krokiem jest konfiguracja sieci. Domyślnie serwer jest konfigurowany przez DHCP. Domyślny adapter sieciowy to `eno1`. Potwierdź domyślne ustawienia i kontynuuj. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Opcjonalnie możesz skonfigurować dodatkowy proxy, ale nie jest to konieczne. Jeśli nie potrzebujesz tego, po prostu pomiń ten krok. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Teraz wybierz mirror Ubuntu Archive (serwer pobierania pakietów). Nasze serwery dedykowane znajdują się w Niemczech, więc zalecamy wybrać niemiecki mirror, aby uzyskać najlepszą możliwą prędkość pobierania.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Teraz możesz zdefiniować partycje w konfiguracji dysku. Możesz użyć jednej dużej partycji lub podzielić ją według potrzeb. Jeśli chcesz użyć całego dysku SSD jako jednej partycji, wybierz `Use an entire disk` i kontynuuj.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Instalator automatycznie utworzy wolumeny, a Ty możesz przejść dalej, wybierając opcję `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Przed rozpoczęciem procesu zostaniesz poinformowany, że wszystkie istniejące dane zostaną usunięte. Potwierdź tę wiadomość wybierając `Continue`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Skonfiguruj swoje konto użytkownika według własnych preferencji, możesz też na końcu użyć konta root, zmieniając jego hasło.
Poruszaj się po opcjach za pomocą tabulatora lub strzałek. Gdy skończysz, zaznacz `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





Zalecamy instalację konfiguracji SSH. Jeśli chcesz zarządzać serwerem przez SSH, wybierz tę opcję i potwierdź instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu oferuje kilka domyślnych snapów, jeśli chcesz z nich skorzystać, zaznacz te, które Cię interesują.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Aby zakończyć proces, obraz ISO musi zostać wysunięty, aby nie został ponownie załadowany przy restarcie serwera. Uruchom serwer ponownie, aby zakończyć instalację. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Konfiguracja



### Zmiana hasła użytkownika root

Hasło użytkownika root możesz łatwo zmienić. Wykonaj polecenie `sudo su` i wpisz swoje hasło. Następnie wpisz `sudo passwd`, aby zmienić hasło. Teraz wpisz nowe hasło dla użytkownika root. Gotowe, możesz teraz logować się na konto `root`.



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś system operacyjny Ubuntu 18.04 na swoim serwerze dedykowanym. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂