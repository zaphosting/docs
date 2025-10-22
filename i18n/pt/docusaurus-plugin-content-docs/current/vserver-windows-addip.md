---
id: vserver-windows-addip
title: "VPS: Configure endereços IP adicionais no Windows"
description: "Descubra como otimizar o desempenho e a segurança do servidor usando múltiplos endereços IP para melhor isolamento dos serviços → Saiba mais agora"
sidebar_label: Endereços IP adicionais
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Ter múltiplos endereços IP em um servidor pode ser vantajoso por vários motivos, especialmente em ambientes de rede complexos ou para atender a requisitos específicos de desempenho, segurança e gerenciamento de rede. Atribuir diferentes endereços IP para diferentes serviços ou aplicações no mesmo servidor permite um isolamento melhor.

<InlineVoucher />


## Preparação

O uso de múltiplos endereços IP pressupõe que seu pacote de servidor já os inclua. Se você não reservou nenhum endereço IP adicional por padrão, será necessário adicioná-los via upgrade primeiro. Depois, conecte-se ao seu servidor via [RDP](vserver-windows-userdp).




## Configuração



### Coletando Informações

Primeiro, você precisa das informações sobre os endereços IP disponíveis. Endereços IP adicionais podem ser visualizados na gestão do servidor, na seção de endereços IP.

![](https://screensaver01.zap-hosting.com/index.php/s/ER3d6R7T28mNSKp/preview)





### Acessando a Configuração de Rede

Existem várias formas de acessar a configuração de rede em um Windows Server. Por exemplo, você pode acessar via Painel de Controle em **Central de Rede e Compartilhamento**.

Abra o **Painel de Controle**, clique em **Rede e Internet** e depois em **Central de Rede e Compartilhamento**. Em seguida, vá em "Alterar as configurações do adaptador" e dê um duplo clique no adaptador de rede (Ethernet 2). Isso abrirá o adaptador de rede, onde você deve acessar as propriedades.

Agora, nas **Propriedades** do adaptador de rede, selecione a opção **Protocolo IP Versão 4 (TCP/IPv4)**. Ali, você verá informações sobre o endereço IP principal, máscara de sub-rede, gateway padrão e os servidores DNS. Clique no botão **Avançado** para adicionar o(s) endereço(s) IP adicional(is).

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### Adicionando Endereço(s) IP

Agora, o endereço IP adicional é adicionado via **Configurações Avançadas de TCP/IP**. Para isso, clique no botão **Adicionar** em Endereços IP e preencha os campos de **Endereço IP** e **Máscara de Sub-rede**. No campo do endereço IP, insira o endereço IP adicional. A máscara de sub-rede usada é 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Conclusão

O endereço IP foi configurado e adicionado com sucesso. Você pode verificar o status atual dos endereços IP navegando até a seção **Endereços IP** na gestão do servidor. Lá, o endereço IP recém-adicionado deve aparecer como acessível.

![](https://screensaver01.zap-hosting.com/index.php/s/xBZGM72WX4nqXS6/preview)

<InlineVoucher />