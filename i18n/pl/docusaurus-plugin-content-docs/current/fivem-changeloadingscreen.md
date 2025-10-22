---
id: fivem-changeloadingscreen
title: "FiveM: Instalacja Własnego Ekranu Ładowania"
description: "Dowiedz się, jak spersonalizować ekran ładowania w FiveM, aby zapewnić unikalne doświadczenie graczom i poprawić wygląd serwera → Sprawdź teraz"
sidebar_label: Instalacja Własnego Ekranu Ładowania
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Chcesz używać własnego, spersonalizowanego ekranu ładowania zamiast domyślnego ekranu FiveM? Poniżej wyjaśnimy, jak to zrobić i jakie kroki musisz wykonać!

<InlineVoucher />



## Przygotowanie

Aby zainstalować własny ekran ładowania, najpierw musisz znaleźć odpowiedni zasób. Duży wybór zasobów znajdziesz na oficjalnej [stronie Cfx.re](https://forum.cfx.re/c/releases/7). Następnie pobierz wybrany zasób i rozpakuj go na swoim komputerze.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Instalacja

Instalacja ekranu ładowania odbywa się przez FTP. Połącz się z serwerem gier przez FTP. Jeśli jeszcze nie wiesz, jak korzystać z FTP, zerknij na nasz [poradnik FTP access](gameserver-ftpaccess.md).

Po połączeniu się przez FTP, przejdź do folderu z zasobami. W zależności od zainstalowanego frameworka, znajdziesz folder z zasobami pod ścieżką: `/gXXXXXX/fivem/TWÓJ_FRAMEWORK/resources`

Prześlij folder z zasobem, który wcześniej pobrałeś i rozpakowałeś na komputerze, do tej lokalizacji.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Po pomyślnym przesłaniu zasobu ekranu ładowania, musisz go jeszcze dodać do pliku konfiguracyjnego serwera `server.cfg`. Zaloguj się do panelu txAdmin i otwórz Edytor CFG.

Dodaj swój zasób do konfiguracji za pomocą komendy `start nazwa_zasobu`. W tym przykładzie będzie to `start loadingscreen`. Zapisz zmiany i zrestartuj serwer.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Podsumowanie

Jeśli wykonałeś wszystkie kroki, po kolejnym restarcie serwera powinieneś zobaczyć swój nowy ekran ładowania. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />