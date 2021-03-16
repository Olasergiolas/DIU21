/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.Aguacate";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Isella Sorní",
                Photo: "isella2.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Ve en la tele un anuncio de Lambus y le anima a probarlo para organizar las \
                vacaciones a Oslo que tenían previstas su pareja y él",
                touch1: "Televisión",
                feel1: "4",
                con1: "Es la primera vez que oye hablar de una aplicación del estilo y no sabe hasta \
                qué punto podría empeorar la experiencia de sus vacaciones si no funciona correctamente",
				ima1: "cartoon-planning.png",

                /*** PASO #2: DECICION ***/ 
                goal2: "Va a la Play Store de Google a descargar la aplicación",
                touch2: "Móvil (Play store)",
                feel2: "4",
                con2: "Mirando opiniones de la aplicación, ve la de un usuario descontento que ha tenido \
                una mala experiencia con ella en el pasado lo cual le hace dudar sobre si terminar usando \
                Lambus. Justo después, ve una respuesta del desarrollador comunicando que el problema que \
                tuvo el usuario descontento ha sido solucionado, así que Isella se anima a descargar la \
                aplicación porque además, la aplicación en general tiene muy buenas valoraciones",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Abre la aplicación, se registra con su cuenta de google y es bienvenida con una \
                pantalla que resume las distintas funciones de la aplicación",
                touch3: "Móvil (App de Lambus)",
                feel3: "3",
                con3: "La pantalla de bienvenida dice al final que Lambus no comparte datos del cliente \
                con terceros pero no dice nada sobre como tratan ellos los datos",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Isella empieza a observar y navegar por la aplicación, su objetivo es crear un \
                nuevo viaje para empezar a planificarlo",
                touch4: "Móvil (App de Lambus)",
                feel4: "2",
                con4: "La aplicación no le ofrece un tour sobre qué hacen los botones y  las distintas \
                pestañas de la aplicación, así que tras tocar distintos botones del menú, encuentra que \
                para añadir un viaje hay que utilizar el botón "+" de la pantalla principal",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Empieza a rellenar información básica sobre el viaje como nombre, fecha, duración \
                o acompañantes, con un procedimiento sencillo e intuitivo. Al terminar, puede añadir paradas \
                al viaje, guardar documentos, notas, fotos o registrar gastos",
                touch5: "Móvil (App de Lambus)",
                feel5: "3",
                con5: "No se fía de utilizar el almacén de fotos y documentos para guardar documentos con información \
                personal como reservas e identificaciones o fotos de personales",
                ima5: "cartoon-deciding.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Termina de organizar el itinerario del viaje tras haber añadido los distintos puntos de \
                parada en su fecha correspondiente",
                touch6: "Móvil (App de Lambus)",
                feel6: "4",
                con6: "La aplicación no permitía especificar hora para las distintas paradas, solo la fecha, así \
                que las ha añadido en las notas sobre la parada",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Monica Suarez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



