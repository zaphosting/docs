---
id: moe-configuration
title: "Myth of Empires: Konfiguracja Serwera"
description: "Dowiedz się, jak dostosować swój serwer Myth of Empires dla optymalnej rozgrywki i pełnej kontroli → Sprawdź teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Myth of Empires oferuje szeroki zakres opcji konfiguracji, które pozwalają dostosować serwer do własnych potrzeb. W tym poradniku przyjrzymy się niektórym dostępnym parametrom konfiguracyjnym i wyjaśnimy je bardziej szczegółowo.

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="Konfiguracja serwera Myth Of Empires w zaledwie MINUTĘ!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć informacje w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Dostęp do Pliku Konfiguracyjnego

Na początek musisz uzyskać dostęp do pliku konfiguracyjnego, aby edytować dowolne parametry. Istnieje kilka sposobów na edycję tego pliku.

:::tip
Zdecydowanie polecamy metodę **Webinterface**, ponieważ MOE ma sporo opcji konfiguracyjnych oraz plików konfiguracyjnych, co oznacza, że ręczna edycja może zająć dużo więcej czasu niż bezpośrednia zmiana wartości przez webinterface.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez Webinterface" default>

#### Przez Webinterface

Najbardziej przyjazną metodą jest przejście do sekcji **Ustawienia** w panelu administracyjnym twojego serwera gier i wyszukanie tam odpowiednich opcji, jak na poniższym obrazku:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Będziesz mieć dostęp do wielu sekcji i ustawień, gdzie możesz bezpośrednio edytować wartości.

</TabItem>

<TabItem value="configs" label="Przez plik konfiguracyjny w WI">

#### Przez plik konfiguracyjny w WI

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Alternatywnie, jeśli chcesz bezpośrednio edytować surowe pliki konfiguracyjne, możesz to zrobić w sekcji **Konfiguracje** w panelu administracyjnym serwera gier. Aby edytować plik konfiguracyjny, kliknij niebieski przycisk edycji pliku, jak na poniższym obrazku:

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

Otworzy się edytor tekstu bezpośrednio na stronie, umożliwiający edycję.

</TabItem>

<TabItem value="ftp" label="Przez FTP">

#### Przez FTP

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Ostatnią metodą dostępu do surowego pliku jest FTP. Jeśli nie znasz FTP, polecamy zapoznać się z [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md). Jednak ta metoda jest wolniejsza, a jeśli chcesz bezpośrednio edytować zawartość pliku, lepiej skorzystać z sekcji **Ustawienia** w panelu administracyjnym serwera gier, jak wspomniano wcześniej.

</TabItem>
</Tabs>

## Opcje Konfiguracji Serwera

Poniżej wybraliśmy kilka kluczowych i ważnych opcji konfiguracyjnych serwera, które prawdopodobnie będziesz chciał zmienić, w tym niektóre ustawienia wewnętrzne.

:::tip
Nie zalecamy zmiany ustawień Port, IP ani Katalogu, ponieważ są one konfigurowane automatycznie przez serwer gier. Zmiana tych wartości może spowodować problemy z działaniem serwera!
:::

| Nazwa Parametru | Przykład                               | Opis                                                        |
| --------------- | ------------------------------------- | ----------------------------------------------------------- |
| name            | ZAP-Hosting Docs Test                 | Nazwa twojego serwera                                       |
| password        | iLoveZAP!2024                        | Zabezpiecz serwer hasłem (prywatny)                         |
| description     | This is a cool server!                | Dodaj opis swojego serwera                                  |
| gamemode        | PVE / PVP                           | Ustaw tryb gry na serwerze                                  |
| mapname         | Central Island                      | Wybierz mapę dla serwera                                    |
| difficulty      | 1                                   | Poziom trudności twojego świata                             |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer użyje podanych przez Ciebie ustawień.

<InlineVoucher />