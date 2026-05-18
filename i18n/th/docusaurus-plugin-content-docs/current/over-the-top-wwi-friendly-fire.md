---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: ตั้งค่า Friendly Fire"
description: "เรียนรู้วิธีเปิดหรือปรับแต่งการตั้งค่า Friendly Fire บนเซิร์ฟเวอร์ Over the Top WWI ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Friendly Fire
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Friendly fire คือการกำหนดว่าผู้เล่นสามารถทำความเสียหายกับเพื่อนร่วมทีมได้หรือไม่ในระหว่างการเล่น การปรับแต่งการตั้งค่านี้ช่วยให้คุณควบคุมได้ว่าเกมจะสมจริงหรือให้อภัยมากแค่ไหนบนเซิร์ฟเวอร์ **Over the Top WWI** ของคุณ

การเปิดใช้งาน Friendly fire จะเพิ่มความสมจริงและความท้าทายเชิงกลยุทธ์ ในขณะที่การปิดหรือปรับลดจะช่วยให้ประสบการณ์การเล่นเป็นแบบสบาย ๆ และเข้าถึงง่ายขึ้น

<InlineVoucher />

## การตั้งค่า

การตั้งค่า Friendly fire จะถูกกำหนดในไฟล์คอนฟิกของเซิร์ฟเวอร์ คุณสามารถเข้าถึงและแก้ไขไฟล์นี้ได้ใน **แผงควบคุมการจัดการเซิร์ฟเวอร์เกม** ของคุณภายใต้เมนู **Configs** ค้นหาและเปิดไฟล์คอนฟิก `ServerConfiguration.ini` ภายในไฟล์นี้ ให้หาพารามิเตอร์ดังต่อไปนี้:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` เปิดหรือปิดความเสียหายจากการโจมตีระยะประชิดกับเพื่อนร่วมทีม
- `EnableFriendlyRangeFire` เปิดหรือปิดความเสียหายจากการโจมตีระยะไกลกับเพื่อนร่วมทีม
- `FriendlyFireAtRoundStart` กำหนดเวลาหน่วงเป็นวินาทีก่อนที่ Friendly fire จะเริ่มทำงาน
- `FriendlyFirePercent` ควบคุมเปอร์เซ็นต์ความเสียหายจากการโจมตีระยะประชิดที่ส่งถึงเพื่อนร่วมทีม
- `RangeFriendlyFirePercent` ควบคุมเปอร์เซ็นต์ความเสียหายจากการโจมตีระยะไกลที่ส่งถึงเพื่อนร่วมทีม
- `ExplosionFf` เปิดหรือปิดความเสียหายจากระเบิดกับเพื่อนร่วมทีม
- `FriendlyFireReflectPercent` สะท้อนเปอร์เซ็นต์ความเสียหายกลับไปยังผู้โจมตีแทนที่จะเป็นเพื่อนร่วมทีม

หลังจากแก้ไขไฟล์ `ServerConfiguration.ini` แล้ว ให้บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์ของคุณ การตั้งค่า Friendly fire ใหม่จะถูกนำไปใช้ทันที

## สรุป

ยินดีด้วย! คุณได้ตั้งค่า Friendly fire บนเซิร์ฟเวอร์ **Over the Top WWI** ของคุณเรียบร้อยแล้ว การปรับแต่งค่านี้ช่วยให้คุณบาลานซ์ระหว่างความสมจริงและประสบการณ์การเล่นสำหรับชุมชนของคุณได้อย่างลงตัว

หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการคุณทุกวัน! 🙂

<InlineVoucher />