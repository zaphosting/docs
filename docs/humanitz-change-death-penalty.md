---
id: humanitz-change-death-penalty
title: "HumanitZ: Change Death Penalty"
description: "Discover how to Adjust the death penalty settings on your HumanitZserver → Learn more now"
sidebar_label: Change Death Penalty
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Introduction

The death penalty in HumanitZ determines what a player loses after dying. Depending on your server playstyle, you may prefer a more forgiving survival experience or a harsher system that increases tension and risk. 

<InlineVoucher />



## Configuration

The death penalty is controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameter:

```
;0=Lose nothing, 1=Lose backpack and weapon in hand, 2=Previous + pockets and backpack, 3=All previous + Equipment
OnDeath=2
```

The value after `OnDeath=` determines how much of a player's inventory is lost upon death:

- `0` – Players lose nothing  
- `1` – Players lose their backpack and the weapon currently in hand  
- `2` – Previous losses + pockets and backpack contents  
- `3` – All previous + equipped gear  

To adjust the penalty, simply change the number to your desired setting. After editing the file, save the changes and restart the server for the new setting to take effect.



## Conclusion

Congratulations! By modifying the `OnDeath` value in the `GameServerSettings.ini`, you have successfully configured the death penalty on your HumanitZ server.  For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />
