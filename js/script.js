window.onload = function() {

    const scroll = new SmoothScroll('a[href*="#"]', {
        speed : 400,
    });



    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function() {
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + '%';
    }


    var devLogiciel = document.getElementById('developpement_logiciel');
    var devFrontEnd = document.getElementById('developpement_front_end');
    var devBackEnd = document.getElementById('developpement_back_end');

    var devLogicielTitle = document.getElementById('developpement_logiciel_title');
    var devFrontEndTitle = document.getElementById('developpement_front_end_title');
    var devBackEndTitle = document.getElementById('developpement_back_end_title');


    devLogicielTitle.classList.add('active');
    devLogicielTitle.addEventListener('click', function() {
        devLogiciel.style.display = 'block';
        devBackEnd.style.display = 'none';
        devFrontEnd.style.display = 'none';
        devLogicielTitle.classList.add('active');
        devBackEndTitle.classList.remove('active');
        devFrontEndTitle.classList.remove('active');
    } );

    devBackEndTitle.addEventListener('click', function() {
        devBackEnd.style.display = 'block';
        devLogiciel.style.display = 'none';
        devFrontEnd.style.display = 'none';
        devBackEndTitle.classList.add('active');
        devFrontEndTitle.classList.remove('active');
        devLogicielTitle.classList.remove('active');
        var skills = document.getElementsByClassName('competences');
        skills[2].style.borderRadius = '10px';
    } );


    devFrontEndTitle.addEventListener('click', function() {
        devFrontEnd.style.display = 'block';
        devLogiciel.style.display = 'none';
        devBackEnd.style.display = 'none';
        devFrontEndTitle.classList.add('active');
        devBackEndTitle.classList.remove('active');
        devLogicielTitle.classList.remove('active');
        var skills = document.getElementsByClassName('competences');
        skills[1].style.borderRadius = '10px';
    } );



    var competenceTitle = document.getElementsByClassName('competence_title');
    var competenceImg = document.getElementsByClassName('competence_img');
    for (let i = 0; i < competenceTitle.length; i++) {
        competenceTitle[i].addEventListener('mouseover', function() {
            competenceImg[i].style.width = '90px';
            competenceImg[i].style.height = '90px';
            competenceImg[i].style.paddingTop = '5px';
            competenceImg[i].style.paddingBottom = '5px';
            competenceImg[i].style.transition = 'all 0.5s ease';
        } );
        competenceTitle[i].addEventListener('mouseout', function() {
            competenceImg[i].style.width = '80px';
            competenceImg[i].style.height = '80px';
            competenceImg[i].style.paddingTop = '10px';
            competenceImg[i].style.paddingBottom = '10px';
            competenceImg[i].style.transition = 'all 0.5s ease';
        } );
    }

    for (let i = 0; i < competenceImg.length; i++) {
        competenceImg[i].addEventListener('mouseover', function() {
            competenceImg[i].style.width = '90px';
            competenceImg[i].style.height = '90px';
            competenceImg[i].style.paddingTop = '5px';
            competenceImg[i].style.paddingBottom = '5px';
            competenceImg[i].style.transition = 'all 0.2s ease';
        } );
        competenceImg[i].addEventListener('mouseout', function() {
            competenceImg[i].style.width = '80px';
            competenceImg[i].style.height = '80px';
            competenceImg[i].style.paddingTop = '10px';
            competenceImg[i].style.paddingBottom = '10px';
            competenceImg[i].style.transition = 'all 0.2s ease';
        } );
    }

    var projetPlus = document.getElementsByClassName('plus');
    var projetMoins = document.getElementsByClassName('moins');
    for (let i = 0; i < projetPlus.length; i++) {
        projetPlus[i].addEventListener('click', function() {
            projetPlus[i].style.display = 'none';
            projetMoins[i].style.display = 'block';
            var projetDescriptionHidden = document.getElementsByClassName('projet_description_hidden');
            projetDescriptionHidden[i].style.display = 'block';
            projetDescriptionHidden[i].style.animation = 'fadeInUpDesc 0.3s forwards';
            var projetDescription = document.getElementsByClassName('projet_description');
            switch (i) {
                case 0:
                    projetDescription[i].style.height = '337.91px';
                    projetDescription[i].style.marginBottom = '10px';
                    break;
                case 3:
                    projetDescription[i].style.height = '245.76px';
                    break;
                default:
                    projetDescription[i].style.height = '215.04px';
                    break;
            }
        } );
        projetMoins[i].addEventListener('click', function() {
            projetPlus[i].style.display = 'flex';
            projetMoins[i].style.display = 'none';
            var projetDescriptionHidden = document.getElementsByClassName('projet_description_hidden');
            projetDescriptionHidden[i].style.display = 'none';
            projetDescriptionHidden[i].style.animation = 'fadeInDownDesc 0.1s forwards';
            var projetDescription = document.getElementsByClassName('projet_description');
            projetDescription[i].style.height = '122.88px';
            projetDescription[i].style.marginBottom = '20px';
        }
        );
    }
}
