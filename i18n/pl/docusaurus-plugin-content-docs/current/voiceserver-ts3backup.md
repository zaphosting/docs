---
id: voiceserver-ts3backup
title: "Serwer głosowy: Tworzenie, pobieranie i importowanie kopii zapasowych"
description: "Dowiedz się, jak łatwo tworzyć i zarządzać kopiami zapasowymi z darmową przestrzenią i opcjami upgrade dla bezpiecznej ochrony danych → Sprawdź teraz"
sidebar_label: Kopie zapasowe
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Oferujemy możliwość tworzenia indywidualnych kopii zapasowych za jednym kliknięciem. Dzięki temu możesz łatwo i bez wysiłku tworzyć kopie zapasowe oraz importować je w dowolnym momencie później. Wszystkie kopie zapasowe są przechowywane na Twoim serwerze storage, który domyślnie zawiera 10 GB darmowej przestrzeni. Jeśli potrzebujesz więcej, możesz wykupić upgrade do Premium Storage.

<InlineVoucher />

## Tworzenie kopii zapasowych

<Tabs>

<TabItem value="Webinterface" label="Produkt serwera TeamSpeak" default>

Aby utworzyć kopię zapasową na naszej stronie, musisz otworzyć swój serwer głosowy w panelu administracyjnym i przejść do zakładki **Snapshots**. Następnie kliknij zielony przycisk **Create snapshot**, aby utworzyć kopię zapasową.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning Kopie zewnętrzne
Import zewnętrznych kopii zapasowych (snapshotów) nie jest możliwy ze względów bezpieczeństwa. Wyjątki nie są przewidziane.
:::

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/serwer dedykowany)">

Podobnie jak w produkcie serwera TeamSpeak, jeśli korzystasz z interfejsu GS/TS3, możesz utworzyć kopię zapasową (snapshot) jednym kliknięciem w panelu administracyjnym serwera TeamSpeak. Możesz też zrobić to ręcznie, używając danych logowania do instancji TeamSpeak (Query) oraz zewnętrznej aplikacji YatQA.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

Aby utworzyć snapshot w YatQA, przejdź do **Miscellaneous** na górze aplikacji, a następnie kliknij **Create and save snapshot**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Pobieranie kopii zapasowych

Utworzone kopie zapasowe (snapshoty) możesz pobrać ze swojego serwera storage przez FTP. Dane logowania znajdziesz w panelu administracyjnym usługi serwera storage. Jeśli nie wiesz, jak korzystać z FTP, polecamy nasz ogólny [poradnik FTP access](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Podsumowanie

Jeśli wykonałeś wszystkie powyższe kroki, pomyślnie utworzyłeś kopię zapasową. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />