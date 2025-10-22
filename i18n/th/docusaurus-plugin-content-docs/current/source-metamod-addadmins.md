---
id: source-metamod-addadmins
title: เป็นแอดมินเซิร์ฟเวอร์
description: "ค้นหาวิธีการเป็นแอดมินโดยการรับ Steam ID ของคุณและตั้งค่าสิทธิ์สำหรับการจัดการเซิร์ฟเวอร์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เป็นแอดมิน
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## เป็นแอดมิน

ถ้าจะลงทะเบียนเป็นแอดมิน การติดตั้ง Source- / Metamod เป็นสิ่งจำเป็น

นอกจากนี้คุณต้องมี Steam ID ของบัญชี Steam ของคุณ มีหลายวิธีในการรับ Steam ID นี้ คุณสามารถใช้เว็บไซต์ภายนอกที่ให้บริการนี้ หรือใช้คอนโซลในเกมก็ได้

<InlineVoucher />

### SteamID ผ่านเว็บไซต์

อันดับแรก ให้เปิดโปรไฟล์ใน Steam แล้วคลิกขวาที่ไหนก็ได้ในโปรไฟล์ จากนั้นก็สามารถคัดลอก URL ของโปรไฟล์ Steam ได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

หลังจากนั้น ให้นำ URL นี้ไปใส่ในเว็บไซต์เหล่านี้:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

หลังจากนั้นคุณจะได้รับ Steam ID พร้อมกับข้อมูลบัญชีทั่วไป โดยที่ **Steam ID 32** คือสิ่งที่ต้องใช้:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID ผ่านคอนโซลในเกม

เริ่มเกมและเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ เปิดคอนโซลในเกมแล้วใช้คำสั่ง 'status' คุณจะเห็นผลลัพธ์ดังนี้:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### การตั้งค่า Config

ถัดไป ให้เชื่อมต่อกับเซิร์ฟเวอร์อีกครั้งผ่าน FTP แล้วเปิดไฟล์ config ชื่อ admins.cfg ซึ่งอยู่ในโฟลเดอร์ addons/sourcemod/configs

ไฟล์นี้จะมีตัวอย่างการใส่ข้อมูลแอดมินอยู่แล้ว คุณสามารถคัดลอกแล้วแก้ไขตามนี้ได้เลย:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

**player name** ไม่จำเป็นต้องตรงกับชื่อบัญชี Steam ใช้เพื่อดูภาพรวมใน Config เท่านั้น ส่วน 'auth' คือการยืนยันตัวตน ซึ่งในที่นี้กำหนดเป็น Steam อยู่แล้ว ไม่ต้องแก้ไข ส่วน `identity` ใส่ SteamID32 ของบัญชี Steam และ `flags` คือสิทธิ์ที่ให้ มีระดับสิทธิ์ต่าง ๆ ดังนี้


| สิทธิ์ | ธง | การใช้งาน |
| ------------|:----:|:--------:|
| reservation | a || จองช่อง |
| generic | b | พื้นฐาน (จำเป็น) |
| kick | c || เตะผู้เล่น |
| ban | d || แบนผู้เล่น |
| unban | e || ปลดแบนผู้เล่น |
| slay | f || ฆ่าหรือทำให้ผู้เล่นตาย |
| changemap | g | เปลี่ยนแมพ |
| cvar | h | เปลี่ยนค่าต่าง ๆ ของเซิร์ฟเวอร์ |
| config | i | รันการตั้งค่าเซิร์ฟเวอร์ |
| chat | j | สิทธิ์แชทขั้นสูง |
| vote | k | โหวตของแอดมิน |
| password | l || ตั้งรหัสผ่านเซิร์ฟเวอร์ |
| rcon | m | รันคำสั่ง RCON |
| cheats | n | เปิดใช้งาน sv_cheats ในเกม |
| root | z | สิทธิ์เต็มรูปแบบ |


ขึ้นอยู่กับสิทธิ์ที่ต้องการจะให้ สามารถเขียนธงสิทธิ์ต่อกันได้เลย เช่น ถ้าอยากให้แค่เตะผู้เล่น ก็ใส่ธง 'b' กับ 'c' แต่ถ้าอยากให้สิทธิ์เต็มที่ ก็แค่ใส่ธง `z` ก็พอ

### การใช้เมนูแอดมิน

ใช้คำสั่ง 'admin' ในแชท หรือ 'sm_admin' ในคอนโซลเพื่อเรียกเมนูแอดมิน

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />