function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <=1) {
                //Bebe
                img.setAttribute('src','https://www.revistapaisatentos.com.br/files/artigos/130/cuidados-com-o-bebe-25-perguntas-e-respostas-1-130.jpg')
                res.innerHTML = `Detectamos um Bebe com ${idade} ano.`
            }else if (idade >=2 && idade <10) {
                //Criança
                img.setAttribute('src','https://www.bancodasaude.com/cdn/press/1435086905crianaa.jpg')
                res.innerHTML = `Detectamos uma Criança com ${idade} anos.`
            }else if (idade < 16) {
                //Adolescente
                img.setAttribute('src','https://img.freepik.com/fotos-gratis/retrato-de-um-adolescente-sorridente_171337-893.jpg?size=626&ext=jpg')
                res.innerHTML = `Detectamos um Adolescente com ${idade} anos.`
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'https://tedxsaopaulo.com.br/wp-content/uploads/2018/08/jovem-mercado-705x435.jpg')
                res.innerHTML = `Detectamos um Jovem com ${idade} anos.`
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','https://sorridents.com.br/wp-content/uploads/2017/01/aparelho-ortodontico-para-adultos-por-que-usar-768x572.jpeg')
                res.innerHTML = `Detectamos um Adulto com ${idade} anos.`
            }else {
                //Idoso
                img.setAttribute('src','https://i0.wp.com/www.kdcare.com.br/wp-content/uploads/2019/01/Acessibilidade-para-idosos-5-dicas-para-deixar-sua-casa-mais-segura.jpg?fit=2500%2C1667&ssl=1')
                res.innerHTML = `Detectamos um Idoso com ${idade} anos.`
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <=1) {
                //Bebe
                img.setAttribute('src','https://1359028l.ha.azioncdn.net/img/2020/03/produto/102451/3/large/conjunto-de-bebe-feminino-coelhinha-natural-tile-e-sul.jpg')
                res.innerHTML = `Detectamos um Bebe com ${idade} ano.`
            }else if (idade >=2 && idade <10) {
                //Criança
                img.setAttribute('src','https://www.fadc.org.br/sites/default/files/2018-12/premiocrian%C3%A7a-grande.jpg')
                res.innerHTML = `Detectamos uma Criança com ${idade} anos.`
            }else if (idade < 16) {
                //Adolescente
                img.setAttribute('src','https://image.freepik.com/fotos-gratis/retrato-de-adolescente-feliz-por-voltar-a-universidade_23-2148586575.jpg')
                res.innerHTML = `Detectamos uma Adolescente com ${idade} anos.`
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src','https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/12/giovana-campiotto-418x235.jpg')
                res.innerHTML = `Detectamos uma Jovem com ${idade} anos.`
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','https://cdnstatic8.com/psicologafabiola.com.br/wp-content/uploads/2012/03/terapia-para-adulto-brooklin-e-vila-mariana.jpg')
                res.innerHTML = `Detectamos um Adulto com ${idade} anos.`
            }else {
                //Idoso
                img.setAttribute('src','https://lh3.googleusercontent.com/proxy/xvCcY8_ewT57xT7UdwaUg30BB4XwhWKqGtZTNUxKdBB9P9OA85LcpEtfy-3YTfFWh0IV9y2XVBSR2OyOB5kOQ8Fd66MQ0ZfXlPl6ff5hfBo1SBSeIe6FvV7-bV1K2AfXKgOVcSVknPD-kshMXOCLug')
                res.innerHTML = `Detectamos uma Idosa com ${idade} anos.`
            }
        }
        /*res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`*/
        res.appendChild(img)
    }
}
