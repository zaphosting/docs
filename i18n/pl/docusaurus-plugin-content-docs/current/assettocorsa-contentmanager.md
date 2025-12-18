---
id: assettocorsa-contentmanager
title: "Assetto Corsa: Konfiguracja serwera z Content Manager"
description: "Dowiedz się, jak efektywnie skonfigurować i zarządzać ustawieniami swojego serwera gier dla optymalnej wydajności i personalizacji → Sprawdź teraz"
sidebar_label: Konfiguracja serwera z Content Manager
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Ważne** Aby zarządzać serwerem za pomocą Content Manager, potrzebna jest pełna wersja, wersja lite *nie* pozwala na zarządzanie serwerami.
:::

<InlineVoucher />


## Przygotowanie

Najpierw otwieramy nasz Content Manager i klikamy w menu hamburgerowe w prawym górnym rogu, gdzie wybieramy "Server":

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

Teraz tworzymy nowy preset i go wybieramy:

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## Ustaw sloty serwera

Najpierw musimy ustawić, ile slotów ma nasz serwer, w naszym przypadku serwer ma tylko 10 slotów, więc wybieramy '10' przy Capacity:

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## Wybierz mapę

Domyślnie wybrana jest mapa Imola, klikając na mapę możemy wybrać własną mapę:

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## Ustaw samochody

Teraz przechodzimy do zakładki "Entry List", tutaj możemy dodać nowe samochody:


![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
Pamiętaj, że wszystkie sloty samochodów muszą być wypełnione i nie może być więcej niż dostępna liczba slotów.

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## Konfiguracja FTP Upload

W menu "Advanced" możemy skonfigurować uploader FTP, dzięki któremu wgrasz konfigurację serwera jednym kliknięciem.

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


Teraz wpisz tutaj swoje dane FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
W polu "Folder" musisz wpisać ID swojego serwera gier, tak jak widzisz je w URL swojego serwera, na przykład:

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

W naszym przypadku będzie to:

```
/g427814/assetto-corsa/
```

Dla AssettoServer:

```
/g427814/assettoserver/
```

Po tym możesz kliknąć "Upload Content", konfiguracja, tor i samochody zostaną automatycznie wgrane, a potem wystarczy tylko uruchomić serwer!

<InlineVoucher />