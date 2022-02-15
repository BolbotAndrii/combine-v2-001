import React, { createContext } from 'react'

const Context = createContext(null)


const data = {
	menu: {
			registrar: [],
			cloudflare: [
				{
					id: 1,
					nameEn: 'Add',
					nameRu: 'Добавить',
					path: '/cloudflare/add',
					state: 'cloudflare',
					perm: ['administrator']
				},
				{
					id: 2,
					nameEn: 'Accounts',
					nameRu: 'Все аккаунты',
					path: '/cloudflare',
					state: 'cloudflare',
					perm: ['administrator']
				}
			],
			keitaro: [
				{
					id: 1,
					nameEn: 'Campaigns',
					nameRu: 'Кампании',
					path: '/keitaro/campaigns',
					state: 'campaigns',
					perm: ['administrator']
				},
				{
					id: 2,
					nameEn: 'Landings',
					nameRu: 'Лендинги',
					path: '/keitaro/landings',
					state: 'landings',
					perm: ['administrator']
				},
				{
					id: 3,
					nameEn: 'Offers',
					nameRu: 'Офферы',
					path: '/keitaro/offers',
					state: 'offers',
					perm: ['administrator']
				},
				{
					id: 4,
					nameEn: 'Domains',
					nameRu: 'Домены',
					path: '/keitaro/domains',
					state: 'domains',
					perm: ['administrator']
				}
			],
			qiwi: [
				{
					id: 1,
					nameEn: 'Wallets',
					nameRu: 'Кошельки',
					path: '/qiwi',
					state: 'wallets',
					perm: ['administrator']
				},
				{
					id: 2,
					nameEn: 'Cards',
					nameRu: 'Карты',
					path: '/qiwi/cards',
					state: 'cards',
					perm: ['administrator']
				},
				{
					id: 3,
					nameEn: 'Logs',
					nameRu: 'Логи',
					path: '/qiwi/logs',
					state: 'logs',
					perm: ['administrator']
				}
			],
			users: [
				{
					id: 1,
					nameEn: 'Users',
					nameRu: 'Все пользователи',
					path: '/users',
					state: 'users',
					perm: ['administrator']
				},
				{
					id: 2,
					nameEn: 'Add user',
					nameRu: 'Добавить',
					path: '/users/create',
					state: 'users',
					perm: ['administrator']
				},
				{
					id: 3,
					nameEn: 'Create groups',
					nameRu: 'Группы',
					path: '/users/groups/create',
					state: 'users',
					perm: ['administrator']
				},
				{
					id: 4,
					nameEn: 'All groups',
					nameRu: 'Группы',
					path: '/users/groups',
					state: 'users',
					perm: ['administrator']
				}
			],
			apps: [
				{
					id: 1,
					nameEn: 'Applications',
					nameRu: 'Приложения',
					path: '/apps',
					state: 'apps',
					perm: ['administrator']
				},
				{
					id: 2,
					nameEn: 'Add application',
					nameRu: 'Добавить',
					path: '/apps/create',
					state: 'apps',
					perm: ['administrator']
				},
			],
			shop: [
				{
					id: 1,
					nameEn: 'Catalog',
					nameRu: 'Каталог',
					path: '/shop',
					state: 'shop',
					perm: [
						'administrator',
						'buyer',
						'financier-admin',
						'buyer-lead',
						'user',
						'shop-admin'
					]
				},
				{
					id: 2,
					nameEn: 'Products',
					nameRu: 'Товары',
					path: '/shop/products',
					state: 'shop',
					perm: [
						'administrator',
						'shop-admin'
					]
				},
				{
					id: 3,
					nameEn: 'Orders',
					nameRu: 'Заказы',
					path: '/shop/orders',
					state: 'shop',
					perm: [
						'administrator',
						'shop-admin'
					]
				}
			]
		},
	sidebar: [
		{
			id: 1,
			nameEn: 'Registrator',
			nameRu: 'Регистратор',
			description: 'Get a better understanding of where your traffic is coming from.',
			href: '/registrar',
			state: 'registrar',
			icon: 'domain'
		},
		{
			id: 2,
			nameEn: 'Cloud Flare',
			nameRu: 'Cloud Flare',
			description: 'Speak directly to your customers in a more meaningful way.',
			href: '/cloudflare',
			state: 'cloudflare',
			icon: 'security'
		},
		{
			id: 3,
			nameEn: 'Keitaro',
			nameRu: 'Keitaro',
			description: 'Connect with third-party tools that you\'re already using.',
			href: '/keitaro',
			state: 'keitaro',
			icon: 'language'
		},
		{
			id: 4,
			nameEn: 'Qiwi',
			nameRu: 'Qiwi',
			description: 'Build strategic funnels that will drive your customers to convert',
			href: '/qiwi',
			state: 'qiwi',
			icon: 'attach_money'
		},
		{
			id: 5,
			nameEn: 'Users',
			nameRu: 'Пользователи',
			description: 'Build strategic funnels that will drive your customers to convert',
			href: '/users' ,
			state: 'users',
			icon: 'people'
		},
		{
			id: 6,
			nameEn: 'Applications',
			nameRu: 'Applications',
			description: 'Build strategic funnels that will drive your customers to convert',
			href: '/apps',
			state: 'apps',
			icon: 'apps'
		},
		{
			id: 7,
			nameEn: 'Shop',
			nameRu: 'Shop',
			description: 'Build strategic funnels that will drive your customers to convert',
			href: '/shop',
			state: 'shop',
			icon: 'shopping_cart'
		},
	]
}


const CustomContext = ( { children } ) => {
	return (
		<Context.Provider value={ data }> { children } </Context.Provider>
	)
}



export { CustomContext, Context }