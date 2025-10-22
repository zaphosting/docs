---
id: dedicated-linux-python
title: "سيرفر مخصص: تثبيت بايثون"
description: "تعلم كيفية تثبيت وتحديث بيئة تشغيل بايثون على توزيعات لينكس المختلفة لضمان بيئة آمنة ومحدثة → تعلّم المزيد الآن"
sidebar_label: تثبيت بايثون
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هذا الدليل يشرح خطوات تثبيت بيئة تشغيل بايثون وvenv. يجب تنفيذ هذه الأوامر عبر SSH، إذا لم تكن تعرف كيفية الاتصال بسيرفرك عبر SSH، يرجى استخدام دليلنا [الوصول الأولي (SSH)](vserver-linux-ssh.md) لتتعلم المزيد.

<InlineVoucher />

## التحضير

قبل تثبيت أي شيء على السيرفر، يُنصح بتشغيل أمر التحديث الخاص بنظام التشغيل لديك للحفاظ على أمان السيرفر.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="أوبونتو وديبيان" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="سينت أو إس">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="أوبن سوزي">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="فيدورا">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## التثبيت

معظم توزيعات لينكس تأتي مثبتة مسبقًا مع بايثون، لكن النسخة قد لا تكون محدثة أو قد يكون النظام مثبت بدون بعض الحزم. يمكنك التحقق من وجود تثبيت بايثون (`python3 --version`) وتشغيل الأوامر التالية لتحديث أو تثبيت بيئة التشغيل.

<Tabs>
<TabItem value="ubuntu-debian" label="أوبونتو وديبيان" default>

```
  // تحقق من النسخة
  python3 --version

  // تحديث / تثبيت بيئة التشغيل
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="سينت أو إس">

```
  // تحقق من النسخة
  python3 --version

  // تحديث بيئة التشغيل
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="أوبن سوزي">

```
  // تحقق من النسخة
  python3 --version

  // تحديث بيئة التشغيل
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="فيدورا">

```
  // تحقق من النسخة
  python3 --version

  // تحديث بيئة التشغيل
  sudo dnf install python3
```

</TabItem>
</Tabs>

## تشغيل الأكواد

الآن بعد أن ثبتت بايثون على سيرفرك، يمكنك البدء بتشغيل برامج بايثون الخاصة بك.

### وضع المفسر

تشغيل الأمر `python3` سيبدأ مفسر بايثون. يمكنك كتابة أي كود بايثون صحيح بعد العلامة `>>>` وسيتم تنفيذه بعد الضغط على `Enter`. يمكنك إغلاق المفسر عند الانتهاء عبر تشغيل الأمر `exit()` في الكونسول.

### تشغيل ملفات .py

لتشغيل ملفات بايثون `.py`، يمكنك ببساطة استخدام الأمر `python3 [filename].py` مع استبدال `[filename]` بمسار واسم الملف الذي تريد تشغيله.

:::tip
معظم البرامج التي تجدها على الإنترنت يمكن تشغيلها باستخدام `python3 main.py` لأن `main.py` هو نقطة البداية الشائعة لمعظم برامج بايثون.
:::

## البيئات الافتراضية

عند كتابة برنامج بايثون قد تحتاج لتثبيت حزم خارجية من pip. يمكن تثبيتها بشكل عام لتكون متاحة لكل سكربتات `.py` أو يمكنك إنشاء بيئة افتراضية (venv).

### إنشاء venv

أولًا، انتقل إلى المجلد الذي تريد إعداد venv فيه باستخدام `cd` وعندما تكون جاهزًا، شغّل `python3 -m venv .` لتثبيت الملفات المطلوبة في الموقع الحالي.

### التفعيل والإلغاء

لتشغيل أوامر مثل `pip install` داخل venv تحتاج لتفعيله عبر تشغيل `source /bin/activate`. الآن الكونسول سيعمل فقط داخل venv والسكربتات ستصل فقط للحزم المثبتة محليًا.

عند الانتهاء من العمل داخل venv يمكنك العودة عبر تشغيل الأمر `deactivate`.

<InlineVoucher />