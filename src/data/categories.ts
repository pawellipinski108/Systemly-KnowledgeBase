export interface Category {
	slug: string;
	title: string;
	description: string;
	icon: string;
	order: number;
}

export const categories: Category[] = [
	{
		slug: 'start-here',
		title: 'Start Here',
		description: 'New to Systemly? Start with these guides to set up your account and learn the basics.',
		icon: '🚀',
		order: 1,
	},
	{
		slug: 'tutorials',
		title: 'Tutorials',
		description: 'Step-by-step walkthroughs for common tasks like building funnels, sending campaigns, and more.',
		icon: '📖',
		order: 2,
	},
];
