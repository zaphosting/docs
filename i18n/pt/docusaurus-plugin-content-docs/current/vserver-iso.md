---
id: vserver-iso
title: "VPS: Montar um arquivo ISO"
description: "Descubra como personalizar seu VPS com seu ISO preferido para ter controle total sobre seu ambiente de servidor → Saiba mais agora"
sidebar_label: Montar arquivo ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introdução
Quer ainda mais liberdade na escolha do seu sistema? Além dos nossos templates de SO, você pode, claro, montar seus próprios ISOs. É super fácil com nossos produtos VPS. Assim, você tem exatamente o sistema operacional no seu servidor que realmente quer!

<InlineVoucher />



## Arquivos ISO disponíveis

Além dos nossos templates padrão de SO pré-configurados, também oferecemos a opção de montar arquivos ISO adicionais. Isso proporciona ainda mais flexibilidade na configuração e gerenciamento do seu ambiente de servidor. Atualmente, nossos produtos VPS suportam os seguintes arquivos ISO: 

<SearchableItemList items={items} />





## Enviando um ISO personalizado

Se a imagem ISO necessária não estiver disponível na lista padrão, um ISO personalizado pode ser fornecido usando uma URL pública. A URL deve ser acessível via HTTP ou HTTPS e não pode exigir autenticação ou links de download com tempo limitado.

Após inserir a URL no campo **Adicionar ISO personalizado** e clicar em **Enviar ISO**, o ISO é importado automaticamente e fica disponível para instalação no servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

No máximo três imagens ISO personalizadas podem ser armazenadas ao mesmo tempo. Cada ISO enviado fica disponível por apenas 72 horas e é excluído automaticamente depois disso. Se o ISO ainda for necessário após esse período, ele deve ser enviado novamente. O cliente é responsável pelo conteúdo, licenciamento e segurança do ISO fornecido.









## Montando arquivo ISO
Para montar um ISO, vá ao painel de gerenciamento do seu VPS e abra **Configurações → ISOs**. Selecione o arquivo ISO desejado, ajuste a ordem de boot e então reinicie seu servidor. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Após o reboot, você pode se conectar ao seu servidor usando o cliente VNC e começar a instalar e configurar o sistema operacional.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Status Online ou Conexões Remotas após Montar ISO

Após montar um ISO, seu servidor ainda não estará configurado. Por isso, nenhum **status online** será exibido no painel, e conexões **RDP** ou **SSH** não estarão disponíveis. Elas só ficarão acessíveis depois que o sistema operacional for instalado e configurado com sucesso.

:::




## Conclusão
Parabéns, você selecionou e montou seu arquivo ISO com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂



<InlineVoucher />