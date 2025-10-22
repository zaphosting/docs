---
id: vserver-linux-firewall
title: "VPS: إدارة الجدار الناري في لينكس"
description: "تعلم كيفية إعداد جدار ناري لتأمين سيرفرك والسماح بالاتصالات الخارجية الضرورية → تعلّم المزيد الآن"
sidebar_label: إعادة توجيه المنافذ (الجدار الناري)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

لكثير من الخدمات والبرامج، لازم تسمح بالاتصالات الخارجية. هذا ممكن عن طريق إعداد جدار ناري.
في هذا الدليل، راح تتعلم كيف تضبط جدار ناري وتسمح لهذي الاتصالات.

<InlineVoucher />

## التحضير

عشان تثبت الجدار الناري، تحتاج تتصل بسيرفرك عبر SSH. إذا ما تعرف كيف، تقدر تطّلع على [دليل الوصول الأولي](vserver-linux-ssh.md).
بعد الاتصال، لازم تحدث السيرفر باستخدام `apt update` و `apt upgrade`.

## استخدام UFW (سهل)

فيه برامج جدار ناري كثيرة للينكس، هذا الدليل بيركز على أشهر اثنين: UFW و IPTables.
بنبدأ بـ UFW لأنه أسهل في الإعداد والإدارة.

### تثبيت UFW

تقدر تثبت UFW بكل بساطة عن طريق APT باستخدام `sudo apt install ufw`.
عشان ما تفقد اتصال SSH، لا تفعل الجدار الناري بعد، لازم تضبطه أول.

### إعداد UFW

ننصح باستخدام السياسات التالية بشكل افتراضي:

`sudo ufw default deny incoming`
و
`sudo ufw default allow outgoing`

الحين لازم تسمح باتصال SSH وأي منفذ ثاني تبي تفتحه:

`sudo ufw allow 22` للـ SSH

`sudo ufw allow 80` مثال لـ HTTP

`sudo ufw allow 25565` مثال لسيرفر Minecraft


لتفعيل UFW، شغل الأمر `sudo ufw enable`. تقدر دايمًا تفتح منافذ أكثر إذا احتجت باستخدام `sudo ufw allow PORT`


### إضافة إعادة توجيه المنافذ

عشان تعيد توجيه منفذ، تقدر تستخدم الأمر التالي:

للمنافذ TCP:

`sudo ufw allow PORT/tcp` استبدل PORT بالمنفذ اللي تبي تعيد توجيهه.

مثال: `sudo ufw allow 25565/tcp` لسيرفر Minecraft

للمنافذ UDP:

`sudo ufw allow PORT/udp` استبدل PORT بالمنفذ اللي تبي تعيد توجيهه.

مثال: `sudo ufw allow 9987/udp` لسيرفر TeamSpeak 3

### عرض وحذف إعادة توجيه المنافذ

لعرض كل قواعد المنافذ، شغل `sudo ufw status numbered`. إذا تبي تحذف قاعدة، استخدم `sudo ufw delete NUMBER`، حيث NUMBER هو رقم القاعدة في القائمة.

## تثبيت IPTables (متقدم)

معظم الأنظمة تجي مع IPTables مثبتة بشكل افتراضي، لكن للتأكد تقدر تشغل `sudo apt install iptables`.

### إعداد IPTables

أولًا، اضبط السياسات والإعدادات الافتراضية:

`sudo iptables -P INPUT DROP` لمنع كل الاتصالات الواردة

`sudo iptables -P FORWARD DROP` لمنع كل عمليات التوجيه

`sudo iptables -P OUTPUT ACCEPT` للسماح بكل الاتصالات الصادرة

`sudo iptables -A INPUT -i lo -j ACCEPT` للسماح باللووب باك

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` للسماح بكل الاتصالات الموجودة

الحين لازم تسمح باتصال SSH وأي منفذ ثاني تبي تفتحه:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` للـ SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` مثال لـ HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` مثال لسيرفر Minecraft

بعدين لازم تخلي القواعد دائمة، عشان تظل فعالة بعد إعادة تشغيل السيرفر. ثبت حزمة iptables-persistent باستخدام `sudo apt install iptables-persistent`. بعدين طبقها بـ `sudo netfilter-persistent save`. وأضفها للإقلاع التلقائي بـ `sudo systemctl enable netfilter-persistent`.

### إضافة إعادة توجيه المنافذ

عشان تعيد توجيه منفذ، تقدر تستخدم الأمر التالي:

للمنافذ TCP:

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` استبدل PORT بالمنفذ اللي تبي تعيد توجيهه.

مثال: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` لسيرفر Minecraft

للمنافذ UDP:

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` استبدل PORT بالمنفذ اللي تبي تعيد توجيهه.

مثال: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` لسيرفر TeamSpeak 3


### عرض وحذف إعادة توجيه المنافذ

تقدر تعرض كل القواعد باستخدام الأمر: `sudo iptables -L --line-numbers`. إذا تبي تحذف قاعدة، استخدم `sudo iptables -D INPUT NUMBER` مع استبدال `NUMBER` برقم القاعدة اللي تبي تحذفها.

## الخلاصة

لقد ثبت جدار ناري بنجاح على سيرفر لينكس الخاص فيك وأنشأت قواعد المنافذ الخاصة فيك. تقدر تستخدم هذا الدليل كمان لإعادة توجيه منافذ أكثر.
لو عندك أي أسئلة أو تحتاج مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂

<InlineVoucher />