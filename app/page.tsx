export default function Home() {
	return (
		<main className="min-h-screen bg-base-200 p-8">
			<div className="mx-auto max-w-3xl space-y-8">
				{/* Hero */}
				<div className="text-center">
					<h1 className="text-4xl font-bold text-base-content">Next.js Boilerplate</h1>
					<p className="mt-2 text-base-content/70">Next.js 16 + Bun + TailwindCSS v4 + DaisyUI v5 + Biome</p>
				</div>

				{/* Badges */}
				<div className="flex flex-wrap justify-center gap-2">
					<span className="badge badge-primary">Next.js 16</span>
					<span className="badge badge-secondary">React 19</span>
					<span className="badge badge-accent">TailwindCSS v4</span>
					<span className="badge badge-info">DaisyUI v5</span>
					<span className="badge badge-warning">Biome</span>
					<span className="badge badge-success">Bun</span>
				</div>

				<div className="divider" />

				{/* Feature Card */}
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Getting Started</h2>
						<p>
							Edit <code className="rounded bg-base-300 px-1.5 py-0.5">app/page.tsx</code> to start
							building your application.
						</p>
						<div className="card-actions mt-4 justify-end">
							<a
								href="https://nextjs.org/docs"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary"
							>
								Next.js Docs
							</a>
							<a
								href="https://daisyui.com"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-secondary"
							>
								DaisyUI Docs
							</a>
							<a
								href="https://tailwindcss.com/docs"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-accent"
							>
								Tailwind Docs
							</a>
						</div>
					</div>
				</div>

				{/* Alert */}
				<div role="alert" className="alert alert-info">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="h-6 w-6 shrink-0 stroke-current"
						aria-label="Info"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>This boilerplate includes auto dark mode. Toggle your OS theme to see it in action.</span>
				</div>

				{/* Tech Stack */}
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Tech Stack</h2>
						<div className="overflow-x-auto">
							<table className="table">
								<thead>
									<tr>
										<th>Component</th>
										<th>Role</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="font-medium">Bun</td>
										<td>Package manager & runtime</td>
									</tr>
									<tr>
										<td className="font-medium">Next.js 16</td>
										<td>SSR framework (App Router, Turbopack)</td>
									</tr>
									<tr>
										<td className="font-medium">React 19</td>
										<td>UI library</td>
									</tr>
									<tr>
										<td className="font-medium">TypeScript 5</td>
										<td>Type safety (strict mode)</td>
									</tr>
									<tr>
										<td className="font-medium">TailwindCSS v4</td>
										<td>Utility-first CSS</td>
									</tr>
									<tr>
										<td className="font-medium">DaisyUI v5</td>
										<td>Component library</td>
									</tr>
									<tr>
										<td className="font-medium">Biome</td>
										<td>Linter + Formatter</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
