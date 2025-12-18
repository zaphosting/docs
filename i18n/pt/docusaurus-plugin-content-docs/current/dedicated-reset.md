---
id: dedicated-reset
title: "Servidor Dedicado: Reset do Servidor (Estado de fábrica)"
description: "Descubra como resetar seu servidor de forma eficaz para restaurar o desempenho ou começar do zero com remoção segura dos dados → Saiba mais agora"
sidebar_label: Reset do servidor
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Seu servidor não está mais funcionando como deveria ou você quer começar do zero, mas não sabe como? Relaxa, você pode resetar seu servidor reinstalando ele. Este guia vai te mostrar como fazer isso e o que você precisa considerar.





## Preparativos

Antes de resetar os dados no seu servidor, é importante saber que os dados existentes serão perdidos. Se você tem dados importantes, esse é o momento certo para fazer um backup antes de começar a reinstalação. Depois, você precisa decidir exatamente como quer resetar seu sistema. 



## Resetando os dados

Existem duas formas diferentes de resetar os dados, dependendo das suas necessidades e situação. A seguir, explicamos as duas opções em detalhes:

- Resetar os dados usando configuração RAID (Método rápido)
- Resetar os dados usando Wipe ISO (Método completo)

Ao resetar os dados usando a configuração RAID, os dados existentes são apagados logicamente e substituídos por novos dados, tornando essa uma solução rápida e eficiente para reinstalar o sistema.

Já o reset com Wipe ISO envolve múltiplos ciclos de exclusão, garantindo que todos os dados sejam removidos de forma permanente e irreversível. Esse método é ideal para uma limpeza completa do sistema quando uma remoção profunda dos dados é necessária.



### Método rápido

Assim como na configuração do RAID, a configuração RAID deve ser aberta com a tecla `F8` durante o processo de boot. Abra a opção de menu **Delete Logical Drive** na configuração RAID. Isso deve mostrar a configuração RAID atual e os discos rígidos. Pressione a tecla `F8` para deletar o RAID existente. Isso deve ser confirmado pressionando a tecla `F3`. 

Depois, volte para a configuração RAID e abra a opção de menu **Create Logical Drive**. Agora selecione os discos rígidos e a configuração RAID desejada (Raid 0/1) e crie o RAID confirmando com a tecla `Enter`.

Se você não está familiarizado com como configurar o RAID no seu sistema, recomendamos dar uma olhada no nosso guia geral [Configurar RAID](dedicated-raid.md). 



### Método completo

O Wipe ISO necessário deve ser montado e executado para realizar o processo real de reset dos dados. Arquivos ISO podem ser montados via iLO ou pelo console remoto. Se você ainda não sabe exatamente como fazer isso, dê uma olhada no guia [ISO Própria](http://localhost:3000/guides/docs/dedicated-iso).

Monte o seguinte arquivo Wipe ISO no seu servidor e reinicie-o:


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

Assim que o servidor reiniciar, o Wipe ISO deve ser detectado e carregado automaticamente. Conecte-se ao seu servidor dedicado usando um console remoto (HTML5, .NET, Java Web Start) de sua preferência.

Lá você verá como o servidor executa automaticamente o processo e o progresso da formatação. Seu servidor vai sobrescrever todos os volumes existentes, apagando efetivamente todos os dados. Dependendo do tamanho do SSD, esse processo pode levar de 45 minutos até 2 horas.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
Esse processo não pode ser desfeito e é definitivo. Não há backups adicionais que possam ser importados em caso de necessidade.
Recomendamos fortemente que você não realize esse processo a menos que tenha certeza absoluta de que quer apagar todos os seus dados.
:::



## Conclusão

Parabéns, você apagou com sucesso os dados no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂


