import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx'
import remarkGfm from 'remark-gfm'
import { basePath } from './base-path.mjs'
import rehypeImgSize from 'rehype-img-size'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import rehypeSlides from './rehype-slides.mjs'
import rehypeMermaid from 'rehype-mermaid'
import createMDX from '@next/mdx'
import emoji from 'remark-emoji'

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath,
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	images: {
		loader: 'custom',
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
	transpilePackages: ['next-image-export-optimizer'],
	env: {
		nextImageExportOptimizer_imageFolderPath: 'public/images',
		nextImageExportOptimizer_exportFolderPath: 'out',
		nextImageExportOptimizer_quality: '75',
		nextImageExportOptimizer_storePicturesInWEBP: 'true',
		nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
		nextImageExportOptimizer_generateAndUseBlurImages: 'true',
		nextImageExportOptimizer_remoteImageCacheTTL: '0',
	},
}

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
	components: { code: 'Code' },
	ignoreCode: (codeblock) => codeblock.lang === 'mermaid',
}

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [[remarkCodeHike, chConfig], remarkGfm, emoji],
		rehypePlugins: [
			rehypeSlides,
			rehypeMermaid,
			rehypeMdxImportMedia,
			rehypeImgSize,
		],
		recmaPlugins: [[recmaCodeHike, chConfig]],
		jsx: true,
	},
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
