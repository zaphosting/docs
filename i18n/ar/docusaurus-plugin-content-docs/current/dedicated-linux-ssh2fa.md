---
id: dedicated-linux-ssh2fa
title: "سيرفر مخصص: المصادقة الثنائية عبر SSH"
description: "اكتشف كيف تعزز أمان SSH باستخدام Google Authenticator 2FA للوصول الآمن لسيرفرك وحماية VPS لينكس الخاص بك → تعلّم المزيد الآن"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

خدمة المصادقة الثنائية عبر SSH من جوجل، المعروفة باسم **Google Authenticator SSH**، تعزز أمان الوصول عبر SSH (Secure Shell) بإضافة طبقة ثانية من التحقق. رغم أن SSH يوفر بالفعل طريقة آمنة لإنشاء اتصال مشفر مع سيرفر بعيد، فإن دمج 2FA يزيد من مستوى الأمان بطلب إدخال المستخدمين ليس فقط كلمة المرور، بل أيضاً رمز تحقق لمرة واحدة يتم إنشاؤه بواسطة Google Authenticator. في هذا الدليل، سنستعرض خطوات تثبيت وتكوين خدمة **Google Authenticator SSH** على سيرفر لينكس.

<InlineVoucher />

## التثبيت

أولاً، تحتاج لتثبيت Google Authenticator على VPS لينكس الخاص بك. نفذ الأمر التالي:

```
sudo apt install libpam-google-authenticator
```

سيُطلب منك كتابة "Y" لتثبيت الحزمة، اكتبها واضغط Enter ثم سيتم تثبيت Google Authenticator!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

ابدأ Google Authenticator بكتابة 'google-authenticator'. تأكد من أن حجم نافذتك كافٍ لعرض رمز QR، وإلا اضغط "CTRL+C" وأعد المحاولة.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

سيُطلب منك مرة أخرى إذا كنت تريد المتابعة، اكتب "Y" للموافقة. ستحصل الآن على رمز QR. افتح تطبيق المصادقة على هاتفك الذكي وامسح رمز QR. في هذا المثال نستخدم Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

تأكد من نسخ أكواد النسخ الاحتياطي، يمكن استخدام كل منها مرة واحدة في حال فقدت تطبيق المصادقة.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

الآن يعرض التطبيق الأكواد التي ستحتاجها لتسجيل الدخول لاحقاً. في هذه الحالة تبدو هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

الأسئلة التالية ستُطرح عليك:

1. هل تريد حفظ إعدادات Google Authenticator؟
2. هل تريد تسجيل دخول واحد فقط كل 30 ثانية؟
3. هل يجب زيادة الوقت الذي يكون فيه الرمز صالحًا؟
4. هل يجب السماح بثلاث محاولات تسجيل دخول فقط كل 30 ثانية؟ (حماية ضد هجمات القوة الغاشمة)

لأسباب أمنية ننصح بالموافقة على جميعها بـ نعم.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## التكوين

الآن علينا تعديل Google Authenticator ليتم استخدامه فعليًا. هذا يتطلب تعديلين.

### /etc/ssh/sshd_config

فعّل الوحدات المطلوبة في ملف `/etc/ssh/sshd_config`. افتح الملف بكتابة:
```
sudo nano /etc/ssh/sshd_config
```

أنت الآن في محرر نصوص. يمكنك التنقل باستخدام الأسهم، حذف النص وإدخاله بحرية، ثم اضغط 'CTRL + X' ثم 'Y' وأخيرًا 'Enter' لحفظ الملف.

تأكد من أن السطرين 'UsePAM' و 'ChallengeResponseAuthentication' مضبوطان على 'yes'، مثل هذا:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

احفظ الملف بـ 'CTRL + X' ثم 'Y' وأخيرًا 'Enter'. أعد تشغيل SSH بالأمر التالي:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

الآن نضيف Google Authenticator إلى تسجيل الدخول في ملف `/etc/pam.d/sshd`. افتح الملف بكتابة:
```
sudo nano /etc/pam.d/sshd
```
انتقل إلى نهاية الملف وأضف السطر التالي:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

احفظ الملف بـ 'CTRL + X' ثم 'Y' وأخيرًا 'Enter'.

## اختبار الوصول

حان الوقت لتسجيل الدخول لأول مرة باستخدام 2FA. بعد اتباع الخطوات أعلاه، فقط أعد تشغيل اتصال SSH الخاص بك.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

أدخل كلمة المرور كالمعتاد. سيُطلب منك إدخال رمز، فقط أدخل رمز 2FA الحالي.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

الآن أنت مسجل دخول!

## الخلاصة

مبروك، لقد قمت بتكوين 2FA بنجاح لوصول SSH الخاص بك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />