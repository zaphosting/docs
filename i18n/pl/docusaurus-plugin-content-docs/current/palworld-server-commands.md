---
id: palworld-server-commands
title: "Palworld: Komendy serwera Palworld"
description: "Dowiedz się, jak skutecznie zarządzać serwerami Palworld za pomocą wbudowanych komend do kontroli admina i rozgrywki → Sprawdź teraz"
sidebar_label: Komendy serwera
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Serwery Palworld mają zestaw przydatnych wbudowanych komend serwera, które możesz używać zarówno w grze, jak i przez konsolę serwera. W tym poradniku przejrzymy wiele z tych komend, podając opisy i przykłady użycia dla każdej z nich.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="Skonfiguruj swój serwer PALWORLD w zaledwie MINUTĘ!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć info w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Ustawianie admina

Najpierw musisz ustawić hasło admina dla swojego serwera Palworld i dodać siebie jako admina w grze, zanim będziesz mógł korzystać z komend admina opisanych w następnej sekcji.

Hasło admina możesz ustawić przez zakładkę **Ustawienia** w panelu głównym serwera lub w pliku konfiguracyjnym **PalWorldSettings.ini**. Po ustawieniu możesz użyć komendy `/AdminPassword [hasło]` w grze, aby dodać siebie jako admina.

:::tip
Zdecydowanie polecamy rzucić okiem na nasz [Poradnik Ustawiania Admina](palworld-admin.md), który jest dedykowany temu tematowi i zawiera bardziej szczegółowe informacje o ustawianiu hasła admina i dodawaniu użytkowników jako adminów.
:::

## Dostępne komendy

Poniższa tabela zawiera różne komendy serwera Palworld wraz z przykładami użycia i opisami, które możesz stosować w grze oraz przez konsolę serwera.

Gdy potrzebny jest parametr `steamid`, możesz łatwo skopiować SteamID gracza, klikając dwukrotnie prawym przyciskiem myszy na liście graczy.

:::info
Musisz ustawić hasło admina i nadać sobie uprawnienia za pomocą komendy `/AdminPassword`, zanim zaczniesz korzystać z tych komend. W przeciwnym razie otrzymasz błąd braku uprawnień. Przeczytaj kolejną sekcję tego poradnika, aby dowiedzieć się jak to zrobić.
:::

| Składnia komendy              | Akceptowane wartości | Opis                                                                   | 
| ---------------------------- | -------------------- | ---------------------------------------------------------------------- | 
| /Shutdown [sekundy] [wiadomość] | Liczba całkowita, Tekst | Wyłącza serwer po określonej liczbie sekund, z dołączoną wiadomością  | 
| /DoExit                      | -                    | Wymusza natychmiastowe zatrzymanie serwera                            | 
| /Broadcast                   | Tekst                | Wysyła wiadomość do wszystkich graczy aktualnie na serwerze           | 
| /KickPlayer [steamid]        | Tekst                | Wyrzuca wskazanego gracza z serwera                                   | 
| /BanPlayer [steamid]         | Tekst                | Banuje wskazanego gracza na serwerze                                  | 
| /TeleportToPlayer [steamid]  | Tekst                | Teleportuje się do wskazanego gracza                                  | 
| /TeleportToMe [steamid]      | Tekst                | Teleportuje wskazanego gracza do Ciebie                               | 
| /ShowPlayers                 | -                    | Pokazuje informacje o wszystkich aktualnie połączonych graczach       | 
| /Info                        | -                    | Pokazuje informacje o serwerze                                        | 
| /Save                        | -                    | Zapisuje aktualny stan świata                                         |

:::note
Obecnie nie możesz odwołać bana w grze, ponieważ nie ma dostępnej takiej komendy. Musisz ręcznie edytować plik `banlist.txt` w katalogu serwera, jeśli chcesz odbanować gracza.
:::

<InlineVoucher />