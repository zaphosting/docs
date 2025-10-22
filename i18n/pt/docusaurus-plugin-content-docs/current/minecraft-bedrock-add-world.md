---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock: Importe seu Próprio Mundo"
description: "Descubra como importar e compartilhar seus mundos customizados do Minecraft Bedrock no seu servidor para uma jogatina multiplayer sem complicações → Saiba mais agora"
sidebar_label: Importe seu Próprio Mundo
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
O Minecraft Bedrock Edition permite que você crie seus próprios mundos e os use no seu servidor. Neste guia, vamos mostrar como importar um mundo próprio para o seu Minecraft: Servidor Bedrock e compartilhar com seus amigos.

<InlineVoucher />

## Preparação

Para importar um mundo no seu Minecraft Bedrock Server, você precisa se conectar via FTP. Se não estiver familiarizado com isso, recomendamos dar uma olhada no [guia de acesso FTP](gameserver-ftpaccess.md).

Certifique-se de já ter salvo o mundo que deseja importar no seu computador. O mundo deve estar em uma pasta com os arquivos correspondentes.  
Se quiser enviar um mundo do Minecraft: Bedrock single-player, você pode encontrá-lo no seguinte caminho:
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Instalação

### Pare o Servidor

Antes de começar a importação, você precisa parar seu Minecraft Bedrock Server. Isso garante que nenhum dado seja perdido e que a importação ocorra sem problemas.

### Envie o Mundo

Navegue via FTP até o diretório onde os mundos do seu servidor estão armazenados. O caminho geralmente é:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Aqui você verá as pastas de todos os mundos atualmente armazenados no seu servidor. Cada mundo tem um nome único.

Envie a pasta do mundo que deseja importar para esse diretório. Certifique-se de não alterar o nome da pasta, pois o Minecraft não reconhecerá o mundo caso contrário.

Depois, você precisa abrir o arquivo `server.properties`, que fica na pasta principal do servidor, e alterar o valor de `level-name` para o nome da pasta do seu mundo:

```
level-name=Bedrock level
```
:::tip
Se quiser usar seu mundo padrão novamente, basta mudar o valor de volta para `Bedrock level` e reiniciar o servidor!
:::

### Inicie o Servidor

Depois de enviar o mundo com sucesso, inicie seu servidor novamente. O mundo importado deve carregar automaticamente.

### Verifique as Alterações

Conecte-se ao seu servidor e confira se o mundo importado foi carregado corretamente. Agora você deve conseguir jogar no novo mundo. Se algo não funcionar como esperado, revise os passos e confirme se as pastas dos mundos estão nomeadas e posicionadas corretamente.

## Conclusão

Importar um mundo no seu Minecraft Bedrock Server é um processo simples que permite compartilhar suas criações com a galera. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />