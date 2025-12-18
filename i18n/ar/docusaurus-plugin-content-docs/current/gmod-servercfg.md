---
id: gmod-servercfg
title: "Garry's Mod: إعدادات Server.cfg"
description: "خصص إعدادات سيرفر ألعاب Garry's Mod لتعديل طريقة اللعب وحدود الظهور لتجربة محسّنة → تعلّم المزيد الآن"
sidebar_label: تعديل Server.cfg في Garry's Mod
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## عدّل ملف server.cfg الخاص بسيرفرك في Garry's Mod.

لتغيير ملف server.cfg مباشرة من خلال واجهة الويب، نذهب إلى تبويب Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

بعدها نفتح ملف server.cfg في محرر الإعدادات المدمج.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

أنت الآن في محرر الإعدادات الخاص بنا، هنا يمكنك تعديل جميع المتغيرات كما تريد، فقط تأكد من عدم خلط الإعدادات بين تبويب الإعدادات وملف server.cfg لأن هذا قد يؤثر على: اسم المضيف، كلمة مرور rcon، وكلمة مرور sv.

المتغيرات الممكن تعديلها لتخصيص سيرفر ألعاب Garry's Mod الخاص بك:

إعدادات الظهور:
```
sbox_maxprops 150		//يحدد الحد الأقصى للأشياء التي يمكن للاعب امتلاكها.
sbox_maxragdolls 10		//يحدد الحد الأقصى للدمى التي يمكن للاعب امتلاكها.
sbox_maxballoons 10		//يحدد الحد الأقصى للبالونات التي يمكن للاعب امتلاكها.
sbox_maxeffects 10		//يحدد الحد الأقصى للتأثيرات التي يمكن للاعب امتلاكها. (حساس لأداء FPS)
sbox_maxdynamite 10		//يحدد الحد الأقصى للديناميت الذي يمكن للاعب امتلاكه.
sbox_maxlamps 10		//يحدد الحد الأقصى للمصابيح التي يمكن للاعب امتلاكها.
sbox_maxthrusters 10	//يحدد الحد الأقصى للدافعات التي يمكن للاعب امتلاكها.
sbox_maxwheels 10		//يحدد الحد الأقصى للعجلات التي يمكن للاعب امتلاكها.
sbox_maxnpcs 10			//يحدد الحد الأقصى للـ NPCs التي يمكن للاعب امتلاكها.
sbox_maxhoverballs 10	//يحدد الحد الأقصى للكرات الطائرة التي يمكن للاعب امتلاكها.
sbox_maxvehicles 10		//يحدد الحد الأقصى للمركبات التي يمكن للاعب امتلاكها.
sbox_maxbuttons 10		//يحدد الحد الأقصى للأزرار التي يمكن للاعب امتلاكها.
```

إعدادات اللعبة:
```
sbox_plpldamage 0 / 1	//0 = تعطيل PVP، 1 = تفعيل PVP
sbox_godmode	0 / 1	//0 = إيقاف، 1 = تفعيل (وضع الله لجميع اللاعبين)
sbox_noclip		0 / 1	//0 = تعطيل النوكليب، 1 = تفعيل النوكليب
sv_noclipaccelerate 3	//يغير سرعة النوكليب.
sv_alltalk 1			//إذا مفعّل، يمكنك سماع كل اللاعبين على السيرفر.
```

إعدادات متعلقة بالشبكة (لا يُنصح بالتغيير)
```
sv_minrate 0			//أدنى سرعة اتصال
sv_maxrate 10000		//أعلى سرعة اتصال
sv_minupdaterrate 10	//أدنى معدل تحديث
sv_maxupdaterrate 66	//أعلى معدل تحديث
net_maxfilesize	64		//أكبر حجم ملف يمكن نقله بدون FastDL.
sv_lan 0				//يجعل اللعبة لعبة أونلاين.
sv_region 3				//0+1 = أمريكا، 2 = جنوب أفريقيا، 3 = أوروبا، 4 = آسيا، 5 = أستراليا، 6 = الشرق الأوسط، 7 = أفريقيا، 255 = عالمي
```

إذا عدّلت كل شيء كما تريد، فقط احفظ التغييرات.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

بعد إعادة تشغيل السيرفر، تصبح كل التغييرات فعالة.

<InlineVoucher />