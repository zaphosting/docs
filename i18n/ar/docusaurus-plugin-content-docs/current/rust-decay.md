---
id: rust-decay
title: "Rust: تعديل التحلل"
description: "اكتشف كيفية تعديل معدلات التحلل في سيرفر Rust وحفظ الإعدادات للتحكم الأفضل في اللعب → تعلّم المزيد الآن"
sidebar_label: التحلل
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

باستخدام RCON، يمكنك تنفيذ أمر مباشر لتجعل نفسك أدمن. أولاً، يجب عليك [الاتصال عبر RCON](rust-connectrcon.md).

:::info
يجب أن يكون السيرفر قد بدأ بالكامل ليكون قابلاً للاتصال عبر RCON.
:::

عند اتصالك، انتقل إلى قسم الكونسول حيث يمكنك تنفيذ الأوامر. في مثالنا نستخدم **RustAdmin**.

يمكنك تعديل معدل التحلل كالتالي:

`decay.scale 1.0` هو معدل التحلل الطبيعي<br/>
`decay.scale 0.5` يقلل معدل التحلل بنسبة 50%<br/>
`decay.scale 0` يعطل التحلل تمامًا<br/>

مثلاً، إذا أردت تعطيل التحلل تمامًا، يجب تنفيذ الأمر

```decay.scale 0``` واضغط Enter بعد كتابة الأمر.

يمكنك التحقق في تبويب الكونسول الآن إذا تم إرسال الأمر بنجاح.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

لحفظ التغييرات، يجب إرسال الأمر

```server.writecfg``` مرة واحدة والضغط على Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

إذا ظهر في الكونسول الآن `Config Saved` فهذا يعني أن السيرفر قد استلم تغييراتك.


<InlineVoucher />