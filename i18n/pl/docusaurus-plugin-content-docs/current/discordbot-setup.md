---
id: discordbot-setup
title: Skonfiguruj swojego bota Discord
description: "Dowiedz się, jak uruchamiać i zarządzać botami Discord do moderacji, muzyki, giveawayów i nie tylko, korzystając z bezproblemowego wynajmu serwerów → Sprawdź teraz"
sidebar_label: Konfiguracja
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie

**Serwer bota Discord** pozwala Ci na płynne i ciągłe uruchamianie Twoich botów Discord. Boty te mogą wykonywać różne zadania, takie jak automatyczna moderacja kanału Discord, odtwarzanie muzyki, organizowanie giveawayów i ankiet oraz wiele więcej.

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="Jak skonfigurować serwer bota Discord i przesłać pliki bota!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />



## Obsługiwane języki

Boty Discord można programować w różnych językach. Nasz produkt obsługuje boty Discord napisane w jednym z następujących języków programowania:

- Java
- Python
- NodeJS

  
  

## Przygotowanie



### Pozyskaj bota

Na początek potrzebujesz w pełni działającego bota Discord. Możesz go stworzyć samodzielnie lub pobrać gotowego bota z internetu. Zapisz go na swoim komputerze, aby łatwo przesłać go później na swój serwer.

### Prześlij pliki

Pliki Twojego bota Discord muszą zostać przesłane. Można to zrobić za pomocą FTP. Jeśli nie wiesz, jak korzystać z FTP, polecamy zapoznać się z [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md) z dokładnymi instrukcjami.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Po otwarciu folderu możesz po prostu przesłać pliki bota do pustego folderu:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Konfiguracja

Aby móc uruchomić bota przez panel główny, bot musi być skonfigurowany w panelu bota Discord na stronie **Ustawienia**.

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Tam musisz teraz ustawić, w jakim języku programowania bot jest napisany oraz jak nazywa się jego główny plik. W tym przykładzie używany jest Python 3, a nazwa pliku do uruchomienia to `main.py`.

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Zależności
Boty Discord często zawierają dodatkowe zależności potrzebne do działania. Upewnij się, że wszystkie są obecne i poprawnie skonfigurowane w bocie Discord. Są one określone w następujących plikach:

- Python: zależności w `requirements.txt`.
- Node.js: zależności w `package.json`.
- Java: zależności w `pom.xml` (Maven) lub `build.gradle` (Gradle).

:::



## Testowanie działania

Po zapisaniu ustawień, bota można po prostu uruchomić za pomocą zielonego przycisku startu na górze strony. W konsoli na żywo możesz sprawdzić, czy bot uruchomił się poprawnie.



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś swojego bota Discord. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂






<InlineVoucher />