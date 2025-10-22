---
id: dedicated-linux-docker
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง Docker"
description: "ค้นพบวิธีติดตั้ง Docker บนเซิร์ฟเวอร์ Linux ของคุณเพื่อรันแอปแยกกันอย่างมีประสิทธิภาพและเพิ่มประสิทธิภาพการใช้ทรัพยากร → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Docker
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## บทนำ

Docker คือซอฟต์แวร์เวอร์ชวลไลเซชันแบบโอเพนซอร์สที่น้ำหนักเบา เพื่อให้บริการหรือแอปพลิเคชันทำงานแยกกันบนระบบเดียว แตกต่างจากเครื่องเสมือนจริงที่ต้องจำลองหรือโฮสต์ระบบปฏิบัติการเพิ่มเติม แต่ Docker จะสร้างแค่สภาพแวดล้อมแอปพลิเคชันภายในระบบโฮสต์เท่านั้น ซึ่งไม่เพียงช่วยประหยัดทรัพยากรโดยรวม แต่ยังทำให้มี overhead ต่ำเมื่อเทียบกับการเวอร์ชวลไลเซชันเต็มรูปแบบ ในคู่มือนี้ เราจะครอบคลุมขั้นตอนการติดตั้ง Docker บนเซิร์ฟเวอร์ของคุณ

<InlineVoucher />

## การเตรียมตัว

ก่อนอื่น คุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ Linux ของคุณผ่าน SSH หากต้องการความช่วยเหลือ โปรดดูที่ [การเข้าถึงเบื้องต้น (SSH)](dedicated-linux-ssh.md) คู่มือของเรา ตลอดคู่มือนี้ เราจะใช้ Ubuntu เป็นดิสโทร Linux

### เปิดใช้งานความเข้ากันได้กับ Docker

คุณต้องเปิดใช้งาน **ความเข้ากันได้กับ Docker** บนเว็บอินเทอร์เฟซของคุณเพื่อให้คอนเทนเนอร์ Docker ทำงานได้ มิฉะนั้นจะเจอข้อผิดพลาด `Permission Denied`

ไปที่ส่วน **การตั้งค่า** บนแผงเว็บอินเทอร์เฟซของเซิร์ฟเวอร์ของคุณ เปิดใช้งานตัวเลือก **ความเข้ากันได้กับ Docker** แล้วบันทึก

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

หลังจากบันทึกแล้ว ให้แน่ใจว่าได้รีสตาร์ทเซิร์ฟเวอร์ก่อนดำเนินการต่อ

## การติดตั้ง

ตอนนี้คุณเชื่อมต่อกับเซิร์ฟเวอร์ Linux แล้ว คุณสามารถดำเนินการติดตั้งได้ เลือกจากรีโพสิตอรี Linux ด้านล่างเพื่อดูขั้นตอนการติดตั้งที่เกี่ยวข้อง

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

เริ่มต้นด้วยการเพิ่มแพ็กเกจ Docker ผ่าน `apt` และตั้งค่าให้เรียบร้อย ซึ่งจะช่วยให้คุณติดตั้งและอัปเดต Docker จากรีโพสิตอรีได้ง่ายในอนาคต

ใช้คำสั่งต่อไปนี้เพื่อเพิ่มกุญแจ GPG อย่างเป็นทางการของ Docker ลงในรายการรีโพสิตอรีของคุณ
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

เมื่อเตรียมพร้อมแล้ว คุณต้องเพิ่มรีโพสิตอรีลงในแหล่งที่มาของ `apt` ด้วยคำสั่งนี้
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

หลังจากเพิ่มรีโพสิตอรี Docker ลงในแหล่งที่มาแล้ว ให้รันคำสั่ง `apt-get update` เพื่อดึงการเปลี่ยนแปลง
```
sudo apt-get update
```

ตอนนี้คุณได้ตั้งค่ารีโพสิตอรี Docker สำหรับ `apt` เรียบร้อยแล้ว ขั้นตอนสุดท้ายคือการติดตั้งแพ็กเกจ Docker คุณสามารถติดตั้งเวอร์ชันล่าสุดด้วยคำสั่งนี้
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

เริ่มต้นด้วยการติดตั้งแพ็กเกจ `dnf-plugins-core` ซึ่งช่วยจัดการรีโพสิตอรี
```
sudo dnf -y install dnf-plugins-core
```

เมื่อแพ็กเกจติดตั้งแล้ว ให้เพิ่มรีโพสิตอรี Docker และติดตั้งด้วยคำสั่งนี้
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

ตอนนี้ Docker ควรติดตั้งเรียบร้อย ขั้นตอนสุดท้ายคือเริ่มและเปิดใช้งาน Docker เพื่อให้ทำงานได้
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

เพื่อตรวจสอบว่าการติดตั้งสำเร็จ ให้ลองรันอิมเมจ **hello-world** ด้วยคำสั่งนี้
```
sudo docker run hello-world
```

ถ้าสำเร็จ คุณจะเห็นข้อความทักทายพร้อมข้อมูลพื้นฐาน หากเจอข้อผิดพลาด `Permission Denied` ให้ตรวจสอบว่าคุณเปิดใช้งานตัวเลือก **ความเข้ากันได้กับ Docker** บนเว็บอินเทอร์เฟซและรีสตาร์ทเซิร์ฟเวอร์ตามที่อธิบายในส่วน [การเตรียมตัว](#การเตรียมตัว) แล้ว

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

คุณติดตั้ง Docker บนเซิร์ฟเวอร์ Linux ของคุณเรียบร้อยแล้ว

## การตั้งค่าหลังติดตั้ง

หลังจากติดตั้ง Docker บนเซิร์ฟเวอร์แล้ว คุณอาจต้องการตั้งค่าเพิ่มเติมเพื่อไม่ต้องใช้ sudo ทุกครั้งที่รันคำสั่ง Docker และตั้งค่าให้ Docker เริ่มทำงานตอนบูตเซิร์ฟเวอร์

### จัดการ Docker โดยไม่ใช้ Sudo

คุณสามารถลบความจำเป็นในการพิมพ์ `sudo` นำหน้าคำสั่ง Docker ทั้งหมดได้โดยการสร้างกลุ่ม Docker ใหม่และเพิ่มผู้ใช้ของคุณเข้าไป ซึ่งช่วยให้สะดวกขึ้น แต่ต้องระวังเพราะจะให้สิทธิ์ระดับ root กับผู้ใช้นั้นโดยอ้อม

สร้างกลุ่ม `docker` และเพิ่มผู้ใช้ปัจจุบันเข้าไปด้วยคำสั่งนี้
```
# สร้างกลุ่ม Docker
sudo groupadd docker

# เพิ่มผู้ใช้ปัจจุบันเข้าในกลุ่ม Docker
sudo usermod -aG docker $USER
```

หลังจากนี้ เราแนะนำให้รีสตาร์ทเซิร์ฟเวอร์เพื่อให้ระบบประเมินสิทธิ์กลุ่มใหม่ หรือจะใช้คำสั่ง `newgrp docker` ก็ได้

ตอนนี้ลองรันคำสั่ง `docker run hello-world` อีกครั้งโดยไม่ใช้ `sudo` เพื่อยืนยันว่าทำงานได้

:::tip
บางครั้งคุณอาจเจอข้อผิดพลาดเกี่ยวกับไฟล์ config ถ้าคุณเคยรันคำสั่งด้วยสิทธิ์ `sudo` มาก่อน เพื่อแก้ไข ให้ลบโฟลเดอร์ Docker ด้วยคำสั่ง `rmdir ~/.docker/` ซึ่งจะถูกสร้างขึ้นใหม่อัตโนมัติเมื่อใช้คำสั่ง Docker ครั้งถัดไป
:::

ถ้าคำสั่งทำงานตามคาด แสดงว่าคุณตั้งค่า Docker ให้รันโดยไม่ต้องใช้สิทธิ์ `sudo` สำเร็จแล้ว

### ตั้งค่าให้ Docker เริ่มตอนบูต

คุณสามารถตั้งค่าให้ Docker เริ่มทำงานอัตโนมัติเมื่อเซิร์ฟเวอร์บูตผ่าน `systemd` ซึ่งใช้โดยดิสโทร Linux ส่วนใหญ่

:::tip
บน Ubuntu และ Debian Docker จะตั้งค่าให้เริ่มอัตโนมัติเมื่อบูตโดยดีฟอลต์ ถ้าคุณใช้ดิสโทรสองตัวนี้ ไม่ต้องทำอะไรเพิ่ม
:::

คุณสามารถเปิดใช้งานบริการ Docker ให้รันตอนบูตได้ด้วยคำสั่งนี้
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

ถ้าต้องการปิดการรันตอนบูต ให้เปลี่ยน `enable` เป็น `disable` คุณยังสามารถจัดการบริการด้วยคำสั่งย่อยของ `systemctl` เช่น
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า Docker บนเซิร์ฟเวอร์ Linux ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />