# Teste para desenvolvedor RoR Full Stack Cfaz.net

Olá, tudo bem?

Esse repositório é um teste de competências desenvolvido pela empresa Cfaz.net para seleção de candidatos à vaga de desenvolvedor Ruby on Rails.

O teste consiste em fazer algumas modificações neste projeto. Para isso, você deve fazer um fork do projeto, fazer as alterações de acordo com as indicações abaixo e nos enviar o link do seu github para rh@cfaz.net. Você terá 7 dias para finalizar. Boa sorte!

## Contextualização
Todo paciente que é indicado para fazer um tratamento ortodôntico deve fazer um exame chamado cefalometria, que é um laudo realizado sobre a telerradiografia (radiografia lateral do crânio). Esse exame mede distâncias e ângulos do crânio e auxilia o ortodontista a fazer o planejamento. A partir disso, o ortodontista define quanto tempo e qual aparelho ortodôntico o paciente deverá usar. Uma dessas medidas, se chama profundidade maxilar, que é um ângulo formado por dois planos, chamados Po-Or e N-A. Po é o ponto pório, Or é o ponto orbital, N é o ponto násio e A é o ponto A. Então para conseguir medir esse ângulo, precisamos desses quatro pontos. Segue uma imagem para facilitar o entendimento.

![profundidade maxilar](https://user-images.githubusercontent.com/1520828/59073049-ccdf3780-889b-11e9-8e10-c7b30175b4ae.png)

## Teste
Separamos o teste em três partes e cada parte testa um conhecimento. Faça o maior número de partes que você conseguir, que isso vai impactar no salário que vamos te propor, conforme foi anunciado na vaga. Você pode usar qualquer gem ou plugin que precisar, caso não esteja especificado. Este projeto tem o CRUD de paciente e você deverá modificar para que seja possível armazenar exames (paciente pode ter um ou mais exames), cada exame consiste no armazenamento desses 4 pontos. Além de armazenar os pontos você deve calcular o valor do ângulo conforme a figura.

### Parte 1 - Conhecimentos gerais de RoR, matemática e lógica
- Criar o CRUD de exames
- Exibir a listagem de exames do paciente (alterar a view show de pacientes) com os pontos e valor do ângulo calculado
- Passar nos specs criados (**ATENÇÃO** Não sobrescreva o arquivo spec/models/exam_spec.rb)
- Adicionar data de nascimento no paciente

### Parte 2 - Conhecimentos de front-end
Nesta parte esperamos que todo o CRUD de exames seja feito via ajax, então é necessário alterar a show de paciente para:
- Carregar a listagem de exames via ajax, após o load da página
- Alterar o funcionamento do botão de editar exame para que ao clicar, renderize o form de exame (sem reload ou redirecionamento de página) e possibilite a alteração do exame e salve os dados via ajax, sem reload de página
- Alterar o funcionamento do botão novo exame para que ao clicar, renderize o form de exame (sem reload ou redirecionamento de página) e possibilite a criação de um novo exame

### Parte 3 - Conhecimentos de WebGL com three.js
**(Obrigatório o uso do three.js)**
- Criar na página show de exame um canvas para representar graficamente os planos Po-Or e N-A do paciente no espaço 3D. Pode utilizar qualquer classe para desenhar(Line, PlaneGeometry, Shape, ...). O resultado esperado é o desenho dos dois planos e a interseção desses.
- Implementar ações de movimento de câmera para visualizar os planos de outros ângulos. (dica: utilizar o THREE.TrackballControls)

## Entrega
A data de entrega estará no seu email, após a entrega iremos avaliar o seu código e dar a resposta em 14 dias.

**ATENÇÃO: Não é um teste pequeno, comece logo! ;)**


Boa sorte!
