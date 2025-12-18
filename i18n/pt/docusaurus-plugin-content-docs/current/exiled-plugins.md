---
id: exiled-plugins
title: "SCP EXILED: Instalando plugins"
description: "Descubra como expandir e personalizar seu servidor com plugins confiáveis para funcionalidades e customizações avançadas → Saiba mais agora"
sidebar_label: Instalar Plugins
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Introdução

Plugins permitem que você expanda e personalize ainda mais seu servidor. A seguir, vamos explicar onde encontrar os plugins mais usados e como configurá-los.

<InlineVoucher />

## Preparação

Primeiro, você precisa baixar os plugins que deseja instalar no seu servidor. Uma grande variedade de plugins EXILED pode ser encontrada na página oficial do GitHub deles. Depois de escolher um repositório de plugin, você encontrará uma seção de releases onde pode baixar a versão mais recente. Instruções detalhadas sobre como proceder estão logo abaixo.

Embora plugins possam ser baixados de várias fontes, recomendamos usar plataformas confiáveis como o repositório oficial do GitHub, pois são geralmente as mais seguras. Sempre tenha cuidado ao adicionar plugins ao seu servidor. Verifique a fonte, confira os desenvolvedores e entenda completamente o que o plugin faz antes de instalar.

Para baixar um plugin do GitHub, comece visitando a página oficial do [EXILED no GitHub](https://github.com/Exiled-Team) e selecione o repositório do plugin que deseja usar.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Dentro do repositório do plugin, procure a seção **Releases**, localizada no lado direito.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

Na seção Releases, você encontrará um arquivo **.dll** para download. Clique nele para iniciar o download.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

Pronto! Depois de baixar, você pode seguir para os passos de instalação mais abaixo neste guia para aprender como instalar o arquivo **.dll** no seu servidor.


## Instalação

Depois de baixar os plugins desejados, você pode prosseguir com a instalação. Isso é feito via **FTP**, então você precisará de um cliente FTP para enviar os arquivos para seu servidor. Se ainda não conhece FTP e como funciona, confira este guia: [Acesso via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Você encontrará o diretório correto dos plugins em: ```/gXXXXXX/.config/EXILED/Plugins```. Basta enviar os arquivos **.dll** dos plugins baixados para essa pasta. Depois do upload, deve ficar parecido com isso:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Quando essa etapa estiver concluída, a instalação do plugin estará finalizada. Por fim, confira o **console ao vivo** para verificar se o plugin foi compilado e carregado com sucesso. A confirmação no console deve ser assim:  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Plugins Populares

Ainda procurando os plugins perfeitos para seu servidor? Navegue pela nossa lista cuidadosamente selecionada dos plugins mais populares e recomendados para melhorar sua jogabilidade e dar aquele toque final que seu servidor merece. Inspire-se e encontre exatamente as adições que combinam com seu projeto.

<SearchableItemList items={items} />


## Conclusão

Se você seguiu todos os passos, seu plugin deve estar instalado com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />