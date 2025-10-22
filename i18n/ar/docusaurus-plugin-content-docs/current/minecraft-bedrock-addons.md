---
id: minecraft-bedrock-addons
title: "ماينكرافت بيدروك: تثبيت الإضافات"
description: "اكتشف كيف تعزز سيرفر ألعاب ماينكرافت بيدروك الخاص بك بالإضافات لتوسيع طريقة اللعب وتخصيص عالمك → تعلّم المزيد الآن"
sidebar_label: تثبيت الإضافات
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## مقدمة
إصدار ماينكرافت بيدروك يدعم التعديل بشكل أصلي ولديه مجتمع ضخم، مما يتيح لك توسيع وتحسين طريقة اللعب مع أصدقائك. في هذا الدليل، سنغطي عملية تثبيت وتفعيل إضافة على سيرفر ألعاب ماينكرافت بيدروك الخاص بك.

<InlineVoucher />

## التحضير

لتثبيت خريطة إضافة على سيرفر ألعاب ماينكرافت: بيدروك الخاص بك، تحتاج إلى الاتصال به عبر FTP. إذا لم تكن معتادًا على ذلك، ننصحك بإلقاء نظرة على دليل [وصول FTP](gameserver-ftpaccess.md).

قبل المتابعة بالتثبيت، عليك أيضًا العثور على الإضافات التي ترغب في تثبيتها على سيرفرك. نوصي بتصفح [CurseForge](https://www.curseforge.com/minecraft-bedrock) حيث يقدمون مكتبة ضخمة من الإضافات وحزم الموارد التي أنشأها المجتمع.

## التثبيت

هناك طريقتان لتثبيت إضافة في ماينكرافت بيدروك. يمكنك إما تثبيت الإضافات في عالم جديد، مما يجعل العملية سهلة جدًا، أو تثبيتها في عالم موجود مسبقًا، وهو أكثر تعقيدًا.

## استخدام عالم جديد (سهل)

لإنشاء عالم جديد مع الإضافات، عليك أولًا ببساطة فتح ملف `.mcaddon` أو `.mcpack` الذي قمت بتحميله.
سيؤدي هذا إلى فتح ماينكرافت بيدروك واستيراد الإضافة إلى اللعبة.

### إنشاء عالم

لإنشاء عالم وتثبيت الإضافات عليه، اضغط على `تشغيل` ثم `إنشاء عالم جديد`.
يمكنك بعدها اختيار جميع إعدادات العالم العادية التي تريدها:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### تثبيت الإضافات

قبل الضغط على `إنشاء`، عليك الانتقال إلى `حزم الموارد` أو `حزم السلوك`.
هناك اضغط على `تفعيل` بجانب اسم الإضافة:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

بعض الإضافات تحتوي على حزمة موارد وحزمة سلوك، لذا عليك تفعيل كلاهما. إذا قمت بتفعيل كل الإضافات المطلوبة، يمكنك الضغط على `إنشاء`.

لتصدير العالم ورفعه إلى سيرفرك، يمكنك استخدام دليل [استيراد عالم خاص](minecraft-bedrock-add-world.md).

## استخدام عالم موجود (صعب)

تثبيت الإضافة في عالم موجود أصعب، لكنه يتيح لك اللعب مع الإضافة مع الاحتفاظ بالتقدم الذي أحرزته بالفعل.

### تثبيت 7-zip

لتثبيت الإضافة في عالم ماينكرافت موجود، تحتاج إلى تثبيت 7-zip لفتح ملف الإضافة.
عملية التثبيت سهلة جدًا، عليك زيارة [صفحة تحميل 7-zip](https://www.7-zip.org/) للحصول على أحدث نسخة تثبيت:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

بعد التحميل، افتح الملف واضغط **تثبيت**.

### فك ضغط الإضافة

بمجرد تحميل الإضافة التي تريدها، يمكنك فك ضغطها باستخدام 7-zip بالنقر بزر الماوس الأيمن على ملف `.mcaddon`، ثم المرور على `7-zip` والضغط على `استخراج إلى FOLDERNAME`:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

إذا كانت الإضافة تحتوي على حزمة موارد وحزمة سلوك، عليك فعل نفس الشيء لمحتويات المجلد، لأنها ملفات `.mcpack` أيضًا:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

الفرق بين حزم الموارد وحزم السلوك يظهر في اسم المجلد. مجلدات حزم الموارد تحتوي على `RP` في اسمها، وحزم السلوك تحتوي على `BP`.

<Tabs>
  <TabItem value="resource-pack" label="حزمة الموارد" default>

### رفع حزمة الموارد

لرفع حزمة الموارد، انتقل إلى هذا المجلد عبر عميل FTP الخاص بك:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

ثم يمكنك سحب وإفلات مجلد RP داخل عميل FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
تأكد من رفع المجلد الصحيح الذي يحتوي مباشرة على حزمة الموارد، وليس مجلد فرعي فقط.
يجب أن تبدو محتويات المجلد الذي ترفعه هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### تفعيل حزمة الموارد

لتفعيل حزمة الموارد، عليك فتح ملف `manifest.json` داخل مجلد RP. ثم انتقل إلى مجلد العالم في عميل FTP الخاص بك:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

بمجرد الوصول، افتح ملف `world_resource_packs.json`.
إذا لم تقم بتثبيت أي إضافات من قبل، عليك إنشاء هذا الملف. الصق النص التالي فيه:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

استبدل قيم `pack_id` و `version` بالقيم الموجودة في ملف manifest.json الذي فتحته سابقًا:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
إذا أردت تثبيت أكثر من حزمة، يمكنك إضافة عدة قيم.
من المهم وجود فاصلة `,` تفصل القيم، لكن لا تضع فاصلة في آخر قيمة:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="حزمة السلوك">

### رفع حزمة السلوك

لرفع حزمة السلوك، انتقل إلى هذا المجلد عبر عميل FTP الخاص بك:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

ثم يمكنك سحب وإفلات مجلد BP داخل عميل FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
تأكد من رفع المجلد الصحيح الذي يحتوي مباشرة على حزمة السلوك، وليس مجلد فرعي فقط.
يجب أن تبدو محتويات المجلد الذي ترفعه هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### تفعيل حزمة السلوك

لتفعيل حزمة السلوك، عليك فتح ملف `manifest.json` داخل مجلد BP. ثم انتقل إلى مجلد العالم في عميل FTP الخاص بك:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

بمجرد الوصول، افتح ملف `world_behavior_packs.json`.
إذا لم تقم بتثبيت أي إضافات من قبل، عليك إنشاء هذا الملف. الصق النص التالي فيه:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

استبدل قيم `pack_id` و `version` بالقيم الموجودة في ملف manifest.json الذي فتحته سابقًا:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
إذا أردت تثبيت أكثر من حزمة، يمكنك إضافة عدة قيم.
من المهم وجود فاصلة `,` تفصل القيم، لكن لا تضع فاصلة في آخر قيمة:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::
</TabItem>
</Tabs>

### التحقق من التغييرات

شغّل سيرفرك، اتصل به، وتأكد من تثبيت الإضافات بشكل صحيح. جرّب الميزات أو الموارد الجديدة لتتأكد أن كل شيء يعمل كما هو متوقع. إذا حدث أي خطأ، تحقق من الخطوات مرة أخرى وتأكد من رفع الملفات بشكل صحيح، وابحث عن أي أخطاء في وحدة تحكم السيرفر.

## الخاتمة

تثبيت الإضافات على سيرفر ألعاب ماينكرافت بيدروك الخاص بك طريقة رائعة لتوسيع تجربة اللعب وإضافة محتوى جديد. مع هذا الدليل، يمكنك بسهولة تثبيت الإضافات وتخصيص سيرفرك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />