---
id: voiceserver-query
title: "Serwer głosowy: Dostęp do TeamSpeak Query"
description: "Dowiedz się, jak zarządzać swoim serwerem TeamSpeak zdalnie za pomocą Query Login, aby efektywnie kontrolować i administrować serwerem → Sprawdź teraz"
sidebar_label: Logowanie Query
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Logowanie Query w TeamSpeak pozwala na dostęp do interfejsu serwera query, gdzie możesz zdalnie zarządzać swoim serwerem TeamSpeak za pomocą komend.

:::warning Dostęp Server Admin Query
Nasze produkty serwerów TeamSpeak nie zawierają dostępu Server Admin Query. 
:::

<InlineVoucher />

## Dane do logowania

<Tabs>
<TabItem value="Webinterface" label="Produkt serwera TeamSpeak" default>

Ze względów bezpieczeństwa, logowanie **Server Admin Query** nie jest dostępne w **produkcie serwera TeamSpeak**. Jeśli jednak masz prawa administratora na swoim serwerze TeamSpeak, możesz stworzyć własne logowanie Query wykonując poniższe kroki.

:::info
Funkcje takie jak import snapshot, zmiana slotów/portów i podobne nie są dostępne. Te ustawienia są przez nas zdefiniowane i nie można ich zmieniać ręcznie. 
:::

Aby stworzyć własne logowanie Query, kliknij w Teamspeak Client na „Server Query Login” w zakładce Narzędzia.
Następnie wpisz nazwę dla logowania, która będzie też nazwą użytkownika, np. „MyQueryLogin”:

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

Po zatwierdzeniu przyciskiem „OK” pojawi się hasło. Musisz je zapisać, ponieważ nie da się go później zmienić.

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)

Dzięki tym danym logowania możesz połączyć się np. przez [YaTQA](https://yat.qa). Do tego potrzebujesz adresu IP serwera, portu Query, portu serwera oraz nazwy i hasła logowania Query.

Adres IP serwera, port Query i port serwera znajdziesz w panelu głównym w interfejsie webowym:

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/serwer dedykowany)">

Jeśli serwer Teamspeak został zainstalowany na Twoim własnym VPS lub serwerze dedykowanym przez panel webowy, możesz użyć standardowego „Server Admin Query”. Dane do logowania znajdziesz w panelu webowym instancji Teamspeak.

</TabItem>
</Tabs>

## Dostęp do Query

Wprowadź podane lub własnoręcznie utworzone dane logowania Query w sekcji Quick Connect w aplikacji **YatQA**, a następnie kliknij przycisk **Połącz**.

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Błąd niestandardowego portu Query
Domyślnie po pierwszej instalacji, jeśli podasz port inny niż domyślny port query, pojawi się błąd. To normalne i można to rozwiązać w następujący sposób:

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Podsumowanie

Pomyślnie połączyłeś się z Query za pomocą YatQA. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />