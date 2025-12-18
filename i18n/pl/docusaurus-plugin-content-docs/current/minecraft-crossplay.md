---
id: minecraft-crossplay
title: "Minecraft: Jak skonfigurować crossplay między edycjami Minecraft Java i Bedrock"
description: "Dowiedz się, jak włączyć płynny crossplay między Minecraft Java i Bedrock dzięki wtyczkom GeyserMC i Floodgate, aby ulepszyć rozgrywkę multiplayer → Sprawdź teraz"
sidebar_label: Crossplay Java & Bedrock
services:
  - gameserver-minecraft
---

## Wprowadzenie

Tradycyjnie granie razem na edycjach Minecraft Java i Bedrock nie było możliwe, ponieważ obie edycje to zupełnie osobne platformy. Na szczęście dziś możesz umożliwić crossplay, korzystając ze specjalnych wtyczek dla serwerów Java Edition, które pozwalają graczom z edycji Bedrock dołączyć do rozgrywki. W tym poradniku pokażemy, jak zainstalować i skonfigurować wtyczkę GeyserMC wraz z Floodgate, aby crossplay między obiema platformami był możliwy i prosty.

## Przygotowanie

Aby skonfigurować crossplay, potrzebujesz serwera Minecraft działającego na jednym z kompatybilnych serwerów Java. Polecamy użycie Paper, Spigot lub Bukkit – to najpopularniejsze opcje.

Powinieneś mieć gotowy serwer gier Minecraft z zainstalowaną i aktywowaną jedną z tych wersji. Jeśli potrzebujesz pomocy, sprawdź nasz [poradnik zmiany gry](gameserver-gameswitch.md).

## Instalacja

Aby rozpocząć instalację, przejdź do panelu głównego swojego serwera gier i wejdź w sekcję **Ustawienia->Wtyczki**. Na tej stronie znajdź menu rozwijane **GeyserMC** i wybierz je. Kliknij przycisk instalacji, aby automatycznie zainstalować wtyczkę na serwerze i poczekaj, aż pasek postępu się zakończy.

Zalecamy też instalację wtyczki **Floodgate**, która znajduje się w tej samej sekcji, ponieważ oferuje różne korzyści, takie jak:
- Pozwala graczom z edycji Bedrock dołączać bez konta Java.
- Umożliwia wyświetlanie skinów z Bedrock na edycji Java.
- Różne udogodnienia dla deweloperów.

:::note
Wtyczka Floodgate jest opcjonalna, ale bardzo ją polecamy, bo znacznie ułatwia crossplay dla graczy Bedrock.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

Po zainstalowaniu wtyczek przejdź do kolejnej sekcji, aby skonfigurować ustawienia.

## Konfiguracja wtyczek

W tej samej sekcji **Wtyczki** w panelu webowym kliknij niebieską ikonę ustawień obok wtyczki GeyserMC, co przeniesie Cię automatycznie do odpowiedniej części w **Ustawieniach**.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Na tej stronie możesz spersonalizować nazwę serwera i linie MOTD, które będą wyświetlane specjalnie dla graczy z edycji Bedrock.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

Przewijając na dół strony, zobaczysz też porty przypisane do Twojego serwera.

- **Game Port** to główny port serwera, którego używają klienci Java Edition.
- **Port 5** to port wykorzystywany przez wtyczkę GeyserMC, którego powinieneś używać, łącząc się z klientami Bedrock Edition.

Podczas łączenia się z serwerem upewnij się, że korzystasz z właściwego portu, zależnie od edycji Minecrafta.

:::tip
Dla klientów z opcją konfiguracji serwera **Własne IP** możliwe jest na życzenie dostosowanie portu do własnych preferencji. Możesz [skontaktować się z supportem](https://zap-hosting.com/en/customer/support/) przez ticket, aby o to poprosić.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

## Łączenie i rozwiązywanie problemów

Po skonfigurowaniu wtyczek zrestartuj serwer, aby nowe ustawienia zaczęły działać. Następnie spróbuj połączyć się z serwerem z obu edycji gry, aby upewnić się, że wszystko działa poprawnie.

Pamiętaj, aby używać właściwych portów w zależności od edycji gry: **Port 5** dla graczy Bedrock oraz **Game Port** dla graczy Java, które znajdziesz w zakładce **Ustawienia**. Możesz też zobaczyć je, najeżdżając kursorem na ikonę informacji na panelu głównym webowego panelu.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

Po udanym połączeniu będziesz mógł swobodnie grać crossplay między obiema edycjami.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Jeśli masz problemy z połączeniem, spróbuj poniższych kroków, które pomogą rozwiązać najczęstsze problemy.

#### Klient nieaktualny - serwer nieaktualny

Ten błąd oznacza, że wersje gry na serwerze i kliencie się nie zgadzają. Jeśli masz ten problem na edycji Java, po prostu zmień wersję gry w launcherze na właściwą.

Niestety, w edycji Bedrock nie można łatwo zmieniać wersji gry. Jeśli więc masz ten problem na kliencie Minecraft Bedrock, upewnij się, że zarówno aplikacja, jak i serwer są zaktualizowane do najnowszych wersji.

Polecamy też użycie wtyczek ViaVersion i ViaBackwards, które rozszerzają zakres wersji gry, z których można się połączyć z serwerem. Podobnie jak wcześniej, przejdź do sekcji **Wtyczki** w panelu webowym i w menu rozwijanym **Wszystkie wtyczki** znajdź **ViaVersion** i **ViaBackwards**. Kliknij zieloną ikonę pobierania, aby zainstalować je na serwerze.

:::note
Jeśli masz problem z instalacją wtyczki przez panel webowy, możliwe, że wtyczka nie ma stabilnej najnowszej wersji. W takim wypadku polecamy ręczne pobranie wersji beta ze strony i przesłanie jej przez FTP. Więcej o tym przeczytasz w naszym [poradniku dostępu FTP](gameserver-ftpaccess.md).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

Po instalacji wtyczek spróbuj ponownie się połączyć – teraz powinno to działać z szerszą gamą wersji gry.

#### Nie można połączyć się ze światem

Najczęstszą przyczyną tego błędu jest użycie złego portu podczas dodawania serwera w kliencie. Upewnij się, że używasz portu z **Port 5** w sekcji **Ustawienia** panelu webowego serwera, jeśli łączysz się z edycji Bedrock. Dla klientów Java Edition używaj głównego portu **Game Port**.

Jeśli problem nadal występuje, sprawdź plik konfiguracyjny wtyczki GeyserMC, czy porty zostały poprawnie ustawione. Przejdź do sekcji **Konfiguracje** w panelu webowym i otwórz plik `plugins/Geyser-[twoj_typ_serwera]/config.yml` klikając niebieski przycisk edycji.

W tym pliku znajdź parametry `port` w sekcjach `bedrock` i `remote`. Upewnij się, że port bedrock jest ustawiony na wartość z **Port 5** w **Ustawieniach**, a port remote to **25565** lub wartość **Game Port**.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś wtyczkę GeyserMC na swoim serwerze Minecraft, co umożliwiło crossplay między edycjami Java i Bedrock! W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem supportu, który jest dostępny codziennie, by Ci pomóc! 🙂