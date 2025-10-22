---
id: satisfactory-connect
title: "Satisfactory: Połącz się z serwerem"
description: "Dowiedz się, jak połączyć się i zarządzać swoim serwerem Satisfactory, aby cieszyć się płynną rozgrywką → Sprawdź teraz"
sidebar_label: Połącz się z serwerem
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="Jak stworzyć serwer Satisfactory na ZAP i wgrać własny save" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć info w najbardziej angażujący sposób!"/>

:::info
Jeśli korzystasz już z układu klawiatury QWERTY, nie musisz robić tych kroków, po prostu naciśnij CTRL + SHIFT + L i otwórz konsolę klawiszem ~
:::

Aby połączyć się z serwerem Satisfactory, musisz otworzyć konsolę w grze – są na to dwa sposoby.

<InlineVoucher />

## Otwórz konsolę

### Zmiana układu klawiatury
Łatwo zmienisz układ klawiatury w kilku krokach.  
Uruchom grę Satisfactory i poczekaj, aż pojawi się menu główne.  
Naciśnij teraz `CTRL + Shift` – układ klawiatury powinien zmienić się na `EN`.  
Możesz to łatwo sprawdzić, przełącz się na pulpit i zobacz, czy w prawym dolnym rogu paska zadań jest `EN`.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Jeśli zmiana się powiodła, wróć do gry, naciśnij `CTRL + SHIFT + L`  
Teraz naciśnij `^` na klawiaturze – powinna się otworzyć konsola.

### Zmiana klawisza otwierającego konsolę
Naciśnij `Windows + R` lub wyszukaj w menu start „Uruchom”  
Wklej tę ścieżkę:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

i naciśnij Enter.

Otwórz teraz plik Input.ini w wybranym edytorze (np. Notatnik)

:::info
Jeśli plik jeszcze nie istnieje, po prostu go stwórz.
:::

Dodaj do pliku ten tekst:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Zapisz i uruchom grę ponownie – teraz konsolę otworzysz klawiszem `F6`

## Połącz się ze swoim serwerem Satisfactory
Skopiuj adres IP z panelu głównego swojego serwera:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Otwórz konsolę w grze, jak opisano wcześniej.

Wpisz teraz `open ADRES-IP-TWOJEGO-SERWERA`.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

i naciśnij Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Łączysz się właśnie ze swoim serwerem Satisfactory!

## HUB
HUB jest już umieszczony w świecie – możesz go zniszczyć, jeśli chcesz, naciskając `F` i postawić w innym miejscu.  
HUB łatwo znajdziesz, podążając za markerem.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
Serwer zapisuje Twój postęp co 5 minut, możesz je zobaczyć w menedżerze save’ów w panelu głównym serwera.  
Zawsze przechowuje ostatnie 6 zapisów (30 minut) postępu.

<InlineVoucher />