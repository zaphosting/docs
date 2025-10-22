---
id: gameserver-restartplaner
title: 'Serwer gier: Restartplaner - Automatyczne restartowanie serwera'
description: "Dowiedz się, jak automatycznie restartować serwer gier codziennie, aby poprawić wydajność i dostępność → Sprawdź teraz"
sidebar_label: Restart planer
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Restart planer to funkcja dostępna dla serwerów gier, która pozwala na ustawienie automatycznego restartu serwera o tej samej porze każdego dnia.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="Jak ustawić RESTART PLANER dla Twojego serwera!" description="Wolisz zobaczyć wszystko w praktyce? Mamy coś dla Ciebie! Zanurz się w naszym wideo, które wszystko dokładnie wyjaśnia. Niezależnie czy się spieszysz, czy wolisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

:::info
Ta funkcja jest dostępna tylko dla serwerów gier.
:::

Funkcję tę znajdziesz w panelu administracyjnym serwera gier.

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Tworzenie nowych wpisów

:::info
***Uwaga:*** Zmiany w restart planerze zostaną zastosowane dopiero po restarcie serwera.
:::

Aby dodać automatyczny restart, kliknij szary przycisk "**+**".

W kolejnym oknie możesz wybrać między restartami tygodniowymi a codziennymi. W naszym przykładzie chcemy cztery restarty dziennie co 6 godzin. Dlatego wybieramy "**Daily**" i ustawiamy "**06:00**". Potwierdź wpis klikając "**Zapisz**".

Ten proces powtarzamy dla każdego kolejnego automatycznego restartu. Jeśli wpiszesz "**24:00**", system wyświetli błąd. Aby go uniknąć, użyj "**00:00**".

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### Start serwera offline

Jeśli ta opcja jest włączona, zatrzymany serwer zostanie automatycznie uruchomiony o wyznaczonej godzinie. Jeśli opcja jest wyłączona, system zrestartuje serwer tylko wtedy, gdy był wcześniej "**Online**".

## Opcja komendy

Opcja komendy przy automatycznych restartach służy do automatycznego wykonania poleceń tuż przed restartem. Ilość dostępnych komend zależy od gry. Nie wszystkie gry oferują taką możliwość.

Jeśli chcesz wcześniej ostrzec graczy, możesz użyć komendy *say* w Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Opóźnienie

Pole Opóźnienie definiuje czas między wykonaniem komendy a restartem serwera. Opóźnienie podaje się w **sekundach**. Na przykład, jeśli chcesz ustawić opóźnienie 5 minut, wpisz wartość 300.

<InlineVoucher />