---
id: vserver-linux-create-gameservice
title: "VPS: إعداد سيرفر ألعاب مخصص كخدمة لينكس"
description: "اكتشف كيفية إنشاء وإدارة خدمات لينكس لسيرفرات الألعاب المخصصة لضمان التشغيل التلقائي وسهولة الصيانة → تعلّم المزيد الآن"
sidebar_label: إعداد خدمة لينكس
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

الخدمات جزء أساسي من لينكس وتشير إلى عملية أو تطبيق يعمل في الخلفية، سواء كانت مهمة محددة مسبقًا أو مهمة تعتمد على حدث معين. هذا يوفر فوائد متعددة مثل تشغيل السيرفر تلقائيًا عند الإقلاع، تحديث السيرفر تلقائيًا، سهولة الإدارة والوصول إلى السجلات، وأكثر من ذلك! في هذا الدليل، سنستعرض كيفية إنشاء خدمة لسيرفر ألعاب مخصص خاص بك.

<InlineVoucher />

## التحضير

أولًا، اتصل بـ VPS الخاص بك عبر SSH. استخدم دليلنا [الوصول الأولي عبر SSH](vserver-linux-ssh.md) إذا كنت بحاجة لمساعدة في ذلك.

يجب أيضًا أن تتبع أحد أدلة سيرفرات الألعاب المخصصة في هذا القسم لتثبيت وإعداد سيرفر ألعاب على نظام لينكس الخاص بك. في هذا الدليل، سنستخدم [سيرفر Palworld المخصص](vserver-linux-palworld.md) كمثال، لكن التعليمات يمكن تعديلها لتناسب جميع أدلتنا.

## إنشاء خدمة

ابدأ بإنشاء ملف خدمة جديد لسيرفر الألعاب المخصص الذي قمت بإعداده. استبدل `[your_game]` بالاسم الذي تختاره. ننصح باستخدام اسم اللعبة للحفاظ على التنظيم، لذلك سنستخدم `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## إعداد الخدمة

مع فتح محرر nano، انسخ محتويات الملف الأساسية التالية، وهي قالب ملف خدمة يمكنك إعادة استخدامه. لدينا نسختان، واحدة للأدلة التي تستخدم SteamCMD وأخرى للألعاب التي لا تستخدم SteamCMD.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="لعبة SteamCMD" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="لعبة عادية">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

دعنا نشرح محتويات الملف لفهم كل شيء.
- `Description`: يمكن أن يكون أي شيء، مفيد لتمييز هدف الخدمة بسهولة.
- `User`: باستخدام أدلتنا، يجب أن تكون قد أنشأت مستخدمًا منفصلًا `steam` لاستخدام SteamCMD، أو مستخدم `gameservers` للألعاب غير المعتمدة على SteamCMD. إذا لم يكن كذلك، يجب تعيين هذا إلى المستخدم الذي سيشغل الخدمة.
- `WorkingDirectory`: هذا هو المسار إلى الدليل الرئيسي الذي يحتوي على كل ما تحتاجه الخدمة.
- `ExecStartPre` (خاص بـ SteamCMD فقط): في هذا الحقل، نقوم بإعداد أمر تثبيت SteamCMD نفسه كما في السابق، والذي سيعمل في كل مرة يعاد فيها تشغيل السيرفر لضمان تحديثه. يجب نسخ هذا من دليل سيرفر الألعاب المخصص الخاص باللعبة، أو استبدال القيم يدويًا بقيم اللعبة.
- `ExecStart`: هذا الحقل يحدد المهمة المحددة مسبقًا التي يجب تشغيلها مع الخدمة. مرة أخرى، يجب نسخ المسار من دليل سيرفر الألعاب المخصص، أو استبدال القيم يدويًا للوصول إلى ملف البداية.

:::important طبقة التوافق Wine
للألعاب التي تتطلب طبقة التوافق **Wine** لتشغيلها، يجب تضمين أوامر **xvfb-run** و **wine** داخل معلمة `ExecStart`. كمثال لـ V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

يرجى أيضًا التأكد من أن أمر تثبيت SteamCMD في `ExecStartPre` يتضمن معلمة `+@sSteamCmdForcePlatformType` إذا لزم الأمر لفرض نسخة المنصة.
:::

بعد تعديل جميع القيم لتناسب سيرفر الألعاب المخصص الخاص بك، يمكنك حفظ الملف والخروج من nano باستخدام `CTRL + X`، ثم `Y` للتأكيد وأخيرًا `ENTER`.

باستخدام مثال Palworld، سيكون ملفنا كالتالي:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## إدارة الخدمة

بعد إنشاء ملف الخدمة، ستحتاج إلى تفعيلها. باستخدام مثال `palworld.service`، استبدل `[your_service]` بـ `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
إذا قمت بأي تغييرات على ملف الخدمة في أي وقت، تأكد من تشغيل `systemctl daemon-reload` بعدها لضمان تطبيق التغييرات.
:::

يمكنك الآن تشغيل السيرفر باستخدام أمر `systemctl start`. وبالمثل، يمكنك إيقاف وإعادة تشغيل السيرفر بسهولة باستخدام أوامر مشابهة.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
لعرض تفاصيل عن الخدمة، يمكنك استخدام أمر `systemctl status`. إذا كنت بحاجة إلى سجلات لأغراض التصحيح، يمكنك استخدام أمر `journalctl -u [your_service].service` لعرض أحدث السجلات من الخدمة.
:::

أخيرًا، إذا أردت إيقاف تشغيل الخدمة تلقائيًا عند الإقلاع، فقط قم بتعطيلها.
```
sudo systemctl disable [your_service]
```

## الخلاصة

لقد قمت الآن بإعداد خدمة لسيرفر الألعاب المخصص الخاص بك بنجاح. السيرفر سيبدأ تلقائيًا عند إقلاع السيرفر.

كما تعلمت عن محتويات ملف الخدمة وكيفية إدارة الخدمة باستخدام مجموعة من الأوامر.

<InlineVoucher />