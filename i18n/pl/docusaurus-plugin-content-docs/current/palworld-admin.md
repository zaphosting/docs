---
id: palworld-admin
title: "Palworld: Konfiguracja Admina"
description: "Dowiedz się, jak zabezpieczyć swój serwer Palworld hasłem admina i skutecznie zarządzać zaufanymi graczami → Sprawdź teraz"
sidebar_label: Konfiguracja Admina
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie
W tym poradniku pokażemy, jak skonfigurować serwer z hasłem admina i dodać siebie jako admina w grze. To hasło możesz udostępnić zaufanym graczom, aby przyznać im dostęp do różnych komend admina. Więcej o tych komendach dowiesz się z naszego [poradnika Komendy serwera](palworld-server-commands.md).
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="Konfiguracja serwera Palworld w zaledwie MINUTĘ!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Konfiguracja hasła admina

Na początek musisz wejść do ustawień konfiguracyjnych. Jest kilka sposobów, które opisujemy poniżej wraz z instrukcjami ustawienia hasła. Polecamy opcję **Webinterface**, bo jest najbardziej przyjazna dla użytkownika. Po ustawieniu hasła admina możesz przejść do kolejnej sekcji.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez Webinterface" default>

#### Przez Webinterface

Najwygodniejszą metodą jest przejście do sekcji **Ustawienia** w panelu administracyjnym Twojego serwera gier.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

W obszarze **Ustawienia** znajdź opcję **Hasło serwera gier**. W tym polu wpisz hasło, którego chcesz używać.

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
Po wybraniu hasła, przewiń do góry i koniecznie kliknij zielony przycisk **Zapisz**, aby potwierdzić zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="Przez plik konfiguracyjny w WI">

#### Przez plik konfiguracyjny w WI

:::note
Serwer musi być zatrzymany, zanim edytujesz plik konfiguracyjny. Edycja pliku i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Alternatywnie, jeśli chcesz edytować plik bezpośrednio, przejdź do sekcji **Konfiguracje** w panelu administracyjnym serwera gier i kliknij niebieski przycisk edycji pliku, jak na obrazku poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Otworzy się edytor tekstu na stronie, gdzie możesz dokonać zmian. Znajdź opcję **AdminPassword** w pliku (pomocne będzie `CTRL+F`) i wpisz tam hasło admina, które chcesz ustawić. Na koniec zapisz plik i uruchom serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="Przez FTP">

#### Przez FTP

:::note
Serwer musi być zatrzymany, zanim edytujesz plik konfiguracyjny. Edycja pliku i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Ostatnia metoda dostępu do pliku to FTP. Jeśli nie znasz FTP, polecamy zapoznać się z naszym [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md). Jednak ta metoda jest wolniejsza, a jeśli chcesz bezpośrednio edytować plik, lepiej skorzystać z sekcji **Konfiguracje** w panelu administracyjnym serwera gier, jak opisano wyżej.

</TabItem>
</Tabs>

## Ustawienie siebie jako admina

Gdy już masz ustawione hasło admina, musisz dodać siebie jako admina. Uruchom Palworld i połącz się ze swoim serwerem. Jeśli potrzebujesz pomocy, zerknij na nasz [poradnik Połączenie z serwerem](palworld-connect.md).

W grze otwórz czat klawiszem `Enter`. Następnie wpisz poniższą komendę, zamieniając `[password]` na hasło admina, które wcześniej ustawiłeś:

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

Jeśli wszystko poszło dobrze, w czacie pojawi się komunikat o sukcesie. Jeśli pojawił się błąd, upewnij się, że wpisałeś poprawne hasło admina, takie jak to, które ustawiłeś wcześniej.

<InlineVoucher />