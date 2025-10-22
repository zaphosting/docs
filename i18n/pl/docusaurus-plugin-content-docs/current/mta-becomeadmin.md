---
id: mta-becomeadmin
title: "Multi Theft Auto: Zostań administratorem na serwerach MTA"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i sprawnie zarządzać grą → Sprawdź teraz"
sidebar_label: Zostań administratorem
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

### Przygotowanie

Na początek trzeba utworzyć konto użytkownika, któremu później zostaną nadane prawa admina. W tym celu musisz wykonać następujące polecenie w Konsoli Live:

```
addaccount [options] <PASSWORD>
```

Konsola Live znajduje się w panelu głównym serwera gier w interfejsie, gdy serwer jest uruchomiony. Wygląda to tak:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Konfiguracja

Gdy konto zostanie utworzone, należy dodać je do grupy Admin w pliku konfiguracyjnym **acl.xml**. W tym celu łączymy się z serwerem przez FTP i otwieramy ten plik. Znajduje się on w katalogu **gXXXX/gtamta/mods/deathmatch/**. Jeśli nie wiesz jeszcze, czym jest klient FTP i jak go używać, zerknij na ten poradnik: [Dostęp do plików przez FTP](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

Musisz tam dodać obiekt użytkownika, aby przypisać konto do grupy Admin:

```
<object name="user.BENUTZERNAME"></object>
```

Zamiast nazwy użytkownika wpisujesz swoją własną nazwę. Efekt powinien wyglądać tak:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### Logowanie jako admin

Po zakończeniu konfiguracji pliku **acl.xml** możesz uruchomić grę/serwer i połączyć się z serwerem. Następnie zaloguj się za pomocą polecenia:

```
login USERNAME PASSWORD
```

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />