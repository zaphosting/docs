---
id: vserver-linux-cockpit
title: "تثبيت Cockpit على سيرفر Linux - إدارة سيرفرك عبر واجهة ويب"
description: "اكتشف كيف تدير سيرفرات Linux بكفاءة مع واجهة الويب الخاصة بـ Cockpit للمبتدئين والمحترفين → تعلّم المزيد الآن"
sidebar_label: تثبيت Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Cockpit هي واجهة ويب لإدارة سيرفر Linux واحد أو أكثر (عنقود). من عرض سجلات بسيطة إلى إدارة RAID، يقدم Cockpit العديد من الميزات.  
Cockpit مناسب للمبتدئين وأيضًا للمستخدمين المتقدمين الذين يريدون رؤية/إدارة كل شيء مهم بسرعة. بالإضافة إلى ذلك، يمكن الوصول إليه من أي جهاز تقريبًا.  
يمكن الوصول إلى موقع المشروع على https://cockpit-project.org/.

## تثبيت Cockpit باستخدام مثبت التطبيقات بنقرة واحدة

يمكنك تثبيت **Cockpit** مباشرة عبر **مثبت التطبيقات بنقرة واحدة** في واجهة الويب الخاصة بـ VPS. بعد إكمال إعداد التطبيقات الأولي، افتح كتالوج التطبيقات، وابحث عن **Cockpit**، وابدأ النشر مع إعدادات المشروع، البيئة، والنطاق المفضلة لديك. هذا يمنحك طريقة سريعة وسهلة لنشر وإدارة **Cockpit** بدون إعداد يدوي عبر سطر الأوامر، مع الاستفادة من الإدارة المدمجة عبر الويب، دعم النطاق المخصص، وتوفير SSL حيثما كان متاحًا.

:::info
هذا الدليل يشرح التثبيت على Debian (من Buster) / Ubuntu (من Bionic Beaver). التثبيت متاح أيضًا على صفحة المشروع لـ Fedora، Red Hat، Fedora CoreOS، CentOS، Clear Linux، Archlinux و Tumbleweed.  
:::

<InlineVoucher />

## التثبيت

أولاً، يجب تحديث السيرفر:
```
// تحديث
sudo apt update; sudo apt upgrade -y
```
بعدها يمكن تنفيذ التثبيت:
```
// تثبيت Cockpit
sudo apt install cockpit -y
```
بعد اكتمال التثبيت، يمكن الوصول إلى لوحة Cockpit عبر IP:9090.  
يتم تسجيل الدخول باستخدام بيانات الدخول العادية للسيرفر/المستخدم.

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين Cockpit بنجاح! إذا كان لديك أي أسئلة أو مشاكل إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />