---
id: dedicated-linux-docker
title: "ตั้งค่า Docker บนเซิร์ฟเวอร์ Linux - รันและจัดการคอนเทนเนอร์บนโครงสร้างพื้นฐานของคุณ"
description: "ค้นพบวิธีติดตั้ง Docker บนเซิร์ฟเวอร์ Linux ของคุณเพื่อรันแอปพลิเคชันแบบแยกส่วนอย่างมีประสิทธิภาพและเพิ่มประสิทธิภาพการใช้ทรัพยากร → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Docker
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## บทนำ

Docker คือซอฟต์แวร์เวอร์ชวลไลเซชันแบบโอเพนซอร์สที่น้ำหนักเบา เพื่อให้บริการหรือแอปพลิเคชันทำงานแบบแยกส่วนบนระบบเดียว แตกต่างจากเครื่องเสมือนจริงที่จะต้องจำลองหรือโฮสต์ระบบปฏิบัติการเพิ่มเติม แต่ Docker จะสร้างแค่สภาพแวดล้อมแอปพลิเคชันภายในระบบโฮสต์เท่านั้น ซึ่งไม่เพียงช่วยประหยัดทรัพยากรโดยรวม แต่ยังทำให้มี overhead ต่ำเมื่อเทียบกับเวอร์ชวลไลเซชันเต็มรูปแบบ ในคู่มือนี้เราจะครอบคลุมขั้นตอนการติดตั้ง Docker บนเซิร์ฟเวอร์ของคุณ

## การเตรียมตัว

ก่อนอื่น คุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ Linux ของคุณผ่าน SSH หากต้องการความช่วยเหลือ สามารถดูได้ที่ [การเข้าถึงเบื้องต้น (SSH)](dedicated-linux-ssh.md) คู่มือของเรา ตลอดคู่มือนี้ เราจะใช้ Ubuntu เป็นดิสโทร Linux

### เปิดใช้งานความเข้ากันได้กับ Docker

คุณต้องเปิดใช้งาน **Docker Compatibility** บนเว็บอินเทอร์เฟซของคุณเพื่อให้คอนเทนเนอร์ Docker ทำงานได้ มิฉะนั้นจะเจอข้อผิดพลาด `Permission Denied`

ไปที่ส่วน **Settings** บนแผงเว็บอินเทอร์เฟซของเซิร์ฟเวอร์ เปิดใช้งานตัวเลือก **Docker Compatibility** แล้วบันทึก

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

หลังบันทึกแล้ว ให้แน่ใจว่าได้รีสตาร์ทเซิร์ฟเวอร์ก่อนดำเนินการต่อ

## การติดตั้ง

ตอนนี้คุณเชื่อมต่อกับเซิร์ฟเวอร์ Linux แล้ว คุณสามารถเลือกวิธีติดตั้งจากรีโพซิทอรี Linux ด้านล่างเพื่อดูขั้นตอนที่เกี่ยวข้อง

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

เริ่มต้นด้วยการเพิ่มแพ็กเกจ Docker ผ่าน `apt` และตั้งค่าให้เรียบร้อย เพื่อให้คุณสามารถติดตั้งและอัปเดต Docker จากรีโพซิทอรีได้ง่ายในอนาคต

ใช้คำสั่งต่อไปนี้เพื่อเพิ่มกุญแจ GPG อย่างเป็นทางการของ Docker ลงในรายการรีโพซิทอรีของคุณ
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

หลังตั้งค่าเสร็จแล้ว คุณต้องเพิ่มรีโพซิทอรีลงในแหล่งที่มาของ `apt` ด้วยคำสั่งนี้
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

เมื่อเพิ่มรีโพซิทอรี Docker ลงในแหล่งที่มาแล้ว ให้รันคำสั่ง `apt-get update` เพื่อดึงการเปลี่ยนแปลง
```
sudo apt-get update
```

ตอนนี้คุณได้ตั้งค่ารีโพซิทอรี Docker สำหรับ `apt` เรียบร้อย ขั้นตอนสุดท้ายคือการติดตั้งแพ็กเกจ Docker คุณสามารถติดตั้งเวอร์ชันล่าสุดด้วยคำสั่งนี้
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

เริ่มต้นด้วยการติดตั้งแพ็กเกจ `dnf-plugins-core` ซึ่งช่วยจัดการรีโพซิทอรี
```
sudo dnf -y install dnf-plugins-core
```

เมื่อแพ็กเกจติดตั้งแล้ว ให้เพิ่มรีโพซิทอรี Docker และติดตั้งด้วยคำสั่งนี้
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

ตอนนี้ Docker ควรถูกติดตั้งแล้ว ขั้นตอนสุดท้ายคือเริ่มและเปิดใช้งาน Docker เพื่อให้ทำงานได้
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

เพื่อตรวจสอบว่าการติดตั้งสำเร็จ ให้ลองรันอิมเมจ **hello-world** ด้วยคำสั่งนี้
```
sudo docker run hello-world
```

ถ้าสำเร็จ คุณจะเห็นข้อความทักทายพร้อมข้อมูลพื้นฐาน หากเจอข้อผิดพลาด `Permission Denied` ให้ตรวจสอบว่าคุณเปิดใช้งานตัวเลือก **Docker Compatibility** บนเว็บอินเทอร์เฟซและรีสตาร์ทเซิร์ฟเวอร์ตามที่อธิบายไว้ในส่วนการเตรียมตัวแล้ว

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

คุณได้ติดตั้ง Docker บนเซิร์ฟเวอร์ Linux ของคุณเรียบร้อยแล้ว

## การตั้งค่าหลังติดตั้ง

หลังจากติดตั้ง Docker บนเซิร์ฟเวอร์แล้ว คุณอาจต้องการตั้งค่าเพิ่มเติมเพื่อไม่ต้องใช้ sudo ทุกครั้งที่รันคำสั่ง Docker และตั้งค่าให้ Docker เริ่มทำงานตอนบูตเซิร์ฟเวอร์

### จัดการ Docker โดยไม่ต้องใช้ Sudo

คุณสามารถลบความจำเป็นในการพิมพ์ `sudo` นำหน้าคำสั่ง Docker ทั้งหมดได้โดยการสร้างกลุ่ม Docker ใหม่และเพิ่มผู้ใช้ของคุณเข้าไป ซึ่งช่วยเพิ่มความสะดวก แต่ต้องระวังเพราะจะให้สิทธิ์ระดับ root กับผู้ใช้นั้นโดยอ้อม

สร้างกลุ่ม `docker` และเพิ่มผู้ใช้ปัจจุบันเข้าไปด้วยคำสั่งนี้
```
# สร้างกลุ่ม Docker
sudo groupadd docker

# เพิ่มผู้ใช้ปัจจุบันเข้าในกลุ่ม Docker
sudo usermod -aG docker $USER
```

หลังจากนั้นแนะนำให้รีสตาร์ทเซิร์ฟเวอร์เพื่อให้ระบบประเมินสิทธิ์กลุ่มใหม่ หรือจะใช้คำสั่ง `newgrp docker` ก็ได้

ตอนนี้ลองรันคำสั่ง `docker run hello-world` อีกครั้งโดยไม่ต้องใช้ `sudo`

:::tip
บางครั้งอาจเจอข้อผิดพลาดเกี่ยวกับไฟล์ config หากเคยรันคำสั่งด้วยสิทธิ์ `sudo` มาก่อน เพื่อแก้ไขให้ใช้คำสั่ง `rmdir ~/.docker/` เพื่อลบไดเรกทอรี Docker ซึ่งจะถูกสร้างใหม่อัตโนมัติเมื่อใช้คำสั่ง Docker ครั้งถัดไป
:::

ถ้าคำสั่งรันได้ตามปกติ แสดงว่าคุณตั้งค่า Docker ให้รันโดยไม่ต้องใช้ `sudo` สำเร็จแล้ว

### ตั้งค่าให้ Docker เริ่มตอนบูต

คุณสามารถตั้งค่าให้ Docker เริ่มทำงานอัตโนมัติเมื่อเซิร์ฟเวอร์บูตผ่าน `systemd` ซึ่งใช้โดยดิสโทร Linux ส่วนใหญ่

:::tip
บน Ubuntu และ Debian Docker จะตั้งค่าให้เริ่มอัตโนมัติเมื่อบูตโดยดีฟอลต์อยู่แล้ว ถ้าใช้ดิสโทรสองตัวนี้ไม่ต้องทำอะไรเพิ่ม
:::

เปิดใช้งานบริการ Docker ให้รันตอนบูตด้วยคำสั่งนี้
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