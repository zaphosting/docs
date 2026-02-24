---
id: vserver-linux-python
title: "تثبيت بايثون على سيرفر لينكس - فعّل التطوير والأتمتة"
description: "تعلم كيفية تثبيت وتحديث بيئة تشغيل بايثون على توزيعات لينكس المختلفة لضمان بيئة آمنة ومحدثة → تعلّم المزيد الآن"
sidebar_label: تثبيت بايثون
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هذا الدليل يشرح خطوات تثبيت بيئة تشغيل بايثون و venv. يجب تنفيذ هذه الأوامر عبر SSH، إذا لم تكن تعرف كيف تتصل بسيرفرك عبر SSH، استخدم دليلنا [الوصول الأولي (SSH)](vserver-linux-ssh.md) لتتعلم المزيد.

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

معظم توزيعات لينكس تأتي مع بايثون مثبت مسبقًا، لكن قد لا تكون النسخة محدثة أو قد يكون النظام مثبت بدون بعض الحزم. يمكنك التحقق من وجود تثبيت بايثون (`python3 --version`) وتشغيل الأوامر التالية لتحديث أو تثبيت بيئة التشغيل.

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

الآن بعد تثبيت بايثون على سيرفرك، يمكنك البدء بتشغيل برامج بايثون الخاصة بك.

### وضع المفسر

تشغيل الأمر `python3` سيبدأ مفسر بايثون. يمكنك كتابة أي كود بايثون صحيح بعد علامة `>>>` وسيتم تنفيذه عند الضغط على `Enter`. يمكنك إغلاق المفسر عند الانتهاء عبر كتابة `exit()` في الكونسول.

### تشغيل ملفات .py

لتشغيل ملفات بايثون `.py`، ببساطة استخدم الأمر `python3 [اسم_الملف].py` مع استبدال `[اسم_الملف]` بمسار واسم الملف الذي تريد تشغيله.

:::tip
معظم البرامج التي تجدها أونلاين يمكن تشغيلها باستخدام `python3 main.py` لأن `main.py` هو نقطة البداية الشائعة لمعظم برامج بايثون.
:::

## البيئات الافتراضية

عند كتابة برنامج بايثون قد تحتاج تثبيت حزم خارجية من pip. يمكن تثبيتها بشكل عام لتكون متاحة لكل سكربتات `.py` أو يمكنك إنشاء بيئة افتراضية (venv).

### إنشاء venv

أولًا، انتقل إلى المجلد الذي تريد إعداد venv فيه باستخدام `cd`، وعندما تكون جاهزًا، شغّل `python3 -m venv .` لتثبيت الملفات المطلوبة في الموقع الحالي.

### التفعيل والإلغاء

لتشغيل أوامر مثل `pip install` داخل venv، تحتاج تفعيله عبر الأمر `source /bin/activate`. الآن الكونسول سيعمل فقط داخل venv والسكربتات ستصل فقط للحزم المثبتة محليًا.

عند الانتهاء من العمل داخل venv، يمكنك العودة عبر تشغيل الأمر `deactivate`.

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين بايثون بنجاح! إذا كان لديك أي أسئلة أو مشاكل إضافية، تواصل مع فريق الدعم الخاص بنا، متوفرين لمساعدتك يوميًا!

<InlineVoucher />