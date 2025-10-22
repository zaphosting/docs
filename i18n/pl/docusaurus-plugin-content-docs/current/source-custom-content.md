---
id: source-custom-content
title: Instalacja custom content i modów na serwerach gier
description: "Dowiedz się, jak custom content wzbogaca rozgrywkę w grach source takich jak Counter-Strike i Garry's Mod dzięki mapom, skinom i dźwiękom → Sprawdź teraz"
sidebar_label: Custom Content
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Co to jest custom content?

Niektóre gry source, takie jak Counter-Strike czy Garry's Mod, zasłynęły z ogromnej różnorodności. Wszystko to było możliwe dzięki wsparciu pluginów i **custom content**. Na przestrzeni lat powstało wiele trybów gry, takich jak Zombie Mod, Hide and Seek, Minigry, Jailbreak i wiele innych.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

Takie serwery często korzystają z map, skinów graczy i dźwięków stworzonych przez społeczność. Aby gracze mogli korzystać lub zobaczyć custom content serwera, najpierw musi on zostać pobrany z serwera. W tym przypadku są dwie możliwości:

- FastDL
- Steam Workshop

W zależności od zastosowania, jedna opcja jest bardziej przydatna niż druga. Poniżej znajdziesz przegląd różnic między FastDL a Workshop:

|  Custom Content  | FastDL | Steam Workshop |
| :--------------: | :----: | :------------: |
|       Mapy       |   ✓    |       ✓        |
| Materiały/Modele |   ✓    |       ✗        |
|      Dźwięki     |   ✓    |       ✗        |



## Konfiguracja custom content



### FastDL

Poniżej wyjaśniamy konfigurację serwera FastDL z wykorzystaniem jednego z naszych [produktów hostingowych](https://zap-hosting.com/en/shop/product/webspace/). Możesz jednak użyć dowolnej innej opcji, która oferuje publicznie dostępny serwer WWW. Aby rozpocząć konfigurację, otwieramy produkt hostingowy i wchodzimy do panelu administracyjnego:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



Następnie otwieramy menedżer plików i tworzymy następujące foldery:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



Potem hosting musi mieć odpowiednie uprawnienia, aby pobieranie contentu w grze działało poprawnie:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
Uprawnienia muszą być ustawione dla wszystkich folderów!
:::

Teraz można przesłać custom content. Pliki muszą być dostępne zarówno na serwerze gry, jak i na FastDL (hostingu). Na serwer gry pliki przesyłamy rozpakowane, a na FastDL najlepiej spakowane w formacie bzip2. Do tego polecamy program 7Zip.

Na koniec wystarczy podać adres serwera FastDL w konfiguracji serwera gry. Robimy to w pliku **server.cfg**. Dodaj do konfiguracji następujące komendy:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Zamień URL na adres swojego hostingu ZAP.
```

Po restarcie i połączeniu z serwerem odpowiedni content powinien zostać pobrany. Można to też sprawdzić w konsoli gry:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

Poniżej wyjaśniamy konfigurację Steam Workshop. Najpierw trzeba otworzyć stronę Steam Workshop. W tym celu wybierz odpowiednią grę w Steam i otwórz tam workshop. Jako przykład bierzemy [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections). Po wejściu kliknij w menu na Browse i wybierz Collection:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

Kliknij prawym przyciskiem na Collection i stwórz kolekcję dla serwera gier:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

Kolekcja została pomyślnie utworzona, ale domyślnie jest pusta. Teraz ponownie otwórz workshop gry i wybierz obiekty, które chcesz dodać:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

Po zebraniu wszystkiego wróć do kolekcji, kliknij prawym i wybierz Kopiuj adres URL strony. Z adresu URL potrzebujesz ID kolekcji, które wygląda mniej więcej tak:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Na koniec dodaj to ID w Steam Workshop w panelu administracyjnym swojego serwera gier:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />