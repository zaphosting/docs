---
id: gameserver-backups
title: 'Serwer gier: Tworzenie, pobieranie i importowanie kopii zapasowych'
description: "Dowiedz się, jak łatwo tworzyć i przywracać ręczne lub automatyczne kopie zapasowe swojego serwera gier, aby chronić swoje dane → Sprawdź teraz"
sidebar_label: Kopie zapasowe
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Oferujemy możliwość tworzenia indywidualnych kopii zapasowych za jednym kliknięciem. Dzięki temu możesz łatwo i bez wysiłku tworzyć kopie zapasowe oraz importować je w dowolnym momencie później. Funkcja ta jest dostępna zarówno dla plików serwera Twojego serwera gier, jak i dla powiązanych baz danych. Wszystkie kopie zapasowe są przechowywane na Twoim serwerze storage, który domyślnie zawiera 10 GB darmowej przestrzeni dyskowej. Jeśli potrzebujesz więcej, możesz przejść na Premium Storage.

Oprócz ręcznego tworzenia kopii zapasowych, mogą one być również tworzone całkowicie automatycznie. Kopie zapasowe mogą być tworzone codziennie lub co tydzień o określonej godzinie. Po przywróceniu kopii zapasowej serwer będzie w stanie, w jakim znajdował się w momencie jej utworzenia.

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="Jak tworzyć KOPIE ZAPASOWE dla swojego serwera!" description="Wolisz zobaczyć to w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć informacje w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Tworzenie kopii zapasowych ręcznie

Naciśnij zielony przycisk **+** obok listy kopii zapasowych, aby ręcznie utworzyć kopię zapasową. Proces tworzenia kopii zapasowej rozpocznie się zaraz po tym,  

:::info
Proces tworzenia kopii zapasowej może potrwać kilka minut, w zależności od rozmiaru plików Twojego serwera!
:::

## Tworzenie kopii zapasowych automatycznie

Na dole strony znajdziesz więcej opcji, w tym ustawienia automatycznych kopii zapasowych. Opcja **Twórz kopie zapasowe automatycznie** musi być włączona, aby ta funkcja działała. Dodatkowo należy ustawić interwał.

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

W zależności od gry, zwykle warto również tworzyć kopię zapasową bazy danych, ponieważ często przechowywane są tam ważne dane, takie jak wyniki, uprawnienia i wiele innych.

>⚠️ Wystarczająca przestrzeń dyskowa jest kluczowa do regularnego tworzenia kopii zapasowych. Upewnij się, że zawsze masz wystarczająco dużo dostępnego miejsca.

## Pobieranie/usuwanie kopii zapasowych

Jeśli chcesz pobrać lub usunąć kopie zapasowe, musisz połączyć się z serwerem storage przez FTP. Instrukcje korzystania z FTP znajdziesz tutaj: [Dostęp przez FTP](gameserver-ftpaccess.md)
![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

Tam możesz zobaczyć dane dostępowe do swojego serwera storage oraz aktualnie używaną przestrzeń dyskową. Po połączeniu przez FTP możesz tam pobierać lub usuwać kopie zapasowe.

<InlineVoucher />