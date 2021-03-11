/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.Aguacate";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Isella Sorní",
				Photo: "isella2.jpg",
				Quote: "Si es cierto lo de que los errores te hacen más fuerte, yo sería campeona de halterofilia",
				Age: 33,
				Occupation: "Periodista",
				Family: "Conoció a su pareja, Alberto, hace 6 meses. Su familia siempre está ahí para apoyarla en todo lo que necesita",
				Location: "Armilla (Granada)",
				Character: "Le apasiona la cocina y aprovechar su tiempo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Descubrir la cocina de otras partes del mundo", "Seguir mejorando su situación laboral"],
				Frustrations: ["Es muy inocente y le frustra que la gente se aproveche de ello",
				 "Le gustaría poder dedicarle más tiempo a la cocina"],
				Bio: "Nacida en Badalona, Isella terminó estudiando periodismo en lugar de su otro hobby de toda la \
				vida, la cocina. Isella en parte se arrepiente de esta decisión ya que encontrar un buen puesto de \
				trabajo no fue fácil. Tras enganchar varios puestos mediocres en distintas televisiones provinciales \
				durante años, consiguió un puesto de trabajo bien pagado en el diario Ideal de Granada, por lo que se \
				mudó a un piso en el centro de Armilla, donde conoció a su pareja, Alberto, a través de unos compañeros de trabajo.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Fue estafada organizando un viaje en el pasado por una supuesta compañía de vuelos que resultó\
				no existir. Desde entonces, siempre que intenta hacer una reserva online, se termina saliendo a mitad del \
				proceso por cualquier cosa que aprecie que le chirríe. Aún así, Isella lo sigue intentando porque desea \
				realizar un viaje con su pareja.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Onesífero de los Ríos",
				Photo: "onesifero.jpg",
				Quote: "Siempre hay que ir con el tiro perro y medio más adelante",
				Age: 56,
				Occupation: "Pescadero",
				Family: "Lleva casado desde hace 31 años con su esposa Uxía. Tienen 4 hijos: 3 independizados de 30,27 y 24 años y una niña de 14",
				Location: "Manzalvos (Ourense)",
				Character: "Familiar, tozudo y trabajador",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Vivir sin preocupaciones en el pueblo junto con su familia", "Construir un caserío en el pueblo", "Ver a su hija graduarse en la universidad"],
				Frustrations: ["Odia ver a su hija la mayor parte del tiempo pegada a una pantalla", "Llegar justo a fin de mes, por las facturas y compras de comida", "Le cuesta ponerse de acuerdo con Uxía para tomar decisiones "],
				Bio: "Lleva toda la vida viviendo en Manzalvos. Trabaja desde los 14, principalmente como peón en construcción hasta los 27 cuando estableció su pescadería en el pueblo. A través de amigos de un pueblo cercano (Cádavos) conoció a Uxía. Tras 1 año de noviazgo se casaron y tuvieron a su primer hijo. Pocos años después tuvieron otros dos hijos y casi diez años después inesperadamente a la menor. Actualmente vive por y para su negocio con la ayuda de Uxía para sacar a la familia adelante ",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 1 },
					{ Name: "RRSS", Value: 0 },
					{ Name: "Software", Value: 0 }
					
				], 
                Contextos:   "Tras varios años sin disfrutar de unas vaciones, busca organizar un viaje en familia para pasar tiempo con su hija pequeña y Uxía y evadirse de los problemas del negocio " ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 0 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])