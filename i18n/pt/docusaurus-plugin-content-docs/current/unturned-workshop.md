---
id: unturned-workshop
title: "Unturned: Instale conteúdo do Workshop no servidor"
description: "Descubra como turbinar seu servidor de jogos Unturned com conteúdo personalizado do Steam Workshop para uma experiência de jogo única → Saiba mais agora"
sidebar_label: Conteúdo do Workshop
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

O Steam Workshop te dá a chance de personalizar ainda mais seu servidor. A seguir, vamos mostrar como adicionar mais conteúdo ao seu servidor usando o Steam Workshop.

### Preparação

Existem várias fontes onde você pode baixar mods, mapas, modelos, etc. A mais popular é o Steam Workshop. Lá você encontra muitos recursos que podem ser instalados no seu servidor. Primeiro, você precisa encontrar os itens desejados no Workshop. O Steam Workshop para Unturned está aqui: [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

Depois de escolher, copie o ID do item do Workshop e adicione ele na interface. Dependendo se você está navegando pelo Steam Workshop via navegador ou pelo Steam Client, veja como copiar o ID:

- **Steam Client**

  Clique com o botão direito na página do item no Steam Workshop e selecione Copiar URL da página. Copie o ID da URL.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

- **Navegador**

  Você vai encontrar uma sequência de números depois de **.../?id=** na barra de endereço. Copie essa sequência.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)

### Adicionar conteúdo

Depois de coletar os conteúdos desejados, agora é hora de adicioná-los ao servidor. Os conteúdos serão especificados no arquivo **WorkshopDownloadConfig.json**, que você encontra na interface em Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

Agora adicionamos os IDs dos itens do Steam Workshop em 'FileIDs'. O resultado final pode ficar assim:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Exemplo (Placeholder)
    0987654321  // Exemplo (Placeholder)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Atualização do arquivo do Workshop detectada, desligando em: {0}",
  "Shutdown_Kick_Message": "Desligando para atualização do arquivo do Workshop."
}
```

Depois disso, é só iniciar o servidor. O conteúdo adicionado será baixado automaticamente durante o processo de startup. Você pode acompanhar isso no Console ao vivo. A saída deve ser parecida com isso:

```
1 item(s) do workshop para baixar...
Baixando item do workshop 1567256534
Item do workshop 1567256534 baixado com sucesso
```

Pronto! O conteúdo foi baixado, configurado e já deve estar ativo no seu servidor.

<InlineVoucher />