---
id: dedicated-freebsd
title: "Serwer dedykowany: Instalacja FreeBSD"
description: "Dowiedz się, jak zainstalować i skonfigurować FreeBSD na swoim serwerze dedykowanym, aby uzyskać optymalną wydajność i niezawodność → Sprawdź teraz"
sidebar_label: Instalacja FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Poniżej znajdziesz krok po kroku instrukcję, jak zainstalować i skonfigurować system operacyjny FreeBSD na swoim serwerze dedykowanym. Postępuj uważnie według tych wskazówek, aby poprawnie zainstalować system i wykorzystać go w pełni.

:::info

Struktura poradnika opiera się na systemie FreeBSD 13.0. Instalacje starszych lub nowszych wersji mogą się nieco różnić pod względem procesu.

:::



## Przygotowanie

Do instalacji i konfiguracji systemu operacyjnego najpierw ważne jest zamontowanie odpowiedniego obrazu ISO systemu. Istnieje kilka sposobów na jego zamontowanie:

1. Montowanie przez wstępną konfigurację
2. Montowanie przez iLO (Virtual Media)
3. Montowanie przez iLO (Remote Console)

Jeśli nie masz jeszcze doświadczenia z montowaniem pliku ISO, najlepiej zajrzyj do naszego [Poradnika wstępnej konfiguracji](dedicated-setup.md) lub [Własnego ISO](dedicated-iso.md).



## Instalacja
Gdy ISO zostanie poprawnie załadowane, serwer przejdzie do procesu instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Rozpoczynamy instalację, naciskając `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Wybierz układ klawiatury, który Ci odpowiada i kontynuuj.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Wpisz wybraną nazwę hosta.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Możesz wybrać opcjonalne pakiety systemowe do instalacji, po czym zatwierdź OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

Na tym etapie możesz utworzyć partycje, w tym przykładzie używamy RAID0. Więcej informacji o RAID znajdziesz w [Konfiguracji RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Jeśli nie chcesz wprowadzać zmian, kontynuuj naciskając `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Ponieważ mamy RAID0, wybieramy brak redundancji.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Zaznacz wolumin klawiszem `Space` i zatwierdź `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

Potwierdzamy, że wszystkie dane zostaną usunięte

:::info
Twój serwer właśnie przetwarza konfigurację, może to potrwać kilka minut
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Wpisz swoje hasło i zatwierdź `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

W konfiguracji IPv4/IPv6 wybierz "Nie", to ustawimy później.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Wybierz "Tak", ustaw swoją strefę czasową oraz datę/godzinę.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Możesz zmienić, które usługi będą automatycznie uruchamiane przy starcie serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Jeśli chcesz, możesz zmodyfikować ustawienia bezpieczeństwa.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

Instalacja zakończona, wybierz "Exit" i potwierdź `Enter`.

:::info
Usuń plik ISO w swoim iLO i wybierz "Reboot"
:::



## Konfiguracja

### Sieć

Aby włączyć urządzenie sieciowe, zaloguj się do systemu używając hasła.

Otwórz plik loader.conf w wybranym edytorze, np. `ee /boot/loader.conf` i dodaj następującą linię:

```if_oce_load="YES"```

Wyjdź z edytora naciskając `CTRL+C` i wpisując exit, następnie zrestartuj serwer dedykowany.

***

Po restarcie musimy zmodyfikować plik rc.conf, np. przez `ee /etc/rc.conf`, dodaj poniższą linię:

```
ifconfig_oce0="DHCP"
```

:::caution
Nazwa karty sieciowej w przykładzie **oce0** może się różnić. Upewnij się, że wpisujesz poprawną nazwę adaptera sieciowego. Możesz to sprawdzić poleceniem ifconfig. Informacje o konfiguracji zostaną wtedy pobrane automatycznie z serwera DHCP.
:::

Przykładowo powinno to wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Wyjdź z edytora naciskając `CTRL+C` i wpisując "exit", następnie wykonaj polecenie `/etc/netstart` raz.

:::info
Twój serwer powinien mieć teraz aktywne połączenie z internetem
:::



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś system FreeBSD na swoim serwerze dedykowanym. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂