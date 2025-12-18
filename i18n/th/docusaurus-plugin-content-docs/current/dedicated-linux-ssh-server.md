---
id: dedicated-linux-ssh-server
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง SSH"
description: "ค้นพบวิธีการติดตั้งและจัดการเซิร์ฟเวอร์ SSH บน Linux VPS อย่างปลอดภัย เพื่อการเข้าถึงระยะไกลที่ปลอดภัยและการปกป้องเซิร์ฟเวอร์ที่ดีขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Secure Shell (SSH) คือโปรโตคอลที่ปลอดภัยซึ่งช่วยให้เข้าถึงระบบระยะไกลได้อย่างปลอดภัยและเข้ารหัส มันช่วยรับประกันความลับและความสมบูรณ์ของข้อมูลที่ส่งผ่านเครือข่าย

ในคู่มือนี้ คุณจะได้เรียนรู้วิธีติดตั้งหรือทำการติดตั้ง SSH Server ใหม่สำหรับ Linux Distribution ต่างๆ ที่เรามีให้บริการบน VPS ของเรา โดย Linux Distros ส่วนใหญ่ที่เรามีให้บริการบน VPS จะมาพร้อมกับ SSH Server โดยดีฟอลต์ ซึ่งหมายความว่าคุณสามารถจัดการได้ง่ายผ่านเว็บอินเทอร์เฟซของผลิตภัณฑ์ คุณสามารถดูวิธีทำได้ในคู่มือของเรา: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

ถ้าคุณต้องการเรียนรู้เพิ่มเติมเกี่ยวกับการเพิ่มความปลอดภัยบนเซิร์ฟเวอร์ของคุณ เราขอแนะนำให้ดูคู่มือ [เคล็ดลับความปลอดภัย](vserver-linux-security-tips.md) ของเรา ซึ่งแนะนำเครื่องมือและบริการต่างๆ ที่ช่วยเพิ่มความปลอดภัยให้เซิร์ฟเวอร์ของคุณได้มากขึ้น



## การติดตั้ง

เพื่อเริ่มต้นกระบวนการติดตั้ง ให้เข้าถึงเซิร์ฟเวอร์ของคุณผ่าน VNC คุณสามารถทำตามขั้นตอนเหล่านี้โดยใช้ [คอนโซล VNC](vserver-vnc.md)


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
ถ้าคุณต้องการติดตั้ง SSH server ใหม่ ให้แน่ใจว่าคุณได้ถอนการติดตั้งก่อน โดยใช้คำสั่ง: `yum remove openssh`
:::

ก่อนติดตั้ง SSH server ให้แน่ใจว่าระบบของคุณอัปเดตล่าสุดแล้ว รันคำสั่งนี้:
```
yum update
```

จากนั้นติดตั้ง SSH server ด้วยคำสั่งนี้:
```
yum install openssh-server
```

เมื่อติดตั้งเสร็จแล้ว คุณสามารถเริ่มบริการ SSH server ด้วยคำสั่งนี้:
```
systemctl start sshd
```

อย่าลืมเปิดใช้งานบริการให้เริ่มอัตโนมัติเมื่อบูตเครื่อง ด้วยคำสั่งนี้:
```
systemctl enable sshd
```

## การเปิดใช้งาน root login

เพื่อเปิดใช้งาน root login คุณต้องแก้ไขไฟล์คอนฟิก openssh ในคู่มือนี้ เราจะใช้ "nano" เป็นตัวแก้ไข

:::info
ถ้า "nano" ยังไม่ได้ติดตั้ง ต้องติดตั้งก่อน โดยใช้คำสั่ง: `yum install nano`
:::

เปิดไฟล์คอนฟิกด้วยคำสั่ง:
```
nano /etc/ssh/sshd_config 
```

ใช้ปุ่มลูกศรเลื่อนหาแถวนี้:
```
#PermitRootLogin prohibit-password
```

เปลี่ยนเป็นบรรทัดนี้เพื่อเปิดใช้งาน root login ระยะไกล:
```
PermitRootLogin yes
```

สุดท้าย รีสตาร์ท SSH Server เพื่อให้การตั้งค่าใหม่มีผล ด้วยคำสั่ง:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
ถ้าคุณต้องการติดตั้ง SSH server ใหม่ ให้แน่ใจว่าคุณได้ถอนการติดตั้งก่อน โดยใช้คำสั่ง: `apt remove openssh`
:::

ก่อนติดตั้ง SSH server ให้แน่ใจว่าระบบของคุณอัปเดตล่าสุดแล้ว รันคำสั่งนี้:
```
apt update
```

จากนั้นติดตั้ง SSH server ด้วยคำสั่งนี้:
```
apt install openssh-server
```

เมื่อติดตั้งเสร็จแล้ว คุณสามารถเริ่มบริการ SSH server ด้วยคำสั่งนี้:
```
systemctl start sshd
```

อย่าลืมเปิดใช้งานบริการให้เริ่มอัตโนมัติเมื่อบูตเครื่อง ด้วยคำสั่งนี้:
```
systemctl enable sshd
```

## การเปิดใช้งาน root login

เพื่อเปิดใช้งาน root login คุณต้องแก้ไขไฟล์คอนฟิก openssh ในคู่มือนี้ เราจะใช้ "nano" เป็นตัวแก้ไข

:::info
ถ้าคุณยังไม่มี "nano" ต้องติดตั้งก่อน โดยใช้คำสั่ง: `apt install nano`
:::

เปิดไฟล์คอนฟิกด้วยคำสั่ง:
```
nano /etc/ssh/sshd_config 
```

ใช้ปุ่มลูกศรเลื่อนหาแถวนี้:
```
#PermitRootLogin prohibit-password
```

เปลี่ยนเป็นบรรทัดนี้เพื่อเปิดใช้งาน root login ระยะไกล:
```
PermitRootLogin yes
```

สุดท้าย รีสตาร์ท SSH Server เพื่อให้การตั้งค่าใหม่มีผล ด้วยคำสั่ง:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
ถ้าคุณต้องการติดตั้ง SSH server ใหม่ ให้แน่ใจว่าคุณได้ถอนการติดตั้งก่อน โดยใช้คำสั่ง: `apt remove openssh`
:::

ก่อนติดตั้ง SSH server ให้แน่ใจว่าระบบของคุณอัปเดตล่าสุดแล้ว รันคำสั่งนี้:
```
apt update
```

จากนั้นติดตั้ง SSH server ด้วยคำสั่งนี้:
```
apt install openssh-server
```

เมื่อติดตั้งเสร็จแล้ว คุณสามารถเริ่มบริการ SSH server ด้วยคำสั่งนี้:
```
systemctl start sshd
```

อย่าลืมเปิดใช้งานบริการให้เริ่มอัตโนมัติเมื่อบูตเครื่อง ด้วยคำสั่งนี้:
```
systemctl enable sshd
```

## การเปิดใช้งาน root login

เพื่อเปิดใช้งาน root login คุณต้องแก้ไขไฟล์คอนฟิก openssh ในคู่มือนี้ เราจะใช้ "nano" เป็นตัวแก้ไข

:::info
ถ้าคุณยังไม่มี "nano" ต้องติดตั้งก่อน โดยใช้คำสั่ง: `apt install nano`
:::

เปิดไฟล์คอนฟิกด้วยคำสั่ง:
```
nano /etc/ssh/sshd_config 
```

ใช้ปุ่มลูกศรเลื่อนหาแถวนี้:
```
#PermitRootLogin prohibit-password
```

เปลี่ยนเป็นบรรทัดนี้เพื่อเปิดใช้งาน root login ระยะไกล:
```
PermitRootLogin yes
```

สุดท้าย รีสตาร์ท SSH Server เพื่อให้การตั้งค่าใหม่มีผล ด้วยคำสั่ง:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
ถ้าคุณต้องการติดตั้ง SSH server ใหม่ ให้แน่ใจว่าคุณได้ถอนการติดตั้งก่อน โดยใช้คำสั่ง: `dnf remove openssh`
:::

ก่อนติดตั้ง SSH server ให้แน่ใจว่าระบบของคุณอัปเดตล่าสุดแล้ว รันคำสั่งนี้:
```
dnf update
```

จากนั้นติดตั้ง SSH server ด้วยคำสั่งนี้:
```
dnf install openssh-server
```

เมื่อติดตั้งเสร็จแล้ว คุณสามารถเริ่มบริการ SSH server ด้วยคำสั่งนี้:
```
systemctl start sshd
```

อย่าลืมเปิดใช้งานบริการให้เริ่มอัตโนมัติเมื่อบูตเครื่อง ด้วยคำสั่งนี้:
```
systemctl enable sshd
```

## การเปิดใช้งาน root login

เพื่อเปิดใช้งาน root login คุณต้องแก้ไขไฟล์คอนฟิก openssh ในคู่มือนี้ เราจะใช้ "nano" เป็นตัวแก้ไข

:::info
ถ้าคุณยังไม่มี "nano" ต้องติดตั้งก่อน โดยใช้คำสั่ง: `dnf install nano`
:::

เปิดไฟล์คอนฟิกด้วยคำสั่ง:
```
sudo nano /etc/ssh/sshd_config 
```

ใช้ปุ่มลูกศรเลื่อนหาแถวนี้:
```
#PermitRootLogin prohibit-password
```

เปลี่ยนเป็นบรรทัดนี้เพื่อเปิดใช้งาน root login ระยะไกล:
```
PermitRootLogin yes
```

สุดท้าย รีสตาร์ท SSH Server เพื่อให้การตั้งค่าใหม่มีผล ด้วยคำสั่ง:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

ตอนนี้คุณได้ติดตั้งบริการ SSH บนเซิร์ฟเวอร์ของคุณเรียบร้อยแล้ว และสามารถเข้าถึงเซิร์ฟเวอร์ผ่าน SSH ได้เลย!