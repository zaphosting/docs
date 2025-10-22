---
id: cs16-plugins
title: "CS 1.6: Instale plugins no seu próprio servidor"
description: "Descubra como turbinar seu servidor de jogos Counter-Strike 1.6 com AMXmodX e Metamod para personalização avançada e administração → Saiba mais agora"
sidebar_label: Instalar Plugins
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Introdução

**AMXmodX** e **Metamod** são essenciais para usar plugins em um servidor de jogos Counter-Strike 1.6. São duas extensões do Half Life que permitem personalizar seu servidor muito além do básico. Isso inclui, por exemplo, o uso de plugins e uma administração estendida do seu servidor.

<InlineVoucher />

## Instalação do AMXmodX / Metamod

### Preparação

Primeiro de tudo, você precisa das extensões propriamente ditas. Elas podem ser baixadas em [amxmodx.org](https://amxmodx.org/downloads-new.php). Sempre use as versões mais recentes (**estáveis**), para garantir que estejam totalmente funcionais e compatíveis.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Você vai precisar dos pacotes Linux **AMX Mod X Base, Counter-Strike Addon e Metamod**. Faça o download deles lá. Depois disso, você terá três arquivos compactados. Descompacte-os no seu computador. Isso vai gerar uma pasta **addons** que contém as pastas **amxmodx** e **metamod**:

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### Instalação

Com os passos acima prontos, é hora da instalação de verdade. Os arquivos precisam ser enviados para seu servidor via FTP. Você vai precisar de um cliente FTP para isso. Se não sabe o que é FTP e como funciona, dá uma olhada neste guia: [Acesso via FTP](gameserver-ftpaccess.md)

Agora, a pasta **addons** deve ser enviada para o diretório principal do servidor. A estrutura de arquivos da pasta deve ficar assim:

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

A configuração do **AMXmodX** e **Metamod** está concluída. Você pode se conectar ao seu servidor no jogo e usar o comando ``amxx version`` no console para verificar se o AMX foi instalado com sucesso. A saída deve ser parecida com esta:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Se aparecer a mensagem **Unknown command**, algo deu errado na instalação.

## Instalação de Plugins

### Preparação

Com o setup do **AMXmodX** e **Metamod** funcionando, você pode começar a instalar plugins. Primeiro, baixe os plugins que quer instalar no servidor. Uma seleção enorme de plugins está disponível em [amxmodx.org](https://www.amxmodx.org/compiler.php). Muitos plugins foram publicados lá ao longo dos anos e novos continuam sendo adicionados regularmente. Você precisa do arquivo **.amxx** dos plugins que escolher.

### Instalação

Com os plugins baixados, agora começa a instalação deles. A configuração dos plugins também é feita via FTP. Os arquivos dos plugins devem ser enviados para o diretório de plugins em ``../addons/amx``.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

Na próxima vez que o servidor iniciar, os plugins enviados devem ser carregados automaticamente.

## Plugins Populares

Ainda procurando os plugins perfeitos para seu servidor?  
Dá uma olhada na nossa lista selecionada com os plugins mais populares e recomendados para melhorar sua jogabilidade e dar aquele toque final no seu servidor. Inspire-se e encontre exatamente as adições que combinam com seu projeto.

<SearchableItemList items={items} />

## Conclusão

Se você seguiu todos os passos, deve ter instalado com sucesso o AMXmodX / Metamod e os plugins que queria. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te dar aquela força! 🙂

<InlineVoucher />