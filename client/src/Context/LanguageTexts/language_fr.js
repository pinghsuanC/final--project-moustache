const t_fr = {
	home: {
		homeTitle: "Moustache",
		homeSubTitle: "Adoptez pour la vie.",
		homeMiddleIntro:
			"Nous somme un organisme de charité enregistré dédié au secours fèlin et basé à Montréal, opéré par un groupe de béénévoles amoureux des chats.",
		homeReadMore: "Lisez plus à propros de nous...",
		homeItems: {
			item1: { title: "La mission de Moustache", path_var: "about" },
			item2: { title: "L'adoption", path_var: "adoption" },
			item3: { title: "Nouvelles", path_var: "updates" },
			item4: { title: "Nos chats", path_var: "ourcats" },
			item5: { title: "Notre calendrier", path_var: "calendar" },
			item6: { title: "Équipe et contacts", path_var: "contact" },
			item7: { title: "Dons", path_var: "donation" },
			item8: { title: "Education et Ressources", path_var: "education" },
		},
		homeMiddleDonate:
			"Si vous aimez notre travail, svp pensez à nous supporter en donnant ou en vous impliquant comme bénévole.",
		homeDonation: {
			donate:
				"Si vous aimez notre travail, svp pensez à faire un don, pour que nous puissions continuer notre mission.  SVP aidez-nous à sauver une vie!",
			button: "Donner",
		},
	},

	about: {
		aboutUs: "À propros de nous...",
		aboutLegal: "Information légale",
		aboutNP: "Numéro d’entreprise du Québec OBNL",
		aboutCH: "Organisme de charité ARC",
		aboutIntroTitle: "Notre mission",
		aboutLinkTitle: "Contactez-nous",
		aboutIntro: {
			aboutIntro1:
				"Nous offrons une alternative simple et conviviale pour que des animaux puissent être adoptés au lieu d'aller mourir dans une fourrière ou de traîner pendant des années dans un refuge.",
			aboutIntro2: `Nous aidons des chats abandonnés à trouver de nouvelles familles en organisant des journées d'adoption 3 samedis par mois en moyenne.  Ces journées d'adoption prennent place principalement au sein de boutiques pour animaux à Montréal (voir la page "Évènements" pour dates).`,
			aboutIntro3:
				"Nous stérilisons des chats errants pour éviter la surpopulation féline dans la région du Grand Montréal et environs (TNRM).",
			aboutIntro4:
				"Même si nous hébergeons en moyenne une quarantaine de chats en famille d'accueil, nous essayons autant que possible d'assurer que les personnes qui trouvent ou abandonnent les chats continuent d'en prendre soin jusqu'à ce que nous puissions leur trouver un foyer temporaire ou permanent",
			aboutIntro5:
				"Moustache n'a pas de refuge et un nombre limité de familles d'accueil.  Nous sommes donc toujours à la recherche de familles d'accueil.",
			aboutIntro6:
				"Moustache Adoptions ne capture pas les chats errants sur demande et n'accepte pas de mettre des chats sauvages ou semi-sauvages en adoption.",
		},
	},
	DonationT: {
		DTitle: "FR: Donation and income tax receipt",
		DInfo:
			"FR:  We currently only accept e-transfer. If you would like to donate, please send your donation to PLACE_HOLDER . Please also fill the form below and press the submit button so that we can identify and send you your income tax receipts!",
		DFormInfo: {
			DFormTitle: "FR: Form for donation",
			DFormLabels: [
				"FR: First name",
				"FR: Last name",
				"FR: Civic Address",
				"FR: City",
				"FR: Province",
				"FR: Email",
			],
			DFormVars: [
				"FR: firstName",
				"FR: lastName",
				"FR: civicAddress",
				"FR: city",
				"FR: province",
				"FR: email",
			],
			DFormBtnT: "FR: Submit",
			confirmFormT: {
				confirmTitle: "FR: Please confirm your information!",
				btnT: { confirm: "FR: CONFIRM", cancel: "FR: CANCEL" },
			},
		},
		emailSendStatus: {
			emailSendSuccess:
				"FR: The information was sent successfully. We will verify the information and get back to you ASAP",
			emailSendFail:
				"FR: The information wasn't sent successfully (maybe due to server error). Please consider email the information directly to us!",
		},
	},
	volunteerT: {
		volTitle:
			"Nous apprécions beaucoup votre aide. Si vous voulez nous aider, svp regardez ci-dessous comment vous pourriez le faire!",
		volCat: {
			0: {
				type: "Conducteurs",
				description:
					"transporter des chats, des médicaments et autres fournitures",
				requirement:
					"Être à Montréal ou près des ponts Champlain, Victoria, Jacques-Cartier ou du tunnel Louis-H Lafontaine,avoir un permis de conduire valide, un véhicule immatriculé et un téléphone cellulaire",
			},
			1: {
				type: "Vendeurs",
				description: "vendre des livres ou d'autres articles sur internet.",
				requirement:
					"Avoir un véhicule pour ramasser les items et un téléphone cellulaire.",
			},
			2: {
				type: "Agent d'adoption",
				description: "Aider au processus d'adoption",
				requirement: "Parler et écrire couramment le français et l'anglais",
			},
			3: {
				type: "Déballeurs / empaqueteurs aux ventes de garage",
				description: "installer et ramasser nos ventes de garage",
				requirement: "Avoir une bonne forme physique.",
			},
			4: {
				type: "Assistants pour journées d'adoption",
				description:
					"à installer les cages le vendredi ou à ramasser et faire la lessive après la journée d'adoption et la retourner ensuite",
				requirement:
					"Pour monter les cages, être en bonne forme physique et pour la lessive, posséder un véhicule, une laveuse et une sécheuse ou une corde à linge",
			},
		},
		fosterT: {
			fosterTitleT:
				"FR: We are absolutely also looking for foster homes. Please see below for more detailed information on fostering.",

			fosterProvideT: {
				fosterPTitle:
					"FR: What we provide, and what we need the foster home to provide",
				provideTableHeader: ["Moustache", "FR: Foster home"],
				moustacheP: [
					"FR: Food",
					"FR: Medication and vet care",
					"FR: Adoption process",
					"FR: Litter box and scoop",
					"FR: Cat carrier",
					"FR: Bowls",
					"FR: Toys",
					"FR: Counselling on behavioural issues",
				],
				fosterP: [
					"FR: Litter filler",
					"FR: Daily care",
					"FR: Affection",
					"FR: Socialization when required",
				],
			},
			fosterTypeT: {
				fosterTypesTitle: "FR: Here are some possible types of fosters",
				fosterTypes: [
					{
						type: "FR: Beginner",
						description:
							"FR: to house a cat that is already socialized and requires no special care other than pills or other simple medication",
					},
					{
						type: "FR: Intermediate",
						description:
							"FR: to house a cat that needs to improve its socialization skills or that requires several medications or treatments (diabetes, thyroid issues, ...)",
					},
					{
						type: "FR: Experienced",
						description:
							"FR: to do the socialization process from the start. You need to have done it before and have a good knowledge of cat psychology and common behaviour issues.",
					},
					{
						type: "FR: Quarantine foster homes",
						description:
							"FR: you need a small easy to clean room with a window or an extra large dog crate and experience in manipulating not yet socialized cats, giving medication etc. These foster homes receive the cats that were just received until they see the vet. We normally go to the vet every Wednesday. They may return to quarantine if they have rhino or another problem.",
					},
					{
						type: "FR: Short-term foster homes",
						description:
							"FR: to foster cats while their foster home are away on vacation.",
					},
					{
						type: "FR: Relay",
						description:
							"FR: to house for a few days or a few hours cats that are in transit between two locations as the whole trip is not done by the same volunteer. For example, a volunteer picks up a few cats from Montréal during the day and brings them to a relay from where a second volunteer will pick them up after work to bring them to the vet.  For short relay the cats stay in their carriers.  For longer relay you need a bathroom or small easy to clean room or an extra-large dog crate of at least 5 feet long.",
					},
				],
			},
		},
	},
	vItemTxt: {
		typeT: "",
		descriptionT: "Vous nous aiderez à...",
		requirementT: "Vous aurez besoin de...",
	},
	nav: {
		nav1: { title: "Menu principal", path_var: "" },
		nav2: { title: "À propos de nous", path_var: "about" },
		nav3: { title: "Donner", path_var: "donation" },
		nav4: { title: "Adoption", path_var: "adoption" },
		nav5: { title: "Nos chats", path_var: "ourcats" },
		nav6: { title: "Événements", path_var: "calendar" },
		nav7: { title: "Nouvelles", path_var: "updates" },
		nav8: { title: "Contactez-nous", path_var: "contact" },
		nav9: { title: "Éducation", path_var: "education" },
		nav10: { title: "Bénévolat", path_var: "volunteer" },
		nav11: { title: "Se connecter", path_var: "login" },
		language_en: "EN",
		language_fr: "FR",
	},
	ourcatsT: {
		success: {
			0: "Jusqu'à maintenant nous avons aidé ",
			1: " chats à trouver un foyer permanent sur PetFinder!",
		},
		adoptable:
			"SVP allez voir ci-dessous nos chats actuellement disponibles pour adoption!  Si vous avez des questions sur le processus d'adoption, svp cliquez sur l'onglet Adoption pour le processus et les frais.",
	},
	catTabT: {
		appearance: {
			title: "Apparence",
			hair: "Poil",
			colors: "Couleurs",
		},
		health: {
			title: "Santé et psychologie",
			declaw: "Dégriffé",
			house: "Habitué à vivre dans la maison",
			shot: "Vacciné",
			sterilize: "Stéerilisé",
			special: "Besoin spéciaux",
		},
		friendly: {
			title: "S'entend bien avec",
			cats: "Chats",
			dogs: "Chiens",
			children: "Jeunes enfants",
		},
		click: {
			click0: "Cliquer pour parrainer ou voir plus de détails ",
			click1: "sur Petfinder",
		},
	},
	ourCalT: {
		pageTitle: "Cliquez sur date avec une épingle pour voir l'événement!",
		addEventT: {
			title: "Ajouter un événement au calendrier",
			selectedDate: "Date choisie: ",
			location: "Lieu: ",
			startT: "Heure de début: ",
			endT: "Heure de efin: ",
			description: "Description: ",
			addEventBtn: "Ajouter un événement",
		},
		dateEventT:
			"Le(s) événement(s) du jour sélectionné sont affichés ci-dessous.",
		dateEventAllT: "Tous les événements sont affichés ci-dessous.",
	},
	confirmEventT: {
		title: {
			title0: "Êtes-vous sertain de vouloir ",
			title1: " l'événement suivant?  Cliquez oui pour ",
		},
		labelT: {
			title: "Titre",
			type: "Type",
			location: "Lieu",
			startT: "Heure de début",
			endT: "Heure de fin",
			description: "Description",
			date: "Date",
		},
		btnT: {
			confirm: "Oui",
			cancel: "Non",
		},
		typeT: {
			add: "ajouter",
			cancel: "annuler",
		},
	},
	calendarEventT: {
		title: { title0: "Événement ", title1: "le " },
		labelT: {
			title: "Titre",
			type: "Type",
			location: "Lieu",
			startT: "Heure de début",
			endT: "Heure de fin",
			description: "Description",
			date: "Date",
		},
		btnT: {
			cancel: "Annuler",
		},
		typeT: {
			add: "Ajouter",
			delete: "Supprimer",
		},
	},
	postT: {
		singlePostT: {
			postedOn: "Affiché le: ",
			postedBy: "Affiché par: ",
			btnDelete: "Supprimer",
		},
	},
	confirmPostT: {
		title: {
			title0: "Êtes-vous certain de vouloir ",
			title1: "afficher? Cliquez pour ",
		},
		labelT: {
			title: "Titre",
			content: "Contenu",
		},
		btnT: {
			confirm: "Ouis",
			cancel: "Non",
		},
		typeT: {
			add: "ajouter",
			delete: "supprimer",
		},
	},
	addPostT: {
		titleT: "Que se passe-t-il?",
		placeholderT: {
			addTitle: "Donnez un titre à votre message",
			addContent:
				"Entrez votre message ici... Ajoutez un '\n' à la fin de chaque paragraph pour les séparer.",
		},
		addBtn: "Message",
	},

	eduTxt: {
		title:
			"Svp regardez ci-dessous pour des liens utiles et des vidéos youtube sur l'éducation des chats. L'ordre d'affichage est arbitraire!",
		titleLink: "Quelques liens utiles",
		titleVideos:
			"Quelques youtubeurs que nous vous recommendons de regarder si vous voulez adopter ou héberger temporairement des chats",
	},
	channelTabTxt: {
		tagTitle: "Mots-clés",
	},
	logInTxt: {
		RestrictionT:
			"Seuls les membres de Moustache adoption de chat peuvent se connecter. Si vous êtes un membre et que vous désirez vous connecter, svo contactez un administrateur pour obtenir l'autorisation.",
		userCurrentT: "Usager connecté",
		logT: { logOptions: "Options de connexion", logOut: "Déconnexion" },
		options: { optionGoogle: "GOOGLE" },
	},
	adoptionTxt: {
		title: "Frais et procédure d'adoption",
		introT: {
			introTitle: "Pourquoi demandons-nous des frais d'adoption?",
			introContent:
				"Pour couvrir une partie de nos frais, et ainsi sauver plus de chats! Nous utilisons les fonds ainsi recueillis pour payer les frais vétérinaires, la nourriture et nos autres dépenses. Ces frais sont cruciaux pour continuer notre mission. Ces frais sont aussi un symbole de l'egagement de l'adoptant d'accueillir le chat comme un membre de la famille.",
		},
	},
	adoptionFeeTxt: {
		title: "FR General Fee Table",
		tableTHeader: { title_type: "Les chats", title_price: "Frais" },
		tableT: [
			{ thT_type: "Les chatons en bas de 8 mois", tdT_price: 250 },
			{ thT_type: "Les chats plus de 8 mois jusqu'à 7 ans", tdT_price: 220 },
			{ thT_type: "Les chats de plus de 7 ans", tdT_price: 180 },
			{ thT_type: "Les chats de 10 ans et plus", tdT_price: 140 },
			{ thT_type: "Les chats FIV+ en bonne santé", tdT_price: 150 },
			{
				thT_type:
					"Adoption de compassion pour chats ayant des besoins spéciaux",
				tdT_price: 100,
			},
		],
		tableSpecialT:
			"Il peut y avoir des cas spéciaux, consultez la description de chaque chat pour les détails!",
	},
	adoptionProcedureTxt: {
		title: "Si un chat vous intéresse",
		content:
			"Si un chat vous intéresse, laissez-nous savoir en nous contactant au PLACE_HOLDER et...",
		contentProcess: [
			"Demandez notre formulaire de demande d'adoption.",
			"Si votre demande d'adoption est approuvée, nous vous inviterons à venir rencontrer le ou les chats qui vous intéressent.",
			"Une fois approuvé et le chat rencontré, nous vous demanderons ensuite de signer un contrat d'adoption contenant les règles à respecter avant de pouvoir conclure l'adoption.",
		],
	},
	contactTxt: {
		title: "FR: Please email PLACE_HOLDER for any inquires!",
		titleSub: {
			fb: "FR: Follow us on Facebook for latest updates",
			pf: "FR: See full info of our cats on Petfinder",
		},
		emailT: {
			btnT: "FR: Click to open your mailbox",
			subject: "FR: Email sent from Moustache webpage",
			content: "FR: Hi, I am sending the email because:",
		},
	},
};

export default t_fr;
