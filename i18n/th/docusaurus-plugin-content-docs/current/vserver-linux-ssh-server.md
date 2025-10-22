---
id: vserver-linux-ssh-server
title: "VPS: การติดตั้ง SSH"
description: "เรียนรู้วิธีเข้าถึงและจัดการเซิร์ฟเวอร์ Linux ระยะไกลอย่างปลอดภัยด้วย SSH เพื่อเพิ่มความปลอดภัยของข้อมูลและการควบคุมเซิร์ฟเวอร์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง SSH
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## บทนำ

Secure Shell (SSH) คือโปรโตคอลที่ปลอดภัยซึ่งช่วยให้เข้าถึงระบบระยะไกลได้อย่างปลอดภัยและเข้ารหัส มันช่วยรับประกันความลับและความสมบูรณ์ของข้อมูลที่ส่งผ่านเครือข่าย

ในคู่มือนี้ คุณจะได้เรียนรู้วิธีติดตั้งหรือรีติดตั้ง SSH Server สำหรับ Linux Distribution ต่างๆ ที่เรามีให้บริการบน VPS ของเรา โดย Linux Distros ส่วนใหญ่ที่เรานำเสนอผ่าน VPS จะมาพร้อมกับ SSH Server ติดตั้งมาแล้วโดยค่าเริ่มต้น ซึ่งหมายความว่าคุณสามารถจัดการได้ง่ายผ่านเว็บอินเทอร์เฟซของผลิตภัณฑ์ คุณสามารถดูวิธีทำได้ในคู่มือของเรา: [การเข้าถึงครั้งแรก (SSH)](vserver-linux-ssh.md)

ถ้าคุณต้องการเรียนรู้เพิ่มเติมเกี่ยวกับการเพิ่มความปลอดภัยบนเซิร์ฟเวอร์ของคุณ เราขอแนะนำให้ดูคู่มือ [เคล็ดลับความปลอดภัย](vserver-linux-security-tips.md) ของเรา ซึ่งแนะนำเครื่องมือและบริการต่างๆ ที่ช่วยเพิ่มความปลอดภัยให้เซิร์ฟเวอร์ของคุณได้มากขึ้น

<InlineVoucher />

## การติดตั้ง

เพื่อเริ่มต้นกระบวนการติดตั้ง ให้เข้าถึงเซิร์ฟเวอร์ของคุณผ่าน VNC คุณสามารถทำตามขั้นตอนเหล่านี้โดยใช้ [คอนโซล VNC](vserver-vnc.md)


<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
ถ้าคุณต้องการรีติดตั้ง SSH server ให้แน่ใจว่าคุณได้ถอนการติดตั้งก่อน โดยใช้คำสั่ง: `yum remove openssh`
:::

ก่อนติดตั้ง SSH server ให้แน่ใจว่าระบบของคุณเป็นเวอร์ชันล่าสุด รันคำสั่งนี้:
```
yum update
```

จากนั้นติดตั้ง SSH server ด้วยคำสั่งนี้:
```
yum install openssh-server
```

เมื่อการติดตั้งเสร็จสิ้น คุณสามารถเริ่มบริการ SSH server ด้วยคำสั่งนี้:
```
systemctl start sshd
```

อย่าลืมเปิดใช้งานบริการให้เริ่มอัตโนมัติเมื่อบูตเครื่อง ด้วยคำสั่งนี้:
```
systemctl enable sshd
```

</TabItem>

<TabItem value="Debian" label="Debian">

:::info
ถ้าคุณต้องการรีติดตั้ง SSH server ให้แน่ใจว่าคุณได้ถอนการติดตั้งก่อน โดยใช้คำสั่ง: `apt remove openssh`
:::

ก่อนติดตั้ง SSH server ให้แน่ใจว่าระบบของคุณเป็นเวอร์ชันล่าสุด รันคำสั่งนี้:
```
apt update
```

จากนั้นติดตั้ง SSH server ด้วยคำสั่งนี้:
```
apt install openssh-server
```

เมื่อการติดตั้งเสร็จสิ้น คุณสามารถเริ่มบริการ SSH server ด้วยคำสั่งนี้:
```
systemctl start sshd
```

อย่าลืมเปิดใช้งานบริการให้เริ่มอัตโนมัติเมื่อบูตเครื่อง ด้วยคำสั่งนี้:
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
ถ้าคุณต้องการรีติดตั้ง SSH server ให้แน่ใจว่าคุณได้ถอนการติดตั้งก่อน โดยใช้คำสั่ง: `apt remove openssh`
:::

ก่อนติดตั้ง SSH server ให้แน่ใจว่าระบบของคุณเป็นเวอร์ชันล่าสุด รันคำสั่งนี้:
```
apt update
```

จากนั้นติดตั้ง SSH server ด้วยคำสั่งนี้:
```
apt install openssh-server
```

เมื่อการติดตั้งเสร็จสิ้น คุณสามารถเริ่มบริการ SSH server ด้วยคำสั่งนี้:
```
systemctl start sshd
```

อย่าลืมเปิดใช้งานบริการให้เริ่มอัตโนมัติเมื่อบูตเครื่อง ด้วยคำสั่งนี้:
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
ถ้าคุณต้องการรีติดตั้ง SSH server ให้แน่ใจว่าคุณได้ถอนการติดตั้งก่อน โดยใช้คำสั่ง: `dnf remove openssh`
:::

ก่อนติดตั้ง SSH server ให้แน่ใจว่าระบบของคุณเป็นเวอร์ชันล่าสุด รันคำสั่งนี้:
```
dnf update
```

จากนั้นติดตั้ง SSH server ด้วยคำสั่งนี้:
```
dnf install openssh-server
```

เมื่อการติดตั้งเสร็จสิ้น คุณสามารถเริ่มบริการ SSH server ด้วยคำสั่งนี้:
```
systemctl start sshd
```

อย่าลืมเปิดใช้งานบริการให้เริ่มอัตโนมัติเมื่อบูตเครื่อง ด้วยคำสั่งนี้:
```
systemctl enable sshd
```
</TabItem>
</Tabs>

## การเปิดใช้งานการล็อกอิน root

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
เพื่อเปิดใช้งานการล็อกอิน root คุณต้องแก้ไขไฟล์คอนฟิก openssh ในคู่มือนี้เราจะใช้ "nano" เป็นตัวแก้ไข

:::info
ถ้า "nano" ยังไม่ได้ติดตั้ง ต้องติดตั้งก่อน โดยใช้คำสั่งนี้: `yum install nano`
:::

เปิดไฟล์คอนฟิกด้วยคำสั่ง:
```
nano /etc/ssh/sshd_config 
```

ใช้ปุ่มลูกศรเลื่อนหาแถวนี้:
```
#PermitRootLogin prohibit-password
```

เปลี่ยนเป็นบรรทัดนี้เพื่อเปิดใช้งานการล็อกอิน root ระยะไกล:
```
PermitRootLogin yes
```

สุดท้าย รีสตาร์ท SSH Server เพื่อให้การตั้งค่าใหม่มีผล ด้วยคำสั่งนี้:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian" default>
เพื่อเปิดใช้งานการล็อกอิน root คุณต้องแก้ไขไฟล์คอนฟิก openssh ในคู่มือนี้เราจะใช้ "nano" เป็นตัวแก้ไข

:::info
ถ้า "nano" ยังไม่ได้ติดตั้ง ต้องติดตั้งก่อน โดยใช้คำสั่งนี้: `yum install nano`
:::

เปิดไฟล์คอนฟิกด้วยคำสั่ง:
```
nano /etc/ssh/sshd_config 
```

ใช้ปุ่มลูกศรเลื่อนหาแถวนี้:
```
#PermitRootLogin prohibit-password
```

เปลี่ยนเป็นบรรทัดนี้เพื่อเปิดใช้งานการล็อกอิน root ระยะไกล:
```
PermitRootLogin yes
```

สุดท้าย รีสตาร์ท SSH Server เพื่อให้การตั้งค่าใหม่มีผล ด้วยคำสั่งนี้:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu" default>
เพื่อเปิดใช้งานการล็อกอิน root คุณต้องแก้ไขไฟล์คอนฟิก openssh ในคู่มือนี้เราจะใช้ "nano" เป็นตัวแก้ไข

:::info
ถ้า "nano" ยังไม่ได้ติดตั้ง ต้องติดตั้งก่อน โดยใช้คำสั่งนี้: `yum install nano`
:::

เปิดไฟล์คอนฟิกด้วยคำสั่ง:
```
nano /etc/ssh/sshd_config 
```

ใช้ปุ่มลูกศรเลื่อนหาแถวนี้:
```
#PermitRootLogin prohibit-password
```

เปลี่ยนเป็นบรรทัดนี้เพื่อเปิดใช้งานการล็อกอิน root ระยะไกล:
```
PermitRootLogin yes
```

สุดท้าย รีสตาร์ท SSH Server เพื่อให้การตั้งค่าใหม่มีผล ด้วยคำสั่งนี้:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora" default>
เพื่อเปิดใช้งานการล็อกอิน root คุณต้องแก้ไขไฟล์คอนฟิก openssh ในคู่มือนี้เราจะใช้ "nano" เป็นตัวแก้ไข

:::info
ถ้า "nano" ยังไม่ได้ติดตั้ง ต้องติดตั้งก่อน โดยใช้คำสั่งนี้: `yum install nano`
:::

เปิดไฟล์คอนฟิกด้วยคำสั่ง:
```
nano /etc/ssh/sshd_config 
```

ใช้ปุ่มลูกศรเลื่อนหาแถวนี้:
```
#PermitRootLogin prohibit-password
```

เปลี่ยนเป็นบรรทัดนี้เพื่อเปิดใช้งานการล็อกอิน root ระยะไกล:
```
PermitRootLogin yes
```

สุดท้าย รีสตาร์ท SSH Server เพื่อให้การตั้งค่าใหม่มีผล ด้วยคำสั่งนี้:
```
systemctl restart sshd
```
</TabItem>
</Tabs>


## สรุป

ยินดีด้วย คุณได้ติดตั้งและตั้งค่า SSH service เรียบร้อยแล้ว! หากคุณมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย เราพร้อมช่วยเหลือคุณทุกวัน!


<InlineVoucher />