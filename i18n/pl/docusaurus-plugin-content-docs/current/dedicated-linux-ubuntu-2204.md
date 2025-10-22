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

Poniżej znajdziesz krok po kroku instrukcję, jak zainstalować i skonfigurować system operacyjny Ubuntu na swoim serwerze dedykowanym. Postępuj zgodnie z tymi wskazówkami, aby poprawnie ustawić system i wykorzystać go w pełni.



:::warning Dostępna nowsza wersja / Szczegóły EOL

Najnowszą wersją Ubuntu jest wersja [24.04](dedicated-linux-ubuntu.md). Zalecamy korzystanie z najnowszej wersji do projektów długoterminowych.

Wsparcie dla starszych wersji Ubuntu zostanie w końcu zakończone. Poniżej terminy dla wersji 22.04:

- Koniec standardowego wsparcia: 01.04.2027
- Koniec wsparcia Ubuntu Pro: 01.04.2032
- Koniec wsparcia Legacy: 01.04.2034

Więcej informacji znajdziesz na [oficjalnej stronie](https://ubuntu.com/about/release-cycle).
:::


<InlineVoucher />

## Przygotowanie

Do instalacji i konfiguracji systemu operacyjnego najpierw ważne jest zamontowanie odpowiedniego obrazu ISO systemu. Istnieje kilka sposobów na jego zamontowanie:

1. Montowanie przez początkową konfigurację
2. Montowanie przez iLO (Virtual Media)
3. Montowanie przez iLO (Remote Console)

Jeśli nie masz jeszcze doświadczenia z montowaniem pliku ISO, najlepiej zajrzyj do naszego [poradnika Początkowa konfiguracja](dedicated-setup.md) lub [Własne ISO](dedicated-iso.md).



## Instalacja

Po pomyślnym zamontowaniu i załadowaniu ISO serwer powinien przejść do procesu instalacji. Na początku wybierz język, którego chcesz używać w systemie operacyjnym. Wybierz jeden z dostępnych języków i potwierdź klawiszem `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Następnie wybierz odpowiedni układ klawiatury dopasowany do języka. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Kolejnym krokiem jest konfiguracja sieci. Domyślnie serwer jest konfigurowany przez DHCP. Domyślny adapter sieciowy to `eno1`. Potwierdź domyślne ustawienia i kontynuuj. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Opcjonalnie możesz skonfigurować dodatkowy proxy, ale nie jest to konieczne. Jeśli nie potrzebujesz, po prostu pomiń ten krok. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Teraz wybierz Ubuntu Archive Mirror (serwer pobierania pakietów). Nasze serwery dedykowane znajdują się w Niemczech, więc zalecamy wybrać niemiecki mirror, aby uzyskać najlepszą możliwą prędkość pobierania.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Teraz możesz zdefiniować partycje w konfiguracji dysku. Możesz użyć jednej dużej partycji lub podzielić ją według potrzeb. Jeśli chcesz użyć całego dysku SSD jako jednej partycji, wybierz `Use an entire disk` i kontynuuj.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Instalator automatycznie utworzy wolumeny, a Ty możesz przejść dalej, wybierając opcję `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Przed rozpoczęciem procesu zostaniesz poinformowany, że wszystkie istniejące dane zostaną usunięte. Potwierdź tę wiadomość wybierając `Continue`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Skonfiguruj swoje konto użytkownika według własnych preferencji, możesz też na końcu użyć konta root, zmieniając jego hasło.
Poruszaj się po opcjach za pomocą tabulatora lub strzałek. Po zakończeniu zaznacz `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





Zalecamy instalację konfiguracji SSH. Jeśli chcesz zarządzać serwerem przez SSH, wybierz tę opcję i potwierdź instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu oferuje kilka domyślnych snapów, jeśli chcesz z nich skorzystać, zaznacz te, które Cię interesują.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Aby zakończyć proces, należy wysunąć ISO, aby nie zostało ponownie załadowane po restarcie serwera. Uruchom serwer ponownie, aby zakończyć instalację. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Konfiguracja



### Zmiana hasła użytkownika root

Hasło użytkownika root możesz łatwo zmienić. Wykonaj `sudo su` i wpisz swoje hasło. Następnie wykonaj `sudo passwd`, aby zmienić hasło. Teraz wpisz nowe hasło dla użytkownika root. Gotowe, możesz teraz logować się na konto `root`.



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś system operacyjny Ubuntu 22.04 na swoim serwerze dedykowanym. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂






<InlineVoucher />