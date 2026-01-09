---
id: enshrouded-configuration
title: "Enshrouded: Konfiguracja Serwera Enshrouded"
description: "Dowiedz się, jak dostosować ustawienia serwera Enshrouded dla optymalnej rozgrywki i zarządzania serwerem → Sprawdź teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Enshrouded na starcie ma kilka parametrów konfiguracyjnych, które możesz dostosować do swoich potrzeb. W tym poradniku przejrzymy wszystkie dostępne obecnie parametry konfiguracyjne i wyjaśnimy każdy z nich bardziej szczegółowo.

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="Konfiguracja serwera Enshrouded w zaledwie 60 sekund!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć informacje w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Dostęp do pliku konfiguracyjnego

Na początek musisz uzyskać dostęp do pliku konfiguracyjnego, aby edytować dowolne parametry. Istnieje kilka sposobów na edycję tego pliku.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez panel WWW" default>

#### Przez panel WWW

Najwygodniejszą metodą jest przejście do sekcji **Ustawienia** w panelu administracyjnym Twojego serwera gier i znalezienie tam odpowiednich opcji, jak na poniższym obrazku:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="Przez plik konfiguracyjny w panelu">

#### Przez plik konfiguracyjny w panelu

:::note
Serwer musi być zatrzymany, zanim będzie można edytować plik konfiguracyjny. Edycja pliku i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Alternatywnie, jeśli chcesz bezpośrednio edytować surowy plik, możesz to zrobić w sekcji **Konfiguracje** w panelu administracyjnym serwera gier, klikając niebieski przycisk edycji pliku, jak na obrazku poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

Otworzy się wtedy edytor tekstu bezpośrednio na stronie, umożliwiający edycję.

</TabItem>

<TabItem value="ftp" label="Przez FTP">


#### Przez FTP

:::note
Serwer musi być zatrzymany, zanim będzie można edytować plik konfiguracyjny. Edycja pliku i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Ostatnią metodą dostępu do surowego pliku jest FTP. Jeśli nie znasz się na FTP, polecamy zapoznać się z [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md). Jednak ta metoda zajmuje więcej czasu i jeśli chcesz bezpośrednio edytować zawartość pliku, lepiej skorzystać z sekcji **Konfiguracje** w panelu administracyjnym serwera gier, jak wspomniano wyżej.

</TabItem>
</Tabs>

## Opcje konfiguracji serwera

Oto aktualnie dostępne opcje konfiguracji serwera udostępnione przez grę, które pozwalają na personalizację serwera, w szczególności nazwy serwera, hasła oraz niektórych ustawień wewnętrznych.

:::tip
Nie zalecamy zmiany ustawień Portu, IP ani Katalogu, ponieważ są one automatycznie konfigurowane przez serwer gier. Zmiana tych wartości może potencjalnie uszkodzić Twój serwer gier!
:::

| Nazwa parametru | Przykład                               | Opis                                                        |
| --------------- | ------------------------------------- | ----------------------------------------------------------- |
| name            | ZAP-Hosting Docs Test                 | Nazwa Twojego serwera                                       |
| password        | iLoveZAP!2024                        | Zabezpiecz serwer hasłem (prywatny)                         |
| saveDirectory   | ./savegame (domyślnie)               | Ustaw katalog, w którym chcesz przechowywać zapisy gry      |
| logDirectory    | ./logs (domyślnie)                   | Ustaw katalog, w którym chcesz przechowywać logi            |
| ip              | 123.123.123.123                     | Publiczny adres IP, na którym działa serwer                 |
| gamePort        | 15636 (domyślnie)                   | Publiczny port, na którym działa serwer                      |
| queryPort       | 15637 (domyślnie)                   | Publiczny port, przez który można się łączyć z serwerem     |
| slotCount       | 4                                   | Maksymalna liczba graczy, którzy mogą dołączyć do serwera (max 16) |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer użyje podanych przez Ciebie ustawień.

<InlineVoucher />