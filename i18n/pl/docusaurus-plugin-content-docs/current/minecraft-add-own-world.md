---
id: minecraft-add-own-world
title: "Minecraft: Dodawanie własnego świata na serwer"
description: "Dowiedz się, jak przesłać i skonfigurować własne światy Minecraft na swoim serwerze, aby mieć spersonalizowaną rozgrywkę → Sprawdź teraz"
sidebar_label: Dodaj własny świat
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Chcesz użyć własnego świata lub świata pobranego z internetu na swoim serwerze? Trafiłeś idealnie! Wszystko, czego potrzebujesz, to Twój świat i klient FTP. Jeśli nie wiesz, czym jest klient FTP i jak go używać, zerknij na ten poradnik: [Dostęp przez FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="Jak przesłać własne MAPY na swój serwer Minecraft" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

Gdy połączenie z serwerem przez FTP zostanie nawiązane, możesz zacząć konfigurować swój własny świat. Najpierw musisz przejść do odpowiedniego katalogu, gdzie znajduje się aktualny świat. Znajdziesz go w katalogu: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

Nowy świat trzeba teraz przesłać do tego katalogu. Możesz usunąć i zastąpić stary folder **world** lub przesłać nowy świat pod inną nazwą. W tym przykładzie przesyłamy świat pod nową nazwą:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Teraz wystarczy skonfigurować nowo przesłany świat w pliku **server.properties**. Znajdziesz go w **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Tam musisz zmienić wartość polecenia **level-name=**:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

Po restarcie serwera nowy świat powinien zostać załadowany. Miłej zabawy w nowym świecie! 🙂

<InlineVoucher />

<InlineVoucher />