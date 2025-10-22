---
id: arma3-serverconfig
title: "Arma 3: Edytuj plik konfiguracyjny serwera"
description: "Dowiedz się, jak dostosować ustawienia swojego serwera gier Arma 3 dla optymalnej rozgrywki i wydajności → Sprawdź teraz"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Parametry i konfiguracja Server.cfg

Plik Server.cfg w Arma 3 jest niezbędny do działania każdego serwera gier Arma 3 i oferuje wiele możliwości indywidualnej konfiguracji serwera.

Server.cfg edytuje się albo bezpośrednio przez FTP na preinstalowanym serwerze gier lub VPS.  
W przypadku serwera gier dostępna jest też pozycja menu Configs po lewej stronie w panelu głównym serwera, skąd można edytować Server.cfg kilkoma kliknięciami.

<InlineVoucher />

## Edytuj Server.cfg przez edytor ZAP

Aby edytować server.cfg swojego serwera Arma 3 w edytorze ZAP, najpierw kliknij na swój serwer w panelu, a następnie wybierz „Configs” w menu po lewej stronie pod „Ustawienia”.

![](https://puu.sh/Fo5i6/183ee65ef3.png)

Zobaczysz tam listę dostępnych plików konfiguracyjnych dla Arma 3, teraz edytujemy tylko Server.cfg.  
Klikając niebieski przycisk „Open file” wejdziesz do edytora ZAP.

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

Masz tam możliwość indywidualnej konfiguracji swojego serwera Arma 3, w tym nazwy serwera i liczby slotów. Możesz dostosować ustawienia według uznania i kliknąć „Save”.

![](https://puu.sh/Fk7I1/407a039e38.png)

Podając nazwę serwera, pamiętaj, aby ująć ją w cudzysłów, inaczej serwer nie odczyta nazwy. Ważne jest też, aby każdą linię zakończyć średnikiem (;), inaczej serwer nie będzie mógł odczytać kolejnych ustawień. Wyjątkiem jest opcja „motd[]”, gdzie każdą linię kończysz przecinkiem, oprócz ostatniej, gdzie przecinek pomijasz.

## Poprawnie:

Tutaj cudzysłowy, średniki i przecinki są ustawione prawidłowo.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## Niepoprawnie:

Brakuje tu cudzysłowów, średników i przecinków, serwer nie uruchomi się w takim stanie.

![](https://puu.sh/Fk7NK/f96a31199d.png)

## Edytuj Server.cfg przez FTP

Zamiast edytora ZAP, Server.cfg można też edytować bezpośrednio przez FTP. W tym przykładzie używamy **FileZilla**, aby połączyć się przez FTP z serwerem gier i katalogami Twojego serwera.

Jak połączyć się z serwerem gier przez FTP dowiesz się tutaj: [Dostęp przez FTP](gameserver-ftpaccess.md).

## Nawiązywanie połączenia i nawigacja do ścieżki Server.cfg

:::info
Upewnij się, że Twój serwer gier jest zatrzymany podczas pracy przez FTP.
:::

Po połączeniu się z serwerem gier przez FTP, jak wyżej opisano, przejdź w FileZilla w dolnym prawym oknie do katalogu z plikiem server.cfg, który znajdziesz pod ścieżką: **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
Nazwa pierwszego folderu (g198376) to ID Twojego serwera, dzięki temu możesz rozróżnić foldery, jeśli masz więcej niż jeden serwer gier.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

W katalogu znajdziesz Server.cfg swojego serwera Arma 3 oraz inne pliki konfiguracyjne.  
Teraz możesz kliknąć **prawym przyciskiem myszy** na server.cfg i wybrać **View/Edit**.

![](https://puu.sh/Fo5fM/f3519a8936.png)

Otworzy się standardowy edytor, w którym możesz edytować Server.cfg tak, jak opisano wyżej.  
Po edycji zapisz plik skrótem **CTRL+S**, a następnie zamknij edytor.  
Twój serwer jest teraz gotowy do ponownego uruchomienia.

<InlineVoucher />