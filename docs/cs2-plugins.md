---
id: cs2-plugins
title: "CS2: Installation of plugins"
description: "Explore the evolving landscape of CS2 plugins and community projects to enhance your Counter-Strike experience → Learn more now"
sidebar_label: Install plugins
services:
  - gameserver-cs2
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs2-plugins.json';



## Introduction

Counter-Strike 2 continues the long tradition of community driven server customization. Plugins allow server owners to extend gameplay, add quality of life features, implement custom rulesets, or build entirely new game modes.

With the transition to Source 2, the plugin ecosystem has changed significantly. For CS2, **CounterStrikeSharp** has established itself as the primary and actively maintained framework for server side plugin development.

<InlineVoucher />



## Installing Metamod:Source

Metamod must be installed first, as CounterStrikeSharp depends on it. After downloading the [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), extract the archive. Inside the archive, you will find an `addons` directory. This directory must be uploaded directly into the CS2 game directory via [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

After copying the files, locate the file `gameinfo.gi` inside `/game/csgo/`. Open this file with a text editor. Inside the file, find the line that contains `Game_LowViolence csgo_lv`. Directly below this line, add the following entry:

```
Game csgo/addons/metamod
```

<Button label="Download Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Installing CounterStrikeSharp

Once Metamod is confirmed to be running, CounterStrikeSharp can be installed. CounterStrikeSharp is distributed through its official GitHub repository and provided as a precompiled release package. Download the CounterStrikeSharp release that includes the runtime. Extract the archive and copy the included `addons` directory into the same CS2 game directory via [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Do not merge or rename directories manually. The structure provided by the archive must remain intact. After uploading the files, restart the server again. During startup, CounterStrikeSharp will be loaded by Metamod automatically. To verify the installation, open the server console and run:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Download CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Installing Plugins

Plugins for CounterStrikeSharp are provided as compiled `.dll` files. These files are placed into the `plugins` directory within the CounterStrikeSharp installation path.

After copying a plugin into this directory and restarting the server, CounterStrikeSharp automatically loads all available plugins. If a plugin fails to load, the server logs should be checked for error messages related to CounterStrikeSharp or the plugin itself.




## Popular Plugins

<SearchableItemList items={items} />



## Conclusion

Provided you have followed all the steps, you should have successfully installed Metamod/CounterStrikeSharp and your desired plugins. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂




<InlineVoucher />
