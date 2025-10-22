---
id: fivem-esx-disablehud
title: "FiveM: Desativar/ativar HUD"
description: "Entenda como atualizar a configuração do seu servidor ESX para melhorar o gerenciamento do HUD e o desempenho do servidor → Saiba mais agora"
sidebar_label: Desativar HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guia Arquivado
Este documento foi arquivado. Documentos são arquivados quando não são mais relevantes, estão incorretos ou desatualizados. Foi arquivado pelos seguintes motivos:

**Motivo**: O método apresentado é para uma versão antiga do ESX. Essa abordagem não pode ser usada na versão atual do ESX, pois a estrutura mudou. 
::::



<InlineVoucher />

## 📑 Encontrar e editar Config

Depois de fazer isso, abra a página Config e procure por es_extended.  
Basta pressionar CTRL + F e buscar por es_extended.  
Assim você encontra rapidinho.  
Vamos trabalhar nessas configurações.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Agora vamos dar uma olhada em: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

Depois, defina isso como false e salve o arquivo.

Agora vá para o Server.cfg.  
Ele também pode ser encontrado na página Config.  
Lá, procure novamente com CTRL + F por es_  
Procure por es_ui e delete essa linha completamente.  
Agora salve novamente.

Depois de fazer isso, só falta reiniciar o servidor e pronto.

<InlineVoucher />