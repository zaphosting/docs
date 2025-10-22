---
id: source-metamod-addadmins
title: كن أدمن على السيرفر
description: "اكتشف كيف تصبح أدمن عن طريق الحصول على Steam ID الخاص بك وضبط الصلاحيات لإدارة السيرفر → تعلّم المزيد الآن"
sidebar_label: كن أدمن
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## كن أدمن

لكي تتمكن من التسجيل كأدمن، من الضروري تثبيت Source- / Metamod.

بالإضافة إلى ذلك، تحتاج إلى Steam ID الخاص بحساب Steam الخاص بك. هناك عدة طرق للحصول عليه. إما باستخدام موقع خارجي يقدم هذه الخدمة أو باستخدام كونسول اللعبة.

<InlineVoucher />

### SteamID عبر الموقع

أولاً، يجب فتح الملف الشخصي في Steam ثم النقر بزر الفأرة الأيمن في أي مكان داخل الملف الشخصي. هناك يمكنك نسخ رابط Steam الخاص بالملف الشخصي.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

بعدها يمكن إدخال الرابط في أحد المواقع التالية:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

بعدها ستحصل على Steam ID بالإضافة إلى معلومات الحساب العامة. هنا تحتاج إلى **Steam ID 32**:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID عبر كونسول اللعبة

شغّل اللعبة واتصل بسيرفرك. بفتح كونسول اللعبة واستخدام أمر 'status' ستحصل على النتيجة التالية:

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

### الإعداد

بعدها، اتصل بالسيرفر عبر FTP وافتح ملف الإعدادات admins.cfg. ستجده في المسار التالي: addons/sourcemod/configs

الملف يحتوي بالفعل على مثال لكيفية كتابة إدخال أدمن. يمكنك نسخه ثم تعديله كما يلي:

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

يجب أن يكون **اسم اللاعب** **مختلفًا** عن اسم حساب Steam. يستخدم فقط للعرض داخل ملف الإعدادات. الإدخال 'auth' يعني التوثيق، وهنا Steam ثابت فلا تحتاج تغييره. تحت `identity` تدخل SteamID32 الخاص بالحساب. أما `flags` فهي الصلاحيات. هناك مستويات مختلفة من الصلاحيات.

| الصلاحية | العلامة | الاستخدام |
| ------------|:----:|:--------:|
| الحجز | a || حجز مكان |
| عام | b | الأساسيات (ضروري) |
| طرد | c || طرد اللاعبين |
| حظر | d || حظر اللاعبين |
| فك الحظر | e || رفع الحظر عن اللاعبين |
| قتل | f || قتل اللاعبين |
| تغيير الخريطة | g | تبديل الخرائط |
| cvar | h | تغيير قيم السيرفر |
| config | i | تشغيل إعدادات السيرفر |
| دردشة | j | صلاحيات دردشة متقدمة |
| تصويت | k | تصويتات الأدمن |
| كلمة مرور | l || تعيين كلمة مرور للسيرفر |
| rcon | m | تنفيذ أوامر RCON |
| غش | n | تفعيل sv_cheats داخل اللعبة |
| root | z | وصول كامل |

حسب الصلاحيات التي تريد تعيينها، تكتب العلامات المطلوبة بجانب بعضها. مثلاً، إذا أردت فقط صلاحية الطرد، تعطي العلامتين 'b' و 'c'. أما إذا أردت وصول كامل، فتكفي العلامة `z` فقط.

### استخدام قائمة الأدمن

يمكنك فتح القائمة بأمر 'admin' في الدردشة أو 'sm_admin' في الكونسول.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />