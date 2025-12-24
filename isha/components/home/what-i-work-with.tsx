"use client";

import { motion } from "framer-motion";

const domains = [
	{
		icon: (
			<svg
				width="32"
				height="32"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				className="mx-auto mb-4 text-primary"
				aria-hidden="true"
			>
				<rect x="5" y="14" width="4" height="10" rx="2" />
				<rect x="14" y="8" width="4" height="16" rx="2" />
				<rect x="23" y="18" width="4" height="6" rx="2" />
			</svg>
		),
		title: "Data & Analytics",
		description:
			"Cleaning, organizing, and analyzing structured datasets to uncover patterns, trends, and meaningful insights that support informed decision-making.",
	},
	{
		icon: (
			<svg
				width="32"
			height="32"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				className="mx-auto mb-4 text-primary"
				aria-hidden="true"
			>
				<rect x="4" y="8" width="24" height="16" rx="4" />
				<rect x="8" y="12" width="6" height="8" rx="2" />
				<rect x="18" y="12" width="6" height="4" rx="2" />
			</svg>
		),
		title: "Dashboards & Visualization",
		description:
			"Designing interactive dashboards and visual reports using charts, filters, and KPIs to present data clearly and intuitively.",
	},
	{
		icon: (
			<svg
				width="32"
			height="32"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				className="mx-auto mb-4 text-primary"
				aria-hidden="true"
			>
				<ellipse cx="16" cy="9" rx="10" ry="4" />
				<path d="M6 9v8c0 2.2 4.5 4 10 4s10-1.8 10-4V9" />
				<path d="M6 17c0 2.2 4.5 4 10 4s10-1.8 10-4" />
			</svg>
		),
		title: "Backend & Databases",
		description:
			"Working with databases and backend logic to manage data storage, authentication, and reliable data retrieval workflows.",
	},
	{
		icon: (
			<svg
				width="32"
				height="32"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				className="mx-auto mb-4 text-primary"
				aria-hidden="true"
			>
				<path d="M6 22l7-7 5 5 8-8" />
				<circle cx="6" cy="22" r="1.5" />
				<circle cx="13" cy="15" r="1.5" />
				<circle cx="18" cy="20" r="1.5" />
				<circle cx="26" cy="12" r="1.5" />
			</svg>
		),
		title: "Financial & Market Analysis",
		description:
			"Analyzing financial, stock market, and sentiment data to generate comparative insights and understand market behavior.",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 32 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15 + 0.2,
			duration: 0.7,
			ease: [0.16, 1, 0.3, 1],
		},
	}),
};

export const WhatIWorkWith = () => (
	<section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-background" id="what-i-work-with">
		<div className="max-w-5xl mx-auto px-4 sm:px-6">
			<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-2">
				What I Work With
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
				{domains.map((domain, i) => (
					<motion.div
						key={domain.title}
						custom={i}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={cardVariants}
						className="group bg-background/80 border border-border rounded-2xl shadow-sm hover:shadow-lg p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col items-center text-center
              hover:scale-[1.025] focus-within:scale-[1.025]
              outline-none
              hover:border-primary/60 focus-within:border-primary/60
              hover:ring-2 hover:ring-primary/10 focus-within:ring-2 focus-within:ring-primary/10
              cursor-pointer
              select-none
              transition-all duration-300
              "
						tabIndex={0}
						aria-label={domain.title}
					>
						<div className="mb-2">{domain.icon}</div>
						<h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-foreground">
							{domain.title}
						</h3>
						<p className="text-foreground-600 text-xs sm:text-sm leading-relaxed">
							{domain.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);
