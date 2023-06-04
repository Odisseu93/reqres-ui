'use client';

import { ReactNode, useEffect, useState } from 'react';

type LoadingProps = {
	children: ReactNode,
	time: number,
	color: string,
	bg: string,
	width: number | string,
	height: number | string,
	cls?: string
};

export default function Loading({ children, time, color: spinnerColor, bg, width, height, cls }: LoadingProps) {
	const [isLoading, setIsLoading] = useState(true);
	const handleLoadindTime = (time: number) => {
		setTimeout(() => setIsLoading(false), time);
		return;
	};

	function Spinner() {
		return (
			<div
				className={`${!cls ? '' : cls} bg-${bg.includes('#') ? `[${bg}]` : bg}`}
				style={{
					width: `${typeof width === 'number' ? `${width}px` : width}`,
					height: `${typeof height === 'number' ? `${height}px` : height}`
				}}
			>
				<svg className={`w-12 h-12 animate-spin text-${spinnerColor.includes('#') ? `[${spinnerColor}]` : spinnerColor}`}
					viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M12 4.75V6.25" stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round">
					</path>
					<path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round">
					</path>
					<path d="M19.25 12L17.75 12" stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round">
					</path>
					<path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round">
					</path>
					<path d="M12 17.75V19.25" stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round">
					</path>
					<path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round">
					</path>
					<path d="M6.25 12L4.75 12" stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round">
					</path>
					<path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round">
					</path>
				</svg>
			</div>
		);
	}

	useEffect(() => handleLoadindTime(time), [time]);

	return (
		<>
			{!isLoading ?
				children
				: <Spinner />
			}
		</>
	);
}