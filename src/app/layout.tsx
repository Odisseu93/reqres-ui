import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title : 'ReqResUI - A intuitive interface to interact with the ReqRes API',
	description: 'ReqResUI is a user interface built using Next.js, Tailwind CSS, and TypeScript. It provides a sleek and intuitive interface to interact with the ReqRes API',
	authors: { name: 'Ulisses Silvério' },
};


export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<link rel="shortcut icon" href="/assets/img/favicon.svg" type="image/x-icon" />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
