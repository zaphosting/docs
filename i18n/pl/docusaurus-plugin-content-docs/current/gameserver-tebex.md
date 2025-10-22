---
id: gameserver-tebex
title: 'Serwer gier: konfiguracja monetyzacji Tebex'
description: "Dowiedz się, jak monetyzować swój serwer gier za pomocą Tebex i zwiększyć przychody ze sprzedaży w grze oraz rang → Sprawdź teraz"
sidebar_label: Monetyzacja Tebex
services:
  - gameserver
---

import Card from '@site/src/components/Card/Card';
import Cards from '@site/src/components/Cards/Cards';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Tebex to platforma, która pozwala monetyzować Twój serwer gier i zarabiać prawdziwe pieniądze 
na przedmiotach w grze, rangach i wielu innych. Platforma oferuje profesjonalny sklep internetowy, w którym możesz sprzedawać towary i śledzić wyniki swojego sklepu. Odwiedź [tebex.io](https://affiliate.tebex.io/r/690a6731-fee1-4054-84e1-30c26729403a), aby dowiedzieć się więcej o działaniu.

<InlineVoucher />

## Obsługiwane gry

Tebex wspiera następujące gry, które również oferujemy w ramach naszego produktu serwera gier. Po więcej informacji i innych dostępnych grach polecamy zajrzeć na oficjalną [stronę](https://www.tebex.io/game-servers).

<Cards>
  <Card title="ARK" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/ark" image="https://screensaver01.zap-hosting.com/index.php/s/qnWELD8ik9srBDG/preview"/>
  <Card title="CS:GO" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/csgo" image="https://screensaver01.zap-hosting.com/index.php/s/RojGnj9TcpGSdzm/preview"/>
  <Card title="Minecraft" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/minecraft" image="https://screensaver01.zap-hosting.com/index.php/s/e6BtaFzTZ7czqXy/preview"/>
  <Card title="FiveM" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/fivem" image="https://screensaver01.zap-hosting.com/index.php/s/PQKfzYiMAmSjXNz/preview"/>
  <Card title="Hurtworld" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/hurtworld" image="https://screensaver01.zap-hosting.com/index.php/s/EJpzMG9gHL4fe5W/preview"/>
  <Card title="Rust" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/rust" image="https://screensaver01.zap-hosting.com/index.php/s/G82jnYsbexscj5W/preview"/>
  <Card title="Space Engineers" description="Placeholder" link="https://zap-hosting.com/guides/docs/spaceengineers-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/wgp2Jofo2BTkcR9/preview"/>
  <Card title="Team Fortress 2" description="Placeholder" link="https://zap-hosting.com/guides/docs/tf2-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/PPRN8qRJDBjEzmG/preview"/>
  <Card title="Unturned" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/7-days-to-die" image="https://screensaver01.zap-hosting.com/index.php/s/GTxekqqTxQyttDS/preview"/>
  <Card title="Garry's Mod" description="Placeholder" link="https://zap-hosting.com/guides/docs/gmod-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/LddW8FyQ2ZKKTzN/preview"/>
</Cards>

## Podłączanie Tebex

Konfiguracja Tebex z ZAP jest bardzo prosta. Instalacja i konfiguracja wymagają tylko kilku kroków, które opisujemy szczegółowo poniżej.

### Wybierz obsługiwaną grę

Wybierz grę obsługiwaną przez Tebex i dodaj ją do swojego serwera gier. Kliknij na swój serwer gier i wybierz `Gry` w pasku bocznym. Wybierz obsługiwaną grę w sekcji `Dostępne gry` i kliknij przycisk pobierania, aby ją zainstalować.

### Poproś o zaproszenie do Tebex

Jeśli wybrana gra obsługuje Tebex, zobaczysz zakładkę „Sklep Tebex” w pasku bocznym. Kliknij na obrazek, który pojawi się po załadowaniu strony.

![](https://screensaver01.zap-hosting.com/index.php/s/SztAWeeNX8fx5kF/preview)

Tebex wyśle teraz zaproszenie na adres e-mail powiązany z Twoim kontem klienta ZAP-Hosting. Postępuj zgodnie z instrukcjami w mailu, aby aktywować konto Tebex. Przejdziesz przez podstawową konfigurację swojego sklepu.

### Zainstaluj wtyczkę Tebex

Proces ten jest zazwyczaj zautomatyzowany. Jeśli nie mamy wtyczki do automatycznej konfiguracji na naszych serwerach lub jeśli brakuje potwierdzenia pingback od Tebex, będziesz musiał wykonać konfigurację ręcznie.

### Skonfiguruj wtyczkę Tebex

Zainstaluj odpowiednią wtyczkę serwera gier dla swojej gry ręcznie. Proces konfiguracji różni się w zależności od gry. Podstawowe instrukcje instalacji wtyczek znajdziesz [tutaj](https://docs.tebex.io/store/integrating-with-your-game-server-or-website/minecraft-java-edition).

## Sprawdź połączenie z Tebex

Na koniec musisz potwierdzić, że poprawnie zainstalowałeś wtyczkę serwera gier.

![](https://screensaver01.zap-hosting.com/index.php/s/DkDtPMtij2QTKGS/preview)

W niektórych przypadkach może być konieczne podanie klucza API wtyczki Tebex webstore, aby nawiązać połączenie między ZAP a Twoim sklepem Tebex. Po poprawnym połączeniu zobaczysz potwierdzenie:
![](https://screensaver01.zap-hosting.com/index.php/s/4YS2SwHfSTgn4DE/preview)

## Podsumowanie

Pomyślnie połączyłeś Tebex ze swoim serwerem gier. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂

<InlineVoucher />