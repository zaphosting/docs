---
id: vserver-linux-add-ip
title: "VPS: تكوين عنوان (عناوين) IP"
description: "تعلم كيفية تكوين وإدارة عناوين IP الأساسية والإضافية على أنظمة Debian و Ubuntu لتحسين إعداد الشبكة → تعلّم المزيد الآن"
sidebar_label: تكوين عنوان (عناوين) IP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هل ترغب في تكوين إعدادات الشبكة وتحديد عناوين IP؟

<InlineVoucher />

## تكوين عنوان IP

هذا القسم يشرح كيفية تحديد وتعيين عنوان IP الرئيسي.

<Tabs>
  <TabItem value="debian" label="Debian" default>

يتم تكوين الشبكة في Debian عبر واجهات الشبكة. نفّذ الأمر `sudo nano /etc/network/interfaces` لفتح إعدادات الشبكة. بشكل افتراضي، يجب أن يكون محتوى إعدادات الشبكة كما يلي:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

إذا لم يكن هذا موجودًا بعد، يجب أن يكون المحتوى كما هو موضح. استبدل عنصر نائب عنوان IP (XXX.XXX.XXX.XXX) بعنوان IP الخاص بسيرفرك، المعروض في إدارة السيرفر في لوحة المعلومات. استخدم `255.255.255.0` (شبكة من الفئة C) كقناع شبكة وتأكد أن الأوكتت الأخير يحتوي فقط على الرقم 1 للبوابة.

احفظ التغييرات بالضغط على CTRL+X ثم أكد التغييرات بزر Enter. يجب الآن إعادة تشغيل وحدة الشبكة لتفعيل عنوان IPv4 الجديد، ويتم ذلك بالأمر التالي:

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

 </TabItem>
</Tabs>

## تكوين عناوين IP إضافية
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   عنصر نائب

</TabItem>
</Tabs>

## اختبار التكوين
للتحقق من صحة وعمل عنوان IP المُكوّن، يمكن إجراء اختبار ping. يمكنك فعل ذلك على سبيل المثال من جهازك الخاص بفتح موجه الأوامر (cmd.exe) وتنفيذ الأمر التالي:

```
ping <your_server_ip>
```

بعد تنفيذ الأمر وبافتراض أنك قمت بتكوين عنوان IP بشكل صحيح، يجب أن تبدو النتيجة كما يلي:

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## الخاتمة

مبروك، لقد قمت بتكوين إعدادات الشبكة بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />