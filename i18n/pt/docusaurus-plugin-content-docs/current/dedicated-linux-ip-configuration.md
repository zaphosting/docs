---
id: dedicated-linux-ip-configuration
title: "Servidor Dedicado: Configuração de IP (Ubuntu/Debian)"
description: "Aprenda a configurar um endereço IP estático em um servidor Linux rodando Ubuntu ou Debian → Saiba mais agora"
sidebar_label: Configurar Endereços IP
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introdução

Configurar endereços IP no seu Servidor Dedicado Linux permite que você controle como seu servidor se comunica dentro da rede. Isso inclui atribuir endereços IP, definir o gateway padrão e configurar servidores DNS necessários para a conectividade de rede.

:::warning Servidor inacessível por falta de conexão com a internet?
Caso seu servidor fique inacessível devido a uma configuração de rede incorreta ou falta de conexão com a internet, o acesso remoto via SSH pode não funcionar mais. Use o [console HTML iLO](dedicated-ilo.md#the-html5-console) para conectar ao seu servidor e corrigir a configuração de rede.
:::

<InlineVoucher />

## Preparação

Antes de configurar um endereço IP estático, certifique-se de ter as seguintes informações disponíveis:

- Endereço IP que deseja atribuir  
- Máscara de sub-rede  
- Gateway padrão  
- Servidores DNS  

Essas informações podem ser encontradas na interface web. Para isso, abra seu **Gerenciamento do Servidor Dedicado** e navegue até **Endereços IP**.

## Configuração

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Instalações Ubuntu usam o **Netplan** para configuração de rede. Conecte-se ao seu Servidor Dedicado via SSH e localize o arquivo de configuração do Netplan no diretório `/etc/netplan/`. Abra o arquivo de configuração:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Modifique a configuração para definir um endereço IP estático:
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

Ajuste os seguintes valores para corresponder à sua configuração de rede:

- 109.230.238.45 → Seu endereço IP estático  
- 109.230.238.1 → Seu gateway  
- Endereços DNS → Seus servidores DNS preferidos  

Salve o arquivo e aplique a configuração:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

O Debian geralmente usa o arquivo de configuração de interfaces de rede em vez do Netplan. Conecte-se ao seu Servidor Dedicado via SSH e abra o arquivo de configuração das interfaces de rede:

```
nano /etc/network/interfaces
```

Adicione ou modifique a configuração para sua interface de rede. Exemplo de configuração:

```bash
auto lo
iface lo inet loopback

# Interface de rede principal
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # opções dns-* são implementadas pelo pacote resolvconf, se instalado
        dns-nameservers 1.1.1.1
```

Ajuste os valores conforme sua configuração de rede:
- address → Seu endereço IP estático  
- netmask → Sua máscara de sub-rede  
- gateway → Seu gateway padrão  
- dns-nameservers → Seus servidores DNS preferidos  

Após salvar o arquivo de configuração, reinicie o serviço de rede:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Verificação

Após aplicar a configuração, é recomendado verificar se o novo endereço IP foi aplicado corretamente. Para isso, execute o seguinte comando no seu terminal:

```
ip a
```

Esse comando exibe todas as **interfaces de rede** disponíveis no sistema junto com seus detalhes de configuração atuais. Na saída, localize a interface que foi configurada anteriormente, geralmente chamada `eth0`, `ens18` ou um identificador similar dependendo do sistema.

Dentro da seção da interface, procure pela entrada **`inet`**, que representa o endereço IPv4 atribuído à interface. A saída deve conter o endereço IP estático que você configurou. Por exemplo:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Se o endereço correto aparecer na saída, a configuração do IP estático foi aplicada com sucesso. Se o novo endereço IP não aparecer, verifique novamente o arquivo de configuração e certifique-se de que as alterações foram salvas corretamente antes de reaplicar a configuração.



## Conclusão

Parabéns! Você configurou com sucesso o seu endereço IP no seu servidor Linux. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />