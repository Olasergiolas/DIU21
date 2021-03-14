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
				Family: "Conoció a su pareja, Alberto, hace 8 meses. Su familia siempre está ahí para apoyarla en todo lo que necesita",
				Location: "Barcelona",
				Character: "Le apasiona la cocina y escuchar la radio",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Descubrir la cocina de otras partes del mundo. Tiene un especial interés por la comida asiática",
				"Ser periodista de renombre y presentar el telediario en alguna de las principales cadenas de televisión",
				"Remodelar el salón de su casa y hacer algo más abierto y luminoso con colores claros y plantas decorativas",
				"Conocer a su ídolo, Iñaki Gabilondo"],
				Frustrations: ["Es muy inocente y le frustra que la gente se aproveche de ello, sobretodo le molestan las bromas pesadas\
				que le gastan sus compañeros de trabajo. Es por ello que está un poco quemada con su ambiente laboral actual.",
				"Le gustaría poder dedicarle más tiempo en sus ratos libres a mejorar sus habilidades en la cocina. Su trabajo en la Vanguardia\
				le consume todo su tiempo y energías",
				"El ruido y bullicio que hay en el centro de Barcelona comparado con la tranquilidad de su pueblo de toda la vida"],
				Bio: "Nacida en Martorell (Cataluña) en 1988. Es la pequeña de 2 hermanos, Bernat y ella. Bernat siempre le ha tenido un\
				cariño especial y ha sido como un padre para ella, ya que su padre, Andreu, se pasaba los días enteros fuera de casa en la\
				fábrica de Seat de Martorell donde él trabajaba. Clara, su madre, regentaba una panadería humilde en el pueblo. Fue allí \
				donde Isella comenzó a interesarse desde muy pequeña por el mundo de la panadería y en general, la cocina tras pasarse \
				incontables tardes observando a su madre amasar y hornear hogazas de pan y dulces de todo tipo por los que su madre era \
				conocida en el pueblo. Isella tuvo una infancia normal, su familia era de clase media y sus dos padres trabajaban por lo \
				que podían permitirse vivir sin problemas y con algún capricho ocasionalmente. En el colegio destacaba por ser muy \
				creativa y tener una capacidad de diálogo muy superior a los niños de su edad. Una vez ya en 1º de ESO, al darse cuenta\
				sus profesores de su facilidad para las letras, empezaron a mandarle tareas más avanzadas como la lectura de artículos \
				periodísticos o la escucha de programas de radio informativos. Fueron estas tareas las que despertaron su interés por \
				el periodismo. Escuchar programas de radio como el “Hoy por Hoy” de Iñaki Gabilondo o “La Radio de Julia” de Julia Otero \
				pasó a ser uno de sus pasatiempos favoritos. Isella terminó estudiando periodismo en lugar de su otro hobby de toda la \
				vida, la cocina. En parte, se arrepiente de esta decisión ya que encontrar un buen puesto de trabajo no le fue fácil. \
				Tras enganchar varios puestos mediocres como redactora en distintas televisiones provinciales durante años, a los 32 \
				consiguió un puesto de trabajo bien pagado en el diario la Vanguardia, por lo que se mudó a un piso en el centro de Barcelona, \
				donde conoció a su pareja, Alberto, a través de unos compañeros de trabajo. Aunque se siente realizada en su puesto actual, \
				en el futuro a Isella le gustaría dar el paso a la televisión en los telediarios de alguna de las grandes cadenas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Fue estafada organizando un viaje el año pasado por una supuesta compañía de vuelos que resultó\
				no existir. Desde entonces, siempre que intenta hacer una reserva online, termina abandonando el proceso a \
				la mitad por cualquier cosa que aprecie que le genere inseguridad. Aún así, Isella está ilusionada por organizar \
				un viaje con su pareja.",  
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